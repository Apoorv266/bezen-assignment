import React, { useState, useEffect } from "react";
import "./App.css";
import ErrorHandler from "./Components/ErrorHandler";
import Input from "./Components/Input";
import Modal from "./Components/Modal";
import Navbar from "./Components/Navbar";
import Notesview from "./Components/Notesview";

const getLocalData = () => {
  let list1 = localStorage.getItem("data");
  if (list1) {
    return JSON.parse(localStorage.getItem("data"));
  } 

  else {
    return [];
  }
};

const getLocalIcon = () => {
  let list2 = localStorage.getItem("icon");
  if (list2) {
    return JSON.parse(localStorage.getItem("icon"));
  } else {
    return [];
  }
}

function App() {
  const [data, setData] = useState(getLocalData());
  const [iconId, seticonId] = useState(getLocalIcon());
  const [openmodal, setOpenModal] = useState(false);
  const [modalId, setmodalId] = useState("");
  const [showError, setshowError] = useState(false);
  const [errorMsg, seterrorMsg] = useState("test");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data, openmodal]);

  useEffect(() => {
    localStorage.setItem("icon", JSON.stringify(iconId));
  }, [iconId])
  

  function handleDelete(id) {
    let newData = data.filter((item) => item.id !== id);
    setData(newData);
  }

  function handlePost(value) {
    setData([...data, value]);
  }

  function onPin(id) {
    let index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    let arr1 = data.slice(0, index).concat(data.slice(index + 1));
    arr1.unshift(data[index]);

    setData(arr1);
    seticonId((iconId) => [...iconId, id]);
  }

  function handleclose(id, item) {
    let newarr = iconId.filter((item) => {
      return item !== id;
    });
    seticonId(newarr);

    let arr = data.filter((item) => {
      return item.id !== id;
    });
    arr.push(item);
    setData(arr);
  }

  function handleId(id) {
    setmodalId(id);
    setOpenModal(true);
  }

  function setMsg(msg) {
    seterrorMsg(msg);
    setshowError(true);
    setTimeout(() => {
      setshowError(false);
    }, 3000);
  }

  return (
    <div className="App">
      <header className="App-header">
        {showError && <ErrorHandler errorMsg={errorMsg} />}
        {openmodal ? (
          <Modal setOpenModal={setOpenModal} data={data} modalId={modalId} setMsg={setMsg}/>
        ) : (
          <Navbar />
        )}

        <Input
          data={data}
          handlePost={(value) => handlePost(value)}
          setMsg={setMsg}
        />

        <Notesview
          handleDelete={handleDelete}
          Data={data}
          onPin={onPin}
          iconId={iconId}
          handleclose={handleclose}
          setOpenModal={setOpenModal}
          handleId={handleId}
        />
      </header>
    </div>
  );
}

export default App;
