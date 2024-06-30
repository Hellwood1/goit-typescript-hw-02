import React from 'react';
import css from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  onLoadMode: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreProps> = ({ onLoadMode }) => {
  return (
    <button className={css.button} type="button" onClick={onLoadMode}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;