import React from "react";
import Header from './components/headers/Header';
import Home from './components/home/Home';
import { Box } from "@mui/material";
import DataProvider from "./context/dataProvider";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailView from "./components/details/detailview";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop: '54px'}}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>    
  );
}

export default App;
