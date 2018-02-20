import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import TextField from 'react-mdc-web/lib/Textfield/Textfield';
import Button from 'react-mdc-web/lib/Button/Button';

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
        const objectToSend = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        }
        const init = {
            method: 'POST',
            body: JSON.stringify(objectToSend),
        }
        const fetchUrl = 'https://us-central1-onepointoh-solutions.cloudfunctions.net/sendEmailHttps'
        fetch(fetchUrl, init)
        .then((res) => res.json())
    }
    render() {
        const { name, email, message, } = this.state;
        return (
            <div className="main">
                <div className="main-background">
                    <div className="main-content">
                        <h2>Contact</h2>
                        <p>Send us a quick message, and we can meet for coffee or drinks to discuss your project.</p>
                        <div className="contact-form">
                            <div className="contact-row">
                            <TextField
                                className="contact-textfield"
                                floatingLabel="Name"
                                name="name"
                                value={name}
                                onChange={this.onValueChange}
                            />
                            <TextField
                                floatingLabel="Email"
                                className="contact-textfield"
                                name="email"
                                value={email}
                                onChange={this.onValueChange}
                            />
                            </div>
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
                            <Button raised onClick={this.formSubmit} className="submit-button">Submit</Button>
                        </div>
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


