import React, { Component } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from './resources/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <PostList />
          <Footer />
        </div>
      </ThemeProvider >
    );
  }
}

export default App;
