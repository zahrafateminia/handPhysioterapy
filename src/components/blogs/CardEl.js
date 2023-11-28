import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { useCallback, useSelector, useDispatch } from 'react-redux';
import { useReducer } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Up":
      return state + 1;

    case "Down":
      return state - 1;
    default:
      return state;
  }
};

export default function CardEle({ title, conte, coverphoto, slug }) {

 

  const [number, dispatch] = useReducer(reducer, initialState);
  return (
    <Card
      sx={{ boxShadow: 3, borderRadius: 0, marginBottom: "30px" }}
      mt={2}
      xs={12}
      lg={3}
      md={4}
    >
      <CardActionArea>
        <CardMedia
          sx={{ height: "160px" }}
          component="img"
          image={coverphoto}
        />
        <CardContent sx={{ p: 3 }}>
          <Typography gutterBottom variant="h7" component="div">
            {title}
          </Typography>
          <Typography
            style={{ height: "57px", overflow: "hidden" }}
            variant="body2"
            color="text.secondary"
          >
            {conte}
          </Typography>
          <Typography variant="body2" sx={{ overflow: "clip" }}>
            <Link  
              to={`/blog/${slug}`}
              style={{ marginTop: " 10px", textDecoration: "none" }}
            >
              Learn more
            </Link>
          </Typography>
          <div
            item
            style={{
              marginTop: " 8px",
              width: "40%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* <ThumbDownOffAltIcon  /> */}
            <span>{number}</span>
            <ThumbUpOffAltIcon onClick={() => dispatch("Up")} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
