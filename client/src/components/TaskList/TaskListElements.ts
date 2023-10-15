import { motion } from "framer-motion";
import styled from "styled-components";

export const TaskListBox = styled(motion.div)`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
    gap: 2rem;
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 2rem;
    }
    
`;

export const NoTasksMessage = styled(motion.p)`
    font-weight: 700;
`
