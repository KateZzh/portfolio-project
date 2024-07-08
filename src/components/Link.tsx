import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a`
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;

    &:hover {
        color: ${theme.colors.accent};
    }
`;
