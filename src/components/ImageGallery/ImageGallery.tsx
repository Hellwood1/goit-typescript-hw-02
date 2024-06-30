import React from 'react';
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../../Api/unsplash-api";

interface ImageGalleryProps {
  data: Photo[];
  onOpenModal: (image: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ data, onOpenModal }) => {
  return (
    <ul className={css.list}>
      {data.map((el) => (
        <li className={css.item} key={el.id}>
          <ImageCard
            image={el}
            url={el.urls.small}
            alt={el.alt_description}
            onOpenModal={onOpenModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;