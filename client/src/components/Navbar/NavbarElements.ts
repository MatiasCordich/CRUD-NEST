import styled from "styled-components";

export const NavbarBox = styled.nav`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
`;
export const NavbarContent = styled.div`
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

export const ButtonsBox = styled(NavbarContent)``
export const ButtonTheme = styled.button`
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
export const BarbieButton = styled(ButtonTheme)`
    background-color: var(--pink-xl);
    font-family: "Barbie";
    color: var(--white-p);
`;
