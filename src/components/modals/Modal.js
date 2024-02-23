import React from "react";
import "./Modal.css";
import Button from "@mui/material/Button";

function Modal({ Component, title, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h1>{title}</h1>
          <button onClick={onClose} className="contact-button">
            Stäng
          </button>
        </div>

        <div className="modal-content">
          {Component ? <Component /> : "No component passed"}
        </div>
      </div>
    </div>
  );
}

export default Modal;
