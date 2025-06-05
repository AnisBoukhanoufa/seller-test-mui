import { lazy, Suspense, useRef } from "react";
const JoditEditor = lazy(() => import("jodit-react"));
import "./text-editor.scss";

const TextEditor = ({ data, setData }) => {
  const editor = useRef(null);

  const config = {
    useSearch: false,
    spellcheck: false,
    // enter: "P",
    // defaultMode: "1",
    toolbarAdaptive: false,
    toolbarSticky: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    disablePlugins: "add-new-line",
    allowResizeY: false,
    minHeight: 250,
    minWidth: null,
    // width: 520,
    height: 250,
    placeholder: "Write product description ...",
    buttons: [
      "paragraph",
      "bold",
      "strikethrough",
      "underline",
      "italic",
      "|",
      "ul",
      "ol",
      "|",
      "fontsize",
      "|",
      "align",
      "undo",
      "redo",
    ],
    editorCssClass: "alic",
    controls: {
      fontsize: {
        list: [
          "8",
          "9",
          "10",
          "11",
          "12",
          "14",
          "16",
          "18",
          "24",
          "30",
          "36",
          "48",
          "60",
          "72",
          "96",
          "100",
        ],
      },
      font: {
        command: "fontname",
        list: {
          "": "Default",
          "'Open Sans',sans-serif": "Open Sans",
          "Helvetica,sans-serif": "Helvetica",
          "Arial,Helvetica,sans-serif": "Arial",
          "Georgia,serif": "Georgia",
          "Impact,Charcoal,sans-serif": "Impact",
          "Tahoma,Geneva,sans-serif": "Tahoma",
          "'Times New Roman',Times,serif": "Times New Roman",
          "Verdana,Geneva,sans-serif": "Verdana",
        },
      },
    },
  };

  return (
    <Suspense fallback={<div></div>}>
      <JoditEditor
        ref={editor}
        value={data.description}
        config={config}
        onBlur={(newContent) => {
          setData({ ...data, description: newContent });
        }}
      />
    </Suspense>
  );
};

export default TextEditor;
