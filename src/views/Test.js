import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button,
    InputGroup,
    InputGroupText,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FormFeedback,
} from 'reactstrap';
import ComponentCard from '../components/ComponentCard'

const Test = () => {
    return (
        <div>
            <Col md="12">
                <ComponentCard title="Ordinary Form">
                    <Form >
                        <FormGroup>
                            <Label htmlFor="exampleEmail12">Email Address</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail12"
                                placeholder="Email address Here"
                            />
                            <FormText color="muted">
                                We&apos;ll never share your email with anyone else.
                            </FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="examplePassword2">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword2"
                                placeholder="Password Here"
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" id="exampleCustomCheckbox" />
                            <Label check>Check Me Out!</Label>
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>
                </ComponentCard>
            </Col>
        </div>
    )
}

export default Test
