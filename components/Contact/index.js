import { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'

function ContactForm() {
  const { user } = useAuth()
  const errors = {}

  // INITIALIZE DEFAULT FORM STATE
  const initialState = {
    firstName: '',
    lastName: '',
    emailAddress: user.email,
    attentionField: '',
    messageSubject: '',
    enclosedMessage: '',
  }

  // INITIALIZE STATE FOR FORM DATA
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: user.email,
    attentionField: '',
    messageSubject: '',
    enclosedMessage: '',
  })

  // INITIALIZE STATE FOR FORM ERRORS
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    attentionField: '',
    messageSubject: '',
    enclosedMessage: '',
    firstNameValid: '',
    lastNameValid: '',
    emailAddressValid: '',
    attentionFieldValid: '',
    messageSubjectValid: '',
    enclosedMessageValid: '',
  })

  const handleSubmission = (event) => {
    event.preventDefault()

    console.log('form submission initiated ...')

    setFormErrors(validate(formData))

    if (Object.keys(errors).length === 0) {
      console.log('form submission transferring ...')
      fetch(process.env.NEXT_PUBLIC_BASIN_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          setFormData({ ...initialState })
          console.log(response)
          alert('Your message was sent successfully.')
        })
        .catch((error) => {
          console.log('Error:', error)
          alert('A critical error has occured. Please notify an administrator.')
        })
    } else {
      console.log('form submission canceled ...')
    }
  }

  // VALIDATE LOGIN INPUT VALUES
  const validate = (formDataInput) => {
    if (!formDataInput.firstName) {
      errors.firstName = 'A first name is required to continue.'
      errors.firstNameValid = false
    }
    if (!formDataInput.lastName) {
      errors.lastName = 'A last name is required to continue.'
      errors.lastNameValid = false
    }
    if (!formDataInput.attentionField) {
      errors.attentionField = 'A selection is required to continue.'
      errors.attentionFieldValid = false
    }
    if (!formDataInput.messageSubject) {
      errors.messageSubject = 'A subject line is required to continue.'
      errors.messageSubjectValid = false
    }
    if (!formDataInput.enclosedMessage) {
      errors.enclosedMessage = 'A message is required to continue.'
      errors.enclosedMessageValid = false
    }
    return errors
  }

  return (
    <>
      {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
      {/* <pre>Error State: {JSON.stringify(formErrors, null, 2)}</pre> */}
      <Form className="input-form" onSubmit={handleSubmission}>
        <Row>
          <Col lg={6} md={12}>
            <Form.Group controlId="contactFirstName">
              <Form.Label>
                First Name<sup>*</sup>
              </Form.Label>
              <Form.Control
                className={formErrors.firstNameValid === false ? 'error-control' : 'form-control'}
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
              <div id="formFirstNameError" className="error-message">
                {formErrors.firstName}
              </div>
            </Form.Group>
          </Col>
          <Col lg={6} md={12}>
            <Form.Group controlId="contactLastName">
              <Form.Label>
                Last Name<sup>*</sup>
              </Form.Label>
              <Form.Control
                className={formErrors.lastNameValid === false ? 'error-control' : 'form-control'}
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
              <div id="formLastNameError" className="error-message">
                {formErrors.lastName}
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="contactEmail">
          <Form.Label>
            Email Address<sup>*</sup>
          </Form.Label>
          <Form.Control className={formErrors.emailAddressValid === false ? 'error-control' : 'form-control'} type="text" readOnly value={user.email} />
          <div id="formEmailAddressError" className="error-message">
            {formErrors.emailAddress}
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Message Destination<sup>*</sup>
          </Form.Label>
          <Form.Select
            className={formErrors.attentionFieldValid === false ? 'error-control' : 'form-control'}
            onChange={(e) =>
              setFormData({
                ...formData,
                attentionField: e.target.value,
              })
            }
            // USE A TERNARY OPERATOR HERE TO DETERMINE WHAT TO PLACE
            value={formData.attentionField ? formData.attentionField : 'Please select an option ...'}>
            <option disabled>Please select an option ...</option>
            <option value="McKee Glen HOA Board">McKee Glen HOA Board</option>
            <option value="Hawthorne Management">Hawthorne Management</option>
          </Form.Select>
          <div id="formAttentionFieldError" className="error-message">
            {formErrors.attentionField}
          </div>
        </Form.Group>
        <Form.Group controlId="contactMessageSubject">
          <Form.Label>
            Subject<sup>*</sup>
          </Form.Label>
          <Form.Control
            className={formErrors.messageSubjectValid === false ? 'error-control' : 'form-control'}
            type="text"
            placeholder="Enter your topic or subject here."
            onChange={(e) =>
              setFormData({
                ...formData,
                messageSubject: e.target.value,
              })
            }
            value={formData.messageSubject}
          />
          <div id="formMessageSubjectError" className="error-message">
            {formErrors.messageSubject}
          </div>
        </Form.Group>
        <Form.Group controlId="contactMessage">
          <Form.Label>
            Message<sup>*</sup>
          </Form.Label>
          <Form.Control
            className={formErrors.enclosedMessageValid === false ? 'error-control' : 'form-control'}
            as="textarea"
            placeholder="Please enter your message here."
            rows={7}
            onChange={(e) =>
              setFormData({
                ...formData,
                enclosedMessage: e.target.value,
              })
            }
            value={formData.enclosedMessage}
          />
          <div id="formEnclosedMessageError" className="error-message">
            {formErrors.enclosedMessage}
          </div>
        </Form.Group>
        <Button className="formSubmitButton" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default ContactForm
