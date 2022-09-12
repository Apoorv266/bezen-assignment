import React, { useEffect, useState } from "react";
import "../Styles/Input.css";
import { v4 as uuid } from "uuid";

const Input = ({ data, handlePost , setMsg}) => {
  const [field, setfield] = useState(false);
  const [text, settext] = useState("");
  const [tag, settag] = useState("");
  const [desc, setdesc] = useState("");
  const [id, setid] = useState("")

  const [obj, setobj] = useState({
    id: "",
    title: "",
    tagline: "",
    description: "",
  });

  useEffect(() => {
    const ids = uuid();
    let uniqueId = ids.slice(0, 5);
    setobj({
      ...obj,
      id: uniqueId,
      title: text,
      tagline: tag,
      description: desc,
    });
  }, [text, tag, desc, id]);

  function handleField() {
    setfield(true);
  }

  function handleClose() {
    setfield(!field);
  }

  function handleClick() {
    if (text === "" || tag === "" || desc === "") {
      setMsg("One or more field is empty 😖", false)
    }

    else{
    const ids = uuid();
    let uniqueId = ids.slice(0, 5);
    setid(uniqueId)
    setobj({
      ...obj,
      id: id,
    });

    handlePost(obj);
    settext("");
    settag("");
    setdesc("");
    setfield(!field);
    setMsg("Notes added successfully 😎", true)
  }
  }

  return (
    <>
      {!field && (
        <div className="input-area">
          <input
            type="text"
            className="input"
            onClick={handleField}
            placeholder="Start typing your notes..."
          />
        </div>
      )}

      <div>
        {field && (
          <div className="fields">
            <div className="textfield">
              <input
                type="text"
                className="input1"
                placeholder="Title"
                onChange={(e) => settext(e.target.value)}
                maxLength="20"
              />

              <input
                type="text"
                className="input2"
                onChange={(e) => settag(e.target.value)}
                placeholder="Tagline"
                maxLength="20"
              />

              <textarea
                type="text"
                className="textarea"
                onChange={(e) => setdesc(e.target.value)}
                placeholder="Notes"
                maxLength="406"
              ></textarea>
            </div>

            <h3 className="close" onClick={handleClose}>X</h3> 

            
              <button className="btn" onClick={handleClick}>
                Post
              </button>
            
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
