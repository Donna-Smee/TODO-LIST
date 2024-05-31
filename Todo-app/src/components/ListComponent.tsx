import "./list-preview-styles.css"
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Item from "./Item";
import axios from "axios";
import useUser from "../hooks/userUser";


interface Props {
    listName: String,
    items: [],
    listID: String,
    onListUpdated: (updatedList: {}) => void
}

const ListComponent = ({listName, items, listID, onListUpdated}: Props) => {

    const {user, isLoading, userInfo} = useUser();

    // create a function to handle clicking the checked button that item component will call (will give the item._id)
    const handleCheckClick = async (itemID: string) => {

        const token = user && await user.getIdToken();      
        const headers = token ? {authtoken: token} : {};
        const response = await axios.put(`/api/lists/${listID}/items/${itemID}/check`, {}, {headers});
        if (response){
            onListUpdated(response.data);
        }
    }

  return (
    <>
        <div>
            <div className="list-preview-container-header">
                <h3>{listName}</h3>
                <FaRegTrashCan />
            </div>
                
            <div>
                
                {items ? items.map((i, index) => (<Item itemID={i._id} onCheckClick={handleCheckClick} name={i.name} checked={i.checked} key={index}></Item>)) : <div>No items yet</div>}
            </div>

        </div>
    </>
  )
}

export default ListComponent