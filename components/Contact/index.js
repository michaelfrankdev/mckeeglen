import { Col, Row, Form, Button } from 'react-bootstrap'

function ContactForm() {
  return (
    <Form
      style={{
        width: '80%',
        margin: 'auto',
        paddingTop: '20px',
      }}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name *</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address *</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message Destination: *</Form.Label>
        <Form.Select>
          <option disabled>Please select an option ...</option>
          <option>McKee Glen HOA Board</option>
          <option>Hawthorne Management</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Please include a message: *</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button className="formSubmitButton">Submit</Button>
    </Form>
  )
}

export default ContactForm
