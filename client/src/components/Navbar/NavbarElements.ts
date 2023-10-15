import { motion } from "framer-motion";
import styled from "styled-components";

export const NavbarBox = styled.nav`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    gap: 2rem;

    @media (min-width: 900px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
   
    
`;
export const NavbarContent = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 2rem;
`;
export const NavbarTitle = styled.h1`
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colors?.title};
`;
export const NavbarImg = styled.img`
    width: 4rem;
`;

export const ButtonsBox = styled(NavbarContent)``;
export const ButtonTheme = styled(motion.button)`
    font-size: 3rem;
    background-color: var(--green);
    padding: 1rem;
    border-radius: .6rem;
   
`;
export const ButtonText = styled.p`
    display: flex;
    align-items: center;
    gap: .8rem;
    font-weight: 700;
`;
export const BarbieButton = styled(motion.button)`
    padding: 1rem;
    font-size: 2.5rem;
    border-radius: 0.6rem;
    background-color: var(--pink-xl);
    font-family: "Barbie";
    color: var(--white-p);
`;
