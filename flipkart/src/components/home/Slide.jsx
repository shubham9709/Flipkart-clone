import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  Component:{
    marginTop:"10px",
    backgroundColor:"#FFFFFF"
  },

  Deal:{
    padding:"15px 20px",
    display:"flex"
  },

  timer:{
    display:"flex",
    marginLeft:"10px",
    alignItems:"center",
    color:"#7F7F7F"
  },

  viewallbutton:{
    backgroundColor:"#2874f0",
    borderRadius:"2px"
  },

  image:{
    width:"auto",
    height:"200px"
  },
})

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },

};

const Slide = ({products, titile, timer}) => {
  const classes = useStyles();
  const URL= "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({hours, minutes, seconds}) =>{
    return (
      <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>
    )
  }
  return(
    <Box className={classes.Component}>
      <Box className={classes.Deal}>
        <Typography style={{fontSize:"22px", fontWeight:"bold", marginRight:"25px",lineHeight:"32px"}}>{titile}</Typography>
        {
          timer && 
          <Box className={classes.timer}>
            <img style={{width:"24px"}} src={URL} alt="timer"/>
            <Countdown date={Date.now() +5.04e+7} renderer={renderer} />
          </Box>
        }
        <Button style={{marginLeft:"auto", fontSize:"15px", fontWeight:"600"}} className={classes.viewallbutton} variant="contained">View All</Button>
      </Box>
      <Divider/>
        <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        centerMode={true}
      >
      {
        products.map(product=>(
          <Link to={`product/${product.id}`} textAlign="center" style={{padding:"25px 15px", textDecoration:"none"}}>
            <img src={product.url} alt="product" className={classes.image}/>
            <Typography style={{fontSize:"14px", marginTop:"5px",fontWeight:"600",color:"#212121"}}>{product.title.shortTitle}</Typography>
            <Typography style={{fontSize:"14px", marginTop:"5px",color:"green"}}>{product.discount}</Typography>
            <Typography style={{fontSize:"14px", marginTop:"5px",color:"#7f7f7f"}}>{product.tagline}</Typography>
          </Link>
        ))
      }
      </Carousel>
    </Box>
  )
}
export default Slide;