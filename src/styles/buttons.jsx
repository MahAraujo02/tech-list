import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 10px;
    color: ${({ theme }) => theme.colors.gray_0};
    background-color: ${({theme,backgroundColor}) => theme.colors[backgroundColor]};
    width: 319px;
    border: 1px solid transparent   ;
    border-radius: 4px;
`