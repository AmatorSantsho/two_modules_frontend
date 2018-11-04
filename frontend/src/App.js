import React, {Component} from 'react';
//import  ReactDom from 'react-dom';
import axios from 'axios';

//import {Link} from 'react-router-dom';

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            data: ''
        }
    }
const
    urle= process.env.REACT_APP_URL;

    onChangeName = (event) => {
        this.setState({name: event.target.value})
    }
    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, password} = this.state;
        axios.post('https://twomodulesbackend.herokuapp.com/login', {name, password})
            .then(response => {
                this.setState({data: response.data});

                if (this.state.data.email !== 'Unauth') {
                    this.props.history.push('/show/' + response.data.id)
                } else {
                    this.props.history.push('/create/')
                }
            });

    }
    register = () => {
        this.props.history.push('/create/')
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Login
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" name="name" value={this.state.name}
                                       onChange={this.onChangeName} placeholder="Name" minLength="2" maxLength="20"
                                       size="20"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control" name="password"
                                       value={this.state.password}
                                       onChange={this.onChangePassword} placeholder="Password" minLength="2"
                                       maxLength="20" size="20"/>
                            </div>

                            <button type="submit" className="btn btn-default">Login</button>

                        </form>
                        <br/>
                        <div>
                            <h5>Not registered yet? <button onClick={this.register}>Register</button></h5>

                        </div>
                        <br/>
                        <div>
                            <h5> Current envirenemt var value is </h5>
                            <h5>${this.urle}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /*constructor(props){
        super (props);
        this.state = {
            contacts:[]
        }
    }

componentDidMount(){
axios.get('/contacts')
    .then(response=>{
        this.setState({contacts:response.data})
    })
}
*/
    /*
    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            CONTACTS LIST
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Contact</Link></h4>
                        <table className="table table-stripe">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.contacts.map(c =>
                                <tr>
                                    <td><Link to={`/show/${c.id}`}>{c.name}</Link></td>
                                    <td>{c.address}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
*/
    /*

        getData = () => {
            fetch('/contacts')
                .then(response => response.json())
                .then(allcontacts => {
                    this.setState({contacts: allcontacts});
                });
        };


        render() {
            return (
                <div>
                    <button onClick={this.getData}>Get all contacts</button>

                    <div >
                        <h2>Contact List</h2>
                        {this.state.contacts.map(contact =>
                            <div key={contact.id}>
                                <p>{contact.name}</p>
                                <p>{contact.address}</p>
                                    <p>{contact.city}</p>
                                        <p>{contact.phone}</p>
                            </div>
                                                )}

                    </div>

                </div>
            );
        }
        */
}

export default App;