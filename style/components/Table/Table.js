import styled from 'styled-components';

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
  'background-color': '#2991D6',
  'color':'#fff',
  'width':'10%',
}
export const Pagination = styled.div`
`;
export const RecordsPerPage = styled.div`
`;