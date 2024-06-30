import React from 'react';
import css from "./Loader.module.css";
import { Triangle } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="black"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;