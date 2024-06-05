import "./page.css";
import useUser from "../hooks/userUser";
import APreviewList from "../components/APreviewList";
import HomeUserInfo from "../components/HomeUserInfo";
import HomeNewUsers from "../components/HomeNewUsers";

const HomePage = () => {
  const {user, isLoading, userInfo} = useUser();
  

  return (
    <>
    <div className='page-margin'>
      
      {<HomeUserInfo></HomeUserInfo>}

      
      
    </div>

    
    </>
    
  )
}

export default HomePage