import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Home from './routes/Home';
import Search from './routes/Search';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="search/:query" element={<Search />}></Route>
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
