import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox.js";
// import { robots } from "./robots";
import Scroll from '../components/scroll';
import "../containers/App.css";
// import './loader.svg';


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',

        }
    }

    //    this function gets called after render 
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(user => this.setState({ robots: user }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }



    //    render gets called after constructor
    render() {
        const filteredRobots = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {

            return (

                <div className="tc">

                    <h1>LOADING</h1>
                </div>
            )
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                    < Cardlist robots={filteredRobots} />
                    </Scroll>

                </div>
            );
        }

    }
}


export default App;