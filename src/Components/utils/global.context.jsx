import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import axios from "axios";



export const initialState = {
  dark: false,
};

export const apiSwitch = (state, action) => {
  switch (action.type) {
      case 'dark':
        return { dark: true };
      case 'light':
        return { dark: false };
      default:
        return state;
  }
}

export const routes = {
  home: '/',
  dentist: '/dentist/:id',
  contact: '/contact',
  favs: '/favs',
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(false);
  const [state, dispatch] = useReducer(apiSwitch, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ data, state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () => {
  return useContext(ContextGlobal);
};

