import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Blog from './Components/Blog';

const App = () => (

        <Layout>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blogs/>} />
                        <Route path ="blog/:slug"  element={<Blog/>}/>
                </Routes>
        </Layout>
);

export default App;