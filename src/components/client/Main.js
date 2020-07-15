import React, { useState } from 'react'
import { MainDiv, Title } from '../common/Style'
import Footer from '../common/footer/Footer'
import Dinamic from './components/Dinamic'
import Static from './components/Static'
import menu from '../../assets/pics/auth/menu.svg'

const Main1 = (props) => {
    const [list, setList] = useState(true);
    return (<><MainDiv className="animated fadeIn">
        <Title style={{ color: "white" }}>SHOPPING LIST</Title>
        <img alt="menu" className="animated animate rubberBand delay-3s" src={menu} width="50" style={{cursor:"pointer", marginBottom:"10px", animationIterationCount:"2", animationDuration:"1.5s"}} onClick={() => setList(!list)} />
        {list ? <Static /> : <Dinamic />}
    </MainDiv>
        <Footer />
        </>)
}
export default Main1