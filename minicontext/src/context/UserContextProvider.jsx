import React from "react";
import Usercontext from "./UserContext";

const UserContextProvider = ({children})=>{

    const [user, Setuser] = React.useState(null);
    return (
        <Usercontext.Provider value = {{user, Setuser}}>
        {children}
        </Usercontext.Provider>
    )
}

export default UserContextProvider