import React, { useState } from 'react'
import { MainDiv, Title } from '../common/Style'
import { ToastMsg, Together, FlexRow } from '../common/Style'
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Footer from '../common/footer/Footer'
import Dinamic from './components/Dinamic'
import Static from './components/Static'
import menu from '../../assets/pics/auth/menu.svg'
import { checkForUpdates } from '../../store/actions/products/product-actions'
import cloud from '../../assets/spinners/cloud.svg'
const Main1 = (props) => {
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const checkForUpdates1 = () => {
        dispatch(checkForUpdates()).then(data => {
            if (!data.error) {

                addToast(<ToastMsg>הפעולה בוצעה בהצלחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else {
                addToast(<ToastMsg>קיימת בעיה - פנה למנהל המערכת</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }
    const [list, setList] = useState(true);
    return (<><MainDiv className="animated fadeIn">
        <Title style={{ color: "white" }}>SHOPPING LIST</Title>
        <FlexRow style={{width:"80%", margin:"0 auto"}}>
            <Together onClick={() => checkForUpdates1()}>
                <img alt="reset1" src={cloud} width="30" />
                <div style={{ fontSize: "1rem" }}>update</div>
            </Together>
            <Together onClick={() => setList(!list)} >
                <img alt="menu" className="animated animate rubberBand delay-3s" src={menu} width="30" style={{ cursor: "pointer", animationIterationCount: "2", animationDuration: "1.5s" }} />
                <div>change</div>
            </Together>
        </FlexRow>
        {list ? <Static /> : <Dinamic />}
    </MainDiv>
        <Footer />
    </>)
}
export default Main1