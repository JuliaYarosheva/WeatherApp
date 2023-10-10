import { useCallback, useState } from "react";
import axios from "axios";

const useGetLocation = () => {
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");

  const getLocation = useCallback((searchText: string) => {
    //setLoading(true);
    axios
      .get("https://maps.googleapis.com/maps/api/place/autocomplete/json", {
        params: {
          input: searchText,
          language: "en_US",
          types: "%28cities%29",
          key: "AIzaSyBF6LYujdaJdE7pYSp1W_7OW_ya-Yt3kMY",
        },
      })
      .then((res) => {
        setLocation(res.data);
        //setLoading(false);
      })
      .catch((err) => {
        setLocationError(err.message);
        //setLoading(false);
      });
  }, []);

  return { location, locationError, getLocation };
};

export default useGetLocation;
