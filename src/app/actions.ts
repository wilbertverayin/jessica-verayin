"use server";

import { summarizeContent } from "@/ai/flows/ai-powered-content-summarizer";

type SummarizerState = {
  summary: string;
  error: string;
};

export async function handleSummarize(
  prevState: SummarizerState,
  formData: FormData
): Promise<SummarizerState> {
  const content = formData.get("content") as string;
  if (!content?.trim()) {
    return { summary: "", error: "Please enter some content to summarize." };
  }

  try {
    const result = await summarizeContent({ content });
    if (result.summary) {
        return { summary: result.summary, error: "" };
    }
    return { summary: "", error: "The AI could not generate a summary. Please try again." };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { summary: "", error: `Failed to summarize content: ${errorMessage}` };
  }
}
