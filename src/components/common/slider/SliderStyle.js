import React from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

const StyledSlider = styled(ReactSlider)`
    width: 100%;
	height: 8px;
	color: blueviolet;
	font-size: 14px;
	margin: 35px 0px 20px 0px;
`;

const StyledThumb = styled.div`
    height: 22px;
	width: 22px;
	text-align: center;
	border: 2px solid rgba(137, 43, 226, 0.5);
    background-color: white;
	border-radius: 50%;
	cursor: grab;
	margin-top: -7px;
	outline: none;
	position: relative;
	&:active {
		outline: none;
	}
`;

const ThumbText = styled.div`
    color: black;
	position: absolute;
	bottom: 20px;
	left: 2px;
	/* text-align: center; */
	font-size:0.8rem;
`;

const Thumb = (props, state, text) => <StyledThumb {...props}><ThumbText>{state.valueNow}</ThumbText></StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: blueviolet;
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

export const MySlider = ({ onChange, value, defaultValue, min, max, step, minDistance, thumbText }) => {
	return <StyledSlider
		defaultValue={defaultValue}
		renderTrack={Track}
		renderThumb={(props, state) => Thumb(props, state, thumbText)}
		minDistance={minDistance}
		step={step}
		max={max}
		min={min}
		value={value}
		onChange={onChange}
	/>
}

