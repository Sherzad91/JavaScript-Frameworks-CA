import React, { useState } from 'react';

// import { Form, FormGroup, Label, Input, Button } from 'react-bootstrap';
import { Button, Form, FormGroup } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        subject: '',
        email: '',
        body: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validate(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // TODO: handle form submission
            console.log('Form submitted successfully!');
            // clear form
            setFormData({
                fullName: '',
                subject: '',
                email: '',
                body: '',
            });
        }
    };

    const validate = (data) => {
        const errors = {};
        if (!data.fullName || data.fullName.length < 3) {
            errors.fullName = 'Full name must be at least 3 characters long';
        }
        if (!data.subject || data.subject.length < 3) {
            errors.subject = 'Subject must be at least 3 characters long';
        }
        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!data.body || data.body.length < 3) {
            errors.body = 'Body must be at least 3 characters long';
        }
        return errors;
    };

    return (
        <div className='container'>
            <div className='d-flex justify-content-center '>

                <Form onSubmit={handleSubmit}
                    style={{
                        width: '50%',
                    }} className="card mt-5" >
                <h1 className='pt-1'>Contact Page</h1>
                <p className='text-secondary'>
                    Write to us and we will get back to you as soon as possible.    
                </p>
                    <FormGroup>
                        <Form.Label for="fullName">Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            minLength="3"
                            required
                        />
                        {errors.fullName && <span className="text-danger">{errors.fullName}</span>}
                    </FormGroup>
                    <FormGroup>
                        <Form.Label for="subject">Subject</Form.Label>
                        <Form.Control
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            minLength="3"
                            required
                        />
                        {errors.subject && <span className="text-danger">{errors.subject}</span>}
                    </FormGroup>
                    <FormGroup>
                        <Form.Label for="email">Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </FormGroup>
                    <FormGroup>
                        <Form.Label for="body">Body</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="body"
                            id="body"
                            value={formData.body}
                            onChange={handleChange}
                            minLength="3"
                            required
                        />
                        {errors.body && <span className="text-danger">{errors.body}</span>}
                    </FormGroup>
                    <div className='d-flex justify-content-center p-3'>
                        <Button className='btn btn-default btn-block' style={{
                            width: '50%',
                        }} type="submit">Send</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Contact;
