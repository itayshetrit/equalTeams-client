import React from 'react';
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux';
import Tr2 from './Tr2'
const Table2 = (props) => {
    let background = "radial-gradient(circle, rgba(172, 120, 172, 1) 0%, #d8c7e07a 100%)"
    let array = props.array.map((item, index) => {
        return <Tr2 add_del={props.add_del} select={props.select} key={index} data={item} />
    })
    let count = 0;
    for (let i = 0; i < props.array.length; i++) {
        if (parseInt(props.array[i].arrived, 10) > 0 && parseInt(props.array[i].arrived, 10) < parseInt(props.array[i].accept, 10)) {
            count += parseInt(props.array[i].arrived, 10)
        }
        else {
            count += parseInt(props.array[i].accept, 10)
        }

    }
    // let amount = props.users.filter(x => x.closeness === 'תתת')
    // console.log(amount)
    // let sum = (amount[0].tables[0][props.array[0].table])
    // if (count > sum) {
    //     background = "radial-gradient(circle, rgba(255, 136, 0, 0.85) 0%, #d69b5786 100%)";
    // }
    // let sum2 = props.array[0].table
    return (
        <div style={{ flex: "1 0 21%" }}>
            <Table style={{ background: "white", width: "80%", margin: "2% auto", borderRadius: "5px" }}>
                <thead>
                    <tr>
                        <th className="lol_top">שם</th>
                        <th className="lol_top">קירבה</th>
                        <th className="lol_top">אישרו</th>
                        {/* <th className="lol_top">{sum2}#</th> */}
                        <th className="lol_top">4#</th>

                    </tr>
                </thead>
                <tbody>
                    {array}
                    <tr style={{
                        background: background,
                        color: "white", fontSize: "1.4rem"
                    }} className="lol_bottom">
                        {/* <td className="lol_bottom" colSpan="5">{sum} / {count}</td></tr> */}
                        <td className="lol_bottom" colSpan="5">{count}</td></tr>
                </tbody>
            </Table>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(Table2);
