import { Box } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../Data/NavData";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>({
  image:{
    width: "100%",
    height: "280px",
    [theme.breakpoints.down('md')]:{
      objectWidth:"cover",
      height:"180px"
    }
  }
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function Banner() {
  const classes = useStyles();
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((data) => (
        <Box key={data.key}>
          <img
            style={{}}
            src={data.url}
            alt="banner"
            className={classes.image}
          />
        </Box>
      ))}
    </Carousel>
  );
}
