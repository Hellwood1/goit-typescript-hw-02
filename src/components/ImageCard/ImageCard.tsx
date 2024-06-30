import React from 'react';
import css from "./ImageCard.module.css";
import { Photo } from "../../Api/unsplash-api";

interface ImageCardProps {
  onOpenModal: (image: Photo) => void;
  image: Photo;
  url: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ onOpenModal, image, url, alt }) => {
  return (
    <div className={css.wrap}>
      <img
        onClick={() => onOpenModal(image)}
        className={css.img}
        src={url}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;