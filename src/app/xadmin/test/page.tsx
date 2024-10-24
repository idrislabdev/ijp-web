"use client";
import { useRef } from "react";

export default function TestUpload() {
  const fileInput = useRef<HTMLInputElement>(null);

  async function uploadFile(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("file", fileInput?.current?.files?.[0]!);

    const response = await fetch("/api/test-upload", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
  }

  return (
    <form className="flex flex-col gap-4">
      <label>
        <span>Upload a file</span>
        <input type="file" name="file" ref={fileInput} />
      </label>
      <button type="submit" onClick={uploadFile}>
        Submit
      </button>
    </form>
  );
}