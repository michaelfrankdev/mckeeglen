import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'

const LoginPanel = () => {
  const { login } = useAuth()
  const router = useRouter()
  const errors = {}

  // INITIALIZE STATE FOR FORM DATA
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // INITIALIZE STATE FOR FORM ERRORS
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    emailValid: '',
    passwordValid: '',
  })

  // INITIALIZE STATE FOR SUBMIT STATUS
  const [isSubmit, setIsSubmit] = useState(false)

  // INITIALIZE MODAL FOR CONTEXT MESSAGES
  const [modalVisibility, setModalVisibility] = useState(false)

  // PROCESS LOGIN INPUT & DATA
  const handleLogin = async (e) => {
    e.preventDefault()
    console.log('form submission attempted ...')

    setFormErrors(validate(formData))

    setIsSubmit(true)

    if (Object.keys(errors).length === 0) {
      try {
        console.log('form transmission attempted ...')
        await login(formData.email, formData.password)
        router.push('/dashboard')
      } catch (error) {
        console.log(error)
        switch (error.code) {
          case 'auth/user-not-found':
            setFormErrors({
              ...formErrors,
              email: 'Email address not found.',
              password: '',
              emailValid: false,
              passwordValid: true,
            })
            break
          case 'auth/invalid-email':
            setFormErrors({
              ...formErrors,
              email: 'The email address is not valid.',
              password: '',
              emailValid: false,
              passwordValid: true,
            })
            errors.break
          case 'auth/wrong-password':
            setFormErrors({
              ...formErrors,
              email: '',
              password: 'Incorrect password. Please try again.',
              emailValid: true,
              passwordValid: false,
            })

            break
          case 'auth/too-many-requests':
            alert('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)')
            break
          default:
            alert('A critical error has occured. Please notify an administrator.')
        }
      }
    } else {
      console.log('form submission canceled ...')
    }
  }

  // VALIDATE LOGIN INPUT VALUES
  const validate = (formDataInput) => {
    const regExr = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/g
    if (!formDataInput.email.match(regExr)) {
      // if (!formDataInput.email) {
      errors.email = 'An email address is required.'
      errors.emailValid = false
    }
    if (!formDataInput.password) {
      errors.password = 'A password is required.'
      errors.passwordValid = false
    }
    return errors
  }

  // UPDATE FORM ERRORS WHEN THE DOM IS CHANGED
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, formData, isSubmit])

  // HANDLE MODAL STATE
  const handleClose = () => setModalVisibility(false)
  const handleShow = () => setModalVisibility(true)

  return (
    <>
      <div className="input-form">
        {/* <pre>{JSON.stringify(formErrors, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(formData, undefined, 2)}</pre> */}
        <h5 className="page-heading">Login</h5>
        <Form onSubmit={handleLogin}>
          <Row>
            {/* EMAIL */}
            <Form.Group controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className={formErrors.emailValid === false ? 'error-control' : 'form-control'}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                value={formData.email}
                type="text"
                placeholder="Enter email"
              />
              <div id="loginEmailError" className="error-message">
                {formErrors.email}
              </div>
            </Form.Group>
            {/* PASSWORD */}
          </Row>
          <Row>
            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={formErrors.passwordValid === false ? 'error-control' : 'form-control'}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                value={formData.password}
                type="password"
                placeholder="Password"
              />
              <div id="loginEmailError" className="error-message">
                {formErrors.password}
              </div>
            </Form.Group>
          </Row>
          <Row>
            <Col sm={4}>
              <Button className="formSubmitButton" type="submit">
                Login
              </Button>
            </Col>
            <Col sm={8}>
              <a className="btn pt-4" onClick={handleShow}>
                Forgot Password?
              </a>
            </Col>
          </Row>
        </Form>
      </div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={modalVisibility} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Password Reset</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          If you have forgotten your password, please send an email to our website team at <a href="mailto:thepondatmckeeglen@gmail.com">thepondatmckeeglen@gmail.com</a>.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginPanel
