import React, { useState } from 'react';
import save1 from '../../../assets/pics/guests/save.svg'

const Tr2 = (props) => {

    const [flag, setFlag] = useState(false)
    const [temp, setTemp] = useState('')
    
    
    return (
        <tr key={props.data.id}>
            <td onClick={() => setFlag(!flag)} style={{ cursor: "pointer" }}>{props.data.name}</td>
            <td>{props.data.closeness}</td>
            {/* <td>{props.data.arrived ? props.data.arrived +"/"+props.data.accept : props.data.accept}</td> */}
            <td>{props.data.arrived ? props.data.arrived + "/" + props.data.accept : props.data.accept}</td>
            <td style={{ width: "30%" }}>
                {props.choise ? <input type="checkbox" className="checkbox animated fadeInRight" onClick={() => props.add_del(props.data)} /> : <div>
                    {flag ? <div>
                        <input placeholder={props.data.table} style={{ width: "100%", textAlign: "center", marginLeft: "5%" }}
                            onChange={(e) => setTemp(e.target.value)} />
                        <img style={{ cursor: "pointer" }} alt="save" src={save1} width="20" onClick={() => props.save(props.data._id, temp)} />
                    </div> : <img style={{ cursor: "pointer" }} className="animated fadeInLeft" alt="switch" src={save1} width="20" onClick={() => setFlag(!flag)} />}</div>}
            </td>
        </tr>
    );
}

export default Tr2;