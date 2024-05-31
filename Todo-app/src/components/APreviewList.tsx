import "./list-preview-styles.css"
import Item from "./Item";
import { MdOutlineEdit } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";


interface props {
    listName: String,
    items: [],
    listID: String
}

const APreviewList = ({listName, items, listID}: props) => {
    const navigate = useNavigate();


  return (
    <>
        <div className="preview-list-container" onClick={() => navigate(`/lists/${listID}`)}>
            <div className="list-preview-container-header">
                <h3>{listName}</h3>
                <MdOutlineEdit className="edit-icon"/>
            </div>
  
            <div className="items-container">
                {items.slice(0, 3).map((item, index) => (
                    <Item name={item.name} checked={item.checked} key={item._id}></Item>
                    
                ))}
            </div>
        </div>
       

    </>
  )
}

export default APreviewList