import { Shimmer } from "./Shimmer.js";
import "../CSS_Component/Body.css";
import { restaurantImagesURL } from "./Constant.js";
import useOnline from "../CSS_Component/utils/useOnline.js";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../CSS_Component/utils/userContext.js";
import "../index.css";

const RestaurantCard = (props) => {
  debugger;
  const [visible, setVisible] = useState(true);
  const [cuisines, setCuisines] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (visible) {
      setCuisines(props?.cuisines?.slice(0, 2)?.join(", "));
    } else {
      setCuisines(props?.cuisines?.join(", "));
    }
  }, [visible, props?.cuisines]);
  return (
    <>
      <div className="restaurant-card">
        <div className="restaurant-card-img">
          <img
            src={restaurantImagesURL + props?.cloudinaryImageId}
            alt="Image Not Found"
          ></img>
        </div>

        <div className="restaurant-card-data">
          <h1>{props?.name}</h1>
          <h2>
            <b>
              ✳️{props?.avgRating} • {props?.sla?.slaString}
            </b>
          </h2>
          <h2>
            <span>{cuisines}</span>
            <span>
              <button
                className="cuisines-btn"
                onClick={() => setVisible(!visible)}
              >
                {visible ? "...more" : "...less"}
              </button>
            </span>
          </h2>
          <h2>
            {props?.areaName}, {props?.locality}
          </h2>
          <p className="context-kingcafe">Sponsered by : {user.name}</p>
        </div>
      </div>
    </>
  );
};

const Restaurant = ({ list }) => {
  return (
    <>
      <div className="restaurant-list">
        {list.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          );
        })}
      </div>
    </>
  );
};

export const Body = ({ restaurantList, loading, emptyData }) => {
  return (
    <>
      <div className="body-list">
        {loading ? <Shimmer /> : <Restaurant list={restaurantList} />}
        <h1>{emptyData}</h1>
      </div>
    </>
  );
};
