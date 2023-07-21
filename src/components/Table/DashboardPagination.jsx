import React from "react";
import { FormControl } from "react-bootstrap";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useDispatch, useSelector } from "react-redux";

import { setPage, setPageSize } from "../../redux/DataTable/slice";

function DashboardPagination() {
  const {
    table: { data, page },
  } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-grow-1">
          <div className="me-3">
            <span className="d-block">Limit</span>
            <FormControl
              as="select"
              onChange={(e) => dispatch(setPageSize(e.target.value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </FormControl>
          </div>
          {data && data.pageCount && data.pageCount > 0 ? (
            <div>
              <span className="d-block">Jump to page</span>
              <FormControl
                as="select"
                onChange={(e) => dispatch(setPage(e.target.value))}
              >
                {Array.from(
                  { length: Math.ceil(data.pageCount / data.pageSize) },
                  (_, index) => (
                    <option value={index + 1} key={index}>
                      {index + 1}
                    </option>
                  )
                )}
              </FormControl>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <span className="d-block">&nbsp;</span>
          <PaginationControl
            page={page}
            between={4}
            total={data && data.pageCount ? data.pageCount : 0}
            limit={data && data.pageSize ? data.pageSize : 0}
            changePage={(page) => {
              dispatch(setPage(page));
            }}
            ellipsis={1}
          />
        </div>
      </div>
    </>
  );
}

export default DashboardPagination;
