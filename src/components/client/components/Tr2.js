import React, { useState } from 'react';
import save1 from '../../../assets/pics/guests/save.svg'
import { connect } from 'react-redux';
const Tr2 = (props) => {
    const [flag, setFlag] = useState(false)
    const [temp, setTemp] = useState('')
    const save = async (data) => {
        let p = {
            name: data.name, phone: data.phone, sum: data.sum, closeness: data.closeness, id: data.id,
            accept: data.accept, table: temp, arrived: data.arrived, gift: data.gift, note: data.note
        }
        // axios.put(localStorage['username']+"/" + data.id + ".json", p).then(res => {
        //     console.log("עודכן")
        //     update(p)
        //     setFlag(!flag)
        // })
    }
    const update = (p) => {
        props.dispatch({
            type: 'UPDATE_TABLE', data: p
        });
    }
    const g = () => {
        props.add_del(props.data)
    }
    let x = '';
    if (props.data.arrived > 0) {
        if (props.data.arrived < props.data.accept) {
            x = "red";
        }
        else if(props.data.arrived === props.data.accept){
            x = "green";
        }
        else{
            x="ora"
        }

    }
    return (
        <tr className={x} key={props.data.id}>
            <td onClick={() => setFlag(!flag)} style={{ cursor: "pointer" }}>{props.data.name}</td>
            <td>{props.data.closeness}</td>
            {/* <td>{props.data.arrived ? props.data.arrived +"/"+props.data.accept : props.data.accept}</td> */}
            <td>{props.data.arrived ? props.data.arrived + "/" + props.data.accept : props.data.accept}</td>
            <td style={{ width: "30%" }}>
                {props.select ? <input type="checkbox" className="checkbox animated fadeInRight" onClick={() => g()} /> : <div>
                    {flag ? <div>
                        <input placeholder={props.data.table} style={{ width: "50%", textAlign: "center", marginLeft: "5%" }}
                            onChange={(e) => setTemp(e.target.value)} />
                        <img alt="save" src={save1} width="20" onClick={() => save(props.data)} />
                    </div> : <img style={{ cursor: "pointer" }} className="animated fadeInLeft" alt="switch" src={save1} width="20" onClick={() => setFlag(!flag)} />}</div>}
            </td>
        </tr>
    );
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(Tr2);