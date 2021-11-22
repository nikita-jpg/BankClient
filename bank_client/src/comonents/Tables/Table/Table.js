import '../Table/table.css'
const Table = ({number, date, freeTime, setModal}) =>{

    return(
    <div className="table" onClick={() => setModal({isOpen: true, tableId: number, date: date, freeTime: freeTime})}>
        <div className="table__number" >{number}</div>
    </div>
    )
}


export {Table}