import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import Blogs from './Components/Blogs';

const App = () => (

    <Layout>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blogs/>} />
        </Routes>
        </Layout>
);

export default App;