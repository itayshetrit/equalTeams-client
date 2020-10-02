import styled from 'styled-components'


export const ClosenessTr = styled.tr`
    background: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.85) , rgba(0, 0, 0, 0.85) , rgba(0, 0, 0, 0.85) , rgba(255, 255, 255, 0.2));
    font-size: larger;
    color: white;
`
export const ClosenessSumTr = styled.tr`
    background: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(172, 120, 172, 1) , rgba(255, 255, 255, 0.2));
    font-size: larger;
    color: white;
`
export const ClosenessTd = styled.td`
    box-shadow: 5px 5px 10px black;
    border: none;
`

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2%;
    a {
        color: rgba(255, 255, 255, 0.94);
        padding: 0 1%;
        margin: 0 0.5%;
        text-decoration: none;
        font-size: large;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.777), -1px -1px 4px rgba(255, 255, 255, 0.777);
        border-radius: 5px;
        transition: 0.3s;
        &:hover {
            color: rebeccapurple !important;
            background: white;
            font-weight:bold;
        }
    }
`
// export const MainDiv = styled.div`


// `
// export const MainDiv = styled.div`


// `
// export const MainDiv = styled.div`


// `
