import React from "react";
import { Button, ButtonGroup, Select } from "@chakra-ui/react";

const Pagination = ({ page, setPage, totalCount, limit, setLimit }) => {
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button
        data-cy="pagination-previous-button"
        disabled={page <= 1}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        {" < "}
      </Button>
      <Select data-cy="pagination-limit-select" margin="0px 20px">
        <option
          data-cy="pagination-limit-3"
          onChange={() => setLimit(limit + 3)}
        >
          3
        </option>
        <option
          data-cy="pagination-limit-6"
          onChange={() => setLimit(limit + 3)}
        >
          6
        </option>
        <option
          data-cy="pagination-limit-9"
          onChange={() => setLimit(limit + 3)}
        >
          9
        </option>
      </Select>
      <Button
        data-cy="pagination-next-button"
        disabled={totalCount < page * 5}
        onClick={() => {
          if (page > 1) {
            setPage(page + 1);
          }
        }}
      >
        {" > "}
      </Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
