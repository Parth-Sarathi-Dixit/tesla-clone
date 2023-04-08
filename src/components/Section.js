import React from 'react'
import styled from 'styled-components'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index:10;
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image : ${props => `url('/images/${props.bgImage}')`};
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;

`


const ItemText = styled.div`
    padding-top:15vh;
`


const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`


const LeftButton = styled.div`
    ${'' /* border:2px solid black; */}
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    margin:8px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.75;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
`

const RightButton = styled(LeftButton)`
    background-color:white;
    opacity:0.7;
    color:rgba(23,26,32,0.8);
`


const DownArrow = styled.img`
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`


const Buttons = styled.div`   
`