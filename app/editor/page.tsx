import { SegmentEditor } from "@/components/editor/SegmentEditor";

export default function EditorPage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Translation Editor</h1>
      <SegmentEditor segmentId="seg-001" sourceText="This is a translation." />
      <SegmentEditor segmentId="seg-002" sourceText="Translate this sentence." />
    </main>
  );
}
