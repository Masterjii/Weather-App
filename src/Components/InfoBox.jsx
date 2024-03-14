import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import styled from "@emotion/styled";
import { yellow } from "@mui/material/colors";

function InfoBox({ info }) {
  const INIT_IMG =
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1574099742055-0bb3d5bc1142?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1681829279432-7b4dca716cde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <h1>Weather Information - {info.city}</h1>
      <div className="carContainer">
        <Card sx={{ maxWidth: 445 }}>
          <CardMedia
            sx={{ height: 240 }}
            
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp < 15
                ? COLD_URL
                : HOT_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <BeachAccessOutlinedIcon color="success" />
              ) : info.temp < 15 ? (
                <AcUnitOutlinedIcon color="secondary" />
              ) : (
                <WbSunnyOutlinedIcon sx={{ color: yellow[500] }} />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temperature:{info.temp}&deg; C </div>
              <div>Humidity:{info.humidity} </div>
              <div>Pressure:{info.pressure} </div>
              <div>Visibility:{info.visibility} </div>
              <div>Timezone:{info.timezone} </div>
              <p>
                The weather can be feels like <strong>{info.weather}</strong>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
