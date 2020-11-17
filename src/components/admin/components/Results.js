import React from 'react';
import { useSelector } from "react-redux";
import Team from './Team';

const Rusults = props => {
    const { results } = useSelector(state => state.electionsReducer);
    let all;
    if (results) {
        let count = 0;

        all = results.map((item, index) => {
            count++;
            return <Team key={index} data={item[0]} count={count} />
        })
    }
    return (
        <div style={{margin:"10px auto"}}>{all}</div>
    )
}

export default Rusults;