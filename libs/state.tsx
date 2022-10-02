import { createContext, useContext, Provider, useState } from "react";

const Context = createContext<any>({});

const ContextWrapper = ({ children }: any) => {
    const [search, setSearch] = useState(null)
    const [results, setResults] = useState([])
  
    return (
      <Context.Provider value={{
        search, setSearch, results, setResults
      }}>
        {children}
      </Context.Provider>
    );
}

const useAppContext = () => {
    return useContext(Context);
}

export {ContextWrapper, useAppContext}