## Transcription Ensemble: Experiments, Lessons, and Next Steps

### TL;DR
- Anchor to diarized ASR (AssemblyAI) for structure; edit only low-confidence or high-disagreement spans.
- Use phrase/weighted voting for content continuity; gate interjections with boundary + evidence (agreement or micro‑check).
- Keep selective LLM edit-only, time-bounded, and applied sparingly.
- Add guardrails: idiom freezing, n‑gram de‑dup, utterance length bounds, domain-gated normalization.

### Current Adaptive Pipeline (at a glance)
```mermaid
flowchart TB
    A[Audio Input] --> B[Gemini Context]
    B --> C[Per-audio Glossary
    (entities, catchphrases,
    rare terms)]
    C --> D[AAI Transcribe
    (speaker_labels ON,
    word_boost + custom_spelling)]
    A --> E[OpenAI Transcribe]
    A --> F[Gemini Transcribe]

    subgraph G[Segmentation & Evidence]
      D1[AAI Utterances + Word Conf] --> H
      E1[OAI Text] --> H
      F1[Gemini Text] --> H
      H[Disagreement Scores
      + Boundary Detection]
    end

    subgraph R[Reconciliation]
      R1[Anchor: Keep high‑conf AAI tokens]
      R2[Phrase/Weighted Voting
      for content spans]
      R3[Interjection Gate
      (boundary + 2-of-3 or micro‑check)]
      R4[Selective LLM (edit‑only)
      on residual hard utterances
      (timeouts)]
    end

    H --> R1 --> R2 --> R3 --> R4 --> S[Post‑processing Guards]

    subgraph S2[Guards]
      S1[N‑gram de‑dup] --> S3
      S3[Idiom Freeze (e.g., "don't panic")] --> S4
      S4[Utterance length bounds ~85–115%] --> S5
      S5[Domain‑gated normalization
      (D'oh!, Woo‑hoo!, brand casing)]
    end

    S --> T[Speaker‑preserving Assembly]
    T --> U[UI: Full transcripts, speaker view,
    diffs, metrics]
```

### What the experiments showed

- Interjections need evidence, not just boundaries
  - Confidence‑Weighted Voting successfully inserted “D’oh!” at a boundary but broke “Don’t panic.” → “D’oh! panic.”
  - Lesson: boundary heuristics alone are brittle; add lexical/semantic guards and require supporting signals (e.g., 2‑of‑3 model hint or a short acoustic micro‑check) before overriding.

- Phrase/Weighted Voting preserve flow better
  - Simple/phrase/weighted voting retained “Dad may have gained a little weight … Oh, the trash …” with fewer odd insertions.
  - Lesson: use phrase‑level/weighted consensus to keep continuity; apply deterministic guards afterwards to remove duplicates and normalize.

- Anchor + Freeze prevents regressions
  - High‑confidence AAI tokens and high‑agreement n‑grams (idioms like “don’t panic”) should be frozen (read‑only) during edits.
  - Lesson: introduce a “do‑not‑edit” mask for idioms and for spans with both high confidence and high inter‑model agreement.

- Selective LLM should be surgical and time‑bounded
  - Long runs add latency, and global LLM reconciliation risks over‑editing.
  - Lesson: apply LLM only to residual hard utterances (low confidence AND low agreement), with per‑utterance and total timeouts, and strict length/format guards.

### Concrete guardrails to keep

- Evidence‑gated interjections
  - Allow D’oh‑like insertions only if: boundary + (2‑of‑3 model hint OR micro‑check on 300–800ms slice) + not part of a protected idiom.

- Idiom freeze
  - Protect common collocations and idioms (e.g., “don’t panic”) and high‑agreement n‑grams from edits.

- Local de‑dup and bounds
  - Apply sliding‑window n‑gram de‑dup after each edit phase; cap utterance length to ~85–115% of the AAI anchor.

- Domain‑gated normalization
  - Normalize only on low‑confidence spans and only when the domain supports it (e.g., Simpsons → D’oh!, Woo‑hoo!).

### Updated decision policy (simple and effective)

1) Always anchor to AAI:
   - Keep tokens with confidence ≥ threshold.
   - Build a small do‑not‑edit mask for idioms and high‑agreement phrases.

2) Content spans (non‑interjection):
   - Use phrase/weighted voting; then run local de‑dup and bounds.

3) Interjection spans (utterance/sentence start):
   - Require boundary + evidence (2‑of‑3 or micro‑check) before inserting,
   - Skip if the next bigram is protected (e.g., “don’t panic”).

4) Residual hard utterances:
   - Use selective LLM (edit‑only), strict length guard, timeouts, and deterministic normalization at the end.

### Why this generalizes beyond Simpsons
- The same signals (confidence, cross‑model agreement, lexical/idiom detection) are domain‑agnostic.
- Glossary creation from context + early transcripts improves base ASR in any domain (legal, medical, meetings).
- The policy separates interjections from content editing, reducing collateral errors.

### Minimal next steps (high‑ROI)
- Add idiom/protected‑bigram list + high‑agreement freeze mask.
- Gate D’oh‑like replacements with 2‑of‑3/corroboration and micro‑check.
- Add short sliding‑window de‑dup post‑edit.
- Enforce per‑utterance and total LLM timeouts; fall back to voting.

### Observability
- Log each edit decision with: span type (content vs interjection), evidence (confidence, agreement, micro‑check), guard outcomes, and time spent.
- Keep runId/expLabel across UI and API for quick A/B review.

### Appendix: Evidence signals we use
- Per‑word confidence (AAI); per‑utterance average with distribution.
- Inter‑model agreement: token/phrase Jaccard and alignment votes.
- Boundary detection: utterance/sentence starts from AAI/heuristics.
- Domain/context signals: Gemini entities + frequent n‑grams.


