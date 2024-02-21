import React from "react";
import { Button } from "../styled/button"


export const Pagination = ({ page, totalPages }) => {
  console.log(totalPages)
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <Button key={pageNumber} onClick={() => page(pageNumber)}>
          {pageNumber}
        </Button>
      ))}
    </div>
  );
};
