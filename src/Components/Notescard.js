import React from "react";
import "../Styles/Notescard.css";
import {
  FaThumbtack,
  FaTrashAlt,
  FaPencilAlt,
  FaTimesCircle,
} from "react-icons/fa";

const Notescard = ({
  item,
  handleDelete,
  onPin,
  iconId,
  handleclose,
  handleId
}) => 

{

  return (
    <>
      <div className="box">
        <div className="content">
          <h2 className="item1">{item.title}</h2>
          <h4 className="item1"> {item.tagline}</h4>
          <p className="item2">{item.description}</p>
        </div>

        <div className="icons">

          {iconId.includes(item.id) ? (
            <FaTimesCircle onClick={() => handleclose(item.id, item)} />
          ) : (
            <FaThumbtack id={item.id} onClick={() => onPin(item.id)} />
          )}

          <FaTrashAlt onClick={() => handleDelete(item.id)} />

          <FaPencilAlt onClick={()=> handleId(item.id)}/>
        </div>
      </div>
    </>
  );
};

export default Notescard;
