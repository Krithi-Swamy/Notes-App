import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { InputArea } from "./InputArea";
import { DisplayArea } from "./DisplayArea";

function App() {
  const [arrayOfNotes, setArrayOfNotes] = useState([]);

  function getData(note) {
    setArrayOfNotes((prevState) => {
      return [...prevState, note];
    });
  }

  function deleteData(index) {
    let newData = arrayOfNotes.filter((item, currentIndex) => {
      return currentIndex != index;
    });
    setArrayOfNotes(newData);
  }

  return (
    <div>
      <Header />
      <Footer />
      <InputArea getData={getData} />
      <DisplayArea arrayOfNotes={arrayOfNotes} deleteData={deleteData} />
    </div>
  );
}

export default App;
