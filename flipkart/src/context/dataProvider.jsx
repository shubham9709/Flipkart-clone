
import React, { useState } from "react";
import { createContext } from "react";

const DataContext = createContext(null);

const DataProvider = ({children})=>{
  const [acnt , setAccount] = useState('');

  return (
    <DataContext.Provider value={{
      acnt,
      setAccount
    }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider;
export { DataContext };
