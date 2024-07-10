import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a`
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;
    transition: .2s;
    color: ${theme.colors.font};

    &:hover {
        color: ${theme.colors.accent};
    }
`;
