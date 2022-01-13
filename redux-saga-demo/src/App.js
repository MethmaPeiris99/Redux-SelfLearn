import './App.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUserAction} from "./Actions/getUserAction";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAction());
    },[dispatch])

    const user = useSelector(state => state.user.user);
    console.log(user);

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

