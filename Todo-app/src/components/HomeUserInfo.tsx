import React from 'react'

import useUser from '../hooks/userUser'
import UserInfoEdit from './UserInfoEdit';


const HomeUserInfo = () => {
    const {user, isLoading, userInfo} = useUser();


    return (
        <>
            <div className="welcome">Welcome <br/>
                {userInfo ? userInfo.name : "To Do List Apprentice!"}
                <div>
                    {user && <UserInfoEdit/>}
                </div>
                

            </div>
            
            
            
        </>
    )
}

export default HomeUserInfo