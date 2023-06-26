import React, { useState, useEffect, useMemo } from "react";
import {
  TableWrapper,
  ResponsiveTable,
  ExpandButton,
  Container,
  ExpandedRow,
  ExpandedDataGrid,
  ExpandedDataList,
  ExpandedDataListItem,
  TheadStyle,
  RadioContainer,
  RadioButton,
  IconButton,
} from "../../../style/components/Table/Table";
import zoom from "../../libs/zoom.png";
import zoomHover from "../../libs/icons/view-hover.svg";
import expandHover from "../../libs/icons/expand-row-icon.svg";
import collapseIn from "../../libs/icons/collapse-in.svg";
import collapseOn from "../../libs/icons/collapse-on.svg";
import filterAction from "../../libs/icons/filter-action.svg";
import refreshAction from "../../libs/icons/refresh.svg";
import editAction from "../../libs/icons/edit.svg";
import deleteAction from "../../libs/icons/delete.svg";
import rangeAction from "../../libs/icons/range.svg";
import sortingAction from "../../libs/icons/sorting.svg";
import manageColAction from "../../libs/icons/manage-col.svg";
import allActionColAction from "../../libs/icons/all-actions-icon.svg";
import arrowLeft from "../../libs/icons/arrow-left.svg";
import arrowRight from "../../libs/icons/arrow-right.svg";
export const Table = ({
  columns,
  rows,
  recordsPerPageOption,
  rowSelection,
  isAnnex
}) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([]);
  const [recordsPerPage, setRecordsPerPage] = useState(recordsPerPageOption[0]);
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchFilters, setSearchFilters] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [radioValue, setRadioValue] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const toggleExpand = (rowIndex) => {
    const expandedRowsCopy = [...expandedRows];
    if (expandedRowsCopy.includes(rowIndex)) {
      expandedRowsCopy.splice(expandedRowsCopy.indexOf(rowIndex), 1);
    } else {
      expandedRowsCopy.push(rowIndex);
    }
    setExpandedRows(expandedRowsCopy);
  };
  const isRowExpanded = (rowIndex) => {
    return expandedRows.includes(rowIndex);
  };
  useEffect(() => {
    const calculateVisibleColumns = () => {
      const tableWidth = window.innerWidth - 200;
      let totalWidth = 0;
      let visibleCols = [];
      for (let i = 0; i < columns.length; i++) {
        const colWidth = columns[i].width || 100;
        if (totalWidth + colWidth <= tableWidth) {
          totalWidth += colWidth;
          visibleCols.push(columns[i]);
        } else {
          break;
        }
      }
      setVisibleColumns(visibleCols);
    };
    calculateVisibleColumns();
    window.addEventListener("resize", calculateVisibleColumns);
    return () => {
      window.removeEventListener("resize", calculateVisibleColumns);
    };
  }, [columns]);
  const renderExpandedData = (row) => {
    const hiddenColumns = Object.keys(row).filter(
      (key) => !visibleColumns.some((column) => column.key === key)
    );

    return (
      <ExpandedDataList>
        {hiddenColumns.map((key) => (
          <ExpandedDataListItem key={key}>
            <span style={{ color: "#2991D6" }}>{`${key}`}</span> : &nbsp;&nbsp;
            {`${row[key]}`}
          </ExpandedDataListItem>
        ))}
      </ExpandedDataList>
    );
  };
  const handleRecordsPerPageChange = (e) => {
    setRecordsPerPage(Number(e.target.value));
  };
  const handleColumnSort = (columnKey) => {
    if (columnKey === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };
  const handleSearchFilterChange = (columnKey, value) => {
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [columnKey]: value,
    }));
  };
  const filterRows = () => {
    return rows.filter((row) => {
      for (const [columnKey, filterValue] of Object.entries(searchFilters)) {
        const cellValue = row[columnKey] || "";
        if (
          !cellValue
            .toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase())
        ) {
          return false;
        }
      }
      return true;
    });
  };
  const sortedRows = filterRows().sort((a, b) => {
    const aValue = a[sortColumn] || "";
    const bValue = b[sortColumn] || "";
    if (aValue === bValue) {
      return 0;
    }
    if (sortDirection === "asc") {
      return aValue < bValue ? -1 : 1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  });
  const totalPages = Math.ceil(sortedRows.length / recordsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedRows = sortedRows.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );
  const handleCheckboxChange = (event, rowKey) => {
    const { checked } = event.target;
    const updatedSelectedRowKeys = [...selectedRowKeys];
    if (checked) {
      updatedSelectedRowKeys.push(rowKey);
    } else {
      const index = updatedSelectedRowKeys.indexOf(rowKey);
      if (index !== -1) {
        updatedSelectedRowKeys.splice(index, 1);
      }
    }
    setSelectedRowKeys(updatedSelectedRowKeys);
    const updatedSelectedRowObjects = rows.filter((row) =>
      updatedSelectedRowKeys.includes(row.key)
    );
    rowSelection.onChange(updatedSelectedRowKeys, updatedSelectedRowObjects);
  };
  const onSelectChange = (newSelectedRowKeys, newSelectedRowObjects) => {
    console.log("selectedRowKeys changed: ", newSelectedRowObjects);
    setSelectedRowKeys(newSelectedRowKeys);
    rowSelection.onChange(newSelectedRowKeys, newSelectedRowObjects);
  };
  const handleRadioClick = (value) => {
    setRadioValue(value);
    console.log(value);
  };
  const iconData = [
    { image: allActionColAction, alt: "Icon 8" },
    { image: manageColAction, alt: "Icon 7" },
    { image: sortingAction, alt: "Icon 6" },
    { image: rangeAction, alt: "Icon 5" },
    { image: deleteAction, alt: "Icon 4" },
    { image: editAction, alt: "Icon 3" },
    { image: refreshAction, alt: "Icon 2" },
    { image: filterAction, alt: "Icon 1" },
  ];
  const _handleClickFilters = (obj, index) => {
    switch (obj.alt) {
      case "Icon 1":
        setIsFiltered(!isFiltered);
        break;
      default:
        break;
    }
  };

  const _handleChangePage = (val) => {
    setCurrentPage(val);
  };
  const PaginationSection = () => (
    <div style={{ display: "flex", padding: "7px 0" }}>
      Page:
      <img
        src={arrowLeft}
        alt="prev"
        style={{
          padding: "0",
          color: "#000",
          border: "1px solid #D8D8D8",
          color: "#120e5b",
          display: "inline-block",
          fontSize: "0",
          height: "20px",
          lineHeight: "18px",
          textAlign: "center",
          width: "20px",
          float: "left",
          margin: "0 5px",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "18px 18px",
        }}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      <input
        type="number"
        style={{
          width: "60px",
          border: "1px solid #D8D8D8",
          padding: "0 20px 0 5px",
          height: "20px",
          verticalAlign: "top",
        }}
        value={currentPage}
        onChange={(e) => _handleChangePage(e.target.value)}
      />
      {/* <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button> */}
      <img
        src={arrowRight}
        alt="next"
        style={{
          padding: "0",
          color: "#000",
          border: "1px solid #D8D8D8",
          color: "#120e5b",
          display: "inline-block",
          fontSize: "0",
          height: "20px",
          lineHeight: "18px",
          textAlign: "center",
          width: "20px",
          float: "left",
          margin: "0 5px",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "18px 18px",
        }}
        onClick={() => handlePageChange(currentPage + 1)}
      />
      <span style={{ marginTop: "-.2rem" }}>
        of {totalPages} &nbsp; | View &nbsp;
        <select
          style={{ border: "1px solid #D8D8D8" }}
          value={recordsPerPage}
          onChange={(e) => handleRecordsPerPageChange(e)}
        >
          {recordsPerPageOption.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        &nbsp; Records &nbsp;&nbsp; | Total {rows.length} records
        {/* Page {currentPage}  */}
      </span>
    </div>
  );
  return (
    <Container>
      {/* <div
        style={{
          float: "right",
          display: "inline-block",
          width: "auto",
          marginLeft: "10px",
        }}
      >
        <input
          style={{
            height: "30px",
            width: "150px",
            boxSizing: "border-box !important",
            marginBottom: 0,
            border: "1px solid #d8d8d8",
            fontSize: "14px",
            padding: "5px 10px",
            fontWeight: "normal",
          }}
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Global Search"
        />
      </div>
      Show Active Only
      <RadioContainer>
        <RadioButton active={radioValue} onClick={() => handleRadioClick(true)}>
          Yes
        </RadioButton>
        <RadioButton
          active={!radioValue}
          onClick={() => handleRadioClick(false)}
        >
          No
        </RadioButton>
        <input type="hidden" value={radioValue} />
      </RadioContainer> */}
      {/* <ImageButtonSection type="button" value="Add a new row" ></ImageButtonSection> */}
      <TableWrapper>
        <div style={{ display: "flex", float: "left" }}>
          <PaginationSection />
        </div>

        {iconData.map((icon, index) => (
          <IconButton
            key={index}
            onClick={() => _handleClickFilters(icon, index)}
          >
            <img
              style={{
                display: "flex",
                border: 0,
                backgroundColor: "transparent",
                borderRight: "1px solid #D8D8D8",
                float: "left",
                height: "28px",
                lineHeight: "28px",
                textAlign: "center",
                width: "28px",
                color: "#120E5B",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto 14px",
                fontSize: 0,
              }}
              src={icon.image}
              alt={icon.alt}
            />
          </IconButton>
        ))}
        <ResponsiveTable>
          <thead>
            <tr style={TheadStyle}>
              <th>
                <input
                  style={{
                    width: "20px",
                    height: "20px",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                  type="checkbox"
                  checked={selectedRowKeys.length === rows.length}
                  onChange={(event) =>
                    onSelectChange(
                      event.target.checked ? rows.map((row) => row.key) : [],
                      event.target.checked ? rows : []
                    )
                  }
                />
              </th>
              <th>
                <img
                  src={zoomHover}
                  alt="zoom icon"
                  style={{ width: "20px", marginLeft: "20%" }}
                />
              </th>
              <th>
                <img
                  src={expandHover}
                  alt="zoom icon"
                  style={{ width: "20px", marginLeft: "20%" }}
                />
              </th>
              {visibleColumns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => handleColumnSort(column.key)}
                >
                  {column.title}
                  {sortColumn === column.key && (
                    <span>{sortDirection === "asc" ? "▲" : "▼"}</span>
                  )}
                </th>
              ))}
            </tr>
            {isFiltered ? (
              <tr>
                <th></th>
                <th></th>
                <th></th>
                {visibleColumns.map((column) => (
                  <th key={column.key} style={{ flex: "1" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="text"
                        placeholder={column.title}
                        value={searchFilters[column.key] || ""}
                        onChange={(e) =>
                          handleSearchFilterChange(column.key, e.target.value)
                        }
                        style={{ width: "100%", boxSizing: "border-box" }}
                      />
                    </div>
                  </th>
                ))}
              </tr>
            ) : null}
          </thead>
          {/* <tbody>
  {paginatedRows
    .filter((row) =>
      Object.values(row).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .map((row) => (
      <tr key={row.key}>
        {visibleColumns.map((column) => (
          <td key={`${row.key}-${column.key}`}>
            {row[column.key]}
          </td>
        ))}
      </tr>
    ))}
</tbody> */}
          <tbody>
            {paginatedRows
              .filter((row) =>
                Object.values(row).some(
                  (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(searchQuery.toLowerCase())
                )
              )
              .map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  <tr>
                    <td>
                      <input
                        style={{
                          width: "20px",
                          height: "20px",
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                        type="checkbox"
                        onChange={(event) => handleCheckboxChange(event, row)}
                      />
                    </td>
                    <td>
                      <img
                        src={zoom}
                        alt="zoom icon"
                        style={{ width: "20px", marginLeft: "20%" }}
                      />
                    </td>
                    <td>
                      <ExpandButton onClick={() => toggleExpand(rowIndex)}>
                        {isRowExpanded(rowIndex) ? (
                          <>
                            <img
                              src={collapseOn}
                              alt="zoom icon"
                              style={{ width: "12px", marginLeft: "5%" }}
                            />
                          </>
                        ) : (
                          <>
                            <img
                              src={collapseIn}
                              alt="zoom icon"
                              style={{ width: "15px", marginLeft: "5%" }}
                            />
                          </>
                        )}
                      </ExpandButton>
                    </td>
                    {visibleColumns.map((column, cellIndex) => (
                      <td key={cellIndex}>{row[column.dataIndex]}</td>
                    ))}
                  </tr>
                  {isRowExpanded(rowIndex) && (
                    <ExpandedRow>
                      <td colSpan={visibleColumns.length + 2}>
                        <ExpandedDataGrid>
                          {renderExpandedData(row)}
                        </ExpandedDataGrid>
                      </td>
                    </ExpandedRow>
                  )}
                </React.Fragment>
              ))}
          </tbody>
        </ResponsiveTable>
      </TableWrapper>
      <PaginationSection />
      {/* <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button> */}
    </Container>
  );
};
