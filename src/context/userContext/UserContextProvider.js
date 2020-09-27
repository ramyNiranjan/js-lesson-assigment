import React, { createContext, useEffect, useState } from 'react'
import UserKit from '../../service/data/UserKit';

function UserContextProvider({ children }) {
  const [userInfo,setUserInfo]=useState(null)
  const userKit = new UserKit()

  useEffect(()=>{
    userKit
      .getUserInfo()
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err));
  },[])
 
    
    const contextValues = {
      userInfo,
    };
  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
}

export const UserContext = createContext();
export default UserContextProvider;
