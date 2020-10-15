import styled from 'styled-components'

export const MainDiv = styled.div`
  height: 100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-image: linear-gradient(120deg, blueviolet 0%, rgba(126, 60, 187, 0.836) 100%);
`
export const HoldMain = styled.div`
height: 100%;
width:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    /* align-items:center; */
    `
export const Main = styled.div`
    /* height: 100%; */
    padding:0;
    display:flex;
    flex-direction: column;
    align-self:center;
    width:80%;
    max-width:600px;
    font-size: 0.8rem;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    
    
`;

export const Main1 = styled.div`
    margin: 20px auto;
    padding:0;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    font-size: 0.8rem;
    color: white;
    /* background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); */
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    @media (max-width:768px){
      width:80%;
      margin: 20px auto;
    }
    
`;
export const Yet = styled.a`
  color:black;
  color: blueviolet;
  font-weight: bold;
  &:hover{
    text-decoration: none !important;
    color: blueviolet;
  }
`

export const Group = styled.div`
width:100%;
margin-bottom:10%;
`;

export const Form = styled.form`
width:80%;
margin:30px auto;
`;
export const Submit = styled.button`
  border-radius:5px;
  width:50%;
  padding: 5%;
  font-size:1.3rem;
  width:100%;
  border: 2px solid white;
  margin:20px auto;
  background-image: linear-gradient(120deg, blueviolet 0%, rgba(126, 60, 187, 0.836) 100%);
  transition: all 0.5s;
  outline:none;
  color: white;
  cursor: pointer;
  &:hover{
    outline:none;
    background:none !important;
    border: 2px solid blueviolet;
    color:blueviolet;
    font-weight:600;
  }

`;
export const Reverse = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    
`;

export const Label = styled.label`
  opacity: 1;
  text-align: right;
  /* font-size: 0.9rem; */
  margin-bottom: 0.5rem;
  transition: all 300ms ease;
`;

export const Span = styled.span`
  text-align: center;
  color: black;
`;

export const SpanRed = styled.span`
  text-align: center;
  color:red;
  /* font-size:1.3rem; */
`;

export const Input = styled.input`
  border: none;
  color: white;
  border-bottom: 2px solid rgba(255, 255, 255, 0.37);
  background: none;
  transition: 1s;
  position: relative;
  width:100%;
  &:focus {
    outline: none;
    border-bottom-color: white;
    transition: 1s;
  }
  &::placeholder{
    color:white;
  }
`;

export const RInput = styled.input`
  border: none;
  color: black;
  border-bottom: 2px solid rgba(137, 43, 226, 0.5);
  background: none;
  transition: 1s;
  position: relative;
  width:100%;
  &:focus {
    outline: none;
    border-bottom-color: blueviolet;
    transition: 1s;
  }
  &::placeholder{
    color:black;
  }
`;

export const Wellcome = styled.div`
    background: 50% 100%/50% 50% no-repeat radial-gradient(ellipse at bottom, rgba(71, 65, 65, 0.962), rgba(71, 65, 65, 0.962), rgba(71, 65, 65, 0.962));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
    -webkit-animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms;
    animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 20vh;
    font-size:2rem;
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