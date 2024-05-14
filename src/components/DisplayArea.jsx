import React from "react";

function DisplayArea(props) {
  function handleClick(event) {
    const value = event.target.value;
    props.deleteData(value);
  }

  return (
    <div className="flex-container">
      {props.arrayOfNotes.map((item, index) => {
        return (
          <div className="displayArea" key={index}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <button
              type="button"
              className="deleteButton"
              onClick={handleClick}
              value={index}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export { DisplayArea };
