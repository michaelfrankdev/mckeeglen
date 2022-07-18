import { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'

function ContactForm() {
  const errors = {}

  // INITIALIZE STATE FOR FORM DATA
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    attentionField: '',
    enclosedMessage: '',
  })

  // INITIALIZE STATE FOR FORM ERRORS
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    messageDestination: '',
    enclosedMessage: '',
  })

  const handleSubmission = async (e) => {
    e.preventDefault()
    // console.log(formData)
    alert(`Data to be submitted:\n\n${JSON.stringify(formData, null, 2)}`)
  }

  return (
    <>
      {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
      <Form
        style={{
          width: '80%',
          margin: 'auto',
          paddingTop: '20px',
        }}
        onSubmit={handleSubmission}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="contactFirstName">
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    firstName: e.target.value,
                  })
                }
                value={formData.firstName}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="contactLastName">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value,
                  })
                }
                value={formData.lastName}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Label>Email Address *</Form.Label>
          <Form.Control
            type="text"
            placeholder="username@domain.com"
            onChange={(e) =>
              setFormData({
                ...formData,
                emailAddress: e.target.value,
              })
            }
            value={formData.emailAddress}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message Destination: *</Form.Label>
          <Form.Select
            name="attentionField"
            onChange={(e) =>
              setFormData({
                ...formData,
                attentionField: e.target.value,
              })
            }
            defaultValue="Please select an option ...">
            <option disabled>Please select an option ...</option>
            <option value="McKee Glen HOA Board">McKee Glen HOA Board</option>
            <option value="Hawthorne Management">Hawthorne Management</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Label>Please include a message: *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            onChange={(e) =>
              setFormData({
                ...formData,
                enclosedMessage: e.target.value,
              })
            }
            value={formData.enclosedMessage}
          />
        </Form.Group>
        <Button className="formSubmitButton" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default ContactForm
