import styled from 'styled-components';
import filter from '../../../src/libs/filter.png'
export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const ResponsiveTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
  }
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #007bff;
`;

export const Container = styled.div`
  max-width: 100%;
  padding: 20px;
`;

export const ExpandedRow = styled.tr`
  td {
    padding: 8px;
    border: 1px solid #ccc;
    background-color: #f7f7f7;
  }
`;
export const ExpandedDataList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ExpandedDataListItem = styled.li`
  margin-bottom: 10px;
  font-size:14px;
`;

export const ExpandedDataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const ExpandedDataGridChunk = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const ExpandedDataItem = styled.div`
  padding: 5px;
  background-color: #f0f0f0;
`;
export const TheadStyle = {
  'backgroundColor': '#2991D6',
  'color':'#fff',
  'width':'10%',
}
export const Pagination = styled.div`
`;
export const RecordsPerPage = styled.div`
`;
export const RadioContainer = styled.div`
  display: flex;
`;

export const RadioButton = styled.button`
  padding: 4px 8px;
  background-color: ${({ active }) => (active ? "#2991d6" : "transparent")};
  color: ${({ active }) => (active ? "white" : "black")};
  border: 1px solid #ccc;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  /* &:not(:last-child) {
    margin-right: 4px;
  } */
`;
export const ButtonContainer = styled.div`
  display: flex;
`;

export const ImageButton = styled.button`
  flex: 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
export const ImageButtonSection = styled.input`
  background-image: url(${filter}); /* 16px x 16px */
  background-color: transparent; /* make the button transparent */
  background-repeat: no-repeat; /* make the background image appear only once */
  background-position: 0px 0px; /* equivalent to 'top left' */
  border: none; /* assuming we don't want any borders */
  cursor: pointer; /* make the cursor like hovering over an <a> element */
  height: 16px; /* make this the size of your image */
  padding-left: 16px; /* make text start to the right of the image */
  vertical-align: middle; /* align the text vertically centered */
`;
export const IconButton = styled.div`
  border: 1px solid #d8d8d8;
  float: right;
  /* margin: 7px 7px 7px 0px; */
  padding: 5px 3px;
`;