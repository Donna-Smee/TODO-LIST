import { useEffect, useState } from "react"
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import axios from "axios";


const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {

        // get username from database
        const getUserInfoDB = async (tempUser) => {
            try {
               
                if (tempUser){
                    const token = tempUser && await tempUser.getIdToken();
                    const headers = token ? {authtoken: token} : {};
   
                    const userInfo = await axios.get(`/api/users/${tempUser.email}`, {headers});
              
                    if (userInfo){
                        setUserInfo(userInfo.data);
                        return;
                    }
                    
                }
                setUserInfo(null);
                
            }catch (e){
                console.log(e);
                setUserInfo(null);
            }
            
        }

        const unsubscribe = onAuthStateChanged(getAuth(), user => {
          
            setUser(user);
            setIsLoading(false);

            getUserInfoDB(user);
            
           
        });
        return unsubscribe;
    });


    

    return {user, isLoading, userInfo};
}

export default useUser;