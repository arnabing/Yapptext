-- AlterTable
ALTER TABLE "Transcript" ADD COLUMN     "audioUrl" TEXT,
ADD COLUMN     "chapters" JSONB,
ADD COLUMN     "utterances" JSONB,
ADD COLUMN     "words" JSONB;
