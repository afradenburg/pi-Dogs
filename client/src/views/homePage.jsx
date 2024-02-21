import React from "react";
import { getDogs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Cards } from "../components/cards";
import { Pagination } from "../components/pagination";
import { SearchBar } from "../components/searchBar";
import {Spinner} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

export const HomePage = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.Dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const elementPage = 10;
  const totalPages = dogs ? Math.ceil(dogs.length / elementPage) : 0;

  const pageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

  const startIndex = (currentPage - 1) * elementPage;
  const endIndex = startIndex + elementPage;
  const currentElements = Array.isArray(dogs)
    ? dogs.slice(startIndex, endIndex)
    : dogs;

  return (
    <div>
      <SearchBar />
      {Array.isArray(dogs) && dogs.length === 0 ? (
        <div> <Spinner color="primary"/> </div>
      ) : (
        <>
          <Cards allDogs={currentElements} />
          <Pagination page={pageHandler} totalPages={totalPages} />
        </>
      )}
    </div>
  );
};
