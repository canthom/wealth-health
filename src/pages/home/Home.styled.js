import styled from 'styled-components';

const StyledHome = styled.main`
  padding-bottom: 5rem;
  h2 {
    font-size: 10rem;
  }

  form {
    font-size: 1.5rem;

    div.form__wrapper,
    div.select {
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
    }

    label {
      margin-right: 10px;
      flex: 1;
    }

    div.form__wrapper:nth-of-type(3),
    div.form__wrapper:nth-of-type(4) {
      div:nth-of-type(1) {
        flex: 2;
      }

      div:nth-of-type(2) {
        flex: 0;
      }
    }

    input,
    select {
      border-radius: 3px;
      padding: 1rem;
      font-size: 1.5rem;
    }

    input {
      background-color: #e6eded;
      border: none;
      margin-left: 1rem;
    }

    fieldset {
      padding-top: 2rem;
      margin-bottom: 2rem;
    }

    select {
      padding: 1rem;
      background-color: #e6eded;
      cursor: pointer;
      width: 100%;
      appearance: none;
    }

    .select {
      position: relative;

      &::after {
        content: '▼';
        font-size: 1.25rem;
        top: 20px;
        right: 20px;
        position: absolute;
      }
    }

    .form__btn {
      padding: 1rem;
      border-radius: 30px;
      border: none;
      width: 10rem;
      font-size: 1.5rem;
      background-color: #042825;
      color: white;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s;
      margin-left: auto;

      span {
        padding: 0 1rem;
      }

      span:last-of-type {
        opacity: 0.6;
      }

      &:hover {
        background-color: rgba(4, 40, 37, 0.75);
      }
    }

    .react-datepicker__day--outside-month {
      color: grey;
    }
  }
`;

export default StyledHome;
