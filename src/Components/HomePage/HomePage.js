import React, { Component } from 'react';
import "./HomePage.css"
import NavBar from '../NavBar/NavBar';
import Main from '../Main/MainContent/Main';
import MainContent from '../Main/DisplayContent/DisplayContent';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar></NavBar>
                <MainContent></MainContent>
            </div>
         );
    }
}
 
export default Home;