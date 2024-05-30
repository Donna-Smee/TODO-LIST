import "./page.css";
import useUser from "../hooks/userUser";
import HomeNewUsers from "../components/HomeNewUsers";
import CreateAList from "../components/CreateAList";





const ListsPage = () => {
  const {user, isLoading, userInfo} = useUser();
  
  
  return (
    <>
    <div  className='page-margin'>ListsPage
      {
        user ? 
        <div>
           <CreateAList></CreateAList>
         
        </div>
       
        // <ul>
        //   {lists.map((list, index) =>
        //     <p>{`${list.name} is list number ${index}`}</p>
        //   )}
        // </ul>
      

      :
      <HomeNewUsers/> 
      } 
     </div>
      
      
    
    </>
  )
}

export default ListsPage