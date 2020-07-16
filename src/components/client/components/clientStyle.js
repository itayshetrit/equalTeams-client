import styled from 'styled-components'

export const Main1 = styled.div`
/* width: 100%;
height: 100%; */
/* color: white; */
`;
export const Products = styled.div`
display:flex;
flex-direction:row;
align-items:center;
/* justify-content:space-between; */
width:90%;
margin: 4px auto;
border: 1.4px solid rgba(255,255,255,0.3);
padding:5px 5px;
border-radius:5px;
`;
export const HoldProducts = styled.div`
width: 96%;
margin: 10px auto;
border-radius:4px;
height: 50vh;
overflow-y:auto;
display:flex;
flex-direction:column;


`

export const Ops = styled.div`
width: 100%;
max-height: 300px;
overflow-y:auto;
display:flex;
flex-direction:column;
div{
    width:70%;
    margin:1.5% auto;
    /* background: whitesmoke; */
    color:white;
    font-size:1.3rem;
    padding:1%;
    /* border: 2px solid rebeccapurple; */
    box-shadow:0 1px 3px white,0 -1px 3px white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:3px;
}
`;



export const TextDecoration = styled.div`
animation: mymove 5s infinite;
    text-decoration: underline rgba(255, 70, 70, 0.815);
    font-size: 1.4rem;
    text-align: center;
    margin-bottom:5%;
@keyframes mymove {
    from {text-decoration: underline white;}
    to {text-decoration: underline rgba(255, 70, 70, 0.815);}
  }

`;
    
  export const Info = styled.div`
width:85%;
 margin: 4% auto;
 display: flex;
  flex-direction: column;

  `;
  


