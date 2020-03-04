import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .title {
    color: #ccc;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input {
    margin: 0.5rem 0;
    padding: 0.6rem;
    width: 20rem;
    border: none;
    outline: none;
    font-size: 1rem;
    background: #252934;
    color: #ccc;

    ::placeholder {
      color: #ccc;
    }
  }

  .submit-button {
    border: 2px solid #fff;
    box-sizing: inherit;
    background: transparent;
    cursor: pointer;
    font-size: 1rem;
    padding: 10px 20px;
    transition: all 0.5s;
    color: #ccc;
    text-transform: uppercase;
    margin-top: 0.5rem;

    &:hover {
      background: #e05cca;
      border: 2px solid #e05cca;
      transition: all 0.5s;
    }
  }
`;
