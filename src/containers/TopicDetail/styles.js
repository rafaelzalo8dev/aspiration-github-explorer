import styled from 'styled-components';

export const TopicItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: solid #ededed 2px;
  padding: 10px 0;
  margin-top: 10px;
  &:hover {
    background-color: aliceblue;
  }
`;

export const HeaderTable = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: solid #000 2px;
  padding: 10px 0;
  margin-top: 10px;
`;

export const ValueItem = styled.div`
  width: 50%;
  text-align: center;
`;

export const HeaderItem = styled.div`
  width: 50%;
  font-weight: bold;
  text-align: center;
`;

export const SectionTitle = styled.div`
  width: 100%;
  margin: 20px 0;
  font-size: 40px;
  font-weight: bold;
`;