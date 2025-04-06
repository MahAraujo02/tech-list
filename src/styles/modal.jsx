import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_3};
  width: 369px;
  height: 300px;
  border: transparent;
  border-radius: 4px;
`;

export const AlignTitleAndButton = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_2};
  width: 100%;

`

export const TitleAndButtonContainer = styled.div`
  width: 319px;
  display: flex;
  justify-content: space-between;
 
  h3 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizes.text_base1};
    color: ${({ theme }) => theme.colors.gray_0};
  }
  .close{
    color:${({ theme }) => theme.colors.gray_1} ;
    cursor: pointer;
  }
`;
export const TitleAndButton = ({ children }) => (
  <TitleAndButtonContainer>
    {children}
  </TitleAndButtonContainer>
);
