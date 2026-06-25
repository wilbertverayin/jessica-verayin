"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { handleSummarize } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2 } from "lucide-react";
import { Label } from "@/components/ui/label";

const initialState = {
  summary: "",
  error: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground" disabled={pending}>
      {pending ? "Summarizing..." : "Summarize Content"}
    </Button>
  );
}

export function Summarizer() {
  const [state, formAction] = useFormState(handleSummarize, initialState);
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (state.summary) {
      // Optionally clear the textarea on success
      // formRef.current?.reset();
    }
  }, [state.summary]);

  return (
    <Card className="max-w-5xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
          <Wand2 />
          AI Content Summarizer
        </CardTitle>
        <CardDescription>
          Paste any text to get a concise summary. Perfect for refining your resume.
        </CardDescription>
      </CardHeader>
      <form ref={formRef} action={formAction}>
        <CardContent className="space-y-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="content-input">Text to summarize</Label>
            <Textarea
              id="content-input"
              name="content"
              placeholder="Paste your professional experience, project details, or any other text here..."
              rows={8}
              className="text-base"
              required
            />
          </div>
          {state.summary && (
            <div className="p-4 bg-secondary rounded-md border">
              <h3 className="font-headline text-lg text-primary mb-2">AI Summary:</h3>
              <p className="text-base whitespace-pre-wrap">{state.summary}</p>
            </div>
          )}
          {state.error && (
            <p className="mt-2 text-sm font-medium text-destructive">{state.error}</p>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
