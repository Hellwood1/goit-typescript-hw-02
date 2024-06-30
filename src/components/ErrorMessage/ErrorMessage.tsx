import React from 'react';
import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={css.error}>
      <p>Error. Please, try again.</p>
    </div>
  );
};

export default ErrorMessage;