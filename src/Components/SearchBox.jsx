import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b7b8d4686d22ac7fd94828682379ede8";

  // Jab bhi kisi api ko call ki jaati he toh bo asynchronous hota h -
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let responseJson = await response.json();
      console.log(responseJson);
      let result = {
        city: city,
        temp: responseJson.main.temp,
        humidity: responseJson.main.humidity,
        pressure: responseJson.main.pressure,
        visibility: responseJson.visibility,
        weather: responseJson.weather[0].description,
        timezone: responseJson.timezone,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };
  let handleChange = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <h2> Searching for the weather </h2>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          onChange={handleChange}
          label="City Name"
          variant="outlined"
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Search
        </Button>
       {error && <h2 style={{color:'red'}}>No such Place exist in This API</h2>}
      </form>
    </div>
  );
}

export default SearchBox;
