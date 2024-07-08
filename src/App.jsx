import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import './index.css';
import Header from './components/header';
import Home from './components/home';
import NewEntry from './components/newEntry';
import About from './components/about';
import Entries from './components/entries'; // Import the Entries component

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-entry" element={<NewEntry />} />
          <Route path="/about" element={<About />} />
          <Route path="/entries" element={<Entries />} /> {/* Add the new route */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
