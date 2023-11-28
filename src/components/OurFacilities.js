import * as React from "react";
// import { useRef } from "react";
import pic1 from "../imgs/ourfacility/pic1.jpg";
import ImageList from "@mui/material/ImageList";
import pic3 from "../imgs/ourfacility/pic2.jpg";
import pic2 from "../imgs/ourfacility/pic3.jpg";
import pic4 from "../imgs/ourfacility/pic4.jpg";
import pic5 from "../imgs/ourfacility/pic5.jpg";
import pic6 from "../imgs/ourfacility/pic6.jpg";
import pic7 from "../imgs/ourfacility/pic7.jpg";
import pic8 from "../imgs/ourfacility/pic8.jpg";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import { Container, Typography, Grid } from "@mui/material";

export default function OurFacilities() {
  return (
    <Container sx={{ marginTop: "20px", padding: "35px" }}>
      <ImageList gap={12} variant="masonry">
        <Grid item>
          <ImageListItem key="Subheader">
            <ListSubheader component="div">
              <Typography sx={{}} component="h1" variant="p">
                Our Facility + Practice
              </Typography>
            </ListSubheader>
          </ImageListItem>
        </Grid>

        <Grid item>
          {itemData.map((item) => (
            <Grid item sx={{ bgcolor: "red" }}>
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar title={item.title} />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: pic1,
    title: "Clean",
    rows: 3,
    cols: 3,
  },
  {
    img: pic2,
    title: "Safe",
    rows: 3,
    cols: 1,
  },
  {
    img: pic3,
    title: "Standard",
  },
  {
    img: pic4,
    title: "Comfortable",
  },
  {
    img: pic8,
    title: "Research-based ",
  },
  {
    img: pic6,
    title: "Healthier ",
  },
  {
    img: pic7,
    title: "Highly individualized program ",
  },
  {
    img: pic5,
    title: "State-of-the-art technology",
  },
];
