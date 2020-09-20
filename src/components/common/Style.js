import styled from 'styled-components'

export const MainDiv = styled.div`
    
    background-image: linear-gradient(120deg, blueviolet 0%, rgba(126, 60, 187, 0.836) 100%);
    height: 100vh;

`
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
font-family: GoogleMedium;
text-shadow: 0px 1px 2px rgba(0,0,0,0.33);
font-size:2.8rem;
color: blueviolet;
display:flex;
flex-direction:row;
justify-content:center;
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

export const FlexRowPrice = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
div{
    width:90%;
    text-align: right !important;
}
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
`;

export const BorderBlur = styled.div`
    border:2px solid rgba(255,255,255,0.4);
    padding:10px 5px;
    border-radius:5px;
    width:15%;
    cursor: pointer;
    &:hover{
        color: blueviolet;
        background:white;
        font-weight:600;
        /* transition: linear 300ms; */
    }

`

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
 direction: rtl;
`;

export const CalanderDiv = styled.div`
 background-color: rgba(0, 0, 0, 0.652);
 border-radius: 10px;
 box-shadow:0 1px 3px white, 0 -1px 3px white;
`;

export const Wellcome = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
width:100%;
font-size:2rem;
background: 50% 100%/50% 50% no-repeat radial-gradient(ellipse at bottom, #fff, transparent, transparent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
    -webkit-animation: reveal 3s ease-in-out forwards 0.2s, glow 2.5s linear infinite 2s;
            animation: reveal 3s ease-in-out forwards 0.2s, glow 2.5s linear infinite 2s;

  @-webkit-keyframes reveal {
      80% {
          letter-spacing: 8px;
        }
        100% {
            background-size: 300% 300%;
        }
    }
    @keyframes reveal {
        80% {
            letter-spacing: 8px;
        }
        100% {
            background-size: 300% 300%;
        }
    }
    @-webkit-keyframes glow {
        40% {
            text-shadow: 0 0 8px #fff;
        }
    }
    @keyframes glow {
        40% {
            text-shadow: 0 0 8px #fff;
        }
    }
`;