import React from 'react'
import {useSelector,useDispatch} from "react-redux"

export default function Mycounter() {

    const count=useSelector(state=>state.count)
    const postData=useSelector(state=>state.postData)
    const dispatch=useDispatch()
    const increment=()=>{
            dispatch({
                type:"INC",
                payload:2
            })
    }

    const decrement=()=>{
        dispatch({
            type:"DEC",
            payload:2
        })
}
  return (
    <div>Mycounter
        <h2>Count is {count}</h2>
        <input type="button" value="increment" onClick={increment}/>
        <input type="button" value="decrement" onClick={decrement}/>
        <ul>
          {postData.map(each=><li key={each.id}>{each.title}</li>)}
        </ul>
    </div>
  )
}
