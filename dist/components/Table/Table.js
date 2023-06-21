"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Table = require("../../../style/components/Table/Table");
var _zoom = _interopRequireDefault(require("../../libs/zoom.png"));
var _viewHover = _interopRequireDefault(require("../../libs/icons/view-hover.svg"));
var _expandRowIcon = _interopRequireDefault(require("../../libs/icons/expand-row-icon.svg"));
var _collapseIn = _interopRequireDefault(require("../../libs/icons/collapse-in.svg"));
var _collapseOn = _interopRequireDefault(require("../../libs/icons/collapse-on.svg"));
var _filterAction = _interopRequireDefault(require("../../libs/icons/filter-action.svg"));
var _refresh = _interopRequireDefault(require("../../libs/icons/refresh.svg"));
var _edit = _interopRequireDefault(require("../../libs/icons/edit.svg"));
var _delete = _interopRequireDefault(require("../../libs/icons/delete.svg"));
var _range = _interopRequireDefault(require("../../libs/icons/range.svg"));
var _sorting = _interopRequireDefault(require("../../libs/icons/sorting.svg"));
var _manageCol = _interopRequireDefault(require("../../libs/icons/manage-col.svg"));
var _allActionsIcon = _interopRequireDefault(require("../../libs/icons/all-actions-icon.svg"));
var _arrowLeft = _interopRequireDefault(require("../../libs/icons/arrow-left.svg"));
var _arrowRight = _interopRequireDefault(require("../../libs/icons/arrow-right.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
  var _useState5 = (0, _react.useState)(recordsPerPageOption[0]),
    _useState6 = _slicedToArray(_useState5, 2),
    recordsPerPage = _useState6[0],
    setRecordsPerPage = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    sortColumn = _useState8[0],
    setSortColumn = _useState8[1];
  var _useState9 = (0, _react.useState)("asc"),
    _useState10 = _slicedToArray(_useState9, 2),
    sortDirection = _useState10[0],
    setSortDirection = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    searchFilters = _useState12[0],
    setSearchFilters = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedRowKeys = _useState14[0],
    setSelectedRowKeys = _useState14[1];
  var _useState15 = (0, _react.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    searchQuery = _useState16[0],
    setSearchQuery = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    radioValue = _useState18[0],
    setRadioValue = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isFiltered = _useState20[0],
    setIsFiltered = _useState20[1];
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
      var tableWidth = window.innerWidth - 200;
      var totalWidth = 0;
      var visibleCols = [];
      for (var i = 0; i < columns.length; i++) {
        var colWidth = columns[i].width || 100;
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
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          color: '#2991D6'
        }
      }, "".concat(key)), " : \xA0\xA0", "".concat(row[key]));
    }));
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
  var _useState21 = (0, _react.useState)(1),
    _useState22 = _slicedToArray(_useState21, 2),
    currentPage = _useState22[0],
    setCurrentPage = _useState22[1];
  var handlePageChange = function handlePageChange(page) {
    setCurrentPage(page);
  };
  var paginatedRows = sortedRows.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);
  var handleCheckboxChange = function handleCheckboxChange(event, rowKey) {
    var checked = event.target.checked;
    var updatedSelectedRowKeys = _toConsumableArray(selectedRowKeys);
    if (checked) {
      updatedSelectedRowKeys.push(rowKey);
    } else {
      var index = updatedSelectedRowKeys.indexOf(rowKey);
      if (index !== -1) {
        updatedSelectedRowKeys.splice(index, 1);
      }
    }
    setSelectedRowKeys(updatedSelectedRowKeys);
    var updatedSelectedRowObjects = rows.filter(function (row) {
      return updatedSelectedRowKeys.includes(row.key);
    });
    rowSelection.onChange(updatedSelectedRowKeys, updatedSelectedRowObjects);
  };
  var onSelectChange = function onSelectChange(newSelectedRowKeys, newSelectedRowObjects) {
    console.log("selectedRowKeys changed: ", newSelectedRowObjects);
    setSelectedRowKeys(newSelectedRowKeys);
    rowSelection.onChange(newSelectedRowKeys, newSelectedRowObjects);
  };
  var handleRadioClick = function handleRadioClick(value) {
    setRadioValue(value);
    console.log(value);
  };
  var iconData = [{
    image: _allActionsIcon["default"],
    alt: "Icon 8"
  }, {
    image: _manageCol["default"],
    alt: "Icon 7"
  }, {
    image: _sorting["default"],
    alt: "Icon 6"
  }, {
    image: _range["default"],
    alt: "Icon 5"
  }, {
    image: _delete["default"],
    alt: "Icon 4"
  }, {
    image: _edit["default"],
    alt: "Icon 3"
  }, {
    image: _refresh["default"],
    alt: "Icon 2"
  }, {
    image: _filterAction["default"],
    alt: "Icon 1"
  }
  // Add more icon objects as needed
  ];

  var _handleClickFilters = function _handleClickFilters(obj, index) {
    switch (obj.alt) {
      case "Icon 1":
        setIsFiltered(!isFiltered);
        break;
      default:
        break;
    }
  };
  var _handleChangePage = function _handleChangePage(val) {
    setCurrentPage(val);
  };
  var PaginationSection = function PaginationSection() {
    var _ref2, _ref3;
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: "flex",
        padding: "7px 0"
      }
    }, "Page:", /*#__PURE__*/_react["default"].createElement("img", {
      src: _arrowLeft["default"],
      alt: "prev"
      // style={{ width: "15%" }}
      ,
      style: (_ref2 = {
        padding: "0",
        color: "#000",
        border: "1px solid #D8D8D8"
      }, _defineProperty(_ref2, "color", "#120e5b"), _defineProperty(_ref2, "display", "inline-block"), _defineProperty(_ref2, "fontSize", "0"), _defineProperty(_ref2, "height", "20px"), _defineProperty(_ref2, "lineHeight", "18px"), _defineProperty(_ref2, "textAlign", "center"), _defineProperty(_ref2, "width", "20px"), _defineProperty(_ref2, "float", "left"), _defineProperty(_ref2, "margin", "0 5px"), _defineProperty(_ref2, "backgroundPosition", "center center"), _defineProperty(_ref2, "backgroundRepeat", "no-repeat"), _defineProperty(_ref2, "backgroundSize", "18px 18px"), _ref2),
      onClick: function onClick() {
        return handlePageChange(currentPage - 1);
      }
    }), /*#__PURE__*/_react["default"].createElement("input", {
      type: "number",
      style: {
        width: "60px",
        border: "1px solid #D8D8D8",
        padding: "0 20px 0 5px",
        height: "20px",
        verticalAlign: "top"
      },
      value: currentPage,
      onChange: function onChange(e) {
        return _handleChangePage(e.target.value);
      }
    }), /*#__PURE__*/_react["default"].createElement("img", {
      src: _arrowRight["default"],
      alt: "next",
      style: (_ref3 = {
        padding: "0",
        color: "#000",
        border: "1px solid #D8D8D8"
      }, _defineProperty(_ref3, "color", "#120e5b"), _defineProperty(_ref3, "display", "inline-block"), _defineProperty(_ref3, "fontSize", "0"), _defineProperty(_ref3, "height", "20px"), _defineProperty(_ref3, "lineHeight", "18px"), _defineProperty(_ref3, "textAlign", "center"), _defineProperty(_ref3, "width", "20px"), _defineProperty(_ref3, "float", "left"), _defineProperty(_ref3, "margin", "0 5px"), _defineProperty(_ref3, "backgroundPosition", "center center"), _defineProperty(_ref3, "backgroundRepeat", "no-repeat"), _defineProperty(_ref3, "backgroundSize", "18px 18px"), _ref3),
      onClick: function onClick() {
        return handlePageChange(currentPage + 1);
      }
    }), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        marginTop: "-.2rem"
      }
    }, "of ", totalPages, " \xA0 | View \xA0", /*#__PURE__*/_react["default"].createElement("select", {
      style: {
        border: "1px solid #D8D8D8"
      },
      value: recordsPerPage,
      onChange: function onChange(e) {
        return handleRecordsPerPageChange(e);
      }
    }, recordsPerPageOption.map(function (option) {
      return /*#__PURE__*/_react["default"].createElement("option", {
        key: option,
        value: option
      }, option);
    })), "\xA0 Records \xA0\xA0 | Total ", rows.length, " records"));
  };
  return /*#__PURE__*/_react["default"].createElement(_Table.Container, null, /*#__PURE__*/_react["default"].createElement(_Table.TableWrapper, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      "float": 'left'
    }
  }, /*#__PURE__*/_react["default"].createElement(PaginationSection, null)), iconData.map(function (icon, index) {
    return /*#__PURE__*/_react["default"].createElement(_Table.IconButton, {
      key: index,
      onClick: function onClick() {
        return _handleClickFilters(icon, index);
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      style: {
        display: "flex",
        border: 0,
        backgroundColor: "transparent",
        borderRight: "1px solid #D8D8D8",
        "float": "left",
        height: "28px",
        lineHeight: "28px",
        textAlign: "center",
        width: "28px",
        color: "#120E5B",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 14px",
        fontSize: 0
      },
      src: icon.image,
      alt: icon.alt
    }));
  }), /*#__PURE__*/_react["default"].createElement(_Table.ResponsiveTable, null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    style: _Table.TheadStyle
  }, /*#__PURE__*/_react["default"].createElement("th", null, /*#__PURE__*/_react["default"].createElement("input", {
    style: {
      width: '20px',
      height: '20px',
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    type: "checkbox",
    checked: selectedRowKeys.length === rows.length,
    onChange: function onChange(event) {
      return onSelectChange(event.target.checked ? rows.map(function (row) {
        return row.key;
      }) : [], event.target.checked ? rows : []);
    }
  })), /*#__PURE__*/_react["default"].createElement("th", null, /*#__PURE__*/_react["default"].createElement("img", {
    src: _viewHover["default"],
    alt: "zoom icon",
    style: {
      width: "20px",
      marginLeft: "20%"
    }
  })), /*#__PURE__*/_react["default"].createElement("th", null, /*#__PURE__*/_react["default"].createElement("img", {
    src: _expandRowIcon["default"],
    alt: "zoom icon",
    style: {
      width: "20px",
      marginLeft: "20%"
    }
  })), visibleColumns.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: column.key,
      onClick: function onClick() {
        return handleColumnSort(column.key);
      }
    }, column.title, sortColumn === column.key && /*#__PURE__*/_react["default"].createElement("span", null, sortDirection === "asc" ? "▲" : "▼"));
  })), isFiltered ? /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null), /*#__PURE__*/_react["default"].createElement("th", null), /*#__PURE__*/_react["default"].createElement("th", null), visibleColumns.map(function (column) {
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
  })) : null), /*#__PURE__*/_react["default"].createElement("tbody", null, paginatedRows.filter(function (row) {
    return Object.values(row).some(function (value) {
      return typeof value === "string" && value.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }).map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: rowIndex
    }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
      style: {
        width: '20px',
        height: '20px',
        display: 'inline-block',
        verticalAlign: 'middle'
      },
      type: "checkbox",
      onChange: function onChange(event) {
        return handleCheckboxChange(event, row);
      }
    })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: _zoom["default"],
      alt: "zoom icon",
      style: {
        width: "20px",
        marginLeft: "20%"
      }
    })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_Table.ExpandButton, {
      onClick: function onClick() {
        return toggleExpand(rowIndex);
      }
    }, isRowExpanded(rowIndex) ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", {
      src: _collapseOn["default"],
      alt: "zoom icon",
      style: {
        width: "12px",
        marginLeft: "5%"
      }
    })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", {
      src: _collapseIn["default"],
      alt: "zoom icon",
      style: {
        width: "15px",
        marginLeft: "5%"
      }
    })))), visibleColumns.map(function (column, cellIndex) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: cellIndex
      }, row[column.dataIndex]);
    })), isRowExpanded(rowIndex) && /*#__PURE__*/_react["default"].createElement(_Table.ExpandedRow, null, /*#__PURE__*/_react["default"].createElement("td", {
      colSpan: visibleColumns.length + 2
    }, /*#__PURE__*/_react["default"].createElement(_Table.ExpandedDataGrid, null, renderExpandedData(row)))));
  })))), /*#__PURE__*/_react["default"].createElement(PaginationSection, null));
};
exports.Table = Table;