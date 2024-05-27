import "./list-preview-styles.css"
import Item from "./Item";
import { MdOutlineEdit } from "react-icons/md";


interface props {
    listName: String,
    items: []
}

const APreviewList = ({listName, items}: props) => {
  return (
    <>
        <div className="preview-list-container">
            <div className="list-preview-container-header">
                <h3>{listName}</h3>
                <MdOutlineEdit className="edit-icon"/>
            </div>
  
            <div>
                {items.map((item, index) => (
                    <Item name={item} checked={false} key={item}></Item>
                    
                ))}
            </div>
        </div>
       

    </>
  )
}

export default APreviewList