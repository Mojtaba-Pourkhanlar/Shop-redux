import { useDispatch } from "react-redux";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
// Icons
import { Delete } from "@mui/icons-material";

import {
  removeItem,
  decrease,
  increase,
} from "../../redux/products/productAction";

const Cart = (props) => {
  const dispatch = useDispatch();
  const { image, enTitle, price, quantity } = props.data;

  // Style
  //#region
  const container = {
    dispaly: "flex",
    flexDirection: "column",
    alignItems: "start",
    backgroundColor: "transparent",
  };

  const cart = {
    border: "1px solid #ccc",
    transition: "all 0.50s ease",
    borderRadius: "5px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "15px",
  };
  //#endregion

  return (
    <Container sx={container} maxWidth="xl">
      <Grid container sx={cart}>
        <Grid item>
          <img width="150px" src={image} alt="cart" />
        </Grid>

        <Grid item xs={12} sm={8} md={4} my={3}>
          <Typography variant="h6" color="#ffffff">
            {enTitle}
          </Typography>
          <Typography variant="p" color="#ffffff" fontWeight="700">
            {price} $
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          my={3}
          color="#ffffff"
          sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" color="secondary">
            Count :
          </Typography>
          <Button variant="contained" color="warning" sx={{ m: "0 10px" }}>
            <Typography variant="h5" color="error">
              {quantity}
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <Box my={2}>
            {quantity > 1 ? (
              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(decrease(props.data))}>
                -
              </Button>
            ) : (
              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(removeItem(props.data))}>
                <Delete />
              </Button>
            )}
            <Button
              variant="contained"
              color="success"
              sx={{ m: "0 10px" }}
              onClick={() => dispatch(increase(props.data))}>
              +
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
