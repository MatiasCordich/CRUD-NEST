import styled from "styled-components";

export const TaskBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 50rem;
    width: 95%;
    background-color: ${({theme}) => theme.colors?.backgroundBox};
    border-radius: 0.4rem;
    padding: 1rem;
`
export const TaskTitle = styled.h1`
    color: var(--green);
    font-weight: 800;
`
export const TaskDescription = styled.p`
    font-weight: 600;
`
export const TaskDoneText = styled(TaskDescription)`
    display: flex;
    align-items: center;
    gap: .7rem;
    color: #1F8A70;
    font-weight: 800;
`

export const TaskUndoneText = styled(TaskDoneText)`
    color: #DF2E38;
`

export const TaskButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`

export const TaskButtonUpdate = styled.button`
    background-color: #068FFF;
    padding: 1rem 2rem;
    color: var(--white);
    border-radius: 0.3rem;
`

export const TaskButtonDelete = styled(TaskButtonUpdate)`
    background-color: #E21818;
`