import { useState } from "react";
import "./text-editor.css";
import MDEditor from "@uiw/react-md-editor";
import { Cell } from "../../state";
import { useActions } from "../../hooks/useActions";

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const [editing, setEditing] = useState(false);
  const { updateCell } = useActions();

  const onBlur = (event: React.FocusEvent<HTMLDivElement>): void => {
    if (cell.content) {
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <div data-color-mode="dark" className="text-editor">
        <MDEditor
          value={cell.content}
          onChange={(value) => updateCell(cell.id, value || "")}
          onBlur={onBlur}
        />
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
        <MDEditor.Markdown source={cell.content || "Click to edit"} />
      </div>
    </div>
  );
};

export default TextEditor;
