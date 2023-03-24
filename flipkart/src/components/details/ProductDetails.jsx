import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { makeStyles } from "@material-ui/core";
import { fontSize } from "@mui/system";

const useStyles = makeStyles({
  component: {
    fontSize: "14px",
  },
});

const ProductDetail = ({ product }) => {
  const classes = useStyles();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  return (
    <Box>
      <Typography>{product.title.longTitle}</Typography>
      <Typography
        style={{ marginTop: "5px", color: "#878787", fontSize: "14px" }}
      >
        8 ratings & 5 reviews
        <Box component="span">
          <img
            src={fassured}
            alt="fassured"
            style={{ width: "77px", marginLeft: "20px" }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: "28px" }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388e3c" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <Box>
        <Typography style={{ fontSize: "14px", marginTop: "10px" }}>
          <LocalOfferIcon
            style={{ color: "#00cc00", marginRight: "10px", fontSize: "16px" }}
          />
          10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on
          orders of ₹5,000 and above T&C
        </Typography>
        <Typography style={{ fontSize: "14px", marginTop: "10px" }}>
          <LocalOfferIcon
            style={{ color: "#00cc00", marginRight: "10px", fontSize: "16px" }}
          />
          Buy this Product and Get Extra ₹500 Off on Bikes & Scooters T&C
        </Typography>
        <Typography style={{ fontSize: "14px", marginTop: "10px" }}>
          <LocalOfferIcon
            style={{ color: "#00cc00", marginRight: "10px", fontSize: "16px" }}
          />
          5% Cashback on Flipkart Axis Bank Card T&C
        </Typography>
        <Typography style={{ fontSize: "14px", marginTop: "10px" }}>
          <LocalOfferIcon
            style={{ color: "#00cc00", marginRight: "10px", fontSize: "16px" }}
          />
          Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to
          ₹500* Know More
        </Typography>
        <Typography style={{ fontSize: "14px", marginTop: "10px" }}>
          <LocalOfferIcon
            style={{ color: "#00cc00", marginRight: "10px", fontSize: "16px" }}
          />
          EMI starting from ₹651/monthView Plans
        </Typography>
      </Box>
      <Table style={{width:"40%"}}>
        <TableBody>
          <TableRow style={{ verticalAlign: "baseline" }}>
            <TableCell
              style={{
                color: "#878787",
                border: "none",
                border: "none",
                border: "none",
                maxWidth:"20%",
                width:"40%"
              }}
            >
              Delivery
            </TableCell>
            <TableCell style={{ fontWeight: "600" }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </TableRow>

          <TableRow style={{ verticalAlign: "baseline" }}>
            <TableCell
              style={{
                color: "#878787",
                border: "none",
                border: "none",
                border: "none",
                width:"40%"
              }}
            >
              Warranty
            </TableCell>
            <TableCell>No Warranty</TableCell>
          </TableRow>

          <TableRow style={{ verticalAlign: "baseline" }}>
            <TableCell
              style={{
                color: "#878787",
                border: "none",
                border: "none",
                border: "none",
                width:"40%"
              }}
            >
              Seller
            </TableCell>
            <TableCell>
              <Box
                component="span"
                style={{
                  color: "#2874f0",
                  border: "none",
                  border: "none",
                  border: "none",
                  width:"40%"
                }}
              >
                SuperComNet
              </Box>
              <Typography>GST invoice available</Typography>
              <Typography>
                View More Sellers starting from ₹{product.price.cost}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{border:"none"}} colSpan={2}>
              <img
                src={adURL}
                style={{
                  width: "390px",
                  border: "none",
                  border: "none",
                  border: "none",
                }}
              />
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>
      <Table>
        <TableBody>
          <TableRow style={{ verticalAlign: "baseline" }}>
              <TableCell
                style={{
                  color: "#878787",
                  border: "none",
                  border: "none",
                  border: "none",
                }}
              >
                Description
              </TableCell>
              <TableCell>{product.description}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};
export default ProductDetail;
