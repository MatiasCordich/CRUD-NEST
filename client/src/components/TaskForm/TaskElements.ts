import styled from "styled-components";

export const TaskFormBox = styled.form`
    min-width: 30rem;
    max-width: 70rem;
    width: 95%;
    background-color: ${({theme}) => theme.colors?.backgroundBox};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 2rem;
    border-radius: 0.6rem;
    border: 1px solid ${({theme}) => theme.colors?.line};
`
export const TaskTitle = styled.h2`
    font-size: 4rem;
`

export const TaskLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 90%;
    color: ${({ theme }) => theme.colors?.label};
    text-transform: uppercase;
    font-weight: 700;
`
export const TaskLabelChecbox = styled.label`
    display: flex;
    color: ${({ theme }) => theme.colors?.label};
    justify-content: flex-start;
    width: 90%;
    gap: 1rem;
    text-transform: uppercase;
    font-weight: 700;
`

export const TaskInputs = styled.input`
`

export const TaskCheckbox = styled.input.attrs({type: 'checkbox'})`
`

export const TaskArea = styled.textarea`
    height: 15rem;
`
export const ButtonSave = styled.button`
    background-color:  ${({ theme }) => theme.colors?.buttonBackground};
    color:  ${({ theme }) => theme.colors?.buttonText};
    padding: 2rem 9rem;
    border-radius: 0.4rem;
    font-size: 2rem;
`