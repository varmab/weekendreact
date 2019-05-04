import React, {Component} from 'react'

class Users extends Component{
    constructor(){
        super();

        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholderxxxx.typicode.com/users')
        .then(response=>response.json())
        .then((users)=>{
            this.setState({
                users:users,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                loading:false,
                error:true
            })
        })

    }

    render(){
        if(this.state.loading==true){
            return (
                <div>Loading..</div>
            )
        }
        if(this.state.error==true){
            return (
                <div>Sorry.. Failed to load users</div>
            )
        }
        return(
            <div>
                <h1>Users</h1>
                <ul>
                    {
                        this.state.users.map((user)=>{
                            return <li key={user.id}>{user.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Users;