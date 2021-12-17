import React, { Component } from 'react';
import Post from '../Post/Post';
import "./Main.css";
import uploadImage from "../../../images/upload.png"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="mainpage__container">  
                    <div className="mainpage__divider"></div>

                    <div className="fileupload">
                        <label for="file-upload" >
                            <img className="mainpage__uploadicon" src={uploadImage} />
                        </label>
                         <input onChange={this.upload} id="file-upload" type="file"/>
                     </div>
                     
                    <div className="mainpage__divider"></div>   
                </div>
               <Post userName='Alex_2000' postImage='https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg' likes='2000'></Post>
            </div>
         );
    }
}
 
export default Main;