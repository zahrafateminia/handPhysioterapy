import { useQuery } from "@apollo/client";
import { Box, Typography, CardMedia, Card } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import sanitizeHtml from "sanitize-html";
import { GET_POST_DETAIL } from "../../graphql/queries";
import Container from "@mui/material/Container";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loader from "../shared/Loader";

const BlogPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_POST_DETAIL, {
    variables: { slug },
  });
  if (loading) return <Loader />;

  return (
    <Container sx={{ marginTop: "130px", marginBottom: "80px" }}>
      <Grid item>
        <CardMedia component="img" alt="" image={data?.post.coverphoto.url} />
      </Grid>
      <Box
        m={2}
        component="div"
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        width="100%"
      >
        <Grid item>
          <ArrowBackIcon color="primary" onClick={() => navigate(-1)} /> <span style={{fontWeight:"500"}}>back</span> 
        </Grid>
        <Typography component="h4" variant="h3" color="primary">
          {data?.post.title}
        </Typography>
      </Box>
      <Grid item mt={3} mb={3}>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(data?.post?.conte?.html),
          }}
        ></div>
      </Grid>
    </Container>
  );
};

export default BlogPage;
