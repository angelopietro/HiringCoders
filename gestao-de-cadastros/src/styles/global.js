import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-family: "Roboto", Arial, helvetica, sans-serif;
}
*:focus {
  outline: 0;
}
html,
body,
#root {
  height: 100%;
  padding-top: 10px;
  background: #F5F5F5;
  a {
    text-decoration: none;
  }

  input,
  button {
    border-radius: 0.4rem;
  }
  button {
    cursor: pointer;
  }
  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #444;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #444;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    color: #666;
    thead {
      font-weight: bold;
      text-transform: uppercase;
      td {
        padding: 0 10px 0 0;
      }
    }
    tbody {
      & tr + tr {
        border-top: 1px solid #EEE;
      }

      td {
        padding: 1rem 2rem;
        & a + a {
          margin-left: 10px;
        }
      & div {
          display: flex;
          justify-content: space-between;
          a {
            margin: 0 20px;
          }
        }
        & :last-child {
          display: flex;
          justify-content: flex-end;
          font-size: 15px;
        }
      }
    }
  }
}
`;
