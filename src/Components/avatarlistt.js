import React, {Component} from "react";
import '../Avatar.css';
import 'tachyons';
import Avatar from "./Avatar";


class Avatarlist extends Component{

    constructor(){
        super();
        this.state = {
            name: " welcome to Stock Exchange "
        }
    }
    namechange(name){
        this.setState({
            name: name
        })
    }

    render(){
        return (
            <div className="mainpage tc " >
                <h1>{this.state.name}</h1>
                <Avatar id="1" name=" Bob" work="web developer"/>
                <Avatar id="2" name=" Michel" work="Tester"/> 
                <Avatar id="3" name=" Rahul" work="Ui developer"/> 
                <Avatar id="4" name="Piyush" work="Data scientist"/>                          
              <button onClick={() => this.namechange('STOCK APP')} > react website</button>
            </div>
        )

    }
}


export default Avatarlist;