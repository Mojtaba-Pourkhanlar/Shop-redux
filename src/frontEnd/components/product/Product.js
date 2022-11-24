import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
// Actions
import { addItem } from "../../redux/products/productAction";

const Product = ({ productData }) => {
  const dispatch = useDispatch();

  // Style
  //#region
  const container = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#0c0e11",
    transition: "all 0.50s ease",
    margin: {
      xs: "0 0 50px",
      md: "0 10px 50px",
    },
  };

  const cardImage = {
    borderRadius: "10px",
    height: "310px",
  };

  const title = {
    color: "#cccccc",
    textAlign: "start",
    margin: " 25px 20px 15px",
    fontSize: "1.1rem",
  };

  const price = {
    color: "#616161",
    margin: " 15px 20px",
    fontSize: "0.9rem",
    fontWeight: "500",
  };

  const linkContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "35px 20px 20px",
  };
  //#endregion

  return (
    <Grid container sx={container}>
      <Grid item m={1}>
        <CardMedia
          sx={cardImage}
          component="img"
          image={productData.image}
          alt="Product"
        />
      </Grid>

      <Grid item>
        <Typography component="h5" variant="h5" sx={title}>
          {productData.enTitle}
        </Typography>

        <Typography component="p" variant="p" sx={price}>
          {`${productData.price} $`}
        </Typography>
      </Grid>

      <Grid item sx={linkContainer}>
        <Link
          style={{ textDecoration: "none", color: "primary" }}
          to={`/Products/${productData.id}`}>
          <Button variant="outlined" color="secondary">
            Detail
          </Button>
        </Link>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => dispatch(addItem(productData))}>
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Product;
