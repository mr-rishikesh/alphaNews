import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
 


 

export default class App extends Component {
   
  apiKey = process.env.REACT_APP_NEWS_API 
  state = {
    progress :0
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }
 
  render() {
    return (
      <BrowserRouter basename='/alphaNews'>
        <div>
        <LoadingBar
        height = {3}
        color='#f11946'
        progress={this.state.progress}
        
      />
     
 
          <Navbar />
          <Routes>
            <Route path="/"  element={<News  apiKey = {this.apiKey} setProgress= {this.setProgress}  key="general" pageSize={20} category="general" />} />
            <Route path="/sports" element={<News apiKey = {this.apiKey} setProgress= {this.setProgress} key="sports" pageSize={20} category="sports" />} />
            <Route path="/entertainment" element={<News  apiKey = {this.apiKey} setProgress= {this.setProgress} key="entertainment" pageSize={20} category="entertainment" />} />
            <Route path="/health" element={<News  apiKey = {this.apiKey} setProgress= {this.setProgress} key="health" pageSize={20} category="health" />} />
            <Route path="/business"  element={<News  apiKey = {this.apiKey} setProgress= {this.setProgress} key="business" pageSize={20} category="business" />} />
            <Route path="/technology" element={<News apiKey = {this.apiKey}setProgress= {this.setProgress}  key="technology"pageSize={20} category="technology" />} />
            <Route path="/science"  element={<News  apiKey = {this.apiKey} setProgress= {this.setProgress}  key="science"pageSize={20} category="science" />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
