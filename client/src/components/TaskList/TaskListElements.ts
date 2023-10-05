import styled from "styled-components";

export const TaskListBox = styled.div`
    border: 1px solid red;
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 2rem;
    }
    
`;
