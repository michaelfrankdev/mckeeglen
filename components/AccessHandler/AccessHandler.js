import { Nav, Tab, Form, Button } from "react-bootstrap";

const AccessHandler = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="login">

      <Nav variant="tabs" className="mb-3">
        <Nav.Item>
          <Nav.Link eventKey="login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="register">Register</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="login">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="username@email.com" />
              <Form.Text className="input-context text-muted">
                This is the email address on record with your Street Address.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="********" />
              <Form.Text className="text-muted">
                This is the password you set when you registered with the site.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Tab.Pane>

        <Tab.Pane eventKey="register">

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Street Number</Form.Label>
              <Form.Control type="email" placeholder="1234" />
              <Form.Text className="text-muted">
                Enter your Street Number, the numbers of your Street
                Address.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="username@email.com" />
              <Form.Text className="text-muted">
                Enter the Email Address you provided to the Management Company.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>User Password</Form.Label>
              <Form.Control type="password" placeholder="********" />
              <Form.Text className="text-muted">
                Create a password that is more than four characters long.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>

        </Tab.Pane>
      </Tab.Content>

    </Tab.Container>
  );
};

export default AccessHandler;
