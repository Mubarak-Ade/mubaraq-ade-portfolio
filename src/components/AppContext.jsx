import React, {createContext, useState} from 'react'

export const MyContext = createContext()

function AppContext(props) {

    const [showNav, setShowNav] = useState("hidden");
    
    const handleNav = (nav) => {
        if (showNav === "hidden" ) {
            setShowNav("block")
        }
    }

    const handleCancel = () => {
        if (showNav === "block") {
            setShowNav("hidden")
        }
    }
  return (
    <div>
        <MyContext.Provider value={{showNav, handleNav, handleCancel}}>
            {props.children}
        </MyContext.Provider>
    </div>
  )
}

export default AppContext