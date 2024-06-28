import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AddIcon } from "../assets/add.svg";

const AddButton = () => {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/note/new");
  };

  return (
    <button onClick={handleClick} className="add-button floating-button">
      <AddIcon />
    </button>
  );
};

export default AddButton;
