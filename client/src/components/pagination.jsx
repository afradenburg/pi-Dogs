import React from "react";
import { Button } from "../styled/button"
import { Pagin } from "../styled/pagination";

export const Pagination = ({ page, totalPages }) => {
  // console.log(totalPages)
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagin>
      {pageNumbers.map((pageNumber) => (
        <Button style={{margin: "10px"}} key={pageNumber} onClick={() => page(pageNumber)}>
          {pageNumber}
        </Button>
      ))}
    </Pagin>
  );
};
