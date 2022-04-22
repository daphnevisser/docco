import { useState } from "react";
import "./text-editor.css";
import MDEditor from "@uiw/react-md-editor";

const TextEditor: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState<string | undefined>("# Header");

  const onBlur = (event: React.FocusEvent<HTMLDivElement>): void => {
    if (value) {
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <div data-color-mode="dark" className="text-editor">
        <MDEditor value={value} onChange={setValue} onBlur={onBlur} />
      </div>
    );
  }

  return (
    <div
      onClick={() => setEditing(true)}
      data-color-mode="dark"
      className="text-editor card"
    >
      <div className="card-content">
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
};

export default TextEditor;
