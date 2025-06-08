'use client';
import { useState, useRef } from 'react';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB max
const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

export default function UploadPage() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setProgress(0);
    setUrl("");

    const file = inputRef.current?.files?.[0];
    if (!file) {
      setError("No file selected.");
      return;
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("File type not allowed.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError("File size exceeds 10MB limit.");
      return;
    }

    // Optional file conversion here (see below)

    const formData = new FormData();
    formData.append("file", file);

    // Use XMLHttpRequest for progress tracking
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/upload", true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        setProgress(Math.round((event.loaded / event.total) * 100));
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setUrl(response.secure_url);
      } else {
        setError("Upload failed.");
      }
      setProgress(0);
    };

    xhr.onerror = () => {
      setError("Upload error.");
      setProgress(0);
    };

    xhr.send(formData);
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleUpload} className="space-y-4">
        <input ref={inputRef} type="file" name="file" />
        {error && <p className="text-red-600">{error}</p>}
        {progress > 0 && <progress value={progress} max="100" className="w-full" />}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={progress > 0}
        >
          Upload
        </button>
      </form>

      {url && (
        <div className="mt-4">
          <p className="text-sm text-gray-700">Uploaded file URL:</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {url}
          </a>
        </div>
      )}
    </div>
  );
}
