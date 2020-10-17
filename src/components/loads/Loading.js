import React from 'react'
import styled from 'styled-components';
// import spinner from './spinner.svg'
import spinner from './football.gif'
const AnimationContainer = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background:black;
`;

const Loading = () => {
    return(<AnimationContainer>
        <img src={spinner} width="500" alt="spinner" />
    </AnimationContainer>)
}

export default Loading