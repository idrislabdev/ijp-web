"use client"
import axiosInstance from '@/@core/utils/axios';
import React, { useCallback, useRef, useState } from 'react'
import TagInput from 'rsuite/TagInput';
import { Message, useToaster } from 'rsuite';
import TextEditor from '@/@core/components/text-editor';


const PostingNewsForm = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [prolog, setProlog] = useState("");
  const [fileData, setFileData] = useState(null);
  const toaster = useToaster();
  const fileInput = useRef<HTMLInputElement>(null);

  const message = (
      <Message showIcon type={'info'}>
        Berita Telah Dibuat
      </Message>
  );

  const clearForm = () => {
    setContent("");
    setTitle("");
    setProlog("");
    if (fileInput.current) {
      fileInput.current.value = "";
  }
  }

  const setFile = () => {
    let src:any = document.getElementById('file-upload')
    let files = src.files[0]
    setFileData(files)
  }

  const save = async () => {
    let body = new FormData();
    body.append("title", title);
    body.append("prolog", prolog);
    body.append("content", content);
    if (fileData !== null)
      body.append("file", fileData);

    const response = await axiosInstance.post(`/api/news`, body);
    toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    clearForm();

  }
  return (
    <div className='form-input'>
        <div className='flex gap-[20px]'>
          <div className='form-area w-full h-[470px]'>
            <div className='input-area'>
              <label>Judul Berita</label>
              <input value={title} onChange={e => setTitle(e.target.value)} className='base' />
            </div>
            <div className='input-area'>
              <label>Kalimat Pembuka</label>
              <input value={prolog} onChange={e => setProlog(e.target.value)} className='base' />
            </div>
            <div className='input-area'>
              <label>Thumbnail Berita</label>
              <input id="file-upload" className='base' type='file' onChange={setFile} accept=".png, .jpg, .jpeg" ref={fileInput}/>
            </div>
            <TextEditor value={content} onChange={(e) => setContent(e.html)} />
          </div>
        </div>
        <div className='form-button'>
            <button className='btn disabled:!bg-blue-300' disabled={title === '' || content === '' || fileData === null || prolog === null} onClick={_ => save()}>Save</button>
        </div>
    </div>
  )
}

export default PostingNewsForm
