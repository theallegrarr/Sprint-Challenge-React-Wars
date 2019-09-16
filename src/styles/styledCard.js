import styled from 'styled-components';

/////////STYLED CARD
export const StyledCard = styled.div`
        display: flex;
        flex-direction: column;
        width: 30%;
        padding: 0.5%;
        align-self: center;
        justify-content: space-between;
        align-items: center;
        background-color: #282c34;
        color: white;
        background-blend-mode: overlay;
        margin-top: 1%;
        margin-left: 1%;
        border-radius: 7px;
        box-shadow: 4px 4px darkslategray;
        height: 5%;

    h4 {
        font-style: italic;
    }
    h3 {
        color: #61dafb;
    }

`

export const ContentDiv = styled.div`
        display: flex;
        flex-direction: row;
        width: 98%;
        padding: 1%;
        align-self: center;
        justify-content: center;
        align-content: space-between;
        align-items: center;
        flex-flow: wrap;
`

export const ButtonsArea = styled.div`
        display: flex;
        flex-direction: row;
        width: 98%;
        padding: 1%;
        align-self: center;
        justify-content: space-between;
        align-content: center;

        button {
            color: #61dafb;
            background-color: #282c34;
            border-color: #282c34;
            border-radius: 6px;
            width: 20%;
            font-size: 16pt;
        }
`