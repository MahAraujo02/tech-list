import styled from "styled-components";

export const DivList = styled.div`
  width: 100%;
  height: fit-content;
  border: transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray_3};
  display: flex;
  box-sizing: border-box;
  padding: 34px 0  ;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

export const ListContainer = styled.div`
    display:flex ;
    width: 100%;
    margin: 50px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
   
`

export const ListAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:62%;
  gap: 25px;

  .title_and_button {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   h3{
    font-size: ${({ theme }) => theme.sizes.text_0};
    color: ${({ theme }) => theme.colors.gray_0};
    font-weight: 600;
   }

  }
`;
