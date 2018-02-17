import React, { Component } from 'react';

import TextField from 'react-mdc-web/lib/Textfield/Textfield';
import Button from 'react-mdc-web/lib/Button/Button';
import Card from 'react-mdc-web/lib/Card/Card';
import CardTitle from 'react-mdc-web/lib/Card/CardTitle';
import CardHeader from 'react-mdc-web/lib/Card/CardHeader';
import CardText from 'react-mdc-web/lib/Card/CardText';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    formSubmit = () => {
        console.log(this.state);
    }
    render() {
        const { name, email, message, } = this.state;
        return (
            <div className="main">
                <div className="main-background">
                    <div className="main-content">
                        <Card className="contact-form">
                            <CardHeader>
                                <CardTitle>Contact</CardTitle>
                            </CardHeader>
                            <CardText>
                                <TextField
                                    className="contact-textfield"
                                    floatingLabel="Name"
                                    name="name"
                                    value={name}
                                    onChange={this.onValueChange}
                                />
                                <TextField
                                    floatingLabel="Email"
                                    
                                    name="email"
                                    value={email}
                                    onChange={this.onValueChange}
                                />
                                <TextField
                                    className="contact-textfield"
                                    floatingLabel="Message"
                                    name="message"
                                    textarea
                                    rows="8"
                                    cols="40"
                                    value={message}
                                    onChange={this.onValueChange}
                                />
                                <Button raised onClick={this.formSubmit}>Submit</Button>
                            </CardText>
                        </Card>
                    </div>
                    <div className="mobile-footer">
                        <div className="sidebar-icons">
                            <ul>
                                <ol><FaFacebook /></ol>
                                <ol><FaInstagram /></ol>
                                <ol><FaTwitter /></ol>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const fetchUrl = 'https://us-central1-onepointoh-solutions.cloudfunctions.net/sendEmailHttps'