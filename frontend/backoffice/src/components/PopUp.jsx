import React from "react";
import Modal from "react-modal";
import Button from "./Button";

const CustomModal = ({
  isOpen,
  onRequestClose,
  title,
  children,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          zIndex: 1000,
        },
        content: {
          width: "35%",
          margin: "0 auto",
          backgroundColor: "#FFD600",
          height: "fit-content",
          borderRadius: "30px",
        },
      }}
    >
      <h1 className="text-xl font-bold text-black mb-2 mx-4">{title}</h1>
      <p className="mx-4">{children}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={onConfirm} className=" mt-6">
          Confirm
        </Button>
        <Button onClick={onRequestClose} className=" ml-4 mt-6">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default CustomModal;
