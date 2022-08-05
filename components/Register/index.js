import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'

const RegisterPanel = () => {
  const { signup } = useAuth()
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

  // PROCESS LOGIN INPUT & DATA
  const handleSignup = async (e) => {
    console.clear()
    console.log('form submission attempted ...')
    e.preventDefault()

    setFormErrors(validate(formData))

    setIsSubmit(true)

    if (Object.keys(errors).length === 0) {
      console.log('form transmission attempted ...')
      try {
        await signup(formData.email, formData.password)
        router.push('/dashboard')
      } catch (error) {
        console.log(error)
        switch (error.code) {
          case 'auth/invalid-email':
            setFormErrors({
              ...formErrors,
              email: 'The email address is not valid.',
              password: '',
              emailValid: false,
              passwordValid: true,
            })
            break
          case 'auth/email-already-in-use':
            setFormErrors({
              ...formErrors,
              email: 'Email address is already registered.',
              password: '',
              emailValid: false,
              passwordValid: true,
            })
            break
          case 'auth/weak-password':
            setFormErrors({
              ...formErrors,
              email: '',
              password: 'Please set a password greater than six characters.',
              emailValid: true,
              passwordValid: false,
            })
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

  return (
    <div className="input-form">
      {/* <pre>{JSON.stringify(formData, undefined, 2)}</pre> */}
      <h5 className="page-heading">Register</h5>
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="signupEmail">
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
          <div id="signupEmailError" className="error-message">
            {formErrors.email}
          </div>
        </Form.Group>

        <Form.Group controlId="signupPassword">
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
        </Form.Group>
        <div id="signupEmailError" className="error-message">
          {formErrors.password}
        </div>
        <Button className="formSubmitButton" type="submit">
          Register and Login
        </Button>
      </Form>
    </div>
  )
}

export default RegisterPanel
