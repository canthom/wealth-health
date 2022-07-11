import styled from 'styled-components';

const StyledEmployeeList = styled.main`
  padding-bottom: 5rem;
  h2 {
    font-size: 10rem;
  }

  div.search-container {
    display: flex;

    label {
      margin-right: 0.5rem;
      font-weight: 700;
    }
  }

  table {
    width: 100%;
    padding: 2rem;
    height: 100%;
  }

  th {
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    color: grey;
    text-transform: uppercase;
    font-size: 14px;
  }

  tr {
    border-bottom: 5px solid rgba(0, 0, 0, 0.3);
    font-size: 18px;
  }
`;

export default StyledEmployeeList;
