import React from 'react'

import useUser from '../hooks/userUser'

const HomeUserInfo = () => {
    const {user, isLoading, userInfo} = useUser();


    return (
        <>
            <div className="welcome">Welcome <br/> {userInfo ? userInfo.name : "To Do List Apprentice!"}</div>
            

            
        </>
    )
}

export default HomeUserInfo