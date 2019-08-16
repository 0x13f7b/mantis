/**
 * @flow strict
 * @format
 */

import React from 'react';
import createUserMutation from '../mutation/createUser';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Card,
} from 'reactstrap';

type State = {|
  email: ?string,
  password: ?string,
  firstName: ?string,
  lastName: ?string,
  companyName: ?string,
|};
type Props = {||};

class CreateUser extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    companyName: '',
  };

  onFieldChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    const { value = '', name } = (event.target: window.HTMLInputElement);
    this.setState({ [name]: value });
  };

  onSubmit = (event: SyntheticEvent<*>) => {
    event.preventDefault();

    const { email, password, firstName, lastName, companyName } = this.state;

    createUserMutation(
      {
        email,
        password,
        firstName,
        lastName,
        companyName,
      },
      (response): void => {
        const { createUser: {apiToken, id} } = response;
        localStorage.setItem('apiToken', apiToken);
        localStorage.setItem('userId', id);
        window.location.reload();
      },
      err => {
        //@todo: error boundary
      },
    );
  };

  render() {
    const { email, password, firstName, lastName, companyName } = this.state;
    return (
      <Container>
        <Card style={{ padding: '100px', marginTop: '40px' }}>
          <Row>
            <Col md={3} />
            <Col md={6}>
              <div className={'text-center'}>
                <h3>Mantis</h3>
                <h4>High Availability Communications Dashboard</h4>
                <span>Use this form to signup for your account</span>
              </div>
              <br />
            </Col>
            <Col md={3} />
          </Row>
          <Row>
            <Col md={3} />
            <Col md={6}>
              <Form>
                <FormGroup row={true}>
                  <Label for='firstName' hidden>
                    First Name
                  </Label>
                  <Input
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='First Name'
                    value={firstName}
                    onChange={this.onFieldChange}
                  />
                </FormGroup>{' '}
                <FormGroup row={true}>
                  <Label for='lastName' hidden>
                    Last Name
                  </Label>
                  <Input
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={this.onFieldChange}
                  />
                </FormGroup>{' '}
                <FormGroup row={true}>
                  <Label for='companyName' hidden>
                    Company Name
                  </Label>
                  <Input
                    type='text'
                    name='companyName'
                    id='companyName'
                    placeholder='Company Name'
                    value={companyName}
                    onChange={this.onFieldChange}
                  />
                </FormGroup>{' '}
                <FormGroup row={true}>
                  <Label for='email' hidden>
                    Email
                  </Label>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    value={email}
                    onChange={this.onFieldChange}
                  />
                </FormGroup>{' '}
                <FormGroup row={true}>
                  <Label for='password' hidden>
                    Password
                  </Label>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={password}
                    onChange={this.onFieldChange}
                  />
                </FormGroup>{' '}
                <Button onClick={this.onSubmit} color='success'>
                  Login
                </Button>
              </Form>
            </Col>
            <Col md={3} />
          </Row>
        </Card>
      </Container>
    );
  }
}

export default CreateUser;
