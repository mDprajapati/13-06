"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Table = require("../../../style/components/Table/Table");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Table = function Table(_ref) {
  var columns = _ref.columns,
    rows = _ref.rows,
    recordsPerPageOption = _ref.recordsPerPageOption,
    rowSelection = _ref.rowSelection;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    expandedRows = _useState2[0],
    setExpandedRows = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    visibleColumns = _useState4[0],
    setVisibleColumns = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedRows = _useState6[0],
    setSelectedRows = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    selectAll = _useState8[0],
    setSelectAll = _useState8[1];
  var _useState9 = (0, _react.useState)(recordsPerPageOption[0]),
    _useState10 = _slicedToArray(_useState9, 2),
    recordsPerPage = _useState10[0],
    setRecordsPerPage = _useState10[1];
  var _useState11 = (0, _react.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    sortColumn = _useState12[0],
    setSortColumn = _useState12[1];
  var _useState13 = (0, _react.useState)("asc"),
    _useState14 = _slicedToArray(_useState13, 2),
    sortDirection = _useState14[0],
    setSortDirection = _useState14[1];
  var _useState15 = (0, _react.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    searchFilters = _useState16[0],
    setSearchFilters = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedRowKeys = _useState18[0],
    setSelectedRowKeys = _useState18[1];
  var toggleExpand = function toggleExpand(rowIndex) {
    var expandedRowsCopy = _toConsumableArray(expandedRows);
    if (expandedRowsCopy.includes(rowIndex)) {
      expandedRowsCopy.splice(expandedRowsCopy.indexOf(rowIndex), 1);
    } else {
      expandedRowsCopy.push(rowIndex);
    }
    setExpandedRows(expandedRowsCopy);
  };
  var isRowExpanded = function isRowExpanded(rowIndex) {
    return expandedRows.includes(rowIndex);
  };
  (0, _react.useEffect)(function () {
    var calculateVisibleColumns = function calculateVisibleColumns() {
      var tableWidth = window.innerWidth - 200; // Adjust the value based on your layout
      var totalWidth = 0;
      var visibleCols = [];
      for (var i = 0; i < columns.length; i++) {
        var colWidth = columns[i].width || 100; // Set a default width if not specified
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
    return function () {
      window.removeEventListener("resize", calculateVisibleColumns);
    };
  }, [columns]);
  var renderExpandedData = function renderExpandedData(row) {
    var hiddenColumns = Object.keys(row).filter(function (key) {
      return !visibleColumns.some(function (column) {
        return column.key === key;
      });
    });
    return /*#__PURE__*/_react["default"].createElement(_Table.ExpandedDataList, null, hiddenColumns.map(function (key) {
      return /*#__PURE__*/_react["default"].createElement(_Table.ExpandedDataListItem, {
        key: key
      }, "".concat(key, ": ").concat(row[key]));
    }));
  };
  var toggleSelect = function toggleSelect(rowIndex) {
    var selectedRowsCopy = _toConsumableArray(selectedRows);
    if (selectedRowsCopy.includes(rowIndex)) {
      selectedRowsCopy.splice(selectedRowsCopy.indexOf(rowIndex), 1);
    } else {
      selectedRowsCopy.push(rowIndex);
    }
    setSelectedRows(selectedRowsCopy);
  };
  var toggleSelectAll = function toggleSelectAll() {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      var allRowIndexes = rows.map(function (_, index) {
        return index;
      });
      setSelectedRows(allRowIndexes);
    }
    setSelectAll(!selectAll);
  };
  var handleRecordsPerPageChange = function handleRecordsPerPageChange(e) {
    setRecordsPerPage(Number(e.target.value));
  };
  var handleColumnSort = function handleColumnSort(columnKey) {
    if (columnKey === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };
  var handleSearchFilterChange = function handleSearchFilterChange(columnKey, value) {
    setSearchFilters(function (prevFilters) {
      return _objectSpread(_objectSpread({}, prevFilters), {}, _defineProperty({}, columnKey, value));
    });
  };
  var filterRows = function filterRows() {
    return rows.filter(function (row) {
      for (var _i2 = 0, _Object$entries = Object.entries(searchFilters); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          columnKey = _Object$entries$_i[0],
          filterValue = _Object$entries$_i[1];
        var cellValue = row[columnKey] || "";
        if (!cellValue.toString().toLowerCase().includes(filterValue.toLowerCase())) {
          return false;
        }
      }
      return true;
    });
  };
  var sortedRows = filterRows().sort(function (a, b) {
    var aValue = a[sortColumn] || "";
    var bValue = b[sortColumn] || "";
    if (aValue === bValue) {
      return 0;
    }
    if (sortDirection === "asc") {
      return aValue < bValue ? -1 : 1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  });
  var totalPages = Math.ceil(sortedRows.length / recordsPerPage);
  var _useState19 = (0, _react.useState)(1),
    _useState20 = _slicedToArray(_useState19, 2),
    currentPage = _useState20[0],
    setCurrentPage = _useState20[1];
  var handlePageChange = function handlePageChange(page) {
    setCurrentPage(page);
  };
  var paginatedRows = sortedRows.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);
  var handleCheckboxChange = function handleCheckboxChange(event, rowKey) {
    debugger;
    var checked = event.target.checked;
    debugger;
    var updatedSelectedRowKeys = _toConsumableArray(selectedRowKeys);
    debugger;
    if (checked) {
      debugger;
      updatedSelectedRowKeys.push(rowKey);
    } else {
      var index = updatedSelectedRowKeys.indexOf(rowKey);
      debugger;
      if (index !== -1) {
        debugger;
        updatedSelectedRowKeys.splice(index, 1);
      }
    }
    debugger;
    setSelectedRowKeys(updatedSelectedRowKeys);
    var updatedSelectedRowObjects = rows.filter(function (row) {
      return updatedSelectedRowKeys.includes(row.key);
    });
    debugger;
    rowSelection.onChange(updatedSelectedRowKeys, updatedSelectedRowObjects);
  };
  var onSelectChange = function onSelectChange(newSelectedRowKeys, newSelectedRowObjects) {
    debugger;
    console.log("selectedRowKeys changed: ", newSelectedRowObjects);
    debugger;
    setSelectedRowKeys(newSelectedRowKeys);
    rowSelection.onChange(newSelectedRowKeys, newSelectedRowObjects);
  };
  return /*#__PURE__*/_react["default"].createElement(_Table.Container, null, /*#__PURE__*/_react["default"].createElement(_Table.TableWrapper, null, /*#__PURE__*/_react["default"].createElement(_Table.ResponsiveTable, null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    style: _Table.TheadStyle
  }, /*#__PURE__*/_react["default"].createElement("th", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox"
    // checked={selectAll}
    // onChange={toggleSelectAll}
    ,
    checked: selectedRowKeys.length === rows.length,
    onChange: function onChange(event) {
      return onSelectChange(event.target.checked ? rows.map(function (row) {
        return row.key;
      }) : [], event.target.checked ? rows : []);
    }
  })), /*#__PURE__*/_react["default"].createElement("th", null, "Expand"), visibleColumns.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: column.key,
      onClick: function onClick() {
        return handleColumnSort(column.key);
      }
    }, column.title, sortColumn === column.key && /*#__PURE__*/_react["default"].createElement("span", null, sortDirection === "asc" ? "▲" : "▼"));
  })), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null), /*#__PURE__*/_react["default"].createElement("th", null), visibleColumns.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: column.key,
      style: {
        flex: "1"
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: "flex"
      }
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      placeholder: column.title,
      value: searchFilters[column.key] || "",
      onChange: function onChange(e) {
        return handleSearchFilterChange(column.key, e.target.value);
      },
      style: {
        width: "100%",
        boxSizing: "border-box"
      }
    })));
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, paginatedRows.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: rowIndex
    }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
      type: "checkbox"
      // onChange={() => toggleSelect(rowIndex)}
      // checked={selectedRowKeys.includes(rowIndex.key)}
      ,
      onChange: function onChange(event) {
        return handleCheckboxChange(event, row);
      }
    })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_Table.ExpandButton, {
      onClick: function onClick() {
        return toggleExpand(rowIndex);
      }
    }, isRowExpanded(rowIndex) ? "Collapse" : "Expand")), visibleColumns.map(function (column, cellIndex) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: cellIndex
      }, row[column.dataIndex]);
    })), isRowExpanded(rowIndex) && /*#__PURE__*/_react["default"].createElement(_Table.ExpandedRow, null, /*#__PURE__*/_react["default"].createElement("td", {
      colSpan: visibleColumns.length + 2
    }, /*#__PURE__*/_react["default"].createElement(_Table.ExpandedDataGrid, null, renderExpandedData(row)))));
  })))), "Records per page:", /*#__PURE__*/_react["default"].createElement("select", {
    value: recordsPerPage,
    onChange: function onChange(e) {
      return handleRecordsPerPageChange(e);
    }
  }, recordsPerPageOption.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option,
      value: option
    }, option);
  })), /*#__PURE__*/_react["default"].createElement("button", {
    disabled: currentPage === 1,
    onClick: function onClick() {
      return handlePageChange(currentPage - 1);
    }
  }, "Previous"), /*#__PURE__*/_react["default"].createElement("span", null, "Page ", currentPage, " of ", totalPages), /*#__PURE__*/_react["default"].createElement("button", {
    disabled: currentPage === totalPages,
    onClick: function onClick() {
      return handlePageChange(currentPage + 1);
    }
  }, "Next"));
};
exports.Table = Table;