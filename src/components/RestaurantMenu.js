import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API} from "../utils/constants";


const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    const regex = /rest(\d+)/;
    let resIdUniqueId = resId.match(regex);
    if(resIdUniqueId){
        resIdUniqueId = resIdUniqueId[1].toString();
        console.log(resIdUniqueId);
    }
    useEffect(()=>{
        fetchMenu()
    },[]);

const fetchMenu = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8630547&lng=77.528263&restaurantId="+resIdUniqueId+"&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);  
    setResInfo(json.data);
};

 if(resInfo === null) return <Shimmer/>;

const {name,cuisines,costForTwoMessage,avgRating,totalRatingsString,areaName,sla} = resInfo?.cards[2]?.card?.card?.info;
console.log(resInfo);
const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
return (
    <>
        <div className="minimal-card">
        <h1>{name}</h1>
        <h3>{avgRating} {totalRatingsString} - {costForTwoMessage} </h3>
        <h3 className="cuisine">{cuisines.join(",")}</h3>
        <div className="">
            <h3>Outlet : {areaName}</h3>
            <h4>{sla.minDeliveryTime } - {sla.maxDeliveryTime} min</h4>
        </div>
        </div>
        <div className="menu">
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}
                >{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
        
    </>
        
    )
}
export default RestaurantMenu;