import { useRef } from "react";
import MonacoEditor, { OnChange,OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
  initialValue: string;
  onChange: OnChange;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();

  const onMount: OnMount = (monacoEditor) => {
    editorRef.current = monacoEditor
  }

  const onFormatClick = () => {
    // get current value from editor
    const unformatted = editorRef.current.getModel().getValue();

    // format that value
    const formatted = prettier.format(unformatted, {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: true,
    });

    // set the formatted value back in the editor
    editorRef.current.setValue(formatted);
  }
  
  return (
    <>
      <button onClick={onFormatClick}>Format</button>
    <MonacoEditor
        onChange={onChange}
        onMount={onMount}
      value={initialValue}
      height="500px"
      language="javascript"
      theme="vs-dark"
      options={{
        wordWrap: "on",
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2
      }}
      />
      </>
  );
};

export default CodeEditor;
