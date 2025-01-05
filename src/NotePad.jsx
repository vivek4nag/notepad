import React from "react";
import MDEditor from '@uiw/react-md-editor';

const NotePad = () =>  {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="w-full h-screen">
      <MDEditor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap', height: "75vh" }} />
    </div>
  );
}

export default NotePad;