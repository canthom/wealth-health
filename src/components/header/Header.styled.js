import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  nav {
    display: flex;
    font-size: 1.25rem;

    a {
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
      padding-bottom: 3px;
    }

    a:last-of-type {
      margin-left: 3rem;
    }

    a:hover {
      border-bottom: 2px solid black;
    }
  }

  .active {
    border-bottom: 2px solid black;
  }
`;

export default StyledHeader;
