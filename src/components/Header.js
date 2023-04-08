import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="">Model S</a>
                <a href="">Model Y</a>
                <a href="">Model 3</a>
                <a href="">Model X</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => {
                    setBurgerStatus(true);
                }}>
                    <FontAwesomeIcon icon={faBars} />
                </CustomMenu>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CustomClose onClick={() => {
                    setBurgerStatus(false);
                }}>
                    <FontAwesomeIcon icon={faX} />
                </CustomClose>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Use Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertrucks</a></li>
                <li><a href="#">Roadster</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    z-index:1; 
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding:0 20px;
    justify-content:space-between;
    top:0;
    left:0;
    right:0;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:no-wrap;
    }
    @media (max-width:768px){
        display:none; 
    }

`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:10px; 
    }
`

const CustomMenu = styled.div`
    cursor:pointer;
`


const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    padding-left:40px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transition:transform 300ms ease-in-out;
    transform : ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
    li{
      padding:18px 0;
      border-bottom:1px solid rgba(0,0,0,0.2);
      font-size:0.9rem;  
    }
    a{
        font-weight:600;
        text-transform:uppercase;
    }
`



const CustomClose = styled.div`
    cursor:pointer;
    display:flex;
    justify-content:flex-end;
`