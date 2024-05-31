import "./page.css";
import useUser from "../hooks/userUser";
import HomeNewUsers from "../components/HomeNewUsers";
import CreateAList from "../components/CreateAList";
import { useEffect, useState } from "react";
import axios from "axios";
import APreviewList from "../components/APreviewList";




const ListsPage = () => {
  const {user, isLoading, userInfo} = useUser();
  const [lists, setLists] = useState([]);

  

  useEffect(() => {
    const getLists = async () => {
      
      if (!user) {return;}
      
  
      const token = user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};
      
      const response = await axios.get(`/api/lists/`, {headers});
      
      if (response){
        setLists(response.data);
        
      } 
    }

    
    if (!isLoading && user){
      getLists();
    }
    
  }, [user, isLoading]);
  
  
  return (
    <>
    <div  className='page-margin'>ListsPage
      {
        user ? 
        <div>
 
          <CreateAList></CreateAList>
          { <ul>
            {lists.map((list, index) =>
              
              <APreviewList listName={list.name} items={list.items} listID={list._id} key={list._id}></APreviewList>
            )}
          </ul> }
         
         
        </div>
       
        
      

      :
      <HomeNewUsers/> 
      } 
     </div>
      
      
    
    </>
  )
}

export default ListsPage