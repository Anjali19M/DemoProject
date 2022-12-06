import { useEffect,useState } from "react"
// import { dataServices } from "../Utility/data.service"
import History from "./History"
// import Payload from "./Payload"
import './dashboard.scss'
// import { useDispatch } from "react-redux";
// import { getHistoryData, getPayloadData} from "../Redux/Action/Action";
export default function Dashboard() {
    // const dispatch = useDispatch();
    const [selectTab, setSelectedTab] = useState("history-tab")
    const handleTabchange = (id) => {
        setSelectedTab(id)
    }
    // useEffect(() => {
    //     dataServices.GetHistory().then((res) => {
    //         dispatch(getHistoryData(res));
    //     }).catch(error => {
    //     })
    //     dataServices.GetPayloads().then((res) => {
    //         dispatch(getPayloadData(res))
    //     }).catch(error => {
    //     })
    // }, [])
    return (
        <div className="dashboard_main_container">
            <div className="dashboard_left">
                <div className="nav flex-column nav-pills tabs_label_container" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link nav_label active" data-toggle="pill" href="#history" role="tab" aria-controls="history" aria-selected="true" id="history-tab"
                    onClick={()=>handleTabchange("history-tab")}>History</a>
                    {/* <a className="nav-link nav_label" data-toggle="pill" href="#payload" role="tab" aria-controls="payload" aria-selected="false" id="payload-tab"
                    onClick={()=>handleTabchange("payload-tab")}>Payload</a> */}
                </div>
            </div>
            <div className="dashboard_right">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active dashboard_stats" id="history" role="tabpanel" aria-labelledby="history-tab">
                       {selectTab==="history-tab" && <History />}
                    </div>
                    {/* <div className="tab-pane fade" id="payload" role="tabpanel" aria-labelledby="payload-tab">
                        {selectTab==="payload-tab" && <Payload />}
                    </div> */}
                </div>
            </div>
        </div>
    )
}