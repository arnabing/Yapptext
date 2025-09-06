// Auto-generated sample transcript data
// Generated on: 2025-09-04T16:51:58.573Z

export interface SampleTranscript {
  name: string
  displayName: string
  fileName: string
  description: string
  duration: string
  transcript: {
    text: string
    words: number
    utterances: Array<{
      speaker: string
      text: string
      start: number
      end: number
      confidence: number
      words?: Array<{
        text: string
        start: number
        end: number
        confidence: number
        speaker: string
      }>
    }>
    chapters: Array<{
      headline: string
      summary: string
      start: number
      end: number
      gist: string
    }>
    allWords: Array<{
      text: string
      start: number
      end: number
      confidence: number
      speaker: string
    }>
    sentimentAnalysis: Array<{
      text: string
      sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL'
      confidence: number
      start: number
      end: number
    }>
    keyPhrases: string[]
    duration: number
    language: string
    confidence: number
  }
}

export const SAMPLE_TRANSCRIPTS: Record<string, SampleTranscript> = {
  "i_have_a_dream": {
    "name": "i_have_a_dream",
    "displayName": "I Have a Dream",
    "fileName": "I Have a Dream.mp3",
    "description": "MLK's historic speech",
    "duration": "17 min",
    "transcript": {
      "text": "I have the pleasure to present to you Dr. Martin Luther King Geior. I am happy to join with you today in what will go down in history as a greatest demonstration for freedom in the history of our nation. Five score years ago, a great American in whose symbolic shadow we stand today signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. But 100 years later, the Negro still is not free. 100 years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. 100 years later, the Negro lives on a lonely island of poverty. I have a dream that one day this nation will rise up and live out the true meaning of its creed. We hold these truths to be self. Evident that all men are created equal. I have a dream that one day on the red hills to joy. Sons. Of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. I have a dream my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. I have a dream. I have a dream that one day down in Alabama with its vicious races with its governor having his lips dripping with the words of interposition and nullification, one day, right now in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. I have a dream today. I have a dream that one day every valley shall be exalted and every hill and mountains shall be made low. The rough places will be made plain and the crooked places will be made straight. And the glory of the Lord shall be revealed and all flesh shall see it together. This is our hope. This is the faith that I go back to the Southt with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day if be la this will be the day with all of God's children Be able to sing with new meaning. My country tears of thee Sweet land of liberty of the I sing Land where my fathers died Land of the pilgrim'pride from every mountainside let freedom ring. And if America is to be a great nation, this must become true. And so let freedom reign from the prodigious hilltops of New Hampshire. Let freedom reign from the mighty mountains of New York. Let freedom ring from the heightening alleghenies of Pennsylvania. Let freedom ring from the snow capped Rockies of Colorado. Let freedom ring from the curvaceous slopes of California. But not only that. Let freedom ring from Stone Mountain of Georgia. Let freedom ring from Lookout Mountain of Tennessee. Let freedom ring from every hill and molehil of Mississippi. From every mountainside that freedom rain and wind we when we allow freedom rings when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of go'children black men and white men, Jews and Gentiles, Protestants and Catholics will be able to join hands and sing in the words of the old Negro spiritual. Free at last, Free at last. Thank God Almighty, we fear.",
      "words": 715,
      "utterances": [
        {
          "speaker": "MLK",
          "text": "I have the pleasure to present to you Dr. Martin Luther King Geior. I am happy to join with you today in what will go down in history as a greatest demonstration for freedom in the history of our nation. Five score years ago, a great American in whose symbolic shadow we stand today signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. But 100 years later, the Negro still is not free. 100 years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. 100 years later, the Negro lives on a lonely island of poverty.",
          "start": 335,
          "end": 113935,
          "confidence": 0.9718068,
          "words": [
            {
              "text": "I",
              "start": 335,
              "end": 447,
              "confidence": 0.99493,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 471,
              "end": 679,
              "confidence": 0.99141,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 727,
              "end": 911,
              "confidence": 0.99595,
              "speaker": "MLK"
            },
            {
              "text": "pleasure",
              "start": 943,
              "end": 1231,
              "confidence": 0.99899,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 1263,
              "end": 1407,
              "confidence": 0.99877,
              "speaker": "MLK"
            },
            {
              "text": "present",
              "start": 1431,
              "end": 1687,
              "confidence": 0.99994,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 1751,
              "end": 1927,
              "confidence": 0.99581,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 1951,
              "end": 2495,
              "confidence": 0.99201,
              "speaker": "MLK"
            },
            {
              "text": "Dr.",
              "start": 2655,
              "end": 3135,
              "confidence": 0.99424,
              "speaker": "MLK"
            },
            {
              "text": "Martin",
              "start": 3175,
              "end": 3511,
              "confidence": 0.99324,
              "speaker": "MLK"
            },
            {
              "text": "Luther",
              "start": 3543,
              "end": 3895,
              "confidence": 0.98408,
              "speaker": "MLK"
            },
            {
              "text": "King",
              "start": 3935,
              "end": 4327,
              "confidence": 0.97978,
              "speaker": "MLK"
            },
            {
              "text": "Geior.",
              "start": 4431,
              "end": 5195,
              "confidence": 0.16533,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 13055,
              "end": 13343,
              "confidence": 0.97169,
              "speaker": "MLK"
            },
            {
              "text": "am",
              "start": 13359,
              "end": 13631,
              "confidence": 0.97997,
              "speaker": "MLK"
            },
            {
              "text": "happy",
              "start": 13703,
              "end": 14375,
              "confidence": 0.99979,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 14495,
              "end": 14823,
              "confidence": 0.99963,
              "speaker": "MLK"
            },
            {
              "text": "join",
              "start": 14879,
              "end": 15263,
              "confidence": 0.92285,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 15359,
              "end": 15591,
              "confidence": 0.99872,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 15623,
              "end": 15911,
              "confidence": 0.99945,
              "speaker": "MLK"
            },
            {
              "text": "today",
              "start": 15983,
              "end": 16595,
              "confidence": 0.99643,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 18615,
              "end": 19215,
              "confidence": 0.99721,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 19335,
              "end": 19639,
              "confidence": 0.99958,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 19687,
              "end": 19943,
              "confidence": 0.99792,
              "speaker": "MLK"
            },
            {
              "text": "go",
              "start": 19999,
              "end": 20215,
              "confidence": 0.99904,
              "speaker": "MLK"
            },
            {
              "text": "down",
              "start": 20255,
              "end": 20695,
              "confidence": 0.9975,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 20815,
              "end": 21311,
              "confidence": 0.99914,
              "speaker": "MLK"
            },
            {
              "text": "history",
              "start": 21423,
              "end": 22075,
              "confidence": 0.99963,
              "speaker": "MLK"
            },
            {
              "text": "as",
              "start": 23295,
              "end": 23679,
              "confidence": 0.99113,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 23727,
              "end": 23911,
              "confidence": 0.68528,
              "speaker": "MLK"
            },
            {
              "text": "greatest",
              "start": 23943,
              "end": 24335,
              "confidence": 0.99535,
              "speaker": "MLK"
            },
            {
              "text": "demonstration",
              "start": 24415,
              "end": 25439,
              "confidence": 0.89513,
              "speaker": "MLK"
            },
            {
              "text": "for",
              "start": 25607,
              "end": 26031,
              "confidence": 0.99104,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 26103,
              "end": 26599,
              "confidence": 0.99837,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 26687,
              "end": 26959,
              "confidence": 0.99808,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 27007,
              "end": 27383,
              "confidence": 0.99856,
              "speaker": "MLK"
            },
            {
              "text": "history",
              "start": 27479,
              "end": 27783,
              "confidence": 0.99936,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 27839,
              "end": 28031,
              "confidence": 0.99828,
              "speaker": "MLK"
            },
            {
              "text": "our",
              "start": 28063,
              "end": 28279,
              "confidence": 0.99837,
              "speaker": "MLK"
            },
            {
              "text": "nation.",
              "start": 28327,
              "end": 28915,
              "confidence": 0.99828,
              "speaker": "MLK"
            },
            {
              "text": "Five",
              "start": 37845,
              "end": 38517,
              "confidence": 0.99257,
              "speaker": "MLK"
            },
            {
              "text": "score",
              "start": 38661,
              "end": 39325,
              "confidence": 0.98546,
              "speaker": "MLK"
            },
            {
              "text": "years",
              "start": 39485,
              "end": 39949,
              "confidence": 0.99753,
              "speaker": "MLK"
            },
            {
              "text": "ago,",
              "start": 40037,
              "end": 40665,
              "confidence": 0.99187,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 43125,
              "end": 43437,
              "confidence": 0.99749,
              "speaker": "MLK"
            },
            {
              "text": "great",
              "start": 43461,
              "end": 43789,
              "confidence": 0.99844,
              "speaker": "MLK"
            },
            {
              "text": "American",
              "start": 43877,
              "end": 44173,
              "confidence": 0.99903,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 44229,
              "end": 44421,
              "confidence": 0.99868,
              "speaker": "MLK"
            },
            {
              "text": "whose",
              "start": 44453,
              "end": 44853,
              "confidence": 0.57125,
              "speaker": "MLK"
            },
            {
              "text": "symbolic",
              "start": 44949,
              "end": 45981,
              "confidence": 0.89029,
              "speaker": "MLK"
            },
            {
              "text": "shadow",
              "start": 46173,
              "end": 46621,
              "confidence": 0.97593,
              "speaker": "MLK"
            },
            {
              "text": "we",
              "start": 46653,
              "end": 46917,
              "confidence": 0.9971,
              "speaker": "MLK"
            },
            {
              "text": "stand",
              "start": 46981,
              "end": 47397,
              "confidence": 0.99956,
              "speaker": "MLK"
            },
            {
              "text": "today",
              "start": 47501,
              "end": 48145,
              "confidence": 0.99629,
              "speaker": "MLK"
            },
            {
              "text": "signed",
              "start": 49685,
              "end": 50485,
              "confidence": 0.96433,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 50645,
              "end": 51037,
              "confidence": 0.99485,
              "speaker": "MLK"
            },
            {
              "text": "Emancipation",
              "start": 51101,
              "end": 52205,
              "confidence": 0.77539,
              "speaker": "MLK"
            },
            {
              "text": "Proclamation.",
              "start": 52325,
              "end": 53505,
              "confidence": 0.60211,
              "speaker": "MLK"
            },
            {
              "text": "This",
              "start": 55405,
              "end": 55813,
              "confidence": 0.99878,
              "speaker": "MLK"
            },
            {
              "text": "momentous",
              "start": 55869,
              "end": 56413,
              "confidence": 0.99762,
              "speaker": "MLK"
            },
            {
              "text": "decree",
              "start": 56469,
              "end": 56965,
              "confidence": 0.99913,
              "speaker": "MLK"
            },
            {
              "text": "came",
              "start": 57045,
              "end": 57665,
              "confidence": 0.99489,
              "speaker": "MLK"
            },
            {
              "text": "as",
              "start": 59315,
              "end": 59675,
              "confidence": 0.9611,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 59715,
              "end": 59867,
              "confidence": 0.83217,
              "speaker": "MLK"
            },
            {
              "text": "great",
              "start": 59891,
              "end": 60123,
              "confidence": 0.9037,
              "speaker": "MLK"
            },
            {
              "text": "beacon",
              "start": 60179,
              "end": 60555,
              "confidence": 0.98204,
              "speaker": "MLK"
            },
            {
              "text": "light",
              "start": 60595,
              "end": 60795,
              "confidence": 0.99714,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 60835,
              "end": 61011,
              "confidence": 0.98975,
              "speaker": "MLK"
            },
            {
              "text": "hope",
              "start": 61043,
              "end": 61307,
              "confidence": 0.99779,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 61371,
              "end": 61571,
              "confidence": 0.99429,
              "speaker": "MLK"
            },
            {
              "text": "millions",
              "start": 61603,
              "end": 62203,
              "confidence": 0.99317,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 62299,
              "end": 62531,
              "confidence": 0.99904,
              "speaker": "MLK"
            },
            {
              "text": "Negro",
              "start": 62563,
              "end": 63059,
              "confidence": 0.99816,
              "speaker": "MLK"
            },
            {
              "text": "slaves",
              "start": 63147,
              "end": 63815,
              "confidence": 0.98377,
              "speaker": "MLK"
            },
            {
              "text": "who",
              "start": 64995,
              "end": 65355,
              "confidence": 0.99388,
              "speaker": "MLK"
            },
            {
              "text": "had",
              "start": 65395,
              "end": 65595,
              "confidence": 0.99192,
              "speaker": "MLK"
            },
            {
              "text": "been",
              "start": 65635,
              "end": 65955,
              "confidence": 0.99681,
              "speaker": "MLK"
            },
            {
              "text": "seared",
              "start": 66035,
              "end": 66395,
              "confidence": 0.99153,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 66475,
              "end": 66715,
              "confidence": 0.99599,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 66755,
              "end": 66955,
              "confidence": 0.99595,
              "speaker": "MLK"
            },
            {
              "text": "flames",
              "start": 66995,
              "end": 67507,
              "confidence": 0.99166,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 67651,
              "end": 67955,
              "confidence": 0.99827,
              "speaker": "MLK"
            },
            {
              "text": "withering",
              "start": 67995,
              "end": 68555,
              "confidence": 0.99888,
              "speaker": "MLK"
            },
            {
              "text": "injustice.",
              "start": 68635,
              "end": 69695,
              "confidence": 0.99466,
              "speaker": "MLK"
            },
            {
              "text": "It",
              "start": 71355,
              "end": 71739,
              "confidence": 0.98507,
              "speaker": "MLK"
            },
            {
              "text": "came",
              "start": 71787,
              "end": 72067,
              "confidence": 0.99722,
              "speaker": "MLK"
            },
            {
              "text": "as",
              "start": 72131,
              "end": 72355,
              "confidence": 0.99628,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 72395,
              "end": 72571,
              "confidence": 0.99588,
              "speaker": "MLK"
            },
            {
              "text": "joyous",
              "start": 72603,
              "end": 73051,
              "confidence": 0.99827,
              "speaker": "MLK"
            },
            {
              "text": "daybreak",
              "start": 73123,
              "end": 74055,
              "confidence": 0.93086,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 75795,
              "end": 76131,
              "confidence": 0.98978,
              "speaker": "MLK"
            },
            {
              "text": "end",
              "start": 76163,
              "end": 76499,
              "confidence": 0.99702,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 76587,
              "end": 76835,
              "confidence": 0.99596,
              "speaker": "MLK"
            },
            {
              "text": "long",
              "start": 76875,
              "end": 77267,
              "confidence": 0.98519,
              "speaker": "MLK"
            },
            {
              "text": "night",
              "start": 77371,
              "end": 77899,
              "confidence": 0.9985,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 78027,
              "end": 78291,
              "confidence": 0.99301,
              "speaker": "MLK"
            },
            {
              "text": "their",
              "start": 78323,
              "end": 78659,
              "confidence": 0.99071,
              "speaker": "MLK"
            },
            {
              "text": "captivity.",
              "start": 78747,
              "end": 79695,
              "confidence": 0.58084,
              "speaker": "MLK"
            },
            {
              "text": "But",
              "start": 81835,
              "end": 82267,
              "confidence": 0.99537,
              "speaker": "MLK"
            },
            {
              "text": "100",
              "start": 82331,
              "end": 83171,
              "confidence": 0.99845,
              "speaker": "MLK"
            },
            {
              "text": "years",
              "start": 83283,
              "end": 83867,
              "confidence": 0.99813,
              "speaker": "MLK"
            },
            {
              "text": "later,",
              "start": 84011,
              "end": 84695,
              "confidence": 0.99808,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 86795,
              "end": 87155,
              "confidence": 0.99417,
              "speaker": "MLK"
            },
            {
              "text": "Negro",
              "start": 87195,
              "end": 87931,
              "confidence": 0.99746,
              "speaker": "MLK"
            },
            {
              "text": "still",
              "start": 88083,
              "end": 88775,
              "confidence": 0.99623,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 89635,
              "end": 90019,
              "confidence": 0.99749,
              "speaker": "MLK"
            },
            {
              "text": "not",
              "start": 90067,
              "end": 90347,
              "confidence": 0.99871,
              "speaker": "MLK"
            },
            {
              "text": "free.",
              "start": 90411,
              "end": 91015,
              "confidence": 0.9986,
              "speaker": "MLK"
            },
            {
              "text": "100",
              "start": 92755,
              "end": 93395,
              "confidence": 0.99792,
              "speaker": "MLK"
            },
            {
              "text": "years",
              "start": 93435,
              "end": 93827,
              "confidence": 0.9973,
              "speaker": "MLK"
            },
            {
              "text": "later,",
              "start": 93931,
              "end": 94575,
              "confidence": 0.99852,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 96355,
              "end": 96691,
              "confidence": 0.99859,
              "speaker": "MLK"
            },
            {
              "text": "life",
              "start": 96723,
              "end": 96915,
              "confidence": 0.99458,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 96955,
              "end": 97083,
              "confidence": 0.99634,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 97099,
              "end": 97227,
              "confidence": 0.99511,
              "speaker": "MLK"
            },
            {
              "text": "Negro",
              "start": 97251,
              "end": 97571,
              "confidence": 0.99728,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 97603,
              "end": 97915,
              "confidence": 0.98381,
              "speaker": "MLK"
            },
            {
              "text": "still",
              "start": 97995,
              "end": 98595,
              "confidence": 0.99574,
              "speaker": "MLK"
            },
            {
              "text": "sadly",
              "start": 98755,
              "end": 99491,
              "confidence": 0.99667,
              "speaker": "MLK"
            },
            {
              "text": "crippled",
              "start": 99563,
              "end": 100059,
              "confidence": 0.99579,
              "speaker": "MLK"
            },
            {
              "text": "by",
              "start": 100147,
              "end": 100443,
              "confidence": 0.99856,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 100499,
              "end": 100715,
              "confidence": 0.99879,
              "speaker": "MLK"
            },
            {
              "text": "manacles",
              "start": 100755,
              "end": 101339,
              "confidence": 0.95526,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 101427,
              "end": 101699,
              "confidence": 0.99838,
              "speaker": "MLK"
            },
            {
              "text": "segregation",
              "start": 101747,
              "end": 102655,
              "confidence": 0.9802,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 103755,
              "end": 104115,
              "confidence": 0.9981,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 104155,
              "end": 104355,
              "confidence": 0.99498,
              "speaker": "MLK"
            },
            {
              "text": "chains",
              "start": 104395,
              "end": 104883,
              "confidence": 0.99398,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 105019,
              "end": 105291,
              "confidence": 0.99918,
              "speaker": "MLK"
            },
            {
              "text": "discrimination.",
              "start": 105323,
              "end": 106335,
              "confidence": 0.98352,
              "speaker": "MLK"
            },
            {
              "text": "100",
              "start": 106995,
              "end": 107699,
              "confidence": 0.99791,
              "speaker": "MLK"
            },
            {
              "text": "years",
              "start": 107747,
              "end": 108123,
              "confidence": 0.99904,
              "speaker": "MLK"
            },
            {
              "text": "later,",
              "start": 108219,
              "end": 108855,
              "confidence": 0.99533,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 110155,
              "end": 110491,
              "confidence": 0.99073,
              "speaker": "MLK"
            },
            {
              "text": "Negro",
              "start": 110523,
              "end": 110923,
              "confidence": 0.99802,
              "speaker": "MLK"
            },
            {
              "text": "lives",
              "start": 110979,
              "end": 111291,
              "confidence": 0.99603,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 111363,
              "end": 111595,
              "confidence": 0.99948,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 111635,
              "end": 111787,
              "confidence": 0.99794,
              "speaker": "MLK"
            },
            {
              "text": "lonely",
              "start": 111811,
              "end": 112219,
              "confidence": 0.99876,
              "speaker": "MLK"
            },
            {
              "text": "island",
              "start": 112267,
              "end": 112819,
              "confidence": 0.99783,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 112907,
              "end": 113131,
              "confidence": 0.99351,
              "speaker": "MLK"
            },
            {
              "text": "poverty.",
              "start": 113163,
              "end": 113935,
              "confidence": 0.98559,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I have a dream that one day this nation will rise up and live out the true meaning of its creed. We hold these truths to be self.",
          "start": 114355,
          "end": 129183,
          "confidence": 0.9723075,
          "words": [
            {
              "text": "I",
              "start": 114355,
              "end": 114667,
              "confidence": 0.99589,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 114691,
              "end": 114851,
              "confidence": 0.99633,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 114883,
              "end": 115051,
              "confidence": 0.99756,
              "speaker": "MLK"
            },
            {
              "text": "dream",
              "start": 115083,
              "end": 115695,
              "confidence": 0.91705,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 116815,
              "end": 117175,
              "confidence": 0.84013,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 117215,
              "end": 117415,
              "confidence": 0.99453,
              "speaker": "MLK"
            },
            {
              "text": "day",
              "start": 117455,
              "end": 118035,
              "confidence": 0.99622,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 119495,
              "end": 119927,
              "confidence": 0.99744,
              "speaker": "MLK"
            },
            {
              "text": "nation",
              "start": 119991,
              "end": 120455,
              "confidence": 0.99962,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 120575,
              "end": 120999,
              "confidence": 0.99909,
              "speaker": "MLK"
            },
            {
              "text": "rise",
              "start": 121087,
              "end": 121479,
              "confidence": 0.99423,
              "speaker": "MLK"
            },
            {
              "text": "up",
              "start": 121567,
              "end": 122195,
              "confidence": 0.99346,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 123175,
              "end": 123511,
              "confidence": 0.93114,
              "speaker": "MLK"
            },
            {
              "text": "live",
              "start": 123543,
              "end": 123735,
              "confidence": 0.99641,
              "speaker": "MLK"
            },
            {
              "text": "out",
              "start": 123775,
              "end": 123999,
              "confidence": 0.99337,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 124047,
              "end": 124255,
              "confidence": 0.99673,
              "speaker": "MLK"
            },
            {
              "text": "true",
              "start": 124295,
              "end": 124495,
              "confidence": 0.99911,
              "speaker": "MLK"
            },
            {
              "text": "meaning",
              "start": 124535,
              "end": 124831,
              "confidence": 0.99813,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 124863,
              "end": 124983,
              "confidence": 0.99843,
              "speaker": "MLK"
            },
            {
              "text": "its",
              "start": 124999,
              "end": 125223,
              "confidence": 0.99065,
              "speaker": "MLK"
            },
            {
              "text": "creed.",
              "start": 125279,
              "end": 125875,
              "confidence": 0.92107,
              "speaker": "MLK"
            },
            {
              "text": "We",
              "start": 126855,
              "end": 127239,
              "confidence": 0.97374,
              "speaker": "MLK"
            },
            {
              "text": "hold",
              "start": 127287,
              "end": 127543,
              "confidence": 0.90796,
              "speaker": "MLK"
            },
            {
              "text": "these",
              "start": 127599,
              "end": 127935,
              "confidence": 0.99507,
              "speaker": "MLK"
            },
            {
              "text": "truths",
              "start": 128015,
              "end": 128359,
              "confidence": 0.80672,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 128407,
              "end": 128567,
              "confidence": 0.99845,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 128591,
              "end": 128823,
              "confidence": 0.99809,
              "speaker": "MLK"
            },
            {
              "text": "self.",
              "start": 128879,
              "end": 129183,
              "confidence": 0.99799,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Evident that all men are created equal.",
          "start": 129239,
          "end": 132835,
          "confidence": 0.9294143,
          "words": [
            {
              "text": "Evident",
              "start": 129239,
              "end": 130111,
              "confidence": 0.99556,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 130303,
              "end": 130751,
              "confidence": 0.99743,
              "speaker": "MLK"
            },
            {
              "text": "all",
              "start": 130823,
              "end": 131151,
              "confidence": 0.9997,
              "speaker": "MLK"
            },
            {
              "text": "men",
              "start": 131223,
              "end": 131479,
              "confidence": 0.99759,
              "speaker": "MLK"
            },
            {
              "text": "are",
              "start": 131527,
              "end": 131759,
              "confidence": 0.99463,
              "speaker": "MLK"
            },
            {
              "text": "created",
              "start": 131807,
              "end": 132151,
              "confidence": 0.99715,
              "speaker": "MLK"
            },
            {
              "text": "equal.",
              "start": 132183,
              "end": 132835,
              "confidence": 0.52384,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I have a dream that one day on the red hills to joy.",
          "start": 141895,
          "end": 147845,
          "confidence": 0.8460954,
          "words": [
            {
              "text": "I",
              "start": 141895,
              "end": 142231,
              "confidence": 0.99591,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 142263,
              "end": 142407,
              "confidence": 0.99636,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 142431,
              "end": 142591,
              "confidence": 0.99721,
              "speaker": "MLK"
            },
            {
              "text": "dream",
              "start": 142623,
              "end": 143235,
              "confidence": 0.98619,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 144905,
              "end": 145265,
              "confidence": 0.80785,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 145305,
              "end": 145481,
              "confidence": 0.99642,
              "speaker": "MLK"
            },
            {
              "text": "day",
              "start": 145513,
              "end": 145729,
              "confidence": 0.99736,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 145777,
              "end": 146033,
              "confidence": 0.99476,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 146089,
              "end": 146281,
              "confidence": 0.99163,
              "speaker": "MLK"
            },
            {
              "text": "red",
              "start": 146313,
              "end": 146553,
              "confidence": 0.99749,
              "speaker": "MLK"
            },
            {
              "text": "hills",
              "start": 146609,
              "end": 146993,
              "confidence": 0.44383,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 147049,
              "end": 147241,
              "confidence": 0.56068,
              "speaker": "MLK"
            },
            {
              "text": "joy.",
              "start": 147273,
              "end": 147845,
              "confidence": 0.23355,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Sons.",
          "start": 149545,
          "end": 150017,
          "confidence": 0.99411,
          "words": [
            {
              "text": "Sons.",
              "start": 149545,
              "end": 150017,
              "confidence": 0.99411,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice. I have a dream my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. I have a dream. I have a dream that one day down in Alabama with its vicious races with its governor having his lips dripping with the words of interposition and nullification, one day, right now in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. I have a dream today. I have a dream that one day every valley shall be exalted and every hill and mountains shall be made low. The rough places will be made plain and the crooked places will be made straight. And the glory of the Lord shall be revealed and all flesh shall see it together. This is our hope. This is the faith that I go back to the Southt with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day if be la this will be the day with all of God's children Be able to sing with new meaning. My country tears of thee Sweet land of liberty of the I sing Land where my fathers died Land of the pilgrim'pride from every mountainside let freedom ring. And if America is to be a great nation, this must become true. And so let freedom reign from the prodigious hilltops of New Hampshire. Let freedom reign from the mighty mountains of New York. Let freedom ring from the heightening alleghenies of Pennsylvania. Let freedom ring from the snow capped Rockies of Colorado. Let freedom ring from the curvaceous slopes of California. But not only that. Let freedom ring from Stone Mountain of Georgia. Let freedom ring from Lookout Mountain of Tennessee. Let freedom ring from every hill and molehil of Mississippi. From every mountainside that freedom rain and wind we when we allow freedom rings when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of go'children black men and white men, Jews and Gentiles, Protestants and Catholics will be able to join hands and sing in the words of the old Negro spiritual. Free at last, Free at last. Thank God Almighty, we fear.",
          "start": 150081,
          "end": 405735,
          "confidence": 0.9365138,
          "words": [
            {
              "text": "Of",
              "start": 150081,
              "end": 150449,
              "confidence": 0.98702,
              "speaker": "MLK"
            },
            {
              "text": "former",
              "start": 150537,
              "end": 150833,
              "confidence": 0.99834,
              "speaker": "MLK"
            },
            {
              "text": "slaves",
              "start": 150889,
              "end": 151257,
              "confidence": 0.99499,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 151321,
              "end": 151497,
              "confidence": 0.99088,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 151521,
              "end": 151729,
              "confidence": 0.94684,
              "speaker": "MLK"
            },
            {
              "text": "sons",
              "start": 151777,
              "end": 152113,
              "confidence": 0.99064,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 152169,
              "end": 152529,
              "confidence": 0.45272,
              "speaker": "MLK"
            },
            {
              "text": "former",
              "start": 152617,
              "end": 152889,
              "confidence": 0.94134,
              "speaker": "MLK"
            },
            {
              "text": "slave",
              "start": 152937,
              "end": 153169,
              "confidence": 0.99879,
              "speaker": "MLK"
            },
            {
              "text": "owners",
              "start": 153217,
              "end": 153965,
              "confidence": 0.96233,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 154545,
              "end": 155049,
              "confidence": 0.97569,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 155137,
              "end": 155361,
              "confidence": 0.98994,
              "speaker": "MLK"
            },
            {
              "text": "able",
              "start": 155393,
              "end": 155825,
              "confidence": 0.99683,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 155945,
              "end": 156225,
              "confidence": 0.99733,
              "speaker": "MLK"
            },
            {
              "text": "sit",
              "start": 156265,
              "end": 156441,
              "confidence": 0.99192,
              "speaker": "MLK"
            },
            {
              "text": "down",
              "start": 156473,
              "end": 156929,
              "confidence": 0.99849,
              "speaker": "MLK"
            },
            {
              "text": "together",
              "start": 157057,
              "end": 157345,
              "confidence": 0.99603,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 157385,
              "end": 157537,
              "confidence": 0.98924,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 157561,
              "end": 157721,
              "confidence": 0.99714,
              "speaker": "MLK"
            },
            {
              "text": "table",
              "start": 157753,
              "end": 157969,
              "confidence": 0.99858,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 158017,
              "end": 158201,
              "confidence": 0.99641,
              "speaker": "MLK"
            },
            {
              "text": "brotherhood.",
              "start": 158233,
              "end": 158993,
              "confidence": 0.97499,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 159129,
              "end": 159401,
              "confidence": 0.99667,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 159433,
              "end": 159601,
              "confidence": 0.99818,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 159633,
              "end": 159777,
              "confidence": 0.99812,
              "speaker": "MLK"
            },
            {
              "text": "dream",
              "start": 159801,
              "end": 160405,
              "confidence": 0.98788,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 161265,
              "end": 161601,
              "confidence": 0.7138,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 161633,
              "end": 161825,
              "confidence": 0.99742,
              "speaker": "MLK"
            },
            {
              "text": "day",
              "start": 161865,
              "end": 162445,
              "confidence": 0.9972,
              "speaker": "MLK"
            },
            {
              "text": "even",
              "start": 164385,
              "end": 164745,
              "confidence": 0.99118,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 164785,
              "end": 165009,
              "confidence": 0.99842,
              "speaker": "MLK"
            },
            {
              "text": "state",
              "start": 165057,
              "end": 165217,
              "confidence": 0.9988,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 165241,
              "end": 165401,
              "confidence": 0.99871,
              "speaker": "MLK"
            },
            {
              "text": "Mississippi,",
              "start": 165433,
              "end": 166161,
              "confidence": 0.99539,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 166193,
              "end": 166433,
              "confidence": 0.97175,
              "speaker": "MLK"
            },
            {
              "text": "state",
              "start": 166489,
              "end": 167113,
              "confidence": 0.96808,
              "speaker": "MLK"
            },
            {
              "text": "sweltering",
              "start": 167289,
              "end": 168241,
              "confidence": 0.98881,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 168353,
              "end": 168673,
              "confidence": 0.99788,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 168729,
              "end": 169209,
              "confidence": 0.95159,
              "speaker": "MLK"
            },
            {
              "text": "heat",
              "start": 169337,
              "end": 169601,
              "confidence": 0.7008,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 169633,
              "end": 170205,
              "confidence": 0.64518,
              "speaker": "MLK"
            },
            {
              "text": "injustice,",
              "start": 170735,
              "end": 171955,
              "confidence": 0.94244,
              "speaker": "MLK"
            },
            {
              "text": "sweltering",
              "start": 173375,
              "end": 174167,
              "confidence": 0.97603,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 174231,
              "end": 174431,
              "confidence": 0.99808,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 174463,
              "end": 174607,
              "confidence": 0.99773,
              "speaker": "MLK"
            },
            {
              "text": "heat",
              "start": 174631,
              "end": 174791,
              "confidence": 0.99364,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 174823,
              "end": 174967,
              "confidence": 0.99775,
              "speaker": "MLK"
            },
            {
              "text": "oppression,",
              "start": 174991,
              "end": 175835,
              "confidence": 0.9963,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 176335,
              "end": 176671,
              "confidence": 0.77331,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 176703,
              "end": 176967,
              "confidence": 0.98294,
              "speaker": "MLK"
            },
            {
              "text": "transformed",
              "start": 177031,
              "end": 177967,
              "confidence": 0.9969,
              "speaker": "MLK"
            },
            {
              "text": "into",
              "start": 178071,
              "end": 178287,
              "confidence": 0.998,
              "speaker": "MLK"
            },
            {
              "text": "an",
              "start": 178311,
              "end": 178447,
              "confidence": 0.82268,
              "speaker": "MLK"
            },
            {
              "text": "oasis",
              "start": 178471,
              "end": 179095,
              "confidence": 0.6747,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 179175,
              "end": 179631,
              "confidence": 0.96534,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 179743,
              "end": 180087,
              "confidence": 0.99667,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 180111,
              "end": 180295,
              "confidence": 0.99341,
              "speaker": "MLK"
            },
            {
              "text": "justice.",
              "start": 180335,
              "end": 180783,
              "confidence": 0.95946,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 180839,
              "end": 181031,
              "confidence": 0.99817,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 181063,
              "end": 181231,
              "confidence": 0.99712,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 181263,
              "end": 181431,
              "confidence": 0.99576,
              "speaker": "MLK"
            },
            {
              "text": "dream",
              "start": 181463,
              "end": 182075,
              "confidence": 0.9585,
              "speaker": "MLK"
            },
            {
              "text": "my",
              "start": 185335,
              "end": 185935,
              "confidence": 0.99322,
              "speaker": "MLK"
            },
            {
              "text": "four",
              "start": 186055,
              "end": 186335,
              "confidence": 0.77368,
              "speaker": "MLK"
            },
            {
              "text": "little",
              "start": 186375,
              "end": 186815,
              "confidence": 0.99222,
              "speaker": "MLK"
            },
            {
              "text": "children",
              "start": 186935,
              "end": 187595,
              "confidence": 0.99615,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 188895,
              "end": 189231,
              "confidence": 0.97169,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 189263,
              "end": 189431,
              "confidence": 0.99791,
              "speaker": "MLK"
            },
            {
              "text": "day",
              "start": 189463,
              "end": 189655,
              "confidence": 0.99828,
              "speaker": "MLK"
            },
            {
              "text": "live",
              "start": 189695,
              "end": 189871,
              "confidence": 0.99706,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 189903,
              "end": 190023,
              "confidence": 0.99936,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 190039,
              "end": 190167,
              "confidence": 0.99812,
              "speaker": "MLK"
            },
            {
              "text": "nation",
              "start": 190191,
              "end": 190615,
              "confidence": 0.99955,
              "speaker": "MLK"
            },
            {
              "text": "where",
              "start": 190735,
              "end": 190991,
              "confidence": 0.99433,
              "speaker": "MLK"
            },
            {
              "text": "they",
              "start": 191023,
              "end": 191215,
              "confidence": 0.99799,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 191255,
              "end": 191431,
              "confidence": 0.99557,
              "speaker": "MLK"
            },
            {
              "text": "not",
              "start": 191463,
              "end": 191631,
              "confidence": 0.99734,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 191663,
              "end": 191855,
              "confidence": 0.99888,
              "speaker": "MLK"
            },
            {
              "text": "judged",
              "start": 191895,
              "end": 192223,
              "confidence": 0.99619,
              "speaker": "MLK"
            },
            {
              "text": "by",
              "start": 192279,
              "end": 192495,
              "confidence": 0.99823,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 192535,
              "end": 192711,
              "confidence": 0.99838,
              "speaker": "MLK"
            },
            {
              "text": "color",
              "start": 192743,
              "end": 193007,
              "confidence": 0.87233,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 193031,
              "end": 193167,
              "confidence": 0.99077,
              "speaker": "MLK"
            },
            {
              "text": "their",
              "start": 193191,
              "end": 193447,
              "confidence": 0.99402,
              "speaker": "MLK"
            },
            {
              "text": "skin",
              "start": 193511,
              "end": 193831,
              "confidence": 0.99799,
              "speaker": "MLK"
            },
            {
              "text": "but",
              "start": 193903,
              "end": 194111,
              "confidence": 0.99606,
              "speaker": "MLK"
            },
            {
              "text": "by",
              "start": 194143,
              "end": 194287,
              "confidence": 0.99512,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 194311,
              "end": 194639,
              "confidence": 0.99647,
              "speaker": "MLK"
            },
            {
              "text": "content",
              "start": 194727,
              "end": 194927,
              "confidence": 0.99919,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 194951,
              "end": 195087,
              "confidence": 0.99799,
              "speaker": "MLK"
            },
            {
              "text": "their",
              "start": 195111,
              "end": 195343,
              "confidence": 0.90051,
              "speaker": "MLK"
            },
            {
              "text": "character.",
              "start": 195399,
              "end": 196047,
              "confidence": 0.97352,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 196151,
              "end": 196415,
              "confidence": 0.99405,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 196455,
              "end": 196631,
              "confidence": 0.99376,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 196663,
              "end": 196807,
              "confidence": 0.99047,
              "speaker": "MLK"
            },
            {
              "text": "dream.",
              "start": 196831,
              "end": 197435,
              "confidence": 0.95951,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 203885,
              "end": 204293,
              "confidence": 0.98626,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 204349,
              "end": 204565,
              "confidence": 0.99287,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 204605,
              "end": 204805,
              "confidence": 0.99477,
              "speaker": "MLK"
            },
            {
              "text": "dream",
              "start": 204845,
              "end": 205277,
              "confidence": 0.99228,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 205381,
              "end": 205645,
              "confidence": 0.99662,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 205685,
              "end": 205909,
              "confidence": 0.99764,
              "speaker": "MLK"
            },
            {
              "text": "day",
              "start": 205957,
              "end": 206545,
              "confidence": 0.99892,
              "speaker": "MLK"
            },
            {
              "text": "down",
              "start": 208045,
              "end": 208785,
              "confidence": 0.95075,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 210045,
              "end": 210381,
              "confidence": 0.99619,
              "speaker": "MLK"
            },
            {
              "text": "Alabama",
              "start": 210413,
              "end": 211269,
              "confidence": 0.96781,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 211437,
              "end": 211741,
              "confidence": 0.99755,
              "speaker": "MLK"
            },
            {
              "text": "its",
              "start": 211773,
              "end": 212085,
              "confidence": 0.97269,
              "speaker": "MLK"
            },
            {
              "text": "vicious",
              "start": 212165,
              "end": 212597,
              "confidence": 0.99154,
              "speaker": "MLK"
            },
            {
              "text": "races",
              "start": 212661,
              "end": 213385,
              "confidence": 0.97736,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 214245,
              "end": 214557,
              "confidence": 0.99675,
              "speaker": "MLK"
            },
            {
              "text": "its",
              "start": 214581,
              "end": 214837,
              "confidence": 0.98082,
              "speaker": "MLK"
            },
            {
              "text": "governor",
              "start": 214901,
              "end": 215745,
              "confidence": 0.9968,
              "speaker": "MLK"
            },
            {
              "text": "having",
              "start": 216045,
              "end": 216525,
              "confidence": 0.99197,
              "speaker": "MLK"
            },
            {
              "text": "his",
              "start": 216605,
              "end": 216941,
              "confidence": 0.99715,
              "speaker": "MLK"
            },
            {
              "text": "lips",
              "start": 217013,
              "end": 217357,
              "confidence": 0.98825,
              "speaker": "MLK"
            },
            {
              "text": "dripping",
              "start": 217421,
              "end": 217765,
              "confidence": 0.96561,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 217805,
              "end": 217933,
              "confidence": 0.99779,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 217949,
              "end": 218077,
              "confidence": 0.98724,
              "speaker": "MLK"
            },
            {
              "text": "words",
              "start": 218101,
              "end": 218373,
              "confidence": 0.98254,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 218429,
              "end": 218669,
              "confidence": 0.99717,
              "speaker": "MLK"
            },
            {
              "text": "interposition",
              "start": 218717,
              "end": 219221,
              "confidence": 0.91536,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 219293,
              "end": 219453,
              "confidence": 0.99799,
              "speaker": "MLK"
            },
            {
              "text": "nullification,",
              "start": 219469,
              "end": 220465,
              "confidence": 0.91424,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 221085,
              "end": 221445,
              "confidence": 0.99683,
              "speaker": "MLK"
            },
            {
              "text": "day,",
              "start": 221485,
              "end": 221709,
              "confidence": 0.99608,
              "speaker": "MLK"
            },
            {
              "text": "right",
              "start": 221757,
              "end": 221989,
              "confidence": 0.98557,
              "speaker": "MLK"
            },
            {
              "text": "now",
              "start": 222037,
              "end": 222293,
              "confidence": 0.96043,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 222349,
              "end": 222541,
              "confidence": 0.99664,
              "speaker": "MLK"
            },
            {
              "text": "Alabama,",
              "start": 222573,
              "end": 223197,
              "confidence": 0.99844,
              "speaker": "MLK"
            },
            {
              "text": "little",
              "start": 223301,
              "end": 223661,
              "confidence": 0.99528,
              "speaker": "MLK"
            },
            {
              "text": "black",
              "start": 223733,
              "end": 224037,
              "confidence": 0.99793,
              "speaker": "MLK"
            },
            {
              "text": "boys",
              "start": 224101,
              "end": 224373,
              "confidence": 0.99622,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 224429,
              "end": 224645,
              "confidence": 0.99315,
              "speaker": "MLK"
            },
            {
              "text": "black",
              "start": 224685,
              "end": 224981,
              "confidence": 0.99453,
              "speaker": "MLK"
            },
            {
              "text": "girls",
              "start": 225053,
              "end": 225669,
              "confidence": 0.77187,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 225797,
              "end": 226061,
              "confidence": 0.99259,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 226093,
              "end": 226237,
              "confidence": 0.99872,
              "speaker": "MLK"
            },
            {
              "text": "able",
              "start": 226261,
              "end": 226469,
              "confidence": 0.99843,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 226517,
              "end": 226701,
              "confidence": 0.99706,
              "speaker": "MLK"
            },
            {
              "text": "join",
              "start": 226733,
              "end": 226997,
              "confidence": 0.9885,
              "speaker": "MLK"
            },
            {
              "text": "hands",
              "start": 227061,
              "end": 227365,
              "confidence": 0.98575,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 227405,
              "end": 227557,
              "confidence": 0.95246,
              "speaker": "MLK"
            },
            {
              "text": "little",
              "start": 227581,
              "end": 227813,
              "confidence": 0.99337,
              "speaker": "MLK"
            },
            {
              "text": "white",
              "start": 227869,
              "end": 228109,
              "confidence": 0.99882,
              "speaker": "MLK"
            },
            {
              "text": "boys",
              "start": 228157,
              "end": 228389,
              "confidence": 0.99632,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 228437,
              "end": 228645,
              "confidence": 0.99524,
              "speaker": "MLK"
            },
            {
              "text": "white",
              "start": 228685,
              "end": 228933,
              "confidence": 0.99283,
              "speaker": "MLK"
            },
            {
              "text": "girls",
              "start": 228989,
              "end": 229477,
              "confidence": 0.53585,
              "speaker": "MLK"
            },
            {
              "text": "as",
              "start": 229581,
              "end": 229845,
              "confidence": 0.93193,
              "speaker": "MLK"
            },
            {
              "text": "sisters",
              "start": 229885,
              "end": 230261,
              "confidence": 0.98283,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 230293,
              "end": 230461,
              "confidence": 0.99403,
              "speaker": "MLK"
            },
            {
              "text": "brothers.",
              "start": 230493,
              "end": 230789,
              "confidence": 0.96708,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 230837,
              "end": 231021,
              "confidence": 0.97797,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 231053,
              "end": 231197,
              "confidence": 0.98108,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 231221,
              "end": 231381,
              "confidence": 0.98887,
              "speaker": "MLK"
            },
            {
              "text": "dream",
              "start": 231413,
              "end": 231837,
              "confidence": 0.9516,
              "speaker": "MLK"
            },
            {
              "text": "today.",
              "start": 231941,
              "end": 232585,
              "confidence": 0.88255,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 240115,
              "end": 240499,
              "confidence": 0.98652,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 240547,
              "end": 240755,
              "confidence": 0.99489,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 240795,
              "end": 240995,
              "confidence": 0.99105,
              "speaker": "MLK"
            },
            {
              "text": "dream",
              "start": 241035,
              "end": 241395,
              "confidence": 0.99046,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 241475,
              "end": 241715,
              "confidence": 0.99629,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 241755,
              "end": 241979,
              "confidence": 0.99607,
              "speaker": "MLK"
            },
            {
              "text": "day",
              "start": 242027,
              "end": 242307,
              "confidence": 0.99767,
              "speaker": "MLK"
            },
            {
              "text": "every",
              "start": 242371,
              "end": 242619,
              "confidence": 0.99316,
              "speaker": "MLK"
            },
            {
              "text": "valley",
              "start": 242667,
              "end": 243219,
              "confidence": 0.99822,
              "speaker": "MLK"
            },
            {
              "text": "shall",
              "start": 243307,
              "end": 243579,
              "confidence": 0.99338,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 243627,
              "end": 243835,
              "confidence": 0.9982,
              "speaker": "MLK"
            },
            {
              "text": "exalted",
              "start": 243875,
              "end": 244735,
              "confidence": 0.95515,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 245075,
              "end": 245435,
              "confidence": 0.598,
              "speaker": "MLK"
            },
            {
              "text": "every",
              "start": 245475,
              "end": 245675,
              "confidence": 0.9959,
              "speaker": "MLK"
            },
            {
              "text": "hill",
              "start": 245715,
              "end": 245891,
              "confidence": 0.99732,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 245923,
              "end": 246115,
              "confidence": 0.89985,
              "speaker": "MLK"
            },
            {
              "text": "mountains",
              "start": 246155,
              "end": 246595,
              "confidence": 0.67223,
              "speaker": "MLK"
            },
            {
              "text": "shall",
              "start": 246635,
              "end": 246811,
              "confidence": 0.98846,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 246843,
              "end": 247011,
              "confidence": 0.99668,
              "speaker": "MLK"
            },
            {
              "text": "made",
              "start": 247043,
              "end": 247283,
              "confidence": 0.99374,
              "speaker": "MLK"
            },
            {
              "text": "low.",
              "start": 247339,
              "end": 247579,
              "confidence": 0.91715,
              "speaker": "MLK"
            },
            {
              "text": "The",
              "start": 247627,
              "end": 247787,
              "confidence": 0.9934,
              "speaker": "MLK"
            },
            {
              "text": "rough",
              "start": 247811,
              "end": 248059,
              "confidence": 0.99674,
              "speaker": "MLK"
            },
            {
              "text": "places",
              "start": 248107,
              "end": 248499,
              "confidence": 0.98694,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 248547,
              "end": 248707,
              "confidence": 0.98787,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 248731,
              "end": 248891,
              "confidence": 0.99764,
              "speaker": "MLK"
            },
            {
              "text": "made",
              "start": 248923,
              "end": 249187,
              "confidence": 0.99516,
              "speaker": "MLK"
            },
            {
              "text": "plain",
              "start": 249251,
              "end": 249787,
              "confidence": 0.99082,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 249931,
              "end": 250211,
              "confidence": 0.9921,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 250243,
              "end": 250411,
              "confidence": 0.99748,
              "speaker": "MLK"
            },
            {
              "text": "crooked",
              "start": 250443,
              "end": 250819,
              "confidence": 0.99793,
              "speaker": "MLK"
            },
            {
              "text": "places",
              "start": 250867,
              "end": 251219,
              "confidence": 0.98401,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 251267,
              "end": 251427,
              "confidence": 0.98833,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 251451,
              "end": 251611,
              "confidence": 0.99819,
              "speaker": "MLK"
            },
            {
              "text": "made",
              "start": 251643,
              "end": 251883,
              "confidence": 0.99851,
              "speaker": "MLK"
            },
            {
              "text": "straight.",
              "start": 251939,
              "end": 252379,
              "confidence": 0.75846,
              "speaker": "MLK"
            },
            {
              "text": "And",
              "start": 252467,
              "end": 252667,
              "confidence": 0.9891,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 252691,
              "end": 252827,
              "confidence": 0.985,
              "speaker": "MLK"
            },
            {
              "text": "glory",
              "start": 252851,
              "end": 252987,
              "confidence": 0.33122,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 253011,
              "end": 253123,
              "confidence": 0.97706,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 253139,
              "end": 253267,
              "confidence": 0.99463,
              "speaker": "MLK"
            },
            {
              "text": "Lord",
              "start": 253291,
              "end": 253555,
              "confidence": 0.95642,
              "speaker": "MLK"
            },
            {
              "text": "shall",
              "start": 253595,
              "end": 253795,
              "confidence": 0.99014,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 253835,
              "end": 254011,
              "confidence": 0.99469,
              "speaker": "MLK"
            },
            {
              "text": "revealed",
              "start": 254043,
              "end": 254411,
              "confidence": 0.39238,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 254443,
              "end": 254635,
              "confidence": 0.9114,
              "speaker": "MLK"
            },
            {
              "text": "all",
              "start": 254675,
              "end": 255019,
              "confidence": 0.96325,
              "speaker": "MLK"
            },
            {
              "text": "flesh",
              "start": 255107,
              "end": 255691,
              "confidence": 0.97878,
              "speaker": "MLK"
            },
            {
              "text": "shall",
              "start": 255843,
              "end": 256227,
              "confidence": 0.98943,
              "speaker": "MLK"
            },
            {
              "text": "see",
              "start": 256291,
              "end": 256443,
              "confidence": 0.92423,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 256459,
              "end": 256707,
              "confidence": 0.95762,
              "speaker": "MLK"
            },
            {
              "text": "together.",
              "start": 256771,
              "end": 257375,
              "confidence": 0.98756,
              "speaker": "MLK"
            },
            {
              "text": "This",
              "start": 257715,
              "end": 258027,
              "confidence": 0.99273,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 258051,
              "end": 258235,
              "confidence": 0.99265,
              "speaker": "MLK"
            },
            {
              "text": "our",
              "start": 258275,
              "end": 258499,
              "confidence": 0.98673,
              "speaker": "MLK"
            },
            {
              "text": "hope.",
              "start": 258547,
              "end": 259135,
              "confidence": 0.94649,
              "speaker": "MLK"
            },
            {
              "text": "This",
              "start": 259755,
              "end": 260091,
              "confidence": 0.99331,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 260123,
              "end": 260387,
              "confidence": 0.99428,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 260451,
              "end": 260675,
              "confidence": 0.69982,
              "speaker": "MLK"
            },
            {
              "text": "faith",
              "start": 260715,
              "end": 260979,
              "confidence": 0.77707,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 261027,
              "end": 261211,
              "confidence": 0.91357,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 261243,
              "end": 261483,
              "confidence": 0.99448,
              "speaker": "MLK"
            },
            {
              "text": "go",
              "start": 261539,
              "end": 261755,
              "confidence": 0.96619,
              "speaker": "MLK"
            },
            {
              "text": "back",
              "start": 261795,
              "end": 262019,
              "confidence": 0.99499,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 262067,
              "end": 262227,
              "confidence": 0.9921,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 262251,
              "end": 262411,
              "confidence": 0.9341,
              "speaker": "MLK"
            },
            {
              "text": "Southt",
              "start": 262443,
              "end": 262739,
              "confidence": 0.29502,
              "speaker": "MLK"
            },
            {
              "text": "with.",
              "start": 262787,
              "end": 263375,
              "confidence": 0.95633,
              "speaker": "MLK"
            },
            {
              "text": "With",
              "start": 263755,
              "end": 264091,
              "confidence": 0.97892,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 264123,
              "end": 264339,
              "confidence": 0.98043,
              "speaker": "MLK"
            },
            {
              "text": "faith",
              "start": 264387,
              "end": 265015,
              "confidence": 0.55516,
              "speaker": "MLK"
            },
            {
              "text": "we",
              "start": 265595,
              "end": 265931,
              "confidence": 0.89634,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 265963,
              "end": 266083,
              "confidence": 0.87798,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 266099,
              "end": 266437,
              "confidence": 0.71084,
              "speaker": "MLK"
            },
            {
              "text": "able",
              "start": 266531,
              "end": 266809,
              "confidence": 0.90271,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 266857,
              "end": 267041,
              "confidence": 0.97615,
              "speaker": "MLK"
            },
            {
              "text": "hew",
              "start": 267073,
              "end": 267217,
              "confidence": 0.87823,
              "speaker": "MLK"
            },
            {
              "text": "out",
              "start": 267241,
              "end": 267401,
              "confidence": 0.99265,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 267433,
              "end": 267577,
              "confidence": 0.99276,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 267601,
              "end": 267761,
              "confidence": 0.99719,
              "speaker": "MLK"
            },
            {
              "text": "mountain",
              "start": 267793,
              "end": 268145,
              "confidence": 0.99308,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 268185,
              "end": 268481,
              "confidence": 0.93375,
              "speaker": "MLK"
            },
            {
              "text": "despair",
              "start": 268553,
              "end": 269073,
              "confidence": 0.89778,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 269209,
              "end": 269529,
              "confidence": 0.97191,
              "speaker": "MLK"
            },
            {
              "text": "stone",
              "start": 269577,
              "end": 269833,
              "confidence": 0.99192,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 269889,
              "end": 270057,
              "confidence": 0.98189,
              "speaker": "MLK"
            },
            {
              "text": "hope.",
              "start": 270081,
              "end": 270645,
              "confidence": 0.94269,
              "speaker": "MLK"
            },
            {
              "text": "With",
              "start": 271185,
              "end": 271497,
              "confidence": 0.99667,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 271521,
              "end": 271753,
              "confidence": 0.99797,
              "speaker": "MLK"
            },
            {
              "text": "faith",
              "start": 271809,
              "end": 272445,
              "confidence": 0.93526,
              "speaker": "MLK"
            },
            {
              "text": "we",
              "start": 273025,
              "end": 273361,
              "confidence": 0.99665,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 273393,
              "end": 273561,
              "confidence": 0.99618,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 273593,
              "end": 273761,
              "confidence": 0.99555,
              "speaker": "MLK"
            },
            {
              "text": "able",
              "start": 273793,
              "end": 274033,
              "confidence": 0.99726,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 274089,
              "end": 274329,
              "confidence": 0.99826,
              "speaker": "MLK"
            },
            {
              "text": "transform",
              "start": 274377,
              "end": 275001,
              "confidence": 0.99912,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 275073,
              "end": 275281,
              "confidence": 0.9992,
              "speaker": "MLK"
            },
            {
              "text": "jangling",
              "start": 275313,
              "end": 275777,
              "confidence": 0.98714,
              "speaker": "MLK"
            },
            {
              "text": "discords",
              "start": 275841,
              "end": 276409,
              "confidence": 0.51463,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 276457,
              "end": 276617,
              "confidence": 0.9975,
              "speaker": "MLK"
            },
            {
              "text": "our",
              "start": 276641,
              "end": 276825,
              "confidence": 0.99879,
              "speaker": "MLK"
            },
            {
              "text": "nation",
              "start": 276865,
              "end": 277445,
              "confidence": 0.99927,
              "speaker": "MLK"
            },
            {
              "text": "into",
              "start": 277745,
              "end": 278033,
              "confidence": 0.99855,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 278049,
              "end": 278177,
              "confidence": 0.9917,
              "speaker": "MLK"
            },
            {
              "text": "beautiful",
              "start": 278201,
              "end": 278793,
              "confidence": 0.99667,
              "speaker": "MLK"
            },
            {
              "text": "symphony",
              "start": 278889,
              "end": 279329,
              "confidence": 0.98734,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 279377,
              "end": 279585,
              "confidence": 0.58844,
              "speaker": "MLK"
            },
            {
              "text": "brotherhood.",
              "start": 279625,
              "end": 280425,
              "confidence": 0.99313,
              "speaker": "MLK"
            },
            {
              "text": "With",
              "start": 280585,
              "end": 280881,
              "confidence": 0.99558,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 280913,
              "end": 281153,
              "confidence": 0.99735,
              "speaker": "MLK"
            },
            {
              "text": "faith",
              "start": 281209,
              "end": 281845,
              "confidence": 0.94157,
              "speaker": "MLK"
            },
            {
              "text": "we",
              "start": 282185,
              "end": 282545,
              "confidence": 0.99787,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 282585,
              "end": 282785,
              "confidence": 0.99375,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 282825,
              "end": 283001,
              "confidence": 0.99858,
              "speaker": "MLK"
            },
            {
              "text": "able",
              "start": 283033,
              "end": 283273,
              "confidence": 0.99838,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 283329,
              "end": 283521,
              "confidence": 0.99679,
              "speaker": "MLK"
            },
            {
              "text": "work",
              "start": 283553,
              "end": 283841,
              "confidence": 0.99889,
              "speaker": "MLK"
            },
            {
              "text": "together,",
              "start": 283913,
              "end": 284217,
              "confidence": 0.99827,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 284281,
              "end": 284505,
              "confidence": 0.99525,
              "speaker": "MLK"
            },
            {
              "text": "pray",
              "start": 284545,
              "end": 284817,
              "confidence": 0.99837,
              "speaker": "MLK"
            },
            {
              "text": "together,",
              "start": 284881,
              "end": 285273,
              "confidence": 0.99765,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 285369,
              "end": 285649,
              "confidence": 0.9973,
              "speaker": "MLK"
            },
            {
              "text": "struggle",
              "start": 285697,
              "end": 286185,
              "confidence": 0.99916,
              "speaker": "MLK"
            },
            {
              "text": "together,",
              "start": 286265,
              "end": 286673,
              "confidence": 0.99746,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 286769,
              "end": 287001,
              "confidence": 0.9929,
              "speaker": "MLK"
            },
            {
              "text": "go",
              "start": 287033,
              "end": 287177,
              "confidence": 0.9982,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 287201,
              "end": 287385,
              "confidence": 0.99676,
              "speaker": "MLK"
            },
            {
              "text": "jail",
              "start": 287425,
              "end": 287817,
              "confidence": 0.99761,
              "speaker": "MLK"
            },
            {
              "text": "together,",
              "start": 287921,
              "end": 288377,
              "confidence": 0.99672,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 288481,
              "end": 288769,
              "confidence": 0.99448,
              "speaker": "MLK"
            },
            {
              "text": "stand",
              "start": 288817,
              "end": 289001,
              "confidence": 0.99976,
              "speaker": "MLK"
            },
            {
              "text": "up",
              "start": 289033,
              "end": 289225,
              "confidence": 0.99385,
              "speaker": "MLK"
            },
            {
              "text": "for",
              "start": 289265,
              "end": 289465,
              "confidence": 0.99773,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 289505,
              "end": 289921,
              "confidence": 0.99907,
              "speaker": "MLK"
            },
            {
              "text": "together,",
              "start": 289993,
              "end": 290609,
              "confidence": 0.99552,
              "speaker": "MLK"
            },
            {
              "text": "knowing",
              "start": 290777,
              "end": 291305,
              "confidence": 0.99726,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 291385,
              "end": 291649,
              "confidence": 0.99595,
              "speaker": "MLK"
            },
            {
              "text": "we",
              "start": 291697,
              "end": 291881,
              "confidence": 0.99831,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 291913,
              "end": 292345,
              "confidence": 0.99664,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 292465,
              "end": 292769,
              "confidence": 0.99147,
              "speaker": "MLK"
            },
            {
              "text": "free",
              "start": 292817,
              "end": 293049,
              "confidence": 0.99942,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 293097,
              "end": 293305,
              "confidence": 0.99633,
              "speaker": "MLK"
            },
            {
              "text": "day",
              "start": 293345,
              "end": 293925,
              "confidence": 0.99737,
              "speaker": "MLK"
            },
            {
              "text": "if",
              "start": 295265,
              "end": 295865,
              "confidence": 0.24795,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 295985,
              "end": 296313,
              "confidence": 0.63193,
              "speaker": "MLK"
            },
            {
              "text": "la",
              "start": 296369,
              "end": 296965,
              "confidence": 0.54929,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 298695,
              "end": 299079,
              "confidence": 0.99088,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 299127,
              "end": 299311,
              "confidence": 0.99131,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 299343,
              "end": 299511,
              "confidence": 0.99573,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 299543,
              "end": 299687,
              "confidence": 0.99472,
              "speaker": "MLK"
            },
            {
              "text": "day",
              "start": 299711,
              "end": 299919,
              "confidence": 0.99816,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 299967,
              "end": 300175,
              "confidence": 0.55279,
              "speaker": "MLK"
            },
            {
              "text": "all",
              "start": 300215,
              "end": 300415,
              "confidence": 0.99601,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 300455,
              "end": 300655,
              "confidence": 0.92079,
              "speaker": "MLK"
            },
            {
              "text": "God's",
              "start": 300695,
              "end": 301175,
              "confidence": 0.79496,
              "speaker": "MLK"
            },
            {
              "text": "children",
              "start": 301255,
              "end": 301875,
              "confidence": 0.99543,
              "speaker": "MLK"
            },
            {
              "text": "Be",
              "start": 302615,
              "end": 302951,
              "confidence": 0.995,
              "speaker": "MLK"
            },
            {
              "text": "able",
              "start": 302983,
              "end": 303295,
              "confidence": 0.99798,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 303375,
              "end": 303615,
              "confidence": 0.99826,
              "speaker": "MLK"
            },
            {
              "text": "sing",
              "start": 303655,
              "end": 303903,
              "confidence": 0.99917,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 303959,
              "end": 304175,
              "confidence": 0.9985,
              "speaker": "MLK"
            },
            {
              "text": "new",
              "start": 304215,
              "end": 304415,
              "confidence": 0.99375,
              "speaker": "MLK"
            },
            {
              "text": "meaning.",
              "start": 304455,
              "end": 305159,
              "confidence": 0.89301,
              "speaker": "MLK"
            },
            {
              "text": "My",
              "start": 305327,
              "end": 305775,
              "confidence": 0.99489,
              "speaker": "MLK"
            },
            {
              "text": "country",
              "start": 305855,
              "end": 306095,
              "confidence": 0.99634,
              "speaker": "MLK"
            },
            {
              "text": "tears",
              "start": 306135,
              "end": 306383,
              "confidence": 0.5878,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 306439,
              "end": 306607,
              "confidence": 0.76617,
              "speaker": "MLK"
            },
            {
              "text": "thee",
              "start": 306631,
              "end": 307195,
              "confidence": 0.44576,
              "speaker": "MLK"
            },
            {
              "text": "Sweet",
              "start": 307935,
              "end": 308359,
              "confidence": 0.96148,
              "speaker": "MLK"
            },
            {
              "text": "land",
              "start": 308407,
              "end": 308687,
              "confidence": 0.9109,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 308751,
              "end": 308975,
              "confidence": 0.98997,
              "speaker": "MLK"
            },
            {
              "text": "liberty",
              "start": 309015,
              "end": 309503,
              "confidence": 0.99054,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 309559,
              "end": 309751,
              "confidence": 0.91956,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 309783,
              "end": 309927,
              "confidence": 0.43879,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 309951,
              "end": 310159,
              "confidence": 0.20778,
              "speaker": "MLK"
            },
            {
              "text": "sing",
              "start": 310207,
              "end": 310795,
              "confidence": 0.6327,
              "speaker": "MLK"
            },
            {
              "text": "Land",
              "start": 311455,
              "end": 311887,
              "confidence": 0.90862,
              "speaker": "MLK"
            },
            {
              "text": "where",
              "start": 311951,
              "end": 312175,
              "confidence": 0.98693,
              "speaker": "MLK"
            },
            {
              "text": "my",
              "start": 312215,
              "end": 312439,
              "confidence": 0.99858,
              "speaker": "MLK"
            },
            {
              "text": "fathers",
              "start": 312487,
              "end": 312983,
              "confidence": 0.61425,
              "speaker": "MLK"
            },
            {
              "text": "died",
              "start": 313039,
              "end": 313375,
              "confidence": 0.87253,
              "speaker": "MLK"
            },
            {
              "text": "Land",
              "start": 313455,
              "end": 313719,
              "confidence": 0.92926,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 313767,
              "end": 313927,
              "confidence": 0.6959,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 313951,
              "end": 314135,
              "confidence": 0.98024,
              "speaker": "MLK"
            },
            {
              "text": "pilgrim'pride",
              "start": 314175,
              "end": 315475,
              "confidence": 0.58189,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 316055,
              "end": 316511,
              "confidence": 0.99618,
              "speaker": "MLK"
            },
            {
              "text": "every",
              "start": 316583,
              "end": 317007,
              "confidence": 0.99881,
              "speaker": "MLK"
            },
            {
              "text": "mountainside",
              "start": 317111,
              "end": 318275,
              "confidence": 0.79654,
              "speaker": "MLK"
            },
            {
              "text": "let",
              "start": 318975,
              "end": 319359,
              "confidence": 0.99582,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 319407,
              "end": 319735,
              "confidence": 0.99906,
              "speaker": "MLK"
            },
            {
              "text": "ring.",
              "start": 319775,
              "end": 319999,
              "confidence": 0.98285,
              "speaker": "MLK"
            },
            {
              "text": "And",
              "start": 320047,
              "end": 320159,
              "confidence": 0.81012,
              "speaker": "MLK"
            },
            {
              "text": "if",
              "start": 320167,
              "end": 320431,
              "confidence": 0.77766,
              "speaker": "MLK"
            },
            {
              "text": "America",
              "start": 320503,
              "end": 320719,
              "confidence": 0.97564,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 320727,
              "end": 320871,
              "confidence": 0.79805,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 320903,
              "end": 321023,
              "confidence": 0.9972,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 321039,
              "end": 321143,
              "confidence": 0.9995,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 321159,
              "end": 321311,
              "confidence": 0.99876,
              "speaker": "MLK"
            },
            {
              "text": "great",
              "start": 321343,
              "end": 321535,
              "confidence": 0.99959,
              "speaker": "MLK"
            },
            {
              "text": "nation,",
              "start": 321575,
              "end": 322155,
              "confidence": 0.99689,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 322575,
              "end": 322983,
              "confidence": 0.99717,
              "speaker": "MLK"
            },
            {
              "text": "must",
              "start": 323039,
              "end": 323399,
              "confidence": 0.99884,
              "speaker": "MLK"
            },
            {
              "text": "become",
              "start": 323487,
              "end": 323759,
              "confidence": 0.98262,
              "speaker": "MLK"
            },
            {
              "text": "true.",
              "start": 323807,
              "end": 324395,
              "confidence": 0.98013,
              "speaker": "MLK"
            },
            {
              "text": "And",
              "start": 324715,
              "end": 325051,
              "confidence": 0.71275,
              "speaker": "MLK"
            },
            {
              "text": "so",
              "start": 325083,
              "end": 325275,
              "confidence": 0.99508,
              "speaker": "MLK"
            },
            {
              "text": "let",
              "start": 325315,
              "end": 325539,
              "confidence": 0.99786,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 325587,
              "end": 325915,
              "confidence": 0.99825,
              "speaker": "MLK"
            },
            {
              "text": "reign",
              "start": 325955,
              "end": 326535,
              "confidence": 0.91525,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 327235,
              "end": 327595,
              "confidence": 0.9902,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 327635,
              "end": 327811,
              "confidence": 0.99743,
              "speaker": "MLK"
            },
            {
              "text": "prodigious",
              "start": 327843,
              "end": 328275,
              "confidence": 0.99954,
              "speaker": "MLK"
            },
            {
              "text": "hilltops",
              "start": 328315,
              "end": 328875,
              "confidence": 0.72555,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 328915,
              "end": 329067,
              "confidence": 0.99802,
              "speaker": "MLK"
            },
            {
              "text": "New",
              "start": 329091,
              "end": 329227,
              "confidence": 0.99947,
              "speaker": "MLK"
            },
            {
              "text": "Hampshire.",
              "start": 329251,
              "end": 330015,
              "confidence": 0.58762,
              "speaker": "MLK"
            },
            {
              "text": "Let",
              "start": 330355,
              "end": 330715,
              "confidence": 0.9986,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 330755,
              "end": 331075,
              "confidence": 0.99874,
              "speaker": "MLK"
            },
            {
              "text": "reign",
              "start": 331115,
              "end": 331695,
              "confidence": 0.96264,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 332395,
              "end": 332731,
              "confidence": 0.99596,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 332763,
              "end": 332907,
              "confidence": 0.9984,
              "speaker": "MLK"
            },
            {
              "text": "mighty",
              "start": 332931,
              "end": 333235,
              "confidence": 0.99807,
              "speaker": "MLK"
            },
            {
              "text": "mountains",
              "start": 333275,
              "end": 333763,
              "confidence": 0.97852,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 333819,
              "end": 334011,
              "confidence": 0.98852,
              "speaker": "MLK"
            },
            {
              "text": "New",
              "start": 334043,
              "end": 334187,
              "confidence": 0.99913,
              "speaker": "MLK"
            },
            {
              "text": "York.",
              "start": 334211,
              "end": 334775,
              "confidence": 0.99822,
              "speaker": "MLK"
            },
            {
              "text": "Let",
              "start": 335595,
              "end": 336003,
              "confidence": 0.99842,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 336059,
              "end": 336395,
              "confidence": 0.9996,
              "speaker": "MLK"
            },
            {
              "text": "ring",
              "start": 336435,
              "end": 336755,
              "confidence": 0.51063,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 336835,
              "end": 337051,
              "confidence": 0.99906,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 337083,
              "end": 337227,
              "confidence": 0.99728,
              "speaker": "MLK"
            },
            {
              "text": "heightening",
              "start": 337251,
              "end": 337611,
              "confidence": 0.98316,
              "speaker": "MLK"
            },
            {
              "text": "alleghenies",
              "start": 337643,
              "end": 338259,
              "confidence": 0.95399,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 338307,
              "end": 338467,
              "confidence": 0.99606,
              "speaker": "MLK"
            },
            {
              "text": "Pennsylvania.",
              "start": 338491,
              "end": 339655,
              "confidence": 0.9828,
              "speaker": "MLK"
            },
            {
              "text": "Let",
              "start": 340235,
              "end": 340595,
              "confidence": 0.99887,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 340635,
              "end": 340979,
              "confidence": 0.99763,
              "speaker": "MLK"
            },
            {
              "text": "ring",
              "start": 341027,
              "end": 341283,
              "confidence": 0.98462,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 341339,
              "end": 341531,
              "confidence": 0.99755,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 341563,
              "end": 341707,
              "confidence": 0.99672,
              "speaker": "MLK"
            },
            {
              "text": "snow",
              "start": 341731,
              "end": 341939,
              "confidence": 0.99547,
              "speaker": "MLK"
            },
            {
              "text": "capped",
              "start": 341987,
              "end": 342211,
              "confidence": 0.62412,
              "speaker": "MLK"
            },
            {
              "text": "Rockies",
              "start": 342243,
              "end": 342619,
              "confidence": 0.90533,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 342667,
              "end": 342875,
              "confidence": 0.99069,
              "speaker": "MLK"
            },
            {
              "text": "Colorado.",
              "start": 342915,
              "end": 343935,
              "confidence": 0.99337,
              "speaker": "MLK"
            },
            {
              "text": "Let",
              "start": 344835,
              "end": 345219,
              "confidence": 0.9987,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 345267,
              "end": 345595,
              "confidence": 0.99948,
              "speaker": "MLK"
            },
            {
              "text": "ring",
              "start": 345635,
              "end": 346003,
              "confidence": 0.97346,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 346099,
              "end": 346331,
              "confidence": 0.99751,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 346363,
              "end": 346531,
              "confidence": 0.99747,
              "speaker": "MLK"
            },
            {
              "text": "curvaceous",
              "start": 346563,
              "end": 347147,
              "confidence": 0.51372,
              "speaker": "MLK"
            },
            {
              "text": "slopes",
              "start": 347211,
              "end": 347515,
              "confidence": 0.99522,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 347555,
              "end": 347779,
              "confidence": 0.99821,
              "speaker": "MLK"
            },
            {
              "text": "California.",
              "start": 347827,
              "end": 348867,
              "confidence": 0.99915,
              "speaker": "MLK"
            },
            {
              "text": "But",
              "start": 349051,
              "end": 349371,
              "confidence": 0.97916,
              "speaker": "MLK"
            },
            {
              "text": "not",
              "start": 349403,
              "end": 349691,
              "confidence": 0.99918,
              "speaker": "MLK"
            },
            {
              "text": "only",
              "start": 349763,
              "end": 349947,
              "confidence": 0.99563,
              "speaker": "MLK"
            },
            {
              "text": "that.",
              "start": 349971,
              "end": 350535,
              "confidence": 0.99779,
              "speaker": "MLK"
            },
            {
              "text": "Let",
              "start": 351265,
              "end": 351649,
              "confidence": 0.99456,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 351697,
              "end": 352089,
              "confidence": 0.99631,
              "speaker": "MLK"
            },
            {
              "text": "ring",
              "start": 352137,
              "end": 352537,
              "confidence": 0.96021,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 352641,
              "end": 353097,
              "confidence": 0.99736,
              "speaker": "MLK"
            },
            {
              "text": "Stone",
              "start": 353201,
              "end": 353561,
              "confidence": 0.98915,
              "speaker": "MLK"
            },
            {
              "text": "Mountain",
              "start": 353633,
              "end": 354001,
              "confidence": 0.98879,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 354033,
              "end": 354225,
              "confidence": 0.9925,
              "speaker": "MLK"
            },
            {
              "text": "Georgia.",
              "start": 354265,
              "end": 355005,
              "confidence": 0.97334,
              "speaker": "MLK"
            },
            {
              "text": "Let",
              "start": 356065,
              "end": 356449,
              "confidence": 0.99323,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 356497,
              "end": 356849,
              "confidence": 0.997,
              "speaker": "MLK"
            },
            {
              "text": "ring",
              "start": 356897,
              "end": 357297,
              "confidence": 0.94333,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 357401,
              "end": 357929,
              "confidence": 0.99049,
              "speaker": "MLK"
            },
            {
              "text": "Lookout",
              "start": 358057,
              "end": 358601,
              "confidence": 0.90082,
              "speaker": "MLK"
            },
            {
              "text": "Mountain",
              "start": 358673,
              "end": 359041,
              "confidence": 0.99525,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 359073,
              "end": 359241,
              "confidence": 0.99344,
              "speaker": "MLK"
            },
            {
              "text": "Tennessee.",
              "start": 359273,
              "end": 360125,
              "confidence": 0.99389,
              "speaker": "MLK"
            },
            {
              "text": "Let",
              "start": 360785,
              "end": 361193,
              "confidence": 0.98873,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 361249,
              "end": 361657,
              "confidence": 0.99913,
              "speaker": "MLK"
            },
            {
              "text": "ring",
              "start": 361721,
              "end": 362065,
              "confidence": 0.9557,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 362145,
              "end": 362457,
              "confidence": 0.99757,
              "speaker": "MLK"
            },
            {
              "text": "every",
              "start": 362521,
              "end": 362841,
              "confidence": 0.99511,
              "speaker": "MLK"
            },
            {
              "text": "hill",
              "start": 362913,
              "end": 363505,
              "confidence": 0.99755,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 363665,
              "end": 364009,
              "confidence": 0.99354,
              "speaker": "MLK"
            },
            {
              "text": "molehil",
              "start": 364057,
              "end": 364609,
              "confidence": 0.32018,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 364657,
              "end": 364817,
              "confidence": 0.95943,
              "speaker": "MLK"
            },
            {
              "text": "Mississippi.",
              "start": 364841,
              "end": 365937,
              "confidence": 0.98761,
              "speaker": "MLK"
            },
            {
              "text": "From",
              "start": 366081,
              "end": 366553,
              "confidence": 0.98615,
              "speaker": "MLK"
            },
            {
              "text": "every",
              "start": 366649,
              "end": 366953,
              "confidence": 0.99764,
              "speaker": "MLK"
            },
            {
              "text": "mountainside",
              "start": 367009,
              "end": 368085,
              "confidence": 0.82623,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 368785,
              "end": 369169,
              "confidence": 0.80834,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 369217,
              "end": 369569,
              "confidence": 0.67023,
              "speaker": "MLK"
            },
            {
              "text": "rain",
              "start": 369617,
              "end": 369889,
              "confidence": 0.42167,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 369937,
              "end": 370145,
              "confidence": 0.67713,
              "speaker": "MLK"
            },
            {
              "text": "wind",
              "start": 370185,
              "end": 370361,
              "confidence": 0.41829,
              "speaker": "MLK"
            },
            {
              "text": "we",
              "start": 370393,
              "end": 370965,
              "confidence": 0.23775,
              "speaker": "MLK"
            },
            {
              "text": "when",
              "start": 374265,
              "end": 374625,
              "confidence": 0.95663,
              "speaker": "MLK"
            },
            {
              "text": "we",
              "start": 374665,
              "end": 374913,
              "confidence": 0.983,
              "speaker": "MLK"
            },
            {
              "text": "allow",
              "start": 374969,
              "end": 375257,
              "confidence": 0.97459,
              "speaker": "MLK"
            },
            {
              "text": "freedom",
              "start": 375321,
              "end": 375689,
              "confidence": 0.93352,
              "speaker": "MLK"
            },
            {
              "text": "rings",
              "start": 375737,
              "end": 376325,
              "confidence": 0.67498,
              "speaker": "MLK"
            },
            {
              "text": "when",
              "start": 377705,
              "end": 378065,
              "confidence": 0.9877,
              "speaker": "MLK"
            },
            {
              "text": "we",
              "start": 378105,
              "end": 378281,
              "confidence": 0.99595,
              "speaker": "MLK"
            },
            {
              "text": "let",
              "start": 378313,
              "end": 378457,
              "confidence": 0.99886,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 378481,
              "end": 378689,
              "confidence": 0.99606,
              "speaker": "MLK"
            },
            {
              "text": "ring",
              "start": 378737,
              "end": 379089,
              "confidence": 0.90787,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 379177,
              "end": 379449,
              "confidence": 0.9966,
              "speaker": "MLK"
            },
            {
              "text": "every",
              "start": 379497,
              "end": 379681,
              "confidence": 0.99829,
              "speaker": "MLK"
            },
            {
              "text": "village",
              "start": 379713,
              "end": 380057,
              "confidence": 0.59178,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 380081,
              "end": 380265,
              "confidence": 0.80598,
              "speaker": "MLK"
            },
            {
              "text": "every",
              "start": 380305,
              "end": 380529,
              "confidence": 0.9833,
              "speaker": "MLK"
            },
            {
              "text": "hamlet,",
              "start": 380577,
              "end": 381227,
              "confidence": 0.9956,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 381361,
              "end": 381727,
              "confidence": 0.9804,
              "speaker": "MLK"
            },
            {
              "text": "every",
              "start": 381791,
              "end": 382159,
              "confidence": 0.99836,
              "speaker": "MLK"
            },
            {
              "text": "state",
              "start": 382247,
              "end": 382759,
              "confidence": 0.99976,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 382887,
              "end": 383199,
              "confidence": 0.77975,
              "speaker": "MLK"
            },
            {
              "text": "every",
              "start": 383247,
              "end": 383503,
              "confidence": 0.99771,
              "speaker": "MLK"
            },
            {
              "text": "city,",
              "start": 383559,
              "end": 384155,
              "confidence": 0.99848,
              "speaker": "MLK"
            },
            {
              "text": "we",
              "start": 385015,
              "end": 385375,
              "confidence": 0.99813,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 385415,
              "end": 385615,
              "confidence": 0.99739,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 385655,
              "end": 385831,
              "confidence": 0.99883,
              "speaker": "MLK"
            },
            {
              "text": "able",
              "start": 385863,
              "end": 386175,
              "confidence": 0.9985,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 386255,
              "end": 386567,
              "confidence": 0.99865,
              "speaker": "MLK"
            },
            {
              "text": "speed",
              "start": 386631,
              "end": 386879,
              "confidence": 0.99963,
              "speaker": "MLK"
            },
            {
              "text": "up",
              "start": 386927,
              "end": 387159,
              "confidence": 0.99784,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 387207,
              "end": 387439,
              "confidence": 0.99808,
              "speaker": "MLK"
            },
            {
              "text": "day",
              "start": 387487,
              "end": 387911,
              "confidence": 0.99754,
              "speaker": "MLK"
            },
            {
              "text": "when",
              "start": 388023,
              "end": 388343,
              "confidence": 0.88465,
              "speaker": "MLK"
            },
            {
              "text": "all",
              "start": 388399,
              "end": 388663,
              "confidence": 0.99818,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 388719,
              "end": 388935,
              "confidence": 0.60064,
              "speaker": "MLK"
            },
            {
              "text": "go'children",
              "start": 388975,
              "end": 389999,
              "confidence": 0.16252,
              "speaker": "MLK"
            },
            {
              "text": "black",
              "start": 390087,
              "end": 390407,
              "confidence": 0.99518,
              "speaker": "MLK"
            },
            {
              "text": "men",
              "start": 390471,
              "end": 390719,
              "confidence": 0.99701,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 390767,
              "end": 390999,
              "confidence": 0.99565,
              "speaker": "MLK"
            },
            {
              "text": "white",
              "start": 391047,
              "end": 391303,
              "confidence": 0.99621,
              "speaker": "MLK"
            },
            {
              "text": "men,",
              "start": 391359,
              "end": 391887,
              "confidence": 0.98896,
              "speaker": "MLK"
            },
            {
              "text": "Jews",
              "start": 392031,
              "end": 392447,
              "confidence": 0.98812,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 392511,
              "end": 392783,
              "confidence": 0.99691,
              "speaker": "MLK"
            },
            {
              "text": "Gentiles,",
              "start": 392839,
              "end": 393535,
              "confidence": 0.96498,
              "speaker": "MLK"
            },
            {
              "text": "Protestants",
              "start": 393655,
              "end": 394263,
              "confidence": 0.99542,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 394319,
              "end": 394583,
              "confidence": 0.94459,
              "speaker": "MLK"
            },
            {
              "text": "Catholics",
              "start": 394639,
              "end": 395295,
              "confidence": 0.60934,
              "speaker": "MLK"
            },
            {
              "text": "will",
              "start": 395415,
              "end": 395671,
              "confidence": 0.97405,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 395703,
              "end": 395847,
              "confidence": 0.99742,
              "speaker": "MLK"
            },
            {
              "text": "able",
              "start": 395871,
              "end": 396079,
              "confidence": 0.99719,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 396127,
              "end": 396335,
              "confidence": 0.99795,
              "speaker": "MLK"
            },
            {
              "text": "join",
              "start": 396375,
              "end": 396695,
              "confidence": 0.99396,
              "speaker": "MLK"
            },
            {
              "text": "hands",
              "start": 396775,
              "end": 397455,
              "confidence": 0.99176,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 397615,
              "end": 397935,
              "confidence": 0.99473,
              "speaker": "MLK"
            },
            {
              "text": "sing",
              "start": 397975,
              "end": 398151,
              "confidence": 0.99766,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 398183,
              "end": 398327,
              "confidence": 0.88936,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 398351,
              "end": 398511,
              "confidence": 0.99357,
              "speaker": "MLK"
            },
            {
              "text": "words",
              "start": 398543,
              "end": 398799,
              "confidence": 0.98775,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 398847,
              "end": 399031,
              "confidence": 0.99757,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 399063,
              "end": 399207,
              "confidence": 0.99318,
              "speaker": "MLK"
            },
            {
              "text": "old",
              "start": 399231,
              "end": 399439,
              "confidence": 0.80677,
              "speaker": "MLK"
            },
            {
              "text": "Negro",
              "start": 399487,
              "end": 399935,
              "confidence": 0.98722,
              "speaker": "MLK"
            },
            {
              "text": "spiritual.",
              "start": 400015,
              "end": 400735,
              "confidence": 0.87511,
              "speaker": "MLK"
            },
            {
              "text": "Free",
              "start": 400855,
              "end": 401111,
              "confidence": 0.99133,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 401143,
              "end": 401359,
              "confidence": 0.99428,
              "speaker": "MLK"
            },
            {
              "text": "last,",
              "start": 401407,
              "end": 402047,
              "confidence": 0.98855,
              "speaker": "MLK"
            },
            {
              "text": "Free",
              "start": 402231,
              "end": 402527,
              "confidence": 0.99513,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 402551,
              "end": 402759,
              "confidence": 0.99662,
              "speaker": "MLK"
            },
            {
              "text": "last.",
              "start": 402807,
              "end": 403423,
              "confidence": 0.99631,
              "speaker": "MLK"
            },
            {
              "text": "Thank",
              "start": 403599,
              "end": 404071,
              "confidence": 0.94601,
              "speaker": "MLK"
            },
            {
              "text": "God",
              "start": 404143,
              "end": 404351,
              "confidence": 0.81314,
              "speaker": "MLK"
            },
            {
              "text": "Almighty,",
              "start": 404383,
              "end": 405111,
              "confidence": 0.94978,
              "speaker": "MLK"
            },
            {
              "text": "we",
              "start": 405223,
              "end": 405567,
              "confidence": 0.28069,
              "speaker": "MLK"
            },
            {
              "text": "fear.",
              "start": 405631,
              "end": 405735,
              "confidence": 0.18363,
              "speaker": "MLK"
            }
          ]
        }
      ],
      "chapters": [
        {
          "headline": "Five score years ago, a great American signed the Emancipation Proclamation",
          "summary": "Five score years ago, a great American signed the Emancipation Proclamation. 100 years later, the life of the Negro is still crippled by the manacles of segregation. Dr. Martin Luther King Geior: I have a dream that one day this nation will live out the true meaning of its creed.",
          "start": 335,
          "end": 405735,
          "gist": "Dr. Martin Luther King, Jr."
        }
      ],
      "allWords": [
        {
          "text": "I",
          "start": 335,
          "end": 447,
          "confidence": 0.99493,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 471,
          "end": 679,
          "confidence": 0.99141,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 727,
          "end": 911,
          "confidence": 0.99595,
          "speaker": "MLK"
        },
        {
          "text": "pleasure",
          "start": 943,
          "end": 1231,
          "confidence": 0.99899,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 1263,
          "end": 1407,
          "confidence": 0.99877,
          "speaker": "MLK"
        },
        {
          "text": "present",
          "start": 1431,
          "end": 1687,
          "confidence": 0.99994,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 1751,
          "end": 1927,
          "confidence": 0.99581,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 1951,
          "end": 2495,
          "confidence": 0.99201,
          "speaker": "MLK"
        },
        {
          "text": "Dr.",
          "start": 2655,
          "end": 3135,
          "confidence": 0.99424,
          "speaker": "MLK"
        },
        {
          "text": "Martin",
          "start": 3175,
          "end": 3511,
          "confidence": 0.99324,
          "speaker": "MLK"
        },
        {
          "text": "Luther",
          "start": 3543,
          "end": 3895,
          "confidence": 0.98408,
          "speaker": "MLK"
        },
        {
          "text": "King",
          "start": 3935,
          "end": 4327,
          "confidence": 0.97978,
          "speaker": "MLK"
        },
        {
          "text": "Geior.",
          "start": 4431,
          "end": 5195,
          "confidence": 0.16533,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 13055,
          "end": 13343,
          "confidence": 0.97169,
          "speaker": "MLK"
        },
        {
          "text": "am",
          "start": 13359,
          "end": 13631,
          "confidence": 0.97997,
          "speaker": "MLK"
        },
        {
          "text": "happy",
          "start": 13703,
          "end": 14375,
          "confidence": 0.99979,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 14495,
          "end": 14823,
          "confidence": 0.99963,
          "speaker": "MLK"
        },
        {
          "text": "join",
          "start": 14879,
          "end": 15263,
          "confidence": 0.92285,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 15359,
          "end": 15591,
          "confidence": 0.99872,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 15623,
          "end": 15911,
          "confidence": 0.99945,
          "speaker": "MLK"
        },
        {
          "text": "today",
          "start": 15983,
          "end": 16595,
          "confidence": 0.99643,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 18615,
          "end": 19215,
          "confidence": 0.99721,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 19335,
          "end": 19639,
          "confidence": 0.99958,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 19687,
          "end": 19943,
          "confidence": 0.99792,
          "speaker": "MLK"
        },
        {
          "text": "go",
          "start": 19999,
          "end": 20215,
          "confidence": 0.99904,
          "speaker": "MLK"
        },
        {
          "text": "down",
          "start": 20255,
          "end": 20695,
          "confidence": 0.9975,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 20815,
          "end": 21311,
          "confidence": 0.99914,
          "speaker": "MLK"
        },
        {
          "text": "history",
          "start": 21423,
          "end": 22075,
          "confidence": 0.99963,
          "speaker": "MLK"
        },
        {
          "text": "as",
          "start": 23295,
          "end": 23679,
          "confidence": 0.99113,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 23727,
          "end": 23911,
          "confidence": 0.68528,
          "speaker": "MLK"
        },
        {
          "text": "greatest",
          "start": 23943,
          "end": 24335,
          "confidence": 0.99535,
          "speaker": "MLK"
        },
        {
          "text": "demonstration",
          "start": 24415,
          "end": 25439,
          "confidence": 0.89513,
          "speaker": "MLK"
        },
        {
          "text": "for",
          "start": 25607,
          "end": 26031,
          "confidence": 0.99104,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 26103,
          "end": 26599,
          "confidence": 0.99837,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 26687,
          "end": 26959,
          "confidence": 0.99808,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 27007,
          "end": 27383,
          "confidence": 0.99856,
          "speaker": "MLK"
        },
        {
          "text": "history",
          "start": 27479,
          "end": 27783,
          "confidence": 0.99936,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 27839,
          "end": 28031,
          "confidence": 0.99828,
          "speaker": "MLK"
        },
        {
          "text": "our",
          "start": 28063,
          "end": 28279,
          "confidence": 0.99837,
          "speaker": "MLK"
        },
        {
          "text": "nation.",
          "start": 28327,
          "end": 28915,
          "confidence": 0.99828,
          "speaker": "MLK"
        },
        {
          "text": "Five",
          "start": 37845,
          "end": 38517,
          "confidence": 0.99257,
          "speaker": "MLK"
        },
        {
          "text": "score",
          "start": 38661,
          "end": 39325,
          "confidence": 0.98546,
          "speaker": "MLK"
        },
        {
          "text": "years",
          "start": 39485,
          "end": 39949,
          "confidence": 0.99753,
          "speaker": "MLK"
        },
        {
          "text": "ago,",
          "start": 40037,
          "end": 40665,
          "confidence": 0.99187,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 43125,
          "end": 43437,
          "confidence": 0.99749,
          "speaker": "MLK"
        },
        {
          "text": "great",
          "start": 43461,
          "end": 43789,
          "confidence": 0.99844,
          "speaker": "MLK"
        },
        {
          "text": "American",
          "start": 43877,
          "end": 44173,
          "confidence": 0.99903,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 44229,
          "end": 44421,
          "confidence": 0.99868,
          "speaker": "MLK"
        },
        {
          "text": "whose",
          "start": 44453,
          "end": 44853,
          "confidence": 0.57125,
          "speaker": "MLK"
        },
        {
          "text": "symbolic",
          "start": 44949,
          "end": 45981,
          "confidence": 0.89029,
          "speaker": "MLK"
        },
        {
          "text": "shadow",
          "start": 46173,
          "end": 46621,
          "confidence": 0.97593,
          "speaker": "MLK"
        },
        {
          "text": "we",
          "start": 46653,
          "end": 46917,
          "confidence": 0.9971,
          "speaker": "MLK"
        },
        {
          "text": "stand",
          "start": 46981,
          "end": 47397,
          "confidence": 0.99956,
          "speaker": "MLK"
        },
        {
          "text": "today",
          "start": 47501,
          "end": 48145,
          "confidence": 0.99629,
          "speaker": "MLK"
        },
        {
          "text": "signed",
          "start": 49685,
          "end": 50485,
          "confidence": 0.96433,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 50645,
          "end": 51037,
          "confidence": 0.99485,
          "speaker": "MLK"
        },
        {
          "text": "Emancipation",
          "start": 51101,
          "end": 52205,
          "confidence": 0.77539,
          "speaker": "MLK"
        },
        {
          "text": "Proclamation.",
          "start": 52325,
          "end": 53505,
          "confidence": 0.60211,
          "speaker": "MLK"
        },
        {
          "text": "This",
          "start": 55405,
          "end": 55813,
          "confidence": 0.99878,
          "speaker": "MLK"
        },
        {
          "text": "momentous",
          "start": 55869,
          "end": 56413,
          "confidence": 0.99762,
          "speaker": "MLK"
        },
        {
          "text": "decree",
          "start": 56469,
          "end": 56965,
          "confidence": 0.99913,
          "speaker": "MLK"
        },
        {
          "text": "came",
          "start": 57045,
          "end": 57665,
          "confidence": 0.99489,
          "speaker": "MLK"
        },
        {
          "text": "as",
          "start": 59315,
          "end": 59675,
          "confidence": 0.9611,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 59715,
          "end": 59867,
          "confidence": 0.83217,
          "speaker": "MLK"
        },
        {
          "text": "great",
          "start": 59891,
          "end": 60123,
          "confidence": 0.9037,
          "speaker": "MLK"
        },
        {
          "text": "beacon",
          "start": 60179,
          "end": 60555,
          "confidence": 0.98204,
          "speaker": "MLK"
        },
        {
          "text": "light",
          "start": 60595,
          "end": 60795,
          "confidence": 0.99714,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 60835,
          "end": 61011,
          "confidence": 0.98975,
          "speaker": "MLK"
        },
        {
          "text": "hope",
          "start": 61043,
          "end": 61307,
          "confidence": 0.99779,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 61371,
          "end": 61571,
          "confidence": 0.99429,
          "speaker": "MLK"
        },
        {
          "text": "millions",
          "start": 61603,
          "end": 62203,
          "confidence": 0.99317,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 62299,
          "end": 62531,
          "confidence": 0.99904,
          "speaker": "MLK"
        },
        {
          "text": "Negro",
          "start": 62563,
          "end": 63059,
          "confidence": 0.99816,
          "speaker": "MLK"
        },
        {
          "text": "slaves",
          "start": 63147,
          "end": 63815,
          "confidence": 0.98377,
          "speaker": "MLK"
        },
        {
          "text": "who",
          "start": 64995,
          "end": 65355,
          "confidence": 0.99388,
          "speaker": "MLK"
        },
        {
          "text": "had",
          "start": 65395,
          "end": 65595,
          "confidence": 0.99192,
          "speaker": "MLK"
        },
        {
          "text": "been",
          "start": 65635,
          "end": 65955,
          "confidence": 0.99681,
          "speaker": "MLK"
        },
        {
          "text": "seared",
          "start": 66035,
          "end": 66395,
          "confidence": 0.99153,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 66475,
          "end": 66715,
          "confidence": 0.99599,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 66755,
          "end": 66955,
          "confidence": 0.99595,
          "speaker": "MLK"
        },
        {
          "text": "flames",
          "start": 66995,
          "end": 67507,
          "confidence": 0.99166,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 67651,
          "end": 67955,
          "confidence": 0.99827,
          "speaker": "MLK"
        },
        {
          "text": "withering",
          "start": 67995,
          "end": 68555,
          "confidence": 0.99888,
          "speaker": "MLK"
        },
        {
          "text": "injustice.",
          "start": 68635,
          "end": 69695,
          "confidence": 0.99466,
          "speaker": "MLK"
        },
        {
          "text": "It",
          "start": 71355,
          "end": 71739,
          "confidence": 0.98507,
          "speaker": "MLK"
        },
        {
          "text": "came",
          "start": 71787,
          "end": 72067,
          "confidence": 0.99722,
          "speaker": "MLK"
        },
        {
          "text": "as",
          "start": 72131,
          "end": 72355,
          "confidence": 0.99628,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 72395,
          "end": 72571,
          "confidence": 0.99588,
          "speaker": "MLK"
        },
        {
          "text": "joyous",
          "start": 72603,
          "end": 73051,
          "confidence": 0.99827,
          "speaker": "MLK"
        },
        {
          "text": "daybreak",
          "start": 73123,
          "end": 74055,
          "confidence": 0.93086,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 75795,
          "end": 76131,
          "confidence": 0.98978,
          "speaker": "MLK"
        },
        {
          "text": "end",
          "start": 76163,
          "end": 76499,
          "confidence": 0.99702,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 76587,
          "end": 76835,
          "confidence": 0.99596,
          "speaker": "MLK"
        },
        {
          "text": "long",
          "start": 76875,
          "end": 77267,
          "confidence": 0.98519,
          "speaker": "MLK"
        },
        {
          "text": "night",
          "start": 77371,
          "end": 77899,
          "confidence": 0.9985,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 78027,
          "end": 78291,
          "confidence": 0.99301,
          "speaker": "MLK"
        },
        {
          "text": "their",
          "start": 78323,
          "end": 78659,
          "confidence": 0.99071,
          "speaker": "MLK"
        },
        {
          "text": "captivity.",
          "start": 78747,
          "end": 79695,
          "confidence": 0.58084,
          "speaker": "MLK"
        },
        {
          "text": "But",
          "start": 81835,
          "end": 82267,
          "confidence": 0.99537,
          "speaker": "MLK"
        },
        {
          "text": "100",
          "start": 82331,
          "end": 83171,
          "confidence": 0.99845,
          "speaker": "MLK"
        },
        {
          "text": "years",
          "start": 83283,
          "end": 83867,
          "confidence": 0.99813,
          "speaker": "MLK"
        },
        {
          "text": "later,",
          "start": 84011,
          "end": 84695,
          "confidence": 0.99808,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 86795,
          "end": 87155,
          "confidence": 0.99417,
          "speaker": "MLK"
        },
        {
          "text": "Negro",
          "start": 87195,
          "end": 87931,
          "confidence": 0.99746,
          "speaker": "MLK"
        },
        {
          "text": "still",
          "start": 88083,
          "end": 88775,
          "confidence": 0.99623,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 89635,
          "end": 90019,
          "confidence": 0.99749,
          "speaker": "MLK"
        },
        {
          "text": "not",
          "start": 90067,
          "end": 90347,
          "confidence": 0.99871,
          "speaker": "MLK"
        },
        {
          "text": "free.",
          "start": 90411,
          "end": 91015,
          "confidence": 0.9986,
          "speaker": "MLK"
        },
        {
          "text": "100",
          "start": 92755,
          "end": 93395,
          "confidence": 0.99792,
          "speaker": "MLK"
        },
        {
          "text": "years",
          "start": 93435,
          "end": 93827,
          "confidence": 0.9973,
          "speaker": "MLK"
        },
        {
          "text": "later,",
          "start": 93931,
          "end": 94575,
          "confidence": 0.99852,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 96355,
          "end": 96691,
          "confidence": 0.99859,
          "speaker": "MLK"
        },
        {
          "text": "life",
          "start": 96723,
          "end": 96915,
          "confidence": 0.99458,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 96955,
          "end": 97083,
          "confidence": 0.99634,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 97099,
          "end": 97227,
          "confidence": 0.99511,
          "speaker": "MLK"
        },
        {
          "text": "Negro",
          "start": 97251,
          "end": 97571,
          "confidence": 0.99728,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 97603,
          "end": 97915,
          "confidence": 0.98381,
          "speaker": "MLK"
        },
        {
          "text": "still",
          "start": 97995,
          "end": 98595,
          "confidence": 0.99574,
          "speaker": "MLK"
        },
        {
          "text": "sadly",
          "start": 98755,
          "end": 99491,
          "confidence": 0.99667,
          "speaker": "MLK"
        },
        {
          "text": "crippled",
          "start": 99563,
          "end": 100059,
          "confidence": 0.99579,
          "speaker": "MLK"
        },
        {
          "text": "by",
          "start": 100147,
          "end": 100443,
          "confidence": 0.99856,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 100499,
          "end": 100715,
          "confidence": 0.99879,
          "speaker": "MLK"
        },
        {
          "text": "manacles",
          "start": 100755,
          "end": 101339,
          "confidence": 0.95526,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 101427,
          "end": 101699,
          "confidence": 0.99838,
          "speaker": "MLK"
        },
        {
          "text": "segregation",
          "start": 101747,
          "end": 102655,
          "confidence": 0.9802,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 103755,
          "end": 104115,
          "confidence": 0.9981,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 104155,
          "end": 104355,
          "confidence": 0.99498,
          "speaker": "MLK"
        },
        {
          "text": "chains",
          "start": 104395,
          "end": 104883,
          "confidence": 0.99398,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 105019,
          "end": 105291,
          "confidence": 0.99918,
          "speaker": "MLK"
        },
        {
          "text": "discrimination.",
          "start": 105323,
          "end": 106335,
          "confidence": 0.98352,
          "speaker": "MLK"
        },
        {
          "text": "100",
          "start": 106995,
          "end": 107699,
          "confidence": 0.99791,
          "speaker": "MLK"
        },
        {
          "text": "years",
          "start": 107747,
          "end": 108123,
          "confidence": 0.99904,
          "speaker": "MLK"
        },
        {
          "text": "later,",
          "start": 108219,
          "end": 108855,
          "confidence": 0.99533,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 110155,
          "end": 110491,
          "confidence": 0.99073,
          "speaker": "MLK"
        },
        {
          "text": "Negro",
          "start": 110523,
          "end": 110923,
          "confidence": 0.99802,
          "speaker": "MLK"
        },
        {
          "text": "lives",
          "start": 110979,
          "end": 111291,
          "confidence": 0.99603,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 111363,
          "end": 111595,
          "confidence": 0.99948,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 111635,
          "end": 111787,
          "confidence": 0.99794,
          "speaker": "MLK"
        },
        {
          "text": "lonely",
          "start": 111811,
          "end": 112219,
          "confidence": 0.99876,
          "speaker": "MLK"
        },
        {
          "text": "island",
          "start": 112267,
          "end": 112819,
          "confidence": 0.99783,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 112907,
          "end": 113131,
          "confidence": 0.99351,
          "speaker": "MLK"
        },
        {
          "text": "poverty.",
          "start": 113163,
          "end": 113935,
          "confidence": 0.98559,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 114355,
          "end": 114667,
          "confidence": 0.99589,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 114691,
          "end": 114851,
          "confidence": 0.99633,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 114883,
          "end": 115051,
          "confidence": 0.99756,
          "speaker": "MLK"
        },
        {
          "text": "dream",
          "start": 115083,
          "end": 115695,
          "confidence": 0.91705,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 116815,
          "end": 117175,
          "confidence": 0.84013,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 117215,
          "end": 117415,
          "confidence": 0.99453,
          "speaker": "MLK"
        },
        {
          "text": "day",
          "start": 117455,
          "end": 118035,
          "confidence": 0.99622,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 119495,
          "end": 119927,
          "confidence": 0.99744,
          "speaker": "MLK"
        },
        {
          "text": "nation",
          "start": 119991,
          "end": 120455,
          "confidence": 0.99962,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 120575,
          "end": 120999,
          "confidence": 0.99909,
          "speaker": "MLK"
        },
        {
          "text": "rise",
          "start": 121087,
          "end": 121479,
          "confidence": 0.99423,
          "speaker": "MLK"
        },
        {
          "text": "up",
          "start": 121567,
          "end": 122195,
          "confidence": 0.99346,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 123175,
          "end": 123511,
          "confidence": 0.93114,
          "speaker": "MLK"
        },
        {
          "text": "live",
          "start": 123543,
          "end": 123735,
          "confidence": 0.99641,
          "speaker": "MLK"
        },
        {
          "text": "out",
          "start": 123775,
          "end": 123999,
          "confidence": 0.99337,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 124047,
          "end": 124255,
          "confidence": 0.99673,
          "speaker": "MLK"
        },
        {
          "text": "true",
          "start": 124295,
          "end": 124495,
          "confidence": 0.99911,
          "speaker": "MLK"
        },
        {
          "text": "meaning",
          "start": 124535,
          "end": 124831,
          "confidence": 0.99813,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 124863,
          "end": 124983,
          "confidence": 0.99843,
          "speaker": "MLK"
        },
        {
          "text": "its",
          "start": 124999,
          "end": 125223,
          "confidence": 0.99065,
          "speaker": "MLK"
        },
        {
          "text": "creed.",
          "start": 125279,
          "end": 125875,
          "confidence": 0.92107,
          "speaker": "MLK"
        },
        {
          "text": "We",
          "start": 126855,
          "end": 127239,
          "confidence": 0.97374,
          "speaker": "MLK"
        },
        {
          "text": "hold",
          "start": 127287,
          "end": 127543,
          "confidence": 0.90796,
          "speaker": "MLK"
        },
        {
          "text": "these",
          "start": 127599,
          "end": 127935,
          "confidence": 0.99507,
          "speaker": "MLK"
        },
        {
          "text": "truths",
          "start": 128015,
          "end": 128359,
          "confidence": 0.80672,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 128407,
          "end": 128567,
          "confidence": 0.99845,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 128591,
          "end": 128823,
          "confidence": 0.99809,
          "speaker": "MLK"
        },
        {
          "text": "self.",
          "start": 128879,
          "end": 129183,
          "confidence": 0.99799,
          "speaker": "MLK"
        },
        {
          "text": "Evident",
          "start": 129239,
          "end": 130111,
          "confidence": 0.99556,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 130303,
          "end": 130751,
          "confidence": 0.99743,
          "speaker": "MLK"
        },
        {
          "text": "all",
          "start": 130823,
          "end": 131151,
          "confidence": 0.9997,
          "speaker": "MLK"
        },
        {
          "text": "men",
          "start": 131223,
          "end": 131479,
          "confidence": 0.99759,
          "speaker": "MLK"
        },
        {
          "text": "are",
          "start": 131527,
          "end": 131759,
          "confidence": 0.99463,
          "speaker": "MLK"
        },
        {
          "text": "created",
          "start": 131807,
          "end": 132151,
          "confidence": 0.99715,
          "speaker": "MLK"
        },
        {
          "text": "equal.",
          "start": 132183,
          "end": 132835,
          "confidence": 0.52384,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 141895,
          "end": 142231,
          "confidence": 0.99591,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 142263,
          "end": 142407,
          "confidence": 0.99636,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 142431,
          "end": 142591,
          "confidence": 0.99721,
          "speaker": "MLK"
        },
        {
          "text": "dream",
          "start": 142623,
          "end": 143235,
          "confidence": 0.98619,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 144905,
          "end": 145265,
          "confidence": 0.80785,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 145305,
          "end": 145481,
          "confidence": 0.99642,
          "speaker": "MLK"
        },
        {
          "text": "day",
          "start": 145513,
          "end": 145729,
          "confidence": 0.99736,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 145777,
          "end": 146033,
          "confidence": 0.99476,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 146089,
          "end": 146281,
          "confidence": 0.99163,
          "speaker": "MLK"
        },
        {
          "text": "red",
          "start": 146313,
          "end": 146553,
          "confidence": 0.99749,
          "speaker": "MLK"
        },
        {
          "text": "hills",
          "start": 146609,
          "end": 146993,
          "confidence": 0.44383,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 147049,
          "end": 147241,
          "confidence": 0.56068,
          "speaker": "MLK"
        },
        {
          "text": "joy.",
          "start": 147273,
          "end": 147845,
          "confidence": 0.23355,
          "speaker": "MLK"
        },
        {
          "text": "Sons.",
          "start": 149545,
          "end": 150017,
          "confidence": 0.99411,
          "speaker": "MLK"
        },
        {
          "text": "Of",
          "start": 150081,
          "end": 150449,
          "confidence": 0.98702,
          "speaker": "MLK"
        },
        {
          "text": "former",
          "start": 150537,
          "end": 150833,
          "confidence": 0.99834,
          "speaker": "MLK"
        },
        {
          "text": "slaves",
          "start": 150889,
          "end": 151257,
          "confidence": 0.99499,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 151321,
          "end": 151497,
          "confidence": 0.99088,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 151521,
          "end": 151729,
          "confidence": 0.94684,
          "speaker": "MLK"
        },
        {
          "text": "sons",
          "start": 151777,
          "end": 152113,
          "confidence": 0.99064,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 152169,
          "end": 152529,
          "confidence": 0.45272,
          "speaker": "MLK"
        },
        {
          "text": "former",
          "start": 152617,
          "end": 152889,
          "confidence": 0.94134,
          "speaker": "MLK"
        },
        {
          "text": "slave",
          "start": 152937,
          "end": 153169,
          "confidence": 0.99879,
          "speaker": "MLK"
        },
        {
          "text": "owners",
          "start": 153217,
          "end": 153965,
          "confidence": 0.96233,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 154545,
          "end": 155049,
          "confidence": 0.97569,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 155137,
          "end": 155361,
          "confidence": 0.98994,
          "speaker": "MLK"
        },
        {
          "text": "able",
          "start": 155393,
          "end": 155825,
          "confidence": 0.99683,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 155945,
          "end": 156225,
          "confidence": 0.99733,
          "speaker": "MLK"
        },
        {
          "text": "sit",
          "start": 156265,
          "end": 156441,
          "confidence": 0.99192,
          "speaker": "MLK"
        },
        {
          "text": "down",
          "start": 156473,
          "end": 156929,
          "confidence": 0.99849,
          "speaker": "MLK"
        },
        {
          "text": "together",
          "start": 157057,
          "end": 157345,
          "confidence": 0.99603,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 157385,
          "end": 157537,
          "confidence": 0.98924,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 157561,
          "end": 157721,
          "confidence": 0.99714,
          "speaker": "MLK"
        },
        {
          "text": "table",
          "start": 157753,
          "end": 157969,
          "confidence": 0.99858,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 158017,
          "end": 158201,
          "confidence": 0.99641,
          "speaker": "MLK"
        },
        {
          "text": "brotherhood.",
          "start": 158233,
          "end": 158993,
          "confidence": 0.97499,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 159129,
          "end": 159401,
          "confidence": 0.99667,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 159433,
          "end": 159601,
          "confidence": 0.99818,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 159633,
          "end": 159777,
          "confidence": 0.99812,
          "speaker": "MLK"
        },
        {
          "text": "dream",
          "start": 159801,
          "end": 160405,
          "confidence": 0.98788,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 161265,
          "end": 161601,
          "confidence": 0.7138,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 161633,
          "end": 161825,
          "confidence": 0.99742,
          "speaker": "MLK"
        },
        {
          "text": "day",
          "start": 161865,
          "end": 162445,
          "confidence": 0.9972,
          "speaker": "MLK"
        },
        {
          "text": "even",
          "start": 164385,
          "end": 164745,
          "confidence": 0.99118,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 164785,
          "end": 165009,
          "confidence": 0.99842,
          "speaker": "MLK"
        },
        {
          "text": "state",
          "start": 165057,
          "end": 165217,
          "confidence": 0.9988,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 165241,
          "end": 165401,
          "confidence": 0.99871,
          "speaker": "MLK"
        },
        {
          "text": "Mississippi,",
          "start": 165433,
          "end": 166161,
          "confidence": 0.99539,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 166193,
          "end": 166433,
          "confidence": 0.97175,
          "speaker": "MLK"
        },
        {
          "text": "state",
          "start": 166489,
          "end": 167113,
          "confidence": 0.96808,
          "speaker": "MLK"
        },
        {
          "text": "sweltering",
          "start": 167289,
          "end": 168241,
          "confidence": 0.98881,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 168353,
          "end": 168673,
          "confidence": 0.99788,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 168729,
          "end": 169209,
          "confidence": 0.95159,
          "speaker": "MLK"
        },
        {
          "text": "heat",
          "start": 169337,
          "end": 169601,
          "confidence": 0.7008,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 169633,
          "end": 170205,
          "confidence": 0.64518,
          "speaker": "MLK"
        },
        {
          "text": "injustice,",
          "start": 170735,
          "end": 171955,
          "confidence": 0.94244,
          "speaker": "MLK"
        },
        {
          "text": "sweltering",
          "start": 173375,
          "end": 174167,
          "confidence": 0.97603,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 174231,
          "end": 174431,
          "confidence": 0.99808,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 174463,
          "end": 174607,
          "confidence": 0.99773,
          "speaker": "MLK"
        },
        {
          "text": "heat",
          "start": 174631,
          "end": 174791,
          "confidence": 0.99364,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 174823,
          "end": 174967,
          "confidence": 0.99775,
          "speaker": "MLK"
        },
        {
          "text": "oppression,",
          "start": 174991,
          "end": 175835,
          "confidence": 0.9963,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 176335,
          "end": 176671,
          "confidence": 0.77331,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 176703,
          "end": 176967,
          "confidence": 0.98294,
          "speaker": "MLK"
        },
        {
          "text": "transformed",
          "start": 177031,
          "end": 177967,
          "confidence": 0.9969,
          "speaker": "MLK"
        },
        {
          "text": "into",
          "start": 178071,
          "end": 178287,
          "confidence": 0.998,
          "speaker": "MLK"
        },
        {
          "text": "an",
          "start": 178311,
          "end": 178447,
          "confidence": 0.82268,
          "speaker": "MLK"
        },
        {
          "text": "oasis",
          "start": 178471,
          "end": 179095,
          "confidence": 0.6747,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 179175,
          "end": 179631,
          "confidence": 0.96534,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 179743,
          "end": 180087,
          "confidence": 0.99667,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 180111,
          "end": 180295,
          "confidence": 0.99341,
          "speaker": "MLK"
        },
        {
          "text": "justice.",
          "start": 180335,
          "end": 180783,
          "confidence": 0.95946,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 180839,
          "end": 181031,
          "confidence": 0.99817,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 181063,
          "end": 181231,
          "confidence": 0.99712,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 181263,
          "end": 181431,
          "confidence": 0.99576,
          "speaker": "MLK"
        },
        {
          "text": "dream",
          "start": 181463,
          "end": 182075,
          "confidence": 0.9585,
          "speaker": "MLK"
        },
        {
          "text": "my",
          "start": 185335,
          "end": 185935,
          "confidence": 0.99322,
          "speaker": "MLK"
        },
        {
          "text": "four",
          "start": 186055,
          "end": 186335,
          "confidence": 0.77368,
          "speaker": "MLK"
        },
        {
          "text": "little",
          "start": 186375,
          "end": 186815,
          "confidence": 0.99222,
          "speaker": "MLK"
        },
        {
          "text": "children",
          "start": 186935,
          "end": 187595,
          "confidence": 0.99615,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 188895,
          "end": 189231,
          "confidence": 0.97169,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 189263,
          "end": 189431,
          "confidence": 0.99791,
          "speaker": "MLK"
        },
        {
          "text": "day",
          "start": 189463,
          "end": 189655,
          "confidence": 0.99828,
          "speaker": "MLK"
        },
        {
          "text": "live",
          "start": 189695,
          "end": 189871,
          "confidence": 0.99706,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 189903,
          "end": 190023,
          "confidence": 0.99936,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 190039,
          "end": 190167,
          "confidence": 0.99812,
          "speaker": "MLK"
        },
        {
          "text": "nation",
          "start": 190191,
          "end": 190615,
          "confidence": 0.99955,
          "speaker": "MLK"
        },
        {
          "text": "where",
          "start": 190735,
          "end": 190991,
          "confidence": 0.99433,
          "speaker": "MLK"
        },
        {
          "text": "they",
          "start": 191023,
          "end": 191215,
          "confidence": 0.99799,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 191255,
          "end": 191431,
          "confidence": 0.99557,
          "speaker": "MLK"
        },
        {
          "text": "not",
          "start": 191463,
          "end": 191631,
          "confidence": 0.99734,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 191663,
          "end": 191855,
          "confidence": 0.99888,
          "speaker": "MLK"
        },
        {
          "text": "judged",
          "start": 191895,
          "end": 192223,
          "confidence": 0.99619,
          "speaker": "MLK"
        },
        {
          "text": "by",
          "start": 192279,
          "end": 192495,
          "confidence": 0.99823,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 192535,
          "end": 192711,
          "confidence": 0.99838,
          "speaker": "MLK"
        },
        {
          "text": "color",
          "start": 192743,
          "end": 193007,
          "confidence": 0.87233,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 193031,
          "end": 193167,
          "confidence": 0.99077,
          "speaker": "MLK"
        },
        {
          "text": "their",
          "start": 193191,
          "end": 193447,
          "confidence": 0.99402,
          "speaker": "MLK"
        },
        {
          "text": "skin",
          "start": 193511,
          "end": 193831,
          "confidence": 0.99799,
          "speaker": "MLK"
        },
        {
          "text": "but",
          "start": 193903,
          "end": 194111,
          "confidence": 0.99606,
          "speaker": "MLK"
        },
        {
          "text": "by",
          "start": 194143,
          "end": 194287,
          "confidence": 0.99512,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 194311,
          "end": 194639,
          "confidence": 0.99647,
          "speaker": "MLK"
        },
        {
          "text": "content",
          "start": 194727,
          "end": 194927,
          "confidence": 0.99919,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 194951,
          "end": 195087,
          "confidence": 0.99799,
          "speaker": "MLK"
        },
        {
          "text": "their",
          "start": 195111,
          "end": 195343,
          "confidence": 0.90051,
          "speaker": "MLK"
        },
        {
          "text": "character.",
          "start": 195399,
          "end": 196047,
          "confidence": 0.97352,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 196151,
          "end": 196415,
          "confidence": 0.99405,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 196455,
          "end": 196631,
          "confidence": 0.99376,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 196663,
          "end": 196807,
          "confidence": 0.99047,
          "speaker": "MLK"
        },
        {
          "text": "dream.",
          "start": 196831,
          "end": 197435,
          "confidence": 0.95951,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 203885,
          "end": 204293,
          "confidence": 0.98626,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 204349,
          "end": 204565,
          "confidence": 0.99287,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 204605,
          "end": 204805,
          "confidence": 0.99477,
          "speaker": "MLK"
        },
        {
          "text": "dream",
          "start": 204845,
          "end": 205277,
          "confidence": 0.99228,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 205381,
          "end": 205645,
          "confidence": 0.99662,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 205685,
          "end": 205909,
          "confidence": 0.99764,
          "speaker": "MLK"
        },
        {
          "text": "day",
          "start": 205957,
          "end": 206545,
          "confidence": 0.99892,
          "speaker": "MLK"
        },
        {
          "text": "down",
          "start": 208045,
          "end": 208785,
          "confidence": 0.95075,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 210045,
          "end": 210381,
          "confidence": 0.99619,
          "speaker": "MLK"
        },
        {
          "text": "Alabama",
          "start": 210413,
          "end": 211269,
          "confidence": 0.96781,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 211437,
          "end": 211741,
          "confidence": 0.99755,
          "speaker": "MLK"
        },
        {
          "text": "its",
          "start": 211773,
          "end": 212085,
          "confidence": 0.97269,
          "speaker": "MLK"
        },
        {
          "text": "vicious",
          "start": 212165,
          "end": 212597,
          "confidence": 0.99154,
          "speaker": "MLK"
        },
        {
          "text": "races",
          "start": 212661,
          "end": 213385,
          "confidence": 0.97736,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 214245,
          "end": 214557,
          "confidence": 0.99675,
          "speaker": "MLK"
        },
        {
          "text": "its",
          "start": 214581,
          "end": 214837,
          "confidence": 0.98082,
          "speaker": "MLK"
        },
        {
          "text": "governor",
          "start": 214901,
          "end": 215745,
          "confidence": 0.9968,
          "speaker": "MLK"
        },
        {
          "text": "having",
          "start": 216045,
          "end": 216525,
          "confidence": 0.99197,
          "speaker": "MLK"
        },
        {
          "text": "his",
          "start": 216605,
          "end": 216941,
          "confidence": 0.99715,
          "speaker": "MLK"
        },
        {
          "text": "lips",
          "start": 217013,
          "end": 217357,
          "confidence": 0.98825,
          "speaker": "MLK"
        },
        {
          "text": "dripping",
          "start": 217421,
          "end": 217765,
          "confidence": 0.96561,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 217805,
          "end": 217933,
          "confidence": 0.99779,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 217949,
          "end": 218077,
          "confidence": 0.98724,
          "speaker": "MLK"
        },
        {
          "text": "words",
          "start": 218101,
          "end": 218373,
          "confidence": 0.98254,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 218429,
          "end": 218669,
          "confidence": 0.99717,
          "speaker": "MLK"
        },
        {
          "text": "interposition",
          "start": 218717,
          "end": 219221,
          "confidence": 0.91536,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 219293,
          "end": 219453,
          "confidence": 0.99799,
          "speaker": "MLK"
        },
        {
          "text": "nullification,",
          "start": 219469,
          "end": 220465,
          "confidence": 0.91424,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 221085,
          "end": 221445,
          "confidence": 0.99683,
          "speaker": "MLK"
        },
        {
          "text": "day,",
          "start": 221485,
          "end": 221709,
          "confidence": 0.99608,
          "speaker": "MLK"
        },
        {
          "text": "right",
          "start": 221757,
          "end": 221989,
          "confidence": 0.98557,
          "speaker": "MLK"
        },
        {
          "text": "now",
          "start": 222037,
          "end": 222293,
          "confidence": 0.96043,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 222349,
          "end": 222541,
          "confidence": 0.99664,
          "speaker": "MLK"
        },
        {
          "text": "Alabama,",
          "start": 222573,
          "end": 223197,
          "confidence": 0.99844,
          "speaker": "MLK"
        },
        {
          "text": "little",
          "start": 223301,
          "end": 223661,
          "confidence": 0.99528,
          "speaker": "MLK"
        },
        {
          "text": "black",
          "start": 223733,
          "end": 224037,
          "confidence": 0.99793,
          "speaker": "MLK"
        },
        {
          "text": "boys",
          "start": 224101,
          "end": 224373,
          "confidence": 0.99622,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 224429,
          "end": 224645,
          "confidence": 0.99315,
          "speaker": "MLK"
        },
        {
          "text": "black",
          "start": 224685,
          "end": 224981,
          "confidence": 0.99453,
          "speaker": "MLK"
        },
        {
          "text": "girls",
          "start": 225053,
          "end": 225669,
          "confidence": 0.77187,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 225797,
          "end": 226061,
          "confidence": 0.99259,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 226093,
          "end": 226237,
          "confidence": 0.99872,
          "speaker": "MLK"
        },
        {
          "text": "able",
          "start": 226261,
          "end": 226469,
          "confidence": 0.99843,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 226517,
          "end": 226701,
          "confidence": 0.99706,
          "speaker": "MLK"
        },
        {
          "text": "join",
          "start": 226733,
          "end": 226997,
          "confidence": 0.9885,
          "speaker": "MLK"
        },
        {
          "text": "hands",
          "start": 227061,
          "end": 227365,
          "confidence": 0.98575,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 227405,
          "end": 227557,
          "confidence": 0.95246,
          "speaker": "MLK"
        },
        {
          "text": "little",
          "start": 227581,
          "end": 227813,
          "confidence": 0.99337,
          "speaker": "MLK"
        },
        {
          "text": "white",
          "start": 227869,
          "end": 228109,
          "confidence": 0.99882,
          "speaker": "MLK"
        },
        {
          "text": "boys",
          "start": 228157,
          "end": 228389,
          "confidence": 0.99632,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 228437,
          "end": 228645,
          "confidence": 0.99524,
          "speaker": "MLK"
        },
        {
          "text": "white",
          "start": 228685,
          "end": 228933,
          "confidence": 0.99283,
          "speaker": "MLK"
        },
        {
          "text": "girls",
          "start": 228989,
          "end": 229477,
          "confidence": 0.53585,
          "speaker": "MLK"
        },
        {
          "text": "as",
          "start": 229581,
          "end": 229845,
          "confidence": 0.93193,
          "speaker": "MLK"
        },
        {
          "text": "sisters",
          "start": 229885,
          "end": 230261,
          "confidence": 0.98283,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 230293,
          "end": 230461,
          "confidence": 0.99403,
          "speaker": "MLK"
        },
        {
          "text": "brothers.",
          "start": 230493,
          "end": 230789,
          "confidence": 0.96708,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 230837,
          "end": 231021,
          "confidence": 0.97797,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 231053,
          "end": 231197,
          "confidence": 0.98108,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 231221,
          "end": 231381,
          "confidence": 0.98887,
          "speaker": "MLK"
        },
        {
          "text": "dream",
          "start": 231413,
          "end": 231837,
          "confidence": 0.9516,
          "speaker": "MLK"
        },
        {
          "text": "today.",
          "start": 231941,
          "end": 232585,
          "confidence": 0.88255,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 240115,
          "end": 240499,
          "confidence": 0.98652,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 240547,
          "end": 240755,
          "confidence": 0.99489,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 240795,
          "end": 240995,
          "confidence": 0.99105,
          "speaker": "MLK"
        },
        {
          "text": "dream",
          "start": 241035,
          "end": 241395,
          "confidence": 0.99046,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 241475,
          "end": 241715,
          "confidence": 0.99629,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 241755,
          "end": 241979,
          "confidence": 0.99607,
          "speaker": "MLK"
        },
        {
          "text": "day",
          "start": 242027,
          "end": 242307,
          "confidence": 0.99767,
          "speaker": "MLK"
        },
        {
          "text": "every",
          "start": 242371,
          "end": 242619,
          "confidence": 0.99316,
          "speaker": "MLK"
        },
        {
          "text": "valley",
          "start": 242667,
          "end": 243219,
          "confidence": 0.99822,
          "speaker": "MLK"
        },
        {
          "text": "shall",
          "start": 243307,
          "end": 243579,
          "confidence": 0.99338,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 243627,
          "end": 243835,
          "confidence": 0.9982,
          "speaker": "MLK"
        },
        {
          "text": "exalted",
          "start": 243875,
          "end": 244735,
          "confidence": 0.95515,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 245075,
          "end": 245435,
          "confidence": 0.598,
          "speaker": "MLK"
        },
        {
          "text": "every",
          "start": 245475,
          "end": 245675,
          "confidence": 0.9959,
          "speaker": "MLK"
        },
        {
          "text": "hill",
          "start": 245715,
          "end": 245891,
          "confidence": 0.99732,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 245923,
          "end": 246115,
          "confidence": 0.89985,
          "speaker": "MLK"
        },
        {
          "text": "mountains",
          "start": 246155,
          "end": 246595,
          "confidence": 0.67223,
          "speaker": "MLK"
        },
        {
          "text": "shall",
          "start": 246635,
          "end": 246811,
          "confidence": 0.98846,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 246843,
          "end": 247011,
          "confidence": 0.99668,
          "speaker": "MLK"
        },
        {
          "text": "made",
          "start": 247043,
          "end": 247283,
          "confidence": 0.99374,
          "speaker": "MLK"
        },
        {
          "text": "low.",
          "start": 247339,
          "end": 247579,
          "confidence": 0.91715,
          "speaker": "MLK"
        },
        {
          "text": "The",
          "start": 247627,
          "end": 247787,
          "confidence": 0.9934,
          "speaker": "MLK"
        },
        {
          "text": "rough",
          "start": 247811,
          "end": 248059,
          "confidence": 0.99674,
          "speaker": "MLK"
        },
        {
          "text": "places",
          "start": 248107,
          "end": 248499,
          "confidence": 0.98694,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 248547,
          "end": 248707,
          "confidence": 0.98787,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 248731,
          "end": 248891,
          "confidence": 0.99764,
          "speaker": "MLK"
        },
        {
          "text": "made",
          "start": 248923,
          "end": 249187,
          "confidence": 0.99516,
          "speaker": "MLK"
        },
        {
          "text": "plain",
          "start": 249251,
          "end": 249787,
          "confidence": 0.99082,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 249931,
          "end": 250211,
          "confidence": 0.9921,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 250243,
          "end": 250411,
          "confidence": 0.99748,
          "speaker": "MLK"
        },
        {
          "text": "crooked",
          "start": 250443,
          "end": 250819,
          "confidence": 0.99793,
          "speaker": "MLK"
        },
        {
          "text": "places",
          "start": 250867,
          "end": 251219,
          "confidence": 0.98401,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 251267,
          "end": 251427,
          "confidence": 0.98833,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 251451,
          "end": 251611,
          "confidence": 0.99819,
          "speaker": "MLK"
        },
        {
          "text": "made",
          "start": 251643,
          "end": 251883,
          "confidence": 0.99851,
          "speaker": "MLK"
        },
        {
          "text": "straight.",
          "start": 251939,
          "end": 252379,
          "confidence": 0.75846,
          "speaker": "MLK"
        },
        {
          "text": "And",
          "start": 252467,
          "end": 252667,
          "confidence": 0.9891,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 252691,
          "end": 252827,
          "confidence": 0.985,
          "speaker": "MLK"
        },
        {
          "text": "glory",
          "start": 252851,
          "end": 252987,
          "confidence": 0.33122,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 253011,
          "end": 253123,
          "confidence": 0.97706,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 253139,
          "end": 253267,
          "confidence": 0.99463,
          "speaker": "MLK"
        },
        {
          "text": "Lord",
          "start": 253291,
          "end": 253555,
          "confidence": 0.95642,
          "speaker": "MLK"
        },
        {
          "text": "shall",
          "start": 253595,
          "end": 253795,
          "confidence": 0.99014,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 253835,
          "end": 254011,
          "confidence": 0.99469,
          "speaker": "MLK"
        },
        {
          "text": "revealed",
          "start": 254043,
          "end": 254411,
          "confidence": 0.39238,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 254443,
          "end": 254635,
          "confidence": 0.9114,
          "speaker": "MLK"
        },
        {
          "text": "all",
          "start": 254675,
          "end": 255019,
          "confidence": 0.96325,
          "speaker": "MLK"
        },
        {
          "text": "flesh",
          "start": 255107,
          "end": 255691,
          "confidence": 0.97878,
          "speaker": "MLK"
        },
        {
          "text": "shall",
          "start": 255843,
          "end": 256227,
          "confidence": 0.98943,
          "speaker": "MLK"
        },
        {
          "text": "see",
          "start": 256291,
          "end": 256443,
          "confidence": 0.92423,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 256459,
          "end": 256707,
          "confidence": 0.95762,
          "speaker": "MLK"
        },
        {
          "text": "together.",
          "start": 256771,
          "end": 257375,
          "confidence": 0.98756,
          "speaker": "MLK"
        },
        {
          "text": "This",
          "start": 257715,
          "end": 258027,
          "confidence": 0.99273,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 258051,
          "end": 258235,
          "confidence": 0.99265,
          "speaker": "MLK"
        },
        {
          "text": "our",
          "start": 258275,
          "end": 258499,
          "confidence": 0.98673,
          "speaker": "MLK"
        },
        {
          "text": "hope.",
          "start": 258547,
          "end": 259135,
          "confidence": 0.94649,
          "speaker": "MLK"
        },
        {
          "text": "This",
          "start": 259755,
          "end": 260091,
          "confidence": 0.99331,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 260123,
          "end": 260387,
          "confidence": 0.99428,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 260451,
          "end": 260675,
          "confidence": 0.69982,
          "speaker": "MLK"
        },
        {
          "text": "faith",
          "start": 260715,
          "end": 260979,
          "confidence": 0.77707,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 261027,
          "end": 261211,
          "confidence": 0.91357,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 261243,
          "end": 261483,
          "confidence": 0.99448,
          "speaker": "MLK"
        },
        {
          "text": "go",
          "start": 261539,
          "end": 261755,
          "confidence": 0.96619,
          "speaker": "MLK"
        },
        {
          "text": "back",
          "start": 261795,
          "end": 262019,
          "confidence": 0.99499,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 262067,
          "end": 262227,
          "confidence": 0.9921,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 262251,
          "end": 262411,
          "confidence": 0.9341,
          "speaker": "MLK"
        },
        {
          "text": "Southt",
          "start": 262443,
          "end": 262739,
          "confidence": 0.29502,
          "speaker": "MLK"
        },
        {
          "text": "with.",
          "start": 262787,
          "end": 263375,
          "confidence": 0.95633,
          "speaker": "MLK"
        },
        {
          "text": "With",
          "start": 263755,
          "end": 264091,
          "confidence": 0.97892,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 264123,
          "end": 264339,
          "confidence": 0.98043,
          "speaker": "MLK"
        },
        {
          "text": "faith",
          "start": 264387,
          "end": 265015,
          "confidence": 0.55516,
          "speaker": "MLK"
        },
        {
          "text": "we",
          "start": 265595,
          "end": 265931,
          "confidence": 0.89634,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 265963,
          "end": 266083,
          "confidence": 0.87798,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 266099,
          "end": 266437,
          "confidence": 0.71084,
          "speaker": "MLK"
        },
        {
          "text": "able",
          "start": 266531,
          "end": 266809,
          "confidence": 0.90271,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 266857,
          "end": 267041,
          "confidence": 0.97615,
          "speaker": "MLK"
        },
        {
          "text": "hew",
          "start": 267073,
          "end": 267217,
          "confidence": 0.87823,
          "speaker": "MLK"
        },
        {
          "text": "out",
          "start": 267241,
          "end": 267401,
          "confidence": 0.99265,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 267433,
          "end": 267577,
          "confidence": 0.99276,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 267601,
          "end": 267761,
          "confidence": 0.99719,
          "speaker": "MLK"
        },
        {
          "text": "mountain",
          "start": 267793,
          "end": 268145,
          "confidence": 0.99308,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 268185,
          "end": 268481,
          "confidence": 0.93375,
          "speaker": "MLK"
        },
        {
          "text": "despair",
          "start": 268553,
          "end": 269073,
          "confidence": 0.89778,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 269209,
          "end": 269529,
          "confidence": 0.97191,
          "speaker": "MLK"
        },
        {
          "text": "stone",
          "start": 269577,
          "end": 269833,
          "confidence": 0.99192,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 269889,
          "end": 270057,
          "confidence": 0.98189,
          "speaker": "MLK"
        },
        {
          "text": "hope.",
          "start": 270081,
          "end": 270645,
          "confidence": 0.94269,
          "speaker": "MLK"
        },
        {
          "text": "With",
          "start": 271185,
          "end": 271497,
          "confidence": 0.99667,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 271521,
          "end": 271753,
          "confidence": 0.99797,
          "speaker": "MLK"
        },
        {
          "text": "faith",
          "start": 271809,
          "end": 272445,
          "confidence": 0.93526,
          "speaker": "MLK"
        },
        {
          "text": "we",
          "start": 273025,
          "end": 273361,
          "confidence": 0.99665,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 273393,
          "end": 273561,
          "confidence": 0.99618,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 273593,
          "end": 273761,
          "confidence": 0.99555,
          "speaker": "MLK"
        },
        {
          "text": "able",
          "start": 273793,
          "end": 274033,
          "confidence": 0.99726,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 274089,
          "end": 274329,
          "confidence": 0.99826,
          "speaker": "MLK"
        },
        {
          "text": "transform",
          "start": 274377,
          "end": 275001,
          "confidence": 0.99912,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 275073,
          "end": 275281,
          "confidence": 0.9992,
          "speaker": "MLK"
        },
        {
          "text": "jangling",
          "start": 275313,
          "end": 275777,
          "confidence": 0.98714,
          "speaker": "MLK"
        },
        {
          "text": "discords",
          "start": 275841,
          "end": 276409,
          "confidence": 0.51463,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 276457,
          "end": 276617,
          "confidence": 0.9975,
          "speaker": "MLK"
        },
        {
          "text": "our",
          "start": 276641,
          "end": 276825,
          "confidence": 0.99879,
          "speaker": "MLK"
        },
        {
          "text": "nation",
          "start": 276865,
          "end": 277445,
          "confidence": 0.99927,
          "speaker": "MLK"
        },
        {
          "text": "into",
          "start": 277745,
          "end": 278033,
          "confidence": 0.99855,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 278049,
          "end": 278177,
          "confidence": 0.9917,
          "speaker": "MLK"
        },
        {
          "text": "beautiful",
          "start": 278201,
          "end": 278793,
          "confidence": 0.99667,
          "speaker": "MLK"
        },
        {
          "text": "symphony",
          "start": 278889,
          "end": 279329,
          "confidence": 0.98734,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 279377,
          "end": 279585,
          "confidence": 0.58844,
          "speaker": "MLK"
        },
        {
          "text": "brotherhood.",
          "start": 279625,
          "end": 280425,
          "confidence": 0.99313,
          "speaker": "MLK"
        },
        {
          "text": "With",
          "start": 280585,
          "end": 280881,
          "confidence": 0.99558,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 280913,
          "end": 281153,
          "confidence": 0.99735,
          "speaker": "MLK"
        },
        {
          "text": "faith",
          "start": 281209,
          "end": 281845,
          "confidence": 0.94157,
          "speaker": "MLK"
        },
        {
          "text": "we",
          "start": 282185,
          "end": 282545,
          "confidence": 0.99787,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 282585,
          "end": 282785,
          "confidence": 0.99375,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 282825,
          "end": 283001,
          "confidence": 0.99858,
          "speaker": "MLK"
        },
        {
          "text": "able",
          "start": 283033,
          "end": 283273,
          "confidence": 0.99838,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 283329,
          "end": 283521,
          "confidence": 0.99679,
          "speaker": "MLK"
        },
        {
          "text": "work",
          "start": 283553,
          "end": 283841,
          "confidence": 0.99889,
          "speaker": "MLK"
        },
        {
          "text": "together,",
          "start": 283913,
          "end": 284217,
          "confidence": 0.99827,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 284281,
          "end": 284505,
          "confidence": 0.99525,
          "speaker": "MLK"
        },
        {
          "text": "pray",
          "start": 284545,
          "end": 284817,
          "confidence": 0.99837,
          "speaker": "MLK"
        },
        {
          "text": "together,",
          "start": 284881,
          "end": 285273,
          "confidence": 0.99765,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 285369,
          "end": 285649,
          "confidence": 0.9973,
          "speaker": "MLK"
        },
        {
          "text": "struggle",
          "start": 285697,
          "end": 286185,
          "confidence": 0.99916,
          "speaker": "MLK"
        },
        {
          "text": "together,",
          "start": 286265,
          "end": 286673,
          "confidence": 0.99746,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 286769,
          "end": 287001,
          "confidence": 0.9929,
          "speaker": "MLK"
        },
        {
          "text": "go",
          "start": 287033,
          "end": 287177,
          "confidence": 0.9982,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 287201,
          "end": 287385,
          "confidence": 0.99676,
          "speaker": "MLK"
        },
        {
          "text": "jail",
          "start": 287425,
          "end": 287817,
          "confidence": 0.99761,
          "speaker": "MLK"
        },
        {
          "text": "together,",
          "start": 287921,
          "end": 288377,
          "confidence": 0.99672,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 288481,
          "end": 288769,
          "confidence": 0.99448,
          "speaker": "MLK"
        },
        {
          "text": "stand",
          "start": 288817,
          "end": 289001,
          "confidence": 0.99976,
          "speaker": "MLK"
        },
        {
          "text": "up",
          "start": 289033,
          "end": 289225,
          "confidence": 0.99385,
          "speaker": "MLK"
        },
        {
          "text": "for",
          "start": 289265,
          "end": 289465,
          "confidence": 0.99773,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 289505,
          "end": 289921,
          "confidence": 0.99907,
          "speaker": "MLK"
        },
        {
          "text": "together,",
          "start": 289993,
          "end": 290609,
          "confidence": 0.99552,
          "speaker": "MLK"
        },
        {
          "text": "knowing",
          "start": 290777,
          "end": 291305,
          "confidence": 0.99726,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 291385,
          "end": 291649,
          "confidence": 0.99595,
          "speaker": "MLK"
        },
        {
          "text": "we",
          "start": 291697,
          "end": 291881,
          "confidence": 0.99831,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 291913,
          "end": 292345,
          "confidence": 0.99664,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 292465,
          "end": 292769,
          "confidence": 0.99147,
          "speaker": "MLK"
        },
        {
          "text": "free",
          "start": 292817,
          "end": 293049,
          "confidence": 0.99942,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 293097,
          "end": 293305,
          "confidence": 0.99633,
          "speaker": "MLK"
        },
        {
          "text": "day",
          "start": 293345,
          "end": 293925,
          "confidence": 0.99737,
          "speaker": "MLK"
        },
        {
          "text": "if",
          "start": 295265,
          "end": 295865,
          "confidence": 0.24795,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 295985,
          "end": 296313,
          "confidence": 0.63193,
          "speaker": "MLK"
        },
        {
          "text": "la",
          "start": 296369,
          "end": 296965,
          "confidence": 0.54929,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 298695,
          "end": 299079,
          "confidence": 0.99088,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 299127,
          "end": 299311,
          "confidence": 0.99131,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 299343,
          "end": 299511,
          "confidence": 0.99573,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 299543,
          "end": 299687,
          "confidence": 0.99472,
          "speaker": "MLK"
        },
        {
          "text": "day",
          "start": 299711,
          "end": 299919,
          "confidence": 0.99816,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 299967,
          "end": 300175,
          "confidence": 0.55279,
          "speaker": "MLK"
        },
        {
          "text": "all",
          "start": 300215,
          "end": 300415,
          "confidence": 0.99601,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 300455,
          "end": 300655,
          "confidence": 0.92079,
          "speaker": "MLK"
        },
        {
          "text": "God's",
          "start": 300695,
          "end": 301175,
          "confidence": 0.79496,
          "speaker": "MLK"
        },
        {
          "text": "children",
          "start": 301255,
          "end": 301875,
          "confidence": 0.99543,
          "speaker": "MLK"
        },
        {
          "text": "Be",
          "start": 302615,
          "end": 302951,
          "confidence": 0.995,
          "speaker": "MLK"
        },
        {
          "text": "able",
          "start": 302983,
          "end": 303295,
          "confidence": 0.99798,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 303375,
          "end": 303615,
          "confidence": 0.99826,
          "speaker": "MLK"
        },
        {
          "text": "sing",
          "start": 303655,
          "end": 303903,
          "confidence": 0.99917,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 303959,
          "end": 304175,
          "confidence": 0.9985,
          "speaker": "MLK"
        },
        {
          "text": "new",
          "start": 304215,
          "end": 304415,
          "confidence": 0.99375,
          "speaker": "MLK"
        },
        {
          "text": "meaning.",
          "start": 304455,
          "end": 305159,
          "confidence": 0.89301,
          "speaker": "MLK"
        },
        {
          "text": "My",
          "start": 305327,
          "end": 305775,
          "confidence": 0.99489,
          "speaker": "MLK"
        },
        {
          "text": "country",
          "start": 305855,
          "end": 306095,
          "confidence": 0.99634,
          "speaker": "MLK"
        },
        {
          "text": "tears",
          "start": 306135,
          "end": 306383,
          "confidence": 0.5878,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 306439,
          "end": 306607,
          "confidence": 0.76617,
          "speaker": "MLK"
        },
        {
          "text": "thee",
          "start": 306631,
          "end": 307195,
          "confidence": 0.44576,
          "speaker": "MLK"
        },
        {
          "text": "Sweet",
          "start": 307935,
          "end": 308359,
          "confidence": 0.96148,
          "speaker": "MLK"
        },
        {
          "text": "land",
          "start": 308407,
          "end": 308687,
          "confidence": 0.9109,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 308751,
          "end": 308975,
          "confidence": 0.98997,
          "speaker": "MLK"
        },
        {
          "text": "liberty",
          "start": 309015,
          "end": 309503,
          "confidence": 0.99054,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 309559,
          "end": 309751,
          "confidence": 0.91956,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 309783,
          "end": 309927,
          "confidence": 0.43879,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 309951,
          "end": 310159,
          "confidence": 0.20778,
          "speaker": "MLK"
        },
        {
          "text": "sing",
          "start": 310207,
          "end": 310795,
          "confidence": 0.6327,
          "speaker": "MLK"
        },
        {
          "text": "Land",
          "start": 311455,
          "end": 311887,
          "confidence": 0.90862,
          "speaker": "MLK"
        },
        {
          "text": "where",
          "start": 311951,
          "end": 312175,
          "confidence": 0.98693,
          "speaker": "MLK"
        },
        {
          "text": "my",
          "start": 312215,
          "end": 312439,
          "confidence": 0.99858,
          "speaker": "MLK"
        },
        {
          "text": "fathers",
          "start": 312487,
          "end": 312983,
          "confidence": 0.61425,
          "speaker": "MLK"
        },
        {
          "text": "died",
          "start": 313039,
          "end": 313375,
          "confidence": 0.87253,
          "speaker": "MLK"
        },
        {
          "text": "Land",
          "start": 313455,
          "end": 313719,
          "confidence": 0.92926,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 313767,
          "end": 313927,
          "confidence": 0.6959,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 313951,
          "end": 314135,
          "confidence": 0.98024,
          "speaker": "MLK"
        },
        {
          "text": "pilgrim'pride",
          "start": 314175,
          "end": 315475,
          "confidence": 0.58189,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 316055,
          "end": 316511,
          "confidence": 0.99618,
          "speaker": "MLK"
        },
        {
          "text": "every",
          "start": 316583,
          "end": 317007,
          "confidence": 0.99881,
          "speaker": "MLK"
        },
        {
          "text": "mountainside",
          "start": 317111,
          "end": 318275,
          "confidence": 0.79654,
          "speaker": "MLK"
        },
        {
          "text": "let",
          "start": 318975,
          "end": 319359,
          "confidence": 0.99582,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 319407,
          "end": 319735,
          "confidence": 0.99906,
          "speaker": "MLK"
        },
        {
          "text": "ring.",
          "start": 319775,
          "end": 319999,
          "confidence": 0.98285,
          "speaker": "MLK"
        },
        {
          "text": "And",
          "start": 320047,
          "end": 320159,
          "confidence": 0.81012,
          "speaker": "MLK"
        },
        {
          "text": "if",
          "start": 320167,
          "end": 320431,
          "confidence": 0.77766,
          "speaker": "MLK"
        },
        {
          "text": "America",
          "start": 320503,
          "end": 320719,
          "confidence": 0.97564,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 320727,
          "end": 320871,
          "confidence": 0.79805,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 320903,
          "end": 321023,
          "confidence": 0.9972,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 321039,
          "end": 321143,
          "confidence": 0.9995,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 321159,
          "end": 321311,
          "confidence": 0.99876,
          "speaker": "MLK"
        },
        {
          "text": "great",
          "start": 321343,
          "end": 321535,
          "confidence": 0.99959,
          "speaker": "MLK"
        },
        {
          "text": "nation,",
          "start": 321575,
          "end": 322155,
          "confidence": 0.99689,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 322575,
          "end": 322983,
          "confidence": 0.99717,
          "speaker": "MLK"
        },
        {
          "text": "must",
          "start": 323039,
          "end": 323399,
          "confidence": 0.99884,
          "speaker": "MLK"
        },
        {
          "text": "become",
          "start": 323487,
          "end": 323759,
          "confidence": 0.98262,
          "speaker": "MLK"
        },
        {
          "text": "true.",
          "start": 323807,
          "end": 324395,
          "confidence": 0.98013,
          "speaker": "MLK"
        },
        {
          "text": "And",
          "start": 324715,
          "end": 325051,
          "confidence": 0.71275,
          "speaker": "MLK"
        },
        {
          "text": "so",
          "start": 325083,
          "end": 325275,
          "confidence": 0.99508,
          "speaker": "MLK"
        },
        {
          "text": "let",
          "start": 325315,
          "end": 325539,
          "confidence": 0.99786,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 325587,
          "end": 325915,
          "confidence": 0.99825,
          "speaker": "MLK"
        },
        {
          "text": "reign",
          "start": 325955,
          "end": 326535,
          "confidence": 0.91525,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 327235,
          "end": 327595,
          "confidence": 0.9902,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 327635,
          "end": 327811,
          "confidence": 0.99743,
          "speaker": "MLK"
        },
        {
          "text": "prodigious",
          "start": 327843,
          "end": 328275,
          "confidence": 0.99954,
          "speaker": "MLK"
        },
        {
          "text": "hilltops",
          "start": 328315,
          "end": 328875,
          "confidence": 0.72555,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 328915,
          "end": 329067,
          "confidence": 0.99802,
          "speaker": "MLK"
        },
        {
          "text": "New",
          "start": 329091,
          "end": 329227,
          "confidence": 0.99947,
          "speaker": "MLK"
        },
        {
          "text": "Hampshire.",
          "start": 329251,
          "end": 330015,
          "confidence": 0.58762,
          "speaker": "MLK"
        },
        {
          "text": "Let",
          "start": 330355,
          "end": 330715,
          "confidence": 0.9986,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 330755,
          "end": 331075,
          "confidence": 0.99874,
          "speaker": "MLK"
        },
        {
          "text": "reign",
          "start": 331115,
          "end": 331695,
          "confidence": 0.96264,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 332395,
          "end": 332731,
          "confidence": 0.99596,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 332763,
          "end": 332907,
          "confidence": 0.9984,
          "speaker": "MLK"
        },
        {
          "text": "mighty",
          "start": 332931,
          "end": 333235,
          "confidence": 0.99807,
          "speaker": "MLK"
        },
        {
          "text": "mountains",
          "start": 333275,
          "end": 333763,
          "confidence": 0.97852,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 333819,
          "end": 334011,
          "confidence": 0.98852,
          "speaker": "MLK"
        },
        {
          "text": "New",
          "start": 334043,
          "end": 334187,
          "confidence": 0.99913,
          "speaker": "MLK"
        },
        {
          "text": "York.",
          "start": 334211,
          "end": 334775,
          "confidence": 0.99822,
          "speaker": "MLK"
        },
        {
          "text": "Let",
          "start": 335595,
          "end": 336003,
          "confidence": 0.99842,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 336059,
          "end": 336395,
          "confidence": 0.9996,
          "speaker": "MLK"
        },
        {
          "text": "ring",
          "start": 336435,
          "end": 336755,
          "confidence": 0.51063,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 336835,
          "end": 337051,
          "confidence": 0.99906,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 337083,
          "end": 337227,
          "confidence": 0.99728,
          "speaker": "MLK"
        },
        {
          "text": "heightening",
          "start": 337251,
          "end": 337611,
          "confidence": 0.98316,
          "speaker": "MLK"
        },
        {
          "text": "alleghenies",
          "start": 337643,
          "end": 338259,
          "confidence": 0.95399,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 338307,
          "end": 338467,
          "confidence": 0.99606,
          "speaker": "MLK"
        },
        {
          "text": "Pennsylvania.",
          "start": 338491,
          "end": 339655,
          "confidence": 0.9828,
          "speaker": "MLK"
        },
        {
          "text": "Let",
          "start": 340235,
          "end": 340595,
          "confidence": 0.99887,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 340635,
          "end": 340979,
          "confidence": 0.99763,
          "speaker": "MLK"
        },
        {
          "text": "ring",
          "start": 341027,
          "end": 341283,
          "confidence": 0.98462,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 341339,
          "end": 341531,
          "confidence": 0.99755,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 341563,
          "end": 341707,
          "confidence": 0.99672,
          "speaker": "MLK"
        },
        {
          "text": "snow",
          "start": 341731,
          "end": 341939,
          "confidence": 0.99547,
          "speaker": "MLK"
        },
        {
          "text": "capped",
          "start": 341987,
          "end": 342211,
          "confidence": 0.62412,
          "speaker": "MLK"
        },
        {
          "text": "Rockies",
          "start": 342243,
          "end": 342619,
          "confidence": 0.90533,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 342667,
          "end": 342875,
          "confidence": 0.99069,
          "speaker": "MLK"
        },
        {
          "text": "Colorado.",
          "start": 342915,
          "end": 343935,
          "confidence": 0.99337,
          "speaker": "MLK"
        },
        {
          "text": "Let",
          "start": 344835,
          "end": 345219,
          "confidence": 0.9987,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 345267,
          "end": 345595,
          "confidence": 0.99948,
          "speaker": "MLK"
        },
        {
          "text": "ring",
          "start": 345635,
          "end": 346003,
          "confidence": 0.97346,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 346099,
          "end": 346331,
          "confidence": 0.99751,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 346363,
          "end": 346531,
          "confidence": 0.99747,
          "speaker": "MLK"
        },
        {
          "text": "curvaceous",
          "start": 346563,
          "end": 347147,
          "confidence": 0.51372,
          "speaker": "MLK"
        },
        {
          "text": "slopes",
          "start": 347211,
          "end": 347515,
          "confidence": 0.99522,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 347555,
          "end": 347779,
          "confidence": 0.99821,
          "speaker": "MLK"
        },
        {
          "text": "California.",
          "start": 347827,
          "end": 348867,
          "confidence": 0.99915,
          "speaker": "MLK"
        },
        {
          "text": "But",
          "start": 349051,
          "end": 349371,
          "confidence": 0.97916,
          "speaker": "MLK"
        },
        {
          "text": "not",
          "start": 349403,
          "end": 349691,
          "confidence": 0.99918,
          "speaker": "MLK"
        },
        {
          "text": "only",
          "start": 349763,
          "end": 349947,
          "confidence": 0.99563,
          "speaker": "MLK"
        },
        {
          "text": "that.",
          "start": 349971,
          "end": 350535,
          "confidence": 0.99779,
          "speaker": "MLK"
        },
        {
          "text": "Let",
          "start": 351265,
          "end": 351649,
          "confidence": 0.99456,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 351697,
          "end": 352089,
          "confidence": 0.99631,
          "speaker": "MLK"
        },
        {
          "text": "ring",
          "start": 352137,
          "end": 352537,
          "confidence": 0.96021,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 352641,
          "end": 353097,
          "confidence": 0.99736,
          "speaker": "MLK"
        },
        {
          "text": "Stone",
          "start": 353201,
          "end": 353561,
          "confidence": 0.98915,
          "speaker": "MLK"
        },
        {
          "text": "Mountain",
          "start": 353633,
          "end": 354001,
          "confidence": 0.98879,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 354033,
          "end": 354225,
          "confidence": 0.9925,
          "speaker": "MLK"
        },
        {
          "text": "Georgia.",
          "start": 354265,
          "end": 355005,
          "confidence": 0.97334,
          "speaker": "MLK"
        },
        {
          "text": "Let",
          "start": 356065,
          "end": 356449,
          "confidence": 0.99323,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 356497,
          "end": 356849,
          "confidence": 0.997,
          "speaker": "MLK"
        },
        {
          "text": "ring",
          "start": 356897,
          "end": 357297,
          "confidence": 0.94333,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 357401,
          "end": 357929,
          "confidence": 0.99049,
          "speaker": "MLK"
        },
        {
          "text": "Lookout",
          "start": 358057,
          "end": 358601,
          "confidence": 0.90082,
          "speaker": "MLK"
        },
        {
          "text": "Mountain",
          "start": 358673,
          "end": 359041,
          "confidence": 0.99525,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 359073,
          "end": 359241,
          "confidence": 0.99344,
          "speaker": "MLK"
        },
        {
          "text": "Tennessee.",
          "start": 359273,
          "end": 360125,
          "confidence": 0.99389,
          "speaker": "MLK"
        },
        {
          "text": "Let",
          "start": 360785,
          "end": 361193,
          "confidence": 0.98873,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 361249,
          "end": 361657,
          "confidence": 0.99913,
          "speaker": "MLK"
        },
        {
          "text": "ring",
          "start": 361721,
          "end": 362065,
          "confidence": 0.9557,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 362145,
          "end": 362457,
          "confidence": 0.99757,
          "speaker": "MLK"
        },
        {
          "text": "every",
          "start": 362521,
          "end": 362841,
          "confidence": 0.99511,
          "speaker": "MLK"
        },
        {
          "text": "hill",
          "start": 362913,
          "end": 363505,
          "confidence": 0.99755,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 363665,
          "end": 364009,
          "confidence": 0.99354,
          "speaker": "MLK"
        },
        {
          "text": "molehil",
          "start": 364057,
          "end": 364609,
          "confidence": 0.32018,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 364657,
          "end": 364817,
          "confidence": 0.95943,
          "speaker": "MLK"
        },
        {
          "text": "Mississippi.",
          "start": 364841,
          "end": 365937,
          "confidence": 0.98761,
          "speaker": "MLK"
        },
        {
          "text": "From",
          "start": 366081,
          "end": 366553,
          "confidence": 0.98615,
          "speaker": "MLK"
        },
        {
          "text": "every",
          "start": 366649,
          "end": 366953,
          "confidence": 0.99764,
          "speaker": "MLK"
        },
        {
          "text": "mountainside",
          "start": 367009,
          "end": 368085,
          "confidence": 0.82623,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 368785,
          "end": 369169,
          "confidence": 0.80834,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 369217,
          "end": 369569,
          "confidence": 0.67023,
          "speaker": "MLK"
        },
        {
          "text": "rain",
          "start": 369617,
          "end": 369889,
          "confidence": 0.42167,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 369937,
          "end": 370145,
          "confidence": 0.67713,
          "speaker": "MLK"
        },
        {
          "text": "wind",
          "start": 370185,
          "end": 370361,
          "confidence": 0.41829,
          "speaker": "MLK"
        },
        {
          "text": "we",
          "start": 370393,
          "end": 370965,
          "confidence": 0.23775,
          "speaker": "MLK"
        },
        {
          "text": "when",
          "start": 374265,
          "end": 374625,
          "confidence": 0.95663,
          "speaker": "MLK"
        },
        {
          "text": "we",
          "start": 374665,
          "end": 374913,
          "confidence": 0.983,
          "speaker": "MLK"
        },
        {
          "text": "allow",
          "start": 374969,
          "end": 375257,
          "confidence": 0.97459,
          "speaker": "MLK"
        },
        {
          "text": "freedom",
          "start": 375321,
          "end": 375689,
          "confidence": 0.93352,
          "speaker": "MLK"
        },
        {
          "text": "rings",
          "start": 375737,
          "end": 376325,
          "confidence": 0.67498,
          "speaker": "MLK"
        },
        {
          "text": "when",
          "start": 377705,
          "end": 378065,
          "confidence": 0.9877,
          "speaker": "MLK"
        },
        {
          "text": "we",
          "start": 378105,
          "end": 378281,
          "confidence": 0.99595,
          "speaker": "MLK"
        },
        {
          "text": "let",
          "start": 378313,
          "end": 378457,
          "confidence": 0.99886,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 378481,
          "end": 378689,
          "confidence": 0.99606,
          "speaker": "MLK"
        },
        {
          "text": "ring",
          "start": 378737,
          "end": 379089,
          "confidence": 0.90787,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 379177,
          "end": 379449,
          "confidence": 0.9966,
          "speaker": "MLK"
        },
        {
          "text": "every",
          "start": 379497,
          "end": 379681,
          "confidence": 0.99829,
          "speaker": "MLK"
        },
        {
          "text": "village",
          "start": 379713,
          "end": 380057,
          "confidence": 0.59178,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 380081,
          "end": 380265,
          "confidence": 0.80598,
          "speaker": "MLK"
        },
        {
          "text": "every",
          "start": 380305,
          "end": 380529,
          "confidence": 0.9833,
          "speaker": "MLK"
        },
        {
          "text": "hamlet,",
          "start": 380577,
          "end": 381227,
          "confidence": 0.9956,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 381361,
          "end": 381727,
          "confidence": 0.9804,
          "speaker": "MLK"
        },
        {
          "text": "every",
          "start": 381791,
          "end": 382159,
          "confidence": 0.99836,
          "speaker": "MLK"
        },
        {
          "text": "state",
          "start": 382247,
          "end": 382759,
          "confidence": 0.99976,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 382887,
          "end": 383199,
          "confidence": 0.77975,
          "speaker": "MLK"
        },
        {
          "text": "every",
          "start": 383247,
          "end": 383503,
          "confidence": 0.99771,
          "speaker": "MLK"
        },
        {
          "text": "city,",
          "start": 383559,
          "end": 384155,
          "confidence": 0.99848,
          "speaker": "MLK"
        },
        {
          "text": "we",
          "start": 385015,
          "end": 385375,
          "confidence": 0.99813,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 385415,
          "end": 385615,
          "confidence": 0.99739,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 385655,
          "end": 385831,
          "confidence": 0.99883,
          "speaker": "MLK"
        },
        {
          "text": "able",
          "start": 385863,
          "end": 386175,
          "confidence": 0.9985,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 386255,
          "end": 386567,
          "confidence": 0.99865,
          "speaker": "MLK"
        },
        {
          "text": "speed",
          "start": 386631,
          "end": 386879,
          "confidence": 0.99963,
          "speaker": "MLK"
        },
        {
          "text": "up",
          "start": 386927,
          "end": 387159,
          "confidence": 0.99784,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 387207,
          "end": 387439,
          "confidence": 0.99808,
          "speaker": "MLK"
        },
        {
          "text": "day",
          "start": 387487,
          "end": 387911,
          "confidence": 0.99754,
          "speaker": "MLK"
        },
        {
          "text": "when",
          "start": 388023,
          "end": 388343,
          "confidence": 0.88465,
          "speaker": "MLK"
        },
        {
          "text": "all",
          "start": 388399,
          "end": 388663,
          "confidence": 0.99818,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 388719,
          "end": 388935,
          "confidence": 0.60064,
          "speaker": "MLK"
        },
        {
          "text": "go'children",
          "start": 388975,
          "end": 389999,
          "confidence": 0.16252,
          "speaker": "MLK"
        },
        {
          "text": "black",
          "start": 390087,
          "end": 390407,
          "confidence": 0.99518,
          "speaker": "MLK"
        },
        {
          "text": "men",
          "start": 390471,
          "end": 390719,
          "confidence": 0.99701,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 390767,
          "end": 390999,
          "confidence": 0.99565,
          "speaker": "MLK"
        },
        {
          "text": "white",
          "start": 391047,
          "end": 391303,
          "confidence": 0.99621,
          "speaker": "MLK"
        },
        {
          "text": "men,",
          "start": 391359,
          "end": 391887,
          "confidence": 0.98896,
          "speaker": "MLK"
        },
        {
          "text": "Jews",
          "start": 392031,
          "end": 392447,
          "confidence": 0.98812,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 392511,
          "end": 392783,
          "confidence": 0.99691,
          "speaker": "MLK"
        },
        {
          "text": "Gentiles,",
          "start": 392839,
          "end": 393535,
          "confidence": 0.96498,
          "speaker": "MLK"
        },
        {
          "text": "Protestants",
          "start": 393655,
          "end": 394263,
          "confidence": 0.99542,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 394319,
          "end": 394583,
          "confidence": 0.94459,
          "speaker": "MLK"
        },
        {
          "text": "Catholics",
          "start": 394639,
          "end": 395295,
          "confidence": 0.60934,
          "speaker": "MLK"
        },
        {
          "text": "will",
          "start": 395415,
          "end": 395671,
          "confidence": 0.97405,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 395703,
          "end": 395847,
          "confidence": 0.99742,
          "speaker": "MLK"
        },
        {
          "text": "able",
          "start": 395871,
          "end": 396079,
          "confidence": 0.99719,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 396127,
          "end": 396335,
          "confidence": 0.99795,
          "speaker": "MLK"
        },
        {
          "text": "join",
          "start": 396375,
          "end": 396695,
          "confidence": 0.99396,
          "speaker": "MLK"
        },
        {
          "text": "hands",
          "start": 396775,
          "end": 397455,
          "confidence": 0.99176,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 397615,
          "end": 397935,
          "confidence": 0.99473,
          "speaker": "MLK"
        },
        {
          "text": "sing",
          "start": 397975,
          "end": 398151,
          "confidence": 0.99766,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 398183,
          "end": 398327,
          "confidence": 0.88936,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 398351,
          "end": 398511,
          "confidence": 0.99357,
          "speaker": "MLK"
        },
        {
          "text": "words",
          "start": 398543,
          "end": 398799,
          "confidence": 0.98775,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 398847,
          "end": 399031,
          "confidence": 0.99757,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 399063,
          "end": 399207,
          "confidence": 0.99318,
          "speaker": "MLK"
        },
        {
          "text": "old",
          "start": 399231,
          "end": 399439,
          "confidence": 0.80677,
          "speaker": "MLK"
        },
        {
          "text": "Negro",
          "start": 399487,
          "end": 399935,
          "confidence": 0.98722,
          "speaker": "MLK"
        },
        {
          "text": "spiritual.",
          "start": 400015,
          "end": 400735,
          "confidence": 0.87511,
          "speaker": "MLK"
        },
        {
          "text": "Free",
          "start": 400855,
          "end": 401111,
          "confidence": 0.99133,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 401143,
          "end": 401359,
          "confidence": 0.99428,
          "speaker": "MLK"
        },
        {
          "text": "last,",
          "start": 401407,
          "end": 402047,
          "confidence": 0.98855,
          "speaker": "MLK"
        },
        {
          "text": "Free",
          "start": 402231,
          "end": 402527,
          "confidence": 0.99513,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 402551,
          "end": 402759,
          "confidence": 0.99662,
          "speaker": "MLK"
        },
        {
          "text": "last.",
          "start": 402807,
          "end": 403423,
          "confidence": 0.99631,
          "speaker": "MLK"
        },
        {
          "text": "Thank",
          "start": 403599,
          "end": 404071,
          "confidence": 0.94601,
          "speaker": "MLK"
        },
        {
          "text": "God",
          "start": 404143,
          "end": 404351,
          "confidence": 0.81314,
          "speaker": "MLK"
        },
        {
          "text": "Almighty,",
          "start": 404383,
          "end": 405111,
          "confidence": 0.94978,
          "speaker": "MLK"
        },
        {
          "text": "we",
          "start": 405223,
          "end": 405567,
          "confidence": 0.28069,
          "speaker": "MLK"
        },
        {
          "text": "fear.",
          "start": 405631,
          "end": 405735,
          "confidence": 0.18363,
          "speaker": "MLK"
        }
      ],
      "sentimentAnalysis": [
        {
          "text": "I have the pleasure to present to you Dr. Martin Luther King Geior.",
          "sentiment": "POSITIVE",
          "confidence": 0.9152705,
          "start": 335,
          "end": 5195
        },
        {
          "text": "I am happy to join with you today in what will go down in history as a greatest demonstration for freedom in the history of our nation.",
          "sentiment": "POSITIVE",
          "confidence": 0.9838473,
          "start": 13055,
          "end": 28915
        },
        {
          "text": "Five score years ago, a great American in whose symbolic shadow we stand today signed the Emancipation Proclamation.",
          "sentiment": "POSITIVE",
          "confidence": 0.66094536,
          "start": 37845,
          "end": 53505
        },
        {
          "text": "This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice.",
          "sentiment": "POSITIVE",
          "confidence": 0.4682762,
          "start": 55405,
          "end": 69695
        },
        {
          "text": "It came as a joyous daybreak to end the long night of their captivity.",
          "sentiment": "POSITIVE",
          "confidence": 0.7162505,
          "start": 71355,
          "end": 79695
        },
        {
          "text": "But 100 years later, the Negro still is not free.",
          "sentiment": "NEGATIVE",
          "confidence": 0.6438096,
          "start": 81835,
          "end": 91015
        },
        {
          "text": "100 years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9332607,
          "start": 92755,
          "end": 106335
        },
        {
          "text": "100 years later, the Negro lives on a lonely island of poverty.",
          "sentiment": "NEGATIVE",
          "confidence": 0.79551995,
          "start": 106995,
          "end": 113935
        },
        {
          "text": "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
          "sentiment": "POSITIVE",
          "confidence": 0.8801915,
          "start": 114355,
          "end": 125875
        },
        {
          "text": "We hold these truths to be self evident that all men are created equal.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6166327,
          "start": 126855,
          "end": 132835
        },
        {
          "text": "I have a dream that one day on the red hills to joy sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6665821,
          "start": 141895,
          "end": 158993
        },
        {
          "text": "I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice.",
          "sentiment": "NEUTRAL",
          "confidence": 0.51599497,
          "start": 159129,
          "end": 180783
        },
        {
          "text": "I have a dream my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
          "sentiment": "POSITIVE",
          "confidence": 0.7958613,
          "start": 180839,
          "end": 196047
        },
        {
          "text": "I have a dream.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7178309,
          "start": 196151,
          "end": 197435
        },
        {
          "text": "I have a dream that one day down in Alabama with its vicious races with its governor having his lips dripping with the words of interposition and nullification, one day, right now in Alabama, little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5485573,
          "start": 203885,
          "end": 230789
        },
        {
          "text": "I have a dream today.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6382484,
          "start": 230837,
          "end": 232585
        },
        {
          "text": "I have a dream that one day every valley shall be exalted and every hill and mountains shall be made low.",
          "sentiment": "POSITIVE",
          "confidence": 0.63409674,
          "start": 240115,
          "end": 247579
        },
        {
          "text": "The rough places will be made plain and the crooked places will be made straight.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7731044,
          "start": 247627,
          "end": 252379
        },
        {
          "text": "And the glory of the Lord shall be revealed and all flesh shall see it together.",
          "sentiment": "POSITIVE",
          "confidence": 0.85263574,
          "start": 252467,
          "end": 257375
        },
        {
          "text": "This is our hope.",
          "sentiment": "POSITIVE",
          "confidence": 0.8108842,
          "start": 257715,
          "end": 259135
        },
        {
          "text": "This is the faith that I go back to the Southt with.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5983915,
          "start": 259755,
          "end": 263375
        },
        {
          "text": "With this faith we will be able to hew out of the mountain of despair a stone of hope.",
          "sentiment": "POSITIVE",
          "confidence": 0.7376261,
          "start": 263755,
          "end": 270645
        },
        {
          "text": "With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood.",
          "sentiment": "POSITIVE",
          "confidence": 0.91984385,
          "start": 271185,
          "end": 280425
        },
        {
          "text": "With this faith we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day if be la this will be the day with all of God's children Be able to sing with new meaning.",
          "sentiment": "POSITIVE",
          "confidence": 0.893523,
          "start": 280585,
          "end": 305159
        },
        {
          "text": "My country tears of thee Sweet land of liberty of the I sing Land where my fathers died Land of the pilgrim'pride from every mountainside let freedom ring.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6848151,
          "start": 305327,
          "end": 319999
        },
        {
          "text": "And if America is to be a great nation, this must become true.",
          "sentiment": "POSITIVE",
          "confidence": 0.72144216,
          "start": 320047,
          "end": 324395
        },
        {
          "text": "And so let freedom reign from the prodigious hilltops of New Hampshire.",
          "sentiment": "POSITIVE",
          "confidence": 0.5052658,
          "start": 324715,
          "end": 330015
        },
        {
          "text": "Let freedom reign from the mighty mountains of New York.",
          "sentiment": "POSITIVE",
          "confidence": 0.5810068,
          "start": 330355,
          "end": 334775
        },
        {
          "text": "Let freedom ring from the heightening alleghenies of Pennsylvania.",
          "sentiment": "NEUTRAL",
          "confidence": 0.68559384,
          "start": 335595,
          "end": 339655
        },
        {
          "text": "Let freedom ring from the snow capped Rockies of Colorado.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5546874,
          "start": 340235,
          "end": 343935
        },
        {
          "text": "Let freedom ring from the curvaceous slopes of California.",
          "sentiment": "NEUTRAL",
          "confidence": 0.70926505,
          "start": 344835,
          "end": 348867
        },
        {
          "text": "But not only that.",
          "sentiment": "NEUTRAL",
          "confidence": 0.67865616,
          "start": 349051,
          "end": 350535
        },
        {
          "text": "Let freedom ring from Stone Mountain of Georgia.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7108022,
          "start": 351265,
          "end": 355005
        },
        {
          "text": "Let freedom ring from Lookout Mountain of Tennessee.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5847969,
          "start": 356065,
          "end": 360125
        },
        {
          "text": "Let freedom ring from every hill and molehil of Mississippi.",
          "sentiment": "NEUTRAL",
          "confidence": 0.64130324,
          "start": 360785,
          "end": 365937
        },
        {
          "text": "From every mountainside that freedom rain and wind we when we allow freedom rings when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of go'children black men and white men, Jews and Gentiles, Protestants and Catholics will be able to join hands and sing in the words of the old Negro spiritual.",
          "sentiment": "NEUTRAL",
          "confidence": 0.54296666,
          "start": 366081,
          "end": 400735
        },
        {
          "text": "Free at last, Free at last.",
          "sentiment": "POSITIVE",
          "confidence": 0.70241344,
          "start": 400855,
          "end": 403423
        },
        {
          "text": "Thank God Almighty, we fear.",
          "sentiment": "POSITIVE",
          "confidence": 0.56746536,
          "start": 403599,
          "end": 405735
        }
      ],
      "keyPhrases": [
        "freedom rings",
        "little white boys",
        "little black boys",
        "white men",
        "go'children black men",
        "Dr. Martin Luther King Geior",
        "white girls",
        "Martin Luther King Geior",
        "black girls",
        "thee Sweet land",
        "former slave owners",
        "Negro slaves",
        "former slaves",
        "God Almighty",
        "New Hampshire"
      ],
      "duration": 0,
      "language": "en",
      "confidence": 0.94329184
    }
  },
  "pulp_fiction": {
    "name": "pulp_fiction",
    "displayName": "Pulp Fiction",
    "fileName": "pulp_fiction.mp3",
    "description": "Royale with Cheese scene",
    "duration": "4 min",
    "transcript": {
      "text": "Mia. Mia. How did Marcel on her meet? I don't know, I. Other people meet people. She used to be an actress. Oh, really? She do anything out of scene? I think her biggest deal was she starred in a pilot. Pilot? What's a pilot? Well, you know, the show's on tv. I don't watch tv. Yeah, but you are aware that there's an invention called television, and on this invention they show shows, right? Y. Yeah. Well, the way they pick TV shows is they make one show. That show's called a pilot. Then they show that one show to the people who pick shows, and on the strength of that one show, they decide if they want to make more shows. Some get chosen and become television programs. Some don't come nothing. She starred one of the ones that became nothing. You remember Antoine Rocamora? Half black, half saone. Used to call him Tony Rocky Horror? Yeah, maybe. Fat, right? I wouldn't go so far as to call the brother fat. I mean, he got a weight problem. What's the nigga gonna do you some more? Yeah, I think I know what you mean. What about him? Well, Marcellus fucked him up good. Word around the campfire is was on account of Marcellus Wallace's wife. So what'd he do? Fucking. No, no, no, no, no, no. Nothing that bad with. Than what then? Gave her a foot massage. Foot massage? That's it? Mm hmm. Then what did Marcels do? Sent a couple of cats over to his place. They took him out on his patio, threw his ass over the balcony. Nigga fell fals stories. Had a little garden down at the bottom, closed in glass, like a greenhouse. Niga fell through that. Since then he kind of developed a speech impediment. That's a damn shame. But still, I have to say, you play with matches, you get burned. What do you mean? You don't be giving Marcellis Waace, his new bride, a foot massage. You don't think he overreacted? Well, yah's why. I probably didn't expect Myl to react the way he did, but he had to expect a reaction. It was a foot massage. The foot massage is nothing. I give my mother a foot massage. Just laying your hands in a familiar way on myl''new way. Is it as bad as eating her pussy out? No, it's the same fucking ballpump. Whoa, whoa, whoa, whoa. Stop right there. Eating the bitch out. And giving a bitch a foot massage ain't eating the same fucking thing. It's not. It's the same ballpark. Ain't no fucking Ballpark neither. Now look, maybe your method of massage differs from mine. But you know, touching his wife's feet and sticking your tongue in the holiest the holies ain't the same fucking ballpark. It ain't the same league. It ain't even the same fucking sport. Look, foot massages don't mean shit. Have you ever given a foot massage? Go. Don't be telling me about foot massages. I'm the footfucking master. You giving a lot of em? Shit, yeah. Got my technique down and everything. I don't be tickling or nothing. Would you give a guy a foot massage? Fuck you. You give him a lot? Fuck you. You know, I'm kind of tired. I can use a foot massage myself. Yo, yo, yo, man, you best back off. I'm getting a little pissed. To you. This is the door. Yeah, it is. Time. You got 7:22 in the a.m. no. Ain'T quite time yet. Come on, let's hang back. Now look, just cause I wouldn't get no man a foot massage don't make it right for myselves to throw Antoine off a building into a glass motherfucking house, fucking up the way the nigga talks. That shit ain't right. Motherfucker do that shit to me, he better paralyze my ass. Cause I kill a motherfucker. You know what I'm saying? I ain't saying it's right, but you saying a foot massage don't mean not, and I'm saying it does. And look, I given a million ladies a million foot massagess. And they all meant something. We act like they don't, but they do. I mean, that's what s so fucking cool about em. There's a sensuous thing going on where, you know, you don't talk about it, but you know what? She knows it. Fuck em. Marcelus knew it. And Antoine should have fucking better known better. I mean, that's his fucking wife, man. They thinking no sense of humor about this shit. You know what I'm saying? It's an interesting point. Come on, let's get into character. What's her name again? Mia. Mia. Why are you so interested in big man's? Why? Well, he's going out of town of Florida and he asked me if I'd take care of her while he's gone. Take care of her? No, man, just take her out. You know, show her a good time. Make sure she don't get lonely. You're gonna be taking me, a Wallace out on a date? It is not a date. You know, it's just's like if you were gonna take your buddy's wife to a movie or something. It's just good company, that's all. It's not a date. It's definitely not a date.",
      "words": 885,
      "utterances": [
        {
          "speaker": "MLK",
          "text": "Mia.",
          "start": 375,
          "end": 879,
          "confidence": 0.93636,
          "words": [
            {
              "text": "Mia.",
              "start": 375,
              "end": 879,
              "confidence": 0.93636,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Mia. How did Marcel on her meet?",
          "start": 1007,
          "end": 3879,
          "confidence": 0.82310283,
          "words": [
            {
              "text": "Mia.",
              "start": 1007,
              "end": 1755,
              "confidence": 0.95638,
              "speaker": "MLK"
            },
            {
              "text": "How",
              "start": 2135,
              "end": 2423,
              "confidence": 0.97295,
              "speaker": "MLK"
            },
            {
              "text": "did",
              "start": 2439,
              "end": 2567,
              "confidence": 0.79455,
              "speaker": "MLK"
            },
            {
              "text": "Marcel",
              "start": 2591,
              "end": 2935,
              "confidence": 0.7332,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 2975,
              "end": 3103,
              "confidence": 0.37185,
              "speaker": "MLK"
            },
            {
              "text": "her",
              "start": 3119,
              "end": 3271,
              "confidence": 0.99544,
              "speaker": "MLK"
            },
            {
              "text": "meet?",
              "start": 3303,
              "end": 3879,
              "confidence": 0.93735,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't know, I. Other people meet people. She used to be an actress.",
          "start": 4047,
          "end": 8703,
          "confidence": 0.89980286,
          "words": [
            {
              "text": "I",
              "start": 4047,
              "end": 4255,
              "confidence": 0.99517,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 4255,
              "end": 4407,
              "confidence": 0.88258,
              "speaker": "MLK"
            },
            {
              "text": "know,",
              "start": 4431,
              "end": 4927,
              "confidence": 0.99051,
              "speaker": "MLK"
            },
            {
              "text": "I.",
              "start": 5071,
              "end": 5375,
              "confidence": 0.37313,
              "speaker": "MLK"
            },
            {
              "text": "Other",
              "start": 5415,
              "end": 5591,
              "confidence": 0.44854,
              "speaker": "MLK"
            },
            {
              "text": "people",
              "start": 5623,
              "end": 5887,
              "confidence": 0.99469,
              "speaker": "MLK"
            },
            {
              "text": "meet",
              "start": 5951,
              "end": 6175,
              "confidence": 0.99233,
              "speaker": "MLK"
            },
            {
              "text": "people.",
              "start": 6215,
              "end": 6795,
              "confidence": 0.99906,
              "speaker": "MLK"
            },
            {
              "text": "She",
              "start": 7295,
              "end": 7607,
              "confidence": 0.99582,
              "speaker": "MLK"
            },
            {
              "text": "used",
              "start": 7631,
              "end": 7743,
              "confidence": 0.99907,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 7759,
              "end": 7863,
              "confidence": 0.99869,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 7879,
              "end": 7983,
              "confidence": 0.99941,
              "speaker": "MLK"
            },
            {
              "text": "an",
              "start": 7999,
              "end": 8103,
              "confidence": 0.92836,
              "speaker": "MLK"
            },
            {
              "text": "actress.",
              "start": 8119,
              "end": 8703,
              "confidence": 0.99988,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Oh, really? She do anything out of scene?",
          "start": 8839,
          "end": 11311,
          "confidence": 0.9405888,
          "words": [
            {
              "text": "Oh,",
              "start": 8839,
              "end": 9087,
              "confidence": 0.98403,
              "speaker": "MLK"
            },
            {
              "text": "really?",
              "start": 9111,
              "end": 9559,
              "confidence": 0.99414,
              "speaker": "MLK"
            },
            {
              "text": "She",
              "start": 9687,
              "end": 9927,
              "confidence": 0.98809,
              "speaker": "MLK"
            },
            {
              "text": "do",
              "start": 9951,
              "end": 10111,
              "confidence": 0.99675,
              "speaker": "MLK"
            },
            {
              "text": "anything",
              "start": 10143,
              "end": 10367,
              "confidence": 0.99373,
              "speaker": "MLK"
            },
            {
              "text": "out",
              "start": 10391,
              "end": 10527,
              "confidence": 0.85817,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 10551,
              "end": 10663,
              "confidence": 0.72734,
              "speaker": "MLK"
            },
            {
              "text": "scene?",
              "start": 10679,
              "end": 11311,
              "confidence": 0.98246,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I think her biggest deal was she starred in a pilot.",
          "start": 11503,
          "end": 14231,
          "confidence": 0.9632664,
          "words": [
            {
              "text": "I",
              "start": 11503,
              "end": 11783,
              "confidence": 0.99127,
              "speaker": "MLK"
            },
            {
              "text": "think",
              "start": 11799,
              "end": 11927,
              "confidence": 0.99928,
              "speaker": "MLK"
            },
            {
              "text": "her",
              "start": 11951,
              "end": 12087,
              "confidence": 0.78702,
              "speaker": "MLK"
            },
            {
              "text": "biggest",
              "start": 12111,
              "end": 12375,
              "confidence": 0.99774,
              "speaker": "MLK"
            },
            {
              "text": "deal",
              "start": 12415,
              "end": 12615,
              "confidence": 0.99993,
              "speaker": "MLK"
            },
            {
              "text": "was",
              "start": 12655,
              "end": 12831,
              "confidence": 0.98405,
              "speaker": "MLK"
            },
            {
              "text": "she",
              "start": 12863,
              "end": 13031,
              "confidence": 0.99228,
              "speaker": "MLK"
            },
            {
              "text": "starred",
              "start": 13063,
              "end": 13271,
              "confidence": 0.90921,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 13303,
              "end": 13447,
              "confidence": 0.94332,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 13471,
              "end": 13631,
              "confidence": 0.99351,
              "speaker": "MLK"
            },
            {
              "text": "pilot.",
              "start": 13663,
              "end": 14231,
              "confidence": 0.99832,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Pilot? What's a pilot?",
          "start": 14343,
          "end": 15775,
          "confidence": 0.7736225,
          "words": [
            {
              "text": "Pilot?",
              "start": 14343,
              "end": 14751,
              "confidence": 0.50802,
              "speaker": "MLK"
            },
            {
              "text": "What's",
              "start": 14783,
              "end": 14991,
              "confidence": 0.60258,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 15023,
              "end": 15167,
              "confidence": 0.98812,
              "speaker": "MLK"
            },
            {
              "text": "pilot?",
              "start": 15191,
              "end": 15775,
              "confidence": 0.99577,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Well, you know, the show's on tv.",
          "start": 15895,
          "end": 17635,
          "confidence": 0.87160856,
          "words": [
            {
              "text": "Well,",
              "start": 15895,
              "end": 16127,
              "confidence": 0.79155,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 16151,
              "end": 16263,
              "confidence": 0.99764,
              "speaker": "MLK"
            },
            {
              "text": "know,",
              "start": 16279,
              "end": 16383,
              "confidence": 0.99781,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 16399,
              "end": 16503,
              "confidence": 0.98544,
              "speaker": "MLK"
            },
            {
              "text": "show's",
              "start": 16519,
              "end": 16743,
              "confidence": 0.33091,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 16759,
              "end": 16887,
              "confidence": 0.99903,
              "speaker": "MLK"
            },
            {
              "text": "tv.",
              "start": 16911,
              "end": 17635,
              "confidence": 0.99888,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't watch tv.",
          "start": 17975,
          "end": 19383,
          "confidence": 0.9877225,
          "words": [
            {
              "text": "I",
              "start": 17975,
              "end": 18239,
              "confidence": 0.99657,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 18247,
              "end": 18407,
              "confidence": 0.95611,
              "speaker": "MLK"
            },
            {
              "text": "watch",
              "start": 18431,
              "end": 18615,
              "confidence": 0.99974,
              "speaker": "MLK"
            },
            {
              "text": "tv.",
              "start": 18655,
              "end": 19383,
              "confidence": 0.99847,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Yeah, but you are aware that there's an invention called television, and on this invention they show shows, right?",
          "start": 19559,
          "end": 25287,
          "confidence": 0.95420945,
          "words": [
            {
              "text": "Yeah,",
              "start": 19559,
              "end": 20007,
              "confidence": 0.98056,
              "speaker": "MLK"
            },
            {
              "text": "but",
              "start": 20071,
              "end": 20415,
              "confidence": 0.99752,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 20495,
              "end": 20687,
              "confidence": 0.99918,
              "speaker": "MLK"
            },
            {
              "text": "are",
              "start": 20711,
              "end": 20895,
              "confidence": 0.99856,
              "speaker": "MLK"
            },
            {
              "text": "aware",
              "start": 20935,
              "end": 21279,
              "confidence": 0.99934,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 21327,
              "end": 21487,
              "confidence": 0.98418,
              "speaker": "MLK"
            },
            {
              "text": "there's",
              "start": 21511,
              "end": 21687,
              "confidence": 0.87218,
              "speaker": "MLK"
            },
            {
              "text": "an",
              "start": 21711,
              "end": 21895,
              "confidence": 0.99143,
              "speaker": "MLK"
            },
            {
              "text": "invention",
              "start": 21935,
              "end": 22239,
              "confidence": 0.96895,
              "speaker": "MLK"
            },
            {
              "text": "called",
              "start": 22287,
              "end": 22495,
              "confidence": 0.99359,
              "speaker": "MLK"
            },
            {
              "text": "television,",
              "start": 22535,
              "end": 22983,
              "confidence": 0.99226,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 23039,
              "end": 23231,
              "confidence": 0.98342,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 23263,
              "end": 23431,
              "confidence": 0.99527,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 23463,
              "end": 23703,
              "confidence": 0.9974,
              "speaker": "MLK"
            },
            {
              "text": "invention",
              "start": 23759,
              "end": 24031,
              "confidence": 0.96841,
              "speaker": "MLK"
            },
            {
              "text": "they",
              "start": 24063,
              "end": 24231,
              "confidence": 0.598,
              "speaker": "MLK"
            },
            {
              "text": "show",
              "start": 24263,
              "end": 24431,
              "confidence": 0.83278,
              "speaker": "MLK"
            },
            {
              "text": "shows,",
              "start": 24463,
              "end": 24735,
              "confidence": 0.98141,
              "speaker": "MLK"
            },
            {
              "text": "right?",
              "start": 24775,
              "end": 25287,
              "confidence": 0.99554,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Y. Yeah.",
          "start": 25431,
          "end": 26259,
          "confidence": 0.65914,
          "words": [
            {
              "text": "Y.",
              "start": 25431,
              "end": 25723,
              "confidence": 0.62931,
              "speaker": "MLK"
            },
            {
              "text": "Yeah.",
              "start": 25759,
              "end": 26259,
              "confidence": 0.68897,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Well, the way they pick TV shows is they make one show. That show's called a pilot. Then they show that one show to the people who pick shows, and on the strength of that one show, they decide if they want to make more shows. Some get chosen and become television programs. Some don't come nothing. She starred one of the ones that became nothing. You remember Antoine Rocamora? Half black, half saone. Used to call him Tony Rocky Horror?",
          "start": 26387,
          "end": 51223,
          "confidence": 0.9268378,
          "words": [
            {
              "text": "Well,",
              "start": 26387,
              "end": 26651,
              "confidence": 0.97535,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 26683,
              "end": 26803,
              "confidence": 0.99682,
              "speaker": "MLK"
            },
            {
              "text": "way",
              "start": 26819,
              "end": 26923,
              "confidence": 0.9991,
              "speaker": "MLK"
            },
            {
              "text": "they",
              "start": 26939,
              "end": 27091,
              "confidence": 0.9982,
              "speaker": "MLK"
            },
            {
              "text": "pick",
              "start": 27123,
              "end": 27291,
              "confidence": 0.99061,
              "speaker": "MLK"
            },
            {
              "text": "TV",
              "start": 27323,
              "end": 27635,
              "confidence": 0.99843,
              "speaker": "MLK"
            },
            {
              "text": "shows",
              "start": 27675,
              "end": 27915,
              "confidence": 0.99839,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 27955,
              "end": 28203,
              "confidence": 0.97966,
              "speaker": "MLK"
            },
            {
              "text": "they",
              "start": 28259,
              "end": 28427,
              "confidence": 0.99831,
              "speaker": "MLK"
            },
            {
              "text": "make",
              "start": 28451,
              "end": 28659,
              "confidence": 0.99839,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 28707,
              "end": 28939,
              "confidence": 0.99942,
              "speaker": "MLK"
            },
            {
              "text": "show.",
              "start": 28987,
              "end": 29243,
              "confidence": 0.99927,
              "speaker": "MLK"
            },
            {
              "text": "That",
              "start": 29299,
              "end": 29491,
              "confidence": 0.99363,
              "speaker": "MLK"
            },
            {
              "text": "show's",
              "start": 29523,
              "end": 29787,
              "confidence": 0.50099,
              "speaker": "MLK"
            },
            {
              "text": "called",
              "start": 29811,
              "end": 29971,
              "confidence": 0.99137,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 30003,
              "end": 30171,
              "confidence": 0.9395,
              "speaker": "MLK"
            },
            {
              "text": "pilot.",
              "start": 30203,
              "end": 30755,
              "confidence": 0.99773,
              "speaker": "MLK"
            },
            {
              "text": "Then",
              "start": 30875,
              "end": 31107,
              "confidence": 0.83451,
              "speaker": "MLK"
            },
            {
              "text": "they",
              "start": 31131,
              "end": 31291,
              "confidence": 0.99776,
              "speaker": "MLK"
            },
            {
              "text": "show",
              "start": 31323,
              "end": 31491,
              "confidence": 0.99966,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 31523,
              "end": 31691,
              "confidence": 0.9968,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 31723,
              "end": 31915,
              "confidence": 0.99904,
              "speaker": "MLK"
            },
            {
              "text": "show",
              "start": 31955,
              "end": 32131,
              "confidence": 0.99936,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 32163,
              "end": 32283,
              "confidence": 0.99704,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 32299,
              "end": 32379,
              "confidence": 0.99264,
              "speaker": "MLK"
            },
            {
              "text": "people",
              "start": 32387,
              "end": 32531,
              "confidence": 0.99891,
              "speaker": "MLK"
            },
            {
              "text": "who",
              "start": 32563,
              "end": 32731,
              "confidence": 0.98322,
              "speaker": "MLK"
            },
            {
              "text": "pick",
              "start": 32763,
              "end": 32931,
              "confidence": 0.9971,
              "speaker": "MLK"
            },
            {
              "text": "shows,",
              "start": 32963,
              "end": 33283,
              "confidence": 0.99809,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 33339,
              "end": 33507,
              "confidence": 0.99167,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 33531,
              "end": 33643,
              "confidence": 0.99784,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 33659,
              "end": 33787,
              "confidence": 0.74878,
              "speaker": "MLK"
            },
            {
              "text": "strength",
              "start": 33811,
              "end": 33963,
              "confidence": 0.99629,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 33979,
              "end": 34083,
              "confidence": 0.99808,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 34099,
              "end": 34275,
              "confidence": 0.99625,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 34315,
              "end": 34491,
              "confidence": 0.99733,
              "speaker": "MLK"
            },
            {
              "text": "show,",
              "start": 34523,
              "end": 34715,
              "confidence": 0.99975,
              "speaker": "MLK"
            },
            {
              "text": "they",
              "start": 34755,
              "end": 34907,
              "confidence": 0.99779,
              "speaker": "MLK"
            },
            {
              "text": "decide",
              "start": 34931,
              "end": 35171,
              "confidence": 0.99259,
              "speaker": "MLK"
            },
            {
              "text": "if",
              "start": 35203,
              "end": 35323,
              "confidence": 0.98745,
              "speaker": "MLK"
            },
            {
              "text": "they",
              "start": 35339,
              "end": 35467,
              "confidence": 0.99939,
              "speaker": "MLK"
            },
            {
              "text": "want",
              "start": 35491,
              "end": 35579,
              "confidence": 0.72115,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 35587,
              "end": 35707,
              "confidence": 0.64047,
              "speaker": "MLK"
            },
            {
              "text": "make",
              "start": 35731,
              "end": 35891,
              "confidence": 0.99914,
              "speaker": "MLK"
            },
            {
              "text": "more",
              "start": 35923,
              "end": 36115,
              "confidence": 0.99956,
              "speaker": "MLK"
            },
            {
              "text": "shows.",
              "start": 36155,
              "end": 36707,
              "confidence": 0.99767,
              "speaker": "MLK"
            },
            {
              "text": "Some",
              "start": 36851,
              "end": 37131,
              "confidence": 0.9995,
              "speaker": "MLK"
            },
            {
              "text": "get",
              "start": 37163,
              "end": 37355,
              "confidence": 0.99921,
              "speaker": "MLK"
            },
            {
              "text": "chosen",
              "start": 37395,
              "end": 37755,
              "confidence": 0.99911,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 37795,
              "end": 38019,
              "confidence": 0.99719,
              "speaker": "MLK"
            },
            {
              "text": "become",
              "start": 38067,
              "end": 38275,
              "confidence": 0.99837,
              "speaker": "MLK"
            },
            {
              "text": "television",
              "start": 38315,
              "end": 38883,
              "confidence": 0.96467,
              "speaker": "MLK"
            },
            {
              "text": "programs.",
              "start": 38979,
              "end": 39371,
              "confidence": 0.93503,
              "speaker": "MLK"
            },
            {
              "text": "Some",
              "start": 39443,
              "end": 39675,
              "confidence": 0.99943,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 39715,
              "end": 40411,
              "confidence": 0.94888,
              "speaker": "MLK"
            },
            {
              "text": "come",
              "start": 40603,
              "end": 40931,
              "confidence": 0.85108,
              "speaker": "MLK"
            },
            {
              "text": "nothing.",
              "start": 40963,
              "end": 41655,
              "confidence": 0.83123,
              "speaker": "MLK"
            },
            {
              "text": "She",
              "start": 42195,
              "end": 42531,
              "confidence": 0.99852,
              "speaker": "MLK"
            },
            {
              "text": "starred",
              "start": 42563,
              "end": 42819,
              "confidence": 0.67581,
              "speaker": "MLK"
            },
            {
              "text": "one",
              "start": 42867,
              "end": 43003,
              "confidence": 0.97966,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 43019,
              "end": 43075,
              "confidence": 0.93781,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 43075,
              "end": 43163,
              "confidence": 0.7671,
              "speaker": "MLK"
            },
            {
              "text": "ones",
              "start": 43179,
              "end": 43363,
              "confidence": 0.82342,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 43379,
              "end": 43483,
              "confidence": 0.52542,
              "speaker": "MLK"
            },
            {
              "text": "became",
              "start": 43499,
              "end": 43819,
              "confidence": 0.97282,
              "speaker": "MLK"
            },
            {
              "text": "nothing.",
              "start": 43867,
              "end": 44575,
              "confidence": 0.93896,
              "speaker": "MLK"
            },
            {
              "text": "You",
              "start": 45515,
              "end": 45899,
              "confidence": 0.99813,
              "speaker": "MLK"
            },
            {
              "text": "remember",
              "start": 45947,
              "end": 46171,
              "confidence": 0.99828,
              "speaker": "MLK"
            },
            {
              "text": "Antoine",
              "start": 46203,
              "end": 46619,
              "confidence": 0.83971,
              "speaker": "MLK"
            },
            {
              "text": "Rocamora?",
              "start": 46667,
              "end": 47531,
              "confidence": 0.36428,
              "speaker": "MLK"
            },
            {
              "text": "Half",
              "start": 47643,
              "end": 47987,
              "confidence": 0.99837,
              "speaker": "MLK"
            },
            {
              "text": "black,",
              "start": 48051,
              "end": 48323,
              "confidence": 0.9985,
              "speaker": "MLK"
            },
            {
              "text": "half",
              "start": 48379,
              "end": 48643,
              "confidence": 0.99693,
              "speaker": "MLK"
            },
            {
              "text": "saone.",
              "start": 48699,
              "end": 49107,
              "confidence": 0.29038,
              "speaker": "MLK"
            },
            {
              "text": "Used",
              "start": 49171,
              "end": 49347,
              "confidence": 0.99859,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 49371,
              "end": 49483,
              "confidence": 0.99794,
              "speaker": "MLK"
            },
            {
              "text": "call",
              "start": 49499,
              "end": 49627,
              "confidence": 0.99906,
              "speaker": "MLK"
            },
            {
              "text": "him",
              "start": 49651,
              "end": 49811,
              "confidence": 0.98813,
              "speaker": "MLK"
            },
            {
              "text": "Tony",
              "start": 49843,
              "end": 50107,
              "confidence": 0.97246,
              "speaker": "MLK"
            },
            {
              "text": "Rocky",
              "start": 50131,
              "end": 50451,
              "confidence": 0.96033,
              "speaker": "MLK"
            },
            {
              "text": "Horror?",
              "start": 50483,
              "end": 51223,
              "confidence": 0.31905,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Yeah, maybe. Fat, right?",
          "start": 51419,
          "end": 52935,
          "confidence": 0.865425,
          "words": [
            {
              "text": "Yeah,",
              "start": 51419,
              "end": 51815,
              "confidence": 0.96104,
              "speaker": "MLK"
            },
            {
              "text": "maybe.",
              "start": 51855,
              "end": 52191,
              "confidence": 0.51189,
              "speaker": "MLK"
            },
            {
              "text": "Fat,",
              "start": 52223,
              "end": 52439,
              "confidence": 0.99252,
              "speaker": "MLK"
            },
            {
              "text": "right?",
              "start": 52487,
              "end": 52935,
              "confidence": 0.99625,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I wouldn't go so far as to call the brother fat. I mean, he got a weight problem. What's the nigga gonna do you some more?",
          "start": 53055,
          "end": 57695,
          "confidence": 0.8816242,
          "words": [
            {
              "text": "I",
              "start": 53055,
              "end": 53263,
              "confidence": 0.95389,
              "speaker": "MLK"
            },
            {
              "text": "wouldn't",
              "start": 53279,
              "end": 53487,
              "confidence": 0.96268,
              "speaker": "MLK"
            },
            {
              "text": "go",
              "start": 53511,
              "end": 53647,
              "confidence": 0.99675,
              "speaker": "MLK"
            },
            {
              "text": "so",
              "start": 53671,
              "end": 53807,
              "confidence": 0.99831,
              "speaker": "MLK"
            },
            {
              "text": "far",
              "start": 53831,
              "end": 53943,
              "confidence": 0.99895,
              "speaker": "MLK"
            },
            {
              "text": "as",
              "start": 53959,
              "end": 54087,
              "confidence": 0.9707,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 54111,
              "end": 54247,
              "confidence": 0.98381,
              "speaker": "MLK"
            },
            {
              "text": "call",
              "start": 54271,
              "end": 54407,
              "confidence": 0.99827,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 54431,
              "end": 54519,
              "confidence": 0.69539,
              "speaker": "MLK"
            },
            {
              "text": "brother",
              "start": 54527,
              "end": 54791,
              "confidence": 0.99015,
              "speaker": "MLK"
            },
            {
              "text": "fat.",
              "start": 54823,
              "end": 54967,
              "confidence": 0.9668,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 54991,
              "end": 55103,
              "confidence": 0.93586,
              "speaker": "MLK"
            },
            {
              "text": "mean,",
              "start": 55119,
              "end": 55223,
              "confidence": 0.97515,
              "speaker": "MLK"
            },
            {
              "text": "he",
              "start": 55239,
              "end": 55367,
              "confidence": 0.98175,
              "speaker": "MLK"
            },
            {
              "text": "got",
              "start": 55391,
              "end": 55479,
              "confidence": 0.99703,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 55487,
              "end": 55583,
              "confidence": 0.88964,
              "speaker": "MLK"
            },
            {
              "text": "weight",
              "start": 55599,
              "end": 55751,
              "confidence": 0.38427,
              "speaker": "MLK"
            },
            {
              "text": "problem.",
              "start": 55783,
              "end": 55975,
              "confidence": 0.99238,
              "speaker": "MLK"
            },
            {
              "text": "What's",
              "start": 56015,
              "end": 56199,
              "confidence": 0.95828,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 56207,
              "end": 56279,
              "confidence": 0.92717,
              "speaker": "MLK"
            },
            {
              "text": "nigga",
              "start": 56287,
              "end": 56503,
              "confidence": 0.36428,
              "speaker": "MLK"
            },
            {
              "text": "gonna",
              "start": 56519,
              "end": 56743,
              "confidence": 0.49311,
              "speaker": "MLK"
            },
            {
              "text": "do",
              "start": 56759,
              "end": 56887,
              "confidence": 0.99196,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 56911,
              "end": 57047,
              "confidence": 0.58586,
              "speaker": "MLK"
            },
            {
              "text": "some",
              "start": 57071,
              "end": 57231,
              "confidence": 0.98214,
              "speaker": "MLK"
            },
            {
              "text": "more?",
              "start": 57263,
              "end": 57695,
              "confidence": 0.94765,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Yeah, I think I know what you mean. What about him?",
          "start": 57815,
          "end": 59879,
          "confidence": 0.9381936,
          "words": [
            {
              "text": "Yeah,",
              "start": 57815,
              "end": 58063,
              "confidence": 0.68169,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 58079,
              "end": 58207,
              "confidence": 0.9942,
              "speaker": "MLK"
            },
            {
              "text": "think",
              "start": 58231,
              "end": 58343,
              "confidence": 0.9983,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 58359,
              "end": 58487,
              "confidence": 0.9971,
              "speaker": "MLK"
            },
            {
              "text": "know",
              "start": 58511,
              "end": 58599,
              "confidence": 0.99756,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 58607,
              "end": 58703,
              "confidence": 0.83829,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 58719,
              "end": 58823,
              "confidence": 0.99547,
              "speaker": "MLK"
            },
            {
              "text": "mean.",
              "start": 58839,
              "end": 59015,
              "confidence": 0.99866,
              "speaker": "MLK"
            },
            {
              "text": "What",
              "start": 59055,
              "end": 59207,
              "confidence": 0.99461,
              "speaker": "MLK"
            },
            {
              "text": "about",
              "start": 59231,
              "end": 59391,
              "confidence": 0.98974,
              "speaker": "MLK"
            },
            {
              "text": "him?",
              "start": 59423,
              "end": 59879,
              "confidence": 0.83451,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Well, Marcellus fucked him up good. Word around the campfire is was on account of Marcellus Wallace's wife.",
          "start": 60007,
          "end": 66115,
          "confidence": 0.839255,
          "words": [
            {
              "text": "Well,",
              "start": 60007,
              "end": 60295,
              "confidence": 0.75429,
              "speaker": "MLK"
            },
            {
              "text": "Marcellus",
              "start": 60335,
              "end": 60943,
              "confidence": 0.70097,
              "speaker": "MLK"
            },
            {
              "text": "fucked",
              "start": 60999,
              "end": 61247,
              "confidence": 0.88802,
              "speaker": "MLK"
            },
            {
              "text": "him",
              "start": 61271,
              "end": 61431,
              "confidence": 0.9796,
              "speaker": "MLK"
            },
            {
              "text": "up",
              "start": 61463,
              "end": 61679,
              "confidence": 0.99877,
              "speaker": "MLK"
            },
            {
              "text": "good.",
              "start": 61727,
              "end": 62223,
              "confidence": 0.99908,
              "speaker": "MLK"
            },
            {
              "text": "Word",
              "start": 62359,
              "end": 62695,
              "confidence": 0.98512,
              "speaker": "MLK"
            },
            {
              "text": "around",
              "start": 62735,
              "end": 62911,
              "confidence": 0.44245,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 62943,
              "end": 63087,
              "confidence": 0.93621,
              "speaker": "MLK"
            },
            {
              "text": "campfire",
              "start": 63111,
              "end": 63503,
              "confidence": 0.78778,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 63559,
              "end": 63799,
              "confidence": 0.93844,
              "speaker": "MLK"
            },
            {
              "text": "was",
              "start": 63847,
              "end": 64007,
              "confidence": 0.94358,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 64031,
              "end": 64215,
              "confidence": 0.99554,
              "speaker": "MLK"
            },
            {
              "text": "account",
              "start": 64255,
              "end": 64383,
              "confidence": 0.98235,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 64399,
              "end": 64527,
              "confidence": 0.96336,
              "speaker": "MLK"
            },
            {
              "text": "Marcellus",
              "start": 64551,
              "end": 64991,
              "confidence": 0.41298,
              "speaker": "MLK"
            },
            {
              "text": "Wallace's",
              "start": 65023,
              "end": 65495,
              "confidence": 0.39908,
              "speaker": "MLK"
            },
            {
              "text": "wife.",
              "start": 65535,
              "end": 66115,
              "confidence": 0.99897,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "So what'd he do? Fucking.",
          "start": 74815,
          "end": 76223,
          "confidence": 0.78462,
          "words": [
            {
              "text": "So",
              "start": 74815,
              "end": 75127,
              "confidence": 0.87349,
              "speaker": "MLK"
            },
            {
              "text": "what'd",
              "start": 75151,
              "end": 75319,
              "confidence": 0.62465,
              "speaker": "MLK"
            },
            {
              "text": "he",
              "start": 75327,
              "end": 75471,
              "confidence": 0.98742,
              "speaker": "MLK"
            },
            {
              "text": "do?",
              "start": 75503,
              "end": 75695,
              "confidence": 0.99776,
              "speaker": "MLK"
            },
            {
              "text": "Fucking.",
              "start": 75735,
              "end": 76223,
              "confidence": 0.43978,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "No, no, no, no, no, no. Nothing that bad with.",
          "start": 76319,
          "end": 79017,
          "confidence": 0.796564,
          "words": [
            {
              "text": "No,",
              "start": 76319,
              "end": 76527,
              "confidence": 0.96823,
              "speaker": "MLK"
            },
            {
              "text": "no,",
              "start": 76551,
              "end": 76687,
              "confidence": 0.93701,
              "speaker": "MLK"
            },
            {
              "text": "no,",
              "start": 76711,
              "end": 76847,
              "confidence": 0.92994,
              "speaker": "MLK"
            },
            {
              "text": "no,",
              "start": 76871,
              "end": 77007,
              "confidence": 0.91569,
              "speaker": "MLK"
            },
            {
              "text": "no,",
              "start": 77031,
              "end": 77167,
              "confidence": 0.88579,
              "speaker": "MLK"
            },
            {
              "text": "no.",
              "start": 77191,
              "end": 77351,
              "confidence": 0.78013,
              "speaker": "MLK"
            },
            {
              "text": "Nothing",
              "start": 77383,
              "end": 77583,
              "confidence": 0.44568,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 77599,
              "end": 77727,
              "confidence": 0.97854,
              "speaker": "MLK"
            },
            {
              "text": "bad",
              "start": 77751,
              "end": 78315,
              "confidence": 0.89306,
              "speaker": "MLK"
            },
            {
              "text": "with.",
              "start": 78705,
              "end": 79017,
              "confidence": 0.23157,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Than what then?",
          "start": 79041,
          "end": 80005,
          "confidence": 0.75657,
          "words": [
            {
              "text": "Than",
              "start": 79041,
              "end": 79201,
              "confidence": 0.33529,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 79233,
              "end": 79401,
              "confidence": 0.95666,
              "speaker": "MLK"
            },
            {
              "text": "then?",
              "start": 79433,
              "end": 80005,
              "confidence": 0.97776,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Gave her a foot massage.",
          "start": 80425,
          "end": 81885,
          "confidence": 0.966622,
          "words": [
            {
              "text": "Gave",
              "start": 80425,
              "end": 80737,
              "confidence": 0.99467,
              "speaker": "MLK"
            },
            {
              "text": "her",
              "start": 80761,
              "end": 80825,
              "confidence": 0.94444,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 80825,
              "end": 80913,
              "confidence": 0.89968,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 80929,
              "end": 81129,
              "confidence": 0.99546,
              "speaker": "MLK"
            },
            {
              "text": "massage.",
              "start": 81177,
              "end": 81885,
              "confidence": 0.99886,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Foot massage? That's it?",
          "start": 84745,
          "end": 87689,
          "confidence": 0.99184,
          "words": [
            {
              "text": "Foot",
              "start": 84745,
              "end": 85105,
              "confidence": 0.99502,
              "speaker": "MLK"
            },
            {
              "text": "massage?",
              "start": 85145,
              "end": 85845,
              "confidence": 0.99792,
              "speaker": "MLK"
            },
            {
              "text": "That's",
              "start": 86985,
              "end": 87337,
              "confidence": 0.97622,
              "speaker": "MLK"
            },
            {
              "text": "it?",
              "start": 87361,
              "end": 87689,
              "confidence": 0.9982,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Mm hmm.",
          "start": 87777,
          "end": 88605,
          "confidence": 0.49598,
          "words": [
            {
              "text": "Mm",
              "start": 87777,
              "end": 88001,
              "confidence": 0.4332,
              "speaker": "MLK"
            },
            {
              "text": "hmm.",
              "start": 88033,
              "end": 88605,
              "confidence": 0.55876,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Then what did Marcels do?",
          "start": 89065,
          "end": 90725,
          "confidence": 0.792516,
          "words": [
            {
              "text": "Then",
              "start": 89065,
              "end": 89353,
              "confidence": 0.97924,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 89369,
              "end": 89473,
              "confidence": 0.96719,
              "speaker": "MLK"
            },
            {
              "text": "did",
              "start": 89489,
              "end": 89593,
              "confidence": 0.66761,
              "speaker": "MLK"
            },
            {
              "text": "Marcels",
              "start": 89609,
              "end": 90089,
              "confidence": 0.38199,
              "speaker": "MLK"
            },
            {
              "text": "do?",
              "start": 90137,
              "end": 90725,
              "confidence": 0.96655,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Sent a couple of cats over to his place. They took him out on his patio, threw his ass over the balcony. Nigga fell fals stories. Had a little garden down at the bottom, closed in glass, like a greenhouse. Niga fell through that. Since then he kind of developed a speech impediment.",
          "start": 91225,
          "end": 107645,
          "confidence": 0.8745987,
          "words": [
            {
              "text": "Sent",
              "start": 91225,
              "end": 91537,
              "confidence": 0.91452,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 91561,
              "end": 91649,
              "confidence": 0.99693,
              "speaker": "MLK"
            },
            {
              "text": "couple",
              "start": 91657,
              "end": 91793,
              "confidence": 0.8194,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 91809,
              "end": 91937,
              "confidence": 0.8428,
              "speaker": "MLK"
            },
            {
              "text": "cats",
              "start": 91961,
              "end": 92121,
              "confidence": 0.78284,
              "speaker": "MLK"
            },
            {
              "text": "over",
              "start": 92153,
              "end": 92321,
              "confidence": 0.99347,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 92353,
              "end": 92473,
              "confidence": 0.99836,
              "speaker": "MLK"
            },
            {
              "text": "his",
              "start": 92489,
              "end": 92665,
              "confidence": 0.99491,
              "speaker": "MLK"
            },
            {
              "text": "place.",
              "start": 92705,
              "end": 92929,
              "confidence": 0.99862,
              "speaker": "MLK"
            },
            {
              "text": "They",
              "start": 92977,
              "end": 93137,
              "confidence": 0.99622,
              "speaker": "MLK"
            },
            {
              "text": "took",
              "start": 93161,
              "end": 93273,
              "confidence": 0.99928,
              "speaker": "MLK"
            },
            {
              "text": "him",
              "start": 93289,
              "end": 93393,
              "confidence": 0.99332,
              "speaker": "MLK"
            },
            {
              "text": "out",
              "start": 93409,
              "end": 93537,
              "confidence": 0.99902,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 93561,
              "end": 93697,
              "confidence": 0.99835,
              "speaker": "MLK"
            },
            {
              "text": "his",
              "start": 93721,
              "end": 93881,
              "confidence": 0.97825,
              "speaker": "MLK"
            },
            {
              "text": "patio,",
              "start": 93913,
              "end": 94449,
              "confidence": 0.9997,
              "speaker": "MLK"
            },
            {
              "text": "threw",
              "start": 94537,
              "end": 94737,
              "confidence": 0.98283,
              "speaker": "MLK"
            },
            {
              "text": "his",
              "start": 94761,
              "end": 94921,
              "confidence": 0.99892,
              "speaker": "MLK"
            },
            {
              "text": "ass",
              "start": 94953,
              "end": 95193,
              "confidence": 0.99361,
              "speaker": "MLK"
            },
            {
              "text": "over",
              "start": 95249,
              "end": 95417,
              "confidence": 0.99767,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 95441,
              "end": 95601,
              "confidence": 0.99594,
              "speaker": "MLK"
            },
            {
              "text": "balcony.",
              "start": 95633,
              "end": 96161,
              "confidence": 0.99043,
              "speaker": "MLK"
            },
            {
              "text": "Nigga",
              "start": 96233,
              "end": 96561,
              "confidence": 0.37684,
              "speaker": "MLK"
            },
            {
              "text": "fell",
              "start": 96593,
              "end": 96889,
              "confidence": 0.44975,
              "speaker": "MLK"
            },
            {
              "text": "fals",
              "start": 96937,
              "end": 97313,
              "confidence": 0.38216,
              "speaker": "MLK"
            },
            {
              "text": "stories.",
              "start": 97409,
              "end": 98185,
              "confidence": 0.98446,
              "speaker": "MLK"
            },
            {
              "text": "Had",
              "start": 98345,
              "end": 98569,
              "confidence": 0.52774,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 98577,
              "end": 98673,
              "confidence": 0.74696,
              "speaker": "MLK"
            },
            {
              "text": "little",
              "start": 98689,
              "end": 98865,
              "confidence": 0.99212,
              "speaker": "MLK"
            },
            {
              "text": "garden",
              "start": 98905,
              "end": 99201,
              "confidence": 0.98874,
              "speaker": "MLK"
            },
            {
              "text": "down",
              "start": 99233,
              "end": 99425,
              "confidence": 0.99844,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 99465,
              "end": 99593,
              "confidence": 0.99717,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 99609,
              "end": 99713,
              "confidence": 0.99946,
              "speaker": "MLK"
            },
            {
              "text": "bottom,",
              "start": 99729,
              "end": 100249,
              "confidence": 0.99036,
              "speaker": "MLK"
            },
            {
              "text": "closed",
              "start": 100337,
              "end": 100577,
              "confidence": 0.6532,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 100601,
              "end": 100809,
              "confidence": 0.99887,
              "speaker": "MLK"
            },
            {
              "text": "glass,",
              "start": 100857,
              "end": 101089,
              "confidence": 0.99793,
              "speaker": "MLK"
            },
            {
              "text": "like",
              "start": 101137,
              "end": 101297,
              "confidence": 0.9992,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 101321,
              "end": 101433,
              "confidence": 0.99684,
              "speaker": "MLK"
            },
            {
              "text": "greenhouse.",
              "start": 101449,
              "end": 102313,
              "confidence": 0.31586,
              "speaker": "MLK"
            },
            {
              "text": "Niga",
              "start": 102489,
              "end": 102921,
              "confidence": 0.30246,
              "speaker": "MLK"
            },
            {
              "text": "fell",
              "start": 102953,
              "end": 103313,
              "confidence": 0.96303,
              "speaker": "MLK"
            },
            {
              "text": "through",
              "start": 103369,
              "end": 103609,
              "confidence": 0.99856,
              "speaker": "MLK"
            },
            {
              "text": "that.",
              "start": 103657,
              "end": 104245,
              "confidence": 0.99891,
              "speaker": "MLK"
            },
            {
              "text": "Since",
              "start": 104825,
              "end": 105209,
              "confidence": 0.99898,
              "speaker": "MLK"
            },
            {
              "text": "then",
              "start": 105257,
              "end": 105441,
              "confidence": 0.62624,
              "speaker": "MLK"
            },
            {
              "text": "he",
              "start": 105473,
              "end": 105617,
              "confidence": 0.4784,
              "speaker": "MLK"
            },
            {
              "text": "kind",
              "start": 105641,
              "end": 105777,
              "confidence": 0.97344,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 105801,
              "end": 106033,
              "confidence": 0.69675,
              "speaker": "MLK"
            },
            {
              "text": "developed",
              "start": 106089,
              "end": 106297,
              "confidence": 0.99628,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 106321,
              "end": 106481,
              "confidence": 0.89579,
              "speaker": "MLK"
            },
            {
              "text": "speech",
              "start": 106513,
              "end": 106697,
              "confidence": 0.97312,
              "speaker": "MLK"
            },
            {
              "text": "impediment.",
              "start": 106721,
              "end": 107645,
              "confidence": 0.79028,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "That's a damn shame. But still, I have to say, you play with matches, you get burned.",
          "start": 109305,
          "end": 119993,
          "confidence": 0.94778293,
          "words": [
            {
              "text": "That's",
              "start": 109305,
              "end": 109657,
              "confidence": 0.94037,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 109681,
              "end": 109841,
              "confidence": 0.99774,
              "speaker": "MLK"
            },
            {
              "text": "damn",
              "start": 109873,
              "end": 110137,
              "confidence": 0.92957,
              "speaker": "MLK"
            },
            {
              "text": "shame.",
              "start": 110201,
              "end": 110805,
              "confidence": 0.99639,
              "speaker": "MLK"
            },
            {
              "text": "But",
              "start": 116785,
              "end": 117145,
              "confidence": 0.62716,
              "speaker": "MLK"
            },
            {
              "text": "still,",
              "start": 117185,
              "end": 117361,
              "confidence": 0.99021,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 117393,
              "end": 117537,
              "confidence": 0.99422,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 117561,
              "end": 117745,
              "confidence": 0.99895,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 117785,
              "end": 117961,
              "confidence": 0.99826,
              "speaker": "MLK"
            },
            {
              "text": "say,",
              "start": 117993,
              "end": 118161,
              "confidence": 0.99415,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 118193,
              "end": 118361,
              "confidence": 0.76617,
              "speaker": "MLK"
            },
            {
              "text": "play",
              "start": 118393,
              "end": 118561,
              "confidence": 0.93649,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 118593,
              "end": 118761,
              "confidence": 0.99316,
              "speaker": "MLK"
            },
            {
              "text": "matches,",
              "start": 118793,
              "end": 119105,
              "confidence": 0.98462,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 119145,
              "end": 119321,
              "confidence": 0.99607,
              "speaker": "MLK"
            },
            {
              "text": "get",
              "start": 119353,
              "end": 119545,
              "confidence": 0.99445,
              "speaker": "MLK"
            },
            {
              "text": "burned.",
              "start": 119585,
              "end": 119993,
              "confidence": 0.97433,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "What do you mean?",
          "start": 120089,
          "end": 121041,
          "confidence": 0.995925,
          "words": [
            {
              "text": "What",
              "start": 120089,
              "end": 120249,
              "confidence": 0.99774,
              "speaker": "MLK"
            },
            {
              "text": "do",
              "start": 120257,
              "end": 120329,
              "confidence": 0.99308,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 120337,
              "end": 120481,
              "confidence": 0.9946,
              "speaker": "MLK"
            },
            {
              "text": "mean?",
              "start": 120513,
              "end": 121041,
              "confidence": 0.99828,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "You don't be giving Marcellis Waace, his new bride, a foot massage.",
          "start": 121193,
          "end": 124705,
          "confidence": 0.7248808,
          "words": [
            {
              "text": "You",
              "start": 121193,
              "end": 121433,
              "confidence": 0.84003,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 121449,
              "end": 121617,
              "confidence": 0.90206,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 121641,
              "end": 121777,
              "confidence": 0.96743,
              "speaker": "MLK"
            },
            {
              "text": "giving",
              "start": 121801,
              "end": 122041,
              "confidence": 0.75045,
              "speaker": "MLK"
            },
            {
              "text": "Marcellis",
              "start": 122073,
              "end": 122585,
              "confidence": 0.35818,
              "speaker": "MLK"
            },
            {
              "text": "Waace,",
              "start": 122625,
              "end": 122921,
              "confidence": 0.1322,
              "speaker": "MLK"
            },
            {
              "text": "his",
              "start": 122953,
              "end": 123097,
              "confidence": 0.47677,
              "speaker": "MLK"
            },
            {
              "text": "new",
              "start": 123121,
              "end": 123305,
              "confidence": 0.9797,
              "speaker": "MLK"
            },
            {
              "text": "bride,",
              "start": 123345,
              "end": 123545,
              "confidence": 0.9444,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 123585,
              "end": 123737,
              "confidence": 0.3744,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 123761,
              "end": 123969,
              "confidence": 0.99271,
              "speaker": "MLK"
            },
            {
              "text": "massage.",
              "start": 124017,
              "end": 124705,
              "confidence": 0.98024,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "You don't think he overreacted?",
          "start": 124865,
          "end": 126585,
          "confidence": 0.979742,
          "words": [
            {
              "text": "You",
              "start": 124865,
              "end": 125089,
              "confidence": 0.99905,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 125097,
              "end": 125257,
              "confidence": 0.97773,
              "speaker": "MLK"
            },
            {
              "text": "think",
              "start": 125281,
              "end": 125417,
              "confidence": 0.99932,
              "speaker": "MLK"
            },
            {
              "text": "he",
              "start": 125441,
              "end": 125649,
              "confidence": 0.99603,
              "speaker": "MLK"
            },
            {
              "text": "overreacted?",
              "start": 125697,
              "end": 126585,
              "confidence": 0.92658,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Well, yah's why. I probably didn't expect Myl to react the way he did, but he had to expect a reaction.",
          "start": 126705,
          "end": 132351,
          "confidence": 0.8639967,
          "words": [
            {
              "text": "Well,",
              "start": 126705,
              "end": 127081,
              "confidence": 0.67252,
              "speaker": "MLK"
            },
            {
              "text": "yah's",
              "start": 127153,
              "end": 127513,
              "confidence": 0.09105,
              "speaker": "MLK"
            },
            {
              "text": "why.",
              "start": 127529,
              "end": 127609,
              "confidence": 0.59742,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 127617,
              "end": 127761,
              "confidence": 0.91883,
              "speaker": "MLK"
            },
            {
              "text": "probably",
              "start": 127793,
              "end": 127993,
              "confidence": 0.9261,
              "speaker": "MLK"
            },
            {
              "text": "didn't",
              "start": 128009,
              "end": 128201,
              "confidence": 0.3797,
              "speaker": "MLK"
            },
            {
              "text": "expect",
              "start": 128233,
              "end": 128449,
              "confidence": 0.99644,
              "speaker": "MLK"
            },
            {
              "text": "Myl",
              "start": 128497,
              "end": 128913,
              "confidence": 0.85261,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 128969,
              "end": 129113,
              "confidence": 0.99945,
              "speaker": "MLK"
            },
            {
              "text": "react",
              "start": 129129,
              "end": 129361,
              "confidence": 0.99885,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 129393,
              "end": 129513,
              "confidence": 0.99727,
              "speaker": "MLK"
            },
            {
              "text": "way",
              "start": 129529,
              "end": 129657,
              "confidence": 0.99972,
              "speaker": "MLK"
            },
            {
              "text": "he",
              "start": 129681,
              "end": 129841,
              "confidence": 0.99857,
              "speaker": "MLK"
            },
            {
              "text": "did,",
              "start": 129873,
              "end": 130161,
              "confidence": 0.99945,
              "speaker": "MLK"
            },
            {
              "text": "but",
              "start": 130233,
              "end": 130651,
              "confidence": 0.91687,
              "speaker": "MLK"
            },
            {
              "text": "he",
              "start": 130753,
              "end": 130943,
              "confidence": 0.96897,
              "speaker": "MLK"
            },
            {
              "text": "had",
              "start": 130959,
              "end": 131111,
              "confidence": 0.99568,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 131143,
              "end": 131383,
              "confidence": 0.99829,
              "speaker": "MLK"
            },
            {
              "text": "expect",
              "start": 131439,
              "end": 131631,
              "confidence": 0.99836,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 131663,
              "end": 131783,
              "confidence": 0.84466,
              "speaker": "MLK"
            },
            {
              "text": "reaction.",
              "start": 131799,
              "end": 132351,
              "confidence": 0.99312,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "It was a foot massage. The foot massage is nothing. I give my mother a foot massage.",
          "start": 132423,
          "end": 136311,
          "confidence": 0.8927441,
          "words": [
            {
              "text": "It",
              "start": 132423,
              "end": 132559,
              "confidence": 0.90525,
              "speaker": "MLK"
            },
            {
              "text": "was",
              "start": 132567,
              "end": 132663,
              "confidence": 0.78472,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 132679,
              "end": 132807,
              "confidence": 0.87381,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 132831,
              "end": 133039,
              "confidence": 0.99971,
              "speaker": "MLK"
            },
            {
              "text": "massage.",
              "start": 133087,
              "end": 133463,
              "confidence": 0.99783,
              "speaker": "MLK"
            },
            {
              "text": "The",
              "start": 133519,
              "end": 133663,
              "confidence": 0.6238,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 133679,
              "end": 133831,
              "confidence": 0.99897,
              "speaker": "MLK"
            },
            {
              "text": "massage",
              "start": 133863,
              "end": 134175,
              "confidence": 0.99436,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 134215,
              "end": 134391,
              "confidence": 0.96572,
              "speaker": "MLK"
            },
            {
              "text": "nothing.",
              "start": 134423,
              "end": 134647,
              "confidence": 0.9694,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 134671,
              "end": 134807,
              "confidence": 0.52799,
              "speaker": "MLK"
            },
            {
              "text": "give",
              "start": 134831,
              "end": 134967,
              "confidence": 0.67945,
              "speaker": "MLK"
            },
            {
              "text": "my",
              "start": 134991,
              "end": 135127,
              "confidence": 0.99864,
              "speaker": "MLK"
            },
            {
              "text": "mother",
              "start": 135151,
              "end": 135327,
              "confidence": 0.99817,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 135351,
              "end": 135463,
              "confidence": 0.89831,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 135479,
              "end": 135631,
              "confidence": 0.99685,
              "speaker": "MLK"
            },
            {
              "text": "massage.",
              "start": 135663,
              "end": 136311,
              "confidence": 0.96367,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Just laying your hands in a familiar way on myl''new way. Is it as bad as eating her pussy out? No, it's the same fucking ballpump.",
          "start": 136463,
          "end": 145111,
          "confidence": 0.81250423,
          "words": [
            {
              "text": "Just",
              "start": 136463,
              "end": 136775,
              "confidence": 0.55387,
              "speaker": "MLK"
            },
            {
              "text": "laying",
              "start": 136815,
              "end": 137015,
              "confidence": 0.71948,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 137055,
              "end": 137255,
              "confidence": 0.9776,
              "speaker": "MLK"
            },
            {
              "text": "hands",
              "start": 137295,
              "end": 137487,
              "confidence": 0.99618,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 137511,
              "end": 137623,
              "confidence": 0.8263,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 137639,
              "end": 137839,
              "confidence": 0.90957,
              "speaker": "MLK"
            },
            {
              "text": "familiar",
              "start": 137887,
              "end": 138175,
              "confidence": 0.95566,
              "speaker": "MLK"
            },
            {
              "text": "way",
              "start": 138215,
              "end": 138367,
              "confidence": 0.93495,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 138391,
              "end": 138527,
              "confidence": 0.64219,
              "speaker": "MLK"
            },
            {
              "text": "myl''new",
              "start": 138551,
              "end": 139335,
              "confidence": 0.01814,
              "speaker": "MLK"
            },
            {
              "text": "way.",
              "start": 139375,
              "end": 139955,
              "confidence": 0.98884,
              "speaker": "MLK"
            },
            {
              "text": "Is",
              "start": 140775,
              "end": 141087,
              "confidence": 0.91396,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 141111,
              "end": 141175,
              "confidence": 0.65598,
              "speaker": "MLK"
            },
            {
              "text": "as",
              "start": 141175,
              "end": 141383,
              "confidence": 0.94747,
              "speaker": "MLK"
            },
            {
              "text": "bad",
              "start": 141439,
              "end": 141679,
              "confidence": 0.99976,
              "speaker": "MLK"
            },
            {
              "text": "as",
              "start": 141727,
              "end": 141863,
              "confidence": 0.99464,
              "speaker": "MLK"
            },
            {
              "text": "eating",
              "start": 141879,
              "end": 142087,
              "confidence": 0.93758,
              "speaker": "MLK"
            },
            {
              "text": "her",
              "start": 142111,
              "end": 142247,
              "confidence": 0.99687,
              "speaker": "MLK"
            },
            {
              "text": "pussy",
              "start": 142271,
              "end": 142591,
              "confidence": 0.9929,
              "speaker": "MLK"
            },
            {
              "text": "out?",
              "start": 142623,
              "end": 142863,
              "confidence": 0.99133,
              "speaker": "MLK"
            },
            {
              "text": "No,",
              "start": 142919,
              "end": 143447,
              "confidence": 0.98256,
              "speaker": "MLK"
            },
            {
              "text": "it's",
              "start": 143591,
              "end": 143863,
              "confidence": 0.20124,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 143879,
              "end": 143983,
              "confidence": 0.97512,
              "speaker": "MLK"
            },
            {
              "text": "same",
              "start": 143999,
              "end": 144175,
              "confidence": 0.99613,
              "speaker": "MLK"
            },
            {
              "text": "fucking",
              "start": 144215,
              "end": 144559,
              "confidence": 0.60343,
              "speaker": "MLK"
            },
            {
              "text": "ballpump.",
              "start": 144607,
              "end": 145111,
              "confidence": 0.41336,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Whoa, whoa, whoa, whoa. Stop right there. Eating the bitch out. And giving a bitch a foot massage ain't eating the same fucking thing.",
          "start": 145183,
          "end": 150103,
          "confidence": 0.797145,
          "words": [
            {
              "text": "Whoa,",
              "start": 145183,
              "end": 145343,
              "confidence": 0.84262,
              "speaker": "MLK"
            },
            {
              "text": "whoa,",
              "start": 145359,
              "end": 145511,
              "confidence": 0.63937,
              "speaker": "MLK"
            },
            {
              "text": "whoa,",
              "start": 145543,
              "end": 145687,
              "confidence": 0.81017,
              "speaker": "MLK"
            },
            {
              "text": "whoa.",
              "start": 145711,
              "end": 145895,
              "confidence": 0.51551,
              "speaker": "MLK"
            },
            {
              "text": "Stop",
              "start": 145935,
              "end": 146111,
              "confidence": 0.99925,
              "speaker": "MLK"
            },
            {
              "text": "right",
              "start": 146143,
              "end": 146335,
              "confidence": 0.99635,
              "speaker": "MLK"
            },
            {
              "text": "there.",
              "start": 146375,
              "end": 146695,
              "confidence": 0.98836,
              "speaker": "MLK"
            },
            {
              "text": "Eating",
              "start": 146775,
              "end": 147023,
              "confidence": 0.71781,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 147039,
              "end": 147143,
              "confidence": 0.57285,
              "speaker": "MLK"
            },
            {
              "text": "bitch",
              "start": 147159,
              "end": 147287,
              "confidence": 0.79049,
              "speaker": "MLK"
            },
            {
              "text": "out.",
              "start": 147311,
              "end": 147423,
              "confidence": 0.55144,
              "speaker": "MLK"
            },
            {
              "text": "And",
              "start": 147439,
              "end": 147543,
              "confidence": 0.90056,
              "speaker": "MLK"
            },
            {
              "text": "giving",
              "start": 147559,
              "end": 147703,
              "confidence": 0.42732,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 147719,
              "end": 147823,
              "confidence": 0.56756,
              "speaker": "MLK"
            },
            {
              "text": "bitch",
              "start": 147839,
              "end": 147943,
              "confidence": 0.76886,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 147959,
              "end": 148063,
              "confidence": 0.94188,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 148079,
              "end": 148231,
              "confidence": 0.99628,
              "speaker": "MLK"
            },
            {
              "text": "massage",
              "start": 148263,
              "end": 148535,
              "confidence": 0.93264,
              "speaker": "MLK"
            },
            {
              "text": "ain't",
              "start": 148575,
              "end": 148783,
              "confidence": 0.86484,
              "speaker": "MLK"
            },
            {
              "text": "eating",
              "start": 148799,
              "end": 148983,
              "confidence": 0.72562,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 148999,
              "end": 149103,
              "confidence": 0.9917,
              "speaker": "MLK"
            },
            {
              "text": "same",
              "start": 149119,
              "end": 149319,
              "confidence": 0.99664,
              "speaker": "MLK"
            },
            {
              "text": "fucking",
              "start": 149367,
              "end": 149695,
              "confidence": 0.59609,
              "speaker": "MLK"
            },
            {
              "text": "thing.",
              "start": 149735,
              "end": 150103,
              "confidence": 0.99727,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "It's not. It's the same ballpark.",
          "start": 150199,
          "end": 151903,
          "confidence": 0.95119166,
          "words": [
            {
              "text": "It's",
              "start": 150199,
              "end": 150471,
              "confidence": 0.91639,
              "speaker": "MLK"
            },
            {
              "text": "not.",
              "start": 150503,
              "end": 150719,
              "confidence": 0.99504,
              "speaker": "MLK"
            },
            {
              "text": "It's",
              "start": 150767,
              "end": 150943,
              "confidence": 0.9301,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 150959,
              "end": 151063,
              "confidence": 0.99547,
              "speaker": "MLK"
            },
            {
              "text": "same",
              "start": 151079,
              "end": 151279,
              "confidence": 0.99728,
              "speaker": "MLK"
            },
            {
              "text": "ballpark.",
              "start": 151327,
              "end": 151903,
              "confidence": 0.87287,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Ain't no fucking Ballpark neither. Now look, maybe your method of massage differs from mine. But you know, touching his wife's feet and sticking your tongue in the holiest the holies ain't the same fucking ballpark. It ain't the same league. It ain't even the same fucking sport. Look, foot massages don't mean shit.",
          "start": 151959,
          "end": 167095,
          "confidence": 0.9218822,
          "words": [
            {
              "text": "Ain't",
              "start": 151959,
              "end": 152247,
              "confidence": 0.89907,
              "speaker": "MLK"
            },
            {
              "text": "no",
              "start": 152271,
              "end": 152431,
              "confidence": 0.99824,
              "speaker": "MLK"
            },
            {
              "text": "fucking",
              "start": 152463,
              "end": 152799,
              "confidence": 0.61452,
              "speaker": "MLK"
            },
            {
              "text": "Ballpark",
              "start": 152847,
              "end": 153423,
              "confidence": 0.85573,
              "speaker": "MLK"
            },
            {
              "text": "neither.",
              "start": 153479,
              "end": 153999,
              "confidence": 0.98141,
              "speaker": "MLK"
            },
            {
              "text": "Now",
              "start": 154127,
              "end": 154367,
              "confidence": 0.97099,
              "speaker": "MLK"
            },
            {
              "text": "look,",
              "start": 154391,
              "end": 154767,
              "confidence": 0.99828,
              "speaker": "MLK"
            },
            {
              "text": "maybe",
              "start": 154871,
              "end": 155143,
              "confidence": 0.99563,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 155159,
              "end": 155287,
              "confidence": 0.9848,
              "speaker": "MLK"
            },
            {
              "text": "method",
              "start": 155311,
              "end": 155543,
              "confidence": 0.99733,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 155559,
              "end": 155663,
              "confidence": 0.93421,
              "speaker": "MLK"
            },
            {
              "text": "massage",
              "start": 155679,
              "end": 156095,
              "confidence": 0.99223,
              "speaker": "MLK"
            },
            {
              "text": "differs",
              "start": 156175,
              "end": 156431,
              "confidence": 0.86238,
              "speaker": "MLK"
            },
            {
              "text": "from",
              "start": 156463,
              "end": 156631,
              "confidence": 0.99471,
              "speaker": "MLK"
            },
            {
              "text": "mine.",
              "start": 156663,
              "end": 156987,
              "confidence": 0.99585,
              "speaker": "MLK"
            },
            {
              "text": "But",
              "start": 157071,
              "end": 157219,
              "confidence": 0.98097,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 157227,
              "end": 157323,
              "confidence": 0.95572,
              "speaker": "MLK"
            },
            {
              "text": "know,",
              "start": 157339,
              "end": 157467,
              "confidence": 0.96193,
              "speaker": "MLK"
            },
            {
              "text": "touching",
              "start": 157491,
              "end": 157771,
              "confidence": 0.9907,
              "speaker": "MLK"
            },
            {
              "text": "his",
              "start": 157803,
              "end": 158019,
              "confidence": 0.60668,
              "speaker": "MLK"
            },
            {
              "text": "wife's",
              "start": 158067,
              "end": 158435,
              "confidence": 0.76171,
              "speaker": "MLK"
            },
            {
              "text": "feet",
              "start": 158475,
              "end": 158843,
              "confidence": 0.99332,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 158939,
              "end": 159147,
              "confidence": 0.99708,
              "speaker": "MLK"
            },
            {
              "text": "sticking",
              "start": 159171,
              "end": 159403,
              "confidence": 0.88454,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 159419,
              "end": 159547,
              "confidence": 0.99498,
              "speaker": "MLK"
            },
            {
              "text": "tongue",
              "start": 159571,
              "end": 159747,
              "confidence": 0.99749,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 159771,
              "end": 159883,
              "confidence": 0.56867,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 159899,
              "end": 159979,
              "confidence": 0.97867,
              "speaker": "MLK"
            },
            {
              "text": "holiest",
              "start": 159987,
              "end": 160307,
              "confidence": 0.97765,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 160331,
              "end": 160443,
              "confidence": 0.61533,
              "speaker": "MLK"
            },
            {
              "text": "holies",
              "start": 160459,
              "end": 160771,
              "confidence": 0.95223,
              "speaker": "MLK"
            },
            {
              "text": "ain't",
              "start": 160803,
              "end": 161067,
              "confidence": 0.94944,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 161091,
              "end": 161227,
              "confidence": 0.99873,
              "speaker": "MLK"
            },
            {
              "text": "same",
              "start": 161251,
              "end": 161507,
              "confidence": 0.9989,
              "speaker": "MLK"
            },
            {
              "text": "fucking",
              "start": 161571,
              "end": 161891,
              "confidence": 0.63791,
              "speaker": "MLK"
            },
            {
              "text": "ballpark.",
              "start": 161923,
              "end": 162387,
              "confidence": 0.79701,
              "speaker": "MLK"
            },
            {
              "text": "It",
              "start": 162411,
              "end": 162499,
              "confidence": 0.97681,
              "speaker": "MLK"
            },
            {
              "text": "ain't",
              "start": 162507,
              "end": 162707,
              "confidence": 0.94343,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 162731,
              "end": 162867,
              "confidence": 0.99722,
              "speaker": "MLK"
            },
            {
              "text": "same",
              "start": 162891,
              "end": 163123,
              "confidence": 0.99942,
              "speaker": "MLK"
            },
            {
              "text": "league.",
              "start": 163179,
              "end": 163395,
              "confidence": 0.99835,
              "speaker": "MLK"
            },
            {
              "text": "It",
              "start": 163435,
              "end": 163515,
              "confidence": 0.97436,
              "speaker": "MLK"
            },
            {
              "text": "ain't",
              "start": 163515,
              "end": 163707,
              "confidence": 0.87963,
              "speaker": "MLK"
            },
            {
              "text": "even",
              "start": 163731,
              "end": 163843,
              "confidence": 0.90563,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 163859,
              "end": 163963,
              "confidence": 0.99195,
              "speaker": "MLK"
            },
            {
              "text": "same",
              "start": 163979,
              "end": 164155,
              "confidence": 0.99688,
              "speaker": "MLK"
            },
            {
              "text": "fucking",
              "start": 164195,
              "end": 164523,
              "confidence": 0.66195,
              "speaker": "MLK"
            },
            {
              "text": "sport.",
              "start": 164579,
              "end": 164987,
              "confidence": 0.99816,
              "speaker": "MLK"
            },
            {
              "text": "Look,",
              "start": 165091,
              "end": 165307,
              "confidence": 0.97491,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 165331,
              "end": 165467,
              "confidence": 0.99933,
              "speaker": "MLK"
            },
            {
              "text": "massages",
              "start": 165491,
              "end": 165891,
              "confidence": 0.84544,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 165963,
              "end": 166211,
              "confidence": 0.98029,
              "speaker": "MLK"
            },
            {
              "text": "mean",
              "start": 166243,
              "end": 166459,
              "confidence": 0.9997,
              "speaker": "MLK"
            },
            {
              "text": "shit.",
              "start": 166507,
              "end": 167095,
              "confidence": 0.98314,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Have you ever given a foot massage?",
          "start": 167395,
          "end": 169215,
          "confidence": 0.9188629,
          "words": [
            {
              "text": "Have",
              "start": 167395,
              "end": 167683,
              "confidence": 0.99869,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 167699,
              "end": 167851,
              "confidence": 0.99962,
              "speaker": "MLK"
            },
            {
              "text": "ever",
              "start": 167883,
              "end": 168027,
              "confidence": 0.99068,
              "speaker": "MLK"
            },
            {
              "text": "given",
              "start": 168051,
              "end": 168211,
              "confidence": 0.9531,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 168243,
              "end": 168363,
              "confidence": 0.97972,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 168379,
              "end": 168531,
              "confidence": 0.99886,
              "speaker": "MLK"
            },
            {
              "text": "massage?",
              "start": 168563,
              "end": 169215,
              "confidence": 0.51137,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Go. Don't be telling me about foot massages. I'm the footfucking master.",
          "start": 170435,
          "end": 173955,
          "confidence": 0.84843665,
          "words": [
            {
              "text": "Go.",
              "start": 170435,
              "end": 170675,
              "confidence": 0.49649,
              "speaker": "MLK"
            },
            {
              "text": "Don't",
              "start": 170675,
              "end": 170803,
              "confidence": 0.79,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 170819,
              "end": 170947,
              "confidence": 0.97484,
              "speaker": "MLK"
            },
            {
              "text": "telling",
              "start": 170971,
              "end": 171211,
              "confidence": 0.85999,
              "speaker": "MLK"
            },
            {
              "text": "me",
              "start": 171243,
              "end": 171387,
              "confidence": 0.99224,
              "speaker": "MLK"
            },
            {
              "text": "about",
              "start": 171411,
              "end": 171547,
              "confidence": 0.99722,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 171571,
              "end": 171731,
              "confidence": 0.99965,
              "speaker": "MLK"
            },
            {
              "text": "massages.",
              "start": 171763,
              "end": 172267,
              "confidence": 0.90016,
              "speaker": "MLK"
            },
            {
              "text": "I'm",
              "start": 172371,
              "end": 172627,
              "confidence": 0.9602,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 172651,
              "end": 172763,
              "confidence": 0.9945,
              "speaker": "MLK"
            },
            {
              "text": "footfucking",
              "start": 172779,
              "end": 173419,
              "confidence": 0.25111,
              "speaker": "MLK"
            },
            {
              "text": "master.",
              "start": 173467,
              "end": 173955,
              "confidence": 0.96484,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "You giving a lot of em?",
          "start": 174035,
          "end": 175107,
          "confidence": 0.83274835,
          "words": [
            {
              "text": "You",
              "start": 174035,
              "end": 174227,
              "confidence": 0.99034,
              "speaker": "MLK"
            },
            {
              "text": "giving",
              "start": 174251,
              "end": 174467,
              "confidence": 0.44898,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 174491,
              "end": 174603,
              "confidence": 0.99743,
              "speaker": "MLK"
            },
            {
              "text": "lot",
              "start": 174619,
              "end": 174723,
              "confidence": 0.99802,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 174739,
              "end": 174843,
              "confidence": 0.99249,
              "speaker": "MLK"
            },
            {
              "text": "em?",
              "start": 174859,
              "end": 175107,
              "confidence": 0.56923,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Shit, yeah. Got my technique down and everything. I don't be tickling or nothing.",
          "start": 175171,
          "end": 178855,
          "confidence": 0.903,
          "words": [
            {
              "text": "Shit,",
              "start": 175171,
              "end": 175395,
              "confidence": 0.94555,
              "speaker": "MLK"
            },
            {
              "text": "yeah.",
              "start": 175435,
              "end": 175771,
              "confidence": 0.92271,
              "speaker": "MLK"
            },
            {
              "text": "Got",
              "start": 175843,
              "end": 176027,
              "confidence": 0.96634,
              "speaker": "MLK"
            },
            {
              "text": "my",
              "start": 176051,
              "end": 176187,
              "confidence": 0.99858,
              "speaker": "MLK"
            },
            {
              "text": "technique",
              "start": 176211,
              "end": 176515,
              "confidence": 0.52406,
              "speaker": "MLK"
            },
            {
              "text": "down",
              "start": 176555,
              "end": 176731,
              "confidence": 0.95923,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 176763,
              "end": 176955,
              "confidence": 0.80874,
              "speaker": "MLK"
            },
            {
              "text": "everything.",
              "start": 176995,
              "end": 177267,
              "confidence": 0.99789,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 177331,
              "end": 177459,
              "confidence": 0.99604,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 177467,
              "end": 177603,
              "confidence": 0.96965,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 177619,
              "end": 177723,
              "confidence": 0.98453,
              "speaker": "MLK"
            },
            {
              "text": "tickling",
              "start": 177739,
              "end": 178027,
              "confidence": 0.8753,
              "speaker": "MLK"
            },
            {
              "text": "or",
              "start": 178051,
              "end": 178187,
              "confidence": 0.91346,
              "speaker": "MLK"
            },
            {
              "text": "nothing.",
              "start": 178211,
              "end": 178855,
              "confidence": 0.77992,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Would you give a guy a foot massage?",
          "start": 179315,
          "end": 181415,
          "confidence": 0.9683787,
          "words": [
            {
              "text": "Would",
              "start": 179315,
              "end": 179627,
              "confidence": 0.9828,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 179651,
              "end": 179787,
              "confidence": 0.9991,
              "speaker": "MLK"
            },
            {
              "text": "give",
              "start": 179811,
              "end": 179971,
              "confidence": 0.98962,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 180003,
              "end": 180147,
              "confidence": 0.99357,
              "speaker": "MLK"
            },
            {
              "text": "guy",
              "start": 180171,
              "end": 180307,
              "confidence": 0.98887,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 180331,
              "end": 180467,
              "confidence": 0.99017,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 180491,
              "end": 180675,
              "confidence": 0.83676,
              "speaker": "MLK"
            },
            {
              "text": "massage?",
              "start": 180715,
              "end": 181415,
              "confidence": 0.96614,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Fuck you.",
          "start": 183575,
          "end": 184595,
          "confidence": 0.96485,
          "words": [
            {
              "text": "Fuck",
              "start": 183575,
              "end": 183959,
              "confidence": 0.93512,
              "speaker": "MLK"
            },
            {
              "text": "you.",
              "start": 184007,
              "end": 184595,
              "confidence": 0.99458,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "You give him a lot?",
          "start": 186375,
          "end": 187559,
          "confidence": 0.789764,
          "words": [
            {
              "text": "You",
              "start": 186375,
              "end": 186663,
              "confidence": 0.87788,
              "speaker": "MLK"
            },
            {
              "text": "give",
              "start": 186679,
              "end": 186807,
              "confidence": 0.53344,
              "speaker": "MLK"
            },
            {
              "text": "him",
              "start": 186831,
              "end": 186943,
              "confidence": 0.75742,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 186959,
              "end": 187087,
              "confidence": 0.98805,
              "speaker": "MLK"
            },
            {
              "text": "lot?",
              "start": 187111,
              "end": 187559,
              "confidence": 0.79203,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Fuck you.",
          "start": 187687,
          "end": 188835,
          "confidence": 0.97919,
          "words": [
            {
              "text": "Fuck",
              "start": 187687,
              "end": 188119,
              "confidence": 0.96089,
              "speaker": "MLK"
            },
            {
              "text": "you.",
              "start": 188207,
              "end": 188835,
              "confidence": 0.99749,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "You know, I'm kind of tired. I can use a foot massage myself.",
          "start": 189295,
          "end": 191983,
          "confidence": 0.92697614,
          "words": [
            {
              "text": "You",
              "start": 189295,
              "end": 189559,
              "confidence": 0.96481,
              "speaker": "MLK"
            },
            {
              "text": "know,",
              "start": 189567,
              "end": 189663,
              "confidence": 0.97484,
              "speaker": "MLK"
            },
            {
              "text": "I'm",
              "start": 189679,
              "end": 189871,
              "confidence": 0.95353,
              "speaker": "MLK"
            },
            {
              "text": "kind",
              "start": 189903,
              "end": 190023,
              "confidence": 0.99204,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 190039,
              "end": 190191,
              "confidence": 0.61114,
              "speaker": "MLK"
            },
            {
              "text": "tired.",
              "start": 190223,
              "end": 190415,
              "confidence": 0.99975,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 190455,
              "end": 190607,
              "confidence": 0.99402,
              "speaker": "MLK"
            },
            {
              "text": "can",
              "start": 190631,
              "end": 190767,
              "confidence": 0.59654,
              "speaker": "MLK"
            },
            {
              "text": "use",
              "start": 190791,
              "end": 190903,
              "confidence": 0.99814,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 190919,
              "end": 191023,
              "confidence": 0.97282,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 191039,
              "end": 191167,
              "confidence": 0.99707,
              "speaker": "MLK"
            },
            {
              "text": "massage",
              "start": 191191,
              "end": 191503,
              "confidence": 0.99906,
              "speaker": "MLK"
            },
            {
              "text": "myself.",
              "start": 191559,
              "end": 191983,
              "confidence": 0.99693,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Yo, yo, yo, man, you best back off. I'm getting a little pissed. To you. This is the door.",
          "start": 192039,
          "end": 197847,
          "confidence": 0.9166379,
          "words": [
            {
              "text": "Yo,",
              "start": 192039,
              "end": 192207,
              "confidence": 0.6888,
              "speaker": "MLK"
            },
            {
              "text": "yo,",
              "start": 192231,
              "end": 192367,
              "confidence": 0.68323,
              "speaker": "MLK"
            },
            {
              "text": "yo,",
              "start": 192391,
              "end": 192551,
              "confidence": 0.78198,
              "speaker": "MLK"
            },
            {
              "text": "man,",
              "start": 192583,
              "end": 192703,
              "confidence": 0.98301,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 192719,
              "end": 192847,
              "confidence": 0.95566,
              "speaker": "MLK"
            },
            {
              "text": "best",
              "start": 192871,
              "end": 193055,
              "confidence": 0.95631,
              "speaker": "MLK"
            },
            {
              "text": "back",
              "start": 193095,
              "end": 193271,
              "confidence": 0.99833,
              "speaker": "MLK"
            },
            {
              "text": "off.",
              "start": 193303,
              "end": 193471,
              "confidence": 0.99574,
              "speaker": "MLK"
            },
            {
              "text": "I'm",
              "start": 193503,
              "end": 193663,
              "confidence": 0.94619,
              "speaker": "MLK"
            },
            {
              "text": "getting",
              "start": 193679,
              "end": 193807,
              "confidence": 0.95092,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 193831,
              "end": 193919,
              "confidence": 0.99092,
              "speaker": "MLK"
            },
            {
              "text": "little",
              "start": 193927,
              "end": 194071,
              "confidence": 0.99354,
              "speaker": "MLK"
            },
            {
              "text": "pissed.",
              "start": 194103,
              "end": 194351,
              "confidence": 0.91082,
              "speaker": "MLK"
            },
            {
              "text": "To",
              "start": 194383,
              "end": 194479,
              "confidence": 0.65183,
              "speaker": "MLK"
            },
            {
              "text": "you.",
              "start": 194487,
              "end": 195035,
              "confidence": 0.9515,
              "speaker": "MLK"
            },
            {
              "text": "This",
              "start": 196975,
              "end": 197263,
              "confidence": 0.99616,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 197279,
              "end": 197383,
              "confidence": 0.98803,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 197399,
              "end": 197551,
              "confidence": 0.99569,
              "speaker": "MLK"
            },
            {
              "text": "door.",
              "start": 197583,
              "end": 197847,
              "confidence": 0.99746,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Yeah, it is.",
          "start": 197911,
          "end": 198835,
          "confidence": 0.82669,
          "words": [
            {
              "text": "Yeah,",
              "start": 197911,
              "end": 198127,
              "confidence": 0.48712,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 198151,
              "end": 198263,
              "confidence": 0.99495,
              "speaker": "MLK"
            },
            {
              "text": "is.",
              "start": 198279,
              "end": 198835,
              "confidence": 0.998,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Time.",
          "start": 202455,
          "end": 202791,
          "confidence": 0.99896,
          "words": [
            {
              "text": "Time.",
              "start": 202455,
              "end": 202791,
              "confidence": 0.99896,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "You got 7:22 in the a.m. no.",
          "start": 202823,
          "end": 207639,
          "confidence": 0.8549714,
          "words": [
            {
              "text": "You",
              "start": 202823,
              "end": 202967,
              "confidence": 0.99585,
              "speaker": "MLK"
            },
            {
              "text": "got",
              "start": 202991,
              "end": 203555,
              "confidence": 0.9979,
              "speaker": "MLK"
            },
            {
              "text": "7:22",
              "start": 205215,
              "end": 206511,
              "confidence": 0.98733,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 206543,
              "end": 206663,
              "confidence": 0.78798,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 206679,
              "end": 206903,
              "confidence": 0.43453,
              "speaker": "MLK"
            },
            {
              "text": "a.m.",
              "start": 206959,
              "end": 207295,
              "confidence": 0.9985,
              "speaker": "MLK"
            },
            {
              "text": "no.",
              "start": 207375,
              "end": 207639,
              "confidence": 0.78271,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Ain'T quite time yet. Come on, let's hang back. Now look, just cause I wouldn't get no man a foot massage don't make it right for myselves to throw Antoine off a building into a glass motherfucking house, fucking up the way the nigga talks. That shit ain't right. Motherfucker do that shit to me, he better paralyze my ass. Cause I kill a motherfucker. You know what I'm saying?",
          "start": 207687,
          "end": 232579,
          "confidence": 0.9001827,
          "words": [
            {
              "text": "Ain'T",
              "start": 207687,
              "end": 207967,
              "confidence": 0.89659,
              "speaker": "MLK"
            },
            {
              "text": "quite",
              "start": 207991,
              "end": 208199,
              "confidence": 0.99842,
              "speaker": "MLK"
            },
            {
              "text": "time",
              "start": 208247,
              "end": 208503,
              "confidence": 0.9389,
              "speaker": "MLK"
            },
            {
              "text": "yet.",
              "start": 208559,
              "end": 209123,
              "confidence": 0.99876,
              "speaker": "MLK"
            },
            {
              "text": "Come",
              "start": 209279,
              "end": 209523,
              "confidence": 0.99739,
              "speaker": "MLK"
            },
            {
              "text": "on,",
              "start": 209539,
              "end": 209667,
              "confidence": 0.99146,
              "speaker": "MLK"
            },
            {
              "text": "let's",
              "start": 209691,
              "end": 209843,
              "confidence": 0.93781,
              "speaker": "MLK"
            },
            {
              "text": "hang",
              "start": 209859,
              "end": 210035,
              "confidence": 0.99961,
              "speaker": "MLK"
            },
            {
              "text": "back.",
              "start": 210075,
              "end": 210655,
              "confidence": 0.99437,
              "speaker": "MLK"
            },
            {
              "text": "Now",
              "start": 218915,
              "end": 219227,
              "confidence": 0.38291,
              "speaker": "MLK"
            },
            {
              "text": "look,",
              "start": 219251,
              "end": 219627,
              "confidence": 0.99661,
              "speaker": "MLK"
            },
            {
              "text": "just",
              "start": 219731,
              "end": 219923,
              "confidence": 0.99596,
              "speaker": "MLK"
            },
            {
              "text": "cause",
              "start": 219939,
              "end": 220123,
              "confidence": 0.2996,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 220139,
              "end": 220219,
              "confidence": 0.99902,
              "speaker": "MLK"
            },
            {
              "text": "wouldn't",
              "start": 220227,
              "end": 220403,
              "confidence": 0.97246,
              "speaker": "MLK"
            },
            {
              "text": "get",
              "start": 220419,
              "end": 220547,
              "confidence": 0.96566,
              "speaker": "MLK"
            },
            {
              "text": "no",
              "start": 220571,
              "end": 220707,
              "confidence": 0.9186,
              "speaker": "MLK"
            },
            {
              "text": "man",
              "start": 220731,
              "end": 220891,
              "confidence": 0.98752,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 220923,
              "end": 221067,
              "confidence": 0.90868,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 221091,
              "end": 221251,
              "confidence": 0.9993,
              "speaker": "MLK"
            },
            {
              "text": "massage",
              "start": 221283,
              "end": 221643,
              "confidence": 0.9682,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 221699,
              "end": 221883,
              "confidence": 0.98839,
              "speaker": "MLK"
            },
            {
              "text": "make",
              "start": 221899,
              "end": 222003,
              "confidence": 0.99924,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 222019,
              "end": 222147,
              "confidence": 0.99838,
              "speaker": "MLK"
            },
            {
              "text": "right",
              "start": 222171,
              "end": 222331,
              "confidence": 0.99843,
              "speaker": "MLK"
            },
            {
              "text": "for",
              "start": 222363,
              "end": 222483,
              "confidence": 0.99955,
              "speaker": "MLK"
            },
            {
              "text": "myselves",
              "start": 222499,
              "end": 222819,
              "confidence": 0.68829,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 222867,
              "end": 223003,
              "confidence": 0.99764,
              "speaker": "MLK"
            },
            {
              "text": "throw",
              "start": 223019,
              "end": 223171,
              "confidence": 0.99454,
              "speaker": "MLK"
            },
            {
              "text": "Antoine",
              "start": 223203,
              "end": 223571,
              "confidence": 0.79931,
              "speaker": "MLK"
            },
            {
              "text": "off",
              "start": 223603,
              "end": 223747,
              "confidence": 0.99367,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 223771,
              "end": 223979,
              "confidence": 0.98494,
              "speaker": "MLK"
            },
            {
              "text": "building",
              "start": 224027,
              "end": 224235,
              "confidence": 0.99867,
              "speaker": "MLK"
            },
            {
              "text": "into",
              "start": 224275,
              "end": 224403,
              "confidence": 0.99471,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 224419,
              "end": 224571,
              "confidence": 0.99571,
              "speaker": "MLK"
            },
            {
              "text": "glass",
              "start": 224603,
              "end": 224795,
              "confidence": 0.99511,
              "speaker": "MLK"
            },
            {
              "text": "motherfucking",
              "start": 224835,
              "end": 225347,
              "confidence": 0.54983,
              "speaker": "MLK"
            },
            {
              "text": "house,",
              "start": 225371,
              "end": 225555,
              "confidence": 0.99869,
              "speaker": "MLK"
            },
            {
              "text": "fucking",
              "start": 225595,
              "end": 225827,
              "confidence": 0.44349,
              "speaker": "MLK"
            },
            {
              "text": "up",
              "start": 225851,
              "end": 225939,
              "confidence": 0.98967,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 225947,
              "end": 226043,
              "confidence": 0.86132,
              "speaker": "MLK"
            },
            {
              "text": "way",
              "start": 226059,
              "end": 226163,
              "confidence": 0.98955,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 226179,
              "end": 226259,
              "confidence": 0.7455,
              "speaker": "MLK"
            },
            {
              "text": "nigga",
              "start": 226267,
              "end": 226507,
              "confidence": 0.548,
              "speaker": "MLK"
            },
            {
              "text": "talks.",
              "start": 226531,
              "end": 226867,
              "confidence": 0.99476,
              "speaker": "MLK"
            },
            {
              "text": "That",
              "start": 226931,
              "end": 227131,
              "confidence": 0.99633,
              "speaker": "MLK"
            },
            {
              "text": "shit",
              "start": 227163,
              "end": 227283,
              "confidence": 0.96359,
              "speaker": "MLK"
            },
            {
              "text": "ain't",
              "start": 227299,
              "end": 227531,
              "confidence": 0.96345,
              "speaker": "MLK"
            },
            {
              "text": "right.",
              "start": 227563,
              "end": 228091,
              "confidence": 0.99903,
              "speaker": "MLK"
            },
            {
              "text": "Motherfucker",
              "start": 228243,
              "end": 228787,
              "confidence": 0.71534,
              "speaker": "MLK"
            },
            {
              "text": "do",
              "start": 228811,
              "end": 228947,
              "confidence": 0.98007,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 228971,
              "end": 229107,
              "confidence": 0.99188,
              "speaker": "MLK"
            },
            {
              "text": "shit",
              "start": 229131,
              "end": 229267,
              "confidence": 0.96172,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 229291,
              "end": 229427,
              "confidence": 0.994,
              "speaker": "MLK"
            },
            {
              "text": "me,",
              "start": 229451,
              "end": 229635,
              "confidence": 0.99902,
              "speaker": "MLK"
            },
            {
              "text": "he",
              "start": 229675,
              "end": 229827,
              "confidence": 0.98997,
              "speaker": "MLK"
            },
            {
              "text": "better",
              "start": 229851,
              "end": 230059,
              "confidence": 0.9981,
              "speaker": "MLK"
            },
            {
              "text": "paralyze",
              "start": 230107,
              "end": 230619,
              "confidence": 0.62951,
              "speaker": "MLK"
            },
            {
              "text": "my",
              "start": 230667,
              "end": 230803,
              "confidence": 0.99769,
              "speaker": "MLK"
            },
            {
              "text": "ass.",
              "start": 230819,
              "end": 230971,
              "confidence": 0.98852,
              "speaker": "MLK"
            },
            {
              "text": "Cause",
              "start": 231003,
              "end": 231139,
              "confidence": 0.43586,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 231147,
              "end": 231267,
              "confidence": 0.55876,
              "speaker": "MLK"
            },
            {
              "text": "kill",
              "start": 231291,
              "end": 231427,
              "confidence": 0.99902,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 231451,
              "end": 231539,
              "confidence": 0.83238,
              "speaker": "MLK"
            },
            {
              "text": "motherfucker.",
              "start": 231547,
              "end": 231947,
              "confidence": 0.54765,
              "speaker": "MLK"
            },
            {
              "text": "You",
              "start": 231971,
              "end": 232059,
              "confidence": 0.9883,
              "speaker": "MLK"
            },
            {
              "text": "know",
              "start": 232067,
              "end": 232139,
              "confidence": 0.99876,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 232147,
              "end": 232219,
              "confidence": 0.99553,
              "speaker": "MLK"
            },
            {
              "text": "I'm",
              "start": 232227,
              "end": 232363,
              "confidence": 0.9794,
              "speaker": "MLK"
            },
            {
              "text": "saying?",
              "start": 232379,
              "end": 232579,
              "confidence": 0.81369,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I ain't saying it's right, but you saying a foot massage don't mean not, and I'm saying it does. And look, I given a million ladies a million foot massagess. And they all meant something. We act like they don't, but they do. I mean, that's what s so fucking cool about em. There's a sensuous thing going on where, you know, you don't talk about it, but you know what? She knows it. Fuck em. Marcelus knew it. And Antoine should have fucking better known better. I mean, that's his fucking wife, man. They thinking no sense of humor about this shit. You know what I'm saying?",
          "start": 232627,
          "end": 262235,
          "confidence": 0.89063984,
          "words": [
            {
              "text": "I",
              "start": 232627,
              "end": 232715,
              "confidence": 0.98616,
              "speaker": "MLK"
            },
            {
              "text": "ain't",
              "start": 232715,
              "end": 233035,
              "confidence": 0.72501,
              "speaker": "MLK"
            },
            {
              "text": "saying",
              "start": 233075,
              "end": 233251,
              "confidence": 0.96392,
              "speaker": "MLK"
            },
            {
              "text": "it's",
              "start": 233283,
              "end": 233515,
              "confidence": 0.74432,
              "speaker": "MLK"
            },
            {
              "text": "right,",
              "start": 233555,
              "end": 234019,
              "confidence": 0.9993,
              "speaker": "MLK"
            },
            {
              "text": "but",
              "start": 234147,
              "end": 234363,
              "confidence": 0.99207,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 234379,
              "end": 234531,
              "confidence": 0.9868,
              "speaker": "MLK"
            },
            {
              "text": "saying",
              "start": 234563,
              "end": 234707,
              "confidence": 0.93199,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 234731,
              "end": 234843,
              "confidence": 0.66712,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 234859,
              "end": 234987,
              "confidence": 0.99888,
              "speaker": "MLK"
            },
            {
              "text": "massage",
              "start": 235011,
              "end": 235315,
              "confidence": 0.99533,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 235355,
              "end": 235571,
              "confidence": 0.9716,
              "speaker": "MLK"
            },
            {
              "text": "mean",
              "start": 235603,
              "end": 235771,
              "confidence": 0.99913,
              "speaker": "MLK"
            },
            {
              "text": "not,",
              "start": 235803,
              "end": 235995,
              "confidence": 0.60712,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 236035,
              "end": 236187,
              "confidence": 0.93187,
              "speaker": "MLK"
            },
            {
              "text": "I'm",
              "start": 236211,
              "end": 236387,
              "confidence": 0.97568,
              "speaker": "MLK"
            },
            {
              "text": "saying",
              "start": 236411,
              "end": 236571,
              "confidence": 0.94895,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 236603,
              "end": 236771,
              "confidence": 0.99723,
              "speaker": "MLK"
            },
            {
              "text": "does.",
              "start": 236803,
              "end": 237391,
              "confidence": 0.99925,
              "speaker": "MLK"
            },
            {
              "text": "And",
              "start": 237563,
              "end": 237847,
              "confidence": 0.79688,
              "speaker": "MLK"
            },
            {
              "text": "look,",
              "start": 237871,
              "end": 238007,
              "confidence": 0.99489,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 238031,
              "end": 238167,
              "confidence": 0.99348,
              "speaker": "MLK"
            },
            {
              "text": "given",
              "start": 238191,
              "end": 238375,
              "confidence": 0.35517,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 238415,
              "end": 238543,
              "confidence": 0.99164,
              "speaker": "MLK"
            },
            {
              "text": "million",
              "start": 238559,
              "end": 238831,
              "confidence": 0.99943,
              "speaker": "MLK"
            },
            {
              "text": "ladies",
              "start": 238903,
              "end": 239191,
              "confidence": 0.99493,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 239223,
              "end": 239343,
              "confidence": 0.99216,
              "speaker": "MLK"
            },
            {
              "text": "million",
              "start": 239359,
              "end": 239583,
              "confidence": 0.99766,
              "speaker": "MLK"
            },
            {
              "text": "foot",
              "start": 239639,
              "end": 239855,
              "confidence": 0.99893,
              "speaker": "MLK"
            },
            {
              "text": "massagess.",
              "start": 239895,
              "end": 240511,
              "confidence": 0.50098,
              "speaker": "MLK"
            },
            {
              "text": "And",
              "start": 240583,
              "end": 240743,
              "confidence": 0.99567,
              "speaker": "MLK"
            },
            {
              "text": "they",
              "start": 240759,
              "end": 240959,
              "confidence": 0.98154,
              "speaker": "MLK"
            },
            {
              "text": "all",
              "start": 241007,
              "end": 241191,
              "confidence": 0.9983,
              "speaker": "MLK"
            },
            {
              "text": "meant",
              "start": 241223,
              "end": 241559,
              "confidence": 0.70898,
              "speaker": "MLK"
            },
            {
              "text": "something.",
              "start": 241647,
              "end": 242207,
              "confidence": 0.86279,
              "speaker": "MLK"
            },
            {
              "text": "We",
              "start": 242351,
              "end": 242583,
              "confidence": 0.99796,
              "speaker": "MLK"
            },
            {
              "text": "act",
              "start": 242599,
              "end": 242775,
              "confidence": 0.98836,
              "speaker": "MLK"
            },
            {
              "text": "like",
              "start": 242815,
              "end": 242991,
              "confidence": 0.99862,
              "speaker": "MLK"
            },
            {
              "text": "they",
              "start": 243023,
              "end": 243191,
              "confidence": 0.99925,
              "speaker": "MLK"
            },
            {
              "text": "don't,",
              "start": 243223,
              "end": 243479,
              "confidence": 0.97197,
              "speaker": "MLK"
            },
            {
              "text": "but",
              "start": 243527,
              "end": 243687,
              "confidence": 0.99949,
              "speaker": "MLK"
            },
            {
              "text": "they",
              "start": 243711,
              "end": 243895,
              "confidence": 0.9989,
              "speaker": "MLK"
            },
            {
              "text": "do.",
              "start": 243935,
              "end": 244111,
              "confidence": 0.99944,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 244143,
              "end": 244263,
              "confidence": 0.90851,
              "speaker": "MLK"
            },
            {
              "text": "mean,",
              "start": 244279,
              "end": 244359,
              "confidence": 0.95049,
              "speaker": "MLK"
            },
            {
              "text": "that's",
              "start": 244367,
              "end": 244479,
              "confidence": 0.87501,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 244487,
              "end": 244559,
              "confidence": 0.94883,
              "speaker": "MLK"
            },
            {
              "text": "s",
              "start": 244567,
              "end": 244639,
              "confidence": 0.514,
              "speaker": "MLK"
            },
            {
              "text": "so",
              "start": 244647,
              "end": 244767,
              "confidence": 0.99403,
              "speaker": "MLK"
            },
            {
              "text": "fucking",
              "start": 244791,
              "end": 245119,
              "confidence": 0.66208,
              "speaker": "MLK"
            },
            {
              "text": "cool",
              "start": 245167,
              "end": 245447,
              "confidence": 0.99937,
              "speaker": "MLK"
            },
            {
              "text": "about",
              "start": 245511,
              "end": 245687,
              "confidence": 0.99823,
              "speaker": "MLK"
            },
            {
              "text": "em.",
              "start": 245711,
              "end": 246063,
              "confidence": 0.52645,
              "speaker": "MLK"
            },
            {
              "text": "There's",
              "start": 246159,
              "end": 246383,
              "confidence": 0.88174,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 246399,
              "end": 246551,
              "confidence": 0.98091,
              "speaker": "MLK"
            },
            {
              "text": "sensuous",
              "start": 246583,
              "end": 247015,
              "confidence": 0.96897,
              "speaker": "MLK"
            },
            {
              "text": "thing",
              "start": 247055,
              "end": 247255,
              "confidence": 0.99849,
              "speaker": "MLK"
            },
            {
              "text": "going",
              "start": 247295,
              "end": 247519,
              "confidence": 0.90117,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 247567,
              "end": 248039,
              "confidence": 0.99694,
              "speaker": "MLK"
            },
            {
              "text": "where,",
              "start": 248167,
              "end": 248383,
              "confidence": 0.946,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 248399,
              "end": 248503,
              "confidence": 0.79222,
              "speaker": "MLK"
            },
            {
              "text": "know,",
              "start": 248519,
              "end": 248623,
              "confidence": 0.85045,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 248639,
              "end": 248743,
              "confidence": 0.99135,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 248759,
              "end": 248975,
              "confidence": 0.94665,
              "speaker": "MLK"
            },
            {
              "text": "talk",
              "start": 249015,
              "end": 249239,
              "confidence": 0.99956,
              "speaker": "MLK"
            },
            {
              "text": "about",
              "start": 249287,
              "end": 249447,
              "confidence": 0.99822,
              "speaker": "MLK"
            },
            {
              "text": "it,",
              "start": 249471,
              "end": 249607,
              "confidence": 0.98836,
              "speaker": "MLK"
            },
            {
              "text": "but",
              "start": 249631,
              "end": 249911,
              "confidence": 0.99233,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 249983,
              "end": 250215,
              "confidence": 0.99748,
              "speaker": "MLK"
            },
            {
              "text": "know",
              "start": 250255,
              "end": 250383,
              "confidence": 0.99556,
              "speaker": "MLK"
            },
            {
              "text": "what?",
              "start": 250399,
              "end": 250575,
              "confidence": 0.29618,
              "speaker": "MLK"
            },
            {
              "text": "She",
              "start": 250615,
              "end": 250791,
              "confidence": 0.99916,
              "speaker": "MLK"
            },
            {
              "text": "knows",
              "start": 250823,
              "end": 251055,
              "confidence": 0.99349,
              "speaker": "MLK"
            },
            {
              "text": "it.",
              "start": 251095,
              "end": 251559,
              "confidence": 0.97948,
              "speaker": "MLK"
            },
            {
              "text": "Fuck",
              "start": 251687,
              "end": 251927,
              "confidence": 0.87451,
              "speaker": "MLK"
            },
            {
              "text": "em.",
              "start": 251951,
              "end": 252063,
              "confidence": 0.44483,
              "speaker": "MLK"
            },
            {
              "text": "Marcelus",
              "start": 252079,
              "end": 252551,
              "confidence": 0.86382,
              "speaker": "MLK"
            },
            {
              "text": "knew",
              "start": 252583,
              "end": 252727,
              "confidence": 0.997,
              "speaker": "MLK"
            },
            {
              "text": "it.",
              "start": 252751,
              "end": 253223,
              "confidence": 0.99535,
              "speaker": "MLK"
            },
            {
              "text": "And",
              "start": 253359,
              "end": 253631,
              "confidence": 0.93581,
              "speaker": "MLK"
            },
            {
              "text": "Antoine",
              "start": 253663,
              "end": 253991,
              "confidence": 0.82151,
              "speaker": "MLK"
            },
            {
              "text": "should",
              "start": 254023,
              "end": 254143,
              "confidence": 0.99717,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 254159,
              "end": 254287,
              "confidence": 0.50283,
              "speaker": "MLK"
            },
            {
              "text": "fucking",
              "start": 254311,
              "end": 254591,
              "confidence": 0.51327,
              "speaker": "MLK"
            },
            {
              "text": "better",
              "start": 254623,
              "end": 254839,
              "confidence": 0.99474,
              "speaker": "MLK"
            },
            {
              "text": "known",
              "start": 254887,
              "end": 255095,
              "confidence": 0.98384,
              "speaker": "MLK"
            },
            {
              "text": "better.",
              "start": 255135,
              "end": 255715,
              "confidence": 0.99765,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 256655,
              "end": 256919,
              "confidence": 0.94514,
              "speaker": "MLK"
            },
            {
              "text": "mean,",
              "start": 256927,
              "end": 257023,
              "confidence": 0.96066,
              "speaker": "MLK"
            },
            {
              "text": "that's",
              "start": 257039,
              "end": 257183,
              "confidence": 0.92099,
              "speaker": "MLK"
            },
            {
              "text": "his",
              "start": 257199,
              "end": 257351,
              "confidence": 0.99685,
              "speaker": "MLK"
            },
            {
              "text": "fucking",
              "start": 257383,
              "end": 257695,
              "confidence": 0.66137,
              "speaker": "MLK"
            },
            {
              "text": "wife,",
              "start": 257735,
              "end": 258007,
              "confidence": 0.99565,
              "speaker": "MLK"
            },
            {
              "text": "man.",
              "start": 258071,
              "end": 258295,
              "confidence": 0.9842,
              "speaker": "MLK"
            },
            {
              "text": "They",
              "start": 258335,
              "end": 258463,
              "confidence": 0.54903,
              "speaker": "MLK"
            },
            {
              "text": "thinking",
              "start": 258479,
              "end": 258783,
              "confidence": 0.27152,
              "speaker": "MLK"
            },
            {
              "text": "no",
              "start": 258839,
              "end": 258983,
              "confidence": 0.39256,
              "speaker": "MLK"
            },
            {
              "text": "sense",
              "start": 258999,
              "end": 259167,
              "confidence": 0.99624,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 259191,
              "end": 259303,
              "confidence": 0.99543,
              "speaker": "MLK"
            },
            {
              "text": "humor",
              "start": 259319,
              "end": 259575,
              "confidence": 0.99079,
              "speaker": "MLK"
            },
            {
              "text": "about",
              "start": 259615,
              "end": 259767,
              "confidence": 0.98178,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 259791,
              "end": 259951,
              "confidence": 0.97684,
              "speaker": "MLK"
            },
            {
              "text": "shit.",
              "start": 259983,
              "end": 260595,
              "confidence": 0.95992,
              "speaker": "MLK"
            },
            {
              "text": "You",
              "start": 261055,
              "end": 261343,
              "confidence": 0.97771,
              "speaker": "MLK"
            },
            {
              "text": "know",
              "start": 261359,
              "end": 261439,
              "confidence": 0.64313,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 261447,
              "end": 261519,
              "confidence": 0.93023,
              "speaker": "MLK"
            },
            {
              "text": "I'm",
              "start": 261527,
              "end": 261663,
              "confidence": 0.85227,
              "speaker": "MLK"
            },
            {
              "text": "saying?",
              "start": 261679,
              "end": 262235,
              "confidence": 0.8736,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "It's an interesting point. Come on, let's get into character.",
          "start": 263915,
          "end": 268095,
          "confidence": 0.933701,
          "words": [
            {
              "text": "It's",
              "start": 263915,
              "end": 264243,
              "confidence": 0.49758,
              "speaker": "MLK"
            },
            {
              "text": "an",
              "start": 264259,
              "end": 264459,
              "confidence": 0.99685,
              "speaker": "MLK"
            },
            {
              "text": "interesting",
              "start": 264507,
              "end": 264795,
              "confidence": 0.99825,
              "speaker": "MLK"
            },
            {
              "text": "point.",
              "start": 264835,
              "end": 265415,
              "confidence": 0.99811,
              "speaker": "MLK"
            },
            {
              "text": "Come",
              "start": 266155,
              "end": 266467,
              "confidence": 0.985,
              "speaker": "MLK"
            },
            {
              "text": "on,",
              "start": 266491,
              "end": 266747,
              "confidence": 0.98204,
              "speaker": "MLK"
            },
            {
              "text": "let's",
              "start": 266811,
              "end": 267003,
              "confidence": 0.97134,
              "speaker": "MLK"
            },
            {
              "text": "get",
              "start": 267019,
              "end": 267171,
              "confidence": 0.99902,
              "speaker": "MLK"
            },
            {
              "text": "into",
              "start": 267203,
              "end": 267347,
              "confidence": 0.91257,
              "speaker": "MLK"
            },
            {
              "text": "character.",
              "start": 267371,
              "end": 268095,
              "confidence": 0.99625,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "What's her name again?",
          "start": 274515,
          "end": 275755,
          "confidence": 0.9779225,
          "words": [
            {
              "text": "What's",
              "start": 274515,
              "end": 274843,
              "confidence": 0.9893,
              "speaker": "MLK"
            },
            {
              "text": "her",
              "start": 274859,
              "end": 274987,
              "confidence": 0.92406,
              "speaker": "MLK"
            },
            {
              "text": "name",
              "start": 275011,
              "end": 275243,
              "confidence": 0.99908,
              "speaker": "MLK"
            },
            {
              "text": "again?",
              "start": 275299,
              "end": 275755,
              "confidence": 0.99925,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Mia.",
          "start": 275875,
          "end": 276619,
          "confidence": 0.95405,
          "words": [
            {
              "text": "Mia.",
              "start": 275875,
              "end": 276619,
              "confidence": 0.95405,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Mia.",
          "start": 276787,
          "end": 277203,
          "confidence": 0.84928,
          "words": [
            {
              "text": "Mia.",
              "start": 276787,
              "end": 277203,
              "confidence": 0.84928,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Why are you so interested in big man's? Why?",
          "start": 277259,
          "end": 279335,
          "confidence": 0.9079678,
          "words": [
            {
              "text": "Why",
              "start": 277259,
              "end": 277379,
              "confidence": 0.81012,
              "speaker": "MLK"
            },
            {
              "text": "are",
              "start": 277387,
              "end": 277459,
              "confidence": 0.92649,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 277467,
              "end": 277587,
              "confidence": 0.99366,
              "speaker": "MLK"
            },
            {
              "text": "so",
              "start": 277611,
              "end": 277819,
              "confidence": 0.99526,
              "speaker": "MLK"
            },
            {
              "text": "interested",
              "start": 277867,
              "end": 278107,
              "confidence": 0.99771,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 278131,
              "end": 278267,
              "confidence": 0.99557,
              "speaker": "MLK"
            },
            {
              "text": "big",
              "start": 278291,
              "end": 278451,
              "confidence": 0.9988,
              "speaker": "MLK"
            },
            {
              "text": "man's?",
              "start": 278483,
              "end": 278747,
              "confidence": 0.79972,
              "speaker": "MLK"
            },
            {
              "text": "Why?",
              "start": 278771,
              "end": 279335,
              "confidence": 0.65438,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Well, he's going out of town of Florida and he asked me if I'd take care of her while he's gone.",
          "start": 280035,
          "end": 284735,
          "confidence": 0.9502019,
          "words": [
            {
              "text": "Well,",
              "start": 280035,
              "end": 280371,
              "confidence": 0.92977,
              "speaker": "MLK"
            },
            {
              "text": "he's",
              "start": 280403,
              "end": 280587,
              "confidence": 0.97224,
              "speaker": "MLK"
            },
            {
              "text": "going",
              "start": 280611,
              "end": 280771,
              "confidence": 0.9511,
              "speaker": "MLK"
            },
            {
              "text": "out",
              "start": 280803,
              "end": 280923,
              "confidence": 0.99604,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 280939,
              "end": 281067,
              "confidence": 0.98172,
              "speaker": "MLK"
            },
            {
              "text": "town",
              "start": 281091,
              "end": 281251,
              "confidence": 0.99917,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 281283,
              "end": 281427,
              "confidence": 0.75429,
              "speaker": "MLK"
            },
            {
              "text": "Florida",
              "start": 281451,
              "end": 281763,
              "confidence": 0.98343,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 281779,
              "end": 281883,
              "confidence": 0.98962,
              "speaker": "MLK"
            },
            {
              "text": "he",
              "start": 281899,
              "end": 282003,
              "confidence": 0.98921,
              "speaker": "MLK"
            },
            {
              "text": "asked",
              "start": 282019,
              "end": 282171,
              "confidence": 0.95142,
              "speaker": "MLK"
            },
            {
              "text": "me",
              "start": 282203,
              "end": 282323,
              "confidence": 0.99605,
              "speaker": "MLK"
            },
            {
              "text": "if",
              "start": 282339,
              "end": 282467,
              "confidence": 0.99876,
              "speaker": "MLK"
            },
            {
              "text": "I'd",
              "start": 282491,
              "end": 282883,
              "confidence": 0.57753,
              "speaker": "MLK"
            },
            {
              "text": "take",
              "start": 282979,
              "end": 283259,
              "confidence": 0.99905,
              "speaker": "MLK"
            },
            {
              "text": "care",
              "start": 283307,
              "end": 283467,
              "confidence": 0.9996,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 283491,
              "end": 283579,
              "confidence": 0.9895,
              "speaker": "MLK"
            },
            {
              "text": "her",
              "start": 283587,
              "end": 283707,
              "confidence": 0.97478,
              "speaker": "MLK"
            },
            {
              "text": "while",
              "start": 283731,
              "end": 283867,
              "confidence": 0.98872,
              "speaker": "MLK"
            },
            {
              "text": "he's",
              "start": 283891,
              "end": 284131,
              "confidence": 0.93869,
              "speaker": "MLK"
            },
            {
              "text": "gone.",
              "start": 284163,
              "end": 284735,
              "confidence": 0.99355,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Take care of her?",
          "start": 285475,
          "end": 286539,
          "confidence": 0.9298275,
          "words": [
            {
              "text": "Take",
              "start": 285475,
              "end": 285835,
              "confidence": 0.99487,
              "speaker": "MLK"
            },
            {
              "text": "care",
              "start": 285875,
              "end": 286027,
              "confidence": 0.99916,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 286051,
              "end": 286115,
              "confidence": 0.95008,
              "speaker": "MLK"
            },
            {
              "text": "her?",
              "start": 286115,
              "end": 286539,
              "confidence": 0.7752,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "No, man, just take her out. You know, show her a good time. Make sure she don't get lonely.",
          "start": 286667,
          "end": 292115,
          "confidence": 0.97435,
          "words": [
            {
              "text": "No,",
              "start": 286667,
              "end": 286979,
              "confidence": 0.98126,
              "speaker": "MLK"
            },
            {
              "text": "man,",
              "start": 287027,
              "end": 287451,
              "confidence": 0.99459,
              "speaker": "MLK"
            },
            {
              "text": "just",
              "start": 287563,
              "end": 287883,
              "confidence": 0.97052,
              "speaker": "MLK"
            },
            {
              "text": "take",
              "start": 287939,
              "end": 288131,
              "confidence": 0.99963,
              "speaker": "MLK"
            },
            {
              "text": "her",
              "start": 288163,
              "end": 288283,
              "confidence": 0.9978,
              "speaker": "MLK"
            },
            {
              "text": "out.",
              "start": 288299,
              "end": 288547,
              "confidence": 0.99928,
              "speaker": "MLK"
            },
            {
              "text": "You",
              "start": 288611,
              "end": 288763,
              "confidence": 0.9389,
              "speaker": "MLK"
            },
            {
              "text": "know,",
              "start": 288779,
              "end": 289351,
              "confidence": 0.95403,
              "speaker": "MLK"
            },
            {
              "text": "show",
              "start": 289523,
              "end": 289831,
              "confidence": 0.99702,
              "speaker": "MLK"
            },
            {
              "text": "her",
              "start": 289863,
              "end": 289959,
              "confidence": 0.97246,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 289967,
              "end": 290063,
              "confidence": 0.75447,
              "speaker": "MLK"
            },
            {
              "text": "good",
              "start": 290079,
              "end": 290279,
              "confidence": 0.99775,
              "speaker": "MLK"
            },
            {
              "text": "time.",
              "start": 290327,
              "end": 290535,
              "confidence": 0.99555,
              "speaker": "MLK"
            },
            {
              "text": "Make",
              "start": 290575,
              "end": 290751,
              "confidence": 0.98766,
              "speaker": "MLK"
            },
            {
              "text": "sure",
              "start": 290783,
              "end": 290927,
              "confidence": 0.99919,
              "speaker": "MLK"
            },
            {
              "text": "she",
              "start": 290951,
              "end": 291063,
              "confidence": 0.99635,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 291079,
              "end": 291247,
              "confidence": 0.97984,
              "speaker": "MLK"
            },
            {
              "text": "get",
              "start": 291271,
              "end": 291407,
              "confidence": 0.99859,
              "speaker": "MLK"
            },
            {
              "text": "lonely.",
              "start": 291431,
              "end": 292115,
              "confidence": 0.99776,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "You're gonna be taking me, a Wallace out on a date?",
          "start": 292695,
          "end": 295335,
          "confidence": 0.81759274,
          "words": [
            {
              "text": "You're",
              "start": 292695,
              "end": 293023,
              "confidence": 0.65143,
              "speaker": "MLK"
            },
            {
              "text": "gonna",
              "start": 293039,
              "end": 293263,
              "confidence": 0.25222,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 293279,
              "end": 293383,
              "confidence": 0.99754,
              "speaker": "MLK"
            },
            {
              "text": "taking",
              "start": 293399,
              "end": 293623,
              "confidence": 0.98539,
              "speaker": "MLK"
            },
            {
              "text": "me,",
              "start": 293679,
              "end": 293823,
              "confidence": 0.57509,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 293839,
              "end": 293991,
              "confidence": 0.70859,
              "speaker": "MLK"
            },
            {
              "text": "Wallace",
              "start": 294023,
              "end": 294399,
              "confidence": 0.97719,
              "speaker": "MLK"
            },
            {
              "text": "out",
              "start": 294447,
              "end": 294631,
              "confidence": 0.99864,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 294663,
              "end": 294807,
              "confidence": 0.99722,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 294831,
              "end": 294991,
              "confidence": 0.85201,
              "speaker": "MLK"
            },
            {
              "text": "date?",
              "start": 295023,
              "end": 295335,
              "confidence": 0.9982,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "It is not a date. You know, it's just's like if you were gonna take your buddy's wife to a movie or something. It's just good company, that's all. It's not a date. It's definitely not a date.",
          "start": 295415,
          "end": 312975,
          "confidence": 0.9305358,
          "words": [
            {
              "text": "It",
              "start": 295415,
              "end": 295583,
              "confidence": 0.98274,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 295599,
              "end": 295823,
              "confidence": 0.9432,
              "speaker": "MLK"
            },
            {
              "text": "not",
              "start": 295879,
              "end": 296191,
              "confidence": 0.99955,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 296263,
              "end": 296447,
              "confidence": 0.98706,
              "speaker": "MLK"
            },
            {
              "text": "date.",
              "start": 296471,
              "end": 297035,
              "confidence": 0.99653,
              "speaker": "MLK"
            },
            {
              "text": "You",
              "start": 297655,
              "end": 297943,
              "confidence": 0.94246,
              "speaker": "MLK"
            },
            {
              "text": "know,",
              "start": 297959,
              "end": 298135,
              "confidence": 0.96357,
              "speaker": "MLK"
            },
            {
              "text": "it's",
              "start": 298175,
              "end": 298367,
              "confidence": 0.87644,
              "speaker": "MLK"
            },
            {
              "text": "just's",
              "start": 298391,
              "end": 298959,
              "confidence": 0.45013,
              "speaker": "MLK"
            },
            {
              "text": "like",
              "start": 298967,
              "end": 299087,
              "confidence": 0.99179,
              "speaker": "MLK"
            },
            {
              "text": "if",
              "start": 299111,
              "end": 299247,
              "confidence": 0.99636,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 299271,
              "end": 299359,
              "confidence": 0.99753,
              "speaker": "MLK"
            },
            {
              "text": "were",
              "start": 299367,
              "end": 299463,
              "confidence": 0.96584,
              "speaker": "MLK"
            },
            {
              "text": "gonna",
              "start": 299479,
              "end": 299703,
              "confidence": 0.24108,
              "speaker": "MLK"
            },
            {
              "text": "take",
              "start": 299719,
              "end": 299847,
              "confidence": 0.99872,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 299871,
              "end": 300007,
              "confidence": 0.99698,
              "speaker": "MLK"
            },
            {
              "text": "buddy's",
              "start": 300031,
              "end": 300391,
              "confidence": 0.89572,
              "speaker": "MLK"
            },
            {
              "text": "wife",
              "start": 300423,
              "end": 300615,
              "confidence": 0.99946,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 300655,
              "end": 300783,
              "confidence": 0.99868,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 300799,
              "end": 300927,
              "confidence": 0.98704,
              "speaker": "MLK"
            },
            {
              "text": "movie",
              "start": 300951,
              "end": 301167,
              "confidence": 0.99095,
              "speaker": "MLK"
            },
            {
              "text": "or",
              "start": 301191,
              "end": 301351,
              "confidence": 0.99747,
              "speaker": "MLK"
            },
            {
              "text": "something.",
              "start": 301383,
              "end": 301575,
              "confidence": 0.98402,
              "speaker": "MLK"
            },
            {
              "text": "It's",
              "start": 301615,
              "end": 302263,
              "confidence": 0.39299,
              "speaker": "MLK"
            },
            {
              "text": "just",
              "start": 302439,
              "end": 302751,
              "confidence": 0.98817,
              "speaker": "MLK"
            },
            {
              "text": "good",
              "start": 302783,
              "end": 303095,
              "confidence": 0.99941,
              "speaker": "MLK"
            },
            {
              "text": "company,",
              "start": 303175,
              "end": 303391,
              "confidence": 0.99957,
              "speaker": "MLK"
            },
            {
              "text": "that's",
              "start": 303423,
              "end": 303647,
              "confidence": 0.95974,
              "speaker": "MLK"
            },
            {
              "text": "all.",
              "start": 303671,
              "end": 304235,
              "confidence": 0.99848,
              "speaker": "MLK"
            },
            {
              "text": "It's",
              "start": 309855,
              "end": 310231,
              "confidence": 0.93624,
              "speaker": "MLK"
            },
            {
              "text": "not",
              "start": 310263,
              "end": 310407,
              "confidence": 0.99967,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 310431,
              "end": 310567,
              "confidence": 0.99801,
              "speaker": "MLK"
            },
            {
              "text": "date.",
              "start": 310591,
              "end": 311155,
              "confidence": 0.99812,
              "speaker": "MLK"
            },
            {
              "text": "It's",
              "start": 311575,
              "end": 311999,
              "confidence": 0.92428,
              "speaker": "MLK"
            },
            {
              "text": "definitely",
              "start": 312047,
              "end": 312527,
              "confidence": 0.99195,
              "speaker": "MLK"
            },
            {
              "text": "not",
              "start": 312591,
              "end": 312743,
              "confidence": 0.99907,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 312759,
              "end": 312887,
              "confidence": 0.99751,
              "speaker": "MLK"
            },
            {
              "text": "date.",
              "start": 312911,
              "end": 312975,
              "confidence": 0.99383,
              "speaker": "MLK"
            }
          ]
        }
      ],
      "chapters": [
        {
          "headline": "Mia: Foot massages are nothing compared to other forms of entertainment",
          "summary": "Mia. How did Marcel on her meet? She used to be an actress. Her biggest deal was she starred in a pilot. Foot massages don't mean anything. You don't be giving Marcellis Waace, his new bride, a foot massage.",
          "start": 375,
          "end": 209123,
          "gist": "Marcellus Wallace on Giving Marcellis Waace a Foot"
        },
        {
          "headline": "Wallace says taking his wife out on a date is not a date",
          "summary": "\"Just cause I wouldn't get no man a foot massage don't make it right for myselves to throw Antoine off a building, \" Wallace says. Wallace says taking his buddy's wife out on a date is not a date. It's just good company.",
          "start": 209279,
          "end": 312975,
          "gist": "\"A Foot Massage Is Not A Date\""
        }
      ],
      "allWords": [
        {
          "text": "Mia.",
          "start": 375,
          "end": 879,
          "confidence": 0.93636,
          "speaker": "MLK"
        },
        {
          "text": "Mia.",
          "start": 1007,
          "end": 1755,
          "confidence": 0.95638,
          "speaker": "MLK"
        },
        {
          "text": "How",
          "start": 2135,
          "end": 2423,
          "confidence": 0.97295,
          "speaker": "MLK"
        },
        {
          "text": "did",
          "start": 2439,
          "end": 2567,
          "confidence": 0.79455,
          "speaker": "MLK"
        },
        {
          "text": "Marcel",
          "start": 2591,
          "end": 2935,
          "confidence": 0.7332,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 2975,
          "end": 3103,
          "confidence": 0.37185,
          "speaker": "MLK"
        },
        {
          "text": "her",
          "start": 3119,
          "end": 3271,
          "confidence": 0.99544,
          "speaker": "MLK"
        },
        {
          "text": "meet?",
          "start": 3303,
          "end": 3879,
          "confidence": 0.93735,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 4047,
          "end": 4255,
          "confidence": 0.99517,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 4255,
          "end": 4407,
          "confidence": 0.88258,
          "speaker": "MLK"
        },
        {
          "text": "know,",
          "start": 4431,
          "end": 4927,
          "confidence": 0.99051,
          "speaker": "MLK"
        },
        {
          "text": "I.",
          "start": 5071,
          "end": 5375,
          "confidence": 0.37313,
          "speaker": "MLK"
        },
        {
          "text": "Other",
          "start": 5415,
          "end": 5591,
          "confidence": 0.44854,
          "speaker": "MLK"
        },
        {
          "text": "people",
          "start": 5623,
          "end": 5887,
          "confidence": 0.99469,
          "speaker": "MLK"
        },
        {
          "text": "meet",
          "start": 5951,
          "end": 6175,
          "confidence": 0.99233,
          "speaker": "MLK"
        },
        {
          "text": "people.",
          "start": 6215,
          "end": 6795,
          "confidence": 0.99906,
          "speaker": "MLK"
        },
        {
          "text": "She",
          "start": 7295,
          "end": 7607,
          "confidence": 0.99582,
          "speaker": "MLK"
        },
        {
          "text": "used",
          "start": 7631,
          "end": 7743,
          "confidence": 0.99907,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 7759,
          "end": 7863,
          "confidence": 0.99869,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 7879,
          "end": 7983,
          "confidence": 0.99941,
          "speaker": "MLK"
        },
        {
          "text": "an",
          "start": 7999,
          "end": 8103,
          "confidence": 0.92836,
          "speaker": "MLK"
        },
        {
          "text": "actress.",
          "start": 8119,
          "end": 8703,
          "confidence": 0.99988,
          "speaker": "MLK"
        },
        {
          "text": "Oh,",
          "start": 8839,
          "end": 9087,
          "confidence": 0.98403,
          "speaker": "MLK"
        },
        {
          "text": "really?",
          "start": 9111,
          "end": 9559,
          "confidence": 0.99414,
          "speaker": "MLK"
        },
        {
          "text": "She",
          "start": 9687,
          "end": 9927,
          "confidence": 0.98809,
          "speaker": "MLK"
        },
        {
          "text": "do",
          "start": 9951,
          "end": 10111,
          "confidence": 0.99675,
          "speaker": "MLK"
        },
        {
          "text": "anything",
          "start": 10143,
          "end": 10367,
          "confidence": 0.99373,
          "speaker": "MLK"
        },
        {
          "text": "out",
          "start": 10391,
          "end": 10527,
          "confidence": 0.85817,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 10551,
          "end": 10663,
          "confidence": 0.72734,
          "speaker": "MLK"
        },
        {
          "text": "scene?",
          "start": 10679,
          "end": 11311,
          "confidence": 0.98246,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 11503,
          "end": 11783,
          "confidence": 0.99127,
          "speaker": "MLK"
        },
        {
          "text": "think",
          "start": 11799,
          "end": 11927,
          "confidence": 0.99928,
          "speaker": "MLK"
        },
        {
          "text": "her",
          "start": 11951,
          "end": 12087,
          "confidence": 0.78702,
          "speaker": "MLK"
        },
        {
          "text": "biggest",
          "start": 12111,
          "end": 12375,
          "confidence": 0.99774,
          "speaker": "MLK"
        },
        {
          "text": "deal",
          "start": 12415,
          "end": 12615,
          "confidence": 0.99993,
          "speaker": "MLK"
        },
        {
          "text": "was",
          "start": 12655,
          "end": 12831,
          "confidence": 0.98405,
          "speaker": "MLK"
        },
        {
          "text": "she",
          "start": 12863,
          "end": 13031,
          "confidence": 0.99228,
          "speaker": "MLK"
        },
        {
          "text": "starred",
          "start": 13063,
          "end": 13271,
          "confidence": 0.90921,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 13303,
          "end": 13447,
          "confidence": 0.94332,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 13471,
          "end": 13631,
          "confidence": 0.99351,
          "speaker": "MLK"
        },
        {
          "text": "pilot.",
          "start": 13663,
          "end": 14231,
          "confidence": 0.99832,
          "speaker": "MLK"
        },
        {
          "text": "Pilot?",
          "start": 14343,
          "end": 14751,
          "confidence": 0.50802,
          "speaker": "MLK"
        },
        {
          "text": "What's",
          "start": 14783,
          "end": 14991,
          "confidence": 0.60258,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 15023,
          "end": 15167,
          "confidence": 0.98812,
          "speaker": "MLK"
        },
        {
          "text": "pilot?",
          "start": 15191,
          "end": 15775,
          "confidence": 0.99577,
          "speaker": "MLK"
        },
        {
          "text": "Well,",
          "start": 15895,
          "end": 16127,
          "confidence": 0.79155,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 16151,
          "end": 16263,
          "confidence": 0.99764,
          "speaker": "MLK"
        },
        {
          "text": "know,",
          "start": 16279,
          "end": 16383,
          "confidence": 0.99781,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 16399,
          "end": 16503,
          "confidence": 0.98544,
          "speaker": "MLK"
        },
        {
          "text": "show's",
          "start": 16519,
          "end": 16743,
          "confidence": 0.33091,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 16759,
          "end": 16887,
          "confidence": 0.99903,
          "speaker": "MLK"
        },
        {
          "text": "tv.",
          "start": 16911,
          "end": 17635,
          "confidence": 0.99888,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 17975,
          "end": 18239,
          "confidence": 0.99657,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 18247,
          "end": 18407,
          "confidence": 0.95611,
          "speaker": "MLK"
        },
        {
          "text": "watch",
          "start": 18431,
          "end": 18615,
          "confidence": 0.99974,
          "speaker": "MLK"
        },
        {
          "text": "tv.",
          "start": 18655,
          "end": 19383,
          "confidence": 0.99847,
          "speaker": "MLK"
        },
        {
          "text": "Yeah,",
          "start": 19559,
          "end": 20007,
          "confidence": 0.98056,
          "speaker": "MLK"
        },
        {
          "text": "but",
          "start": 20071,
          "end": 20415,
          "confidence": 0.99752,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 20495,
          "end": 20687,
          "confidence": 0.99918,
          "speaker": "MLK"
        },
        {
          "text": "are",
          "start": 20711,
          "end": 20895,
          "confidence": 0.99856,
          "speaker": "MLK"
        },
        {
          "text": "aware",
          "start": 20935,
          "end": 21279,
          "confidence": 0.99934,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 21327,
          "end": 21487,
          "confidence": 0.98418,
          "speaker": "MLK"
        },
        {
          "text": "there's",
          "start": 21511,
          "end": 21687,
          "confidence": 0.87218,
          "speaker": "MLK"
        },
        {
          "text": "an",
          "start": 21711,
          "end": 21895,
          "confidence": 0.99143,
          "speaker": "MLK"
        },
        {
          "text": "invention",
          "start": 21935,
          "end": 22239,
          "confidence": 0.96895,
          "speaker": "MLK"
        },
        {
          "text": "called",
          "start": 22287,
          "end": 22495,
          "confidence": 0.99359,
          "speaker": "MLK"
        },
        {
          "text": "television,",
          "start": 22535,
          "end": 22983,
          "confidence": 0.99226,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 23039,
          "end": 23231,
          "confidence": 0.98342,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 23263,
          "end": 23431,
          "confidence": 0.99527,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 23463,
          "end": 23703,
          "confidence": 0.9974,
          "speaker": "MLK"
        },
        {
          "text": "invention",
          "start": 23759,
          "end": 24031,
          "confidence": 0.96841,
          "speaker": "MLK"
        },
        {
          "text": "they",
          "start": 24063,
          "end": 24231,
          "confidence": 0.598,
          "speaker": "MLK"
        },
        {
          "text": "show",
          "start": 24263,
          "end": 24431,
          "confidence": 0.83278,
          "speaker": "MLK"
        },
        {
          "text": "shows,",
          "start": 24463,
          "end": 24735,
          "confidence": 0.98141,
          "speaker": "MLK"
        },
        {
          "text": "right?",
          "start": 24775,
          "end": 25287,
          "confidence": 0.99554,
          "speaker": "MLK"
        },
        {
          "text": "Y.",
          "start": 25431,
          "end": 25723,
          "confidence": 0.62931,
          "speaker": "MLK"
        },
        {
          "text": "Yeah.",
          "start": 25759,
          "end": 26259,
          "confidence": 0.68897,
          "speaker": "MLK"
        },
        {
          "text": "Well,",
          "start": 26387,
          "end": 26651,
          "confidence": 0.97535,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 26683,
          "end": 26803,
          "confidence": 0.99682,
          "speaker": "MLK"
        },
        {
          "text": "way",
          "start": 26819,
          "end": 26923,
          "confidence": 0.9991,
          "speaker": "MLK"
        },
        {
          "text": "they",
          "start": 26939,
          "end": 27091,
          "confidence": 0.9982,
          "speaker": "MLK"
        },
        {
          "text": "pick",
          "start": 27123,
          "end": 27291,
          "confidence": 0.99061,
          "speaker": "MLK"
        },
        {
          "text": "TV",
          "start": 27323,
          "end": 27635,
          "confidence": 0.99843,
          "speaker": "MLK"
        },
        {
          "text": "shows",
          "start": 27675,
          "end": 27915,
          "confidence": 0.99839,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 27955,
          "end": 28203,
          "confidence": 0.97966,
          "speaker": "MLK"
        },
        {
          "text": "they",
          "start": 28259,
          "end": 28427,
          "confidence": 0.99831,
          "speaker": "MLK"
        },
        {
          "text": "make",
          "start": 28451,
          "end": 28659,
          "confidence": 0.99839,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 28707,
          "end": 28939,
          "confidence": 0.99942,
          "speaker": "MLK"
        },
        {
          "text": "show.",
          "start": 28987,
          "end": 29243,
          "confidence": 0.99927,
          "speaker": "MLK"
        },
        {
          "text": "That",
          "start": 29299,
          "end": 29491,
          "confidence": 0.99363,
          "speaker": "MLK"
        },
        {
          "text": "show's",
          "start": 29523,
          "end": 29787,
          "confidence": 0.50099,
          "speaker": "MLK"
        },
        {
          "text": "called",
          "start": 29811,
          "end": 29971,
          "confidence": 0.99137,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 30003,
          "end": 30171,
          "confidence": 0.9395,
          "speaker": "MLK"
        },
        {
          "text": "pilot.",
          "start": 30203,
          "end": 30755,
          "confidence": 0.99773,
          "speaker": "MLK"
        },
        {
          "text": "Then",
          "start": 30875,
          "end": 31107,
          "confidence": 0.83451,
          "speaker": "MLK"
        },
        {
          "text": "they",
          "start": 31131,
          "end": 31291,
          "confidence": 0.99776,
          "speaker": "MLK"
        },
        {
          "text": "show",
          "start": 31323,
          "end": 31491,
          "confidence": 0.99966,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 31523,
          "end": 31691,
          "confidence": 0.9968,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 31723,
          "end": 31915,
          "confidence": 0.99904,
          "speaker": "MLK"
        },
        {
          "text": "show",
          "start": 31955,
          "end": 32131,
          "confidence": 0.99936,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 32163,
          "end": 32283,
          "confidence": 0.99704,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 32299,
          "end": 32379,
          "confidence": 0.99264,
          "speaker": "MLK"
        },
        {
          "text": "people",
          "start": 32387,
          "end": 32531,
          "confidence": 0.99891,
          "speaker": "MLK"
        },
        {
          "text": "who",
          "start": 32563,
          "end": 32731,
          "confidence": 0.98322,
          "speaker": "MLK"
        },
        {
          "text": "pick",
          "start": 32763,
          "end": 32931,
          "confidence": 0.9971,
          "speaker": "MLK"
        },
        {
          "text": "shows,",
          "start": 32963,
          "end": 33283,
          "confidence": 0.99809,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 33339,
          "end": 33507,
          "confidence": 0.99167,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 33531,
          "end": 33643,
          "confidence": 0.99784,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 33659,
          "end": 33787,
          "confidence": 0.74878,
          "speaker": "MLK"
        },
        {
          "text": "strength",
          "start": 33811,
          "end": 33963,
          "confidence": 0.99629,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 33979,
          "end": 34083,
          "confidence": 0.99808,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 34099,
          "end": 34275,
          "confidence": 0.99625,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 34315,
          "end": 34491,
          "confidence": 0.99733,
          "speaker": "MLK"
        },
        {
          "text": "show,",
          "start": 34523,
          "end": 34715,
          "confidence": 0.99975,
          "speaker": "MLK"
        },
        {
          "text": "they",
          "start": 34755,
          "end": 34907,
          "confidence": 0.99779,
          "speaker": "MLK"
        },
        {
          "text": "decide",
          "start": 34931,
          "end": 35171,
          "confidence": 0.99259,
          "speaker": "MLK"
        },
        {
          "text": "if",
          "start": 35203,
          "end": 35323,
          "confidence": 0.98745,
          "speaker": "MLK"
        },
        {
          "text": "they",
          "start": 35339,
          "end": 35467,
          "confidence": 0.99939,
          "speaker": "MLK"
        },
        {
          "text": "want",
          "start": 35491,
          "end": 35579,
          "confidence": 0.72115,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 35587,
          "end": 35707,
          "confidence": 0.64047,
          "speaker": "MLK"
        },
        {
          "text": "make",
          "start": 35731,
          "end": 35891,
          "confidence": 0.99914,
          "speaker": "MLK"
        },
        {
          "text": "more",
          "start": 35923,
          "end": 36115,
          "confidence": 0.99956,
          "speaker": "MLK"
        },
        {
          "text": "shows.",
          "start": 36155,
          "end": 36707,
          "confidence": 0.99767,
          "speaker": "MLK"
        },
        {
          "text": "Some",
          "start": 36851,
          "end": 37131,
          "confidence": 0.9995,
          "speaker": "MLK"
        },
        {
          "text": "get",
          "start": 37163,
          "end": 37355,
          "confidence": 0.99921,
          "speaker": "MLK"
        },
        {
          "text": "chosen",
          "start": 37395,
          "end": 37755,
          "confidence": 0.99911,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 37795,
          "end": 38019,
          "confidence": 0.99719,
          "speaker": "MLK"
        },
        {
          "text": "become",
          "start": 38067,
          "end": 38275,
          "confidence": 0.99837,
          "speaker": "MLK"
        },
        {
          "text": "television",
          "start": 38315,
          "end": 38883,
          "confidence": 0.96467,
          "speaker": "MLK"
        },
        {
          "text": "programs.",
          "start": 38979,
          "end": 39371,
          "confidence": 0.93503,
          "speaker": "MLK"
        },
        {
          "text": "Some",
          "start": 39443,
          "end": 39675,
          "confidence": 0.99943,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 39715,
          "end": 40411,
          "confidence": 0.94888,
          "speaker": "MLK"
        },
        {
          "text": "come",
          "start": 40603,
          "end": 40931,
          "confidence": 0.85108,
          "speaker": "MLK"
        },
        {
          "text": "nothing.",
          "start": 40963,
          "end": 41655,
          "confidence": 0.83123,
          "speaker": "MLK"
        },
        {
          "text": "She",
          "start": 42195,
          "end": 42531,
          "confidence": 0.99852,
          "speaker": "MLK"
        },
        {
          "text": "starred",
          "start": 42563,
          "end": 42819,
          "confidence": 0.67581,
          "speaker": "MLK"
        },
        {
          "text": "one",
          "start": 42867,
          "end": 43003,
          "confidence": 0.97966,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 43019,
          "end": 43075,
          "confidence": 0.93781,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 43075,
          "end": 43163,
          "confidence": 0.7671,
          "speaker": "MLK"
        },
        {
          "text": "ones",
          "start": 43179,
          "end": 43363,
          "confidence": 0.82342,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 43379,
          "end": 43483,
          "confidence": 0.52542,
          "speaker": "MLK"
        },
        {
          "text": "became",
          "start": 43499,
          "end": 43819,
          "confidence": 0.97282,
          "speaker": "MLK"
        },
        {
          "text": "nothing.",
          "start": 43867,
          "end": 44575,
          "confidence": 0.93896,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 45515,
          "end": 45899,
          "confidence": 0.99813,
          "speaker": "MLK"
        },
        {
          "text": "remember",
          "start": 45947,
          "end": 46171,
          "confidence": 0.99828,
          "speaker": "MLK"
        },
        {
          "text": "Antoine",
          "start": 46203,
          "end": 46619,
          "confidence": 0.83971,
          "speaker": "MLK"
        },
        {
          "text": "Rocamora?",
          "start": 46667,
          "end": 47531,
          "confidence": 0.36428,
          "speaker": "MLK"
        },
        {
          "text": "Half",
          "start": 47643,
          "end": 47987,
          "confidence": 0.99837,
          "speaker": "MLK"
        },
        {
          "text": "black,",
          "start": 48051,
          "end": 48323,
          "confidence": 0.9985,
          "speaker": "MLK"
        },
        {
          "text": "half",
          "start": 48379,
          "end": 48643,
          "confidence": 0.99693,
          "speaker": "MLK"
        },
        {
          "text": "saone.",
          "start": 48699,
          "end": 49107,
          "confidence": 0.29038,
          "speaker": "MLK"
        },
        {
          "text": "Used",
          "start": 49171,
          "end": 49347,
          "confidence": 0.99859,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 49371,
          "end": 49483,
          "confidence": 0.99794,
          "speaker": "MLK"
        },
        {
          "text": "call",
          "start": 49499,
          "end": 49627,
          "confidence": 0.99906,
          "speaker": "MLK"
        },
        {
          "text": "him",
          "start": 49651,
          "end": 49811,
          "confidence": 0.98813,
          "speaker": "MLK"
        },
        {
          "text": "Tony",
          "start": 49843,
          "end": 50107,
          "confidence": 0.97246,
          "speaker": "MLK"
        },
        {
          "text": "Rocky",
          "start": 50131,
          "end": 50451,
          "confidence": 0.96033,
          "speaker": "MLK"
        },
        {
          "text": "Horror?",
          "start": 50483,
          "end": 51223,
          "confidence": 0.31905,
          "speaker": "MLK"
        },
        {
          "text": "Yeah,",
          "start": 51419,
          "end": 51815,
          "confidence": 0.96104,
          "speaker": "MLK"
        },
        {
          "text": "maybe.",
          "start": 51855,
          "end": 52191,
          "confidence": 0.51189,
          "speaker": "MLK"
        },
        {
          "text": "Fat,",
          "start": 52223,
          "end": 52439,
          "confidence": 0.99252,
          "speaker": "MLK"
        },
        {
          "text": "right?",
          "start": 52487,
          "end": 52935,
          "confidence": 0.99625,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 53055,
          "end": 53263,
          "confidence": 0.95389,
          "speaker": "MLK"
        },
        {
          "text": "wouldn't",
          "start": 53279,
          "end": 53487,
          "confidence": 0.96268,
          "speaker": "MLK"
        },
        {
          "text": "go",
          "start": 53511,
          "end": 53647,
          "confidence": 0.99675,
          "speaker": "MLK"
        },
        {
          "text": "so",
          "start": 53671,
          "end": 53807,
          "confidence": 0.99831,
          "speaker": "MLK"
        },
        {
          "text": "far",
          "start": 53831,
          "end": 53943,
          "confidence": 0.99895,
          "speaker": "MLK"
        },
        {
          "text": "as",
          "start": 53959,
          "end": 54087,
          "confidence": 0.9707,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 54111,
          "end": 54247,
          "confidence": 0.98381,
          "speaker": "MLK"
        },
        {
          "text": "call",
          "start": 54271,
          "end": 54407,
          "confidence": 0.99827,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 54431,
          "end": 54519,
          "confidence": 0.69539,
          "speaker": "MLK"
        },
        {
          "text": "brother",
          "start": 54527,
          "end": 54791,
          "confidence": 0.99015,
          "speaker": "MLK"
        },
        {
          "text": "fat.",
          "start": 54823,
          "end": 54967,
          "confidence": 0.9668,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 54991,
          "end": 55103,
          "confidence": 0.93586,
          "speaker": "MLK"
        },
        {
          "text": "mean,",
          "start": 55119,
          "end": 55223,
          "confidence": 0.97515,
          "speaker": "MLK"
        },
        {
          "text": "he",
          "start": 55239,
          "end": 55367,
          "confidence": 0.98175,
          "speaker": "MLK"
        },
        {
          "text": "got",
          "start": 55391,
          "end": 55479,
          "confidence": 0.99703,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 55487,
          "end": 55583,
          "confidence": 0.88964,
          "speaker": "MLK"
        },
        {
          "text": "weight",
          "start": 55599,
          "end": 55751,
          "confidence": 0.38427,
          "speaker": "MLK"
        },
        {
          "text": "problem.",
          "start": 55783,
          "end": 55975,
          "confidence": 0.99238,
          "speaker": "MLK"
        },
        {
          "text": "What's",
          "start": 56015,
          "end": 56199,
          "confidence": 0.95828,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 56207,
          "end": 56279,
          "confidence": 0.92717,
          "speaker": "MLK"
        },
        {
          "text": "nigga",
          "start": 56287,
          "end": 56503,
          "confidence": 0.36428,
          "speaker": "MLK"
        },
        {
          "text": "gonna",
          "start": 56519,
          "end": 56743,
          "confidence": 0.49311,
          "speaker": "MLK"
        },
        {
          "text": "do",
          "start": 56759,
          "end": 56887,
          "confidence": 0.99196,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 56911,
          "end": 57047,
          "confidence": 0.58586,
          "speaker": "MLK"
        },
        {
          "text": "some",
          "start": 57071,
          "end": 57231,
          "confidence": 0.98214,
          "speaker": "MLK"
        },
        {
          "text": "more?",
          "start": 57263,
          "end": 57695,
          "confidence": 0.94765,
          "speaker": "MLK"
        },
        {
          "text": "Yeah,",
          "start": 57815,
          "end": 58063,
          "confidence": 0.68169,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 58079,
          "end": 58207,
          "confidence": 0.9942,
          "speaker": "MLK"
        },
        {
          "text": "think",
          "start": 58231,
          "end": 58343,
          "confidence": 0.9983,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 58359,
          "end": 58487,
          "confidence": 0.9971,
          "speaker": "MLK"
        },
        {
          "text": "know",
          "start": 58511,
          "end": 58599,
          "confidence": 0.99756,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 58607,
          "end": 58703,
          "confidence": 0.83829,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 58719,
          "end": 58823,
          "confidence": 0.99547,
          "speaker": "MLK"
        },
        {
          "text": "mean.",
          "start": 58839,
          "end": 59015,
          "confidence": 0.99866,
          "speaker": "MLK"
        },
        {
          "text": "What",
          "start": 59055,
          "end": 59207,
          "confidence": 0.99461,
          "speaker": "MLK"
        },
        {
          "text": "about",
          "start": 59231,
          "end": 59391,
          "confidence": 0.98974,
          "speaker": "MLK"
        },
        {
          "text": "him?",
          "start": 59423,
          "end": 59879,
          "confidence": 0.83451,
          "speaker": "MLK"
        },
        {
          "text": "Well,",
          "start": 60007,
          "end": 60295,
          "confidence": 0.75429,
          "speaker": "MLK"
        },
        {
          "text": "Marcellus",
          "start": 60335,
          "end": 60943,
          "confidence": 0.70097,
          "speaker": "MLK"
        },
        {
          "text": "fucked",
          "start": 60999,
          "end": 61247,
          "confidence": 0.88802,
          "speaker": "MLK"
        },
        {
          "text": "him",
          "start": 61271,
          "end": 61431,
          "confidence": 0.9796,
          "speaker": "MLK"
        },
        {
          "text": "up",
          "start": 61463,
          "end": 61679,
          "confidence": 0.99877,
          "speaker": "MLK"
        },
        {
          "text": "good.",
          "start": 61727,
          "end": 62223,
          "confidence": 0.99908,
          "speaker": "MLK"
        },
        {
          "text": "Word",
          "start": 62359,
          "end": 62695,
          "confidence": 0.98512,
          "speaker": "MLK"
        },
        {
          "text": "around",
          "start": 62735,
          "end": 62911,
          "confidence": 0.44245,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 62943,
          "end": 63087,
          "confidence": 0.93621,
          "speaker": "MLK"
        },
        {
          "text": "campfire",
          "start": 63111,
          "end": 63503,
          "confidence": 0.78778,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 63559,
          "end": 63799,
          "confidence": 0.93844,
          "speaker": "MLK"
        },
        {
          "text": "was",
          "start": 63847,
          "end": 64007,
          "confidence": 0.94358,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 64031,
          "end": 64215,
          "confidence": 0.99554,
          "speaker": "MLK"
        },
        {
          "text": "account",
          "start": 64255,
          "end": 64383,
          "confidence": 0.98235,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 64399,
          "end": 64527,
          "confidence": 0.96336,
          "speaker": "MLK"
        },
        {
          "text": "Marcellus",
          "start": 64551,
          "end": 64991,
          "confidence": 0.41298,
          "speaker": "MLK"
        },
        {
          "text": "Wallace's",
          "start": 65023,
          "end": 65495,
          "confidence": 0.39908,
          "speaker": "MLK"
        },
        {
          "text": "wife.",
          "start": 65535,
          "end": 66115,
          "confidence": 0.99897,
          "speaker": "MLK"
        },
        {
          "text": "So",
          "start": 74815,
          "end": 75127,
          "confidence": 0.87349,
          "speaker": "MLK"
        },
        {
          "text": "what'd",
          "start": 75151,
          "end": 75319,
          "confidence": 0.62465,
          "speaker": "MLK"
        },
        {
          "text": "he",
          "start": 75327,
          "end": 75471,
          "confidence": 0.98742,
          "speaker": "MLK"
        },
        {
          "text": "do?",
          "start": 75503,
          "end": 75695,
          "confidence": 0.99776,
          "speaker": "MLK"
        },
        {
          "text": "Fucking.",
          "start": 75735,
          "end": 76223,
          "confidence": 0.43978,
          "speaker": "MLK"
        },
        {
          "text": "No,",
          "start": 76319,
          "end": 76527,
          "confidence": 0.96823,
          "speaker": "MLK"
        },
        {
          "text": "no,",
          "start": 76551,
          "end": 76687,
          "confidence": 0.93701,
          "speaker": "MLK"
        },
        {
          "text": "no,",
          "start": 76711,
          "end": 76847,
          "confidence": 0.92994,
          "speaker": "MLK"
        },
        {
          "text": "no,",
          "start": 76871,
          "end": 77007,
          "confidence": 0.91569,
          "speaker": "MLK"
        },
        {
          "text": "no,",
          "start": 77031,
          "end": 77167,
          "confidence": 0.88579,
          "speaker": "MLK"
        },
        {
          "text": "no.",
          "start": 77191,
          "end": 77351,
          "confidence": 0.78013,
          "speaker": "MLK"
        },
        {
          "text": "Nothing",
          "start": 77383,
          "end": 77583,
          "confidence": 0.44568,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 77599,
          "end": 77727,
          "confidence": 0.97854,
          "speaker": "MLK"
        },
        {
          "text": "bad",
          "start": 77751,
          "end": 78315,
          "confidence": 0.89306,
          "speaker": "MLK"
        },
        {
          "text": "with.",
          "start": 78705,
          "end": 79017,
          "confidence": 0.23157,
          "speaker": "MLK"
        },
        {
          "text": "Than",
          "start": 79041,
          "end": 79201,
          "confidence": 0.33529,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 79233,
          "end": 79401,
          "confidence": 0.95666,
          "speaker": "MLK"
        },
        {
          "text": "then?",
          "start": 79433,
          "end": 80005,
          "confidence": 0.97776,
          "speaker": "MLK"
        },
        {
          "text": "Gave",
          "start": 80425,
          "end": 80737,
          "confidence": 0.99467,
          "speaker": "MLK"
        },
        {
          "text": "her",
          "start": 80761,
          "end": 80825,
          "confidence": 0.94444,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 80825,
          "end": 80913,
          "confidence": 0.89968,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 80929,
          "end": 81129,
          "confidence": 0.99546,
          "speaker": "MLK"
        },
        {
          "text": "massage.",
          "start": 81177,
          "end": 81885,
          "confidence": 0.99886,
          "speaker": "MLK"
        },
        {
          "text": "Foot",
          "start": 84745,
          "end": 85105,
          "confidence": 0.99502,
          "speaker": "MLK"
        },
        {
          "text": "massage?",
          "start": 85145,
          "end": 85845,
          "confidence": 0.99792,
          "speaker": "MLK"
        },
        {
          "text": "That's",
          "start": 86985,
          "end": 87337,
          "confidence": 0.97622,
          "speaker": "MLK"
        },
        {
          "text": "it?",
          "start": 87361,
          "end": 87689,
          "confidence": 0.9982,
          "speaker": "MLK"
        },
        {
          "text": "Mm",
          "start": 87777,
          "end": 88001,
          "confidence": 0.4332,
          "speaker": "MLK"
        },
        {
          "text": "hmm.",
          "start": 88033,
          "end": 88605,
          "confidence": 0.55876,
          "speaker": "MLK"
        },
        {
          "text": "Then",
          "start": 89065,
          "end": 89353,
          "confidence": 0.97924,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 89369,
          "end": 89473,
          "confidence": 0.96719,
          "speaker": "MLK"
        },
        {
          "text": "did",
          "start": 89489,
          "end": 89593,
          "confidence": 0.66761,
          "speaker": "MLK"
        },
        {
          "text": "Marcels",
          "start": 89609,
          "end": 90089,
          "confidence": 0.38199,
          "speaker": "MLK"
        },
        {
          "text": "do?",
          "start": 90137,
          "end": 90725,
          "confidence": 0.96655,
          "speaker": "MLK"
        },
        {
          "text": "Sent",
          "start": 91225,
          "end": 91537,
          "confidence": 0.91452,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 91561,
          "end": 91649,
          "confidence": 0.99693,
          "speaker": "MLK"
        },
        {
          "text": "couple",
          "start": 91657,
          "end": 91793,
          "confidence": 0.8194,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 91809,
          "end": 91937,
          "confidence": 0.8428,
          "speaker": "MLK"
        },
        {
          "text": "cats",
          "start": 91961,
          "end": 92121,
          "confidence": 0.78284,
          "speaker": "MLK"
        },
        {
          "text": "over",
          "start": 92153,
          "end": 92321,
          "confidence": 0.99347,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 92353,
          "end": 92473,
          "confidence": 0.99836,
          "speaker": "MLK"
        },
        {
          "text": "his",
          "start": 92489,
          "end": 92665,
          "confidence": 0.99491,
          "speaker": "MLK"
        },
        {
          "text": "place.",
          "start": 92705,
          "end": 92929,
          "confidence": 0.99862,
          "speaker": "MLK"
        },
        {
          "text": "They",
          "start": 92977,
          "end": 93137,
          "confidence": 0.99622,
          "speaker": "MLK"
        },
        {
          "text": "took",
          "start": 93161,
          "end": 93273,
          "confidence": 0.99928,
          "speaker": "MLK"
        },
        {
          "text": "him",
          "start": 93289,
          "end": 93393,
          "confidence": 0.99332,
          "speaker": "MLK"
        },
        {
          "text": "out",
          "start": 93409,
          "end": 93537,
          "confidence": 0.99902,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 93561,
          "end": 93697,
          "confidence": 0.99835,
          "speaker": "MLK"
        },
        {
          "text": "his",
          "start": 93721,
          "end": 93881,
          "confidence": 0.97825,
          "speaker": "MLK"
        },
        {
          "text": "patio,",
          "start": 93913,
          "end": 94449,
          "confidence": 0.9997,
          "speaker": "MLK"
        },
        {
          "text": "threw",
          "start": 94537,
          "end": 94737,
          "confidence": 0.98283,
          "speaker": "MLK"
        },
        {
          "text": "his",
          "start": 94761,
          "end": 94921,
          "confidence": 0.99892,
          "speaker": "MLK"
        },
        {
          "text": "ass",
          "start": 94953,
          "end": 95193,
          "confidence": 0.99361,
          "speaker": "MLK"
        },
        {
          "text": "over",
          "start": 95249,
          "end": 95417,
          "confidence": 0.99767,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 95441,
          "end": 95601,
          "confidence": 0.99594,
          "speaker": "MLK"
        },
        {
          "text": "balcony.",
          "start": 95633,
          "end": 96161,
          "confidence": 0.99043,
          "speaker": "MLK"
        },
        {
          "text": "Nigga",
          "start": 96233,
          "end": 96561,
          "confidence": 0.37684,
          "speaker": "MLK"
        },
        {
          "text": "fell",
          "start": 96593,
          "end": 96889,
          "confidence": 0.44975,
          "speaker": "MLK"
        },
        {
          "text": "fals",
          "start": 96937,
          "end": 97313,
          "confidence": 0.38216,
          "speaker": "MLK"
        },
        {
          "text": "stories.",
          "start": 97409,
          "end": 98185,
          "confidence": 0.98446,
          "speaker": "MLK"
        },
        {
          "text": "Had",
          "start": 98345,
          "end": 98569,
          "confidence": 0.52774,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 98577,
          "end": 98673,
          "confidence": 0.74696,
          "speaker": "MLK"
        },
        {
          "text": "little",
          "start": 98689,
          "end": 98865,
          "confidence": 0.99212,
          "speaker": "MLK"
        },
        {
          "text": "garden",
          "start": 98905,
          "end": 99201,
          "confidence": 0.98874,
          "speaker": "MLK"
        },
        {
          "text": "down",
          "start": 99233,
          "end": 99425,
          "confidence": 0.99844,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 99465,
          "end": 99593,
          "confidence": 0.99717,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 99609,
          "end": 99713,
          "confidence": 0.99946,
          "speaker": "MLK"
        },
        {
          "text": "bottom,",
          "start": 99729,
          "end": 100249,
          "confidence": 0.99036,
          "speaker": "MLK"
        },
        {
          "text": "closed",
          "start": 100337,
          "end": 100577,
          "confidence": 0.6532,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 100601,
          "end": 100809,
          "confidence": 0.99887,
          "speaker": "MLK"
        },
        {
          "text": "glass,",
          "start": 100857,
          "end": 101089,
          "confidence": 0.99793,
          "speaker": "MLK"
        },
        {
          "text": "like",
          "start": 101137,
          "end": 101297,
          "confidence": 0.9992,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 101321,
          "end": 101433,
          "confidence": 0.99684,
          "speaker": "MLK"
        },
        {
          "text": "greenhouse.",
          "start": 101449,
          "end": 102313,
          "confidence": 0.31586,
          "speaker": "MLK"
        },
        {
          "text": "Niga",
          "start": 102489,
          "end": 102921,
          "confidence": 0.30246,
          "speaker": "MLK"
        },
        {
          "text": "fell",
          "start": 102953,
          "end": 103313,
          "confidence": 0.96303,
          "speaker": "MLK"
        },
        {
          "text": "through",
          "start": 103369,
          "end": 103609,
          "confidence": 0.99856,
          "speaker": "MLK"
        },
        {
          "text": "that.",
          "start": 103657,
          "end": 104245,
          "confidence": 0.99891,
          "speaker": "MLK"
        },
        {
          "text": "Since",
          "start": 104825,
          "end": 105209,
          "confidence": 0.99898,
          "speaker": "MLK"
        },
        {
          "text": "then",
          "start": 105257,
          "end": 105441,
          "confidence": 0.62624,
          "speaker": "MLK"
        },
        {
          "text": "he",
          "start": 105473,
          "end": 105617,
          "confidence": 0.4784,
          "speaker": "MLK"
        },
        {
          "text": "kind",
          "start": 105641,
          "end": 105777,
          "confidence": 0.97344,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 105801,
          "end": 106033,
          "confidence": 0.69675,
          "speaker": "MLK"
        },
        {
          "text": "developed",
          "start": 106089,
          "end": 106297,
          "confidence": 0.99628,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 106321,
          "end": 106481,
          "confidence": 0.89579,
          "speaker": "MLK"
        },
        {
          "text": "speech",
          "start": 106513,
          "end": 106697,
          "confidence": 0.97312,
          "speaker": "MLK"
        },
        {
          "text": "impediment.",
          "start": 106721,
          "end": 107645,
          "confidence": 0.79028,
          "speaker": "MLK"
        },
        {
          "text": "That's",
          "start": 109305,
          "end": 109657,
          "confidence": 0.94037,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 109681,
          "end": 109841,
          "confidence": 0.99774,
          "speaker": "MLK"
        },
        {
          "text": "damn",
          "start": 109873,
          "end": 110137,
          "confidence": 0.92957,
          "speaker": "MLK"
        },
        {
          "text": "shame.",
          "start": 110201,
          "end": 110805,
          "confidence": 0.99639,
          "speaker": "MLK"
        },
        {
          "text": "But",
          "start": 116785,
          "end": 117145,
          "confidence": 0.62716,
          "speaker": "MLK"
        },
        {
          "text": "still,",
          "start": 117185,
          "end": 117361,
          "confidence": 0.99021,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 117393,
          "end": 117537,
          "confidence": 0.99422,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 117561,
          "end": 117745,
          "confidence": 0.99895,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 117785,
          "end": 117961,
          "confidence": 0.99826,
          "speaker": "MLK"
        },
        {
          "text": "say,",
          "start": 117993,
          "end": 118161,
          "confidence": 0.99415,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 118193,
          "end": 118361,
          "confidence": 0.76617,
          "speaker": "MLK"
        },
        {
          "text": "play",
          "start": 118393,
          "end": 118561,
          "confidence": 0.93649,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 118593,
          "end": 118761,
          "confidence": 0.99316,
          "speaker": "MLK"
        },
        {
          "text": "matches,",
          "start": 118793,
          "end": 119105,
          "confidence": 0.98462,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 119145,
          "end": 119321,
          "confidence": 0.99607,
          "speaker": "MLK"
        },
        {
          "text": "get",
          "start": 119353,
          "end": 119545,
          "confidence": 0.99445,
          "speaker": "MLK"
        },
        {
          "text": "burned.",
          "start": 119585,
          "end": 119993,
          "confidence": 0.97433,
          "speaker": "MLK"
        },
        {
          "text": "What",
          "start": 120089,
          "end": 120249,
          "confidence": 0.99774,
          "speaker": "MLK"
        },
        {
          "text": "do",
          "start": 120257,
          "end": 120329,
          "confidence": 0.99308,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 120337,
          "end": 120481,
          "confidence": 0.9946,
          "speaker": "MLK"
        },
        {
          "text": "mean?",
          "start": 120513,
          "end": 121041,
          "confidence": 0.99828,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 121193,
          "end": 121433,
          "confidence": 0.84003,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 121449,
          "end": 121617,
          "confidence": 0.90206,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 121641,
          "end": 121777,
          "confidence": 0.96743,
          "speaker": "MLK"
        },
        {
          "text": "giving",
          "start": 121801,
          "end": 122041,
          "confidence": 0.75045,
          "speaker": "MLK"
        },
        {
          "text": "Marcellis",
          "start": 122073,
          "end": 122585,
          "confidence": 0.35818,
          "speaker": "MLK"
        },
        {
          "text": "Waace,",
          "start": 122625,
          "end": 122921,
          "confidence": 0.1322,
          "speaker": "MLK"
        },
        {
          "text": "his",
          "start": 122953,
          "end": 123097,
          "confidence": 0.47677,
          "speaker": "MLK"
        },
        {
          "text": "new",
          "start": 123121,
          "end": 123305,
          "confidence": 0.9797,
          "speaker": "MLK"
        },
        {
          "text": "bride,",
          "start": 123345,
          "end": 123545,
          "confidence": 0.9444,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 123585,
          "end": 123737,
          "confidence": 0.3744,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 123761,
          "end": 123969,
          "confidence": 0.99271,
          "speaker": "MLK"
        },
        {
          "text": "massage.",
          "start": 124017,
          "end": 124705,
          "confidence": 0.98024,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 124865,
          "end": 125089,
          "confidence": 0.99905,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 125097,
          "end": 125257,
          "confidence": 0.97773,
          "speaker": "MLK"
        },
        {
          "text": "think",
          "start": 125281,
          "end": 125417,
          "confidence": 0.99932,
          "speaker": "MLK"
        },
        {
          "text": "he",
          "start": 125441,
          "end": 125649,
          "confidence": 0.99603,
          "speaker": "MLK"
        },
        {
          "text": "overreacted?",
          "start": 125697,
          "end": 126585,
          "confidence": 0.92658,
          "speaker": "MLK"
        },
        {
          "text": "Well,",
          "start": 126705,
          "end": 127081,
          "confidence": 0.67252,
          "speaker": "MLK"
        },
        {
          "text": "yah's",
          "start": 127153,
          "end": 127513,
          "confidence": 0.09105,
          "speaker": "MLK"
        },
        {
          "text": "why.",
          "start": 127529,
          "end": 127609,
          "confidence": 0.59742,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 127617,
          "end": 127761,
          "confidence": 0.91883,
          "speaker": "MLK"
        },
        {
          "text": "probably",
          "start": 127793,
          "end": 127993,
          "confidence": 0.9261,
          "speaker": "MLK"
        },
        {
          "text": "didn't",
          "start": 128009,
          "end": 128201,
          "confidence": 0.3797,
          "speaker": "MLK"
        },
        {
          "text": "expect",
          "start": 128233,
          "end": 128449,
          "confidence": 0.99644,
          "speaker": "MLK"
        },
        {
          "text": "Myl",
          "start": 128497,
          "end": 128913,
          "confidence": 0.85261,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 128969,
          "end": 129113,
          "confidence": 0.99945,
          "speaker": "MLK"
        },
        {
          "text": "react",
          "start": 129129,
          "end": 129361,
          "confidence": 0.99885,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 129393,
          "end": 129513,
          "confidence": 0.99727,
          "speaker": "MLK"
        },
        {
          "text": "way",
          "start": 129529,
          "end": 129657,
          "confidence": 0.99972,
          "speaker": "MLK"
        },
        {
          "text": "he",
          "start": 129681,
          "end": 129841,
          "confidence": 0.99857,
          "speaker": "MLK"
        },
        {
          "text": "did,",
          "start": 129873,
          "end": 130161,
          "confidence": 0.99945,
          "speaker": "MLK"
        },
        {
          "text": "but",
          "start": 130233,
          "end": 130651,
          "confidence": 0.91687,
          "speaker": "MLK"
        },
        {
          "text": "he",
          "start": 130753,
          "end": 130943,
          "confidence": 0.96897,
          "speaker": "MLK"
        },
        {
          "text": "had",
          "start": 130959,
          "end": 131111,
          "confidence": 0.99568,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 131143,
          "end": 131383,
          "confidence": 0.99829,
          "speaker": "MLK"
        },
        {
          "text": "expect",
          "start": 131439,
          "end": 131631,
          "confidence": 0.99836,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 131663,
          "end": 131783,
          "confidence": 0.84466,
          "speaker": "MLK"
        },
        {
          "text": "reaction.",
          "start": 131799,
          "end": 132351,
          "confidence": 0.99312,
          "speaker": "MLK"
        },
        {
          "text": "It",
          "start": 132423,
          "end": 132559,
          "confidence": 0.90525,
          "speaker": "MLK"
        },
        {
          "text": "was",
          "start": 132567,
          "end": 132663,
          "confidence": 0.78472,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 132679,
          "end": 132807,
          "confidence": 0.87381,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 132831,
          "end": 133039,
          "confidence": 0.99971,
          "speaker": "MLK"
        },
        {
          "text": "massage.",
          "start": 133087,
          "end": 133463,
          "confidence": 0.99783,
          "speaker": "MLK"
        },
        {
          "text": "The",
          "start": 133519,
          "end": 133663,
          "confidence": 0.6238,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 133679,
          "end": 133831,
          "confidence": 0.99897,
          "speaker": "MLK"
        },
        {
          "text": "massage",
          "start": 133863,
          "end": 134175,
          "confidence": 0.99436,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 134215,
          "end": 134391,
          "confidence": 0.96572,
          "speaker": "MLK"
        },
        {
          "text": "nothing.",
          "start": 134423,
          "end": 134647,
          "confidence": 0.9694,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 134671,
          "end": 134807,
          "confidence": 0.52799,
          "speaker": "MLK"
        },
        {
          "text": "give",
          "start": 134831,
          "end": 134967,
          "confidence": 0.67945,
          "speaker": "MLK"
        },
        {
          "text": "my",
          "start": 134991,
          "end": 135127,
          "confidence": 0.99864,
          "speaker": "MLK"
        },
        {
          "text": "mother",
          "start": 135151,
          "end": 135327,
          "confidence": 0.99817,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 135351,
          "end": 135463,
          "confidence": 0.89831,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 135479,
          "end": 135631,
          "confidence": 0.99685,
          "speaker": "MLK"
        },
        {
          "text": "massage.",
          "start": 135663,
          "end": 136311,
          "confidence": 0.96367,
          "speaker": "MLK"
        },
        {
          "text": "Just",
          "start": 136463,
          "end": 136775,
          "confidence": 0.55387,
          "speaker": "MLK"
        },
        {
          "text": "laying",
          "start": 136815,
          "end": 137015,
          "confidence": 0.71948,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 137055,
          "end": 137255,
          "confidence": 0.9776,
          "speaker": "MLK"
        },
        {
          "text": "hands",
          "start": 137295,
          "end": 137487,
          "confidence": 0.99618,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 137511,
          "end": 137623,
          "confidence": 0.8263,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 137639,
          "end": 137839,
          "confidence": 0.90957,
          "speaker": "MLK"
        },
        {
          "text": "familiar",
          "start": 137887,
          "end": 138175,
          "confidence": 0.95566,
          "speaker": "MLK"
        },
        {
          "text": "way",
          "start": 138215,
          "end": 138367,
          "confidence": 0.93495,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 138391,
          "end": 138527,
          "confidence": 0.64219,
          "speaker": "MLK"
        },
        {
          "text": "myl''new",
          "start": 138551,
          "end": 139335,
          "confidence": 0.01814,
          "speaker": "MLK"
        },
        {
          "text": "way.",
          "start": 139375,
          "end": 139955,
          "confidence": 0.98884,
          "speaker": "MLK"
        },
        {
          "text": "Is",
          "start": 140775,
          "end": 141087,
          "confidence": 0.91396,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 141111,
          "end": 141175,
          "confidence": 0.65598,
          "speaker": "MLK"
        },
        {
          "text": "as",
          "start": 141175,
          "end": 141383,
          "confidence": 0.94747,
          "speaker": "MLK"
        },
        {
          "text": "bad",
          "start": 141439,
          "end": 141679,
          "confidence": 0.99976,
          "speaker": "MLK"
        },
        {
          "text": "as",
          "start": 141727,
          "end": 141863,
          "confidence": 0.99464,
          "speaker": "MLK"
        },
        {
          "text": "eating",
          "start": 141879,
          "end": 142087,
          "confidence": 0.93758,
          "speaker": "MLK"
        },
        {
          "text": "her",
          "start": 142111,
          "end": 142247,
          "confidence": 0.99687,
          "speaker": "MLK"
        },
        {
          "text": "pussy",
          "start": 142271,
          "end": 142591,
          "confidence": 0.9929,
          "speaker": "MLK"
        },
        {
          "text": "out?",
          "start": 142623,
          "end": 142863,
          "confidence": 0.99133,
          "speaker": "MLK"
        },
        {
          "text": "No,",
          "start": 142919,
          "end": 143447,
          "confidence": 0.98256,
          "speaker": "MLK"
        },
        {
          "text": "it's",
          "start": 143591,
          "end": 143863,
          "confidence": 0.20124,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 143879,
          "end": 143983,
          "confidence": 0.97512,
          "speaker": "MLK"
        },
        {
          "text": "same",
          "start": 143999,
          "end": 144175,
          "confidence": 0.99613,
          "speaker": "MLK"
        },
        {
          "text": "fucking",
          "start": 144215,
          "end": 144559,
          "confidence": 0.60343,
          "speaker": "MLK"
        },
        {
          "text": "ballpump.",
          "start": 144607,
          "end": 145111,
          "confidence": 0.41336,
          "speaker": "MLK"
        },
        {
          "text": "Whoa,",
          "start": 145183,
          "end": 145343,
          "confidence": 0.84262,
          "speaker": "MLK"
        },
        {
          "text": "whoa,",
          "start": 145359,
          "end": 145511,
          "confidence": 0.63937,
          "speaker": "MLK"
        },
        {
          "text": "whoa,",
          "start": 145543,
          "end": 145687,
          "confidence": 0.81017,
          "speaker": "MLK"
        },
        {
          "text": "whoa.",
          "start": 145711,
          "end": 145895,
          "confidence": 0.51551,
          "speaker": "MLK"
        },
        {
          "text": "Stop",
          "start": 145935,
          "end": 146111,
          "confidence": 0.99925,
          "speaker": "MLK"
        },
        {
          "text": "right",
          "start": 146143,
          "end": 146335,
          "confidence": 0.99635,
          "speaker": "MLK"
        },
        {
          "text": "there.",
          "start": 146375,
          "end": 146695,
          "confidence": 0.98836,
          "speaker": "MLK"
        },
        {
          "text": "Eating",
          "start": 146775,
          "end": 147023,
          "confidence": 0.71781,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 147039,
          "end": 147143,
          "confidence": 0.57285,
          "speaker": "MLK"
        },
        {
          "text": "bitch",
          "start": 147159,
          "end": 147287,
          "confidence": 0.79049,
          "speaker": "MLK"
        },
        {
          "text": "out.",
          "start": 147311,
          "end": 147423,
          "confidence": 0.55144,
          "speaker": "MLK"
        },
        {
          "text": "And",
          "start": 147439,
          "end": 147543,
          "confidence": 0.90056,
          "speaker": "MLK"
        },
        {
          "text": "giving",
          "start": 147559,
          "end": 147703,
          "confidence": 0.42732,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 147719,
          "end": 147823,
          "confidence": 0.56756,
          "speaker": "MLK"
        },
        {
          "text": "bitch",
          "start": 147839,
          "end": 147943,
          "confidence": 0.76886,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 147959,
          "end": 148063,
          "confidence": 0.94188,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 148079,
          "end": 148231,
          "confidence": 0.99628,
          "speaker": "MLK"
        },
        {
          "text": "massage",
          "start": 148263,
          "end": 148535,
          "confidence": 0.93264,
          "speaker": "MLK"
        },
        {
          "text": "ain't",
          "start": 148575,
          "end": 148783,
          "confidence": 0.86484,
          "speaker": "MLK"
        },
        {
          "text": "eating",
          "start": 148799,
          "end": 148983,
          "confidence": 0.72562,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 148999,
          "end": 149103,
          "confidence": 0.9917,
          "speaker": "MLK"
        },
        {
          "text": "same",
          "start": 149119,
          "end": 149319,
          "confidence": 0.99664,
          "speaker": "MLK"
        },
        {
          "text": "fucking",
          "start": 149367,
          "end": 149695,
          "confidence": 0.59609,
          "speaker": "MLK"
        },
        {
          "text": "thing.",
          "start": 149735,
          "end": 150103,
          "confidence": 0.99727,
          "speaker": "MLK"
        },
        {
          "text": "It's",
          "start": 150199,
          "end": 150471,
          "confidence": 0.91639,
          "speaker": "MLK"
        },
        {
          "text": "not.",
          "start": 150503,
          "end": 150719,
          "confidence": 0.99504,
          "speaker": "MLK"
        },
        {
          "text": "It's",
          "start": 150767,
          "end": 150943,
          "confidence": 0.9301,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 150959,
          "end": 151063,
          "confidence": 0.99547,
          "speaker": "MLK"
        },
        {
          "text": "same",
          "start": 151079,
          "end": 151279,
          "confidence": 0.99728,
          "speaker": "MLK"
        },
        {
          "text": "ballpark.",
          "start": 151327,
          "end": 151903,
          "confidence": 0.87287,
          "speaker": "MLK"
        },
        {
          "text": "Ain't",
          "start": 151959,
          "end": 152247,
          "confidence": 0.89907,
          "speaker": "MLK"
        },
        {
          "text": "no",
          "start": 152271,
          "end": 152431,
          "confidence": 0.99824,
          "speaker": "MLK"
        },
        {
          "text": "fucking",
          "start": 152463,
          "end": 152799,
          "confidence": 0.61452,
          "speaker": "MLK"
        },
        {
          "text": "Ballpark",
          "start": 152847,
          "end": 153423,
          "confidence": 0.85573,
          "speaker": "MLK"
        },
        {
          "text": "neither.",
          "start": 153479,
          "end": 153999,
          "confidence": 0.98141,
          "speaker": "MLK"
        },
        {
          "text": "Now",
          "start": 154127,
          "end": 154367,
          "confidence": 0.97099,
          "speaker": "MLK"
        },
        {
          "text": "look,",
          "start": 154391,
          "end": 154767,
          "confidence": 0.99828,
          "speaker": "MLK"
        },
        {
          "text": "maybe",
          "start": 154871,
          "end": 155143,
          "confidence": 0.99563,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 155159,
          "end": 155287,
          "confidence": 0.9848,
          "speaker": "MLK"
        },
        {
          "text": "method",
          "start": 155311,
          "end": 155543,
          "confidence": 0.99733,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 155559,
          "end": 155663,
          "confidence": 0.93421,
          "speaker": "MLK"
        },
        {
          "text": "massage",
          "start": 155679,
          "end": 156095,
          "confidence": 0.99223,
          "speaker": "MLK"
        },
        {
          "text": "differs",
          "start": 156175,
          "end": 156431,
          "confidence": 0.86238,
          "speaker": "MLK"
        },
        {
          "text": "from",
          "start": 156463,
          "end": 156631,
          "confidence": 0.99471,
          "speaker": "MLK"
        },
        {
          "text": "mine.",
          "start": 156663,
          "end": 156987,
          "confidence": 0.99585,
          "speaker": "MLK"
        },
        {
          "text": "But",
          "start": 157071,
          "end": 157219,
          "confidence": 0.98097,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 157227,
          "end": 157323,
          "confidence": 0.95572,
          "speaker": "MLK"
        },
        {
          "text": "know,",
          "start": 157339,
          "end": 157467,
          "confidence": 0.96193,
          "speaker": "MLK"
        },
        {
          "text": "touching",
          "start": 157491,
          "end": 157771,
          "confidence": 0.9907,
          "speaker": "MLK"
        },
        {
          "text": "his",
          "start": 157803,
          "end": 158019,
          "confidence": 0.60668,
          "speaker": "MLK"
        },
        {
          "text": "wife's",
          "start": 158067,
          "end": 158435,
          "confidence": 0.76171,
          "speaker": "MLK"
        },
        {
          "text": "feet",
          "start": 158475,
          "end": 158843,
          "confidence": 0.99332,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 158939,
          "end": 159147,
          "confidence": 0.99708,
          "speaker": "MLK"
        },
        {
          "text": "sticking",
          "start": 159171,
          "end": 159403,
          "confidence": 0.88454,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 159419,
          "end": 159547,
          "confidence": 0.99498,
          "speaker": "MLK"
        },
        {
          "text": "tongue",
          "start": 159571,
          "end": 159747,
          "confidence": 0.99749,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 159771,
          "end": 159883,
          "confidence": 0.56867,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 159899,
          "end": 159979,
          "confidence": 0.97867,
          "speaker": "MLK"
        },
        {
          "text": "holiest",
          "start": 159987,
          "end": 160307,
          "confidence": 0.97765,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 160331,
          "end": 160443,
          "confidence": 0.61533,
          "speaker": "MLK"
        },
        {
          "text": "holies",
          "start": 160459,
          "end": 160771,
          "confidence": 0.95223,
          "speaker": "MLK"
        },
        {
          "text": "ain't",
          "start": 160803,
          "end": 161067,
          "confidence": 0.94944,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 161091,
          "end": 161227,
          "confidence": 0.99873,
          "speaker": "MLK"
        },
        {
          "text": "same",
          "start": 161251,
          "end": 161507,
          "confidence": 0.9989,
          "speaker": "MLK"
        },
        {
          "text": "fucking",
          "start": 161571,
          "end": 161891,
          "confidence": 0.63791,
          "speaker": "MLK"
        },
        {
          "text": "ballpark.",
          "start": 161923,
          "end": 162387,
          "confidence": 0.79701,
          "speaker": "MLK"
        },
        {
          "text": "It",
          "start": 162411,
          "end": 162499,
          "confidence": 0.97681,
          "speaker": "MLK"
        },
        {
          "text": "ain't",
          "start": 162507,
          "end": 162707,
          "confidence": 0.94343,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 162731,
          "end": 162867,
          "confidence": 0.99722,
          "speaker": "MLK"
        },
        {
          "text": "same",
          "start": 162891,
          "end": 163123,
          "confidence": 0.99942,
          "speaker": "MLK"
        },
        {
          "text": "league.",
          "start": 163179,
          "end": 163395,
          "confidence": 0.99835,
          "speaker": "MLK"
        },
        {
          "text": "It",
          "start": 163435,
          "end": 163515,
          "confidence": 0.97436,
          "speaker": "MLK"
        },
        {
          "text": "ain't",
          "start": 163515,
          "end": 163707,
          "confidence": 0.87963,
          "speaker": "MLK"
        },
        {
          "text": "even",
          "start": 163731,
          "end": 163843,
          "confidence": 0.90563,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 163859,
          "end": 163963,
          "confidence": 0.99195,
          "speaker": "MLK"
        },
        {
          "text": "same",
          "start": 163979,
          "end": 164155,
          "confidence": 0.99688,
          "speaker": "MLK"
        },
        {
          "text": "fucking",
          "start": 164195,
          "end": 164523,
          "confidence": 0.66195,
          "speaker": "MLK"
        },
        {
          "text": "sport.",
          "start": 164579,
          "end": 164987,
          "confidence": 0.99816,
          "speaker": "MLK"
        },
        {
          "text": "Look,",
          "start": 165091,
          "end": 165307,
          "confidence": 0.97491,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 165331,
          "end": 165467,
          "confidence": 0.99933,
          "speaker": "MLK"
        },
        {
          "text": "massages",
          "start": 165491,
          "end": 165891,
          "confidence": 0.84544,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 165963,
          "end": 166211,
          "confidence": 0.98029,
          "speaker": "MLK"
        },
        {
          "text": "mean",
          "start": 166243,
          "end": 166459,
          "confidence": 0.9997,
          "speaker": "MLK"
        },
        {
          "text": "shit.",
          "start": 166507,
          "end": 167095,
          "confidence": 0.98314,
          "speaker": "MLK"
        },
        {
          "text": "Have",
          "start": 167395,
          "end": 167683,
          "confidence": 0.99869,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 167699,
          "end": 167851,
          "confidence": 0.99962,
          "speaker": "MLK"
        },
        {
          "text": "ever",
          "start": 167883,
          "end": 168027,
          "confidence": 0.99068,
          "speaker": "MLK"
        },
        {
          "text": "given",
          "start": 168051,
          "end": 168211,
          "confidence": 0.9531,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 168243,
          "end": 168363,
          "confidence": 0.97972,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 168379,
          "end": 168531,
          "confidence": 0.99886,
          "speaker": "MLK"
        },
        {
          "text": "massage?",
          "start": 168563,
          "end": 169215,
          "confidence": 0.51137,
          "speaker": "MLK"
        },
        {
          "text": "Go.",
          "start": 170435,
          "end": 170675,
          "confidence": 0.49649,
          "speaker": "MLK"
        },
        {
          "text": "Don't",
          "start": 170675,
          "end": 170803,
          "confidence": 0.79,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 170819,
          "end": 170947,
          "confidence": 0.97484,
          "speaker": "MLK"
        },
        {
          "text": "telling",
          "start": 170971,
          "end": 171211,
          "confidence": 0.85999,
          "speaker": "MLK"
        },
        {
          "text": "me",
          "start": 171243,
          "end": 171387,
          "confidence": 0.99224,
          "speaker": "MLK"
        },
        {
          "text": "about",
          "start": 171411,
          "end": 171547,
          "confidence": 0.99722,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 171571,
          "end": 171731,
          "confidence": 0.99965,
          "speaker": "MLK"
        },
        {
          "text": "massages.",
          "start": 171763,
          "end": 172267,
          "confidence": 0.90016,
          "speaker": "MLK"
        },
        {
          "text": "I'm",
          "start": 172371,
          "end": 172627,
          "confidence": 0.9602,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 172651,
          "end": 172763,
          "confidence": 0.9945,
          "speaker": "MLK"
        },
        {
          "text": "footfucking",
          "start": 172779,
          "end": 173419,
          "confidence": 0.25111,
          "speaker": "MLK"
        },
        {
          "text": "master.",
          "start": 173467,
          "end": 173955,
          "confidence": 0.96484,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 174035,
          "end": 174227,
          "confidence": 0.99034,
          "speaker": "MLK"
        },
        {
          "text": "giving",
          "start": 174251,
          "end": 174467,
          "confidence": 0.44898,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 174491,
          "end": 174603,
          "confidence": 0.99743,
          "speaker": "MLK"
        },
        {
          "text": "lot",
          "start": 174619,
          "end": 174723,
          "confidence": 0.99802,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 174739,
          "end": 174843,
          "confidence": 0.99249,
          "speaker": "MLK"
        },
        {
          "text": "em?",
          "start": 174859,
          "end": 175107,
          "confidence": 0.56923,
          "speaker": "MLK"
        },
        {
          "text": "Shit,",
          "start": 175171,
          "end": 175395,
          "confidence": 0.94555,
          "speaker": "MLK"
        },
        {
          "text": "yeah.",
          "start": 175435,
          "end": 175771,
          "confidence": 0.92271,
          "speaker": "MLK"
        },
        {
          "text": "Got",
          "start": 175843,
          "end": 176027,
          "confidence": 0.96634,
          "speaker": "MLK"
        },
        {
          "text": "my",
          "start": 176051,
          "end": 176187,
          "confidence": 0.99858,
          "speaker": "MLK"
        },
        {
          "text": "technique",
          "start": 176211,
          "end": 176515,
          "confidence": 0.52406,
          "speaker": "MLK"
        },
        {
          "text": "down",
          "start": 176555,
          "end": 176731,
          "confidence": 0.95923,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 176763,
          "end": 176955,
          "confidence": 0.80874,
          "speaker": "MLK"
        },
        {
          "text": "everything.",
          "start": 176995,
          "end": 177267,
          "confidence": 0.99789,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 177331,
          "end": 177459,
          "confidence": 0.99604,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 177467,
          "end": 177603,
          "confidence": 0.96965,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 177619,
          "end": 177723,
          "confidence": 0.98453,
          "speaker": "MLK"
        },
        {
          "text": "tickling",
          "start": 177739,
          "end": 178027,
          "confidence": 0.8753,
          "speaker": "MLK"
        },
        {
          "text": "or",
          "start": 178051,
          "end": 178187,
          "confidence": 0.91346,
          "speaker": "MLK"
        },
        {
          "text": "nothing.",
          "start": 178211,
          "end": 178855,
          "confidence": 0.77992,
          "speaker": "MLK"
        },
        {
          "text": "Would",
          "start": 179315,
          "end": 179627,
          "confidence": 0.9828,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 179651,
          "end": 179787,
          "confidence": 0.9991,
          "speaker": "MLK"
        },
        {
          "text": "give",
          "start": 179811,
          "end": 179971,
          "confidence": 0.98962,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 180003,
          "end": 180147,
          "confidence": 0.99357,
          "speaker": "MLK"
        },
        {
          "text": "guy",
          "start": 180171,
          "end": 180307,
          "confidence": 0.98887,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 180331,
          "end": 180467,
          "confidence": 0.99017,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 180491,
          "end": 180675,
          "confidence": 0.83676,
          "speaker": "MLK"
        },
        {
          "text": "massage?",
          "start": 180715,
          "end": 181415,
          "confidence": 0.96614,
          "speaker": "MLK"
        },
        {
          "text": "Fuck",
          "start": 183575,
          "end": 183959,
          "confidence": 0.93512,
          "speaker": "MLK"
        },
        {
          "text": "you.",
          "start": 184007,
          "end": 184595,
          "confidence": 0.99458,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 186375,
          "end": 186663,
          "confidence": 0.87788,
          "speaker": "MLK"
        },
        {
          "text": "give",
          "start": 186679,
          "end": 186807,
          "confidence": 0.53344,
          "speaker": "MLK"
        },
        {
          "text": "him",
          "start": 186831,
          "end": 186943,
          "confidence": 0.75742,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 186959,
          "end": 187087,
          "confidence": 0.98805,
          "speaker": "MLK"
        },
        {
          "text": "lot?",
          "start": 187111,
          "end": 187559,
          "confidence": 0.79203,
          "speaker": "MLK"
        },
        {
          "text": "Fuck",
          "start": 187687,
          "end": 188119,
          "confidence": 0.96089,
          "speaker": "MLK"
        },
        {
          "text": "you.",
          "start": 188207,
          "end": 188835,
          "confidence": 0.99749,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 189295,
          "end": 189559,
          "confidence": 0.96481,
          "speaker": "MLK"
        },
        {
          "text": "know,",
          "start": 189567,
          "end": 189663,
          "confidence": 0.97484,
          "speaker": "MLK"
        },
        {
          "text": "I'm",
          "start": 189679,
          "end": 189871,
          "confidence": 0.95353,
          "speaker": "MLK"
        },
        {
          "text": "kind",
          "start": 189903,
          "end": 190023,
          "confidence": 0.99204,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 190039,
          "end": 190191,
          "confidence": 0.61114,
          "speaker": "MLK"
        },
        {
          "text": "tired.",
          "start": 190223,
          "end": 190415,
          "confidence": 0.99975,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 190455,
          "end": 190607,
          "confidence": 0.99402,
          "speaker": "MLK"
        },
        {
          "text": "can",
          "start": 190631,
          "end": 190767,
          "confidence": 0.59654,
          "speaker": "MLK"
        },
        {
          "text": "use",
          "start": 190791,
          "end": 190903,
          "confidence": 0.99814,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 190919,
          "end": 191023,
          "confidence": 0.97282,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 191039,
          "end": 191167,
          "confidence": 0.99707,
          "speaker": "MLK"
        },
        {
          "text": "massage",
          "start": 191191,
          "end": 191503,
          "confidence": 0.99906,
          "speaker": "MLK"
        },
        {
          "text": "myself.",
          "start": 191559,
          "end": 191983,
          "confidence": 0.99693,
          "speaker": "MLK"
        },
        {
          "text": "Yo,",
          "start": 192039,
          "end": 192207,
          "confidence": 0.6888,
          "speaker": "MLK"
        },
        {
          "text": "yo,",
          "start": 192231,
          "end": 192367,
          "confidence": 0.68323,
          "speaker": "MLK"
        },
        {
          "text": "yo,",
          "start": 192391,
          "end": 192551,
          "confidence": 0.78198,
          "speaker": "MLK"
        },
        {
          "text": "man,",
          "start": 192583,
          "end": 192703,
          "confidence": 0.98301,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 192719,
          "end": 192847,
          "confidence": 0.95566,
          "speaker": "MLK"
        },
        {
          "text": "best",
          "start": 192871,
          "end": 193055,
          "confidence": 0.95631,
          "speaker": "MLK"
        },
        {
          "text": "back",
          "start": 193095,
          "end": 193271,
          "confidence": 0.99833,
          "speaker": "MLK"
        },
        {
          "text": "off.",
          "start": 193303,
          "end": 193471,
          "confidence": 0.99574,
          "speaker": "MLK"
        },
        {
          "text": "I'm",
          "start": 193503,
          "end": 193663,
          "confidence": 0.94619,
          "speaker": "MLK"
        },
        {
          "text": "getting",
          "start": 193679,
          "end": 193807,
          "confidence": 0.95092,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 193831,
          "end": 193919,
          "confidence": 0.99092,
          "speaker": "MLK"
        },
        {
          "text": "little",
          "start": 193927,
          "end": 194071,
          "confidence": 0.99354,
          "speaker": "MLK"
        },
        {
          "text": "pissed.",
          "start": 194103,
          "end": 194351,
          "confidence": 0.91082,
          "speaker": "MLK"
        },
        {
          "text": "To",
          "start": 194383,
          "end": 194479,
          "confidence": 0.65183,
          "speaker": "MLK"
        },
        {
          "text": "you.",
          "start": 194487,
          "end": 195035,
          "confidence": 0.9515,
          "speaker": "MLK"
        },
        {
          "text": "This",
          "start": 196975,
          "end": 197263,
          "confidence": 0.99616,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 197279,
          "end": 197383,
          "confidence": 0.98803,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 197399,
          "end": 197551,
          "confidence": 0.99569,
          "speaker": "MLK"
        },
        {
          "text": "door.",
          "start": 197583,
          "end": 197847,
          "confidence": 0.99746,
          "speaker": "MLK"
        },
        {
          "text": "Yeah,",
          "start": 197911,
          "end": 198127,
          "confidence": 0.48712,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 198151,
          "end": 198263,
          "confidence": 0.99495,
          "speaker": "MLK"
        },
        {
          "text": "is.",
          "start": 198279,
          "end": 198835,
          "confidence": 0.998,
          "speaker": "MLK"
        },
        {
          "text": "Time.",
          "start": 202455,
          "end": 202791,
          "confidence": 0.99896,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 202823,
          "end": 202967,
          "confidence": 0.99585,
          "speaker": "MLK"
        },
        {
          "text": "got",
          "start": 202991,
          "end": 203555,
          "confidence": 0.9979,
          "speaker": "MLK"
        },
        {
          "text": "7:22",
          "start": 205215,
          "end": 206511,
          "confidence": 0.98733,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 206543,
          "end": 206663,
          "confidence": 0.78798,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 206679,
          "end": 206903,
          "confidence": 0.43453,
          "speaker": "MLK"
        },
        {
          "text": "a.m.",
          "start": 206959,
          "end": 207295,
          "confidence": 0.9985,
          "speaker": "MLK"
        },
        {
          "text": "no.",
          "start": 207375,
          "end": 207639,
          "confidence": 0.78271,
          "speaker": "MLK"
        },
        {
          "text": "Ain'T",
          "start": 207687,
          "end": 207967,
          "confidence": 0.89659,
          "speaker": "MLK"
        },
        {
          "text": "quite",
          "start": 207991,
          "end": 208199,
          "confidence": 0.99842,
          "speaker": "MLK"
        },
        {
          "text": "time",
          "start": 208247,
          "end": 208503,
          "confidence": 0.9389,
          "speaker": "MLK"
        },
        {
          "text": "yet.",
          "start": 208559,
          "end": 209123,
          "confidence": 0.99876,
          "speaker": "MLK"
        },
        {
          "text": "Come",
          "start": 209279,
          "end": 209523,
          "confidence": 0.99739,
          "speaker": "MLK"
        },
        {
          "text": "on,",
          "start": 209539,
          "end": 209667,
          "confidence": 0.99146,
          "speaker": "MLK"
        },
        {
          "text": "let's",
          "start": 209691,
          "end": 209843,
          "confidence": 0.93781,
          "speaker": "MLK"
        },
        {
          "text": "hang",
          "start": 209859,
          "end": 210035,
          "confidence": 0.99961,
          "speaker": "MLK"
        },
        {
          "text": "back.",
          "start": 210075,
          "end": 210655,
          "confidence": 0.99437,
          "speaker": "MLK"
        },
        {
          "text": "Now",
          "start": 218915,
          "end": 219227,
          "confidence": 0.38291,
          "speaker": "MLK"
        },
        {
          "text": "look,",
          "start": 219251,
          "end": 219627,
          "confidence": 0.99661,
          "speaker": "MLK"
        },
        {
          "text": "just",
          "start": 219731,
          "end": 219923,
          "confidence": 0.99596,
          "speaker": "MLK"
        },
        {
          "text": "cause",
          "start": 219939,
          "end": 220123,
          "confidence": 0.2996,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 220139,
          "end": 220219,
          "confidence": 0.99902,
          "speaker": "MLK"
        },
        {
          "text": "wouldn't",
          "start": 220227,
          "end": 220403,
          "confidence": 0.97246,
          "speaker": "MLK"
        },
        {
          "text": "get",
          "start": 220419,
          "end": 220547,
          "confidence": 0.96566,
          "speaker": "MLK"
        },
        {
          "text": "no",
          "start": 220571,
          "end": 220707,
          "confidence": 0.9186,
          "speaker": "MLK"
        },
        {
          "text": "man",
          "start": 220731,
          "end": 220891,
          "confidence": 0.98752,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 220923,
          "end": 221067,
          "confidence": 0.90868,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 221091,
          "end": 221251,
          "confidence": 0.9993,
          "speaker": "MLK"
        },
        {
          "text": "massage",
          "start": 221283,
          "end": 221643,
          "confidence": 0.9682,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 221699,
          "end": 221883,
          "confidence": 0.98839,
          "speaker": "MLK"
        },
        {
          "text": "make",
          "start": 221899,
          "end": 222003,
          "confidence": 0.99924,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 222019,
          "end": 222147,
          "confidence": 0.99838,
          "speaker": "MLK"
        },
        {
          "text": "right",
          "start": 222171,
          "end": 222331,
          "confidence": 0.99843,
          "speaker": "MLK"
        },
        {
          "text": "for",
          "start": 222363,
          "end": 222483,
          "confidence": 0.99955,
          "speaker": "MLK"
        },
        {
          "text": "myselves",
          "start": 222499,
          "end": 222819,
          "confidence": 0.68829,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 222867,
          "end": 223003,
          "confidence": 0.99764,
          "speaker": "MLK"
        },
        {
          "text": "throw",
          "start": 223019,
          "end": 223171,
          "confidence": 0.99454,
          "speaker": "MLK"
        },
        {
          "text": "Antoine",
          "start": 223203,
          "end": 223571,
          "confidence": 0.79931,
          "speaker": "MLK"
        },
        {
          "text": "off",
          "start": 223603,
          "end": 223747,
          "confidence": 0.99367,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 223771,
          "end": 223979,
          "confidence": 0.98494,
          "speaker": "MLK"
        },
        {
          "text": "building",
          "start": 224027,
          "end": 224235,
          "confidence": 0.99867,
          "speaker": "MLK"
        },
        {
          "text": "into",
          "start": 224275,
          "end": 224403,
          "confidence": 0.99471,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 224419,
          "end": 224571,
          "confidence": 0.99571,
          "speaker": "MLK"
        },
        {
          "text": "glass",
          "start": 224603,
          "end": 224795,
          "confidence": 0.99511,
          "speaker": "MLK"
        },
        {
          "text": "motherfucking",
          "start": 224835,
          "end": 225347,
          "confidence": 0.54983,
          "speaker": "MLK"
        },
        {
          "text": "house,",
          "start": 225371,
          "end": 225555,
          "confidence": 0.99869,
          "speaker": "MLK"
        },
        {
          "text": "fucking",
          "start": 225595,
          "end": 225827,
          "confidence": 0.44349,
          "speaker": "MLK"
        },
        {
          "text": "up",
          "start": 225851,
          "end": 225939,
          "confidence": 0.98967,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 225947,
          "end": 226043,
          "confidence": 0.86132,
          "speaker": "MLK"
        },
        {
          "text": "way",
          "start": 226059,
          "end": 226163,
          "confidence": 0.98955,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 226179,
          "end": 226259,
          "confidence": 0.7455,
          "speaker": "MLK"
        },
        {
          "text": "nigga",
          "start": 226267,
          "end": 226507,
          "confidence": 0.548,
          "speaker": "MLK"
        },
        {
          "text": "talks.",
          "start": 226531,
          "end": 226867,
          "confidence": 0.99476,
          "speaker": "MLK"
        },
        {
          "text": "That",
          "start": 226931,
          "end": 227131,
          "confidence": 0.99633,
          "speaker": "MLK"
        },
        {
          "text": "shit",
          "start": 227163,
          "end": 227283,
          "confidence": 0.96359,
          "speaker": "MLK"
        },
        {
          "text": "ain't",
          "start": 227299,
          "end": 227531,
          "confidence": 0.96345,
          "speaker": "MLK"
        },
        {
          "text": "right.",
          "start": 227563,
          "end": 228091,
          "confidence": 0.99903,
          "speaker": "MLK"
        },
        {
          "text": "Motherfucker",
          "start": 228243,
          "end": 228787,
          "confidence": 0.71534,
          "speaker": "MLK"
        },
        {
          "text": "do",
          "start": 228811,
          "end": 228947,
          "confidence": 0.98007,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 228971,
          "end": 229107,
          "confidence": 0.99188,
          "speaker": "MLK"
        },
        {
          "text": "shit",
          "start": 229131,
          "end": 229267,
          "confidence": 0.96172,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 229291,
          "end": 229427,
          "confidence": 0.994,
          "speaker": "MLK"
        },
        {
          "text": "me,",
          "start": 229451,
          "end": 229635,
          "confidence": 0.99902,
          "speaker": "MLK"
        },
        {
          "text": "he",
          "start": 229675,
          "end": 229827,
          "confidence": 0.98997,
          "speaker": "MLK"
        },
        {
          "text": "better",
          "start": 229851,
          "end": 230059,
          "confidence": 0.9981,
          "speaker": "MLK"
        },
        {
          "text": "paralyze",
          "start": 230107,
          "end": 230619,
          "confidence": 0.62951,
          "speaker": "MLK"
        },
        {
          "text": "my",
          "start": 230667,
          "end": 230803,
          "confidence": 0.99769,
          "speaker": "MLK"
        },
        {
          "text": "ass.",
          "start": 230819,
          "end": 230971,
          "confidence": 0.98852,
          "speaker": "MLK"
        },
        {
          "text": "Cause",
          "start": 231003,
          "end": 231139,
          "confidence": 0.43586,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 231147,
          "end": 231267,
          "confidence": 0.55876,
          "speaker": "MLK"
        },
        {
          "text": "kill",
          "start": 231291,
          "end": 231427,
          "confidence": 0.99902,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 231451,
          "end": 231539,
          "confidence": 0.83238,
          "speaker": "MLK"
        },
        {
          "text": "motherfucker.",
          "start": 231547,
          "end": 231947,
          "confidence": 0.54765,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 231971,
          "end": 232059,
          "confidence": 0.9883,
          "speaker": "MLK"
        },
        {
          "text": "know",
          "start": 232067,
          "end": 232139,
          "confidence": 0.99876,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 232147,
          "end": 232219,
          "confidence": 0.99553,
          "speaker": "MLK"
        },
        {
          "text": "I'm",
          "start": 232227,
          "end": 232363,
          "confidence": 0.9794,
          "speaker": "MLK"
        },
        {
          "text": "saying?",
          "start": 232379,
          "end": 232579,
          "confidence": 0.81369,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 232627,
          "end": 232715,
          "confidence": 0.98616,
          "speaker": "MLK"
        },
        {
          "text": "ain't",
          "start": 232715,
          "end": 233035,
          "confidence": 0.72501,
          "speaker": "MLK"
        },
        {
          "text": "saying",
          "start": 233075,
          "end": 233251,
          "confidence": 0.96392,
          "speaker": "MLK"
        },
        {
          "text": "it's",
          "start": 233283,
          "end": 233515,
          "confidence": 0.74432,
          "speaker": "MLK"
        },
        {
          "text": "right,",
          "start": 233555,
          "end": 234019,
          "confidence": 0.9993,
          "speaker": "MLK"
        },
        {
          "text": "but",
          "start": 234147,
          "end": 234363,
          "confidence": 0.99207,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 234379,
          "end": 234531,
          "confidence": 0.9868,
          "speaker": "MLK"
        },
        {
          "text": "saying",
          "start": 234563,
          "end": 234707,
          "confidence": 0.93199,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 234731,
          "end": 234843,
          "confidence": 0.66712,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 234859,
          "end": 234987,
          "confidence": 0.99888,
          "speaker": "MLK"
        },
        {
          "text": "massage",
          "start": 235011,
          "end": 235315,
          "confidence": 0.99533,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 235355,
          "end": 235571,
          "confidence": 0.9716,
          "speaker": "MLK"
        },
        {
          "text": "mean",
          "start": 235603,
          "end": 235771,
          "confidence": 0.99913,
          "speaker": "MLK"
        },
        {
          "text": "not,",
          "start": 235803,
          "end": 235995,
          "confidence": 0.60712,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 236035,
          "end": 236187,
          "confidence": 0.93187,
          "speaker": "MLK"
        },
        {
          "text": "I'm",
          "start": 236211,
          "end": 236387,
          "confidence": 0.97568,
          "speaker": "MLK"
        },
        {
          "text": "saying",
          "start": 236411,
          "end": 236571,
          "confidence": 0.94895,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 236603,
          "end": 236771,
          "confidence": 0.99723,
          "speaker": "MLK"
        },
        {
          "text": "does.",
          "start": 236803,
          "end": 237391,
          "confidence": 0.99925,
          "speaker": "MLK"
        },
        {
          "text": "And",
          "start": 237563,
          "end": 237847,
          "confidence": 0.79688,
          "speaker": "MLK"
        },
        {
          "text": "look,",
          "start": 237871,
          "end": 238007,
          "confidence": 0.99489,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 238031,
          "end": 238167,
          "confidence": 0.99348,
          "speaker": "MLK"
        },
        {
          "text": "given",
          "start": 238191,
          "end": 238375,
          "confidence": 0.35517,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 238415,
          "end": 238543,
          "confidence": 0.99164,
          "speaker": "MLK"
        },
        {
          "text": "million",
          "start": 238559,
          "end": 238831,
          "confidence": 0.99943,
          "speaker": "MLK"
        },
        {
          "text": "ladies",
          "start": 238903,
          "end": 239191,
          "confidence": 0.99493,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 239223,
          "end": 239343,
          "confidence": 0.99216,
          "speaker": "MLK"
        },
        {
          "text": "million",
          "start": 239359,
          "end": 239583,
          "confidence": 0.99766,
          "speaker": "MLK"
        },
        {
          "text": "foot",
          "start": 239639,
          "end": 239855,
          "confidence": 0.99893,
          "speaker": "MLK"
        },
        {
          "text": "massagess.",
          "start": 239895,
          "end": 240511,
          "confidence": 0.50098,
          "speaker": "MLK"
        },
        {
          "text": "And",
          "start": 240583,
          "end": 240743,
          "confidence": 0.99567,
          "speaker": "MLK"
        },
        {
          "text": "they",
          "start": 240759,
          "end": 240959,
          "confidence": 0.98154,
          "speaker": "MLK"
        },
        {
          "text": "all",
          "start": 241007,
          "end": 241191,
          "confidence": 0.9983,
          "speaker": "MLK"
        },
        {
          "text": "meant",
          "start": 241223,
          "end": 241559,
          "confidence": 0.70898,
          "speaker": "MLK"
        },
        {
          "text": "something.",
          "start": 241647,
          "end": 242207,
          "confidence": 0.86279,
          "speaker": "MLK"
        },
        {
          "text": "We",
          "start": 242351,
          "end": 242583,
          "confidence": 0.99796,
          "speaker": "MLK"
        },
        {
          "text": "act",
          "start": 242599,
          "end": 242775,
          "confidence": 0.98836,
          "speaker": "MLK"
        },
        {
          "text": "like",
          "start": 242815,
          "end": 242991,
          "confidence": 0.99862,
          "speaker": "MLK"
        },
        {
          "text": "they",
          "start": 243023,
          "end": 243191,
          "confidence": 0.99925,
          "speaker": "MLK"
        },
        {
          "text": "don't,",
          "start": 243223,
          "end": 243479,
          "confidence": 0.97197,
          "speaker": "MLK"
        },
        {
          "text": "but",
          "start": 243527,
          "end": 243687,
          "confidence": 0.99949,
          "speaker": "MLK"
        },
        {
          "text": "they",
          "start": 243711,
          "end": 243895,
          "confidence": 0.9989,
          "speaker": "MLK"
        },
        {
          "text": "do.",
          "start": 243935,
          "end": 244111,
          "confidence": 0.99944,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 244143,
          "end": 244263,
          "confidence": 0.90851,
          "speaker": "MLK"
        },
        {
          "text": "mean,",
          "start": 244279,
          "end": 244359,
          "confidence": 0.95049,
          "speaker": "MLK"
        },
        {
          "text": "that's",
          "start": 244367,
          "end": 244479,
          "confidence": 0.87501,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 244487,
          "end": 244559,
          "confidence": 0.94883,
          "speaker": "MLK"
        },
        {
          "text": "s",
          "start": 244567,
          "end": 244639,
          "confidence": 0.514,
          "speaker": "MLK"
        },
        {
          "text": "so",
          "start": 244647,
          "end": 244767,
          "confidence": 0.99403,
          "speaker": "MLK"
        },
        {
          "text": "fucking",
          "start": 244791,
          "end": 245119,
          "confidence": 0.66208,
          "speaker": "MLK"
        },
        {
          "text": "cool",
          "start": 245167,
          "end": 245447,
          "confidence": 0.99937,
          "speaker": "MLK"
        },
        {
          "text": "about",
          "start": 245511,
          "end": 245687,
          "confidence": 0.99823,
          "speaker": "MLK"
        },
        {
          "text": "em.",
          "start": 245711,
          "end": 246063,
          "confidence": 0.52645,
          "speaker": "MLK"
        },
        {
          "text": "There's",
          "start": 246159,
          "end": 246383,
          "confidence": 0.88174,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 246399,
          "end": 246551,
          "confidence": 0.98091,
          "speaker": "MLK"
        },
        {
          "text": "sensuous",
          "start": 246583,
          "end": 247015,
          "confidence": 0.96897,
          "speaker": "MLK"
        },
        {
          "text": "thing",
          "start": 247055,
          "end": 247255,
          "confidence": 0.99849,
          "speaker": "MLK"
        },
        {
          "text": "going",
          "start": 247295,
          "end": 247519,
          "confidence": 0.90117,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 247567,
          "end": 248039,
          "confidence": 0.99694,
          "speaker": "MLK"
        },
        {
          "text": "where,",
          "start": 248167,
          "end": 248383,
          "confidence": 0.946,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 248399,
          "end": 248503,
          "confidence": 0.79222,
          "speaker": "MLK"
        },
        {
          "text": "know,",
          "start": 248519,
          "end": 248623,
          "confidence": 0.85045,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 248639,
          "end": 248743,
          "confidence": 0.99135,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 248759,
          "end": 248975,
          "confidence": 0.94665,
          "speaker": "MLK"
        },
        {
          "text": "talk",
          "start": 249015,
          "end": 249239,
          "confidence": 0.99956,
          "speaker": "MLK"
        },
        {
          "text": "about",
          "start": 249287,
          "end": 249447,
          "confidence": 0.99822,
          "speaker": "MLK"
        },
        {
          "text": "it,",
          "start": 249471,
          "end": 249607,
          "confidence": 0.98836,
          "speaker": "MLK"
        },
        {
          "text": "but",
          "start": 249631,
          "end": 249911,
          "confidence": 0.99233,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 249983,
          "end": 250215,
          "confidence": 0.99748,
          "speaker": "MLK"
        },
        {
          "text": "know",
          "start": 250255,
          "end": 250383,
          "confidence": 0.99556,
          "speaker": "MLK"
        },
        {
          "text": "what?",
          "start": 250399,
          "end": 250575,
          "confidence": 0.29618,
          "speaker": "MLK"
        },
        {
          "text": "She",
          "start": 250615,
          "end": 250791,
          "confidence": 0.99916,
          "speaker": "MLK"
        },
        {
          "text": "knows",
          "start": 250823,
          "end": 251055,
          "confidence": 0.99349,
          "speaker": "MLK"
        },
        {
          "text": "it.",
          "start": 251095,
          "end": 251559,
          "confidence": 0.97948,
          "speaker": "MLK"
        },
        {
          "text": "Fuck",
          "start": 251687,
          "end": 251927,
          "confidence": 0.87451,
          "speaker": "MLK"
        },
        {
          "text": "em.",
          "start": 251951,
          "end": 252063,
          "confidence": 0.44483,
          "speaker": "MLK"
        },
        {
          "text": "Marcelus",
          "start": 252079,
          "end": 252551,
          "confidence": 0.86382,
          "speaker": "MLK"
        },
        {
          "text": "knew",
          "start": 252583,
          "end": 252727,
          "confidence": 0.997,
          "speaker": "MLK"
        },
        {
          "text": "it.",
          "start": 252751,
          "end": 253223,
          "confidence": 0.99535,
          "speaker": "MLK"
        },
        {
          "text": "And",
          "start": 253359,
          "end": 253631,
          "confidence": 0.93581,
          "speaker": "MLK"
        },
        {
          "text": "Antoine",
          "start": 253663,
          "end": 253991,
          "confidence": 0.82151,
          "speaker": "MLK"
        },
        {
          "text": "should",
          "start": 254023,
          "end": 254143,
          "confidence": 0.99717,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 254159,
          "end": 254287,
          "confidence": 0.50283,
          "speaker": "MLK"
        },
        {
          "text": "fucking",
          "start": 254311,
          "end": 254591,
          "confidence": 0.51327,
          "speaker": "MLK"
        },
        {
          "text": "better",
          "start": 254623,
          "end": 254839,
          "confidence": 0.99474,
          "speaker": "MLK"
        },
        {
          "text": "known",
          "start": 254887,
          "end": 255095,
          "confidence": 0.98384,
          "speaker": "MLK"
        },
        {
          "text": "better.",
          "start": 255135,
          "end": 255715,
          "confidence": 0.99765,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 256655,
          "end": 256919,
          "confidence": 0.94514,
          "speaker": "MLK"
        },
        {
          "text": "mean,",
          "start": 256927,
          "end": 257023,
          "confidence": 0.96066,
          "speaker": "MLK"
        },
        {
          "text": "that's",
          "start": 257039,
          "end": 257183,
          "confidence": 0.92099,
          "speaker": "MLK"
        },
        {
          "text": "his",
          "start": 257199,
          "end": 257351,
          "confidence": 0.99685,
          "speaker": "MLK"
        },
        {
          "text": "fucking",
          "start": 257383,
          "end": 257695,
          "confidence": 0.66137,
          "speaker": "MLK"
        },
        {
          "text": "wife,",
          "start": 257735,
          "end": 258007,
          "confidence": 0.99565,
          "speaker": "MLK"
        },
        {
          "text": "man.",
          "start": 258071,
          "end": 258295,
          "confidence": 0.9842,
          "speaker": "MLK"
        },
        {
          "text": "They",
          "start": 258335,
          "end": 258463,
          "confidence": 0.54903,
          "speaker": "MLK"
        },
        {
          "text": "thinking",
          "start": 258479,
          "end": 258783,
          "confidence": 0.27152,
          "speaker": "MLK"
        },
        {
          "text": "no",
          "start": 258839,
          "end": 258983,
          "confidence": 0.39256,
          "speaker": "MLK"
        },
        {
          "text": "sense",
          "start": 258999,
          "end": 259167,
          "confidence": 0.99624,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 259191,
          "end": 259303,
          "confidence": 0.99543,
          "speaker": "MLK"
        },
        {
          "text": "humor",
          "start": 259319,
          "end": 259575,
          "confidence": 0.99079,
          "speaker": "MLK"
        },
        {
          "text": "about",
          "start": 259615,
          "end": 259767,
          "confidence": 0.98178,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 259791,
          "end": 259951,
          "confidence": 0.97684,
          "speaker": "MLK"
        },
        {
          "text": "shit.",
          "start": 259983,
          "end": 260595,
          "confidence": 0.95992,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 261055,
          "end": 261343,
          "confidence": 0.97771,
          "speaker": "MLK"
        },
        {
          "text": "know",
          "start": 261359,
          "end": 261439,
          "confidence": 0.64313,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 261447,
          "end": 261519,
          "confidence": 0.93023,
          "speaker": "MLK"
        },
        {
          "text": "I'm",
          "start": 261527,
          "end": 261663,
          "confidence": 0.85227,
          "speaker": "MLK"
        },
        {
          "text": "saying?",
          "start": 261679,
          "end": 262235,
          "confidence": 0.8736,
          "speaker": "MLK"
        },
        {
          "text": "It's",
          "start": 263915,
          "end": 264243,
          "confidence": 0.49758,
          "speaker": "MLK"
        },
        {
          "text": "an",
          "start": 264259,
          "end": 264459,
          "confidence": 0.99685,
          "speaker": "MLK"
        },
        {
          "text": "interesting",
          "start": 264507,
          "end": 264795,
          "confidence": 0.99825,
          "speaker": "MLK"
        },
        {
          "text": "point.",
          "start": 264835,
          "end": 265415,
          "confidence": 0.99811,
          "speaker": "MLK"
        },
        {
          "text": "Come",
          "start": 266155,
          "end": 266467,
          "confidence": 0.985,
          "speaker": "MLK"
        },
        {
          "text": "on,",
          "start": 266491,
          "end": 266747,
          "confidence": 0.98204,
          "speaker": "MLK"
        },
        {
          "text": "let's",
          "start": 266811,
          "end": 267003,
          "confidence": 0.97134,
          "speaker": "MLK"
        },
        {
          "text": "get",
          "start": 267019,
          "end": 267171,
          "confidence": 0.99902,
          "speaker": "MLK"
        },
        {
          "text": "into",
          "start": 267203,
          "end": 267347,
          "confidence": 0.91257,
          "speaker": "MLK"
        },
        {
          "text": "character.",
          "start": 267371,
          "end": 268095,
          "confidence": 0.99625,
          "speaker": "MLK"
        },
        {
          "text": "What's",
          "start": 274515,
          "end": 274843,
          "confidence": 0.9893,
          "speaker": "MLK"
        },
        {
          "text": "her",
          "start": 274859,
          "end": 274987,
          "confidence": 0.92406,
          "speaker": "MLK"
        },
        {
          "text": "name",
          "start": 275011,
          "end": 275243,
          "confidence": 0.99908,
          "speaker": "MLK"
        },
        {
          "text": "again?",
          "start": 275299,
          "end": 275755,
          "confidence": 0.99925,
          "speaker": "MLK"
        },
        {
          "text": "Mia.",
          "start": 275875,
          "end": 276619,
          "confidence": 0.95405,
          "speaker": "MLK"
        },
        {
          "text": "Mia.",
          "start": 276787,
          "end": 277203,
          "confidence": 0.84928,
          "speaker": "MLK"
        },
        {
          "text": "Why",
          "start": 277259,
          "end": 277379,
          "confidence": 0.81012,
          "speaker": "MLK"
        },
        {
          "text": "are",
          "start": 277387,
          "end": 277459,
          "confidence": 0.92649,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 277467,
          "end": 277587,
          "confidence": 0.99366,
          "speaker": "MLK"
        },
        {
          "text": "so",
          "start": 277611,
          "end": 277819,
          "confidence": 0.99526,
          "speaker": "MLK"
        },
        {
          "text": "interested",
          "start": 277867,
          "end": 278107,
          "confidence": 0.99771,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 278131,
          "end": 278267,
          "confidence": 0.99557,
          "speaker": "MLK"
        },
        {
          "text": "big",
          "start": 278291,
          "end": 278451,
          "confidence": 0.9988,
          "speaker": "MLK"
        },
        {
          "text": "man's?",
          "start": 278483,
          "end": 278747,
          "confidence": 0.79972,
          "speaker": "MLK"
        },
        {
          "text": "Why?",
          "start": 278771,
          "end": 279335,
          "confidence": 0.65438,
          "speaker": "MLK"
        },
        {
          "text": "Well,",
          "start": 280035,
          "end": 280371,
          "confidence": 0.92977,
          "speaker": "MLK"
        },
        {
          "text": "he's",
          "start": 280403,
          "end": 280587,
          "confidence": 0.97224,
          "speaker": "MLK"
        },
        {
          "text": "going",
          "start": 280611,
          "end": 280771,
          "confidence": 0.9511,
          "speaker": "MLK"
        },
        {
          "text": "out",
          "start": 280803,
          "end": 280923,
          "confidence": 0.99604,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 280939,
          "end": 281067,
          "confidence": 0.98172,
          "speaker": "MLK"
        },
        {
          "text": "town",
          "start": 281091,
          "end": 281251,
          "confidence": 0.99917,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 281283,
          "end": 281427,
          "confidence": 0.75429,
          "speaker": "MLK"
        },
        {
          "text": "Florida",
          "start": 281451,
          "end": 281763,
          "confidence": 0.98343,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 281779,
          "end": 281883,
          "confidence": 0.98962,
          "speaker": "MLK"
        },
        {
          "text": "he",
          "start": 281899,
          "end": 282003,
          "confidence": 0.98921,
          "speaker": "MLK"
        },
        {
          "text": "asked",
          "start": 282019,
          "end": 282171,
          "confidence": 0.95142,
          "speaker": "MLK"
        },
        {
          "text": "me",
          "start": 282203,
          "end": 282323,
          "confidence": 0.99605,
          "speaker": "MLK"
        },
        {
          "text": "if",
          "start": 282339,
          "end": 282467,
          "confidence": 0.99876,
          "speaker": "MLK"
        },
        {
          "text": "I'd",
          "start": 282491,
          "end": 282883,
          "confidence": 0.57753,
          "speaker": "MLK"
        },
        {
          "text": "take",
          "start": 282979,
          "end": 283259,
          "confidence": 0.99905,
          "speaker": "MLK"
        },
        {
          "text": "care",
          "start": 283307,
          "end": 283467,
          "confidence": 0.9996,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 283491,
          "end": 283579,
          "confidence": 0.9895,
          "speaker": "MLK"
        },
        {
          "text": "her",
          "start": 283587,
          "end": 283707,
          "confidence": 0.97478,
          "speaker": "MLK"
        },
        {
          "text": "while",
          "start": 283731,
          "end": 283867,
          "confidence": 0.98872,
          "speaker": "MLK"
        },
        {
          "text": "he's",
          "start": 283891,
          "end": 284131,
          "confidence": 0.93869,
          "speaker": "MLK"
        },
        {
          "text": "gone.",
          "start": 284163,
          "end": 284735,
          "confidence": 0.99355,
          "speaker": "MLK"
        },
        {
          "text": "Take",
          "start": 285475,
          "end": 285835,
          "confidence": 0.99487,
          "speaker": "MLK"
        },
        {
          "text": "care",
          "start": 285875,
          "end": 286027,
          "confidence": 0.99916,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 286051,
          "end": 286115,
          "confidence": 0.95008,
          "speaker": "MLK"
        },
        {
          "text": "her?",
          "start": 286115,
          "end": 286539,
          "confidence": 0.7752,
          "speaker": "MLK"
        },
        {
          "text": "No,",
          "start": 286667,
          "end": 286979,
          "confidence": 0.98126,
          "speaker": "MLK"
        },
        {
          "text": "man,",
          "start": 287027,
          "end": 287451,
          "confidence": 0.99459,
          "speaker": "MLK"
        },
        {
          "text": "just",
          "start": 287563,
          "end": 287883,
          "confidence": 0.97052,
          "speaker": "MLK"
        },
        {
          "text": "take",
          "start": 287939,
          "end": 288131,
          "confidence": 0.99963,
          "speaker": "MLK"
        },
        {
          "text": "her",
          "start": 288163,
          "end": 288283,
          "confidence": 0.9978,
          "speaker": "MLK"
        },
        {
          "text": "out.",
          "start": 288299,
          "end": 288547,
          "confidence": 0.99928,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 288611,
          "end": 288763,
          "confidence": 0.9389,
          "speaker": "MLK"
        },
        {
          "text": "know,",
          "start": 288779,
          "end": 289351,
          "confidence": 0.95403,
          "speaker": "MLK"
        },
        {
          "text": "show",
          "start": 289523,
          "end": 289831,
          "confidence": 0.99702,
          "speaker": "MLK"
        },
        {
          "text": "her",
          "start": 289863,
          "end": 289959,
          "confidence": 0.97246,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 289967,
          "end": 290063,
          "confidence": 0.75447,
          "speaker": "MLK"
        },
        {
          "text": "good",
          "start": 290079,
          "end": 290279,
          "confidence": 0.99775,
          "speaker": "MLK"
        },
        {
          "text": "time.",
          "start": 290327,
          "end": 290535,
          "confidence": 0.99555,
          "speaker": "MLK"
        },
        {
          "text": "Make",
          "start": 290575,
          "end": 290751,
          "confidence": 0.98766,
          "speaker": "MLK"
        },
        {
          "text": "sure",
          "start": 290783,
          "end": 290927,
          "confidence": 0.99919,
          "speaker": "MLK"
        },
        {
          "text": "she",
          "start": 290951,
          "end": 291063,
          "confidence": 0.99635,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 291079,
          "end": 291247,
          "confidence": 0.97984,
          "speaker": "MLK"
        },
        {
          "text": "get",
          "start": 291271,
          "end": 291407,
          "confidence": 0.99859,
          "speaker": "MLK"
        },
        {
          "text": "lonely.",
          "start": 291431,
          "end": 292115,
          "confidence": 0.99776,
          "speaker": "MLK"
        },
        {
          "text": "You're",
          "start": 292695,
          "end": 293023,
          "confidence": 0.65143,
          "speaker": "MLK"
        },
        {
          "text": "gonna",
          "start": 293039,
          "end": 293263,
          "confidence": 0.25222,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 293279,
          "end": 293383,
          "confidence": 0.99754,
          "speaker": "MLK"
        },
        {
          "text": "taking",
          "start": 293399,
          "end": 293623,
          "confidence": 0.98539,
          "speaker": "MLK"
        },
        {
          "text": "me,",
          "start": 293679,
          "end": 293823,
          "confidence": 0.57509,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 293839,
          "end": 293991,
          "confidence": 0.70859,
          "speaker": "MLK"
        },
        {
          "text": "Wallace",
          "start": 294023,
          "end": 294399,
          "confidence": 0.97719,
          "speaker": "MLK"
        },
        {
          "text": "out",
          "start": 294447,
          "end": 294631,
          "confidence": 0.99864,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 294663,
          "end": 294807,
          "confidence": 0.99722,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 294831,
          "end": 294991,
          "confidence": 0.85201,
          "speaker": "MLK"
        },
        {
          "text": "date?",
          "start": 295023,
          "end": 295335,
          "confidence": 0.9982,
          "speaker": "MLK"
        },
        {
          "text": "It",
          "start": 295415,
          "end": 295583,
          "confidence": 0.98274,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 295599,
          "end": 295823,
          "confidence": 0.9432,
          "speaker": "MLK"
        },
        {
          "text": "not",
          "start": 295879,
          "end": 296191,
          "confidence": 0.99955,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 296263,
          "end": 296447,
          "confidence": 0.98706,
          "speaker": "MLK"
        },
        {
          "text": "date.",
          "start": 296471,
          "end": 297035,
          "confidence": 0.99653,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 297655,
          "end": 297943,
          "confidence": 0.94246,
          "speaker": "MLK"
        },
        {
          "text": "know,",
          "start": 297959,
          "end": 298135,
          "confidence": 0.96357,
          "speaker": "MLK"
        },
        {
          "text": "it's",
          "start": 298175,
          "end": 298367,
          "confidence": 0.87644,
          "speaker": "MLK"
        },
        {
          "text": "just's",
          "start": 298391,
          "end": 298959,
          "confidence": 0.45013,
          "speaker": "MLK"
        },
        {
          "text": "like",
          "start": 298967,
          "end": 299087,
          "confidence": 0.99179,
          "speaker": "MLK"
        },
        {
          "text": "if",
          "start": 299111,
          "end": 299247,
          "confidence": 0.99636,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 299271,
          "end": 299359,
          "confidence": 0.99753,
          "speaker": "MLK"
        },
        {
          "text": "were",
          "start": 299367,
          "end": 299463,
          "confidence": 0.96584,
          "speaker": "MLK"
        },
        {
          "text": "gonna",
          "start": 299479,
          "end": 299703,
          "confidence": 0.24108,
          "speaker": "MLK"
        },
        {
          "text": "take",
          "start": 299719,
          "end": 299847,
          "confidence": 0.99872,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 299871,
          "end": 300007,
          "confidence": 0.99698,
          "speaker": "MLK"
        },
        {
          "text": "buddy's",
          "start": 300031,
          "end": 300391,
          "confidence": 0.89572,
          "speaker": "MLK"
        },
        {
          "text": "wife",
          "start": 300423,
          "end": 300615,
          "confidence": 0.99946,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 300655,
          "end": 300783,
          "confidence": 0.99868,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 300799,
          "end": 300927,
          "confidence": 0.98704,
          "speaker": "MLK"
        },
        {
          "text": "movie",
          "start": 300951,
          "end": 301167,
          "confidence": 0.99095,
          "speaker": "MLK"
        },
        {
          "text": "or",
          "start": 301191,
          "end": 301351,
          "confidence": 0.99747,
          "speaker": "MLK"
        },
        {
          "text": "something.",
          "start": 301383,
          "end": 301575,
          "confidence": 0.98402,
          "speaker": "MLK"
        },
        {
          "text": "It's",
          "start": 301615,
          "end": 302263,
          "confidence": 0.39299,
          "speaker": "MLK"
        },
        {
          "text": "just",
          "start": 302439,
          "end": 302751,
          "confidence": 0.98817,
          "speaker": "MLK"
        },
        {
          "text": "good",
          "start": 302783,
          "end": 303095,
          "confidence": 0.99941,
          "speaker": "MLK"
        },
        {
          "text": "company,",
          "start": 303175,
          "end": 303391,
          "confidence": 0.99957,
          "speaker": "MLK"
        },
        {
          "text": "that's",
          "start": 303423,
          "end": 303647,
          "confidence": 0.95974,
          "speaker": "MLK"
        },
        {
          "text": "all.",
          "start": 303671,
          "end": 304235,
          "confidence": 0.99848,
          "speaker": "MLK"
        },
        {
          "text": "It's",
          "start": 309855,
          "end": 310231,
          "confidence": 0.93624,
          "speaker": "MLK"
        },
        {
          "text": "not",
          "start": 310263,
          "end": 310407,
          "confidence": 0.99967,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 310431,
          "end": 310567,
          "confidence": 0.99801,
          "speaker": "MLK"
        },
        {
          "text": "date.",
          "start": 310591,
          "end": 311155,
          "confidence": 0.99812,
          "speaker": "MLK"
        },
        {
          "text": "It's",
          "start": 311575,
          "end": 311999,
          "confidence": 0.92428,
          "speaker": "MLK"
        },
        {
          "text": "definitely",
          "start": 312047,
          "end": 312527,
          "confidence": 0.99195,
          "speaker": "MLK"
        },
        {
          "text": "not",
          "start": 312591,
          "end": 312743,
          "confidence": 0.99907,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 312759,
          "end": 312887,
          "confidence": 0.99751,
          "speaker": "MLK"
        },
        {
          "text": "date.",
          "start": 312911,
          "end": 312975,
          "confidence": 0.99383,
          "speaker": "MLK"
        }
      ],
      "sentimentAnalysis": [
        {
          "text": "Mia.",
          "sentiment": "NEUTRAL",
          "confidence": 0.631815,
          "start": 375,
          "end": 879
        },
        {
          "text": "Mia.",
          "sentiment": "NEUTRAL",
          "confidence": 0.631815,
          "start": 1007,
          "end": 1755
        },
        {
          "text": "How did Marcel on her meet?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8856104,
          "start": 2135,
          "end": 3879
        },
        {
          "text": "I don't know, I.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5962902,
          "start": 4047,
          "end": 5375
        },
        {
          "text": "Other people meet people.",
          "sentiment": "NEUTRAL",
          "confidence": 0.75147724,
          "start": 5415,
          "end": 6795
        },
        {
          "text": "She used to be an actress.",
          "sentiment": "NEUTRAL",
          "confidence": 0.8183767,
          "start": 7295,
          "end": 8703
        },
        {
          "text": "Oh, really?",
          "sentiment": "NEUTRAL",
          "confidence": 0.48613977,
          "start": 8839,
          "end": 9559
        },
        {
          "text": "She do anything out of scene?",
          "sentiment": "NEUTRAL",
          "confidence": 0.83300394,
          "start": 9687,
          "end": 11311
        },
        {
          "text": "I think her biggest deal was she starred in a pilot.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5057296,
          "start": 11503,
          "end": 14231
        },
        {
          "text": "Pilot?",
          "sentiment": "NEUTRAL",
          "confidence": 0.7614047,
          "start": 14343,
          "end": 14751
        },
        {
          "text": "What's a pilot?",
          "sentiment": "NEUTRAL",
          "confidence": 0.76689637,
          "start": 14783,
          "end": 15775
        },
        {
          "text": "Well, you know, the show's on tv.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7244065,
          "start": 15895,
          "end": 17635
        },
        {
          "text": "I don't watch tv.",
          "sentiment": "NEGATIVE",
          "confidence": 0.8271792,
          "start": 17975,
          "end": 19383
        },
        {
          "text": "Yeah, but you are aware that there's an invention called television, and on this invention they show shows, right?",
          "sentiment": "NEUTRAL",
          "confidence": 0.69338363,
          "start": 19559,
          "end": 25287
        },
        {
          "text": "Y. Yeah.",
          "sentiment": "NEUTRAL",
          "confidence": 0.61857957,
          "start": 25431,
          "end": 26259
        },
        {
          "text": "Well, the way they pick TV shows is they make one show.",
          "sentiment": "NEUTRAL",
          "confidence": 0.69612795,
          "start": 26387,
          "end": 29243
        },
        {
          "text": "That show's called a pilot.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7274771,
          "start": 29299,
          "end": 30755
        },
        {
          "text": "Then they show that one show to the people who pick shows, and on the strength of that one show, they decide if they want to make more shows.",
          "sentiment": "NEUTRAL",
          "confidence": 0.8637524,
          "start": 30875,
          "end": 36707
        },
        {
          "text": "Some get chosen and become television programs.",
          "sentiment": "NEUTRAL",
          "confidence": 0.83587605,
          "start": 36851,
          "end": 39371
        },
        {
          "text": "Some don't come nothing.",
          "sentiment": "NEUTRAL",
          "confidence": 0.60989076,
          "start": 39443,
          "end": 41655
        },
        {
          "text": "She starred one of the ones that became nothing.",
          "sentiment": "NEUTRAL",
          "confidence": 0.4946889,
          "start": 42195,
          "end": 44575
        },
        {
          "text": "You remember Antoine Rocamora?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8857659,
          "start": 45515,
          "end": 47531
        },
        {
          "text": "Half black, half saone.",
          "sentiment": "NEUTRAL",
          "confidence": 0.67936426,
          "start": 47643,
          "end": 49107
        },
        {
          "text": "Used to call him Tony Rocky Horror?",
          "sentiment": "NEUTRAL",
          "confidence": 0.87353545,
          "start": 49171,
          "end": 51223
        },
        {
          "text": "Yeah, maybe.",
          "sentiment": "NEUTRAL",
          "confidence": 0.717869,
          "start": 51419,
          "end": 52191
        },
        {
          "text": "Fat, right?",
          "sentiment": "NEGATIVE",
          "confidence": 0.5563911,
          "start": 52223,
          "end": 52935
        },
        {
          "text": "I wouldn't go so far as to call the brother fat.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5023539,
          "start": 53055,
          "end": 54967
        },
        {
          "text": "I mean, he got a weight problem.",
          "sentiment": "NEGATIVE",
          "confidence": 0.5234391,
          "start": 54991,
          "end": 55975
        },
        {
          "text": "What's the nigga gonna do you some more?",
          "sentiment": "NEUTRAL",
          "confidence": 0.62039584,
          "start": 56015,
          "end": 57695
        },
        {
          "text": "Yeah, I think I know what you mean.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6961186,
          "start": 57815,
          "end": 59015
        },
        {
          "text": "What about him?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8257631,
          "start": 59055,
          "end": 59879
        },
        {
          "text": "Well, Marcellus fucked him up good.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9358604,
          "start": 60007,
          "end": 62223
        },
        {
          "text": "Word around the campfire is was on account of Marcellus Wallace's wife.",
          "sentiment": "NEUTRAL",
          "confidence": 0.8902555,
          "start": 62359,
          "end": 66115
        },
        {
          "text": "So what'd he do?",
          "sentiment": "NEUTRAL",
          "confidence": 0.82056737,
          "start": 74815,
          "end": 75695
        },
        {
          "text": "Fucking.",
          "sentiment": "NEGATIVE",
          "confidence": 0.94230974,
          "start": 75735,
          "end": 76223
        },
        {
          "text": "No, no, no, no, no, no.",
          "sentiment": "NEGATIVE",
          "confidence": 0.74369574,
          "start": 76319,
          "end": 77351
        },
        {
          "text": "Nothing that bad with.",
          "sentiment": "NEUTRAL",
          "confidence": 0.49039233,
          "start": 77383,
          "end": 79017
        },
        {
          "text": "Than what then?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8030288,
          "start": 79041,
          "end": 80005
        },
        {
          "text": "Gave her a foot massage.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7868496,
          "start": 80425,
          "end": 81885
        },
        {
          "text": "Foot massage?",
          "sentiment": "NEUTRAL",
          "confidence": 0.90752006,
          "start": 84745,
          "end": 85845
        },
        {
          "text": "That's it?",
          "sentiment": "NEUTRAL",
          "confidence": 0.6384303,
          "start": 86985,
          "end": 87689
        },
        {
          "text": "Mm hmm.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6845973,
          "start": 87777,
          "end": 88605
        },
        {
          "text": "Then what did Marcels do?",
          "sentiment": "NEUTRAL",
          "confidence": 0.7945938,
          "start": 89065,
          "end": 90725
        },
        {
          "text": "Sent a couple of cats over to his place.",
          "sentiment": "NEUTRAL",
          "confidence": 0.8551131,
          "start": 91225,
          "end": 92929
        },
        {
          "text": "They took him out on his patio, threw his ass over the balcony.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9432218,
          "start": 92977,
          "end": 96161
        },
        {
          "text": "Nigga fell fals stories.",
          "sentiment": "NEGATIVE",
          "confidence": 0.69245875,
          "start": 96233,
          "end": 98185
        },
        {
          "text": "Had a little garden down at the bottom, closed in glass, like a greenhouse.",
          "sentiment": "NEUTRAL",
          "confidence": 0.8249576,
          "start": 98345,
          "end": 102313
        },
        {
          "text": "Niga fell through that.",
          "sentiment": "NEUTRAL",
          "confidence": 0.59983265,
          "start": 102489,
          "end": 104245
        },
        {
          "text": "Since then he kind of developed a speech impediment.",
          "sentiment": "NEGATIVE",
          "confidence": 0.67679536,
          "start": 104825,
          "end": 107645
        },
        {
          "text": "That's a damn shame.",
          "sentiment": "NEGATIVE",
          "confidence": 0.95790654,
          "start": 109305,
          "end": 110805
        },
        {
          "text": "But still, I have to say, you play with matches, you get burned.",
          "sentiment": "NEGATIVE",
          "confidence": 0.8017669,
          "start": 116785,
          "end": 119993
        },
        {
          "text": "What do you mean?",
          "sentiment": "NEUTRAL",
          "confidence": 0.7294429,
          "start": 120089,
          "end": 121041
        },
        {
          "text": "You don't be giving Marcellis Waace, his new bride, a foot massage.",
          "sentiment": "NEUTRAL",
          "confidence": 0.49176362,
          "start": 121193,
          "end": 124705
        },
        {
          "text": "You don't think he overreacted?",
          "sentiment": "NEUTRAL",
          "confidence": 0.6053336,
          "start": 124865,
          "end": 126585
        },
        {
          "text": "Well, yah's why.",
          "sentiment": "NEUTRAL",
          "confidence": 0.68601555,
          "start": 126705,
          "end": 127609
        },
        {
          "text": "I probably didn't expect Myl to react the way he did, but he had to expect a reaction.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6132653,
          "start": 127617,
          "end": 132351
        },
        {
          "text": "It was a foot massage.",
          "sentiment": "NEUTRAL",
          "confidence": 0.8555119,
          "start": 132423,
          "end": 133463
        },
        {
          "text": "The foot massage is nothing.",
          "sentiment": "NEGATIVE",
          "confidence": 0.54964054,
          "start": 133519,
          "end": 134647
        },
        {
          "text": "I give my mother a foot massage.",
          "sentiment": "NEUTRAL",
          "confidence": 0.8439864,
          "start": 134671,
          "end": 136311
        },
        {
          "text": "Just laying your hands in a familiar way on myl''new way.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7200769,
          "start": 136463,
          "end": 139955
        },
        {
          "text": "Is it as bad as eating her pussy out?",
          "sentiment": "NEGATIVE",
          "confidence": 0.8895204,
          "start": 140775,
          "end": 142863
        },
        {
          "text": "No, it's the same fucking ballpump.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9114058,
          "start": 142919,
          "end": 145111
        },
        {
          "text": "Whoa, whoa, whoa, whoa.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6396295,
          "start": 145183,
          "end": 145895
        },
        {
          "text": "Stop right there.",
          "sentiment": "NEUTRAL",
          "confidence": 0.481296,
          "start": 145935,
          "end": 146695
        },
        {
          "text": "Eating the bitch out.",
          "sentiment": "NEGATIVE",
          "confidence": 0.836065,
          "start": 146775,
          "end": 147423
        },
        {
          "text": "And giving a bitch a foot massage ain't eating the same fucking thing.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9321702,
          "start": 147439,
          "end": 150103
        },
        {
          "text": "It's not.",
          "sentiment": "NEUTRAL",
          "confidence": 0.49380782,
          "start": 150199,
          "end": 150719
        },
        {
          "text": "It's the same ballpark.",
          "sentiment": "NEUTRAL",
          "confidence": 0.71473694,
          "start": 150767,
          "end": 151903
        },
        {
          "text": "Ain't no fucking Ballpark neither.",
          "sentiment": "NEGATIVE",
          "confidence": 0.89115757,
          "start": 151959,
          "end": 153999
        },
        {
          "text": "Now look, maybe your method of massage differs from mine.",
          "sentiment": "NEUTRAL",
          "confidence": 0.75856614,
          "start": 154127,
          "end": 156987
        },
        {
          "text": "But you know, touching his wife's feet and sticking your tongue in the holiest the holies ain't the same fucking ballpark.",
          "sentiment": "NEGATIVE",
          "confidence": 0.80947685,
          "start": 157071,
          "end": 162387
        },
        {
          "text": "It ain't the same league.",
          "sentiment": "NEUTRAL",
          "confidence": 0.51846266,
          "start": 162411,
          "end": 163395
        },
        {
          "text": "It ain't even the same fucking sport.",
          "sentiment": "NEGATIVE",
          "confidence": 0.93963456,
          "start": 163435,
          "end": 164987
        },
        {
          "text": "Look, foot massages don't mean shit.",
          "sentiment": "NEGATIVE",
          "confidence": 0.82644105,
          "start": 165091,
          "end": 167095
        },
        {
          "text": "Have you ever given a foot massage?",
          "sentiment": "NEUTRAL",
          "confidence": 0.89767647,
          "start": 167395,
          "end": 169215
        },
        {
          "text": "Go.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5352324,
          "start": 170435,
          "end": 170675
        },
        {
          "text": "Don't be telling me about foot massages.",
          "sentiment": "NEGATIVE",
          "confidence": 0.540909,
          "start": 170675,
          "end": 172267
        },
        {
          "text": "I'm the footfucking master.",
          "sentiment": "NEGATIVE",
          "confidence": 0.6731365,
          "start": 172371,
          "end": 173955
        },
        {
          "text": "You giving a lot of em?",
          "sentiment": "NEUTRAL",
          "confidence": 0.7657459,
          "start": 174035,
          "end": 175107
        },
        {
          "text": "Shit, yeah.",
          "sentiment": "NEGATIVE",
          "confidence": 0.72187716,
          "start": 175171,
          "end": 175771
        },
        {
          "text": "Got my technique down and everything.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7444635,
          "start": 175843,
          "end": 177267
        },
        {
          "text": "I don't be tickling or nothing.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6344697,
          "start": 177331,
          "end": 178855
        },
        {
          "text": "Would you give a guy a foot massage?",
          "sentiment": "NEUTRAL",
          "confidence": 0.88943493,
          "start": 179315,
          "end": 181415
        },
        {
          "text": "Fuck you.",
          "sentiment": "NEGATIVE",
          "confidence": 0.945041,
          "start": 183575,
          "end": 184595
        },
        {
          "text": "You give him a lot?",
          "sentiment": "NEUTRAL",
          "confidence": 0.75903213,
          "start": 186375,
          "end": 187559
        },
        {
          "text": "Fuck you.",
          "sentiment": "NEGATIVE",
          "confidence": 0.945041,
          "start": 187687,
          "end": 188835
        },
        {
          "text": "You know, I'm kind of tired.",
          "sentiment": "NEGATIVE",
          "confidence": 0.71958476,
          "start": 189295,
          "end": 190415
        },
        {
          "text": "I can use a foot massage myself.",
          "sentiment": "NEUTRAL",
          "confidence": 0.76680017,
          "start": 190455,
          "end": 191983
        },
        {
          "text": "Yo, yo, yo, man, you best back off.",
          "sentiment": "NEGATIVE",
          "confidence": 0.6011521,
          "start": 192039,
          "end": 193471
        },
        {
          "text": "I'm getting a little pissed.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9396681,
          "start": 193503,
          "end": 194351
        },
        {
          "text": "To you.",
          "sentiment": "NEUTRAL",
          "confidence": 0.70194244,
          "start": 194383,
          "end": 195035
        },
        {
          "text": "This is the door.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7515854,
          "start": 196975,
          "end": 197847
        },
        {
          "text": "Yeah, it is time.",
          "sentiment": "NEUTRAL",
          "confidence": 0.57389516,
          "start": 197911,
          "end": 202791
        },
        {
          "text": "You got 7:22 in the a.m. no, ain't quite time yet.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6523467,
          "start": 202823,
          "end": 209123
        },
        {
          "text": "Come on, let's hang back.",
          "sentiment": "NEUTRAL",
          "confidence": 0.65736216,
          "start": 209279,
          "end": 210655
        },
        {
          "text": "Now look, just cause I wouldn't get no man a foot massage don't make it right for myselves to throw Antoine off a building into a glass motherfucking house, fucking up the way the nigga talks.",
          "sentiment": "NEGATIVE",
          "confidence": 0.96746004,
          "start": 218915,
          "end": 226867
        },
        {
          "text": "That shit ain't right.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9520403,
          "start": 226931,
          "end": 228091
        },
        {
          "text": "Motherfucker do that shit to me, he better paralyze my ass.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9743764,
          "start": 228243,
          "end": 230971
        },
        {
          "text": "Cause I kill a motherfucker.",
          "sentiment": "NEGATIVE",
          "confidence": 0.942717,
          "start": 231003,
          "end": 231947
        },
        {
          "text": "You know what I'm saying?",
          "sentiment": "NEUTRAL",
          "confidence": 0.7022465,
          "start": 231971,
          "end": 232579
        },
        {
          "text": "I ain't saying it's right, but you saying a foot massage don't mean not, and I'm saying it does.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7508982,
          "start": 232627,
          "end": 237391
        },
        {
          "text": "And look, I given a million ladies a million foot massagess.",
          "sentiment": "NEUTRAL",
          "confidence": 0.70267457,
          "start": 237563,
          "end": 240511
        },
        {
          "text": "And they all meant something.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6236557,
          "start": 240583,
          "end": 242207
        },
        {
          "text": "We act like they don't, but they do.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6333931,
          "start": 242351,
          "end": 244111
        },
        {
          "text": "I mean, that's what s so fucking cool about em.",
          "sentiment": "POSITIVE",
          "confidence": 0.7970051,
          "start": 244143,
          "end": 246063
        },
        {
          "text": "There's a sensuous thing going on where, you know, you don't talk about it, but you know what?",
          "sentiment": "NEUTRAL",
          "confidence": 0.7388212,
          "start": 246159,
          "end": 250575
        },
        {
          "text": "She knows it.",
          "sentiment": "NEUTRAL",
          "confidence": 0.601507,
          "start": 250615,
          "end": 251559
        },
        {
          "text": "Fuck em.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9301432,
          "start": 251687,
          "end": 252063
        },
        {
          "text": "Marcelus knew it.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6546044,
          "start": 252079,
          "end": 253223
        },
        {
          "text": "And Antoine should have fucking better known better.",
          "sentiment": "NEGATIVE",
          "confidence": 0.876228,
          "start": 253359,
          "end": 255715
        },
        {
          "text": "I mean, that's his fucking wife, man.",
          "sentiment": "NEGATIVE",
          "confidence": 0.92977434,
          "start": 256655,
          "end": 258295
        },
        {
          "text": "They thinking no sense of humor about this shit.",
          "sentiment": "NEGATIVE",
          "confidence": 0.93674004,
          "start": 258335,
          "end": 260595
        },
        {
          "text": "You know what I'm saying?",
          "sentiment": "NEUTRAL",
          "confidence": 0.7022465,
          "start": 261055,
          "end": 262235
        },
        {
          "text": "It's an interesting point.",
          "sentiment": "POSITIVE",
          "confidence": 0.7685595,
          "start": 263915,
          "end": 265415
        },
        {
          "text": "Come on, let's get into character.",
          "sentiment": "NEUTRAL",
          "confidence": 0.75574356,
          "start": 266155,
          "end": 268095
        },
        {
          "text": "What's her name again?",
          "sentiment": "NEUTRAL",
          "confidence": 0.80840355,
          "start": 274515,
          "end": 275755
        },
        {
          "text": "Mia.",
          "sentiment": "NEUTRAL",
          "confidence": 0.631815,
          "start": 275875,
          "end": 276619
        },
        {
          "text": "Mia.",
          "sentiment": "NEUTRAL",
          "confidence": 0.631815,
          "start": 276787,
          "end": 277203
        },
        {
          "text": "Why are you so interested in big man's?",
          "sentiment": "NEUTRAL",
          "confidence": 0.53923094,
          "start": 277259,
          "end": 278747
        },
        {
          "text": "Why?",
          "sentiment": "NEUTRAL",
          "confidence": 0.6120102,
          "start": 278771,
          "end": 279335
        },
        {
          "text": "Well, he's going out of town of Florida and he asked me if I'd take care of her while he's gone.",
          "sentiment": "NEUTRAL",
          "confidence": 0.8509452,
          "start": 280035,
          "end": 284735
        },
        {
          "text": "Take care of her?",
          "sentiment": "NEUTRAL",
          "confidence": 0.82767296,
          "start": 285475,
          "end": 286539
        },
        {
          "text": "No, man, just take her out.",
          "sentiment": "NEGATIVE",
          "confidence": 0.7255522,
          "start": 286667,
          "end": 288547
        },
        {
          "text": "You know, show her a good time.",
          "sentiment": "POSITIVE",
          "confidence": 0.7174169,
          "start": 288611,
          "end": 290535
        },
        {
          "text": "Make sure she don't get lonely.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7540727,
          "start": 290575,
          "end": 292115
        },
        {
          "text": "You're gonna be taking me, a Wallace out on a date?",
          "sentiment": "NEUTRAL",
          "confidence": 0.9043746,
          "start": 292695,
          "end": 295335
        },
        {
          "text": "It is not a date.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6732066,
          "start": 295415,
          "end": 297035
        },
        {
          "text": "You know, it's just's like if you were gonna take your buddy's wife to a movie or something.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6799384,
          "start": 297655,
          "end": 301575
        },
        {
          "text": "It's just good company, that's all.",
          "sentiment": "POSITIVE",
          "confidence": 0.8356206,
          "start": 301615,
          "end": 304235
        },
        {
          "text": "It's not a date.",
          "sentiment": "NEUTRAL",
          "confidence": 0.68565404,
          "start": 309855,
          "end": 311155
        },
        {
          "text": "It's definitely not a date.",
          "sentiment": "NEUTRAL",
          "confidence": 0.55499905,
          "start": 311575,
          "end": 312975
        }
      ],
      "keyPhrases": [
        "Foot massage",
        "TV shows",
        "more shows",
        "way",
        "big man's",
        "Antoine Rocamora",
        "same fucking thing",
        "same fucking ballpark",
        "same fucking ballpump",
        "Tony Rocky Horror",
        "fals stories",
        "people",
        "television programs",
        "glass",
        "fucking wife"
      ],
      "duration": 0,
      "language": "en",
      "confidence": 0.89452416
    }
  },
  "lil_wayne_deposition": {
    "name": "lil_wayne_deposition",
    "displayName": "Lil Wayne Deposition",
    "fileName": "lil_wayne_deposition.mp3",
    "description": "Legal deposition excerpt",
    "duration": "5 min",
    "transcript": {
      "text": "Clearly Lil Wayne answers to no one. Is that an interview that you actually gave with Katie Courig? Is that an interview that I actually gave with Katie Coury? Yeah. What's your name? Well, that's not the question. Name pet. Ross. Hu. Pete Ross. Pete Ross. That's a stupid ass question. You just saw me on there, G. An interview with her. Okay, so that was you. Did you perform at the Virgin Mobile Music Fest in 2008 with Kanye West? I don't know. But I know I did perform at this badass bitch birthday party recently. She was crazy stupid thick. Isn't it something that you would remember if your album the Carter 3 was the biggest selling album of the year in 2008? Isn't it something that I would remember that? Yes. Isn't that a personal opinion type question? That's why I got that. I mean, because I would be actually answering the question to. Isn't it something. That's my question. Isn't it something that you would remember? Isn't it something. That's the question I have to answer. Your honor. Go ahead. Isn't it something. Do the best trying to answer it. Yes. Something out of youres. That's myswer. Yeah, it is something out of your ass. Have you ever hired a photographer to photograph an event? Have I ever hired a photographer? The photograph. Sorry, sir, no. I'm a superstar. People hire them themselves to photograph me. We don't hire them. How would you describe your image in the media? How would I describe my image in the media? Yes. I wouldn't describe it. Well, how would you describe it if you had to? I don't have to. Well, what image are you portraying in the media? I don't portray anything. I am who I am. And you guys portray what you get? No. Who are you? Who is the real I'dWayne, Michael Carter Jr. Okay. Do you like to portray yourself as. I just answered that and said that. I don't like to portray myself as nobody. Okay. I completely be DWAYNE Michael Carter Jr. I don't portray myself as anything and image is self described. Well, you have to wait till I'm done with the question. I don't have to wait to anything. Honestly, I. I mean, this guy right here may tell me that I have to wait, but personally I don't have to do nothing. Go ahead, ask the question. Thank you, your honor. Do you like to can't save you. Right in the real world. That guy right there. He can't save you in the real world. Just so you know, what does that mean? I don't have to elaborate. That's your next question? Is that a threat against. No. Mr. Can you just ask your next question, please? He can't save you. And what does that mean? I was talking to myself. Do you recall that any criminal actions were pending against you at the end of 2008? I don't recall any. Do you recall being at all concerned about any criminal actions that may have been pending against you at the end of 2008? I dont recall. Do you recall that in the summer of 2007 you were arrested in New York City following a performance at the Beacon Theater? I don't recall that. Do you recall that police in New York City discovered a.40 caliber pistol on you, on your person? I don't recall that either. Do you recall that in late 2009 you pleaded guilty to attempted criminal possession of a weapon? I don't recall that yet. Did you serve any time in jail following the end of 2009? I don't know. Didn't you serve about eight months at Rikers island in 2010? I don't know. Do you remember being arrested in or about January 2008 near Yuma, Arizona? No, I don't remember that. Do you remember being charged in early 2008 with possession of narcotics for sale, possession of dangerous drugs, misconduct involving weapons, and possession of drug paraphernalia? No, I don't call that. Well, how much longer is this line of question going to go on? Not much longer. All right, go ahead. I don't know. Didn't you win I don't know the award for best rap Album of the year in 2008 for the Carter 3? I don't know. And Mr. Carter, you have to wait until the attorney has finished asking the question, please. I. Im sorry. Thats my psychic. Im sorry.",
      "words": 748,
      "utterances": [
        {
          "speaker": "MLK",
          "text": "Clearly Lil Wayne answers to no one.",
          "start": 1975,
          "end": 4835,
          "confidence": 0.98533857,
          "words": [
            {
              "text": "Clearly",
              "start": 1975,
              "end": 2399,
              "confidence": 0.9963,
              "speaker": "MLK"
            },
            {
              "text": "Lil",
              "start": 2487,
              "end": 2783,
              "confidence": 0.95005,
              "speaker": "MLK"
            },
            {
              "text": "Wayne",
              "start": 2839,
              "end": 3175,
              "confidence": 0.96141,
              "speaker": "MLK"
            },
            {
              "text": "answers",
              "start": 3255,
              "end": 3751,
              "confidence": 0.99528,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 3823,
              "end": 4007,
              "confidence": 0.99852,
              "speaker": "MLK"
            },
            {
              "text": "no",
              "start": 4031,
              "end": 4215,
              "confidence": 0.9991,
              "speaker": "MLK"
            },
            {
              "text": "one.",
              "start": 4255,
              "end": 4835,
              "confidence": 0.99671,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Is that an interview that you actually gave with Katie Courig?",
          "start": 6655,
          "end": 11675,
          "confidence": 0.93744093,
          "words": [
            {
              "text": "Is",
              "start": 6655,
              "end": 6991,
              "confidence": 0.999,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 7023,
              "end": 7215,
              "confidence": 0.99788,
              "speaker": "MLK"
            },
            {
              "text": "an",
              "start": 7255,
              "end": 7551,
              "confidence": 0.89274,
              "speaker": "MLK"
            },
            {
              "text": "interview",
              "start": 7623,
              "end": 8023,
              "confidence": 0.99955,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 8079,
              "end": 8271,
              "confidence": 0.98865,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 8303,
              "end": 8591,
              "confidence": 0.99953,
              "speaker": "MLK"
            },
            {
              "text": "actually",
              "start": 8663,
              "end": 9015,
              "confidence": 0.99859,
              "speaker": "MLK"
            },
            {
              "text": "gave",
              "start": 9095,
              "end": 9715,
              "confidence": 0.99923,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 10015,
              "end": 10495,
              "confidence": 0.99897,
              "speaker": "MLK"
            },
            {
              "text": "Katie",
              "start": 10575,
              "end": 10935,
              "confidence": 0.67281,
              "speaker": "MLK"
            },
            {
              "text": "Courig?",
              "start": 10975,
              "end": 11675,
              "confidence": 0.7649,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Is that an interview that I actually gave with Katie Coury?",
          "start": 12495,
          "end": 14975,
          "confidence": 0.8852127,
          "words": [
            {
              "text": "Is",
              "start": 12495,
              "end": 12783,
              "confidence": 0.9916,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 12799,
              "end": 12927,
              "confidence": 0.95526,
              "speaker": "MLK"
            },
            {
              "text": "an",
              "start": 12951,
              "end": 13135,
              "confidence": 0.99205,
              "speaker": "MLK"
            },
            {
              "text": "interview",
              "start": 13175,
              "end": 13431,
              "confidence": 0.99774,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 13463,
              "end": 13583,
              "confidence": 0.98669,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 13599,
              "end": 13799,
              "confidence": 0.99647,
              "speaker": "MLK"
            },
            {
              "text": "actually",
              "start": 13847,
              "end": 14079,
              "confidence": 0.99627,
              "speaker": "MLK"
            },
            {
              "text": "gave",
              "start": 14127,
              "end": 14287,
              "confidence": 0.99857,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 14311,
              "end": 14447,
              "confidence": 0.96926,
              "speaker": "MLK"
            },
            {
              "text": "Katie",
              "start": 14471,
              "end": 14687,
              "confidence": 0.64915,
              "speaker": "MLK"
            },
            {
              "text": "Coury?",
              "start": 14711,
              "end": 14975,
              "confidence": 0.20428,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Yeah.",
          "start": 15015,
          "end": 15487,
          "confidence": 0.53392,
          "words": [
            {
              "text": "Yeah.",
              "start": 15015,
              "end": 15487,
              "confidence": 0.53392,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "What's your name?",
          "start": 15591,
          "end": 16555,
          "confidence": 0.8328533,
          "words": [
            {
              "text": "What's",
              "start": 15591,
              "end": 15823,
              "confidence": 0.54719,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 15839,
              "end": 15967,
              "confidence": 0.96401,
              "speaker": "MLK"
            },
            {
              "text": "name?",
              "start": 15991,
              "end": 16555,
              "confidence": 0.98736,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Well, that's not the question. Name pet.",
          "start": 18615,
          "end": 21495,
          "confidence": 0.8640029,
          "words": [
            {
              "text": "Well,",
              "start": 18615,
              "end": 19143,
              "confidence": 0.97279,
              "speaker": "MLK"
            },
            {
              "text": "that's",
              "start": 19239,
              "end": 19575,
              "confidence": 0.99266,
              "speaker": "MLK"
            },
            {
              "text": "not",
              "start": 19615,
              "end": 19863,
              "confidence": 0.9995,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 19919,
              "end": 20135,
              "confidence": 0.99852,
              "speaker": "MLK"
            },
            {
              "text": "question.",
              "start": 20175,
              "end": 20759,
              "confidence": 0.99883,
              "speaker": "MLK"
            },
            {
              "text": "Name",
              "start": 20927,
              "end": 21255,
              "confidence": 0.70893,
              "speaker": "MLK"
            },
            {
              "text": "pet.",
              "start": 21295,
              "end": 21495,
              "confidence": 0.37679,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Ross. Hu.",
          "start": 21535,
          "end": 22423,
          "confidence": 0.69669,
          "words": [
            {
              "text": "Ross.",
              "start": 21535,
              "end": 21975,
              "confidence": 0.87128,
              "speaker": "MLK"
            },
            {
              "text": "Hu.",
              "start": 22095,
              "end": 22423,
              "confidence": 0.5221,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Pete Ross.",
          "start": 22479,
          "end": 23111,
          "confidence": 0.933025,
          "words": [
            {
              "text": "Pete",
              "start": 22479,
              "end": 22743,
              "confidence": 0.9089,
              "speaker": "MLK"
            },
            {
              "text": "Ross.",
              "start": 22799,
              "end": 23111,
              "confidence": 0.95715,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Pete Ross. That's a stupid ass question. You just saw me on there, G. An interview with her.",
          "start": 23183,
          "end": 28195,
          "confidence": 0.8720128,
          "words": [
            {
              "text": "Pete",
              "start": 23183,
              "end": 23367,
              "confidence": 0.79489,
              "speaker": "MLK"
            },
            {
              "text": "Ross.",
              "start": 23391,
              "end": 23791,
              "confidence": 0.7874,
              "speaker": "MLK"
            },
            {
              "text": "That's",
              "start": 23903,
              "end": 24183,
              "confidence": 0.96335,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 24199,
              "end": 24399,
              "confidence": 0.99483,
              "speaker": "MLK"
            },
            {
              "text": "stupid",
              "start": 24447,
              "end": 24751,
              "confidence": 0.99886,
              "speaker": "MLK"
            },
            {
              "text": "ass",
              "start": 24783,
              "end": 24999,
              "confidence": 0.86479,
              "speaker": "MLK"
            },
            {
              "text": "question.",
              "start": 25047,
              "end": 25651,
              "confidence": 0.99928,
              "speaker": "MLK"
            },
            {
              "text": "You",
              "start": 25823,
              "end": 26083,
              "confidence": 0.97734,
              "speaker": "MLK"
            },
            {
              "text": "just",
              "start": 26099,
              "end": 26251,
              "confidence": 0.99273,
              "speaker": "MLK"
            },
            {
              "text": "saw",
              "start": 26283,
              "end": 26427,
              "confidence": 0.98985,
              "speaker": "MLK"
            },
            {
              "text": "me",
              "start": 26451,
              "end": 26587,
              "confidence": 0.78558,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 26611,
              "end": 26747,
              "confidence": 0.67763,
              "speaker": "MLK"
            },
            {
              "text": "there,",
              "start": 26771,
              "end": 26931,
              "confidence": 0.29967,
              "speaker": "MLK"
            },
            {
              "text": "G.",
              "start": 26963,
              "end": 27155,
              "confidence": 0.80127,
              "speaker": "MLK"
            },
            {
              "text": "An",
              "start": 27195,
              "end": 27395,
              "confidence": 0.80667,
              "speaker": "MLK"
            },
            {
              "text": "interview",
              "start": 27435,
              "end": 27715,
              "confidence": 0.99911,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 27755,
              "end": 27883,
              "confidence": 0.99475,
              "speaker": "MLK"
            },
            {
              "text": "her.",
              "start": 27899,
              "end": 28195,
              "confidence": 0.96823,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Okay, so that was you. Did you perform at the Virgin Mobile Music Fest in 2008 with Kanye West?",
          "start": 28275,
          "end": 38375,
          "confidence": 0.9747005,
          "words": [
            {
              "text": "Okay,",
              "start": 28275,
              "end": 29091,
              "confidence": 0.66173,
              "speaker": "MLK"
            },
            {
              "text": "so",
              "start": 29283,
              "end": 29611,
              "confidence": 0.99658,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 29643,
              "end": 29835,
              "confidence": 0.99984,
              "speaker": "MLK"
            },
            {
              "text": "was",
              "start": 29875,
              "end": 30075,
              "confidence": 0.9994,
              "speaker": "MLK"
            },
            {
              "text": "you.",
              "start": 30115,
              "end": 30695,
              "confidence": 0.99779,
              "speaker": "MLK"
            },
            {
              "text": "Did",
              "start": 31635,
              "end": 31971,
              "confidence": 0.99971,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 32003,
              "end": 32387,
              "confidence": 0.99972,
              "speaker": "MLK"
            },
            {
              "text": "perform",
              "start": 32491,
              "end": 32755,
              "confidence": 0.99971,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 32795,
              "end": 33019,
              "confidence": 0.9992,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 33067,
              "end": 33419,
              "confidence": 0.99886,
              "speaker": "MLK"
            },
            {
              "text": "Virgin",
              "start": 33507,
              "end": 34083,
              "confidence": 0.99945,
              "speaker": "MLK"
            },
            {
              "text": "Mobile",
              "start": 34179,
              "end": 34795,
              "confidence": 0.97877,
              "speaker": "MLK"
            },
            {
              "text": "Music",
              "start": 34915,
              "end": 35219,
              "confidence": 0.99877,
              "speaker": "MLK"
            },
            {
              "text": "Fest",
              "start": 35267,
              "end": 35619,
              "confidence": 0.96695,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 35707,
              "end": 35955,
              "confidence": 0.99967,
              "speaker": "MLK"
            },
            {
              "text": "2008",
              "start": 35995,
              "end": 36843,
              "confidence": 0.99973,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 36899,
              "end": 37139,
              "confidence": 0.99914,
              "speaker": "MLK"
            },
            {
              "text": "Kanye",
              "start": 37187,
              "end": 37691,
              "confidence": 0.9253,
              "speaker": "MLK"
            },
            {
              "text": "West?",
              "start": 37763,
              "end": 38375,
              "confidence": 0.99899,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't know. But I know I did perform at this badass bitch birthday party recently. She was crazy stupid thick.",
          "start": 40515,
          "end": 51359,
          "confidence": 0.9534819,
          "words": [
            {
              "text": "I",
              "start": 40515,
              "end": 40779,
              "confidence": 0.999,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 40787,
              "end": 41019,
              "confidence": 0.95895,
              "speaker": "MLK"
            },
            {
              "text": "know.",
              "start": 41067,
              "end": 41611,
              "confidence": 0.99809,
              "speaker": "MLK"
            },
            {
              "text": "But",
              "start": 41763,
              "end": 42027,
              "confidence": 0.99621,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 42051,
              "end": 42211,
              "confidence": 0.99779,
              "speaker": "MLK"
            },
            {
              "text": "know",
              "start": 42243,
              "end": 42435,
              "confidence": 0.99696,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 42475,
              "end": 42867,
              "confidence": 0.9984,
              "speaker": "MLK"
            },
            {
              "text": "did",
              "start": 42971,
              "end": 43475,
              "confidence": 0.94427,
              "speaker": "MLK"
            },
            {
              "text": "perform",
              "start": 43595,
              "end": 44163,
              "confidence": 0.9988,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 44299,
              "end": 44643,
              "confidence": 0.99402,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 44699,
              "end": 45227,
              "confidence": 0.98291,
              "speaker": "MLK"
            },
            {
              "text": "badass",
              "start": 45371,
              "end": 46139,
              "confidence": 0.57793,
              "speaker": "MLK"
            },
            {
              "text": "bitch",
              "start": 46227,
              "end": 46547,
              "confidence": 0.72504,
              "speaker": "MLK"
            },
            {
              "text": "birthday",
              "start": 46611,
              "end": 47067,
              "confidence": 0.99603,
              "speaker": "MLK"
            },
            {
              "text": "party",
              "start": 47131,
              "end": 47547,
              "confidence": 0.99512,
              "speaker": "MLK"
            },
            {
              "text": "recently.",
              "start": 47651,
              "end": 48295,
              "confidence": 0.99875,
              "speaker": "MLK"
            },
            {
              "text": "She",
              "start": 48595,
              "end": 48931,
              "confidence": 0.99787,
              "speaker": "MLK"
            },
            {
              "text": "was",
              "start": 48963,
              "end": 49419,
              "confidence": 0.9947,
              "speaker": "MLK"
            },
            {
              "text": "crazy",
              "start": 49547,
              "end": 50235,
              "confidence": 0.9948,
              "speaker": "MLK"
            },
            {
              "text": "stupid",
              "start": 50355,
              "end": 50795,
              "confidence": 0.99514,
              "speaker": "MLK"
            },
            {
              "text": "thick.",
              "start": 50835,
              "end": 51359,
              "confidence": 0.88234,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Isn't it something that you would remember if your album the Carter 3 was the biggest selling album of the year in 2008?",
          "start": 51507,
          "end": 60155,
          "confidence": 0.9636361,
          "words": [
            {
              "text": "Isn't",
              "start": 51507,
              "end": 51887,
              "confidence": 0.89661,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 51911,
              "end": 52215,
              "confidence": 0.97429,
              "speaker": "MLK"
            },
            {
              "text": "something",
              "start": 52295,
              "end": 52511,
              "confidence": 0.99915,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 52543,
              "end": 52735,
              "confidence": 0.97889,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 52775,
              "end": 52927,
              "confidence": 0.99925,
              "speaker": "MLK"
            },
            {
              "text": "would",
              "start": 52951,
              "end": 53279,
              "confidence": 0.99704,
              "speaker": "MLK"
            },
            {
              "text": "remember",
              "start": 53367,
              "end": 53879,
              "confidence": 0.99908,
              "speaker": "MLK"
            },
            {
              "text": "if",
              "start": 53967,
              "end": 54407,
              "confidence": 0.99505,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 54511,
              "end": 54823,
              "confidence": 0.98663,
              "speaker": "MLK"
            },
            {
              "text": "album",
              "start": 54879,
              "end": 55327,
              "confidence": 0.83069,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 55391,
              "end": 55615,
              "confidence": 0.97609,
              "speaker": "MLK"
            },
            {
              "text": "Carter",
              "start": 55655,
              "end": 56135,
              "confidence": 0.97056,
              "speaker": "MLK"
            },
            {
              "text": "3",
              "start": 56215,
              "end": 56551,
              "confidence": 0.81827,
              "speaker": "MLK"
            },
            {
              "text": "was",
              "start": 56623,
              "end": 56855,
              "confidence": 0.99743,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 56895,
              "end": 57047,
              "confidence": 0.99875,
              "speaker": "MLK"
            },
            {
              "text": "biggest",
              "start": 57071,
              "end": 57375,
              "confidence": 0.99871,
              "speaker": "MLK"
            },
            {
              "text": "selling",
              "start": 57415,
              "end": 57759,
              "confidence": 0.98966,
              "speaker": "MLK"
            },
            {
              "text": "album",
              "start": 57807,
              "end": 58175,
              "confidence": 0.79976,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 58215,
              "end": 58343,
              "confidence": 0.99148,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 58359,
              "end": 58487,
              "confidence": 0.99763,
              "speaker": "MLK"
            },
            {
              "text": "year",
              "start": 58511,
              "end": 58671,
              "confidence": 0.99892,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 58703,
              "end": 58895,
              "confidence": 0.97883,
              "speaker": "MLK"
            },
            {
              "text": "2008?",
              "start": 58935,
              "end": 60155,
              "confidence": 0.99086,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Isn't it something that I would remember that?",
          "start": 61335,
          "end": 64551,
          "confidence": 0.9584625,
          "words": [
            {
              "text": "Isn't",
              "start": 61335,
              "end": 61791,
              "confidence": 0.88345,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 61823,
              "end": 62207,
              "confidence": 0.81638,
              "speaker": "MLK"
            },
            {
              "text": "something",
              "start": 62311,
              "end": 62623,
              "confidence": 0.99544,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 62679,
              "end": 62967,
              "confidence": 0.9907,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 63031,
              "end": 63279,
              "confidence": 0.99909,
              "speaker": "MLK"
            },
            {
              "text": "would",
              "start": 63327,
              "end": 63751,
              "confidence": 0.998,
              "speaker": "MLK"
            },
            {
              "text": "remember",
              "start": 63863,
              "end": 64215,
              "confidence": 0.9989,
              "speaker": "MLK"
            },
            {
              "text": "that?",
              "start": 64255,
              "end": 64551,
              "confidence": 0.98574,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Yes.",
          "start": 64623,
          "end": 65235,
          "confidence": 0.72203,
          "words": [
            {
              "text": "Yes.",
              "start": 64623,
              "end": 65235,
              "confidence": 0.72203,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Isn't that a personal opinion type question? That's why I got that. I mean, because I would be actually answering the question to. Isn't it something. That's my question. Isn't it something that you would remember? Isn't it something. That's the question I have to answer. Your honor.",
          "start": 66215,
          "end": 82977,
          "confidence": 0.9058058,
          "words": [
            {
              "text": "Isn't",
              "start": 66215,
              "end": 66671,
              "confidence": 0.89954,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 66703,
              "end": 66871,
              "confidence": 0.99539,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 66903,
              "end": 67119,
              "confidence": 0.99639,
              "speaker": "MLK"
            },
            {
              "text": "personal",
              "start": 67167,
              "end": 67543,
              "confidence": 0.99983,
              "speaker": "MLK"
            },
            {
              "text": "opinion",
              "start": 67639,
              "end": 68223,
              "confidence": 0.96812,
              "speaker": "MLK"
            },
            {
              "text": "type",
              "start": 68279,
              "end": 68583,
              "confidence": 0.99518,
              "speaker": "MLK"
            },
            {
              "text": "question?",
              "start": 68639,
              "end": 69235,
              "confidence": 0.99857,
              "speaker": "MLK"
            },
            {
              "text": "That's",
              "start": 70775,
              "end": 71079,
              "confidence": 0.24375,
              "speaker": "MLK"
            },
            {
              "text": "why",
              "start": 71087,
              "end": 71183,
              "confidence": 0.52337,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 71199,
              "end": 71327,
              "confidence": 0.97552,
              "speaker": "MLK"
            },
            {
              "text": "got",
              "start": 71351,
              "end": 71463,
              "confidence": 0.95677,
              "speaker": "MLK"
            },
            {
              "text": "that.",
              "start": 71479,
              "end": 71727,
              "confidence": 0.56232,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 71791,
              "end": 71943,
              "confidence": 0.9063,
              "speaker": "MLK"
            },
            {
              "text": "mean,",
              "start": 71959,
              "end": 72111,
              "confidence": 0.88428,
              "speaker": "MLK"
            },
            {
              "text": "because",
              "start": 72143,
              "end": 72263,
              "confidence": 0.54822,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 72279,
              "end": 72383,
              "confidence": 0.96025,
              "speaker": "MLK"
            },
            {
              "text": "would",
              "start": 72399,
              "end": 72527,
              "confidence": 0.92383,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 72551,
              "end": 72807,
              "confidence": 0.99463,
              "speaker": "MLK"
            },
            {
              "text": "actually",
              "start": 72871,
              "end": 73167,
              "confidence": 0.99009,
              "speaker": "MLK"
            },
            {
              "text": "answering",
              "start": 73231,
              "end": 73631,
              "confidence": 0.96392,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 73663,
              "end": 73831,
              "confidence": 0.88525,
              "speaker": "MLK"
            },
            {
              "text": "question",
              "start": 73863,
              "end": 74103,
              "confidence": 0.99801,
              "speaker": "MLK"
            },
            {
              "text": "to.",
              "start": 74159,
              "end": 74399,
              "confidence": 0.7769,
              "speaker": "MLK"
            },
            {
              "text": "Isn't",
              "start": 74447,
              "end": 74703,
              "confidence": 0.82266,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 74719,
              "end": 75039,
              "confidence": 0.98842,
              "speaker": "MLK"
            },
            {
              "text": "something.",
              "start": 75127,
              "end": 75711,
              "confidence": 0.99928,
              "speaker": "MLK"
            },
            {
              "text": "That's",
              "start": 75863,
              "end": 76231,
              "confidence": 0.89894,
              "speaker": "MLK"
            },
            {
              "text": "my",
              "start": 76263,
              "end": 76407,
              "confidence": 0.99926,
              "speaker": "MLK"
            },
            {
              "text": "question.",
              "start": 76431,
              "end": 76687,
              "confidence": 0.99699,
              "speaker": "MLK"
            },
            {
              "text": "Isn't",
              "start": 76751,
              "end": 77023,
              "confidence": 0.82039,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 77039,
              "end": 77359,
              "confidence": 0.98387,
              "speaker": "MLK"
            },
            {
              "text": "something",
              "start": 77447,
              "end": 77839,
              "confidence": 0.99779,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 77927,
              "end": 78127,
              "confidence": 0.98793,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 78151,
              "end": 78263,
              "confidence": 0.99874,
              "speaker": "MLK"
            },
            {
              "text": "would",
              "start": 78279,
              "end": 78551,
              "confidence": 0.9973,
              "speaker": "MLK"
            },
            {
              "text": "remember?",
              "start": 78623,
              "end": 79315,
              "confidence": 0.99824,
              "speaker": "MLK"
            },
            {
              "text": "Isn't",
              "start": 79745,
              "end": 80177,
              "confidence": 0.77294,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 80201,
              "end": 80505,
              "confidence": 0.96225,
              "speaker": "MLK"
            },
            {
              "text": "something.",
              "start": 80585,
              "end": 81017,
              "confidence": 0.99761,
              "speaker": "MLK"
            },
            {
              "text": "That's",
              "start": 81121,
              "end": 81417,
              "confidence": 0.82875,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 81441,
              "end": 81577,
              "confidence": 0.98192,
              "speaker": "MLK"
            },
            {
              "text": "question",
              "start": 81601,
              "end": 81761,
              "confidence": 0.99961,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 81793,
              "end": 81913,
              "confidence": 0.98611,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 81929,
              "end": 82033,
              "confidence": 0.99679,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 82049,
              "end": 82153,
              "confidence": 0.99601,
              "speaker": "MLK"
            },
            {
              "text": "answer.",
              "start": 82169,
              "end": 82377,
              "confidence": 0.9535,
              "speaker": "MLK"
            },
            {
              "text": "Your",
              "start": 82401,
              "end": 82513,
              "confidence": 0.9573,
              "speaker": "MLK"
            },
            {
              "text": "honor.",
              "start": 82529,
              "end": 82977,
              "confidence": 0.60965,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Go ahead.",
          "start": 83081,
          "end": 83377,
          "confidence": 0.6447,
          "words": [
            {
              "text": "Go",
              "start": 83081,
              "end": 83249,
              "confidence": 0.72681,
              "speaker": "MLK"
            },
            {
              "text": "ahead.",
              "start": 83257,
              "end": 83377,
              "confidence": 0.56259,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Isn't it something.",
          "start": 83401,
          "end": 84605,
          "confidence": 0.91972,
          "words": [
            {
              "text": "Isn't",
              "start": 83401,
              "end": 83593,
              "confidence": 0.77581,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 83609,
              "end": 83905,
              "confidence": 0.98514,
              "speaker": "MLK"
            },
            {
              "text": "something.",
              "start": 83985,
              "end": 84605,
              "confidence": 0.99821,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Do the best trying to answer it.",
          "start": 85505,
          "end": 87325,
          "confidence": 0.9759757,
          "words": [
            {
              "text": "Do",
              "start": 85505,
              "end": 85793,
              "confidence": 0.99573,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 85809,
              "end": 85937,
              "confidence": 0.99742,
              "speaker": "MLK"
            },
            {
              "text": "best",
              "start": 85961,
              "end": 86169,
              "confidence": 0.9993,
              "speaker": "MLK"
            },
            {
              "text": "trying",
              "start": 86217,
              "end": 86353,
              "confidence": 0.85274,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 86369,
              "end": 86473,
              "confidence": 0.99164,
              "speaker": "MLK"
            },
            {
              "text": "answer",
              "start": 86489,
              "end": 86737,
              "confidence": 0.99859,
              "speaker": "MLK"
            },
            {
              "text": "it.",
              "start": 86761,
              "end": 87325,
              "confidence": 0.99641,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Yes. Something out of youres. That's myswer. Yeah, it is something out of your ass.",
          "start": 89345,
          "end": 96561,
          "confidence": 0.83575267,
          "words": [
            {
              "text": "Yes.",
              "start": 89345,
              "end": 89921,
              "confidence": 0.58458,
              "speaker": "MLK"
            },
            {
              "text": "Something",
              "start": 90033,
              "end": 90281,
              "confidence": 0.97378,
              "speaker": "MLK"
            },
            {
              "text": "out",
              "start": 90313,
              "end": 90433,
              "confidence": 0.96931,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 90449,
              "end": 90553,
              "confidence": 0.82842,
              "speaker": "MLK"
            },
            {
              "text": "youres.",
              "start": 90569,
              "end": 91125,
              "confidence": 0.29438,
              "speaker": "MLK"
            },
            {
              "text": "That's",
              "start": 92465,
              "end": 92817,
              "confidence": 0.78724,
              "speaker": "MLK"
            },
            {
              "text": "myswer.",
              "start": 92841,
              "end": 93565,
              "confidence": 0.48487,
              "speaker": "MLK"
            },
            {
              "text": "Yeah,",
              "start": 94545,
              "end": 94897,
              "confidence": 0.7571,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 94921,
              "end": 95057,
              "confidence": 0.99056,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 95081,
              "end": 95313,
              "confidence": 0.98643,
              "speaker": "MLK"
            },
            {
              "text": "something",
              "start": 95369,
              "end": 95585,
              "confidence": 0.99573,
              "speaker": "MLK"
            },
            {
              "text": "out",
              "start": 95625,
              "end": 95753,
              "confidence": 0.98806,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 95769,
              "end": 95897,
              "confidence": 0.98076,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 95921,
              "end": 96105,
              "confidence": 0.9862,
              "speaker": "MLK"
            },
            {
              "text": "ass.",
              "start": 96145,
              "end": 96561,
              "confidence": 0.92887,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Have you ever hired a photographer to photograph an event?",
          "start": 96673,
          "end": 101445,
          "confidence": 0.987979,
          "words": [
            {
              "text": "Have",
              "start": 96673,
              "end": 96849,
              "confidence": 0.91973,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 96857,
              "end": 97001,
              "confidence": 0.98427,
              "speaker": "MLK"
            },
            {
              "text": "ever",
              "start": 97033,
              "end": 97225,
              "confidence": 0.9973,
              "speaker": "MLK"
            },
            {
              "text": "hired",
              "start": 97265,
              "end": 97537,
              "confidence": 0.99954,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 97601,
              "end": 97993,
              "confidence": 0.99786,
              "speaker": "MLK"
            },
            {
              "text": "photographer",
              "start": 98089,
              "end": 99017,
              "confidence": 0.99927,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 99081,
              "end": 99713,
              "confidence": 0.99848,
              "speaker": "MLK"
            },
            {
              "text": "photograph",
              "start": 99889,
              "end": 100529,
              "confidence": 0.99912,
              "speaker": "MLK"
            },
            {
              "text": "an",
              "start": 100577,
              "end": 100809,
              "confidence": 0.99836,
              "speaker": "MLK"
            },
            {
              "text": "event?",
              "start": 100857,
              "end": 101445,
              "confidence": 0.98586,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Have I ever hired a photographer? The photograph. Sorry, sir, no. I'm a superstar. People hire them themselves to photograph me. We don't hire them.",
          "start": 102185,
          "end": 111725,
          "confidence": 0.9182788,
          "words": [
            {
              "text": "Have",
              "start": 102185,
              "end": 102473,
              "confidence": 0.99459,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 102489,
              "end": 102641,
              "confidence": 0.97316,
              "speaker": "MLK"
            },
            {
              "text": "ever",
              "start": 102673,
              "end": 102817,
              "confidence": 0.9948,
              "speaker": "MLK"
            },
            {
              "text": "hired",
              "start": 102841,
              "end": 103001,
              "confidence": 0.99749,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 103033,
              "end": 103153,
              "confidence": 0.99511,
              "speaker": "MLK"
            },
            {
              "text": "photographer?",
              "start": 103169,
              "end": 103617,
              "confidence": 0.7908,
              "speaker": "MLK"
            },
            {
              "text": "The",
              "start": 103641,
              "end": 103753,
              "confidence": 0.95607,
              "speaker": "MLK"
            },
            {
              "text": "photograph.",
              "start": 103769,
              "end": 104565,
              "confidence": 0.97492,
              "speaker": "MLK"
            },
            {
              "text": "Sorry,",
              "start": 104865,
              "end": 105369,
              "confidence": 0.66748,
              "speaker": "MLK"
            },
            {
              "text": "sir,",
              "start": 105417,
              "end": 105625,
              "confidence": 0.39362,
              "speaker": "MLK"
            },
            {
              "text": "no.",
              "start": 105665,
              "end": 105841,
              "confidence": 0.96519,
              "speaker": "MLK"
            },
            {
              "text": "I'm",
              "start": 105873,
              "end": 106033,
              "confidence": 0.9323,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 106049,
              "end": 106297,
              "confidence": 0.99605,
              "speaker": "MLK"
            },
            {
              "text": "superstar.",
              "start": 106361,
              "end": 106881,
              "confidence": 0.93307,
              "speaker": "MLK"
            },
            {
              "text": "People",
              "start": 106953,
              "end": 107233,
              "confidence": 0.9987,
              "speaker": "MLK"
            },
            {
              "text": "hire",
              "start": 107289,
              "end": 107529,
              "confidence": 0.5402,
              "speaker": "MLK"
            },
            {
              "text": "them",
              "start": 107577,
              "end": 107785,
              "confidence": 0.98553,
              "speaker": "MLK"
            },
            {
              "text": "themselves",
              "start": 107825,
              "end": 108321,
              "confidence": 0.91025,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 108393,
              "end": 108577,
              "confidence": 0.9994,
              "speaker": "MLK"
            },
            {
              "text": "photograph",
              "start": 108601,
              "end": 109089,
              "confidence": 0.99937,
              "speaker": "MLK"
            },
            {
              "text": "me.",
              "start": 109137,
              "end": 109725,
              "confidence": 0.9982,
              "speaker": "MLK"
            },
            {
              "text": "We",
              "start": 110305,
              "end": 110593,
              "confidence": 0.99802,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 110609,
              "end": 110825,
              "confidence": 0.97515,
              "speaker": "MLK"
            },
            {
              "text": "hire",
              "start": 110865,
              "end": 111089,
              "confidence": 0.99025,
              "speaker": "MLK"
            },
            {
              "text": "them.",
              "start": 111137,
              "end": 111725,
              "confidence": 0.99725,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "How would you describe your image in the media?",
          "start": 112585,
          "end": 115805,
          "confidence": 0.9984911,
          "words": [
            {
              "text": "How",
              "start": 112585,
              "end": 112897,
              "confidence": 0.99973,
              "speaker": "MLK"
            },
            {
              "text": "would",
              "start": 112921,
              "end": 113057,
              "confidence": 0.99802,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 113081,
              "end": 113289,
              "confidence": 0.99874,
              "speaker": "MLK"
            },
            {
              "text": "describe",
              "start": 113337,
              "end": 113841,
              "confidence": 0.99876,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 113913,
              "end": 114193,
              "confidence": 0.99904,
              "speaker": "MLK"
            },
            {
              "text": "image",
              "start": 114249,
              "end": 114593,
              "confidence": 0.99928,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 114649,
              "end": 114817,
              "confidence": 0.99492,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 114841,
              "end": 115121,
              "confidence": 0.99895,
              "speaker": "MLK"
            },
            {
              "text": "media?",
              "start": 115193,
              "end": 115805,
              "confidence": 0.99898,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "How would I describe my image in the media?",
          "start": 116785,
          "end": 119177,
          "confidence": 0.9953855,
          "words": [
            {
              "text": "How",
              "start": 116785,
              "end": 117073,
              "confidence": 0.9992,
              "speaker": "MLK"
            },
            {
              "text": "would",
              "start": 117089,
              "end": 117217,
              "confidence": 0.99711,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 117241,
              "end": 117401,
              "confidence": 0.99778,
              "speaker": "MLK"
            },
            {
              "text": "describe",
              "start": 117433,
              "end": 117809,
              "confidence": 0.9979,
              "speaker": "MLK"
            },
            {
              "text": "my",
              "start": 117857,
              "end": 118065,
              "confidence": 0.9944,
              "speaker": "MLK"
            },
            {
              "text": "image",
              "start": 118105,
              "end": 118385,
              "confidence": 0.99728,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 118425,
              "end": 118577,
              "confidence": 0.97928,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 118601,
              "end": 118833,
              "confidence": 0.99799,
              "speaker": "MLK"
            },
            {
              "text": "media?",
              "start": 118889,
              "end": 119177,
              "confidence": 0.99753,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Yes.",
          "start": 119241,
          "end": 119657,
          "confidence": 0.77837,
          "words": [
            {
              "text": "Yes.",
              "start": 119241,
              "end": 119657,
              "confidence": 0.77837,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I wouldn't describe it.",
          "start": 119761,
          "end": 121365,
          "confidence": 0.9939175,
          "words": [
            {
              "text": "I",
              "start": 119761,
              "end": 119953,
              "confidence": 0.99823,
              "speaker": "MLK"
            },
            {
              "text": "wouldn't",
              "start": 119969,
              "end": 120329,
              "confidence": 0.97877,
              "speaker": "MLK"
            },
            {
              "text": "describe",
              "start": 120377,
              "end": 120761,
              "confidence": 0.99935,
              "speaker": "MLK"
            },
            {
              "text": "it.",
              "start": 120793,
              "end": 121365,
              "confidence": 0.99932,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Well, how would you describe it if you had to?",
          "start": 123505,
          "end": 126097,
          "confidence": 0.997001,
          "words": [
            {
              "text": "Well,",
              "start": 123505,
              "end": 123865,
              "confidence": 0.97861,
              "speaker": "MLK"
            },
            {
              "text": "how",
              "start": 123905,
              "end": 124081,
              "confidence": 0.99945,
              "speaker": "MLK"
            },
            {
              "text": "would",
              "start": 124113,
              "end": 124281,
              "confidence": 0.99951,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 124313,
              "end": 124505,
              "confidence": 0.99917,
              "speaker": "MLK"
            },
            {
              "text": "describe",
              "start": 124545,
              "end": 124945,
              "confidence": 0.99876,
              "speaker": "MLK"
            },
            {
              "text": "it",
              "start": 124985,
              "end": 125137,
              "confidence": 0.99838,
              "speaker": "MLK"
            },
            {
              "text": "if",
              "start": 125161,
              "end": 125273,
              "confidence": 0.99983,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 125289,
              "end": 125417,
              "confidence": 0.99918,
              "speaker": "MLK"
            },
            {
              "text": "had",
              "start": 125441,
              "end": 125649,
              "confidence": 0.9988,
              "speaker": "MLK"
            },
            {
              "text": "to?",
              "start": 125697,
              "end": 126097,
              "confidence": 0.99832,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't have to.",
          "start": 126201,
          "end": 127169,
          "confidence": 0.9898125,
          "words": [
            {
              "text": "I",
              "start": 126201,
              "end": 126369,
              "confidence": 0.99393,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 126377,
              "end": 126561,
              "confidence": 0.9763,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 126593,
              "end": 126785,
              "confidence": 0.99758,
              "speaker": "MLK"
            },
            {
              "text": "to.",
              "start": 126825,
              "end": 127169,
              "confidence": 0.99144,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Well, what image are you portraying in the media?",
          "start": 127257,
          "end": 130161,
          "confidence": 0.97598445,
          "words": [
            {
              "text": "Well,",
              "start": 127257,
              "end": 127481,
              "confidence": 0.95666,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 127513,
              "end": 127657,
              "confidence": 0.99969,
              "speaker": "MLK"
            },
            {
              "text": "image",
              "start": 127681,
              "end": 127969,
              "confidence": 0.99654,
              "speaker": "MLK"
            },
            {
              "text": "are",
              "start": 128017,
              "end": 128225,
              "confidence": 0.99839,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 128265,
              "end": 128537,
              "confidence": 0.99866,
              "speaker": "MLK"
            },
            {
              "text": "portraying",
              "start": 128601,
              "end": 129193,
              "confidence": 0.84129,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 129289,
              "end": 129497,
              "confidence": 0.99799,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 129521,
              "end": 129777,
              "confidence": 0.9992,
              "speaker": "MLK"
            },
            {
              "text": "media?",
              "start": 129841,
              "end": 130161,
              "confidence": 0.99544,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't portray anything. I am who I am. And you guys portray what you get? No.",
          "start": 130233,
          "end": 135385,
          "confidence": 0.9563159,
          "words": [
            {
              "text": "I",
              "start": 130233,
              "end": 130369,
              "confidence": 0.99883,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 130377,
              "end": 130585,
              "confidence": 0.95768,
              "speaker": "MLK"
            },
            {
              "text": "portray",
              "start": 130625,
              "end": 131097,
              "confidence": 0.76056,
              "speaker": "MLK"
            },
            {
              "text": "anything.",
              "start": 131161,
              "end": 131593,
              "confidence": 0.99685,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 131649,
              "end": 131793,
              "confidence": 0.99337,
              "speaker": "MLK"
            },
            {
              "text": "am",
              "start": 131809,
              "end": 131961,
              "confidence": 0.996,
              "speaker": "MLK"
            },
            {
              "text": "who",
              "start": 131993,
              "end": 132137,
              "confidence": 0.99832,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 132161,
              "end": 132321,
              "confidence": 0.99801,
              "speaker": "MLK"
            },
            {
              "text": "am.",
              "start": 132353,
              "end": 132785,
              "confidence": 0.99883,
              "speaker": "MLK"
            },
            {
              "text": "And",
              "start": 132905,
              "end": 133137,
              "confidence": 0.97375,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 133161,
              "end": 133321,
              "confidence": 0.99657,
              "speaker": "MLK"
            },
            {
              "text": "guys",
              "start": 133353,
              "end": 133593,
              "confidence": 0.9969,
              "speaker": "MLK"
            },
            {
              "text": "portray",
              "start": 133649,
              "end": 134025,
              "confidence": 0.99492,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 134065,
              "end": 134217,
              "confidence": 0.99819,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 134241,
              "end": 134401,
              "confidence": 0.99836,
              "speaker": "MLK"
            },
            {
              "text": "get?",
              "start": 134433,
              "end": 134793,
              "confidence": 0.93392,
              "speaker": "MLK"
            },
            {
              "text": "No.",
              "start": 134889,
              "end": 135385,
              "confidence": 0.66631,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Who are you?",
          "start": 135505,
          "end": 136209,
          "confidence": 0.99922335,
          "words": [
            {
              "text": "Who",
              "start": 135505,
              "end": 135737,
              "confidence": 0.99921,
              "speaker": "MLK"
            },
            {
              "text": "are",
              "start": 135761,
              "end": 135945,
              "confidence": 0.99982,
              "speaker": "MLK"
            },
            {
              "text": "you?",
              "start": 135985,
              "end": 136209,
              "confidence": 0.99864,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Who is the real I'dWayne, Michael Carter Jr. Okay.",
          "start": 136257,
          "end": 139889,
          "confidence": 0.8089733,
          "words": [
            {
              "text": "Who",
              "start": 136257,
              "end": 136417,
              "confidence": 0.99795,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 136441,
              "end": 136625,
              "confidence": 0.99167,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 136665,
              "end": 136817,
              "confidence": 0.52722,
              "speaker": "MLK"
            },
            {
              "text": "real",
              "start": 136841,
              "end": 137049,
              "confidence": 0.99483,
              "speaker": "MLK"
            },
            {
              "text": "I'dWayne,",
              "start": 137097,
              "end": 137673,
              "confidence": 0.23658,
              "speaker": "MLK"
            },
            {
              "text": "Michael",
              "start": 137729,
              "end": 138065,
              "confidence": 0.97702,
              "speaker": "MLK"
            },
            {
              "text": "Carter",
              "start": 138105,
              "end": 138401,
              "confidence": 0.98594,
              "speaker": "MLK"
            },
            {
              "text": "Jr.",
              "start": 138433,
              "end": 139025,
              "confidence": 0.98782,
              "speaker": "MLK"
            },
            {
              "text": "Okay.",
              "start": 139145,
              "end": 139889,
              "confidence": 0.58173,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Do you like to portray yourself as.",
          "start": 140057,
          "end": 144449,
          "confidence": 0.9501357,
          "words": [
            {
              "text": "Do",
              "start": 140057,
              "end": 140289,
              "confidence": 0.93358,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 140297,
              "end": 140845,
              "confidence": 0.95742,
              "speaker": "MLK"
            },
            {
              "text": "like",
              "start": 142425,
              "end": 142761,
              "confidence": 0.998,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 142793,
              "end": 142961,
              "confidence": 0.99929,
              "speaker": "MLK"
            },
            {
              "text": "portray",
              "start": 142993,
              "end": 143425,
              "confidence": 0.79289,
              "speaker": "MLK"
            },
            {
              "text": "yourself",
              "start": 143465,
              "end": 144001,
              "confidence": 0.99892,
              "speaker": "MLK"
            },
            {
              "text": "as.",
              "start": 144073,
              "end": 144449,
              "confidence": 0.97085,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I just answered that and said that. I don't like to portray myself as nobody.",
          "start": 144537,
          "end": 148241,
          "confidence": 0.99008,
          "words": [
            {
              "text": "I",
              "start": 144537,
              "end": 144713,
              "confidence": 0.99681,
              "speaker": "MLK"
            },
            {
              "text": "just",
              "start": 144729,
              "end": 144953,
              "confidence": 0.99709,
              "speaker": "MLK"
            },
            {
              "text": "answered",
              "start": 145009,
              "end": 145345,
              "confidence": 0.9691,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 145385,
              "end": 145537,
              "confidence": 0.98606,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 145561,
              "end": 145697,
              "confidence": 0.99457,
              "speaker": "MLK"
            },
            {
              "text": "said",
              "start": 145721,
              "end": 145881,
              "confidence": 0.97842,
              "speaker": "MLK"
            },
            {
              "text": "that.",
              "start": 145913,
              "end": 146057,
              "confidence": 0.9669,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 146081,
              "end": 146169,
              "confidence": 0.9989,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 146177,
              "end": 146337,
              "confidence": 0.99134,
              "speaker": "MLK"
            },
            {
              "text": "like",
              "start": 146361,
              "end": 146521,
              "confidence": 0.99746,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 146553,
              "end": 146697,
              "confidence": 0.99784,
              "speaker": "MLK"
            },
            {
              "text": "portray",
              "start": 146721,
              "end": 147041,
              "confidence": 0.99276,
              "speaker": "MLK"
            },
            {
              "text": "myself",
              "start": 147073,
              "end": 147409,
              "confidence": 0.99898,
              "speaker": "MLK"
            },
            {
              "text": "as",
              "start": 147457,
              "end": 147665,
              "confidence": 0.99894,
              "speaker": "MLK"
            },
            {
              "text": "nobody.",
              "start": 147705,
              "end": 148241,
              "confidence": 0.98603,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Okay.",
          "start": 148313,
          "end": 149081,
          "confidence": 0.3635,
          "words": [
            {
              "text": "Okay.",
              "start": 148313,
              "end": 149081,
              "confidence": 0.3635,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I completely be DWAYNE Michael Carter Jr. I don't portray myself as anything and image is self described.",
          "start": 149273,
          "end": 155865,
          "confidence": 0.9255245,
          "words": [
            {
              "text": "I",
              "start": 149273,
              "end": 149697,
              "confidence": 0.82268,
              "speaker": "MLK"
            },
            {
              "text": "completely",
              "start": 149761,
              "end": 150177,
              "confidence": 0.74769,
              "speaker": "MLK"
            },
            {
              "text": "be",
              "start": 150241,
              "end": 150609,
              "confidence": 0.92649,
              "speaker": "MLK"
            },
            {
              "text": "DWAYNE",
              "start": 150697,
              "end": 151073,
              "confidence": 0.59994,
              "speaker": "MLK"
            },
            {
              "text": "Michael",
              "start": 151129,
              "end": 151465,
              "confidence": 0.97359,
              "speaker": "MLK"
            },
            {
              "text": "Carter",
              "start": 151505,
              "end": 151777,
              "confidence": 0.96957,
              "speaker": "MLK"
            },
            {
              "text": "Jr.",
              "start": 151801,
              "end": 152057,
              "confidence": 0.9884,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 152081,
              "end": 152193,
              "confidence": 0.99654,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 152209,
              "end": 152377,
              "confidence": 0.98836,
              "speaker": "MLK"
            },
            {
              "text": "portray",
              "start": 152401,
              "end": 152745,
              "confidence": 0.96841,
              "speaker": "MLK"
            },
            {
              "text": "myself",
              "start": 152785,
              "end": 153105,
              "confidence": 0.99867,
              "speaker": "MLK"
            },
            {
              "text": "as",
              "start": 153145,
              "end": 153345,
              "confidence": 0.99737,
              "speaker": "MLK"
            },
            {
              "text": "anything",
              "start": 153385,
              "end": 154009,
              "confidence": 0.99748,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 154137,
              "end": 154449,
              "confidence": 0.71502,
              "speaker": "MLK"
            },
            {
              "text": "image",
              "start": 154497,
              "end": 154785,
              "confidence": 0.99069,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 154825,
              "end": 155025,
              "confidence": 0.98775,
              "speaker": "MLK"
            },
            {
              "text": "self",
              "start": 155065,
              "end": 155305,
              "confidence": 0.9992,
              "speaker": "MLK"
            },
            {
              "text": "described.",
              "start": 155345,
              "end": 155865,
              "confidence": 0.99159,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Well, you have to wait till I'm done with the question.",
          "start": 155945,
          "end": 157737,
          "confidence": 0.91954637,
          "words": [
            {
              "text": "Well,",
              "start": 155945,
              "end": 156113,
              "confidence": 0.82489,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 156129,
              "end": 156233,
              "confidence": 0.99494,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 156249,
              "end": 156329,
              "confidence": 0.99917,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 156337,
              "end": 156457,
              "confidence": 0.99879,
              "speaker": "MLK"
            },
            {
              "text": "wait",
              "start": 156481,
              "end": 156593,
              "confidence": 0.99966,
              "speaker": "MLK"
            },
            {
              "text": "till",
              "start": 156609,
              "end": 156777,
              "confidence": 0.44304,
              "speaker": "MLK"
            },
            {
              "text": "I'm",
              "start": 156801,
              "end": 156977,
              "confidence": 0.98549,
              "speaker": "MLK"
            },
            {
              "text": "done",
              "start": 157001,
              "end": 157137,
              "confidence": 0.98148,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 157161,
              "end": 157297,
              "confidence": 0.99928,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 157321,
              "end": 157457,
              "confidence": 0.92564,
              "speaker": "MLK"
            },
            {
              "text": "question.",
              "start": 157481,
              "end": 157737,
              "confidence": 0.96263,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't have to wait to anything. Honestly, I. I mean, this guy right here may tell me that I have to wait, but personally I don't have to do nothing.",
          "start": 157801,
          "end": 165475,
          "confidence": 0.9666468,
          "words": [
            {
              "text": "I",
              "start": 157801,
              "end": 157905,
              "confidence": 0.99079,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 157905,
              "end": 158033,
              "confidence": 0.98116,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 158049,
              "end": 158201,
              "confidence": 0.99639,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 158233,
              "end": 158401,
              "confidence": 0.99655,
              "speaker": "MLK"
            },
            {
              "text": "wait",
              "start": 158433,
              "end": 158601,
              "confidence": 0.98604,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 158633,
              "end": 158849,
              "confidence": 0.7309,
              "speaker": "MLK"
            },
            {
              "text": "anything.",
              "start": 158897,
              "end": 159313,
              "confidence": 0.99702,
              "speaker": "MLK"
            },
            {
              "text": "Honestly,",
              "start": 159369,
              "end": 159921,
              "confidence": 0.9911,
              "speaker": "MLK"
            },
            {
              "text": "I.",
              "start": 159993,
              "end": 160435,
              "confidence": 0.79078,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 160545,
              "end": 160719,
              "confidence": 0.96072,
              "speaker": "MLK"
            },
            {
              "text": "mean,",
              "start": 160727,
              "end": 161183,
              "confidence": 0.98738,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 161319,
              "end": 161591,
              "confidence": 0.99956,
              "speaker": "MLK"
            },
            {
              "text": "guy",
              "start": 161623,
              "end": 161815,
              "confidence": 0.99912,
              "speaker": "MLK"
            },
            {
              "text": "right",
              "start": 161855,
              "end": 162007,
              "confidence": 0.99717,
              "speaker": "MLK"
            },
            {
              "text": "here",
              "start": 162031,
              "end": 162215,
              "confidence": 0.99812,
              "speaker": "MLK"
            },
            {
              "text": "may",
              "start": 162255,
              "end": 162431,
              "confidence": 0.97921,
              "speaker": "MLK"
            },
            {
              "text": "tell",
              "start": 162463,
              "end": 162607,
              "confidence": 0.99749,
              "speaker": "MLK"
            },
            {
              "text": "me",
              "start": 162631,
              "end": 162719,
              "confidence": 0.99797,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 162727,
              "end": 162799,
              "confidence": 0.8265,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 162807,
              "end": 162927,
              "confidence": 0.99221,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 162951,
              "end": 163087,
              "confidence": 0.98301,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 163111,
              "end": 163247,
              "confidence": 0.99254,
              "speaker": "MLK"
            },
            {
              "text": "wait,",
              "start": 163271,
              "end": 163455,
              "confidence": 0.98412,
              "speaker": "MLK"
            },
            {
              "text": "but",
              "start": 163495,
              "end": 163719,
              "confidence": 0.95987,
              "speaker": "MLK"
            },
            {
              "text": "personally",
              "start": 163767,
              "end": 164071,
              "confidence": 0.90408,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 164103,
              "end": 164199,
              "confidence": 0.99597,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 164207,
              "end": 164367,
              "confidence": 0.991,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 164391,
              "end": 164479,
              "confidence": 0.9922,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 164487,
              "end": 164583,
              "confidence": 0.98893,
              "speaker": "MLK"
            },
            {
              "text": "do",
              "start": 164599,
              "end": 164751,
              "confidence": 0.99287,
              "speaker": "MLK"
            },
            {
              "text": "nothing.",
              "start": 164783,
              "end": 165475,
              "confidence": 0.98528,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Go ahead, ask the question.",
          "start": 166055,
          "end": 167351,
          "confidence": 0.992634,
          "words": [
            {
              "text": "Go",
              "start": 166055,
              "end": 166343,
              "confidence": 0.99683,
              "speaker": "MLK"
            },
            {
              "text": "ahead,",
              "start": 166359,
              "end": 166487,
              "confidence": 0.98181,
              "speaker": "MLK"
            },
            {
              "text": "ask",
              "start": 166511,
              "end": 166647,
              "confidence": 0.99374,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 166671,
              "end": 166807,
              "confidence": 0.99158,
              "speaker": "MLK"
            },
            {
              "text": "question.",
              "start": 166831,
              "end": 167351,
              "confidence": 0.99921,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Thank you, your honor. Do you like to can't save you.",
          "start": 167503,
          "end": 170647,
          "confidence": 0.9060527,
          "words": [
            {
              "text": "Thank",
              "start": 167503,
              "end": 167807,
              "confidence": 0.99566,
              "speaker": "MLK"
            },
            {
              "text": "you,",
              "start": 167831,
              "end": 167991,
              "confidence": 0.99743,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 168023,
              "end": 168191,
              "confidence": 0.9982,
              "speaker": "MLK"
            },
            {
              "text": "honor.",
              "start": 168223,
              "end": 168903,
              "confidence": 0.99308,
              "speaker": "MLK"
            },
            {
              "text": "Do",
              "start": 169079,
              "end": 169343,
              "confidence": 0.86416,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 169359,
              "end": 169511,
              "confidence": 0.90962,
              "speaker": "MLK"
            },
            {
              "text": "like",
              "start": 169543,
              "end": 169759,
              "confidence": 0.94811,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 169807,
              "end": 170063,
              "confidence": 0.84548,
              "speaker": "MLK"
            },
            {
              "text": "can't",
              "start": 170119,
              "end": 170303,
              "confidence": 0.46425,
              "speaker": "MLK"
            },
            {
              "text": "save",
              "start": 170319,
              "end": 170471,
              "confidence": 0.96543,
              "speaker": "MLK"
            },
            {
              "text": "you.",
              "start": 170503,
              "end": 170647,
              "confidence": 0.98516,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Right in the real world. That guy right there. He can't save you in the real world.",
          "start": 170671,
          "end": 175875,
          "confidence": 0.9817741,
          "words": [
            {
              "text": "Right",
              "start": 170671,
              "end": 171235,
              "confidence": 0.93284,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 171815,
              "end": 172103,
              "confidence": 0.99384,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 172119,
              "end": 172247,
              "confidence": 0.90188,
              "speaker": "MLK"
            },
            {
              "text": "real",
              "start": 172271,
              "end": 172455,
              "confidence": 0.99953,
              "speaker": "MLK"
            },
            {
              "text": "world.",
              "start": 172495,
              "end": 172911,
              "confidence": 0.99685,
              "speaker": "MLK"
            },
            {
              "text": "That",
              "start": 173023,
              "end": 173271,
              "confidence": 0.995,
              "speaker": "MLK"
            },
            {
              "text": "guy",
              "start": 173303,
              "end": 173471,
              "confidence": 0.99749,
              "speaker": "MLK"
            },
            {
              "text": "right",
              "start": 173503,
              "end": 173647,
              "confidence": 0.99024,
              "speaker": "MLK"
            },
            {
              "text": "there.",
              "start": 173671,
              "end": 174095,
              "confidence": 0.96437,
              "speaker": "MLK"
            },
            {
              "text": "He",
              "start": 174215,
              "end": 174447,
              "confidence": 0.99688,
              "speaker": "MLK"
            },
            {
              "text": "can't",
              "start": 174471,
              "end": 174687,
              "confidence": 0.99204,
              "speaker": "MLK"
            },
            {
              "text": "save",
              "start": 174711,
              "end": 174823,
              "confidence": 0.99642,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 174839,
              "end": 174943,
              "confidence": 0.98947,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 174959,
              "end": 175039,
              "confidence": 0.99661,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 175047,
              "end": 175119,
              "confidence": 0.95078,
              "speaker": "MLK"
            },
            {
              "text": "real",
              "start": 175127,
              "end": 175271,
              "confidence": 0.9992,
              "speaker": "MLK"
            },
            {
              "text": "world.",
              "start": 175303,
              "end": 175875,
              "confidence": 0.99672,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Just so you know, what does that mean?",
          "start": 176175,
          "end": 178183,
          "confidence": 0.89294124,
          "words": [
            {
              "text": "Just",
              "start": 176175,
              "end": 176487,
              "confidence": 0.90896,
              "speaker": "MLK"
            },
            {
              "text": "so",
              "start": 176511,
              "end": 176623,
              "confidence": 0.57989,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 176639,
              "end": 176743,
              "confidence": 0.82308,
              "speaker": "MLK"
            },
            {
              "text": "know,",
              "start": 176759,
              "end": 177031,
              "confidence": 0.83574,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 177103,
              "end": 177263,
              "confidence": 0.99922,
              "speaker": "MLK"
            },
            {
              "text": "does",
              "start": 177279,
              "end": 177431,
              "confidence": 0.99805,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 177463,
              "end": 177655,
              "confidence": 0.99937,
              "speaker": "MLK"
            },
            {
              "text": "mean?",
              "start": 177695,
              "end": 178183,
              "confidence": 0.99922,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't have to elaborate.",
          "start": 178319,
          "end": 179835,
          "confidence": 0.990852,
          "words": [
            {
              "text": "I",
              "start": 178319,
              "end": 178519,
              "confidence": 0.99606,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 178527,
              "end": 178687,
              "confidence": 0.97758,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 178711,
              "end": 178847,
              "confidence": 0.99588,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 178871,
              "end": 178983,
              "confidence": 0.99462,
              "speaker": "MLK"
            },
            {
              "text": "elaborate.",
              "start": 178999,
              "end": 179835,
              "confidence": 0.99012,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "That's your next question? Is that a threat against.",
          "start": 182055,
          "end": 184895,
          "confidence": 0.8681989,
          "words": [
            {
              "text": "That's",
              "start": 182055,
              "end": 182383,
              "confidence": 0.25538,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 182399,
              "end": 182527,
              "confidence": 0.97154,
              "speaker": "MLK"
            },
            {
              "text": "next",
              "start": 182551,
              "end": 182711,
              "confidence": 0.97885,
              "speaker": "MLK"
            },
            {
              "text": "question?",
              "start": 182743,
              "end": 183031,
              "confidence": 0.95733,
              "speaker": "MLK"
            },
            {
              "text": "Is",
              "start": 183103,
              "end": 183263,
              "confidence": 0.97877,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 183279,
              "end": 183719,
              "confidence": 0.96257,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 183847,
              "end": 184159,
              "confidence": 0.98632,
              "speaker": "MLK"
            },
            {
              "text": "threat",
              "start": 184207,
              "end": 184487,
              "confidence": 0.78779,
              "speaker": "MLK"
            },
            {
              "text": "against.",
              "start": 184551,
              "end": 184895,
              "confidence": 0.93524,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "No.",
          "start": 184975,
          "end": 185503,
          "confidence": 0.62716,
          "words": [
            {
              "text": "No.",
              "start": 184975,
              "end": 185503,
              "confidence": 0.62716,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Mr. Can you just ask your next question, please?",
          "start": 185639,
          "end": 188595,
          "confidence": 0.94847,
          "words": [
            {
              "text": "Mr.",
              "start": 185639,
              "end": 186287,
              "confidence": 0.59771,
              "speaker": "MLK"
            },
            {
              "text": "Can",
              "start": 186431,
              "end": 186639,
              "confidence": 0.98999,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 186647,
              "end": 186791,
              "confidence": 0.98712,
              "speaker": "MLK"
            },
            {
              "text": "just",
              "start": 186823,
              "end": 186991,
              "confidence": 0.97649,
              "speaker": "MLK"
            },
            {
              "text": "ask",
              "start": 187023,
              "end": 187167,
              "confidence": 0.99677,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 187191,
              "end": 187351,
              "confidence": 0.99672,
              "speaker": "MLK"
            },
            {
              "text": "next",
              "start": 187383,
              "end": 187623,
              "confidence": 0.99347,
              "speaker": "MLK"
            },
            {
              "text": "question,",
              "start": 187679,
              "end": 187943,
              "confidence": 0.99957,
              "speaker": "MLK"
            },
            {
              "text": "please?",
              "start": 187999,
              "end": 188595,
              "confidence": 0.99839,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "He can't save you.",
          "start": 195665,
          "end": 197085,
          "confidence": 0.97227,
          "words": [
            {
              "text": "He",
              "start": 195665,
              "end": 195977,
              "confidence": 0.99582,
              "speaker": "MLK"
            },
            {
              "text": "can't",
              "start": 196001,
              "end": 196241,
              "confidence": 0.89625,
              "speaker": "MLK"
            },
            {
              "text": "save",
              "start": 196273,
              "end": 196465,
              "confidence": 0.99859,
              "speaker": "MLK"
            },
            {
              "text": "you.",
              "start": 196505,
              "end": 197085,
              "confidence": 0.99842,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "And what does that mean?",
          "start": 199145,
          "end": 200489,
          "confidence": 0.975652,
          "words": [
            {
              "text": "And",
              "start": 199145,
              "end": 199457,
              "confidence": 0.88024,
              "speaker": "MLK"
            },
            {
              "text": "what",
              "start": 199481,
              "end": 199617,
              "confidence": 0.99974,
              "speaker": "MLK"
            },
            {
              "text": "does",
              "start": 199641,
              "end": 199801,
              "confidence": 0.99894,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 199833,
              "end": 200001,
              "confidence": 0.99966,
              "speaker": "MLK"
            },
            {
              "text": "mean?",
              "start": 200033,
              "end": 200489,
              "confidence": 0.99968,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I was talking to myself.",
          "start": 200617,
          "end": 202005,
          "confidence": 0.9905,
          "words": [
            {
              "text": "I",
              "start": 200617,
              "end": 200809,
              "confidence": 0.99238,
              "speaker": "MLK"
            },
            {
              "text": "was",
              "start": 200817,
              "end": 200937,
              "confidence": 0.99394,
              "speaker": "MLK"
            },
            {
              "text": "talking",
              "start": 200961,
              "end": 201177,
              "confidence": 0.97595,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 201201,
              "end": 201337,
              "confidence": 0.99821,
              "speaker": "MLK"
            },
            {
              "text": "myself.",
              "start": 201361,
              "end": 202005,
              "confidence": 0.99202,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Do you recall that any criminal actions were pending against you at the end of 2008?",
          "start": 204745,
          "end": 212245,
          "confidence": 0.98190373,
          "words": [
            {
              "text": "Do",
              "start": 204745,
              "end": 204985,
              "confidence": 0.91285,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 204985,
              "end": 205121,
              "confidence": 0.99287,
              "speaker": "MLK"
            },
            {
              "text": "recall",
              "start": 205153,
              "end": 205561,
              "confidence": 0.99835,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 205633,
              "end": 205937,
              "confidence": 0.9851,
              "speaker": "MLK"
            },
            {
              "text": "any",
              "start": 206001,
              "end": 206249,
              "confidence": 0.99951,
              "speaker": "MLK"
            },
            {
              "text": "criminal",
              "start": 206297,
              "end": 207005,
              "confidence": 0.99929,
              "speaker": "MLK"
            },
            {
              "text": "actions",
              "start": 208225,
              "end": 208737,
              "confidence": 0.99664,
              "speaker": "MLK"
            },
            {
              "text": "were",
              "start": 208801,
              "end": 209073,
              "confidence": 0.99549,
              "speaker": "MLK"
            },
            {
              "text": "pending",
              "start": 209129,
              "end": 209601,
              "confidence": 0.83813,
              "speaker": "MLK"
            },
            {
              "text": "against",
              "start": 209673,
              "end": 209953,
              "confidence": 0.99981,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 210009,
              "end": 210345,
              "confidence": 0.99941,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 210425,
              "end": 210617,
              "confidence": 0.99734,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 210641,
              "end": 210729,
              "confidence": 0.99947,
              "speaker": "MLK"
            },
            {
              "text": "end",
              "start": 210737,
              "end": 210857,
              "confidence": 0.99914,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 210881,
              "end": 211041,
              "confidence": 0.99732,
              "speaker": "MLK"
            },
            {
              "text": "2008?",
              "start": 211073,
              "end": 212245,
              "confidence": 0.99974,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't recall any.",
          "start": 212825,
          "end": 214057,
          "confidence": 0.938415,
          "words": [
            {
              "text": "I",
              "start": 212825,
              "end": 213113,
              "confidence": 0.99855,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 213129,
              "end": 213321,
              "confidence": 0.96927,
              "speaker": "MLK"
            },
            {
              "text": "recall",
              "start": 213353,
              "end": 213625,
              "confidence": 0.99824,
              "speaker": "MLK"
            },
            {
              "text": "any.",
              "start": 213665,
              "end": 214057,
              "confidence": 0.7876,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Do you recall being at all concerned about any criminal actions that may have been pending against you at the end of 2008?",
          "start": 214161,
          "end": 221985,
          "confidence": 0.9860552,
          "words": [
            {
              "text": "Do",
              "start": 214161,
              "end": 214305,
              "confidence": 0.86237,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 214305,
              "end": 214441,
              "confidence": 0.99796,
              "speaker": "MLK"
            },
            {
              "text": "recall",
              "start": 214473,
              "end": 214881,
              "confidence": 0.99991,
              "speaker": "MLK"
            },
            {
              "text": "being",
              "start": 214953,
              "end": 215305,
              "confidence": 0.99811,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 215385,
              "end": 215577,
              "confidence": 0.99933,
              "speaker": "MLK"
            },
            {
              "text": "all",
              "start": 215601,
              "end": 216001,
              "confidence": 0.9992,
              "speaker": "MLK"
            },
            {
              "text": "concerned",
              "start": 216113,
              "end": 216609,
              "confidence": 0.99695,
              "speaker": "MLK"
            },
            {
              "text": "about",
              "start": 216697,
              "end": 217017,
              "confidence": 0.99957,
              "speaker": "MLK"
            },
            {
              "text": "any",
              "start": 217081,
              "end": 217305,
              "confidence": 0.99956,
              "speaker": "MLK"
            },
            {
              "text": "criminal",
              "start": 217345,
              "end": 217785,
              "confidence": 0.9998,
              "speaker": "MLK"
            },
            {
              "text": "actions",
              "start": 217865,
              "end": 218617,
              "confidence": 0.99817,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 218801,
              "end": 219097,
              "confidence": 0.91491,
              "speaker": "MLK"
            },
            {
              "text": "may",
              "start": 219121,
              "end": 219233,
              "confidence": 0.98366,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 219249,
              "end": 219377,
              "confidence": 0.98397,
              "speaker": "MLK"
            },
            {
              "text": "been",
              "start": 219401,
              "end": 219561,
              "confidence": 0.98944,
              "speaker": "MLK"
            },
            {
              "text": "pending",
              "start": 219593,
              "end": 219993,
              "confidence": 0.99591,
              "speaker": "MLK"
            },
            {
              "text": "against",
              "start": 220049,
              "end": 220313,
              "confidence": 0.99816,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 220369,
              "end": 220537,
              "confidence": 0.9926,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 220561,
              "end": 220673,
              "confidence": 0.99024,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 220689,
              "end": 220769,
              "confidence": 0.99751,
              "speaker": "MLK"
            },
            {
              "text": "end",
              "start": 220777,
              "end": 220897,
              "confidence": 0.99385,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 220921,
              "end": 221081,
              "confidence": 0.98916,
              "speaker": "MLK"
            },
            {
              "text": "2008?",
              "start": 221113,
              "end": 221985,
              "confidence": 0.99893,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I dont recall.",
          "start": 222065,
          "end": 223125,
          "confidence": 0.81293666,
          "words": [
            {
              "text": "I",
              "start": 222065,
              "end": 222209,
              "confidence": 0.97474,
              "speaker": "MLK"
            },
            {
              "text": "dont",
              "start": 222217,
              "end": 222385,
              "confidence": 0.4711,
              "speaker": "MLK"
            },
            {
              "text": "recall.",
              "start": 222425,
              "end": 223125,
              "confidence": 0.99297,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Do you recall that in the summer of 2007 you were arrested in New York City following a performance at the Beacon Theater?",
          "start": 223505,
          "end": 231445,
          "confidence": 0.97257215,
          "words": [
            {
              "text": "Do",
              "start": 223505,
              "end": 223745,
              "confidence": 0.73717,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 223745,
              "end": 223857,
              "confidence": 0.99246,
              "speaker": "MLK"
            },
            {
              "text": "recall",
              "start": 223881,
              "end": 224185,
              "confidence": 0.99875,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 224225,
              "end": 224377,
              "confidence": 0.98501,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 224401,
              "end": 224513,
              "confidence": 0.99047,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 224529,
              "end": 224681,
              "confidence": 0.98729,
              "speaker": "MLK"
            },
            {
              "text": "summer",
              "start": 224713,
              "end": 225001,
              "confidence": 0.99415,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 225033,
              "end": 225225,
              "confidence": 0.98991,
              "speaker": "MLK"
            },
            {
              "text": "2007",
              "start": 225265,
              "end": 226441,
              "confidence": 0.99903,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 226513,
              "end": 226673,
              "confidence": 0.99412,
              "speaker": "MLK"
            },
            {
              "text": "were",
              "start": 226689,
              "end": 226913,
              "confidence": 0.97119,
              "speaker": "MLK"
            },
            {
              "text": "arrested",
              "start": 226969,
              "end": 227361,
              "confidence": 0.99768,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 227393,
              "end": 227585,
              "confidence": 0.99415,
              "speaker": "MLK"
            },
            {
              "text": "New",
              "start": 227625,
              "end": 227801,
              "confidence": 0.99436,
              "speaker": "MLK"
            },
            {
              "text": "York",
              "start": 227833,
              "end": 228073,
              "confidence": 0.99382,
              "speaker": "MLK"
            },
            {
              "text": "City",
              "start": 228129,
              "end": 228753,
              "confidence": 0.98577,
              "speaker": "MLK"
            },
            {
              "text": "following",
              "start": 228929,
              "end": 229217,
              "confidence": 0.99778,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 229241,
              "end": 229497,
              "confidence": 0.9912,
              "speaker": "MLK"
            },
            {
              "text": "performance",
              "start": 229561,
              "end": 229905,
              "confidence": 0.99839,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 229985,
              "end": 230177,
              "confidence": 0.99349,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 230201,
              "end": 230337,
              "confidence": 0.99537,
              "speaker": "MLK"
            },
            {
              "text": "Beacon",
              "start": 230361,
              "end": 230729,
              "confidence": 0.98845,
              "speaker": "MLK"
            },
            {
              "text": "Theater?",
              "start": 230777,
              "end": 231445,
              "confidence": 0.79915,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't recall that.",
          "start": 231865,
          "end": 233245,
          "confidence": 0.804085,
          "words": [
            {
              "text": "I",
              "start": 231865,
              "end": 232129,
              "confidence": 0.98471,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 232137,
              "end": 232297,
              "confidence": 0.27267,
              "speaker": "MLK"
            },
            {
              "text": "recall",
              "start": 232321,
              "end": 232625,
              "confidence": 0.97449,
              "speaker": "MLK"
            },
            {
              "text": "that.",
              "start": 232665,
              "end": 233245,
              "confidence": 0.98447,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Do you recall that police in New York City discovered a.40 caliber pistol on you, on your person?",
          "start": 234425,
          "end": 243205,
          "confidence": 0.960495,
          "words": [
            {
              "text": "Do",
              "start": 234425,
              "end": 234689,
              "confidence": 0.63719,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 234697,
              "end": 234841,
              "confidence": 0.99738,
              "speaker": "MLK"
            },
            {
              "text": "recall",
              "start": 234873,
              "end": 235233,
              "confidence": 0.99946,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 235289,
              "end": 235937,
              "confidence": 0.98367,
              "speaker": "MLK"
            },
            {
              "text": "police",
              "start": 236121,
              "end": 236873,
              "confidence": 0.99809,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 237049,
              "end": 237361,
              "confidence": 0.99339,
              "speaker": "MLK"
            },
            {
              "text": "New",
              "start": 237393,
              "end": 237537,
              "confidence": 0.99365,
              "speaker": "MLK"
            },
            {
              "text": "York",
              "start": 237561,
              "end": 237769,
              "confidence": 0.99012,
              "speaker": "MLK"
            },
            {
              "text": "City",
              "start": 237817,
              "end": 238121,
              "confidence": 0.98075,
              "speaker": "MLK"
            },
            {
              "text": "discovered",
              "start": 238193,
              "end": 238777,
              "confidence": 0.99564,
              "speaker": "MLK"
            },
            {
              "text": "a.40",
              "start": 238841,
              "end": 239721,
              "confidence": 0.98927,
              "speaker": "MLK"
            },
            {
              "text": "caliber",
              "start": 239793,
              "end": 240297,
              "confidence": 0.94333,
              "speaker": "MLK"
            },
            {
              "text": "pistol",
              "start": 240361,
              "end": 241025,
              "confidence": 0.99914,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 241145,
              "end": 241401,
              "confidence": 0.85597,
              "speaker": "MLK"
            },
            {
              "text": "you,",
              "start": 241433,
              "end": 241937,
              "confidence": 0.95142,
              "speaker": "MLK"
            },
            {
              "text": "on",
              "start": 242081,
              "end": 242337,
              "confidence": 0.98735,
              "speaker": "MLK"
            },
            {
              "text": "your",
              "start": 242361,
              "end": 242569,
              "confidence": 0.99594,
              "speaker": "MLK"
            },
            {
              "text": "person?",
              "start": 242617,
              "end": 243205,
              "confidence": 0.99715,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't recall that either.",
          "start": 244165,
          "end": 245705,
          "confidence": 0.754648,
          "words": [
            {
              "text": "I",
              "start": 244165,
              "end": 244429,
              "confidence": 0.96734,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 244437,
              "end": 244597,
              "confidence": 0.4646,
              "speaker": "MLK"
            },
            {
              "text": "recall",
              "start": 244621,
              "end": 244861,
              "confidence": 0.97783,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 244893,
              "end": 245037,
              "confidence": 0.98733,
              "speaker": "MLK"
            },
            {
              "text": "either.",
              "start": 245061,
              "end": 245705,
              "confidence": 0.37614,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Do you recall that in late 2009 you pleaded guilty to attempted criminal possession of a weapon?",
          "start": 246725,
          "end": 255365,
          "confidence": 0.9900806,
          "words": [
            {
              "text": "Do",
              "start": 246725,
              "end": 246989,
              "confidence": 0.87574,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 246997,
              "end": 247117,
              "confidence": 0.99164,
              "speaker": "MLK"
            },
            {
              "text": "recall",
              "start": 247141,
              "end": 247865,
              "confidence": 0.99982,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 248285,
              "end": 248669,
              "confidence": 0.99173,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 248717,
              "end": 249117,
              "confidence": 0.99793,
              "speaker": "MLK"
            },
            {
              "text": "late",
              "start": 249221,
              "end": 249533,
              "confidence": 0.99941,
              "speaker": "MLK"
            },
            {
              "text": "2009",
              "start": 249589,
              "end": 250637,
              "confidence": 0.99931,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 250701,
              "end": 250925,
              "confidence": 0.99877,
              "speaker": "MLK"
            },
            {
              "text": "pleaded",
              "start": 250965,
              "end": 251333,
              "confidence": 0.99787,
              "speaker": "MLK"
            },
            {
              "text": "guilty",
              "start": 251389,
              "end": 251949,
              "confidence": 0.9984,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 252037,
              "end": 252549,
              "confidence": 0.99777,
              "speaker": "MLK"
            },
            {
              "text": "attempted",
              "start": 252677,
              "end": 253197,
              "confidence": 0.99268,
              "speaker": "MLK"
            },
            {
              "text": "criminal",
              "start": 253261,
              "end": 253701,
              "confidence": 0.99947,
              "speaker": "MLK"
            },
            {
              "text": "possession",
              "start": 253773,
              "end": 254285,
              "confidence": 0.99738,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 254325,
              "end": 254477,
              "confidence": 0.99934,
              "speaker": "MLK"
            },
            {
              "text": "a",
              "start": 254501,
              "end": 254661,
              "confidence": 0.99698,
              "speaker": "MLK"
            },
            {
              "text": "weapon?",
              "start": 254693,
              "end": 255365,
              "confidence": 0.99713,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't recall that yet.",
          "start": 255525,
          "end": 257065,
          "confidence": 0.767008,
          "words": [
            {
              "text": "I",
              "start": 255525,
              "end": 255725,
              "confidence": 0.98363,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 255725,
              "end": 255877,
              "confidence": 0.48972,
              "speaker": "MLK"
            },
            {
              "text": "recall",
              "start": 255901,
              "end": 256229,
              "confidence": 0.7428,
              "speaker": "MLK"
            },
            {
              "text": "that",
              "start": 256277,
              "end": 256461,
              "confidence": 0.9734,
              "speaker": "MLK"
            },
            {
              "text": "yet.",
              "start": 256493,
              "end": 257065,
              "confidence": 0.64549,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Did you serve any time in jail following the end of 2009?",
          "start": 258885,
          "end": 265345,
          "confidence": 0.99161,
          "words": [
            {
              "text": "Did",
              "start": 258885,
              "end": 259197,
              "confidence": 0.99931,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 259221,
              "end": 259861,
              "confidence": 0.99957,
              "speaker": "MLK"
            },
            {
              "text": "serve",
              "start": 260053,
              "end": 260517,
              "confidence": 0.99813,
              "speaker": "MLK"
            },
            {
              "text": "any",
              "start": 260581,
              "end": 260805,
              "confidence": 0.99911,
              "speaker": "MLK"
            },
            {
              "text": "time",
              "start": 260845,
              "end": 261045,
              "confidence": 0.91754,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 261085,
              "end": 261357,
              "confidence": 0.99824,
              "speaker": "MLK"
            },
            {
              "text": "jail",
              "start": 261421,
              "end": 262025,
              "confidence": 0.99889,
              "speaker": "MLK"
            },
            {
              "text": "following",
              "start": 263285,
              "end": 263621,
              "confidence": 0.99783,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 263653,
              "end": 263773,
              "confidence": 0.99809,
              "speaker": "MLK"
            },
            {
              "text": "end",
              "start": 263789,
              "end": 263917,
              "confidence": 0.99854,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 263941,
              "end": 264101,
              "confidence": 0.99472,
              "speaker": "MLK"
            },
            {
              "text": "2009?",
              "start": 264133,
              "end": 265345,
              "confidence": 0.99935,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't know.",
          "start": 265845,
          "end": 266865,
          "confidence": 0.87051,
          "words": [
            {
              "text": "I",
              "start": 265845,
              "end": 266109,
              "confidence": 0.98441,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 266117,
              "end": 266277,
              "confidence": 0.66264,
              "speaker": "MLK"
            },
            {
              "text": "know.",
              "start": 266301,
              "end": 266865,
              "confidence": 0.96448,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Didn't you serve about eight months at Rikers island in 2010?",
          "start": 267285,
          "end": 271885,
          "confidence": 0.9511055,
          "words": [
            {
              "text": "Didn't",
              "start": 267285,
              "end": 267653,
              "confidence": 0.57718,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 267669,
              "end": 267845,
              "confidence": 0.9959,
              "speaker": "MLK"
            },
            {
              "text": "serve",
              "start": 267885,
              "end": 268221,
              "confidence": 0.99636,
              "speaker": "MLK"
            },
            {
              "text": "about",
              "start": 268293,
              "end": 268525,
              "confidence": 0.98628,
              "speaker": "MLK"
            },
            {
              "text": "eight",
              "start": 268565,
              "end": 268741,
              "confidence": 0.99941,
              "speaker": "MLK"
            },
            {
              "text": "months",
              "start": 268773,
              "end": 268989,
              "confidence": 0.99949,
              "speaker": "MLK"
            },
            {
              "text": "at",
              "start": 269037,
              "end": 269245,
              "confidence": 0.97939,
              "speaker": "MLK"
            },
            {
              "text": "Rikers",
              "start": 269285,
              "end": 269749,
              "confidence": 0.94536,
              "speaker": "MLK"
            },
            {
              "text": "island",
              "start": 269797,
              "end": 270197,
              "confidence": 0.99789,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 270261,
              "end": 270869,
              "confidence": 0.99475,
              "speaker": "MLK"
            },
            {
              "text": "2010?",
              "start": 271037,
              "end": 271885,
              "confidence": 0.99015,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't know.",
          "start": 272005,
          "end": 272945,
          "confidence": 0.8404533,
          "words": [
            {
              "text": "I",
              "start": 272005,
              "end": 272189,
              "confidence": 0.99465,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 272197,
              "end": 272357,
              "confidence": 0.53879,
              "speaker": "MLK"
            },
            {
              "text": "know.",
              "start": 272381,
              "end": 272945,
              "confidence": 0.98792,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Do you remember being arrested in or about January 2008 near Yuma, Arizona?",
          "start": 273955,
          "end": 280975,
          "confidence": 0.95253074,
          "words": [
            {
              "text": "Do",
              "start": 273955,
              "end": 274219,
              "confidence": 0.93984,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 274227,
              "end": 274371,
              "confidence": 0.98975,
              "speaker": "MLK"
            },
            {
              "text": "remember",
              "start": 274403,
              "end": 274699,
              "confidence": 0.7832,
              "speaker": "MLK"
            },
            {
              "text": "being",
              "start": 274747,
              "end": 275075,
              "confidence": 0.99786,
              "speaker": "MLK"
            },
            {
              "text": "arrested",
              "start": 275155,
              "end": 275731,
              "confidence": 0.99678,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 275803,
              "end": 275963,
              "confidence": 0.96448,
              "speaker": "MLK"
            },
            {
              "text": "or",
              "start": 275979,
              "end": 276179,
              "confidence": 0.9325,
              "speaker": "MLK"
            },
            {
              "text": "about",
              "start": 276227,
              "end": 276651,
              "confidence": 0.9661,
              "speaker": "MLK"
            },
            {
              "text": "January",
              "start": 276763,
              "end": 277275,
              "confidence": 0.99793,
              "speaker": "MLK"
            },
            {
              "text": "2008",
              "start": 277395,
              "end": 278883,
              "confidence": 0.99928,
              "speaker": "MLK"
            },
            {
              "text": "near",
              "start": 279059,
              "end": 279419,
              "confidence": 0.99858,
              "speaker": "MLK"
            },
            {
              "text": "Yuma,",
              "start": 279467,
              "end": 279859,
              "confidence": 0.86337,
              "speaker": "MLK"
            },
            {
              "text": "Arizona?",
              "start": 279907,
              "end": 280975,
              "confidence": 0.95323,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "No, I don't remember that.",
          "start": 281995,
          "end": 283455,
          "confidence": 0.755316,
          "words": [
            {
              "text": "No,",
              "start": 281995,
              "end": 282307,
              "confidence": 0.70997,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 282331,
              "end": 282395,
              "confidence": 0.94791,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 282395,
              "end": 282595,
              "confidence": 0.45189,
              "speaker": "MLK"
            },
            {
              "text": "remember",
              "start": 282635,
              "end": 282867,
              "confidence": 0.7376,
              "speaker": "MLK"
            },
            {
              "text": "that.",
              "start": 282891,
              "end": 283455,
              "confidence": 0.92921,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Do you remember being charged in early 2008 with possession of narcotics for sale, possession of dangerous drugs, misconduct involving weapons, and possession of drug paraphernalia?",
          "start": 284155,
          "end": 300135,
          "confidence": 0.97730345,
          "words": [
            {
              "text": "Do",
              "start": 284155,
              "end": 284419,
              "confidence": 0.95593,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 284427,
              "end": 284595,
              "confidence": 0.99245,
              "speaker": "MLK"
            },
            {
              "text": "remember",
              "start": 284635,
              "end": 285059,
              "confidence": 0.9991,
              "speaker": "MLK"
            },
            {
              "text": "being",
              "start": 285147,
              "end": 285491,
              "confidence": 0.99823,
              "speaker": "MLK"
            },
            {
              "text": "charged",
              "start": 285563,
              "end": 286255,
              "confidence": 0.99888,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 286795,
              "end": 287443,
              "confidence": 0.99654,
              "speaker": "MLK"
            },
            {
              "text": "early",
              "start": 287579,
              "end": 287947,
              "confidence": 0.99666,
              "speaker": "MLK"
            },
            {
              "text": "2008",
              "start": 288011,
              "end": 289163,
              "confidence": 0.99934,
              "speaker": "MLK"
            },
            {
              "text": "with",
              "start": 289259,
              "end": 289851,
              "confidence": 0.99501,
              "speaker": "MLK"
            },
            {
              "text": "possession",
              "start": 290003,
              "end": 290763,
              "confidence": 0.99202,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 290859,
              "end": 291331,
              "confidence": 0.99545,
              "speaker": "MLK"
            },
            {
              "text": "narcotics",
              "start": 291443,
              "end": 292227,
              "confidence": 0.96305,
              "speaker": "MLK"
            },
            {
              "text": "for",
              "start": 292291,
              "end": 292539,
              "confidence": 0.9964,
              "speaker": "MLK"
            },
            {
              "text": "sale,",
              "start": 292587,
              "end": 293083,
              "confidence": 0.99914,
              "speaker": "MLK"
            },
            {
              "text": "possession",
              "start": 293219,
              "end": 293771,
              "confidence": 0.98723,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 293803,
              "end": 294067,
              "confidence": 0.99434,
              "speaker": "MLK"
            },
            {
              "text": "dangerous",
              "start": 294131,
              "end": 294691,
              "confidence": 0.98992,
              "speaker": "MLK"
            },
            {
              "text": "drugs,",
              "start": 294763,
              "end": 295427,
              "confidence": 0.99493,
              "speaker": "MLK"
            },
            {
              "text": "misconduct",
              "start": 295571,
              "end": 296499,
              "confidence": 0.95785,
              "speaker": "MLK"
            },
            {
              "text": "involving",
              "start": 296587,
              "end": 297027,
              "confidence": 0.99435,
              "speaker": "MLK"
            },
            {
              "text": "weapons,",
              "start": 297091,
              "end": 297531,
              "confidence": 0.99515,
              "speaker": "MLK"
            },
            {
              "text": "and",
              "start": 297603,
              "end": 297931,
              "confidence": 0.68729,
              "speaker": "MLK"
            },
            {
              "text": "possession",
              "start": 298003,
              "end": 298491,
              "confidence": 0.98985,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 298523,
              "end": 298691,
              "confidence": 0.99402,
              "speaker": "MLK"
            },
            {
              "text": "drug",
              "start": 298723,
              "end": 298987,
              "confidence": 0.99792,
              "speaker": "MLK"
            },
            {
              "text": "paraphernalia?",
              "start": 299051,
              "end": 300135,
              "confidence": 0.94884,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "No, I don't call that.",
          "start": 300565,
          "end": 302069,
          "confidence": 0.79984,
          "words": [
            {
              "text": "No,",
              "start": 300565,
              "end": 300877,
              "confidence": 0.66031,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 300901,
              "end": 300989,
              "confidence": 0.96019,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 300997,
              "end": 301349,
              "confidence": 0.48148,
              "speaker": "MLK"
            },
            {
              "text": "call",
              "start": 301437,
              "end": 301685,
              "confidence": 0.91877,
              "speaker": "MLK"
            },
            {
              "text": "that.",
              "start": 301725,
              "end": 302069,
              "confidence": 0.97845,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Well, how much longer is this line of question going to go on?",
          "start": 302157,
          "end": 304853,
          "confidence": 0.90538615,
          "words": [
            {
              "text": "Well,",
              "start": 302157,
              "end": 302621,
              "confidence": 0.82208,
              "speaker": "MLK"
            },
            {
              "text": "how",
              "start": 302733,
              "end": 302933,
              "confidence": 0.99909,
              "speaker": "MLK"
            },
            {
              "text": "much",
              "start": 302949,
              "end": 303101,
              "confidence": 0.99234,
              "speaker": "MLK"
            },
            {
              "text": "longer",
              "start": 303133,
              "end": 303333,
              "confidence": 0.99471,
              "speaker": "MLK"
            },
            {
              "text": "is",
              "start": 303349,
              "end": 303453,
              "confidence": 0.95914,
              "speaker": "MLK"
            },
            {
              "text": "this",
              "start": 303469,
              "end": 303597,
              "confidence": 0.9763,
              "speaker": "MLK"
            },
            {
              "text": "line",
              "start": 303621,
              "end": 303757,
              "confidence": 0.84548,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 303781,
              "end": 303893,
              "confidence": 0.77747,
              "speaker": "MLK"
            },
            {
              "text": "question",
              "start": 303909,
              "end": 304133,
              "confidence": 0.98551,
              "speaker": "MLK"
            },
            {
              "text": "going",
              "start": 304189,
              "end": 304309,
              "confidence": 0.70582,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 304317,
              "end": 304389,
              "confidence": 0.74514,
              "speaker": "MLK"
            },
            {
              "text": "go",
              "start": 304397,
              "end": 304493,
              "confidence": 0.97319,
              "speaker": "MLK"
            },
            {
              "text": "on?",
              "start": 304509,
              "end": 304853,
              "confidence": 0.99375,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Not much longer.",
          "start": 304949,
          "end": 306021,
          "confidence": 0.99784,
          "words": [
            {
              "text": "Not",
              "start": 304949,
              "end": 305229,
              "confidence": 0.99776,
              "speaker": "MLK"
            },
            {
              "text": "much",
              "start": 305277,
              "end": 305533,
              "confidence": 0.99696,
              "speaker": "MLK"
            },
            {
              "text": "longer.",
              "start": 305589,
              "end": 306021,
              "confidence": 0.9988,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "All right, go ahead.",
          "start": 306093,
          "end": 307013,
          "confidence": 0.80023,
          "words": [
            {
              "text": "All",
              "start": 306093,
              "end": 306253,
              "confidence": 0.58045,
              "speaker": "MLK"
            },
            {
              "text": "right,",
              "start": 306269,
              "end": 306517,
              "confidence": 0.63906,
              "speaker": "MLK"
            },
            {
              "text": "go",
              "start": 306581,
              "end": 306757,
              "confidence": 0.99151,
              "speaker": "MLK"
            },
            {
              "text": "ahead.",
              "start": 306781,
              "end": 307013,
              "confidence": 0.9899,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't know.",
          "start": 307069,
          "end": 307905,
          "confidence": 0.71696335,
          "words": [
            {
              "text": "I",
              "start": 307069,
              "end": 307189,
              "confidence": 0.69675,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 307197,
              "end": 307333,
              "confidence": 0.5311,
              "speaker": "MLK"
            },
            {
              "text": "know.",
              "start": 307349,
              "end": 307905,
              "confidence": 0.92304,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "Didn't you win I don't know the award for best rap Album of the year in 2008 for the Carter 3?",
          "start": 310805,
          "end": 318053,
          "confidence": 0.9348952,
          "words": [
            {
              "text": "Didn't",
              "start": 310805,
              "end": 311173,
              "confidence": 0.70742,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 311189,
              "end": 311533,
              "confidence": 0.99807,
              "speaker": "MLK"
            },
            {
              "text": "win",
              "start": 311629,
              "end": 312245,
              "confidence": 0.99819,
              "speaker": "MLK"
            },
            {
              "text": "I",
              "start": 312405,
              "end": 312629,
              "confidence": 0.94413,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 312637,
              "end": 312773,
              "confidence": 0.54172,
              "speaker": "MLK"
            },
            {
              "text": "know",
              "start": 312789,
              "end": 313037,
              "confidence": 0.92496,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 313101,
              "end": 313253,
              "confidence": 0.99563,
              "speaker": "MLK"
            },
            {
              "text": "award",
              "start": 313269,
              "end": 313573,
              "confidence": 0.97135,
              "speaker": "MLK"
            },
            {
              "text": "for",
              "start": 313629,
              "end": 313869,
              "confidence": 0.99704,
              "speaker": "MLK"
            },
            {
              "text": "best",
              "start": 313917,
              "end": 314221,
              "confidence": 0.99941,
              "speaker": "MLK"
            },
            {
              "text": "rap",
              "start": 314293,
              "end": 314597,
              "confidence": 0.98646,
              "speaker": "MLK"
            },
            {
              "text": "Album",
              "start": 314661,
              "end": 315069,
              "confidence": 0.99896,
              "speaker": "MLK"
            },
            {
              "text": "of",
              "start": 315117,
              "end": 315253,
              "confidence": 0.98435,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 315269,
              "end": 315373,
              "confidence": 0.9953,
              "speaker": "MLK"
            },
            {
              "text": "year",
              "start": 315389,
              "end": 315565,
              "confidence": 0.99252,
              "speaker": "MLK"
            },
            {
              "text": "in",
              "start": 315605,
              "end": 315781,
              "confidence": 0.94295,
              "speaker": "MLK"
            },
            {
              "text": "2008",
              "start": 315813,
              "end": 316733,
              "confidence": 0.93666,
              "speaker": "MLK"
            },
            {
              "text": "for",
              "start": 316789,
              "end": 316981,
              "confidence": 0.99405,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 317013,
              "end": 317205,
              "confidence": 0.99165,
              "speaker": "MLK"
            },
            {
              "text": "Carter",
              "start": 317245,
              "end": 317613,
              "confidence": 0.99642,
              "speaker": "MLK"
            },
            {
              "text": "3?",
              "start": 317669,
              "end": 318053,
              "confidence": 0.73556,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I don't know.",
          "start": 318149,
          "end": 318909,
          "confidence": 0.84599,
          "words": [
            {
              "text": "I",
              "start": 318149,
              "end": 318309,
              "confidence": 0.9918,
              "speaker": "MLK"
            },
            {
              "text": "don't",
              "start": 318317,
              "end": 318453,
              "confidence": 0.55125,
              "speaker": "MLK"
            },
            {
              "text": "know.",
              "start": 318469,
              "end": 318909,
              "confidence": 0.99492,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "And Mr. Carter, you have to wait until the attorney has finished asking the question, please.",
          "start": 319037,
          "end": 323829,
          "confidence": 0.93577874,
          "words": [
            {
              "text": "And",
              "start": 319037,
              "end": 319253,
              "confidence": 0.54929,
              "speaker": "MLK"
            },
            {
              "text": "Mr.",
              "start": 319269,
              "end": 319453,
              "confidence": 0.99491,
              "speaker": "MLK"
            },
            {
              "text": "Carter,",
              "start": 319469,
              "end": 319653,
              "confidence": 0.99743,
              "speaker": "MLK"
            },
            {
              "text": "you",
              "start": 319669,
              "end": 319797,
              "confidence": 0.96811,
              "speaker": "MLK"
            },
            {
              "text": "have",
              "start": 319821,
              "end": 319933,
              "confidence": 0.99799,
              "speaker": "MLK"
            },
            {
              "text": "to",
              "start": 319949,
              "end": 320053,
              "confidence": 0.99731,
              "speaker": "MLK"
            },
            {
              "text": "wait",
              "start": 320069,
              "end": 320245,
              "confidence": 0.99951,
              "speaker": "MLK"
            },
            {
              "text": "until",
              "start": 320285,
              "end": 320725,
              "confidence": 0.99263,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 320845,
              "end": 321149,
              "confidence": 0.99759,
              "speaker": "MLK"
            },
            {
              "text": "attorney",
              "start": 321197,
              "end": 321453,
              "confidence": 0.99904,
              "speaker": "MLK"
            },
            {
              "text": "has",
              "start": 321469,
              "end": 321597,
              "confidence": 0.65822,
              "speaker": "MLK"
            },
            {
              "text": "finished",
              "start": 321621,
              "end": 322333,
              "confidence": 0.96438,
              "speaker": "MLK"
            },
            {
              "text": "asking",
              "start": 322509,
              "end": 322917,
              "confidence": 0.99562,
              "speaker": "MLK"
            },
            {
              "text": "the",
              "start": 322941,
              "end": 323101,
              "confidence": 0.87168,
              "speaker": "MLK"
            },
            {
              "text": "question,",
              "start": 323133,
              "end": 323397,
              "confidence": 0.99888,
              "speaker": "MLK"
            },
            {
              "text": "please.",
              "start": 323461,
              "end": 323829,
              "confidence": 0.98987,
              "speaker": "MLK"
            }
          ]
        },
        {
          "speaker": "MLK",
          "text": "I. Im sorry. Thats my psychic. Im sorry.",
          "start": 323917,
          "end": 326005,
          "confidence": 0.739085,
          "words": [
            {
              "text": "I.",
              "start": 323917,
              "end": 324045,
              "confidence": 0.40384,
              "speaker": "MLK"
            },
            {
              "text": "Im",
              "start": 324045,
              "end": 324157,
              "confidence": 0.45096,
              "speaker": "MLK"
            },
            {
              "text": "sorry.",
              "start": 324181,
              "end": 324397,
              "confidence": 0.98557,
              "speaker": "MLK"
            },
            {
              "text": "Thats",
              "start": 324421,
              "end": 324621,
              "confidence": 0.62233,
              "speaker": "MLK"
            },
            {
              "text": "my",
              "start": 324653,
              "end": 324845,
              "confidence": 0.996,
              "speaker": "MLK"
            },
            {
              "text": "psychic.",
              "start": 324885,
              "end": 325477,
              "confidence": 0.98824,
              "speaker": "MLK"
            },
            {
              "text": "Im",
              "start": 325581,
              "end": 325821,
              "confidence": 0.49166,
              "speaker": "MLK"
            },
            {
              "text": "sorry.",
              "start": 325853,
              "end": 326005,
              "confidence": 0.97408,
              "speaker": "MLK"
            }
          ]
        }
      ],
      "chapters": [
        {
          "headline": "Clearly Lil Wayne answers to no one. Did you perform at the Virgin Mobile Music Fest in 2008",
          "summary": "Lil Wayne answers questions like: Is that an interview that you actually gave with Katie Courig? Did you perform at the Virgin Mobile Music Fest in 2008 with Kanye West? Have you ever hired a photographer to photograph an event?",
          "start": 1975,
          "end": 111725,
          "gist": "Lil Wayne On The Katie Coury Question"
        },
        {
          "headline": "How would you describe your image in the media? I don't portray anything",
          "summary": "How would you describe your image in the media? I don't portray anything. Who is the real I'dWayne, Michael Carter Jr. Do you recall that any criminal actions were pending against you at the end of 2008?",
          "start": 112585,
          "end": 306021,
          "gist": "Michael Carter Jr: My Image in the Media"
        },
        {
          "headline": "Carter: I don't know. Didn't you win",
          "summary": "Didn't you win the award for best rap Album of the year in 2008 for the Carter 3? I don't know. And Mr. Carter, you have to wait until the attorney has finished asking the question, please.",
          "start": 306093,
          "end": 326005,
          "gist": "Jimmy Carter at the 2008 Oscars"
        }
      ],
      "allWords": [
        {
          "text": "Clearly",
          "start": 1975,
          "end": 2399,
          "confidence": 0.9963,
          "speaker": "MLK"
        },
        {
          "text": "Lil",
          "start": 2487,
          "end": 2783,
          "confidence": 0.95005,
          "speaker": "MLK"
        },
        {
          "text": "Wayne",
          "start": 2839,
          "end": 3175,
          "confidence": 0.96141,
          "speaker": "MLK"
        },
        {
          "text": "answers",
          "start": 3255,
          "end": 3751,
          "confidence": 0.99528,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 3823,
          "end": 4007,
          "confidence": 0.99852,
          "speaker": "MLK"
        },
        {
          "text": "no",
          "start": 4031,
          "end": 4215,
          "confidence": 0.9991,
          "speaker": "MLK"
        },
        {
          "text": "one.",
          "start": 4255,
          "end": 4835,
          "confidence": 0.99671,
          "speaker": "MLK"
        },
        {
          "text": "Is",
          "start": 6655,
          "end": 6991,
          "confidence": 0.999,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 7023,
          "end": 7215,
          "confidence": 0.99788,
          "speaker": "MLK"
        },
        {
          "text": "an",
          "start": 7255,
          "end": 7551,
          "confidence": 0.89274,
          "speaker": "MLK"
        },
        {
          "text": "interview",
          "start": 7623,
          "end": 8023,
          "confidence": 0.99955,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 8079,
          "end": 8271,
          "confidence": 0.98865,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 8303,
          "end": 8591,
          "confidence": 0.99953,
          "speaker": "MLK"
        },
        {
          "text": "actually",
          "start": 8663,
          "end": 9015,
          "confidence": 0.99859,
          "speaker": "MLK"
        },
        {
          "text": "gave",
          "start": 9095,
          "end": 9715,
          "confidence": 0.99923,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 10015,
          "end": 10495,
          "confidence": 0.99897,
          "speaker": "MLK"
        },
        {
          "text": "Katie",
          "start": 10575,
          "end": 10935,
          "confidence": 0.67281,
          "speaker": "MLK"
        },
        {
          "text": "Courig?",
          "start": 10975,
          "end": 11675,
          "confidence": 0.7649,
          "speaker": "MLK"
        },
        {
          "text": "Is",
          "start": 12495,
          "end": 12783,
          "confidence": 0.9916,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 12799,
          "end": 12927,
          "confidence": 0.95526,
          "speaker": "MLK"
        },
        {
          "text": "an",
          "start": 12951,
          "end": 13135,
          "confidence": 0.99205,
          "speaker": "MLK"
        },
        {
          "text": "interview",
          "start": 13175,
          "end": 13431,
          "confidence": 0.99774,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 13463,
          "end": 13583,
          "confidence": 0.98669,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 13599,
          "end": 13799,
          "confidence": 0.99647,
          "speaker": "MLK"
        },
        {
          "text": "actually",
          "start": 13847,
          "end": 14079,
          "confidence": 0.99627,
          "speaker": "MLK"
        },
        {
          "text": "gave",
          "start": 14127,
          "end": 14287,
          "confidence": 0.99857,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 14311,
          "end": 14447,
          "confidence": 0.96926,
          "speaker": "MLK"
        },
        {
          "text": "Katie",
          "start": 14471,
          "end": 14687,
          "confidence": 0.64915,
          "speaker": "MLK"
        },
        {
          "text": "Coury?",
          "start": 14711,
          "end": 14975,
          "confidence": 0.20428,
          "speaker": "MLK"
        },
        {
          "text": "Yeah.",
          "start": 15015,
          "end": 15487,
          "confidence": 0.53392,
          "speaker": "MLK"
        },
        {
          "text": "What's",
          "start": 15591,
          "end": 15823,
          "confidence": 0.54719,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 15839,
          "end": 15967,
          "confidence": 0.96401,
          "speaker": "MLK"
        },
        {
          "text": "name?",
          "start": 15991,
          "end": 16555,
          "confidence": 0.98736,
          "speaker": "MLK"
        },
        {
          "text": "Well,",
          "start": 18615,
          "end": 19143,
          "confidence": 0.97279,
          "speaker": "MLK"
        },
        {
          "text": "that's",
          "start": 19239,
          "end": 19575,
          "confidence": 0.99266,
          "speaker": "MLK"
        },
        {
          "text": "not",
          "start": 19615,
          "end": 19863,
          "confidence": 0.9995,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 19919,
          "end": 20135,
          "confidence": 0.99852,
          "speaker": "MLK"
        },
        {
          "text": "question.",
          "start": 20175,
          "end": 20759,
          "confidence": 0.99883,
          "speaker": "MLK"
        },
        {
          "text": "Name",
          "start": 20927,
          "end": 21255,
          "confidence": 0.70893,
          "speaker": "MLK"
        },
        {
          "text": "pet.",
          "start": 21295,
          "end": 21495,
          "confidence": 0.37679,
          "speaker": "MLK"
        },
        {
          "text": "Ross.",
          "start": 21535,
          "end": 21975,
          "confidence": 0.87128,
          "speaker": "MLK"
        },
        {
          "text": "Hu.",
          "start": 22095,
          "end": 22423,
          "confidence": 0.5221,
          "speaker": "MLK"
        },
        {
          "text": "Pete",
          "start": 22479,
          "end": 22743,
          "confidence": 0.9089,
          "speaker": "MLK"
        },
        {
          "text": "Ross.",
          "start": 22799,
          "end": 23111,
          "confidence": 0.95715,
          "speaker": "MLK"
        },
        {
          "text": "Pete",
          "start": 23183,
          "end": 23367,
          "confidence": 0.79489,
          "speaker": "MLK"
        },
        {
          "text": "Ross.",
          "start": 23391,
          "end": 23791,
          "confidence": 0.7874,
          "speaker": "MLK"
        },
        {
          "text": "That's",
          "start": 23903,
          "end": 24183,
          "confidence": 0.96335,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 24199,
          "end": 24399,
          "confidence": 0.99483,
          "speaker": "MLK"
        },
        {
          "text": "stupid",
          "start": 24447,
          "end": 24751,
          "confidence": 0.99886,
          "speaker": "MLK"
        },
        {
          "text": "ass",
          "start": 24783,
          "end": 24999,
          "confidence": 0.86479,
          "speaker": "MLK"
        },
        {
          "text": "question.",
          "start": 25047,
          "end": 25651,
          "confidence": 0.99928,
          "speaker": "MLK"
        },
        {
          "text": "You",
          "start": 25823,
          "end": 26083,
          "confidence": 0.97734,
          "speaker": "MLK"
        },
        {
          "text": "just",
          "start": 26099,
          "end": 26251,
          "confidence": 0.99273,
          "speaker": "MLK"
        },
        {
          "text": "saw",
          "start": 26283,
          "end": 26427,
          "confidence": 0.98985,
          "speaker": "MLK"
        },
        {
          "text": "me",
          "start": 26451,
          "end": 26587,
          "confidence": 0.78558,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 26611,
          "end": 26747,
          "confidence": 0.67763,
          "speaker": "MLK"
        },
        {
          "text": "there,",
          "start": 26771,
          "end": 26931,
          "confidence": 0.29967,
          "speaker": "MLK"
        },
        {
          "text": "G.",
          "start": 26963,
          "end": 27155,
          "confidence": 0.80127,
          "speaker": "MLK"
        },
        {
          "text": "An",
          "start": 27195,
          "end": 27395,
          "confidence": 0.80667,
          "speaker": "MLK"
        },
        {
          "text": "interview",
          "start": 27435,
          "end": 27715,
          "confidence": 0.99911,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 27755,
          "end": 27883,
          "confidence": 0.99475,
          "speaker": "MLK"
        },
        {
          "text": "her.",
          "start": 27899,
          "end": 28195,
          "confidence": 0.96823,
          "speaker": "MLK"
        },
        {
          "text": "Okay,",
          "start": 28275,
          "end": 29091,
          "confidence": 0.66173,
          "speaker": "MLK"
        },
        {
          "text": "so",
          "start": 29283,
          "end": 29611,
          "confidence": 0.99658,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 29643,
          "end": 29835,
          "confidence": 0.99984,
          "speaker": "MLK"
        },
        {
          "text": "was",
          "start": 29875,
          "end": 30075,
          "confidence": 0.9994,
          "speaker": "MLK"
        },
        {
          "text": "you.",
          "start": 30115,
          "end": 30695,
          "confidence": 0.99779,
          "speaker": "MLK"
        },
        {
          "text": "Did",
          "start": 31635,
          "end": 31971,
          "confidence": 0.99971,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 32003,
          "end": 32387,
          "confidence": 0.99972,
          "speaker": "MLK"
        },
        {
          "text": "perform",
          "start": 32491,
          "end": 32755,
          "confidence": 0.99971,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 32795,
          "end": 33019,
          "confidence": 0.9992,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 33067,
          "end": 33419,
          "confidence": 0.99886,
          "speaker": "MLK"
        },
        {
          "text": "Virgin",
          "start": 33507,
          "end": 34083,
          "confidence": 0.99945,
          "speaker": "MLK"
        },
        {
          "text": "Mobile",
          "start": 34179,
          "end": 34795,
          "confidence": 0.97877,
          "speaker": "MLK"
        },
        {
          "text": "Music",
          "start": 34915,
          "end": 35219,
          "confidence": 0.99877,
          "speaker": "MLK"
        },
        {
          "text": "Fest",
          "start": 35267,
          "end": 35619,
          "confidence": 0.96695,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 35707,
          "end": 35955,
          "confidence": 0.99967,
          "speaker": "MLK"
        },
        {
          "text": "2008",
          "start": 35995,
          "end": 36843,
          "confidence": 0.99973,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 36899,
          "end": 37139,
          "confidence": 0.99914,
          "speaker": "MLK"
        },
        {
          "text": "Kanye",
          "start": 37187,
          "end": 37691,
          "confidence": 0.9253,
          "speaker": "MLK"
        },
        {
          "text": "West?",
          "start": 37763,
          "end": 38375,
          "confidence": 0.99899,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 40515,
          "end": 40779,
          "confidence": 0.999,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 40787,
          "end": 41019,
          "confidence": 0.95895,
          "speaker": "MLK"
        },
        {
          "text": "know.",
          "start": 41067,
          "end": 41611,
          "confidence": 0.99809,
          "speaker": "MLK"
        },
        {
          "text": "But",
          "start": 41763,
          "end": 42027,
          "confidence": 0.99621,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 42051,
          "end": 42211,
          "confidence": 0.99779,
          "speaker": "MLK"
        },
        {
          "text": "know",
          "start": 42243,
          "end": 42435,
          "confidence": 0.99696,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 42475,
          "end": 42867,
          "confidence": 0.9984,
          "speaker": "MLK"
        },
        {
          "text": "did",
          "start": 42971,
          "end": 43475,
          "confidence": 0.94427,
          "speaker": "MLK"
        },
        {
          "text": "perform",
          "start": 43595,
          "end": 44163,
          "confidence": 0.9988,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 44299,
          "end": 44643,
          "confidence": 0.99402,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 44699,
          "end": 45227,
          "confidence": 0.98291,
          "speaker": "MLK"
        },
        {
          "text": "badass",
          "start": 45371,
          "end": 46139,
          "confidence": 0.57793,
          "speaker": "MLK"
        },
        {
          "text": "bitch",
          "start": 46227,
          "end": 46547,
          "confidence": 0.72504,
          "speaker": "MLK"
        },
        {
          "text": "birthday",
          "start": 46611,
          "end": 47067,
          "confidence": 0.99603,
          "speaker": "MLK"
        },
        {
          "text": "party",
          "start": 47131,
          "end": 47547,
          "confidence": 0.99512,
          "speaker": "MLK"
        },
        {
          "text": "recently.",
          "start": 47651,
          "end": 48295,
          "confidence": 0.99875,
          "speaker": "MLK"
        },
        {
          "text": "She",
          "start": 48595,
          "end": 48931,
          "confidence": 0.99787,
          "speaker": "MLK"
        },
        {
          "text": "was",
          "start": 48963,
          "end": 49419,
          "confidence": 0.9947,
          "speaker": "MLK"
        },
        {
          "text": "crazy",
          "start": 49547,
          "end": 50235,
          "confidence": 0.9948,
          "speaker": "MLK"
        },
        {
          "text": "stupid",
          "start": 50355,
          "end": 50795,
          "confidence": 0.99514,
          "speaker": "MLK"
        },
        {
          "text": "thick.",
          "start": 50835,
          "end": 51359,
          "confidence": 0.88234,
          "speaker": "MLK"
        },
        {
          "text": "Isn't",
          "start": 51507,
          "end": 51887,
          "confidence": 0.89661,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 51911,
          "end": 52215,
          "confidence": 0.97429,
          "speaker": "MLK"
        },
        {
          "text": "something",
          "start": 52295,
          "end": 52511,
          "confidence": 0.99915,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 52543,
          "end": 52735,
          "confidence": 0.97889,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 52775,
          "end": 52927,
          "confidence": 0.99925,
          "speaker": "MLK"
        },
        {
          "text": "would",
          "start": 52951,
          "end": 53279,
          "confidence": 0.99704,
          "speaker": "MLK"
        },
        {
          "text": "remember",
          "start": 53367,
          "end": 53879,
          "confidence": 0.99908,
          "speaker": "MLK"
        },
        {
          "text": "if",
          "start": 53967,
          "end": 54407,
          "confidence": 0.99505,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 54511,
          "end": 54823,
          "confidence": 0.98663,
          "speaker": "MLK"
        },
        {
          "text": "album",
          "start": 54879,
          "end": 55327,
          "confidence": 0.83069,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 55391,
          "end": 55615,
          "confidence": 0.97609,
          "speaker": "MLK"
        },
        {
          "text": "Carter",
          "start": 55655,
          "end": 56135,
          "confidence": 0.97056,
          "speaker": "MLK"
        },
        {
          "text": "3",
          "start": 56215,
          "end": 56551,
          "confidence": 0.81827,
          "speaker": "MLK"
        },
        {
          "text": "was",
          "start": 56623,
          "end": 56855,
          "confidence": 0.99743,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 56895,
          "end": 57047,
          "confidence": 0.99875,
          "speaker": "MLK"
        },
        {
          "text": "biggest",
          "start": 57071,
          "end": 57375,
          "confidence": 0.99871,
          "speaker": "MLK"
        },
        {
          "text": "selling",
          "start": 57415,
          "end": 57759,
          "confidence": 0.98966,
          "speaker": "MLK"
        },
        {
          "text": "album",
          "start": 57807,
          "end": 58175,
          "confidence": 0.79976,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 58215,
          "end": 58343,
          "confidence": 0.99148,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 58359,
          "end": 58487,
          "confidence": 0.99763,
          "speaker": "MLK"
        },
        {
          "text": "year",
          "start": 58511,
          "end": 58671,
          "confidence": 0.99892,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 58703,
          "end": 58895,
          "confidence": 0.97883,
          "speaker": "MLK"
        },
        {
          "text": "2008?",
          "start": 58935,
          "end": 60155,
          "confidence": 0.99086,
          "speaker": "MLK"
        },
        {
          "text": "Isn't",
          "start": 61335,
          "end": 61791,
          "confidence": 0.88345,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 61823,
          "end": 62207,
          "confidence": 0.81638,
          "speaker": "MLK"
        },
        {
          "text": "something",
          "start": 62311,
          "end": 62623,
          "confidence": 0.99544,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 62679,
          "end": 62967,
          "confidence": 0.9907,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 63031,
          "end": 63279,
          "confidence": 0.99909,
          "speaker": "MLK"
        },
        {
          "text": "would",
          "start": 63327,
          "end": 63751,
          "confidence": 0.998,
          "speaker": "MLK"
        },
        {
          "text": "remember",
          "start": 63863,
          "end": 64215,
          "confidence": 0.9989,
          "speaker": "MLK"
        },
        {
          "text": "that?",
          "start": 64255,
          "end": 64551,
          "confidence": 0.98574,
          "speaker": "MLK"
        },
        {
          "text": "Yes.",
          "start": 64623,
          "end": 65235,
          "confidence": 0.72203,
          "speaker": "MLK"
        },
        {
          "text": "Isn't",
          "start": 66215,
          "end": 66671,
          "confidence": 0.89954,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 66703,
          "end": 66871,
          "confidence": 0.99539,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 66903,
          "end": 67119,
          "confidence": 0.99639,
          "speaker": "MLK"
        },
        {
          "text": "personal",
          "start": 67167,
          "end": 67543,
          "confidence": 0.99983,
          "speaker": "MLK"
        },
        {
          "text": "opinion",
          "start": 67639,
          "end": 68223,
          "confidence": 0.96812,
          "speaker": "MLK"
        },
        {
          "text": "type",
          "start": 68279,
          "end": 68583,
          "confidence": 0.99518,
          "speaker": "MLK"
        },
        {
          "text": "question?",
          "start": 68639,
          "end": 69235,
          "confidence": 0.99857,
          "speaker": "MLK"
        },
        {
          "text": "That's",
          "start": 70775,
          "end": 71079,
          "confidence": 0.24375,
          "speaker": "MLK"
        },
        {
          "text": "why",
          "start": 71087,
          "end": 71183,
          "confidence": 0.52337,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 71199,
          "end": 71327,
          "confidence": 0.97552,
          "speaker": "MLK"
        },
        {
          "text": "got",
          "start": 71351,
          "end": 71463,
          "confidence": 0.95677,
          "speaker": "MLK"
        },
        {
          "text": "that.",
          "start": 71479,
          "end": 71727,
          "confidence": 0.56232,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 71791,
          "end": 71943,
          "confidence": 0.9063,
          "speaker": "MLK"
        },
        {
          "text": "mean,",
          "start": 71959,
          "end": 72111,
          "confidence": 0.88428,
          "speaker": "MLK"
        },
        {
          "text": "because",
          "start": 72143,
          "end": 72263,
          "confidence": 0.54822,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 72279,
          "end": 72383,
          "confidence": 0.96025,
          "speaker": "MLK"
        },
        {
          "text": "would",
          "start": 72399,
          "end": 72527,
          "confidence": 0.92383,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 72551,
          "end": 72807,
          "confidence": 0.99463,
          "speaker": "MLK"
        },
        {
          "text": "actually",
          "start": 72871,
          "end": 73167,
          "confidence": 0.99009,
          "speaker": "MLK"
        },
        {
          "text": "answering",
          "start": 73231,
          "end": 73631,
          "confidence": 0.96392,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 73663,
          "end": 73831,
          "confidence": 0.88525,
          "speaker": "MLK"
        },
        {
          "text": "question",
          "start": 73863,
          "end": 74103,
          "confidence": 0.99801,
          "speaker": "MLK"
        },
        {
          "text": "to.",
          "start": 74159,
          "end": 74399,
          "confidence": 0.7769,
          "speaker": "MLK"
        },
        {
          "text": "Isn't",
          "start": 74447,
          "end": 74703,
          "confidence": 0.82266,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 74719,
          "end": 75039,
          "confidence": 0.98842,
          "speaker": "MLK"
        },
        {
          "text": "something.",
          "start": 75127,
          "end": 75711,
          "confidence": 0.99928,
          "speaker": "MLK"
        },
        {
          "text": "That's",
          "start": 75863,
          "end": 76231,
          "confidence": 0.89894,
          "speaker": "MLK"
        },
        {
          "text": "my",
          "start": 76263,
          "end": 76407,
          "confidence": 0.99926,
          "speaker": "MLK"
        },
        {
          "text": "question.",
          "start": 76431,
          "end": 76687,
          "confidence": 0.99699,
          "speaker": "MLK"
        },
        {
          "text": "Isn't",
          "start": 76751,
          "end": 77023,
          "confidence": 0.82039,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 77039,
          "end": 77359,
          "confidence": 0.98387,
          "speaker": "MLK"
        },
        {
          "text": "something",
          "start": 77447,
          "end": 77839,
          "confidence": 0.99779,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 77927,
          "end": 78127,
          "confidence": 0.98793,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 78151,
          "end": 78263,
          "confidence": 0.99874,
          "speaker": "MLK"
        },
        {
          "text": "would",
          "start": 78279,
          "end": 78551,
          "confidence": 0.9973,
          "speaker": "MLK"
        },
        {
          "text": "remember?",
          "start": 78623,
          "end": 79315,
          "confidence": 0.99824,
          "speaker": "MLK"
        },
        {
          "text": "Isn't",
          "start": 79745,
          "end": 80177,
          "confidence": 0.77294,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 80201,
          "end": 80505,
          "confidence": 0.96225,
          "speaker": "MLK"
        },
        {
          "text": "something.",
          "start": 80585,
          "end": 81017,
          "confidence": 0.99761,
          "speaker": "MLK"
        },
        {
          "text": "That's",
          "start": 81121,
          "end": 81417,
          "confidence": 0.82875,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 81441,
          "end": 81577,
          "confidence": 0.98192,
          "speaker": "MLK"
        },
        {
          "text": "question",
          "start": 81601,
          "end": 81761,
          "confidence": 0.99961,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 81793,
          "end": 81913,
          "confidence": 0.98611,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 81929,
          "end": 82033,
          "confidence": 0.99679,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 82049,
          "end": 82153,
          "confidence": 0.99601,
          "speaker": "MLK"
        },
        {
          "text": "answer.",
          "start": 82169,
          "end": 82377,
          "confidence": 0.9535,
          "speaker": "MLK"
        },
        {
          "text": "Your",
          "start": 82401,
          "end": 82513,
          "confidence": 0.9573,
          "speaker": "MLK"
        },
        {
          "text": "honor.",
          "start": 82529,
          "end": 82977,
          "confidence": 0.60965,
          "speaker": "MLK"
        },
        {
          "text": "Go",
          "start": 83081,
          "end": 83249,
          "confidence": 0.72681,
          "speaker": "MLK"
        },
        {
          "text": "ahead.",
          "start": 83257,
          "end": 83377,
          "confidence": 0.56259,
          "speaker": "MLK"
        },
        {
          "text": "Isn't",
          "start": 83401,
          "end": 83593,
          "confidence": 0.77581,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 83609,
          "end": 83905,
          "confidence": 0.98514,
          "speaker": "MLK"
        },
        {
          "text": "something.",
          "start": 83985,
          "end": 84605,
          "confidence": 0.99821,
          "speaker": "MLK"
        },
        {
          "text": "Do",
          "start": 85505,
          "end": 85793,
          "confidence": 0.99573,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 85809,
          "end": 85937,
          "confidence": 0.99742,
          "speaker": "MLK"
        },
        {
          "text": "best",
          "start": 85961,
          "end": 86169,
          "confidence": 0.9993,
          "speaker": "MLK"
        },
        {
          "text": "trying",
          "start": 86217,
          "end": 86353,
          "confidence": 0.85274,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 86369,
          "end": 86473,
          "confidence": 0.99164,
          "speaker": "MLK"
        },
        {
          "text": "answer",
          "start": 86489,
          "end": 86737,
          "confidence": 0.99859,
          "speaker": "MLK"
        },
        {
          "text": "it.",
          "start": 86761,
          "end": 87325,
          "confidence": 0.99641,
          "speaker": "MLK"
        },
        {
          "text": "Yes.",
          "start": 89345,
          "end": 89921,
          "confidence": 0.58458,
          "speaker": "MLK"
        },
        {
          "text": "Something",
          "start": 90033,
          "end": 90281,
          "confidence": 0.97378,
          "speaker": "MLK"
        },
        {
          "text": "out",
          "start": 90313,
          "end": 90433,
          "confidence": 0.96931,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 90449,
          "end": 90553,
          "confidence": 0.82842,
          "speaker": "MLK"
        },
        {
          "text": "youres.",
          "start": 90569,
          "end": 91125,
          "confidence": 0.29438,
          "speaker": "MLK"
        },
        {
          "text": "That's",
          "start": 92465,
          "end": 92817,
          "confidence": 0.78724,
          "speaker": "MLK"
        },
        {
          "text": "myswer.",
          "start": 92841,
          "end": 93565,
          "confidence": 0.48487,
          "speaker": "MLK"
        },
        {
          "text": "Yeah,",
          "start": 94545,
          "end": 94897,
          "confidence": 0.7571,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 94921,
          "end": 95057,
          "confidence": 0.99056,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 95081,
          "end": 95313,
          "confidence": 0.98643,
          "speaker": "MLK"
        },
        {
          "text": "something",
          "start": 95369,
          "end": 95585,
          "confidence": 0.99573,
          "speaker": "MLK"
        },
        {
          "text": "out",
          "start": 95625,
          "end": 95753,
          "confidence": 0.98806,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 95769,
          "end": 95897,
          "confidence": 0.98076,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 95921,
          "end": 96105,
          "confidence": 0.9862,
          "speaker": "MLK"
        },
        {
          "text": "ass.",
          "start": 96145,
          "end": 96561,
          "confidence": 0.92887,
          "speaker": "MLK"
        },
        {
          "text": "Have",
          "start": 96673,
          "end": 96849,
          "confidence": 0.91973,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 96857,
          "end": 97001,
          "confidence": 0.98427,
          "speaker": "MLK"
        },
        {
          "text": "ever",
          "start": 97033,
          "end": 97225,
          "confidence": 0.9973,
          "speaker": "MLK"
        },
        {
          "text": "hired",
          "start": 97265,
          "end": 97537,
          "confidence": 0.99954,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 97601,
          "end": 97993,
          "confidence": 0.99786,
          "speaker": "MLK"
        },
        {
          "text": "photographer",
          "start": 98089,
          "end": 99017,
          "confidence": 0.99927,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 99081,
          "end": 99713,
          "confidence": 0.99848,
          "speaker": "MLK"
        },
        {
          "text": "photograph",
          "start": 99889,
          "end": 100529,
          "confidence": 0.99912,
          "speaker": "MLK"
        },
        {
          "text": "an",
          "start": 100577,
          "end": 100809,
          "confidence": 0.99836,
          "speaker": "MLK"
        },
        {
          "text": "event?",
          "start": 100857,
          "end": 101445,
          "confidence": 0.98586,
          "speaker": "MLK"
        },
        {
          "text": "Have",
          "start": 102185,
          "end": 102473,
          "confidence": 0.99459,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 102489,
          "end": 102641,
          "confidence": 0.97316,
          "speaker": "MLK"
        },
        {
          "text": "ever",
          "start": 102673,
          "end": 102817,
          "confidence": 0.9948,
          "speaker": "MLK"
        },
        {
          "text": "hired",
          "start": 102841,
          "end": 103001,
          "confidence": 0.99749,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 103033,
          "end": 103153,
          "confidence": 0.99511,
          "speaker": "MLK"
        },
        {
          "text": "photographer?",
          "start": 103169,
          "end": 103617,
          "confidence": 0.7908,
          "speaker": "MLK"
        },
        {
          "text": "The",
          "start": 103641,
          "end": 103753,
          "confidence": 0.95607,
          "speaker": "MLK"
        },
        {
          "text": "photograph.",
          "start": 103769,
          "end": 104565,
          "confidence": 0.97492,
          "speaker": "MLK"
        },
        {
          "text": "Sorry,",
          "start": 104865,
          "end": 105369,
          "confidence": 0.66748,
          "speaker": "MLK"
        },
        {
          "text": "sir,",
          "start": 105417,
          "end": 105625,
          "confidence": 0.39362,
          "speaker": "MLK"
        },
        {
          "text": "no.",
          "start": 105665,
          "end": 105841,
          "confidence": 0.96519,
          "speaker": "MLK"
        },
        {
          "text": "I'm",
          "start": 105873,
          "end": 106033,
          "confidence": 0.9323,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 106049,
          "end": 106297,
          "confidence": 0.99605,
          "speaker": "MLK"
        },
        {
          "text": "superstar.",
          "start": 106361,
          "end": 106881,
          "confidence": 0.93307,
          "speaker": "MLK"
        },
        {
          "text": "People",
          "start": 106953,
          "end": 107233,
          "confidence": 0.9987,
          "speaker": "MLK"
        },
        {
          "text": "hire",
          "start": 107289,
          "end": 107529,
          "confidence": 0.5402,
          "speaker": "MLK"
        },
        {
          "text": "them",
          "start": 107577,
          "end": 107785,
          "confidence": 0.98553,
          "speaker": "MLK"
        },
        {
          "text": "themselves",
          "start": 107825,
          "end": 108321,
          "confidence": 0.91025,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 108393,
          "end": 108577,
          "confidence": 0.9994,
          "speaker": "MLK"
        },
        {
          "text": "photograph",
          "start": 108601,
          "end": 109089,
          "confidence": 0.99937,
          "speaker": "MLK"
        },
        {
          "text": "me.",
          "start": 109137,
          "end": 109725,
          "confidence": 0.9982,
          "speaker": "MLK"
        },
        {
          "text": "We",
          "start": 110305,
          "end": 110593,
          "confidence": 0.99802,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 110609,
          "end": 110825,
          "confidence": 0.97515,
          "speaker": "MLK"
        },
        {
          "text": "hire",
          "start": 110865,
          "end": 111089,
          "confidence": 0.99025,
          "speaker": "MLK"
        },
        {
          "text": "them.",
          "start": 111137,
          "end": 111725,
          "confidence": 0.99725,
          "speaker": "MLK"
        },
        {
          "text": "How",
          "start": 112585,
          "end": 112897,
          "confidence": 0.99973,
          "speaker": "MLK"
        },
        {
          "text": "would",
          "start": 112921,
          "end": 113057,
          "confidence": 0.99802,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 113081,
          "end": 113289,
          "confidence": 0.99874,
          "speaker": "MLK"
        },
        {
          "text": "describe",
          "start": 113337,
          "end": 113841,
          "confidence": 0.99876,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 113913,
          "end": 114193,
          "confidence": 0.99904,
          "speaker": "MLK"
        },
        {
          "text": "image",
          "start": 114249,
          "end": 114593,
          "confidence": 0.99928,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 114649,
          "end": 114817,
          "confidence": 0.99492,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 114841,
          "end": 115121,
          "confidence": 0.99895,
          "speaker": "MLK"
        },
        {
          "text": "media?",
          "start": 115193,
          "end": 115805,
          "confidence": 0.99898,
          "speaker": "MLK"
        },
        {
          "text": "How",
          "start": 116785,
          "end": 117073,
          "confidence": 0.9992,
          "speaker": "MLK"
        },
        {
          "text": "would",
          "start": 117089,
          "end": 117217,
          "confidence": 0.99711,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 117241,
          "end": 117401,
          "confidence": 0.99778,
          "speaker": "MLK"
        },
        {
          "text": "describe",
          "start": 117433,
          "end": 117809,
          "confidence": 0.9979,
          "speaker": "MLK"
        },
        {
          "text": "my",
          "start": 117857,
          "end": 118065,
          "confidence": 0.9944,
          "speaker": "MLK"
        },
        {
          "text": "image",
          "start": 118105,
          "end": 118385,
          "confidence": 0.99728,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 118425,
          "end": 118577,
          "confidence": 0.97928,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 118601,
          "end": 118833,
          "confidence": 0.99799,
          "speaker": "MLK"
        },
        {
          "text": "media?",
          "start": 118889,
          "end": 119177,
          "confidence": 0.99753,
          "speaker": "MLK"
        },
        {
          "text": "Yes.",
          "start": 119241,
          "end": 119657,
          "confidence": 0.77837,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 119761,
          "end": 119953,
          "confidence": 0.99823,
          "speaker": "MLK"
        },
        {
          "text": "wouldn't",
          "start": 119969,
          "end": 120329,
          "confidence": 0.97877,
          "speaker": "MLK"
        },
        {
          "text": "describe",
          "start": 120377,
          "end": 120761,
          "confidence": 0.99935,
          "speaker": "MLK"
        },
        {
          "text": "it.",
          "start": 120793,
          "end": 121365,
          "confidence": 0.99932,
          "speaker": "MLK"
        },
        {
          "text": "Well,",
          "start": 123505,
          "end": 123865,
          "confidence": 0.97861,
          "speaker": "MLK"
        },
        {
          "text": "how",
          "start": 123905,
          "end": 124081,
          "confidence": 0.99945,
          "speaker": "MLK"
        },
        {
          "text": "would",
          "start": 124113,
          "end": 124281,
          "confidence": 0.99951,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 124313,
          "end": 124505,
          "confidence": 0.99917,
          "speaker": "MLK"
        },
        {
          "text": "describe",
          "start": 124545,
          "end": 124945,
          "confidence": 0.99876,
          "speaker": "MLK"
        },
        {
          "text": "it",
          "start": 124985,
          "end": 125137,
          "confidence": 0.99838,
          "speaker": "MLK"
        },
        {
          "text": "if",
          "start": 125161,
          "end": 125273,
          "confidence": 0.99983,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 125289,
          "end": 125417,
          "confidence": 0.99918,
          "speaker": "MLK"
        },
        {
          "text": "had",
          "start": 125441,
          "end": 125649,
          "confidence": 0.9988,
          "speaker": "MLK"
        },
        {
          "text": "to?",
          "start": 125697,
          "end": 126097,
          "confidence": 0.99832,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 126201,
          "end": 126369,
          "confidence": 0.99393,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 126377,
          "end": 126561,
          "confidence": 0.9763,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 126593,
          "end": 126785,
          "confidence": 0.99758,
          "speaker": "MLK"
        },
        {
          "text": "to.",
          "start": 126825,
          "end": 127169,
          "confidence": 0.99144,
          "speaker": "MLK"
        },
        {
          "text": "Well,",
          "start": 127257,
          "end": 127481,
          "confidence": 0.95666,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 127513,
          "end": 127657,
          "confidence": 0.99969,
          "speaker": "MLK"
        },
        {
          "text": "image",
          "start": 127681,
          "end": 127969,
          "confidence": 0.99654,
          "speaker": "MLK"
        },
        {
          "text": "are",
          "start": 128017,
          "end": 128225,
          "confidence": 0.99839,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 128265,
          "end": 128537,
          "confidence": 0.99866,
          "speaker": "MLK"
        },
        {
          "text": "portraying",
          "start": 128601,
          "end": 129193,
          "confidence": 0.84129,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 129289,
          "end": 129497,
          "confidence": 0.99799,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 129521,
          "end": 129777,
          "confidence": 0.9992,
          "speaker": "MLK"
        },
        {
          "text": "media?",
          "start": 129841,
          "end": 130161,
          "confidence": 0.99544,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 130233,
          "end": 130369,
          "confidence": 0.99883,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 130377,
          "end": 130585,
          "confidence": 0.95768,
          "speaker": "MLK"
        },
        {
          "text": "portray",
          "start": 130625,
          "end": 131097,
          "confidence": 0.76056,
          "speaker": "MLK"
        },
        {
          "text": "anything.",
          "start": 131161,
          "end": 131593,
          "confidence": 0.99685,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 131649,
          "end": 131793,
          "confidence": 0.99337,
          "speaker": "MLK"
        },
        {
          "text": "am",
          "start": 131809,
          "end": 131961,
          "confidence": 0.996,
          "speaker": "MLK"
        },
        {
          "text": "who",
          "start": 131993,
          "end": 132137,
          "confidence": 0.99832,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 132161,
          "end": 132321,
          "confidence": 0.99801,
          "speaker": "MLK"
        },
        {
          "text": "am.",
          "start": 132353,
          "end": 132785,
          "confidence": 0.99883,
          "speaker": "MLK"
        },
        {
          "text": "And",
          "start": 132905,
          "end": 133137,
          "confidence": 0.97375,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 133161,
          "end": 133321,
          "confidence": 0.99657,
          "speaker": "MLK"
        },
        {
          "text": "guys",
          "start": 133353,
          "end": 133593,
          "confidence": 0.9969,
          "speaker": "MLK"
        },
        {
          "text": "portray",
          "start": 133649,
          "end": 134025,
          "confidence": 0.99492,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 134065,
          "end": 134217,
          "confidence": 0.99819,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 134241,
          "end": 134401,
          "confidence": 0.99836,
          "speaker": "MLK"
        },
        {
          "text": "get?",
          "start": 134433,
          "end": 134793,
          "confidence": 0.93392,
          "speaker": "MLK"
        },
        {
          "text": "No.",
          "start": 134889,
          "end": 135385,
          "confidence": 0.66631,
          "speaker": "MLK"
        },
        {
          "text": "Who",
          "start": 135505,
          "end": 135737,
          "confidence": 0.99921,
          "speaker": "MLK"
        },
        {
          "text": "are",
          "start": 135761,
          "end": 135945,
          "confidence": 0.99982,
          "speaker": "MLK"
        },
        {
          "text": "you?",
          "start": 135985,
          "end": 136209,
          "confidence": 0.99864,
          "speaker": "MLK"
        },
        {
          "text": "Who",
          "start": 136257,
          "end": 136417,
          "confidence": 0.99795,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 136441,
          "end": 136625,
          "confidence": 0.99167,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 136665,
          "end": 136817,
          "confidence": 0.52722,
          "speaker": "MLK"
        },
        {
          "text": "real",
          "start": 136841,
          "end": 137049,
          "confidence": 0.99483,
          "speaker": "MLK"
        },
        {
          "text": "I'dWayne,",
          "start": 137097,
          "end": 137673,
          "confidence": 0.23658,
          "speaker": "MLK"
        },
        {
          "text": "Michael",
          "start": 137729,
          "end": 138065,
          "confidence": 0.97702,
          "speaker": "MLK"
        },
        {
          "text": "Carter",
          "start": 138105,
          "end": 138401,
          "confidence": 0.98594,
          "speaker": "MLK"
        },
        {
          "text": "Jr.",
          "start": 138433,
          "end": 139025,
          "confidence": 0.98782,
          "speaker": "MLK"
        },
        {
          "text": "Okay.",
          "start": 139145,
          "end": 139889,
          "confidence": 0.58173,
          "speaker": "MLK"
        },
        {
          "text": "Do",
          "start": 140057,
          "end": 140289,
          "confidence": 0.93358,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 140297,
          "end": 140845,
          "confidence": 0.95742,
          "speaker": "MLK"
        },
        {
          "text": "like",
          "start": 142425,
          "end": 142761,
          "confidence": 0.998,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 142793,
          "end": 142961,
          "confidence": 0.99929,
          "speaker": "MLK"
        },
        {
          "text": "portray",
          "start": 142993,
          "end": 143425,
          "confidence": 0.79289,
          "speaker": "MLK"
        },
        {
          "text": "yourself",
          "start": 143465,
          "end": 144001,
          "confidence": 0.99892,
          "speaker": "MLK"
        },
        {
          "text": "as.",
          "start": 144073,
          "end": 144449,
          "confidence": 0.97085,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 144537,
          "end": 144713,
          "confidence": 0.99681,
          "speaker": "MLK"
        },
        {
          "text": "just",
          "start": 144729,
          "end": 144953,
          "confidence": 0.99709,
          "speaker": "MLK"
        },
        {
          "text": "answered",
          "start": 145009,
          "end": 145345,
          "confidence": 0.9691,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 145385,
          "end": 145537,
          "confidence": 0.98606,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 145561,
          "end": 145697,
          "confidence": 0.99457,
          "speaker": "MLK"
        },
        {
          "text": "said",
          "start": 145721,
          "end": 145881,
          "confidence": 0.97842,
          "speaker": "MLK"
        },
        {
          "text": "that.",
          "start": 145913,
          "end": 146057,
          "confidence": 0.9669,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 146081,
          "end": 146169,
          "confidence": 0.9989,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 146177,
          "end": 146337,
          "confidence": 0.99134,
          "speaker": "MLK"
        },
        {
          "text": "like",
          "start": 146361,
          "end": 146521,
          "confidence": 0.99746,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 146553,
          "end": 146697,
          "confidence": 0.99784,
          "speaker": "MLK"
        },
        {
          "text": "portray",
          "start": 146721,
          "end": 147041,
          "confidence": 0.99276,
          "speaker": "MLK"
        },
        {
          "text": "myself",
          "start": 147073,
          "end": 147409,
          "confidence": 0.99898,
          "speaker": "MLK"
        },
        {
          "text": "as",
          "start": 147457,
          "end": 147665,
          "confidence": 0.99894,
          "speaker": "MLK"
        },
        {
          "text": "nobody.",
          "start": 147705,
          "end": 148241,
          "confidence": 0.98603,
          "speaker": "MLK"
        },
        {
          "text": "Okay.",
          "start": 148313,
          "end": 149081,
          "confidence": 0.3635,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 149273,
          "end": 149697,
          "confidence": 0.82268,
          "speaker": "MLK"
        },
        {
          "text": "completely",
          "start": 149761,
          "end": 150177,
          "confidence": 0.74769,
          "speaker": "MLK"
        },
        {
          "text": "be",
          "start": 150241,
          "end": 150609,
          "confidence": 0.92649,
          "speaker": "MLK"
        },
        {
          "text": "DWAYNE",
          "start": 150697,
          "end": 151073,
          "confidence": 0.59994,
          "speaker": "MLK"
        },
        {
          "text": "Michael",
          "start": 151129,
          "end": 151465,
          "confidence": 0.97359,
          "speaker": "MLK"
        },
        {
          "text": "Carter",
          "start": 151505,
          "end": 151777,
          "confidence": 0.96957,
          "speaker": "MLK"
        },
        {
          "text": "Jr.",
          "start": 151801,
          "end": 152057,
          "confidence": 0.9884,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 152081,
          "end": 152193,
          "confidence": 0.99654,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 152209,
          "end": 152377,
          "confidence": 0.98836,
          "speaker": "MLK"
        },
        {
          "text": "portray",
          "start": 152401,
          "end": 152745,
          "confidence": 0.96841,
          "speaker": "MLK"
        },
        {
          "text": "myself",
          "start": 152785,
          "end": 153105,
          "confidence": 0.99867,
          "speaker": "MLK"
        },
        {
          "text": "as",
          "start": 153145,
          "end": 153345,
          "confidence": 0.99737,
          "speaker": "MLK"
        },
        {
          "text": "anything",
          "start": 153385,
          "end": 154009,
          "confidence": 0.99748,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 154137,
          "end": 154449,
          "confidence": 0.71502,
          "speaker": "MLK"
        },
        {
          "text": "image",
          "start": 154497,
          "end": 154785,
          "confidence": 0.99069,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 154825,
          "end": 155025,
          "confidence": 0.98775,
          "speaker": "MLK"
        },
        {
          "text": "self",
          "start": 155065,
          "end": 155305,
          "confidence": 0.9992,
          "speaker": "MLK"
        },
        {
          "text": "described.",
          "start": 155345,
          "end": 155865,
          "confidence": 0.99159,
          "speaker": "MLK"
        },
        {
          "text": "Well,",
          "start": 155945,
          "end": 156113,
          "confidence": 0.82489,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 156129,
          "end": 156233,
          "confidence": 0.99494,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 156249,
          "end": 156329,
          "confidence": 0.99917,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 156337,
          "end": 156457,
          "confidence": 0.99879,
          "speaker": "MLK"
        },
        {
          "text": "wait",
          "start": 156481,
          "end": 156593,
          "confidence": 0.99966,
          "speaker": "MLK"
        },
        {
          "text": "till",
          "start": 156609,
          "end": 156777,
          "confidence": 0.44304,
          "speaker": "MLK"
        },
        {
          "text": "I'm",
          "start": 156801,
          "end": 156977,
          "confidence": 0.98549,
          "speaker": "MLK"
        },
        {
          "text": "done",
          "start": 157001,
          "end": 157137,
          "confidence": 0.98148,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 157161,
          "end": 157297,
          "confidence": 0.99928,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 157321,
          "end": 157457,
          "confidence": 0.92564,
          "speaker": "MLK"
        },
        {
          "text": "question.",
          "start": 157481,
          "end": 157737,
          "confidence": 0.96263,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 157801,
          "end": 157905,
          "confidence": 0.99079,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 157905,
          "end": 158033,
          "confidence": 0.98116,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 158049,
          "end": 158201,
          "confidence": 0.99639,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 158233,
          "end": 158401,
          "confidence": 0.99655,
          "speaker": "MLK"
        },
        {
          "text": "wait",
          "start": 158433,
          "end": 158601,
          "confidence": 0.98604,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 158633,
          "end": 158849,
          "confidence": 0.7309,
          "speaker": "MLK"
        },
        {
          "text": "anything.",
          "start": 158897,
          "end": 159313,
          "confidence": 0.99702,
          "speaker": "MLK"
        },
        {
          "text": "Honestly,",
          "start": 159369,
          "end": 159921,
          "confidence": 0.9911,
          "speaker": "MLK"
        },
        {
          "text": "I.",
          "start": 159993,
          "end": 160435,
          "confidence": 0.79078,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 160545,
          "end": 160719,
          "confidence": 0.96072,
          "speaker": "MLK"
        },
        {
          "text": "mean,",
          "start": 160727,
          "end": 161183,
          "confidence": 0.98738,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 161319,
          "end": 161591,
          "confidence": 0.99956,
          "speaker": "MLK"
        },
        {
          "text": "guy",
          "start": 161623,
          "end": 161815,
          "confidence": 0.99912,
          "speaker": "MLK"
        },
        {
          "text": "right",
          "start": 161855,
          "end": 162007,
          "confidence": 0.99717,
          "speaker": "MLK"
        },
        {
          "text": "here",
          "start": 162031,
          "end": 162215,
          "confidence": 0.99812,
          "speaker": "MLK"
        },
        {
          "text": "may",
          "start": 162255,
          "end": 162431,
          "confidence": 0.97921,
          "speaker": "MLK"
        },
        {
          "text": "tell",
          "start": 162463,
          "end": 162607,
          "confidence": 0.99749,
          "speaker": "MLK"
        },
        {
          "text": "me",
          "start": 162631,
          "end": 162719,
          "confidence": 0.99797,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 162727,
          "end": 162799,
          "confidence": 0.8265,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 162807,
          "end": 162927,
          "confidence": 0.99221,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 162951,
          "end": 163087,
          "confidence": 0.98301,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 163111,
          "end": 163247,
          "confidence": 0.99254,
          "speaker": "MLK"
        },
        {
          "text": "wait,",
          "start": 163271,
          "end": 163455,
          "confidence": 0.98412,
          "speaker": "MLK"
        },
        {
          "text": "but",
          "start": 163495,
          "end": 163719,
          "confidence": 0.95987,
          "speaker": "MLK"
        },
        {
          "text": "personally",
          "start": 163767,
          "end": 164071,
          "confidence": 0.90408,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 164103,
          "end": 164199,
          "confidence": 0.99597,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 164207,
          "end": 164367,
          "confidence": 0.991,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 164391,
          "end": 164479,
          "confidence": 0.9922,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 164487,
          "end": 164583,
          "confidence": 0.98893,
          "speaker": "MLK"
        },
        {
          "text": "do",
          "start": 164599,
          "end": 164751,
          "confidence": 0.99287,
          "speaker": "MLK"
        },
        {
          "text": "nothing.",
          "start": 164783,
          "end": 165475,
          "confidence": 0.98528,
          "speaker": "MLK"
        },
        {
          "text": "Go",
          "start": 166055,
          "end": 166343,
          "confidence": 0.99683,
          "speaker": "MLK"
        },
        {
          "text": "ahead,",
          "start": 166359,
          "end": 166487,
          "confidence": 0.98181,
          "speaker": "MLK"
        },
        {
          "text": "ask",
          "start": 166511,
          "end": 166647,
          "confidence": 0.99374,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 166671,
          "end": 166807,
          "confidence": 0.99158,
          "speaker": "MLK"
        },
        {
          "text": "question.",
          "start": 166831,
          "end": 167351,
          "confidence": 0.99921,
          "speaker": "MLK"
        },
        {
          "text": "Thank",
          "start": 167503,
          "end": 167807,
          "confidence": 0.99566,
          "speaker": "MLK"
        },
        {
          "text": "you,",
          "start": 167831,
          "end": 167991,
          "confidence": 0.99743,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 168023,
          "end": 168191,
          "confidence": 0.9982,
          "speaker": "MLK"
        },
        {
          "text": "honor.",
          "start": 168223,
          "end": 168903,
          "confidence": 0.99308,
          "speaker": "MLK"
        },
        {
          "text": "Do",
          "start": 169079,
          "end": 169343,
          "confidence": 0.86416,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 169359,
          "end": 169511,
          "confidence": 0.90962,
          "speaker": "MLK"
        },
        {
          "text": "like",
          "start": 169543,
          "end": 169759,
          "confidence": 0.94811,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 169807,
          "end": 170063,
          "confidence": 0.84548,
          "speaker": "MLK"
        },
        {
          "text": "can't",
          "start": 170119,
          "end": 170303,
          "confidence": 0.46425,
          "speaker": "MLK"
        },
        {
          "text": "save",
          "start": 170319,
          "end": 170471,
          "confidence": 0.96543,
          "speaker": "MLK"
        },
        {
          "text": "you.",
          "start": 170503,
          "end": 170647,
          "confidence": 0.98516,
          "speaker": "MLK"
        },
        {
          "text": "Right",
          "start": 170671,
          "end": 171235,
          "confidence": 0.93284,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 171815,
          "end": 172103,
          "confidence": 0.99384,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 172119,
          "end": 172247,
          "confidence": 0.90188,
          "speaker": "MLK"
        },
        {
          "text": "real",
          "start": 172271,
          "end": 172455,
          "confidence": 0.99953,
          "speaker": "MLK"
        },
        {
          "text": "world.",
          "start": 172495,
          "end": 172911,
          "confidence": 0.99685,
          "speaker": "MLK"
        },
        {
          "text": "That",
          "start": 173023,
          "end": 173271,
          "confidence": 0.995,
          "speaker": "MLK"
        },
        {
          "text": "guy",
          "start": 173303,
          "end": 173471,
          "confidence": 0.99749,
          "speaker": "MLK"
        },
        {
          "text": "right",
          "start": 173503,
          "end": 173647,
          "confidence": 0.99024,
          "speaker": "MLK"
        },
        {
          "text": "there.",
          "start": 173671,
          "end": 174095,
          "confidence": 0.96437,
          "speaker": "MLK"
        },
        {
          "text": "He",
          "start": 174215,
          "end": 174447,
          "confidence": 0.99688,
          "speaker": "MLK"
        },
        {
          "text": "can't",
          "start": 174471,
          "end": 174687,
          "confidence": 0.99204,
          "speaker": "MLK"
        },
        {
          "text": "save",
          "start": 174711,
          "end": 174823,
          "confidence": 0.99642,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 174839,
          "end": 174943,
          "confidence": 0.98947,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 174959,
          "end": 175039,
          "confidence": 0.99661,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 175047,
          "end": 175119,
          "confidence": 0.95078,
          "speaker": "MLK"
        },
        {
          "text": "real",
          "start": 175127,
          "end": 175271,
          "confidence": 0.9992,
          "speaker": "MLK"
        },
        {
          "text": "world.",
          "start": 175303,
          "end": 175875,
          "confidence": 0.99672,
          "speaker": "MLK"
        },
        {
          "text": "Just",
          "start": 176175,
          "end": 176487,
          "confidence": 0.90896,
          "speaker": "MLK"
        },
        {
          "text": "so",
          "start": 176511,
          "end": 176623,
          "confidence": 0.57989,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 176639,
          "end": 176743,
          "confidence": 0.82308,
          "speaker": "MLK"
        },
        {
          "text": "know,",
          "start": 176759,
          "end": 177031,
          "confidence": 0.83574,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 177103,
          "end": 177263,
          "confidence": 0.99922,
          "speaker": "MLK"
        },
        {
          "text": "does",
          "start": 177279,
          "end": 177431,
          "confidence": 0.99805,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 177463,
          "end": 177655,
          "confidence": 0.99937,
          "speaker": "MLK"
        },
        {
          "text": "mean?",
          "start": 177695,
          "end": 178183,
          "confidence": 0.99922,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 178319,
          "end": 178519,
          "confidence": 0.99606,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 178527,
          "end": 178687,
          "confidence": 0.97758,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 178711,
          "end": 178847,
          "confidence": 0.99588,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 178871,
          "end": 178983,
          "confidence": 0.99462,
          "speaker": "MLK"
        },
        {
          "text": "elaborate.",
          "start": 178999,
          "end": 179835,
          "confidence": 0.99012,
          "speaker": "MLK"
        },
        {
          "text": "That's",
          "start": 182055,
          "end": 182383,
          "confidence": 0.25538,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 182399,
          "end": 182527,
          "confidence": 0.97154,
          "speaker": "MLK"
        },
        {
          "text": "next",
          "start": 182551,
          "end": 182711,
          "confidence": 0.97885,
          "speaker": "MLK"
        },
        {
          "text": "question?",
          "start": 182743,
          "end": 183031,
          "confidence": 0.95733,
          "speaker": "MLK"
        },
        {
          "text": "Is",
          "start": 183103,
          "end": 183263,
          "confidence": 0.97877,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 183279,
          "end": 183719,
          "confidence": 0.96257,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 183847,
          "end": 184159,
          "confidence": 0.98632,
          "speaker": "MLK"
        },
        {
          "text": "threat",
          "start": 184207,
          "end": 184487,
          "confidence": 0.78779,
          "speaker": "MLK"
        },
        {
          "text": "against.",
          "start": 184551,
          "end": 184895,
          "confidence": 0.93524,
          "speaker": "MLK"
        },
        {
          "text": "No.",
          "start": 184975,
          "end": 185503,
          "confidence": 0.62716,
          "speaker": "MLK"
        },
        {
          "text": "Mr.",
          "start": 185639,
          "end": 186287,
          "confidence": 0.59771,
          "speaker": "MLK"
        },
        {
          "text": "Can",
          "start": 186431,
          "end": 186639,
          "confidence": 0.98999,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 186647,
          "end": 186791,
          "confidence": 0.98712,
          "speaker": "MLK"
        },
        {
          "text": "just",
          "start": 186823,
          "end": 186991,
          "confidence": 0.97649,
          "speaker": "MLK"
        },
        {
          "text": "ask",
          "start": 187023,
          "end": 187167,
          "confidence": 0.99677,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 187191,
          "end": 187351,
          "confidence": 0.99672,
          "speaker": "MLK"
        },
        {
          "text": "next",
          "start": 187383,
          "end": 187623,
          "confidence": 0.99347,
          "speaker": "MLK"
        },
        {
          "text": "question,",
          "start": 187679,
          "end": 187943,
          "confidence": 0.99957,
          "speaker": "MLK"
        },
        {
          "text": "please?",
          "start": 187999,
          "end": 188595,
          "confidence": 0.99839,
          "speaker": "MLK"
        },
        {
          "text": "He",
          "start": 195665,
          "end": 195977,
          "confidence": 0.99582,
          "speaker": "MLK"
        },
        {
          "text": "can't",
          "start": 196001,
          "end": 196241,
          "confidence": 0.89625,
          "speaker": "MLK"
        },
        {
          "text": "save",
          "start": 196273,
          "end": 196465,
          "confidence": 0.99859,
          "speaker": "MLK"
        },
        {
          "text": "you.",
          "start": 196505,
          "end": 197085,
          "confidence": 0.99842,
          "speaker": "MLK"
        },
        {
          "text": "And",
          "start": 199145,
          "end": 199457,
          "confidence": 0.88024,
          "speaker": "MLK"
        },
        {
          "text": "what",
          "start": 199481,
          "end": 199617,
          "confidence": 0.99974,
          "speaker": "MLK"
        },
        {
          "text": "does",
          "start": 199641,
          "end": 199801,
          "confidence": 0.99894,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 199833,
          "end": 200001,
          "confidence": 0.99966,
          "speaker": "MLK"
        },
        {
          "text": "mean?",
          "start": 200033,
          "end": 200489,
          "confidence": 0.99968,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 200617,
          "end": 200809,
          "confidence": 0.99238,
          "speaker": "MLK"
        },
        {
          "text": "was",
          "start": 200817,
          "end": 200937,
          "confidence": 0.99394,
          "speaker": "MLK"
        },
        {
          "text": "talking",
          "start": 200961,
          "end": 201177,
          "confidence": 0.97595,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 201201,
          "end": 201337,
          "confidence": 0.99821,
          "speaker": "MLK"
        },
        {
          "text": "myself.",
          "start": 201361,
          "end": 202005,
          "confidence": 0.99202,
          "speaker": "MLK"
        },
        {
          "text": "Do",
          "start": 204745,
          "end": 204985,
          "confidence": 0.91285,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 204985,
          "end": 205121,
          "confidence": 0.99287,
          "speaker": "MLK"
        },
        {
          "text": "recall",
          "start": 205153,
          "end": 205561,
          "confidence": 0.99835,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 205633,
          "end": 205937,
          "confidence": 0.9851,
          "speaker": "MLK"
        },
        {
          "text": "any",
          "start": 206001,
          "end": 206249,
          "confidence": 0.99951,
          "speaker": "MLK"
        },
        {
          "text": "criminal",
          "start": 206297,
          "end": 207005,
          "confidence": 0.99929,
          "speaker": "MLK"
        },
        {
          "text": "actions",
          "start": 208225,
          "end": 208737,
          "confidence": 0.99664,
          "speaker": "MLK"
        },
        {
          "text": "were",
          "start": 208801,
          "end": 209073,
          "confidence": 0.99549,
          "speaker": "MLK"
        },
        {
          "text": "pending",
          "start": 209129,
          "end": 209601,
          "confidence": 0.83813,
          "speaker": "MLK"
        },
        {
          "text": "against",
          "start": 209673,
          "end": 209953,
          "confidence": 0.99981,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 210009,
          "end": 210345,
          "confidence": 0.99941,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 210425,
          "end": 210617,
          "confidence": 0.99734,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 210641,
          "end": 210729,
          "confidence": 0.99947,
          "speaker": "MLK"
        },
        {
          "text": "end",
          "start": 210737,
          "end": 210857,
          "confidence": 0.99914,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 210881,
          "end": 211041,
          "confidence": 0.99732,
          "speaker": "MLK"
        },
        {
          "text": "2008?",
          "start": 211073,
          "end": 212245,
          "confidence": 0.99974,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 212825,
          "end": 213113,
          "confidence": 0.99855,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 213129,
          "end": 213321,
          "confidence": 0.96927,
          "speaker": "MLK"
        },
        {
          "text": "recall",
          "start": 213353,
          "end": 213625,
          "confidence": 0.99824,
          "speaker": "MLK"
        },
        {
          "text": "any.",
          "start": 213665,
          "end": 214057,
          "confidence": 0.7876,
          "speaker": "MLK"
        },
        {
          "text": "Do",
          "start": 214161,
          "end": 214305,
          "confidence": 0.86237,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 214305,
          "end": 214441,
          "confidence": 0.99796,
          "speaker": "MLK"
        },
        {
          "text": "recall",
          "start": 214473,
          "end": 214881,
          "confidence": 0.99991,
          "speaker": "MLK"
        },
        {
          "text": "being",
          "start": 214953,
          "end": 215305,
          "confidence": 0.99811,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 215385,
          "end": 215577,
          "confidence": 0.99933,
          "speaker": "MLK"
        },
        {
          "text": "all",
          "start": 215601,
          "end": 216001,
          "confidence": 0.9992,
          "speaker": "MLK"
        },
        {
          "text": "concerned",
          "start": 216113,
          "end": 216609,
          "confidence": 0.99695,
          "speaker": "MLK"
        },
        {
          "text": "about",
          "start": 216697,
          "end": 217017,
          "confidence": 0.99957,
          "speaker": "MLK"
        },
        {
          "text": "any",
          "start": 217081,
          "end": 217305,
          "confidence": 0.99956,
          "speaker": "MLK"
        },
        {
          "text": "criminal",
          "start": 217345,
          "end": 217785,
          "confidence": 0.9998,
          "speaker": "MLK"
        },
        {
          "text": "actions",
          "start": 217865,
          "end": 218617,
          "confidence": 0.99817,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 218801,
          "end": 219097,
          "confidence": 0.91491,
          "speaker": "MLK"
        },
        {
          "text": "may",
          "start": 219121,
          "end": 219233,
          "confidence": 0.98366,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 219249,
          "end": 219377,
          "confidence": 0.98397,
          "speaker": "MLK"
        },
        {
          "text": "been",
          "start": 219401,
          "end": 219561,
          "confidence": 0.98944,
          "speaker": "MLK"
        },
        {
          "text": "pending",
          "start": 219593,
          "end": 219993,
          "confidence": 0.99591,
          "speaker": "MLK"
        },
        {
          "text": "against",
          "start": 220049,
          "end": 220313,
          "confidence": 0.99816,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 220369,
          "end": 220537,
          "confidence": 0.9926,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 220561,
          "end": 220673,
          "confidence": 0.99024,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 220689,
          "end": 220769,
          "confidence": 0.99751,
          "speaker": "MLK"
        },
        {
          "text": "end",
          "start": 220777,
          "end": 220897,
          "confidence": 0.99385,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 220921,
          "end": 221081,
          "confidence": 0.98916,
          "speaker": "MLK"
        },
        {
          "text": "2008?",
          "start": 221113,
          "end": 221985,
          "confidence": 0.99893,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 222065,
          "end": 222209,
          "confidence": 0.97474,
          "speaker": "MLK"
        },
        {
          "text": "dont",
          "start": 222217,
          "end": 222385,
          "confidence": 0.4711,
          "speaker": "MLK"
        },
        {
          "text": "recall.",
          "start": 222425,
          "end": 223125,
          "confidence": 0.99297,
          "speaker": "MLK"
        },
        {
          "text": "Do",
          "start": 223505,
          "end": 223745,
          "confidence": 0.73717,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 223745,
          "end": 223857,
          "confidence": 0.99246,
          "speaker": "MLK"
        },
        {
          "text": "recall",
          "start": 223881,
          "end": 224185,
          "confidence": 0.99875,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 224225,
          "end": 224377,
          "confidence": 0.98501,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 224401,
          "end": 224513,
          "confidence": 0.99047,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 224529,
          "end": 224681,
          "confidence": 0.98729,
          "speaker": "MLK"
        },
        {
          "text": "summer",
          "start": 224713,
          "end": 225001,
          "confidence": 0.99415,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 225033,
          "end": 225225,
          "confidence": 0.98991,
          "speaker": "MLK"
        },
        {
          "text": "2007",
          "start": 225265,
          "end": 226441,
          "confidence": 0.99903,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 226513,
          "end": 226673,
          "confidence": 0.99412,
          "speaker": "MLK"
        },
        {
          "text": "were",
          "start": 226689,
          "end": 226913,
          "confidence": 0.97119,
          "speaker": "MLK"
        },
        {
          "text": "arrested",
          "start": 226969,
          "end": 227361,
          "confidence": 0.99768,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 227393,
          "end": 227585,
          "confidence": 0.99415,
          "speaker": "MLK"
        },
        {
          "text": "New",
          "start": 227625,
          "end": 227801,
          "confidence": 0.99436,
          "speaker": "MLK"
        },
        {
          "text": "York",
          "start": 227833,
          "end": 228073,
          "confidence": 0.99382,
          "speaker": "MLK"
        },
        {
          "text": "City",
          "start": 228129,
          "end": 228753,
          "confidence": 0.98577,
          "speaker": "MLK"
        },
        {
          "text": "following",
          "start": 228929,
          "end": 229217,
          "confidence": 0.99778,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 229241,
          "end": 229497,
          "confidence": 0.9912,
          "speaker": "MLK"
        },
        {
          "text": "performance",
          "start": 229561,
          "end": 229905,
          "confidence": 0.99839,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 229985,
          "end": 230177,
          "confidence": 0.99349,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 230201,
          "end": 230337,
          "confidence": 0.99537,
          "speaker": "MLK"
        },
        {
          "text": "Beacon",
          "start": 230361,
          "end": 230729,
          "confidence": 0.98845,
          "speaker": "MLK"
        },
        {
          "text": "Theater?",
          "start": 230777,
          "end": 231445,
          "confidence": 0.79915,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 231865,
          "end": 232129,
          "confidence": 0.98471,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 232137,
          "end": 232297,
          "confidence": 0.27267,
          "speaker": "MLK"
        },
        {
          "text": "recall",
          "start": 232321,
          "end": 232625,
          "confidence": 0.97449,
          "speaker": "MLK"
        },
        {
          "text": "that.",
          "start": 232665,
          "end": 233245,
          "confidence": 0.98447,
          "speaker": "MLK"
        },
        {
          "text": "Do",
          "start": 234425,
          "end": 234689,
          "confidence": 0.63719,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 234697,
          "end": 234841,
          "confidence": 0.99738,
          "speaker": "MLK"
        },
        {
          "text": "recall",
          "start": 234873,
          "end": 235233,
          "confidence": 0.99946,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 235289,
          "end": 235937,
          "confidence": 0.98367,
          "speaker": "MLK"
        },
        {
          "text": "police",
          "start": 236121,
          "end": 236873,
          "confidence": 0.99809,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 237049,
          "end": 237361,
          "confidence": 0.99339,
          "speaker": "MLK"
        },
        {
          "text": "New",
          "start": 237393,
          "end": 237537,
          "confidence": 0.99365,
          "speaker": "MLK"
        },
        {
          "text": "York",
          "start": 237561,
          "end": 237769,
          "confidence": 0.99012,
          "speaker": "MLK"
        },
        {
          "text": "City",
          "start": 237817,
          "end": 238121,
          "confidence": 0.98075,
          "speaker": "MLK"
        },
        {
          "text": "discovered",
          "start": 238193,
          "end": 238777,
          "confidence": 0.99564,
          "speaker": "MLK"
        },
        {
          "text": "a.40",
          "start": 238841,
          "end": 239721,
          "confidence": 0.98927,
          "speaker": "MLK"
        },
        {
          "text": "caliber",
          "start": 239793,
          "end": 240297,
          "confidence": 0.94333,
          "speaker": "MLK"
        },
        {
          "text": "pistol",
          "start": 240361,
          "end": 241025,
          "confidence": 0.99914,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 241145,
          "end": 241401,
          "confidence": 0.85597,
          "speaker": "MLK"
        },
        {
          "text": "you,",
          "start": 241433,
          "end": 241937,
          "confidence": 0.95142,
          "speaker": "MLK"
        },
        {
          "text": "on",
          "start": 242081,
          "end": 242337,
          "confidence": 0.98735,
          "speaker": "MLK"
        },
        {
          "text": "your",
          "start": 242361,
          "end": 242569,
          "confidence": 0.99594,
          "speaker": "MLK"
        },
        {
          "text": "person?",
          "start": 242617,
          "end": 243205,
          "confidence": 0.99715,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 244165,
          "end": 244429,
          "confidence": 0.96734,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 244437,
          "end": 244597,
          "confidence": 0.4646,
          "speaker": "MLK"
        },
        {
          "text": "recall",
          "start": 244621,
          "end": 244861,
          "confidence": 0.97783,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 244893,
          "end": 245037,
          "confidence": 0.98733,
          "speaker": "MLK"
        },
        {
          "text": "either.",
          "start": 245061,
          "end": 245705,
          "confidence": 0.37614,
          "speaker": "MLK"
        },
        {
          "text": "Do",
          "start": 246725,
          "end": 246989,
          "confidence": 0.87574,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 246997,
          "end": 247117,
          "confidence": 0.99164,
          "speaker": "MLK"
        },
        {
          "text": "recall",
          "start": 247141,
          "end": 247865,
          "confidence": 0.99982,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 248285,
          "end": 248669,
          "confidence": 0.99173,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 248717,
          "end": 249117,
          "confidence": 0.99793,
          "speaker": "MLK"
        },
        {
          "text": "late",
          "start": 249221,
          "end": 249533,
          "confidence": 0.99941,
          "speaker": "MLK"
        },
        {
          "text": "2009",
          "start": 249589,
          "end": 250637,
          "confidence": 0.99931,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 250701,
          "end": 250925,
          "confidence": 0.99877,
          "speaker": "MLK"
        },
        {
          "text": "pleaded",
          "start": 250965,
          "end": 251333,
          "confidence": 0.99787,
          "speaker": "MLK"
        },
        {
          "text": "guilty",
          "start": 251389,
          "end": 251949,
          "confidence": 0.9984,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 252037,
          "end": 252549,
          "confidence": 0.99777,
          "speaker": "MLK"
        },
        {
          "text": "attempted",
          "start": 252677,
          "end": 253197,
          "confidence": 0.99268,
          "speaker": "MLK"
        },
        {
          "text": "criminal",
          "start": 253261,
          "end": 253701,
          "confidence": 0.99947,
          "speaker": "MLK"
        },
        {
          "text": "possession",
          "start": 253773,
          "end": 254285,
          "confidence": 0.99738,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 254325,
          "end": 254477,
          "confidence": 0.99934,
          "speaker": "MLK"
        },
        {
          "text": "a",
          "start": 254501,
          "end": 254661,
          "confidence": 0.99698,
          "speaker": "MLK"
        },
        {
          "text": "weapon?",
          "start": 254693,
          "end": 255365,
          "confidence": 0.99713,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 255525,
          "end": 255725,
          "confidence": 0.98363,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 255725,
          "end": 255877,
          "confidence": 0.48972,
          "speaker": "MLK"
        },
        {
          "text": "recall",
          "start": 255901,
          "end": 256229,
          "confidence": 0.7428,
          "speaker": "MLK"
        },
        {
          "text": "that",
          "start": 256277,
          "end": 256461,
          "confidence": 0.9734,
          "speaker": "MLK"
        },
        {
          "text": "yet.",
          "start": 256493,
          "end": 257065,
          "confidence": 0.64549,
          "speaker": "MLK"
        },
        {
          "text": "Did",
          "start": 258885,
          "end": 259197,
          "confidence": 0.99931,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 259221,
          "end": 259861,
          "confidence": 0.99957,
          "speaker": "MLK"
        },
        {
          "text": "serve",
          "start": 260053,
          "end": 260517,
          "confidence": 0.99813,
          "speaker": "MLK"
        },
        {
          "text": "any",
          "start": 260581,
          "end": 260805,
          "confidence": 0.99911,
          "speaker": "MLK"
        },
        {
          "text": "time",
          "start": 260845,
          "end": 261045,
          "confidence": 0.91754,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 261085,
          "end": 261357,
          "confidence": 0.99824,
          "speaker": "MLK"
        },
        {
          "text": "jail",
          "start": 261421,
          "end": 262025,
          "confidence": 0.99889,
          "speaker": "MLK"
        },
        {
          "text": "following",
          "start": 263285,
          "end": 263621,
          "confidence": 0.99783,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 263653,
          "end": 263773,
          "confidence": 0.99809,
          "speaker": "MLK"
        },
        {
          "text": "end",
          "start": 263789,
          "end": 263917,
          "confidence": 0.99854,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 263941,
          "end": 264101,
          "confidence": 0.99472,
          "speaker": "MLK"
        },
        {
          "text": "2009?",
          "start": 264133,
          "end": 265345,
          "confidence": 0.99935,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 265845,
          "end": 266109,
          "confidence": 0.98441,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 266117,
          "end": 266277,
          "confidence": 0.66264,
          "speaker": "MLK"
        },
        {
          "text": "know.",
          "start": 266301,
          "end": 266865,
          "confidence": 0.96448,
          "speaker": "MLK"
        },
        {
          "text": "Didn't",
          "start": 267285,
          "end": 267653,
          "confidence": 0.57718,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 267669,
          "end": 267845,
          "confidence": 0.9959,
          "speaker": "MLK"
        },
        {
          "text": "serve",
          "start": 267885,
          "end": 268221,
          "confidence": 0.99636,
          "speaker": "MLK"
        },
        {
          "text": "about",
          "start": 268293,
          "end": 268525,
          "confidence": 0.98628,
          "speaker": "MLK"
        },
        {
          "text": "eight",
          "start": 268565,
          "end": 268741,
          "confidence": 0.99941,
          "speaker": "MLK"
        },
        {
          "text": "months",
          "start": 268773,
          "end": 268989,
          "confidence": 0.99949,
          "speaker": "MLK"
        },
        {
          "text": "at",
          "start": 269037,
          "end": 269245,
          "confidence": 0.97939,
          "speaker": "MLK"
        },
        {
          "text": "Rikers",
          "start": 269285,
          "end": 269749,
          "confidence": 0.94536,
          "speaker": "MLK"
        },
        {
          "text": "island",
          "start": 269797,
          "end": 270197,
          "confidence": 0.99789,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 270261,
          "end": 270869,
          "confidence": 0.99475,
          "speaker": "MLK"
        },
        {
          "text": "2010?",
          "start": 271037,
          "end": 271885,
          "confidence": 0.99015,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 272005,
          "end": 272189,
          "confidence": 0.99465,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 272197,
          "end": 272357,
          "confidence": 0.53879,
          "speaker": "MLK"
        },
        {
          "text": "know.",
          "start": 272381,
          "end": 272945,
          "confidence": 0.98792,
          "speaker": "MLK"
        },
        {
          "text": "Do",
          "start": 273955,
          "end": 274219,
          "confidence": 0.93984,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 274227,
          "end": 274371,
          "confidence": 0.98975,
          "speaker": "MLK"
        },
        {
          "text": "remember",
          "start": 274403,
          "end": 274699,
          "confidence": 0.7832,
          "speaker": "MLK"
        },
        {
          "text": "being",
          "start": 274747,
          "end": 275075,
          "confidence": 0.99786,
          "speaker": "MLK"
        },
        {
          "text": "arrested",
          "start": 275155,
          "end": 275731,
          "confidence": 0.99678,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 275803,
          "end": 275963,
          "confidence": 0.96448,
          "speaker": "MLK"
        },
        {
          "text": "or",
          "start": 275979,
          "end": 276179,
          "confidence": 0.9325,
          "speaker": "MLK"
        },
        {
          "text": "about",
          "start": 276227,
          "end": 276651,
          "confidence": 0.9661,
          "speaker": "MLK"
        },
        {
          "text": "January",
          "start": 276763,
          "end": 277275,
          "confidence": 0.99793,
          "speaker": "MLK"
        },
        {
          "text": "2008",
          "start": 277395,
          "end": 278883,
          "confidence": 0.99928,
          "speaker": "MLK"
        },
        {
          "text": "near",
          "start": 279059,
          "end": 279419,
          "confidence": 0.99858,
          "speaker": "MLK"
        },
        {
          "text": "Yuma,",
          "start": 279467,
          "end": 279859,
          "confidence": 0.86337,
          "speaker": "MLK"
        },
        {
          "text": "Arizona?",
          "start": 279907,
          "end": 280975,
          "confidence": 0.95323,
          "speaker": "MLK"
        },
        {
          "text": "No,",
          "start": 281995,
          "end": 282307,
          "confidence": 0.70997,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 282331,
          "end": 282395,
          "confidence": 0.94791,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 282395,
          "end": 282595,
          "confidence": 0.45189,
          "speaker": "MLK"
        },
        {
          "text": "remember",
          "start": 282635,
          "end": 282867,
          "confidence": 0.7376,
          "speaker": "MLK"
        },
        {
          "text": "that.",
          "start": 282891,
          "end": 283455,
          "confidence": 0.92921,
          "speaker": "MLK"
        },
        {
          "text": "Do",
          "start": 284155,
          "end": 284419,
          "confidence": 0.95593,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 284427,
          "end": 284595,
          "confidence": 0.99245,
          "speaker": "MLK"
        },
        {
          "text": "remember",
          "start": 284635,
          "end": 285059,
          "confidence": 0.9991,
          "speaker": "MLK"
        },
        {
          "text": "being",
          "start": 285147,
          "end": 285491,
          "confidence": 0.99823,
          "speaker": "MLK"
        },
        {
          "text": "charged",
          "start": 285563,
          "end": 286255,
          "confidence": 0.99888,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 286795,
          "end": 287443,
          "confidence": 0.99654,
          "speaker": "MLK"
        },
        {
          "text": "early",
          "start": 287579,
          "end": 287947,
          "confidence": 0.99666,
          "speaker": "MLK"
        },
        {
          "text": "2008",
          "start": 288011,
          "end": 289163,
          "confidence": 0.99934,
          "speaker": "MLK"
        },
        {
          "text": "with",
          "start": 289259,
          "end": 289851,
          "confidence": 0.99501,
          "speaker": "MLK"
        },
        {
          "text": "possession",
          "start": 290003,
          "end": 290763,
          "confidence": 0.99202,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 290859,
          "end": 291331,
          "confidence": 0.99545,
          "speaker": "MLK"
        },
        {
          "text": "narcotics",
          "start": 291443,
          "end": 292227,
          "confidence": 0.96305,
          "speaker": "MLK"
        },
        {
          "text": "for",
          "start": 292291,
          "end": 292539,
          "confidence": 0.9964,
          "speaker": "MLK"
        },
        {
          "text": "sale,",
          "start": 292587,
          "end": 293083,
          "confidence": 0.99914,
          "speaker": "MLK"
        },
        {
          "text": "possession",
          "start": 293219,
          "end": 293771,
          "confidence": 0.98723,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 293803,
          "end": 294067,
          "confidence": 0.99434,
          "speaker": "MLK"
        },
        {
          "text": "dangerous",
          "start": 294131,
          "end": 294691,
          "confidence": 0.98992,
          "speaker": "MLK"
        },
        {
          "text": "drugs,",
          "start": 294763,
          "end": 295427,
          "confidence": 0.99493,
          "speaker": "MLK"
        },
        {
          "text": "misconduct",
          "start": 295571,
          "end": 296499,
          "confidence": 0.95785,
          "speaker": "MLK"
        },
        {
          "text": "involving",
          "start": 296587,
          "end": 297027,
          "confidence": 0.99435,
          "speaker": "MLK"
        },
        {
          "text": "weapons,",
          "start": 297091,
          "end": 297531,
          "confidence": 0.99515,
          "speaker": "MLK"
        },
        {
          "text": "and",
          "start": 297603,
          "end": 297931,
          "confidence": 0.68729,
          "speaker": "MLK"
        },
        {
          "text": "possession",
          "start": 298003,
          "end": 298491,
          "confidence": 0.98985,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 298523,
          "end": 298691,
          "confidence": 0.99402,
          "speaker": "MLK"
        },
        {
          "text": "drug",
          "start": 298723,
          "end": 298987,
          "confidence": 0.99792,
          "speaker": "MLK"
        },
        {
          "text": "paraphernalia?",
          "start": 299051,
          "end": 300135,
          "confidence": 0.94884,
          "speaker": "MLK"
        },
        {
          "text": "No,",
          "start": 300565,
          "end": 300877,
          "confidence": 0.66031,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 300901,
          "end": 300989,
          "confidence": 0.96019,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 300997,
          "end": 301349,
          "confidence": 0.48148,
          "speaker": "MLK"
        },
        {
          "text": "call",
          "start": 301437,
          "end": 301685,
          "confidence": 0.91877,
          "speaker": "MLK"
        },
        {
          "text": "that.",
          "start": 301725,
          "end": 302069,
          "confidence": 0.97845,
          "speaker": "MLK"
        },
        {
          "text": "Well,",
          "start": 302157,
          "end": 302621,
          "confidence": 0.82208,
          "speaker": "MLK"
        },
        {
          "text": "how",
          "start": 302733,
          "end": 302933,
          "confidence": 0.99909,
          "speaker": "MLK"
        },
        {
          "text": "much",
          "start": 302949,
          "end": 303101,
          "confidence": 0.99234,
          "speaker": "MLK"
        },
        {
          "text": "longer",
          "start": 303133,
          "end": 303333,
          "confidence": 0.99471,
          "speaker": "MLK"
        },
        {
          "text": "is",
          "start": 303349,
          "end": 303453,
          "confidence": 0.95914,
          "speaker": "MLK"
        },
        {
          "text": "this",
          "start": 303469,
          "end": 303597,
          "confidence": 0.9763,
          "speaker": "MLK"
        },
        {
          "text": "line",
          "start": 303621,
          "end": 303757,
          "confidence": 0.84548,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 303781,
          "end": 303893,
          "confidence": 0.77747,
          "speaker": "MLK"
        },
        {
          "text": "question",
          "start": 303909,
          "end": 304133,
          "confidence": 0.98551,
          "speaker": "MLK"
        },
        {
          "text": "going",
          "start": 304189,
          "end": 304309,
          "confidence": 0.70582,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 304317,
          "end": 304389,
          "confidence": 0.74514,
          "speaker": "MLK"
        },
        {
          "text": "go",
          "start": 304397,
          "end": 304493,
          "confidence": 0.97319,
          "speaker": "MLK"
        },
        {
          "text": "on?",
          "start": 304509,
          "end": 304853,
          "confidence": 0.99375,
          "speaker": "MLK"
        },
        {
          "text": "Not",
          "start": 304949,
          "end": 305229,
          "confidence": 0.99776,
          "speaker": "MLK"
        },
        {
          "text": "much",
          "start": 305277,
          "end": 305533,
          "confidence": 0.99696,
          "speaker": "MLK"
        },
        {
          "text": "longer.",
          "start": 305589,
          "end": 306021,
          "confidence": 0.9988,
          "speaker": "MLK"
        },
        {
          "text": "All",
          "start": 306093,
          "end": 306253,
          "confidence": 0.58045,
          "speaker": "MLK"
        },
        {
          "text": "right,",
          "start": 306269,
          "end": 306517,
          "confidence": 0.63906,
          "speaker": "MLK"
        },
        {
          "text": "go",
          "start": 306581,
          "end": 306757,
          "confidence": 0.99151,
          "speaker": "MLK"
        },
        {
          "text": "ahead.",
          "start": 306781,
          "end": 307013,
          "confidence": 0.9899,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 307069,
          "end": 307189,
          "confidence": 0.69675,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 307197,
          "end": 307333,
          "confidence": 0.5311,
          "speaker": "MLK"
        },
        {
          "text": "know.",
          "start": 307349,
          "end": 307905,
          "confidence": 0.92304,
          "speaker": "MLK"
        },
        {
          "text": "Didn't",
          "start": 310805,
          "end": 311173,
          "confidence": 0.70742,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 311189,
          "end": 311533,
          "confidence": 0.99807,
          "speaker": "MLK"
        },
        {
          "text": "win",
          "start": 311629,
          "end": 312245,
          "confidence": 0.99819,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 312405,
          "end": 312629,
          "confidence": 0.94413,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 312637,
          "end": 312773,
          "confidence": 0.54172,
          "speaker": "MLK"
        },
        {
          "text": "know",
          "start": 312789,
          "end": 313037,
          "confidence": 0.92496,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 313101,
          "end": 313253,
          "confidence": 0.99563,
          "speaker": "MLK"
        },
        {
          "text": "award",
          "start": 313269,
          "end": 313573,
          "confidence": 0.97135,
          "speaker": "MLK"
        },
        {
          "text": "for",
          "start": 313629,
          "end": 313869,
          "confidence": 0.99704,
          "speaker": "MLK"
        },
        {
          "text": "best",
          "start": 313917,
          "end": 314221,
          "confidence": 0.99941,
          "speaker": "MLK"
        },
        {
          "text": "rap",
          "start": 314293,
          "end": 314597,
          "confidence": 0.98646,
          "speaker": "MLK"
        },
        {
          "text": "Album",
          "start": 314661,
          "end": 315069,
          "confidence": 0.99896,
          "speaker": "MLK"
        },
        {
          "text": "of",
          "start": 315117,
          "end": 315253,
          "confidence": 0.98435,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 315269,
          "end": 315373,
          "confidence": 0.9953,
          "speaker": "MLK"
        },
        {
          "text": "year",
          "start": 315389,
          "end": 315565,
          "confidence": 0.99252,
          "speaker": "MLK"
        },
        {
          "text": "in",
          "start": 315605,
          "end": 315781,
          "confidence": 0.94295,
          "speaker": "MLK"
        },
        {
          "text": "2008",
          "start": 315813,
          "end": 316733,
          "confidence": 0.93666,
          "speaker": "MLK"
        },
        {
          "text": "for",
          "start": 316789,
          "end": 316981,
          "confidence": 0.99405,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 317013,
          "end": 317205,
          "confidence": 0.99165,
          "speaker": "MLK"
        },
        {
          "text": "Carter",
          "start": 317245,
          "end": 317613,
          "confidence": 0.99642,
          "speaker": "MLK"
        },
        {
          "text": "3?",
          "start": 317669,
          "end": 318053,
          "confidence": 0.73556,
          "speaker": "MLK"
        },
        {
          "text": "I",
          "start": 318149,
          "end": 318309,
          "confidence": 0.9918,
          "speaker": "MLK"
        },
        {
          "text": "don't",
          "start": 318317,
          "end": 318453,
          "confidence": 0.55125,
          "speaker": "MLK"
        },
        {
          "text": "know.",
          "start": 318469,
          "end": 318909,
          "confidence": 0.99492,
          "speaker": "MLK"
        },
        {
          "text": "And",
          "start": 319037,
          "end": 319253,
          "confidence": 0.54929,
          "speaker": "MLK"
        },
        {
          "text": "Mr.",
          "start": 319269,
          "end": 319453,
          "confidence": 0.99491,
          "speaker": "MLK"
        },
        {
          "text": "Carter,",
          "start": 319469,
          "end": 319653,
          "confidence": 0.99743,
          "speaker": "MLK"
        },
        {
          "text": "you",
          "start": 319669,
          "end": 319797,
          "confidence": 0.96811,
          "speaker": "MLK"
        },
        {
          "text": "have",
          "start": 319821,
          "end": 319933,
          "confidence": 0.99799,
          "speaker": "MLK"
        },
        {
          "text": "to",
          "start": 319949,
          "end": 320053,
          "confidence": 0.99731,
          "speaker": "MLK"
        },
        {
          "text": "wait",
          "start": 320069,
          "end": 320245,
          "confidence": 0.99951,
          "speaker": "MLK"
        },
        {
          "text": "until",
          "start": 320285,
          "end": 320725,
          "confidence": 0.99263,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 320845,
          "end": 321149,
          "confidence": 0.99759,
          "speaker": "MLK"
        },
        {
          "text": "attorney",
          "start": 321197,
          "end": 321453,
          "confidence": 0.99904,
          "speaker": "MLK"
        },
        {
          "text": "has",
          "start": 321469,
          "end": 321597,
          "confidence": 0.65822,
          "speaker": "MLK"
        },
        {
          "text": "finished",
          "start": 321621,
          "end": 322333,
          "confidence": 0.96438,
          "speaker": "MLK"
        },
        {
          "text": "asking",
          "start": 322509,
          "end": 322917,
          "confidence": 0.99562,
          "speaker": "MLK"
        },
        {
          "text": "the",
          "start": 322941,
          "end": 323101,
          "confidence": 0.87168,
          "speaker": "MLK"
        },
        {
          "text": "question,",
          "start": 323133,
          "end": 323397,
          "confidence": 0.99888,
          "speaker": "MLK"
        },
        {
          "text": "please.",
          "start": 323461,
          "end": 323829,
          "confidence": 0.98987,
          "speaker": "MLK"
        },
        {
          "text": "I.",
          "start": 323917,
          "end": 324045,
          "confidence": 0.40384,
          "speaker": "MLK"
        },
        {
          "text": "Im",
          "start": 324045,
          "end": 324157,
          "confidence": 0.45096,
          "speaker": "MLK"
        },
        {
          "text": "sorry.",
          "start": 324181,
          "end": 324397,
          "confidence": 0.98557,
          "speaker": "MLK"
        },
        {
          "text": "Thats",
          "start": 324421,
          "end": 324621,
          "confidence": 0.62233,
          "speaker": "MLK"
        },
        {
          "text": "my",
          "start": 324653,
          "end": 324845,
          "confidence": 0.996,
          "speaker": "MLK"
        },
        {
          "text": "psychic.",
          "start": 324885,
          "end": 325477,
          "confidence": 0.98824,
          "speaker": "MLK"
        },
        {
          "text": "Im",
          "start": 325581,
          "end": 325821,
          "confidence": 0.49166,
          "speaker": "MLK"
        },
        {
          "text": "sorry.",
          "start": 325853,
          "end": 326005,
          "confidence": 0.97408,
          "speaker": "MLK"
        }
      ],
      "sentimentAnalysis": [
        {
          "text": "Clearly Lil Wayne answers to no one.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5618489,
          "start": 1975,
          "end": 4835
        },
        {
          "text": "Is that an interview that you actually gave with Katie Courig?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8923937,
          "start": 6655,
          "end": 11675
        },
        {
          "text": "Is that an interview that I actually gave with Katie Coury?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8835124,
          "start": 12495,
          "end": 14975
        },
        {
          "text": "Yeah.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5491449,
          "start": 15015,
          "end": 15487
        },
        {
          "text": "What's your name?",
          "sentiment": "NEUTRAL",
          "confidence": 0.7728436,
          "start": 15591,
          "end": 16555
        },
        {
          "text": "Well, that's not the question.",
          "sentiment": "NEUTRAL",
          "confidence": 0.66823643,
          "start": 18615,
          "end": 20759
        },
        {
          "text": "Name pet.",
          "sentiment": "NEUTRAL",
          "confidence": 0.73530763,
          "start": 20927,
          "end": 21495
        },
        {
          "text": "Ross.",
          "sentiment": "NEUTRAL",
          "confidence": 0.66645753,
          "start": 21535,
          "end": 21975
        },
        {
          "text": "Hu.",
          "sentiment": "NEUTRAL",
          "confidence": 0.61728764,
          "start": 22095,
          "end": 22423
        },
        {
          "text": "Pete Ross.",
          "sentiment": "NEUTRAL",
          "confidence": 0.81150866,
          "start": 22479,
          "end": 23111
        },
        {
          "text": "Pete Ross.",
          "sentiment": "NEUTRAL",
          "confidence": 0.81150866,
          "start": 23183,
          "end": 23791
        },
        {
          "text": "That's a stupid ass question.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9581973,
          "start": 23903,
          "end": 25651
        },
        {
          "text": "You just saw me on there, G. An interview with her.",
          "sentiment": "NEUTRAL",
          "confidence": 0.85558987,
          "start": 25823,
          "end": 28195
        },
        {
          "text": "Okay, so that was you.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7469384,
          "start": 28275,
          "end": 30695
        },
        {
          "text": "Did you perform at the Virgin Mobile Music Fest in 2008 with Kanye West?",
          "sentiment": "NEUTRAL",
          "confidence": 0.9461425,
          "start": 31635,
          "end": 38375
        },
        {
          "text": "I don't know.",
          "sentiment": "NEUTRAL",
          "confidence": 0.56667334,
          "start": 40515,
          "end": 41611
        },
        {
          "text": "But I know I did perform at this badass bitch birthday party recently.",
          "sentiment": "POSITIVE",
          "confidence": 0.47470635,
          "start": 41763,
          "end": 48295
        },
        {
          "text": "She was crazy stupid thick.",
          "sentiment": "NEGATIVE",
          "confidence": 0.9310527,
          "start": 48595,
          "end": 51359
        },
        {
          "text": "Isn't it something that you would remember if your album the Carter 3 was the biggest selling album of the year in 2008?",
          "sentiment": "NEUTRAL",
          "confidence": 0.6905997,
          "start": 51507,
          "end": 60155
        },
        {
          "text": "Isn't it something that I would remember that?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8205805,
          "start": 61335,
          "end": 64551
        },
        {
          "text": "Yes.",
          "sentiment": "POSITIVE",
          "confidence": 0.4610389,
          "start": 64623,
          "end": 65235
        },
        {
          "text": "Isn't that a personal opinion type question?",
          "sentiment": "NEUTRAL",
          "confidence": 0.802965,
          "start": 66215,
          "end": 69235
        },
        {
          "text": "That's why I got that.",
          "sentiment": "NEUTRAL",
          "confidence": 0.73247105,
          "start": 70775,
          "end": 71727
        },
        {
          "text": "I mean, because I would be actually answering the question to.",
          "sentiment": "NEUTRAL",
          "confidence": 0.83711123,
          "start": 71791,
          "end": 74399
        },
        {
          "text": "Isn't it something.",
          "sentiment": "NEUTRAL",
          "confidence": 0.70754325,
          "start": 74447,
          "end": 75711
        },
        {
          "text": "That's my question.",
          "sentiment": "NEUTRAL",
          "confidence": 0.73700094,
          "start": 75863,
          "end": 76687
        },
        {
          "text": "Isn't it something that you would remember?",
          "sentiment": "NEUTRAL",
          "confidence": 0.83445936,
          "start": 76751,
          "end": 79315
        },
        {
          "text": "Isn't it something.",
          "sentiment": "NEUTRAL",
          "confidence": 0.70754325,
          "start": 79745,
          "end": 81017
        },
        {
          "text": "That's the question I have to answer.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7942199,
          "start": 81121,
          "end": 82377
        },
        {
          "text": "Your honor.",
          "sentiment": "NEUTRAL",
          "confidence": 0.514607,
          "start": 82401,
          "end": 82977
        },
        {
          "text": "Go ahead.",
          "sentiment": "NEUTRAL",
          "confidence": 0.65005517,
          "start": 83081,
          "end": 83377
        },
        {
          "text": "Isn't it something.",
          "sentiment": "NEUTRAL",
          "confidence": 0.70754325,
          "start": 83401,
          "end": 84605
        },
        {
          "text": "Do the best trying to answer it.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6602869,
          "start": 85505,
          "end": 87325
        },
        {
          "text": "Yes.",
          "sentiment": "POSITIVE",
          "confidence": 0.4610389,
          "start": 89345,
          "end": 89921
        },
        {
          "text": "Something out of youres.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7243357,
          "start": 90033,
          "end": 91125
        },
        {
          "text": "That's myswer.",
          "sentiment": "NEUTRAL",
          "confidence": 0.51184297,
          "start": 92465,
          "end": 93565
        },
        {
          "text": "Yeah, it is something out of your ass.",
          "sentiment": "NEGATIVE",
          "confidence": 0.8539102,
          "start": 94545,
          "end": 96561
        },
        {
          "text": "Have you ever hired a photographer to photograph an event?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8805706,
          "start": 96673,
          "end": 101445
        },
        {
          "text": "Have I ever hired a photographer?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8203411,
          "start": 102185,
          "end": 103617
        },
        {
          "text": "The photograph.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7401308,
          "start": 103641,
          "end": 104565
        },
        {
          "text": "Sorry, sir, no.",
          "sentiment": "NEGATIVE",
          "confidence": 0.59324515,
          "start": 104865,
          "end": 105841
        },
        {
          "text": "I'm a superstar.",
          "sentiment": "POSITIVE",
          "confidence": 0.775789,
          "start": 105873,
          "end": 106881
        },
        {
          "text": "People hire them themselves to photograph me.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6373827,
          "start": 106953,
          "end": 109725
        },
        {
          "text": "We don't hire them.",
          "sentiment": "NEGATIVE",
          "confidence": 0.61700416,
          "start": 110305,
          "end": 111725
        },
        {
          "text": "How would you describe your image in the media?",
          "sentiment": "NEUTRAL",
          "confidence": 0.84810394,
          "start": 112585,
          "end": 115805
        },
        {
          "text": "How would I describe my image in the media?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8236086,
          "start": 116785,
          "end": 119177
        },
        {
          "text": "Yes.",
          "sentiment": "POSITIVE",
          "confidence": 0.4610389,
          "start": 119241,
          "end": 119657
        },
        {
          "text": "I wouldn't describe it.",
          "sentiment": "NEGATIVE",
          "confidence": 0.6829468,
          "start": 119761,
          "end": 121365
        },
        {
          "text": "Well, how would you describe it if you had to?",
          "sentiment": "NEUTRAL",
          "confidence": 0.80792034,
          "start": 123505,
          "end": 126097
        },
        {
          "text": "I don't have to.",
          "sentiment": "NEUTRAL",
          "confidence": 0.68568593,
          "start": 126201,
          "end": 127169
        },
        {
          "text": "Well, what image are you portraying in the media?",
          "sentiment": "NEUTRAL",
          "confidence": 0.6454415,
          "start": 127257,
          "end": 130161
        },
        {
          "text": "I don't portray anything.",
          "sentiment": "NEGATIVE",
          "confidence": 0.5245462,
          "start": 130233,
          "end": 131593
        },
        {
          "text": "I am who I am.",
          "sentiment": "POSITIVE",
          "confidence": 0.5218466,
          "start": 131649,
          "end": 132785
        },
        {
          "text": "And you guys portray what you get?",
          "sentiment": "NEUTRAL",
          "confidence": 0.74707913,
          "start": 132905,
          "end": 134793
        },
        {
          "text": "No.",
          "sentiment": "NEUTRAL",
          "confidence": 0.4936186,
          "start": 134889,
          "end": 135385
        },
        {
          "text": "Who are you?",
          "sentiment": "NEUTRAL",
          "confidence": 0.79751766,
          "start": 135505,
          "end": 136209
        },
        {
          "text": "Who is the real I'dWayne, Michael Carter Jr.",
          "sentiment": "NEUTRAL",
          "confidence": 0.9148653,
          "start": 136257,
          "end": 139025
        },
        {
          "text": "Okay.",
          "sentiment": "NEUTRAL",
          "confidence": 0.58435166,
          "start": 139145,
          "end": 139889
        },
        {
          "text": "Do you like to portray yourself as.",
          "sentiment": "NEUTRAL",
          "confidence": 0.8345627,
          "start": 140057,
          "end": 144449
        },
        {
          "text": "I just answered that and said that.",
          "sentiment": "NEUTRAL",
          "confidence": 0.78800577,
          "start": 144537,
          "end": 146057
        },
        {
          "text": "I don't like to portray myself as nobody.",
          "sentiment": "NEGATIVE",
          "confidence": 0.56062955,
          "start": 146081,
          "end": 148241
        },
        {
          "text": "Okay.",
          "sentiment": "NEUTRAL",
          "confidence": 0.58435166,
          "start": 148313,
          "end": 149081
        },
        {
          "text": "I completely be DWAYNE Michael Carter Jr.",
          "sentiment": "NEUTRAL",
          "confidence": 0.61703044,
          "start": 149273,
          "end": 152057
        },
        {
          "text": "I don't portray myself as anything and image is self described.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5895037,
          "start": 152081,
          "end": 155865
        },
        {
          "text": "Well, you have to wait till I'm done with the question.",
          "sentiment": "NEUTRAL",
          "confidence": 0.74497557,
          "start": 155945,
          "end": 157737
        },
        {
          "text": "I don't have to wait to anything.",
          "sentiment": "NEUTRAL",
          "confidence": 0.69099313,
          "start": 157801,
          "end": 159313
        },
        {
          "text": "Honestly, I. I mean, this guy right here may tell me that I have to wait, but personally I don't have to do nothing.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6349632,
          "start": 159369,
          "end": 165475
        },
        {
          "text": "Go ahead, ask the question.",
          "sentiment": "NEUTRAL",
          "confidence": 0.8166494,
          "start": 166055,
          "end": 167351
        },
        {
          "text": "Thank you, your honor.",
          "sentiment": "POSITIVE",
          "confidence": 0.91749036,
          "start": 167503,
          "end": 168903
        },
        {
          "text": "Do you like to can't save you right in the real world.",
          "sentiment": "NEUTRAL",
          "confidence": 0.63224924,
          "start": 169079,
          "end": 172911
        },
        {
          "text": "That guy right there.",
          "sentiment": "NEUTRAL",
          "confidence": 0.661209,
          "start": 173023,
          "end": 174095
        },
        {
          "text": "He can't save you in the real world.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5596421,
          "start": 174215,
          "end": 175875
        },
        {
          "text": "Just so you know, what does that mean?",
          "sentiment": "NEUTRAL",
          "confidence": 0.82353085,
          "start": 176175,
          "end": 178183
        },
        {
          "text": "I don't have to elaborate.",
          "sentiment": "NEUTRAL",
          "confidence": 0.70139295,
          "start": 178319,
          "end": 179835
        },
        {
          "text": "That's your next question?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8192429,
          "start": 182055,
          "end": 183031
        },
        {
          "text": "Is that a threat against.",
          "sentiment": "NEUTRAL",
          "confidence": 0.61524963,
          "start": 183103,
          "end": 184895
        },
        {
          "text": "No.",
          "sentiment": "NEUTRAL",
          "confidence": 0.4936186,
          "start": 184975,
          "end": 185503
        },
        {
          "text": "Mr. Can you just ask your next question, please?",
          "sentiment": "NEUTRAL",
          "confidence": 0.8525261,
          "start": 185639,
          "end": 188595
        },
        {
          "text": "He can't save you.",
          "sentiment": "NEUTRAL",
          "confidence": 0.48478147,
          "start": 195665,
          "end": 197085
        },
        {
          "text": "And what does that mean?",
          "sentiment": "NEUTRAL",
          "confidence": 0.74739057,
          "start": 199145,
          "end": 200489
        },
        {
          "text": "I was talking to myself.",
          "sentiment": "NEUTRAL",
          "confidence": 0.76825297,
          "start": 200617,
          "end": 202005
        },
        {
          "text": "Do you recall that any criminal actions were pending against you at the end of 2008?",
          "sentiment": "NEUTRAL",
          "confidence": 0.6872277,
          "start": 204745,
          "end": 212245
        },
        {
          "text": "I don't recall any.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5951448,
          "start": 212825,
          "end": 214057
        },
        {
          "text": "Do you recall being at all concerned about any criminal actions that may have been pending against you at the end of 2008?",
          "sentiment": "NEUTRAL",
          "confidence": 0.698756,
          "start": 214161,
          "end": 221985
        },
        {
          "text": "I dont recall.",
          "sentiment": "NEUTRAL",
          "confidence": 0.62417483,
          "start": 222065,
          "end": 223125
        },
        {
          "text": "Do you recall that in the summer of 2007 you were arrested in New York City following a performance at the Beacon Theater?",
          "sentiment": "NEUTRAL",
          "confidence": 0.6013106,
          "start": 223505,
          "end": 231445
        },
        {
          "text": "I don't recall that.",
          "sentiment": "NEUTRAL",
          "confidence": 0.66081184,
          "start": 231865,
          "end": 233245
        },
        {
          "text": "Do you recall that police in New York City discovered a.40 caliber pistol on you, on your person?",
          "sentiment": "NEUTRAL",
          "confidence": 0.7281503,
          "start": 234425,
          "end": 243205
        },
        {
          "text": "I don't recall that either.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6408329,
          "start": 244165,
          "end": 245705
        },
        {
          "text": "Do you recall that in late 2009 you pleaded guilty to attempted criminal possession of a weapon?",
          "sentiment": "NEUTRAL",
          "confidence": 0.6484616,
          "start": 246725,
          "end": 255365
        },
        {
          "text": "I don't recall that yet.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7279894,
          "start": 255525,
          "end": 257065
        },
        {
          "text": "Did you serve any time in jail following the end of 2009?",
          "sentiment": "NEUTRAL",
          "confidence": 0.7593188,
          "start": 258885,
          "end": 265345
        },
        {
          "text": "I don't know.",
          "sentiment": "NEUTRAL",
          "confidence": 0.56667334,
          "start": 265845,
          "end": 266865
        },
        {
          "text": "Didn't you serve about eight months at Rikers island in 2010?",
          "sentiment": "NEUTRAL",
          "confidence": 0.74823594,
          "start": 267285,
          "end": 271885
        },
        {
          "text": "I don't know.",
          "sentiment": "NEUTRAL",
          "confidence": 0.56667334,
          "start": 272005,
          "end": 272945
        },
        {
          "text": "Do you remember being arrested in or about January 2008 near Yuma, Arizona?",
          "sentiment": "NEUTRAL",
          "confidence": 0.77320987,
          "start": 273955,
          "end": 280975
        },
        {
          "text": "No, I don't remember that.",
          "sentiment": "NEUTRAL",
          "confidence": 0.6761907,
          "start": 281995,
          "end": 283455
        },
        {
          "text": "Do you remember being charged in early 2008 with possession of narcotics for sale, possession of dangerous drugs, misconduct involving weapons, and possession of drug paraphernalia?",
          "sentiment": "NEGATIVE",
          "confidence": 0.5980825,
          "start": 284155,
          "end": 300135
        },
        {
          "text": "No, I don't call that.",
          "sentiment": "NEUTRAL",
          "confidence": 0.52569056,
          "start": 300565,
          "end": 302069
        },
        {
          "text": "Well, how much longer is this line of question going to go on?",
          "sentiment": "NEGATIVE",
          "confidence": 0.511805,
          "start": 302157,
          "end": 304853
        },
        {
          "text": "Not much longer.",
          "sentiment": "NEUTRAL",
          "confidence": 0.57633525,
          "start": 304949,
          "end": 306021
        },
        {
          "text": "All right, go ahead.",
          "sentiment": "NEUTRAL",
          "confidence": 0.5740551,
          "start": 306093,
          "end": 307013
        },
        {
          "text": "I don't know.",
          "sentiment": "NEUTRAL",
          "confidence": 0.56667334,
          "start": 307069,
          "end": 307905
        },
        {
          "text": "Didn't you win I don't know the award for best rap Album of the year in 2008 for the Carter 3?",
          "sentiment": "NEUTRAL",
          "confidence": 0.74890435,
          "start": 310805,
          "end": 318053
        },
        {
          "text": "I don't know.",
          "sentiment": "NEUTRAL",
          "confidence": 0.56667334,
          "start": 318149,
          "end": 318909
        },
        {
          "text": "And Mr. Carter, you have to wait until the attorney has finished asking the question, please.",
          "sentiment": "NEUTRAL",
          "confidence": 0.7763903,
          "start": 319037,
          "end": 323829
        },
        {
          "text": "I. Im sorry.",
          "sentiment": "NEGATIVE",
          "confidence": 0.7826726,
          "start": 323917,
          "end": 324397
        },
        {
          "text": "Thats my psychic.",
          "sentiment": "NEUTRAL",
          "confidence": 0.79835683,
          "start": 324421,
          "end": 325477
        },
        {
          "text": "Im sorry.",
          "sentiment": "NEGATIVE",
          "confidence": 0.65950567,
          "start": 325581,
          "end": 326005
        }
      ],
      "keyPhrases": [
        "attempted criminal possession",
        "New York City",
        "Michael Carter Jr.",
        "best rap Album",
        "dangerous drugs",
        "a.40 caliber pistol",
        "personal opinion type question",
        "drug paraphernalia",
        "Katie Courig",
        "Katie Coury",
        "Name pet",
        "Pete Ross",
        "Kanye West",
        "stupid ass question",
        "image"
      ],
      "duration": 0,
      "language": "en",
      "confidence": 0.9316976
    }
  }
}

export const getSampleTranscript = (name: string): SampleTranscript | null => {
  return SAMPLE_TRANSCRIPTS[name] || null
}
