import styled from "styled-components";

export const Container = styled.section`
    margin-bottom: 25px;
    padding: 15px 0;
    font-size: 18px;

    background-color: rgb(222, 213, 217);
    border-radius: 10px;
`;

export const TitleStats = styled.h2`
background-color: rgb(222, 213, 217);
margin-bottom: 15px;
`;

// const changeBgc = ();
    
export const StatsList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    font-weight: 600; 
`;

export const StatsListItem = styled.li`
        display: flex;
        flex-direction: column;
        flex-basis: calc((100%-5px) / 5);
        width: 100%;
        padding: 15px 0;
        background-color: ${p => {
            switch (p.number) {
            case "id-1":
                return "rgb(250, 128, 114)";
            case "id-2":
            return "rgb(32, 178, 170)";
            case "id-3":
                return "rgb(70, 130, 180)";
            case "id-4":
            return "rgb(218, 165, 32)";
            case "id-5":
            return "rgb(238, 130, 238)";
            default:
                throw new Error(`Unknown error of ${p.number}`);
            }
        }
        };

        border-radius: 10px;

        span:first-child{
            margin-bottom: 10px;
        }        
`;