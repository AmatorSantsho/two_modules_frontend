// eslint-disable-next-line
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {}
        };
    }

    componentDidMount() {
        axios.get('https://twomodulesbackend.herokuapp.com/contacts/' + this.props.match.params.id)
            .then(res => {
                this.setState({contact: res.data});
            });
    }

    onChange = (e) => {
        const state = this.state.contact;
        state[e.target.name] = e.target.value;
        this.setState({contact: state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, address, city, phone, email, password} = this.state.contact;

        axios.put('https://twomodulesbackend.herokuapp.com/contacts/' + this.props.match.params.id, {name, address, city, phone, email, password})
            .then((result) => {
                this.props.history.push("/show/" + this.props.match.params.id)
            });
    }
handleDelete=()=>{
        axios.delete('https://twomodulesbackend.herokuapp.com/contacts/' + this.state.contact.id)
            .then(this.props.history.push("/"));
}

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            EDIT PROFILE
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to={`/show/${this.state.contact.id}`}><span className="glyphicon glyphicon-eye-open"
                                                                              aria-hidden="true"></span> Back to Profile</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" name="name" value={this.state.contact.name}
                                       onChange={this.onChange} placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address:</label>
                                <input type="text" className="form-control" name="address"
                                       value={this.state.contact.address} onChange={this.onChange}
                                       placeholder="Address"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City:</label>
                                <input type="text" className="form-control" name="city" value={this.state.contact.city}
                                       onChange={this.onChange} placeholder="City"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="text" className="form-control" name="phone"
                                       value={this.state.contact.phone} onChange={this.onChange}
                                       placeholder="Phone Number"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" name="email"
                                       value={this.state.contact.email} onChange={this.onChange}
                                       placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control" name="password" value={this.state.contact.password}
                                       onChange={this.onChange} placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Update Profile</button>
                            <button onClick={this.handleDelete} className="btn btn-danger">Delete Profile</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Edit