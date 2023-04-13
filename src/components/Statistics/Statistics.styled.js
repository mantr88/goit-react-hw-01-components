import styled from "styled-components";

export const Container = styled.section`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 25px;
    max-width: 515px;
    background-color: #fff;
    text-align: center;
    font-size: 18px;

    border: 2px solid;
`;

export const TitleStats = styled.h2`
    background-color: #fff;
`;
// const changeBgc = (({key}) => {
//     switch (key) {
//     case "id-1":
//         return "red";
//     case "id-2":
//        return "green";
//     case "id-3":
//         return "blue";
//     case "id-4":
//        return "yellow";
//     case "id-5":
//        return "violet";
//     default:
//         throw new Error(`Unknown badge type ${key}`);;
// }});
    
export const StatsList = styled.ul`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 3px;
    font-weight: 600;

    li{
        display: flex;
        flex-direction: column;
        min-width: 100px;
        padding: 15px 0;
        /* background-color: ; */

        border: 2px solid;

        span:first-child{
            margin-bottom: 10px;
        }        
    }
`;