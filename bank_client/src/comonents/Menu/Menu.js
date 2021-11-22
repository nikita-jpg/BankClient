import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Dish } from '../Dish/Dish'
import '../Menu/menu.css'



function Menu() {

    const [appState, setAppState] = useState([]);
    const apiUrl = "http://localhost:8080/menu";

    useEffect(() => {

    axios.get(apiUrl).then((resp) => {
        const allDishes = resp.data;
        setAppState(allDishes);
        });
    });

    return(
        <div className="menu">
            {appState.map(dish => (
                <Dish title={dish.title} description={dish.description} img={{backgroundImage: `url(${apiUrl + '/' + dish.id})`}}></Dish>
            ))}
        </div>
    )
};

export { Menu }