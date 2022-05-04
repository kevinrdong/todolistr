const Item = ({id, note, time, deleteData, submittingStatus }) => {

    function deleteItem() {
        submittingStatus.current = true
        deleteData(function(prev){
            return prev.filter(item => item.id !== id)
        })
    }

    return <div className="item">
        <p>{note}</p>
        <p>{`${time}`.replace(`T`,"  ")}</p>
        <button className="remove" onClick={deleteItem}>刪除</button>
    </div>
}

export default Item