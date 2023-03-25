import React from "react";
import Header from './components/headers/Header';
import Home from './components/home/Home';
import { Box } from "@mui/material";
import DataProvider from "./context/dataProvider";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailView from "./components/details/detailview";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop: '54px'}}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>    
  );
}

export default App;
