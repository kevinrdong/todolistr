import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      List
      {listData.map((item) => {
        const { note, time, id } = item;
        return (
          <Item key={id} id={id} note={note} time={time} deleteData={deleteData} submittingStatus={submittingStatus}  />
        );
      })}
      {/* 3.listData更新後重新渲染。 <Item note={note}  />前者為HTML者為JS  */}
    </div>
  );
};

export default List;
