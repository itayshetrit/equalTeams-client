import React from 'react'
import styled from 'styled-components';
import spinner from './spinner.svg'
const AnimationContainer = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background:black;
`;

const Loading = () => {
    return(<AnimationContainer>
        <img src={spinner} width="200" alt="spinner" />
    </AnimationContainer>)
}

export default Loading