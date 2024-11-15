import { useState } from "react"
import styled from 'styled-components';

const StyledHamburger = styled.div`
    width: 2rem;
    height: 23px;
    position: fixed;
    right: 1rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
        width: 23px;
        height: 1px;
        background-color: ${({ open }) => open ? '#fa5f4a' : '#fa5f4a'};
        border-radius: 1px;
        transform-origin: 1px;
        transition: all .2s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
`;

export default function HamburgerIcon() {
    const [open, setOpen] = useState(false);

    return (
        <StyledHamburger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledHamburger>
    )
}