import styled from "styled-components";

export const Button = styled.button`
    padding: 0.625rem 0.625rem;
    color: ${({ theme }) => theme.colors.gray_0};
    background-color: ${({theme,backgroundColor}) => theme.colors[backgroundColor]};
    width: 19.9375rem;
    border: 0.0625rem solid transparent   ;
    border-radius: 0.25rem;
`
export const ButtonMedium = styled.button`
    width: 4.25rem;
    height: 2.5rem;
    border: transparent;
    color: ${({ theme }) => theme.colors.gray_0};
    background-color: ${({theme}) => theme.colors.gray_3};
    border-radius: 0.25rem;
    font-size: ${({ theme }) => theme.sizes.text_small};
    font-weight: 600;

`