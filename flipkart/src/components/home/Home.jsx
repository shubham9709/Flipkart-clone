import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Box } from "@mui/system";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";
import Midslide from "./midSlide";
import Midsection from "./midsection";

export default function Home() {
  const dispatch = useDispatch();
  const {products} = useSelector(state=>state.getProducts);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Box style={{ padding: "10px 10px", background: "#f2f2f2" }}>
        <Banner />
        <Midslide products={products} titile="Deals of the Day" timer={true} />
        <Midsection />
        <Slide products={products} titile="Recommended for You" timer={false} />
        <Slide products={products} titile="Suggested items" timer={false} />
        <Slide products={products} titile="Top Picks" timer={false} />
        <Slide products={products} titile="Top Rated" timer={false} />
        <Slide products={products} titile="Discounts for You" timer={false} />
        <Slide products={products} titile="Top Deals on Accessories" timer={false} />
      </Box>
    </>
  );
}
