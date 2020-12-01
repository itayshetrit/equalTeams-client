import styled from 'styled-components'

export const Details = styled.div`
    
    div{
      margin-bottom:10px;
    }

`

export const PlayersHolder = styled.div`
  display:flex;
  flex-wrap:wrap;
  width: 100%;
  height: 200px;
  margin-bottom:20px;
  overflow-y: scroll;

`

export const NumOfTeamsHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    margin: auto;
`

export const MainDiv = styled.div`
    
    background-image: linear-gradient(120deg, blueviolet 0%, rgba(126, 60, 187, 0.836) 100%);
    height: 100vh;

`
export const WhiteInput = styled.input`
  border: none;
  color: white;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  background: none;
  transition: 1s;
  padding-right: 5px;
  &:focus {
    outline: none;
    border-bottom-color: white;
    transition: 1s;
  }
  &::placeholder{
    color:rgba(255, 255, 255, 0.8);
  }
`;

export const WhiteError = styled.span`
  font-size: 0.8rem;
  text-align: center;
  color: white;
`;


export const HoldMain = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    `
export const Main = styled.div`
    /* height: 100%; */
    padding:0;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    min-width:80%;
    font-size: 0.8rem;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    @media (max-width:768px){
      width:80%;
    }
`;
export const Card = styled.div`
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    border-radius: 10px;
    color: black;
    padding: 10px;
    width: 40%;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: blueviolet;
    text-decoration-color: blueviolet;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
`
export const Title = styled.div`
text-shadow: 0px 1px 2px rgba(0,0,0,0.33);
font-family: "varela";
font-size:2.8rem;
color: blueviolet;
display:flex;
flex-direction:row;
justify-content:center;
margin: 20px auto;
`;

export const PositionRelative = styled.div`
    position: relative;
`;

export const PlaceHolderImage = styled.img`
position: absolute;
left:1px;
width:15px;
cursor: pointer;
top:50%;
transform:translate(0,-50%);

`;

export const Players = styled.div`
    border: none;
    box-shadow: 0 1px 8px white;
    border-radius: 3px;
    width: 29%;
    margin: 10px 2%;
    padding: 4px 4px;
    color: ${props => props.chosen ? "blueviolet" : "white"};
    background: ${props => props.chosen ? "white" : "none"};
    font-weight: ${props => props.chosen ? "bold" : "500"};
`;

export const FlexRow = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;

`;
export const Together = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
width:25%;
color: white;
margin: 0 auto;
border:2px solid rgba(255,255,255,0.4);
padding:10px 5px;
border-radius:5px;
cursor: pointer;
&:hover{
    color: white;
    text-decoration: none;
}
`;

export const FlexRow2 = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
/* align-items: center; */
div{
    display:flex;
    flex-direction:column;
    width:20%;
    p{
        margin-bottom:0px;
    }
}
`;

export const ToastMsg = styled.div`
 color:black;
 display:flex;
 direction:rtl;
 justify-content:center;
 align-items:center;
`;

export const RegularHover = styled.div`
    color: rgba(255, 255, 255, 0.94);
    padding: 1% 2%;
    cursor: pointer;
    text-decoration: none;
    font-size: large;
    box-shadow: 0 1px 8px rgba(255, 255, 255, 0.777), 0 -1px 8px rgba(255, 255, 255, 0.777);
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
        color: rebeccapurple !important;
        background: white;
        font-weight:bold;
    }
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width:50%;
    margin: auto;
    div, a {
        color: rgba(255, 255, 255, 0.94);
        padding: 3% 0;
        margin-top: 20px;
        cursor: pointer;
        text-decoration: none;
        font-size: large;
        box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2), 0 -2px 4px rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        transition: 0.3s;
        &:hover {
            color: rebeccapurple !important;
            background: white;
            font-weight:bold;
        }
    }
`

export const Submit = styled.button`
  border-radius:5px;
  width:50%;
  padding: 1%;
  font-size:1.3rem;
  border: 2px solid white;
  margin:20px auto;
  background-image: linear-gradient(120deg, blueviolet 0%, rgba(126, 60, 187, 0.836) 100%);
  transition: all 0.4s;
  outline:none;
  color: white;
  cursor: pointer;
  &:hover{
    transition: all 0.2s;
    outline:none;
    background:white;
    color:blueviolet;
  }

`;