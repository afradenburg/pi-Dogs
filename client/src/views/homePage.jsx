import React from "react";
import { getDogs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Cards } from "../components/cards";
import { Pagination } from "../components/pagination";
import { SearchBar } from "../components/searchBar";

export const HomePage = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.Dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const elementPage = 8;
  const totalPages = dogs
  ? Math.ceil(dogs.length / elementPage)
  : 0;
  
    console.log(dogs)

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
      <Cards allDogs={currentElements} />

      <Pagination page={pageHandler} totalPages={totalPages} />
    </div>
  );
};
