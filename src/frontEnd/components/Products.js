import { useEffect, useState } from "react";
import { Container, Grid, TextField, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Product from "./product/Product";
import { Data } from "../data";

const Products = () => {
  const products = Data;
  const [list, setList] = useState(products);
  const [search, setSearch] = useState("");

  const cart = useSelector((state) => state);

  const searchHangler = (e) => {
    setSearch(e.target.value);
  };

  const searchProducts = () => {
    return list.filter((item) => item.enTitle.toLowerCase().includes(search));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //style
  const CssTextField = {
    marginTop: "30px",
    width: "100%",
    "& label": {
      color: "#0f6b45",
    },
    "& input": {
      color: "#cccccc",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "gray",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#121519",
        transition: "all 0.50s linear",
        minHeight: "100vh",
      }}>
      <Container
        maxWidth="xl"
        sx={{
          padding: "35px auto 0",
          top: "0px",
          zIndex: 100,
          width: "100%",
        }}>
        <Grid container>
          <Grid item mt={4} xs={12} md={3}>
            <Box component="div" mt="40px">
              <Link to="/products/cart" style={{ textDecoration: "none" }}>
                <ShoppingCartOutlined color="secondary" />

                <Typography
                  component="span"
                  variant="span"
                  sx={{
                    bgcolor: "orange",
                    color: "#000",
                    padding: "3px",
                    borderRadius: "10px",
                  }}>
                  {cart.length}
                </Typography>
              </Link>
            </Box>

            <Box>
              <TextField
                sx={CssTextField}
                type={"text"}
                label="Search..."
                value={search}
                onChange={searchHangler}
              />
            </Box>
          </Grid>

          <Grid item mt={4} container spacing={2} xs={12} md={9}>
            {searchProducts().map((product) => (
              <Grid item xs={12} sm={6} lg={4} key={product.id}>
                <Product productData={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
