import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  background-color: #FFF;
  max-width: 1440px;
  height: 64px;
  border: solid 1px #DDD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      max-height: 100px;
      margin-left: 3em;
    }
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      margin: 20px 0;
      & li {
        margin-right: 30px;
      }
    }
  }

  a {
    display: block;
    margin-top: 0.125rem;
    font-size: 0.825rem;
    color: #999;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    position: relative;
  }
  a:hover,
  .active {
    color: #444;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 32px;
  background: #DDD;
  margin: 0px 45px;
`;
