import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {
  const { params } = useParams();
  console.log(params);
  return (
    <>
      <div className="menu">
        <div className="restaurant-card">
          <div className="restaurant-card-dtls">Restaurant ID : {params}</div>
        </div>
        <div className="restaurant-menu"></div>
      </div>
    </>
  );
};
