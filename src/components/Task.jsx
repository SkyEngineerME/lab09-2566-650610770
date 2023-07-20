"use client";
import { useState } from "react";



export const Task = ({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}) => {
  
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const toggleBtnOnClick = () => {
    completed = toggleDoneTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
         
        <span className= {completed ? "text-decoration-line-through": ""}>{title}</span>
      <button className="btn btn-success" onClick={toggleBtnOnClick}>Done</button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
};
