import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import './index.css';
import Header from './components/header';
import Home from './components/home';
import NewEntry from './components/newEntry';
import About from './components/about';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-entry" element={<NewEntry />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
