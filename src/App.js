import React, { Component } from 'react';
import Users from "./Components/cards";
import './App.css';


class App extends Component {
    constructor(props) {
        super(props)

        // Set initial state
        this.state = {
            users_data: ([]),
            loading: false
        }

        // Binding Functions
        this.loadUsers1 = this.loadUsers1.bind(this)
        this.loadUsers2 = this.loadUsers2.bind(this)
    }

    //Fetching Page 1 data
    loadUsers1() {

        this.setState({
            loading: true
        });

        setTimeout(async function() {
            const response1 = await fetch("https://reqres.in/api/users?page=1");
            const jsonresponse1 = await response1.json();

            this.setState({
                users_data: jsonresponse1["data"],
                loading: false
            });
        }.bind(this), 1200);
    }


    //Fetching Page 2 data
    loadUsers2() {
        this.setState({
            loading: true
        });

        setTimeout(async function() {
            const response2 = await fetch("https://reqres.in/api/users?page=2");
            const jsonresponse2 = await response2.json();

            this.setState({
                users_data: jsonresponse2["data"],
                loading: false
            });
        }.bind(this), 1200);
    }

    render() {
        return ( <
            >
            <
            nav className = "navbar" >
            <
            div className = "navitems" >
            <
            img src = "https://letsgrowmore.in/wp-content/uploads/2021/05/growmore-removebg-preview.png"
            alt = "logo"
            className = "logo" / > <
            button class = "btn btn-primary"
            onClick = { this.loadUsers2 }
            role = "button" > More < /button> <
            button class = "btn btn-primary"
            onClick = { this.loadUsers1 }
            role = "button" > Get Users < /button> < /
            div > <
            /nav>

            <
            div className = "userData" >
            <
            Users loading = { this.state.loading }
            users = { this.state.users_data }
            /> < /
            div > <
            />
        );
    }
}

export default App;