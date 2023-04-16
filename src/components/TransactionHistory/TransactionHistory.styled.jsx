import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";

export const Table = styled.table`
    position: absolute;
    left: 35%;
    width: 700px;
    margin-right: auto;
    margin-left: auto;
    font-size: 22px;
    background-color: rgb(222, 213, 217);
    border-radius: 10px;
    border: 2px solid ${p => p.theme.colors.black};
`;

export const TableHead = styled.th`
    padding: 20px;
    color: ${p => p.theme.colors.white};
    background-color: rgb(105,105,105) ;
    /* border: 2px solid ${p => p.theme.colors.black}; */
    border-radius: 10px;
`;

export const TableBody = styled.td`
    padding: 10px;
    background-color: ${p => {
        switch (p.type) {
            case "invoice":
                return "rgb(216, 191, 216)";
            case "payment":
                return "rgb(250, 128, 114)";
            case "withdrawal":
                return "rgb(224, 255, 255)";
            case "deposit":
                return "rgb(152, 251, 152)"
            default:
                throw new Error(`Unknown error of ${type}`);
        }
    }};
    border-radius: 10px;
`;

