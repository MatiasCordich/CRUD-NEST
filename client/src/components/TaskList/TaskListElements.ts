import styled from "styled-components";

export const TaskListBox = styled.div`
    margin-top: 5rem;
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

export const NoTasksMessage = styled.p`
    font-weight: 700;
`
