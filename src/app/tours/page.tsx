'use client';
import { PutBlobResult } from "@vercel/blob";

2

import { useState, useRef } from 'react';

export default function Tours() {
    const inputFileRef = useRef(null);
    const [blob, setBlob] = useState(null);   
    const ref = useRef(null);

    const save = async () => {

            const file = ref.current.files[0];

            const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/avatar/upload?filename=${file.name}`,
            {
                method: 'POST',
                body: file,
            },
            );

            const newBlob = (await response.json()) as PutBlobResult;

            setBlob(newBlob);
    }

  return (
    <>
      <h1>Upload Your Avatar</h1>

      <div>
        <input name="file" ref={ref} type="file" required />
        <button onClick={save}>Upload</button>
      </div>
      {blob && (
        <div>
          Blob url: <a href={blob?.url}>{blob?.url}</a>
        </div>
      )}
    </>
  );
}