import React from "react";
import "./Services.css"; // Assume you have corresponding CSS for styling
import woodworking from "./woodworking.jpg";
import painting from "./painting.jpg";
import facade from "./facade.jpg";
import garden from "./garden.jpg";
import kitchen from "./kitchen.jpg";
import bathroom from "./bathroom.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Services = () => {
  const CardComponent = ({ img, imgAlt, header, text }) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={img} alt={imgAlt} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {header}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <div className="services-section">
      <div className="title">
        <h2>Våra Tjänster</h2>
        <p>För dina behov</p>
      </div>

      <div id="services" className="services-list">
        <div className="service">
          <CardComponent
            img={woodworking}
            imgAlt="Snickeri"
            header="Snickeri"
            text="Från enkla träarbeten till mer komplexa, som terrasser"
          />
        </div>
        <div className="service">
          <CardComponent
            img={kitchen}
            imgAlt="Kök"
            header="Kök"
            text="Snickeri arbeten och bänkskivor, installation av vitvaror."
          />
        </div>
        <div className="service">
          <CardComponent
            img={bathroom}
            imgAlt="Badrumm"
            header="Badrumm"
            text="Vägg- och takarbete, kakel och golvläggning, installation av badrumsinredning."
          />
        </div>
        <div className="service">
          <CardComponent
            img={painting}
            imgAlt="Målning/Spackling"
            header="Målning/Spackling"
            text="På utsidan och insidan."
          />
        </div>
        <div className="service">
          <CardComponent
            img={garden}
            imgAlt="Trädgårdsarbete"
            header="Trädgårdsarbete"
            text="Markförberedelse, Hårdlandskap."
          />
        </div>
        <div className="service">
          <CardComponent
            img={facade}
            imgAlt="Fasad"
            header="Fasad"
            text="Renovering, utbyte av ruttna/skadade plankor."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
