import styled from 'styled-components';

export const ContainerTable = styled.div`
  margin-top: 3rem;
  border: solid 1px #DDD;
  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: #666;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td{
      padding: 1rem 2rem;
      border: 0;
      background: #FFF;
      color: #1C1C1C;
      border-radius: 0.25rem;
    }
}`;

export const SectionHeader = styled.div`
  width: 100%;
  height: 64px;
  margin: 30px auto 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
