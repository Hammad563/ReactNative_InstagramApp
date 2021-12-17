import React, { Component } from 'react';
import "./DisplayContent.css";
import Grid  from '@material-ui/core/Grid';
import StatusBar from '../StatusBar/StatusBar';
import Main from '../MainContent/Main';



class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6} className="maincontent__container">
                        <div>
                            <StatusBar></StatusBar>
                            <Main></Main>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default MainContent;