import React from 'react';
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table'
import Tr2 from './Tr2'
const Table2 = (props) => {
    const { tables } = useSelector(state => state.tablesReducer);
    // let background = "radial-gradient(circle, rgba(172, 120, 172, 1) 0%, #d8c7e07a 100%)"
    let array = props.array.map((item, index) => {
        return <Tr2 add_del={props.add_del} save={props.save} gG={props.gG} choise={props.choise} key={index} data={item} />
    })
    let countAccept = 0;
    let table = props.array[0].table
    for (let i = 0; i < props.array.length; i++) {
        countAccept += props.array[i].accept;
    }
    var background = "radial-gradient(circle, rgba(172, 120, 172, 1) 0%, #d8c7e07a 100%)";
    if (tables[table] !== []) {
        if (parseInt(countAccept) === parseInt(tables[table])) {
            background = "linear-gradient(to right, white , rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.5), white)";
        }
        else if (countAccept > tables[table]) {
            background = "linear-gradient(to right, white , rgb(255, 166, 0, 0.5), rgb(255, 166, 0, 0.5), white)";
        }
    }


    // console.log(tables[table]);
    return (
        <div style={{ flex: "1 0 21%" }}>
            <Table style={{ background: "white", width: "80%", margin: "2% auto", borderRadius: "5px" }}>
                <thead>
                    <tr>
                        <th className="lol_top">שם</th>
                        <th className="lol_top">קירבה</th>
                        <th className="lol_top">אישרו</th>
                        <th className="lol_top">#{table}</th>

                    </tr>
                </thead>
                <tbody>
                    {array}
                    <tr style={{
                        background: background,
                        color: "white", fontSize: "1.1rem"
                    }}>
                        {/* <td className="lol_bottom" colSpan="5">{sum} / {count}</td></tr> */}
                        <td className="lol_bottom" colSpan="5">{tables[table] + " / " + countAccept}</td></tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Table2;
