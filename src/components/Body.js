import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import {resId} from "./RestaurantMenu";
const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFileteredRestaurant] = useState([]);
    const [searchText , setSearchText] = useState("");
    console.log(listOfRestaurants);
    useEffect(()=>{
        fetchData();
    } ,[]);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.539962&lng=77.1923685&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFileteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
        return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>setSearchText(e.target.value)}></input>
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFileteredRestaurant(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn"
                onClick={()=>{
                    const filteredList =  listOfRestaurants.filter((res)=>res.info.avgRating>4.3
                )
                setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link to={"/city/bangalore/"+restaurant.info.name.split(' ').join("-")+"-"+restaurant.info.locality.split(' ').join("-")+"-"+restaurant.info.areaName.split(' ').join("-")+"-rest"+restaurant.info.id}
                         key={restaurant.info.id}>
                            <RestaurantCard resData={restaurant}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;