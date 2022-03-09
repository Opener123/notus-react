import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export default function EditorComponent() {
  return(<div className="bg-white h-500-px">
    <Editor />
  </div>
  )
} 