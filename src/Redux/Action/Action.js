import { ACTIVE_POST, CURRENT_PAGE, HISTORY_DATA , PAYLOAD_DATA, POST_PER_PAGE} from "../ActionText"
export const getHistoryData=(historyData)=>(dispatch,getState)=>{
    try{
        dispatch({
            type:HISTORY_DATA,
            payload: {
                historyData,
              }
        })
    }
    catch(error){
        console.log("error",error)
    }
}

export const getPayloadData=(payloadData)=>(dispatch,getState)=>{
    try{
        dispatch({
            type:PAYLOAD_DATA,
            payload:{
                payloadData
            }
        })
    }
    catch(error){
        console.log("error",error)
    }
}

export const getCurrentPage=(currentPage)=>(dispatch,getState)=>{
    try{
        dispatch({
            type:CURRENT_PAGE,
            payload:{
                currentPage
            }
        })
    }
    catch(error){
        console.log("error",error)
    }
}
export const getPostPerPage=(postPerPage)=>(dispatch,getState)=>{
    try{
        dispatch({
            type:POST_PER_PAGE,
            payload:{
                postPerPage
            }
        })
    }
    catch(error){
        console.log("error",error)
    }
}