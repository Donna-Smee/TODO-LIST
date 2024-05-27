import "./page.css";
import useUser from "../hooks/userUser";
import HomeNewUsers from "../components/HomeNewUsers";


interface Props {
  lists: {name: String, items: {name: String, checked: Boolean}[], active: Boolean}[] 
}




const ListsPage = ({lists}: Props) => {
  const {user, isLoading, userInfo} = useUser();
  
  
  return (
    <>
    <div  className='page-margin'>ListsPage
      {
        user ? 
        
        <ul>
          {lists.map((list, index) =>
            <p>{`${list.name} is list number ${index}`}</p>
          )}
        </ul>
      

      :
      <HomeNewUsers/> 
      } 
     </div>
      
      
    
    </>
  )
}

export default ListsPage