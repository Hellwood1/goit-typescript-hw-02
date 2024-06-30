import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

import getPhotosByQuery, { Photo } from "../../Api/unsplash-api";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<Photo | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        if (query === "") {
          return;
        }

        setIsLoading(true);
        const data = await getPhotosByQuery(query, page);

        if (data.length <= 0) {
          setIsVisible(false);
          setError(true);
          return;
        }

        setIsVisible(true);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch {
        setIsVisible(false);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, query]);

  async function handleSearch(query: string) {
    setQuery(query);
    setIsLoading(true);
    setError(false);
    setPage(1);
    setPhotos([]);
  }

  function openModal(image: Photo) {
    setImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isVisible && <ImageGallery data={photos} onOpenModal={openModal} />}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {isVisible && !isLoading ? (
        <LoadMoreBtn
          onLoadMode={() => {
            setPage(page + 1);
          }}
        />
      ) : null}
      {image && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          url={image.urls.regular}
          alt={image.alt_description}
        />
      )}
    </>
  );
}

export default App;