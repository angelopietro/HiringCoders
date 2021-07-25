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
  background: #F5F5F5;
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  input,
  button {
    border-radius: 0.4rem;
  }
  input {
    width: 100%;
    border: #DDD 1px solid;
    &::placeholder {
      color: #999;
    }
  }
  button {
    cursor: pointer;
  }
  h1 {
    font-size: 2rem; /* 32px */
    font-weight: 600;
    color: #444;
  }
  h2 {
    font-size: 1.5rem; /* 24px */
    font-weight: 600;
    color: #444;
  }
  h3 {
    font-size: 1.17rem; /* 18.72px */
    font-weight: 600;
    color: #444;
  }
  h4 {
    font-size: 1rem; /* 16px */
    font-weight: 600;
    color: #444;
  }
  h5 {
    font-size: 0.87rem; /* 14px */
    font-weight: 600;
    color: #444;
  }
  h6 {
    font-size: 0.67rem; /* 10.72px */
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
      & tr:hover {
        border-bottom: 1px solid #999;
      }
      td {
        padding: 15px 10px 15px 0;
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
