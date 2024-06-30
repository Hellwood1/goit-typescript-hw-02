import React from 'react';
import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  alt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, url, alt }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.wrap}>
          <img className={css.img} src={url} alt={alt} />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;