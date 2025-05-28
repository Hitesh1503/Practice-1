import { useState, useEffect } from "react";

//Custom Hook - useRestaurant
const useRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9715987&lng=77.5945627&carousel=true&third_party_vendor=1"
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        const fetchedList =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        setRestaurantList(fetchedList || []);
        setAllRestaurantList(fetchedList || []);
      } catch (err) {
        console.error("Error:", err.message || err);
      } finally {
        setLoading(false); // ← this always runs
      }
    };
    fetchRestaurantData();
  }, []);

  return { restaurantList, setRestaurantList, allRestaurantList, loading };
};

export default useRestaurant;
