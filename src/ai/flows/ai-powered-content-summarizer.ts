// AI features disabled for static build

export type SummarizeContentInput = {
  content: string;
};

export type SummarizeContentOutput = {
  summary: string;
};

export async function summarizeContent(input: SummarizeContentInput): Promise<SummarizeContentOutput> {
  return { summary: 'AI summarization is not available in the static demo.' };
}
