
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pagesize = 16;
  state = {
    progress: 0
  }
  setprog = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (

      <>
        <Router>
          <Navbar></Navbar>
          <div>
            <LoadingBar
              color='#f11946'
              height={3}
              progress={this.state.progress}

            />

          </div>
          )

          <Routes>
            <Route exact path="/" element={<News setprog={this.setprog} key="general" pagesize={this.pagesize} country={'in'} category={'general'} />}> </Route>
            <Route exact path="/General" element={<News setprog={this.setprog} key="general" pagesize={this.pagesize} country={'in'} category={'general'} />}> </Route>
            <Route exact path="/Entertainment" element={<News setprog={this.setprog} key="entertainment" pagesize={this.pagesize} country={'in'} category={'entertainment'} />}> </Route>
            <Route exact path="/Business" element={<News setprog={this.setprog} key="business" pagesize={this.pagesize} country={'in'} category={'business'} />}> </Route>
            <Route exact path="/Health" element={<News setprog={this.setprog} key="health" pagesize={this.pagesize} country={'in'} category={'health'} />}> </Route>
            <Route exact path="/Science" element={<News setprog={this.setprog} key="science" pagesize={this.pagesize} country={'in'} category={'science'} />}> </Route>
            <Route exact path="/Sports" element={<News setprog={this.setprog} key="sports" pagesize={this.pagesize} country={'in'} category={'sports'} />}> </Route>
            <Route exact path="/Technology" element={<News setprog={this.setprog} key="technology" pagesize={this.pagesize} country={'in'} category={'technology'} />}> </Route>


          </Routes>
        </Router>
      </>
    )
  }
}

