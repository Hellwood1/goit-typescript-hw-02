import React from 'react';
import css from "./SearchBar.module.css";
import { Field, Formik, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <>
      <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={(val) => {
          if (!val.query.trim()) {
            toast.error("Please, enter a query.");
            return;
          }
          onSearch(val.query);
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
          <Toaster position="bottom-center" />
        </Form>
      </Formik>
    </>
  );
};

export default SearchBar;