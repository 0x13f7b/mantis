/**
 * @flow strict
 * @format
 */

import React from 'react';
import loginMutation from '../mutation/login';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Alert,
  Input,
  Label,
  Row,
  Card,
} from 'reactstrap';

type State = {|
  email: ?string,
  password: ?string,
  loginError: boolean,
|};
type Props = {||};

class Login extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
    loginError: false,
  };

  onFieldChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    const { value = '', name } = (event.target: window.HTMLInputElement);
    this.setState({ [name]: value });
  };

  onSubmit = (event: SyntheticEvent<*>) => {
    event.preventDefault();
    this.setState({ loginError: false });
    const { email = '', password = '' } = this.state;
    loginMutation(
      email,
      password,
      (response): void => {
        const { login = null } = response;
        if (login !== null) {
          const { apiToken, id } = login;
          localStorage.setItem('apiToken', apiToken);
          localStorage.setItem('userId', id);
          window.location.reload();
        } else {
          this.setState({ loginError: true });
        }
      },
      err => {
        //@todo: error boundary
      },
    );
  };

  render() {
    const { email, password, loginError } = this.state;
    return (
      <Container>
        <Card style={{ padding: '100px', marginTop: '40px' }}>
          <Row>
            <Col md={3} />
            <Col md={6}>
              <div className={'text-center'}>
                <h3>Mantis</h3>
                <h4>High Availability Communications Dashboard</h4>
                <br />
              </div>
            </Col>
            <Col md={3} />
          </Row>
          <Row>
            <Col md={3} />
            <Col md={6}>
              <Form>
                {loginError && <Alert color='danger'>Username and/or password is wrong.</Alert>}
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

export default Login;
