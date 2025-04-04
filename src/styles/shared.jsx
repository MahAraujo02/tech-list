import styled, { css } from "styled-components";


export const flex =`
    display: flex;
    flex-direction: column;
`;

const flexRow =`
   display: flex;
    flex-direction: row;
`

export const ContainerForm = styled.div`
  ${flex}
  gap: 20px;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_4};
`;
export const AlignForm = styled.div`
  ${flex}
  border-radius: 4px;
  width: 369px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_3};
  padding: 2rem 0 2rem 0;
  h2 {

    font-size: ${({ theme }) => theme.sizes.text_0};
    color: ${({ theme }) => theme.colors.gray_0};
  }
  .title_and_span {
    ${flex}
    gap: 20px;
    align-items: center;
    span {
      font-size: ${({ theme }) => theme.sizes.text_small};
      color: ${({ theme }) => theme.colors.gray_1};
    }
  }
  
`
export const Logo = styled.div`
    ${
      ({divLogoStyle}) => {
        if(divLogoStyle === 'style1'){
          return css`
            width:369px;
            ${flexRow}
            justify-content: space-between;
          `
        }
        if(divLogoStyle === 'style2'){
          return css`
            width:100%;
            ${flexRow}
            justify-content: space-around;
          `
        }
      }
    }

`
