import React from 'react'

import useUser from '../hooks/userUser'

const HomeUserInfo = () => {
    const {user, isLoading, userInfo} = useUser();


    return (
        <>
            <div>{userInfo ? userInfo.name : "No name"}</div>
            {(user != null) ? <div>{user.email}</div> : <div>{'Email not available'}</div>}
            <br />
            <h3>Number of Lists: {userInfo && userInfo.lists ? userInfo.lists.length : -100}</h3>
        </>
    )
}

export default HomeUserInfo