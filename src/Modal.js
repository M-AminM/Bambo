import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "40px",
  zIndex: 1000,

};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div className="w-400 md:w-300" style={MODAL_STYLES}>
        <button className="text-red font-bold text-xl absolute top-0 right-2" onClick={onClose}>
          &#10005;
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
