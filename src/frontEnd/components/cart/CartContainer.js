import { Container, Grid, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Icon
import { KeyboardBackspace } from "@mui/icons-material";
import Cart from "./Cart";

const CartContainer = () => {
  const cart = useSelector((state) => state);

  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };

  const total = cart.reduce(addition, 0);

  const container = {
    dispaly: "flex",
    flexDirection: "space-between",
    alignItems: "flex-start",
    padding: 0,
    backgroundColor: "transparent",
    paddingTop: "100px",
    paddingBottom: "100px",
  };

  return (
    <div
      style={{
        backgroundColor: "#121519",
        transition: "all 0.50s ease",
        minHeight: "100vh",
      }}>
      <Container maxWidth="xl">
        <Grid container sx={container}>
          <Box component="div" m="-50px 20px 50px">
            <Link to="/products">
              <KeyboardBackspace
                style={{
                  cursor: "pointer",
                  color: "#fcc21b",
                  fontSize: "40px",
                }}
              />
            </Link>
          </Box>

          <Grid item xs={12}>
            {cart.map((item) => (
              <Cart key={item.id} data={item} />
            ))}
          </Grid>

          <Grid item xs={12} p="0 20px">
            {total > 0 ? (
              <Typography variant="h5" color="primary" my={2}>
                <span style={{ color: "#ffffff" }}>Total Payments : </span>
                {total} $
              </Typography>
            ) : (
              <Typography variant="h4" color="error">
                The shopping cart is empty
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CartContainer;
