import React, { useEffect } from "react";
import CardEl from "./CardEl";
import { Grid } from "@material-ui/core";

import Loader from "../shared/Loader";

import { useQuery } from "@apollo/client";
import { GET_POST } from "../../graphql/queries";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";

const Blog = (props) => {
  
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

 
  useEffect(() => {
    document.title = "Blog";
  }, []);

  const i = useQuery(GET_POST);

  if (i.loading) return <Loader />;
  
   return (
    <Container sx={{ marginTop: "160px" }}>
      <Grid container spacing={4}>
        {i.data?.posts.map((i) => (
          <Grid item xs={12} sm={6} md={4} display="flex">
            <Grid item key={i.id}>
              <CardEl
                item
                title={i.title}
                slug={i.slug}
                conte={i.conte.text}
                coverphoto={i.coverphoto.url}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Blog;
