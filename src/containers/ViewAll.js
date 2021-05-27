import React, {Component} from "react";
import {Form, Col, Button} from 'react-bootstrap'
class ViewAll extends Component{

    render(){

        return(
            <div className="">
                {/* {searchBox} */}

                <Form>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" srOnly>
                            Name
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="add details"
                        />
                        </Col>
                    
                        <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Add
                        </Button>
                        </Col>
                    </Form.Row>
                </Form>

                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label='Eat breakfast'
                            defaultChecked={true}
                        />

                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label='Hang out with friends'
                        />

                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label= 'Take a shower'
                        />
                        
                        </div>
                    ))}
                    </Form>
            </div>

        );
    }
};

export default ViewAll;