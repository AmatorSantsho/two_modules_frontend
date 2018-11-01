
import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

    render(){

        return(
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Profile of {this.state.contact.name}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <dl>
                            <dt>Name:</dt>
                            <dd>{this.state.contact.name}</dd>
                            <dt>Address:</dt>
                            <dd>{this.state.contact.address}</dd>
                            <dt>City:</dt>
                            <dd>{this.state.contact.city}</dd>
                            <dt>Phone Number:</dt>
                            <dd>{this.state.contact.phone}</dd>
                            <dt>Email Address:</dt>
                            <dd>{this.state.contact.email}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.contact.id}`} className="btn btn-success">Edit Profile</Link>
                    </div>
                </div>
            </div>




        );
    }
}

export default Show