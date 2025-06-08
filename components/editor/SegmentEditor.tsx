'use client'

import { useState } from "react";
import { useTM } from "@/lib/tm/useTM";
import { useMT } from "@/lib/mt/useMT";

type SegmentEditorProps = {
  segmentId: string;
  sourceText: string;
};

export function SegmentEditor({ segmentId, sourceText }: SegmentEditorProps) {
  const [targetText, setTargetText] = useState("");
  const [status, setStatus] = useState("idle");

  const { getMatches } = useTM(sourceText);
  const { translate } = useMT();

  const tmMatches = getMatches();

  const handleMT = async () => {
    setStatus("translating");
    const mtResult = await translate(sourceText);
    setTargetText(mtResult);
    setStatus("idle");
  };

  const handleSave = () => {
    console.log("Saving segment:", { segmentId, targetText });
    setStatus("saved");
    setTimeout(() => setStatus("idle"), 1000);
  };

  return (
    <div className="border p-4 rounded-xl shadow-md space-y-4 bg-white">
      <p className="font-semibold text-gray-800">Source: {sourceText}</p>

      <textarea
        value={targetText}
        onChange={(e) => setTargetText(e.target.value)}
        className="w-full p-2 border rounded h-24"
        placeholder="Translate here..."
      />

      <div className="flex gap-2">
        <button onClick={handleMT} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          MT Suggestion
        </button>
        <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
          Save
        </button>
      </div>

      <div className="text-sm text-gray-500">Status: {status}</div>

      <div>
        <h4 className="text-sm font-medium">TM Suggestions:</h4>
        <ul className="text-sm text-gray-700 list-disc ml-4">
          {tmMatches.map((m, i) => (
            <li key={i}>{m.text} ({m.score}%)</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
