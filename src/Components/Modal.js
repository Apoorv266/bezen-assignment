import React, { useState, useEffect } from "react";

import "../Styles/Modal.css";

function Modal({ setOpenModal, data, modalId, setMsg }) {
  var index = data
    .map(function (e) {
      return e.id;
    })
    .indexOf(modalId);

  const [title, settitle] = useState("");
  const [tagline, settagline] = useState("");
  const [notes, setnotes] = useState("");

  function handleUpdate() {
    let a = data[index];

    if (title === a.title && tagline === a.tagline && notes === a.description) {
      setMsg("You haven't updated anything 🤕", false)
      setOpenModal(false);
    }
    else{
    a.title = title;
    a.tagline = tagline;
    a.description = notes;
    setOpenModal(false);
    setMsg("Update Successful 🥳", true)
  }
  }

  useEffect(() => {
    let b = data[index];

    settitle(b.title);
    settagline(b.tagline);
    setnotes(b.description)
  }, []);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn"></div>

        <div className="body">
          <h3>New Title</h3>
          <input
            type="text"
            id="input"
            placeholder="enter new title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            maxLength="20"
          />

          <h3>New Tagline</h3>
          <input
            type="text"
            id="input"
            placeholder="enter new tagline"
            value={tagline}
            onChange={(e) => settagline(e.target.value)}
            maxLength="20"
          />

          <h3>New Notes</h3>
          <textarea
            name=""
            id="input1"
            placeholder="enter new notes"
            value={notes}
            onChange={(e) => setnotes(e.target.value)}
            maxLength="406"
          />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={handleUpdate}>Update Note</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
