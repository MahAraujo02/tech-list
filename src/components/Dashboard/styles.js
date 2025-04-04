import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 72px;
    display:flex ;
    align-items: center;
    border-bottom: 2px solid ${({theme})=> theme.colors.gray_2};
`
export const NameAndModule=styled.div`
   display: flex;
   justify-content: space-around;
   flex-direction: row;
   width: 100%;

   h1{
    color: ${({theme})=> theme.colors.gray_0};
    font-size:  ${({theme})=> theme.sizes.text_0};
    font-weight: 700;
   }
   span {
      font-size: ${({ theme }) => theme.sizes.text_small};
      color: ${({ theme }) => theme.colors.gray_1};
    }

`
export const AlignNameAndModule =styled.div`
     width: 100%;
     height: 118px;
     display: flex;
     align-items: center;
     border-bottom: 2px solid ${({theme})=> theme.colors.gray_2};
`
export const Main = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`