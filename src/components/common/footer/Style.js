import styled from 'styled-components'

export const Nav = styled.div`
    width:100%;
    height: 8vh !important;
    display:flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items:center;
    position: sticky;
    bottom: 0;
    background-image: linear-gradient(120deg, blueviolet 0%, rgba(126, 60, 187, 0.836) 100%);
    border-top: 1px solid rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 3px white inset, -1px -1px 3px white inset;
    z-index: 1000;
      a{
        display:flex;
        justify-content:center;
        align-items:center;
        img{
          width: 25px;
          @media (max-width:768px){
      width:25px;
    }
        }
      }
    
`;

export const Button = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--purple);
`