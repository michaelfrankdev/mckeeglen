import Link from 'next/link';
import { Nav, Tab, Form, Button } from 'react-bootstrap';

const AccessHandler = () => {
  return (
    <Tab.Container id='left-tabs-example' defaultActiveKey='login'>
      <Nav variant='tabs' className='mb-3'>
        <Nav.Item>
          <Nav.Link eventKey='login'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='register'>Register</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey='login'>
          <Form>
            <Form.Group className='mb-3' controlId='loginEmail'>
              <Form.Label>
                Email Address <sup>*</sup>
              </Form.Label>
              <Form.Control type='email' placeholder='username@email.com' />
              <Form.Text className='text-muted'>
                This is the email address on record with your Street Address.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='loginPassword'>
              <Form.Label>
                Password <sup>*</sup>
              </Form.Label>
              <Form.Control type='password' placeholder='********' />
              <Form.Text className='text-muted'>
                This is the password you set when you registered with the site.
              </Form.Text>
            </Form.Group>

            <Button variant='primary' type='submit'>
              Login
            </Button>
          </Form>
        </Tab.Pane>

        <Tab.Pane eventKey='register'>
          <Form>
            <Form.Group className='mb-3' controlId='registrationStreetNumber'>
              <Form.Label>
                Street Number <sup>*</sup>
              </Form.Label>
              <Form.Control type='text' placeholder='1234' />
              <Form.Text className='text-muted'>
                Enter your Street Number, the number(s) of your Street Address.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='registrationEmail'>
              <Form.Label>
                Email Address <sup>*</sup>
              </Form.Label>
              <Form.Control type='email' placeholder='username@email.com' />
              <Form.Text className='text-muted'>
                Enter the Email Address associated with your Street Address.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='registrationPassword'>
              <Form.Label>
                User Password <sup>*</sup>
              </Form.Label>
              <Form.Control type='password' placeholder='********' />
              <Form.Text className='text-muted'>
                Create a user password. Use{' '}
                <Link href='/help#creatingPasswords'>these guidelines</Link> for
                setting a password.
              </Form.Text>
            </Form.Group>

            <Button variant='primary' type='submit'>
              Register
            </Button>
          </Form>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default AccessHandler;
