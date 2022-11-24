import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { Data } from "../../data";

const ProductDetails = (props) => {
  const params = useParams();
  const id = params.id;
  const demoFilter = Data.find((item) => item.id === +id);

  const { image, price, category, enTitle, enDescription } = demoFilter;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const container = {
    dispaly: "flex",
    flexDirection: "row",
    padding: "50px",
  };
  const btnContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div
      style={{
        background: "#121519",
        minHeight: "100vh",
        transition: "all 0.50s linear",
        color: "#fff",
      }}>
      <Container sx={container} maxWidth="xl">
        <Grid
          container
          mt="60px"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ display: "flex", justifyContent: "center", m: "40px 0" }}>
            <img src={image} alt="product" width={400} />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: "100px 0",
              padding: "20px",
            }}>
            <Typography variant="h5">{enTitle}</Typography>

            <Typography variant="h6" fontSize="16px">
              {enDescription}
            </Typography>

            <Typography variant="h6" fontSize="16px">
              <span>Category:</span> {category}
            </Typography>

            <Box sx={btnContainer}>
              <Button variant="contained" color="secondary">
                {price} $
              </Button>
              <Link to="/Products" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="success">
                  Back to shop
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetails;
