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
  PageNavigation,
  TheadStyle,
  Pagination,
  RecordsPerPage,
  SearchInputWrapper,
} from "../../../style/components/Table/Table";
export const Table = ({
  columns,
  rows,
  recordsPerPageOption,
  rowSelection,
}) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [recordsPerPage, setRecordsPerPage] = useState(recordsPerPageOption[0]);
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchFilters, setSearchFilters] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
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
      const tableWidth = window.innerWidth - 200; // Adjust the value based on your layout
      let totalWidth = 0;
      let visibleCols = [];
      for (let i = 0; i < columns.length; i++) {
        const colWidth = columns[i].width || 100; // Set a default width if not specified
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
            {`${key}: ${row[key]}`}
          </ExpandedDataListItem>
        ))}
      </ExpandedDataList>
    );
  };

  const toggleSelect = (rowIndex) => {
    const selectedRowsCopy = [...selectedRows];
    if (selectedRowsCopy.includes(rowIndex)) {
      selectedRowsCopy.splice(selectedRowsCopy.indexOf(rowIndex), 1);
    } else {
      selectedRowsCopy.push(rowIndex);
    }
    setSelectedRows(selectedRowsCopy);
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allRowIndexes = rows.map((_, index) => index);
      setSelectedRows(allRowIndexes);
    }
    setSelectAll(!selectAll);
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
    debugger
    const { checked } = event.target;
    debugger
    const updatedSelectedRowKeys = [...selectedRowKeys];
    debugger
    if (checked) {
      debugger
      updatedSelectedRowKeys.push(rowKey);
    } else {
      const index = updatedSelectedRowKeys.indexOf(rowKey);
      debugger
      if (index !== -1) {
        debugger
        updatedSelectedRowKeys.splice(index, 1);
      }
    }
    debugger
    setSelectedRowKeys(updatedSelectedRowKeys);
    const updatedSelectedRowObjects = rows.filter((row) =>
      updatedSelectedRowKeys.includes(row.key)
    );
    debugger
    rowSelection.onChange(updatedSelectedRowKeys, updatedSelectedRowObjects);
  };
  const onSelectChange = (newSelectedRowKeys, newSelectedRowObjects) => {
    debugger
    console.log("selectedRowKeys changed: ", newSelectedRowObjects);
    debugger
    setSelectedRowKeys(newSelectedRowKeys);
    rowSelection.onChange(newSelectedRowKeys, newSelectedRowObjects);
  };
  return (
    <Container>
      <TableWrapper>
        <ResponsiveTable>
          <thead>
            <tr style={TheadStyle}>
              <th>
                <input
                  type="checkbox"
                  // checked={selectAll}
                  // onChange={toggleSelectAll}
                  checked={selectedRowKeys.length === rows.length}
                  onChange={(event) =>
                    onSelectChange(
                      event.target.checked ? rows.map((row) => row.key) : [],
                      event.target.checked ? rows : []
                    )
                  }
                />
              </th>
              <th>Expand</th>
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
            {/* <tr>
            <th></th>
            <th></th>
            {visibleColumns.map((column) => (
              <th key={column.key}>
                <SearchInputWrapper>
                <input
                  type="text"
                  placeholder={column.title}
                  value={searchFilters[column.key] || ""}
                  onChange={(e) =>
                    handleSearchFilterChange(column.key, e.target.value)
                  }
                />
                </SearchInputWrapper>
              </th>
            ))}
          </tr> */}

            <tr>
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
          </thead>
          <tbody>
            {paginatedRows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      // onChange={() => toggleSelect(rowIndex)}
                      // checked={selectedRowKeys.includes(rowIndex.key)}
                      onChange={(event) => handleCheckboxChange(event, row)}
                    />
                  </td>
                  <td>
                    <ExpandButton onClick={() => toggleExpand(rowIndex)}>
                      {isRowExpanded(rowIndex) ? "Collapse" : "Expand"}
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
      {/* <Pagination> */}
      {/* <RecordsPerPage> */}
      Records per page:
      <select
        value={recordsPerPage}
        onChange={(e) => handleRecordsPerPageChange(e)}
      >
        {recordsPerPageOption.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* </RecordsPerPage> */}
      {/* <PageNavigation> */}
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
      {/* </PageNavigation> */}
      {/* </Pagination> */}
    </Container>
  );
};
