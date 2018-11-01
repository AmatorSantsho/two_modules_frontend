// eslint-disable-next-line
import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            phone: '',
            email: '',
            password: ''
        };
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, address, city, phone, email, password} = this.state;

        axios.post('http://localhost:8090/contacts', {name, address, city, phone, email, password})
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        const {name, address, city, phone, email, password} = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            REGISTRATION
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Back
                            to LoginPage</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" name="name" value={name}
                                       onChange={this.onChange} placeholder="Name" minLength={2} maxLength={50} size={50}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address:</label>
                                <input type="text" className="form-control" name="address" value={address}
                                       onChange={this.onChange} placeholder="Address" minLength={2} maxLength={50} size={50}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City:</label>
                                <input type="text" className="form-control" name="city" value={city}
                                       onChange={this.onChange} placeholder="City" minLength={2} maxLength={50} size={50}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input type="text" className="form-control" name="phone" value={phone}
                                       onChange={this.onChange} placeholder="Phone Number" minLength={2} maxLength={50} size={50}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" name="email" value={email}
                                       onChange={this.onChange} placeholder="Email Address" minLength={2} maxLength={50} size={50}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control" name="password" value={password}
                                       onChange={this.onChange} placeholder="Password" minLength={2} maxLength={50} size={50}/>
                            </div>
                            <button type="submit" className="btn btn-default">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }


}


export default Create