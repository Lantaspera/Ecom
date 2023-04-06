import React from 'react';
import '../layout/header.css';
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SearchField = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-field-container">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-field"
        placeholder="Search..."
        value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
      />
     </form>
    </div>
  );
};

export default SearchField;