import { useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import { htmlToMarkdown, markdownToHtml } from "@/@core/utils/Parser";
import axiosInstance from "@/@core/utils/axios";
// import uploadToCloudinary from "./upload";
// import uploadToCloudinary from "./upload";

export interface EditorContentChanged {
  html: string;
  markdown: string;
}

export interface EditorProps {
  value?: string;
  onChange?: (changes: EditorContentChanged) => void;
}

export default function TextEditor(props: EditorProps) {
  const [value, setValue] = useState<string>(markdownToHtml(props.value || ""));
  const reactQuillRef = useRef<ReactQuill>(null);

  const onChange = (content: string) => {
    setValue(content);

    if (props.onChange) {
      props.onChange({
        html: content,
        markdown: htmlToMarkdown(content),
      });
    }
  };

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        const url = await uploadFile(file);
        const quill = reactQuillRef.current;
        if (quill) {
          const range = quill.getEditorSelection();
          range && quill.getEditor().insertEmbed(range.index, "image", url);
        }
      }
    };
  }, []);

  const uploadFile = async (file:any) => {
    let payload = new FormData();
    payload.append("file", file);
            
    const response = await axiosInstance.post("/api/news/upload-img", payload);
    return response.data.url
  }

  useEffect(() => {
    console.log(value)
  })

  return (
    <ReactQuill
      ref={reactQuillRef}
      theme="snow"
      placeholder="Start writing..."
      modules={{
        toolbar: {
          container: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["code-block"],
            ["clean"],
          ],
          handlers: {
            image: imageHandler,
          },
        },
        clipboard: {
          matchVisual: false,
        },
      }}
      formats={[
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
        "code-block",
      ]}
      value={value}
      onChange={onChange}
    />
  );
}