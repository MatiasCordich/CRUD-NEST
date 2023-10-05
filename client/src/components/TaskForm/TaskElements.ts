import styled from "styled-components";

export const TaskFormBox = styled.form`
    min-width: 30rem;
    max-width: 70rem;
    width: 95%;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 2rem;
    border-radius: 0.6rem;
`
export const TaskTitle = styled.h2`
    color: var(--green);
    font-size: 4rem;
`

export const TaskLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 90%;
    color: var(--black);
    text-transform: uppercase;
    font-weight: 700;
`
export const TaskLabelChecbox = styled.label`
    display: flex;
    justify-content: flex-start;
    width: 90%;
    gap: 1rem;
    text-transform: uppercase;
    font-weight: 700;
`

export const TaskInputs = styled.input`
`

export const TaskCheckbox = styled.input.attrs({type: 'checkbox'})`
    background-color:rebeccapurple;
`

export const TaskArea = styled.textarea`
    height: 15rem;
`
export const ButtonSave = styled.button`
    background-color: var(--green);
    padding: 2rem 9rem;
    border-radius: 0.4rem;
    font-size: 2rem;
`