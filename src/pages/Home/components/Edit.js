import { useState } from 'react'
import { v4 } from 'uuid'


const Edit = ({ add, submittingStatus }) => {

    const [note, setNote] =useState("")
    function noteChang(e) {
        setNote(e.target.value)
    }
    
    const [time, setTime] =useState("")
    function timeChang(e) {
        setTime(e.target.value)
    }
    
    function addItem() {
        submittingStatus.current = true
        add (function (prevData) {
            return [ {
                id:v4(),
                note,
                time
            },...prevData
        ];
        })
    }
    // 1.由edit.js發起動作(addItem)，透過props(add)傳給Home

    return <div>
        <h1>備忘錄</h1>
        <p>記事:</p>
        <input tpe="text" value={note} onChange={noteChang}></input>
        <p>時間:</p>
        <input type="datetime-local" id="meeting-time" value={time} onChange={timeChang}></input>
        <button onClick={addItem} className="add">新增</button>
    </div>
}

export default Edit