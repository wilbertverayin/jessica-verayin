"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadButton() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <Button 
        onClick={handleDownload} 
        className="bg-accent text-accent-foreground hover:bg-accent/90"
        aria-label="Download Resume as PDF"
    >
      <Download className="mr-2 h-4 w-4" />
      Download PDF
    </Button>
  );
}
