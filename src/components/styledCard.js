import styled from 'styled-components';

/////////STYLED CARD
export const StyledCard = styled.div`
        display: flex;
        flex-direction: column;
        width: 30%;
        padding: 1%;
        align-self: center;
        justify-content: space-between;
        align-items: center;
        background-color: #282c34;
        color: white;
        background-blend-mode: overlay;
        margin-top: 1%;
        border-radius: 7px;
        box-shadow: 7px 7px darkslategray;

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
        justify-content: space-between;
        align-items: center;
        flex-flow: wrap;
`