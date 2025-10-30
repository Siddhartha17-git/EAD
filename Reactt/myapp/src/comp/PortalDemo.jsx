import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

// Modal component using portal
function Modal({ children, onClose }) {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.body; // or use document.getElementById("modal-root")
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    elRef.current
  );
}

// Main component
export default function PortalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <h3>Portal Demo</h3>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h2>Hello from the Portal!</h2>
        </Modal>
      )}
    </div>
  );
}
