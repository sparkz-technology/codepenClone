// CodeEditor.tsx
import React from "react"
import MonacoEditor, { monaco } from "react-monaco-editor"

interface CodeEditorProps {
   code: string
   onChange: (newValue: string) => void
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
   const editorDidMount: (
      editor: monaco.editor.IStandaloneCodeEditor,
      monaco: typeof import("monaco-editor"),
   ) => void = (editor, monaco) => {
      // Check if TypeScript language support is available
      if (monaco.languages.typescript) {
         // Set language to JavaScript
         monaco.editor.setModelLanguage(editor.getModel()!, "javascript")

         // Enable autocompletion
         monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true)
         monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ESNext,
            allowNonTsExtensions: true,
         })
      } else {
         console.error("Monaco TypeScript language support not available.")
      }
   }

   const onChangeHandler: (newValue: string, e: monaco.editor.IModelContentChangedEvent) => void = (newValue, e) => {
      onChange(newValue)
   }

   return (
      <MonacoEditor
         width="500px"
         height="500px"
         language="javascript"
         theme="vs-dark"
         value={code}
         options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
         }}
         onChange={onChangeHandler}
         editorDidMount={editorDidMount}
      />
   )
}

export default CodeEditor
