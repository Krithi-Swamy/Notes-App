import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function InputArea(props) {
  const [noteObj, setNoteObj] = useState({ title: "", content: "" });
  const [isExpanded, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteObj((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleClick() {
    props.getData(noteObj);
    setNoteObj({ title: "", content: "" });
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div className="inputArea">
      {isExpanded && (
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={noteObj.title}
          onChange={handleChange}
        />
      )}
      <textarea
        name="content"
        placeholder="Take a note..."
        value={noteObj.content}
        onChange={handleChange}
        onClick={expand}
        style={{ height: isExpanded ? "70%" : "25%" }}
      />
      {isExpanded && (
        <button type="button" className="addButton" onClick={handleClick}>
          <AddIcon />
        </button>
      )}
    </div>
  );
}

export { InputArea };
