import React from 'react';
import Table from 'react-bootstrap/Table';
import TheadTeam from './TheadTeam';

const Team = (props) => {
    console.log(props.data);
    let count=0;
    let team = props.data.map((item, index) => {
        count++;
        return <tr key={index}>
            <td>{count}</td>
            <td>{item.fname + ' ' + item.lname}</td>
        </tr>
    })
    return (<div>
        <div>קבוצה {props.count}
        </div>
        <Table id='myTable' responsive style={{ width: "100%", margin: "2% auto", background: "white", color: "black" }}>
            <TheadTeam num={props.count} />
            <tbody>
                {team}
            </tbody>
        </Table>
    </div>)

}
export default Team;