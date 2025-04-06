import styled, {css} from "styled-components";

export const DivList = styled.div`
  width: 100%;
  height: 424px;
  border: transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray_3};
  display: flex;
  box-sizing: border-box;
  padding: 34px 0  ;

  ${
      ({divListStyle}) => {
        if(divListStyle === 'style1'){
          return css`
            display: flex;
            justify-content: center;
            align-items: center;

            p{
              color: ${({ theme }) => theme.colors.gray_0};
              font-size: large;

            }
          `
        }
      }
    }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  overflow-y: scroll;


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

    .buttonStyle{
      color: ${({ theme }) => theme.colors.gray_0};
      background-color: ${({ theme }) => theme.colors.gray_3};
      padding: 8px;
      border: transparent;
      border-radius: 4px;
      cursor: pointer;

    }

   h3{
    font-size: ${({ theme }) => theme.sizes.text_0};
    color: ${({ theme }) => theme.colors.gray_0};
    font-weight: 600;
   }

  }
`;
