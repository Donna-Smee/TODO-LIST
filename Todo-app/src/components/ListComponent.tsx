import "./list-preview-styles.css"
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Item from "./Item";


interface Props {
    listName: String,
    items: [],
    listID: String
}

const ListComponent = ({listName, items, listID}: Props) => {

  return (
    <>
        <div>
            <div className="list-preview-container-header">
                <h3>{listName}</h3>
                <FaRegTrashCan />
            </div>
                
            <div>
                
                {items ? items.map((i, index) => (<Item name={i.name} checked={i.checked} key={index}></Item>)) : <div>No items yet</div>}
            </div>

        </div>
    </>
  )
}

export default ListComponent