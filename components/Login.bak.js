import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const { user, login } = useAuth()
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
  })

  // INITIALIZE STATE FOR SUBMIT STATUS
  const [isSubmit, setIsSubmit] = useState(false)

  // PROCESS LOGIN INPUT & DATA
  const handleLogin = async (e) => {
    console.clear()
    console.log('form submission attempted ...')
    e.preventDefault()

    setFormErrors(validate(formData))

    setIsSubmit(true)

    if (Object.keys(errors).length === 0) {
      console.log('form transmission attempted ...')
      try {
        await login(formData.email, formData.password)
        router.push('/dashboard')
      } catch (error) {
        console.log(error)
        console.log(error.code)
        console.log(error.message)
        switch (error.code) {
          case 'auth/user-not-found':
            setFormErrors({
              ...formErrors,
              email: 'Firebase: Email address not found.',
              password: '',
            })
            break
          case 'auth/invalid-email':
            setFormErrors({
              ...formErrors,
              email: 'Firebase: The email address is not valid.',
              password: '',
            })
            break
          case 'auth/wrong-password':
            setFormErrors({
              ...formErrors,
              email: '',
              password: 'Firebase: Incorrect password. Please try again.',
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
    // PUT REGEX FOR EMAIL ADDRESS TEST HERE
    if (!formDataInput.email) {
      errors.email = 'An email address is required.'
    }
    if (!formDataInput.password) {
      errors.password = 'A password is required.'
    }
    return errors
  }

  // UPDATE FORM ERRORS WHEN THE DOM IS CHANGED
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, formData, isSubmit])

  return (
    <div
      style={{
        width: '80%',
        margin: 'auto',
        paddingTop: '20px',
      }}>
      {/* <pre>{JSON.stringify(formData, undefined, 2)}</pre> */}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
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

        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
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
        <div id="loginEmailError" className="error-message">
          {formErrors.password}
        </div>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login

// v2
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { useAuth } from '../context/AuthContext'

// const Login = () => {
//   const { user, login } = useAuth()
//   const router = useRouter()

//   // INITIALIZE STATE FOR FORM DATA
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   })

//   // INITIALIZE STATE FOR FORM ERRORS
//   const [formErrors, setFormErrors] = useState({
//     email: '',
//     password: '',
//   })

//   // INITIALIZE STATE FOR SUBMIT STATUS
//   const [isSubmit, setIsSubmit] = useState(false)

//   // PROCESS LOGIN INPUT & DATA
//   const handleLogin = async (e) => {
//     e.preventDefault()

//     setFormErrors(validate(formData))

//     setIsSubmit(true)

//     try {
//       await login(formData.email, formData.password)
//       router.push('/dashboard')
//     } catch (error) {
//       console.log(error.code)
//       console.log(error.message)
//     }
//   }

//   // VALIDATE LOGIN INPUT VALUES
//   const validate = (formDataInput) => {
//     const errors = {}
//     // PUT REGEX FOR EMAIL ADDRESS TEST HERE
//     if (!formDataInput.email) {
//       errors.email = 'An email address is required.'
//     }
//     if (!formDataInput.password) {
//       errors.password = 'A password is required.'
//     }
//     return errors
//   }

//   // UPDATE FORM ERRORS WHEN THE DOM IS CHANGED
//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//     }
//   }, [formErrors, formData, isSubmit])

//   return (
//     <div
//       style={{
//         width: '80%',
//         margin: 'auto',
//         paddingTop: '20px',
//       }}>
//       {/* <h1 className="text-center my-3 ">Login</h1> */}
//       <pre>{JSON.stringify(formData, undefined, 2)}</pre>
//       <Form onSubmit={handleLogin}>
//         <Form.Group controlId="loginEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 email: e.target.value,
//               })
//             }
//             value={formData.email}
//             type="text"
//             placeholder="Enter email"
//           />
//           <div id="loginEmailError" className="error-message">
//             {formErrors.email}
//           </div>
//         </Form.Group>

//         <Form.Group controlId="loginPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 password: e.target.value,
//               })
//             }
//             value={formData.password}
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Group>
//         <div id="loginEmailError" className="error-message">
//           {formErrors.password}
//         </div>
//         <Button variant="primary" type="submit">
//           Login
//         </Button>
//       </Form>
//     </div>
//   )
// }

// export default Login

// v1

// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { useAuth } from '../context/AuthContext'

// const Login = () => {
//   const { user, login } = useAuth()
//   const router = useRouter()
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   })
//   const [formErrors, setFormErrors] = useState({
//     emailError: '',
//     passwordError: '',
//   })

//   const handleLogin = async (e) => {
//     e.preventDefault()

//     try {
//       await login(data.email, data.password)
//       router.push('/dashboard')
//     } catch (error) {
//       console.log(error.code)
//       console.log(error.message)
//       switch (error.code) {
//         case 'auth/user-not-found':
//           setFormErrors({ ...formErrors, emailError: 'Email address not found.' })
//           break
//         case 'auth/invalid-email)':
//           setFormErrors({ ...formErrors, emailError: 'The email address is not valid.' })
//           break
//         case 'auth/wrong-password':
//           setFormErrors({ ...formErrors, passwordError: 'Incorrect password. Please try again.' })
//           break
//         case 'auth/too-many-requests':
//           alert('Unsuccessful login attempts exceeded. A password reset is required.')
//           break
//         default:
//           alert('A critical error has occured. Please notify an administrator.')
//       }
//     }
//   }

//   return (
//     <div
//       style={{
//         width: '80%',
//         margin: 'auto',
//       }}>
//       <h1 className="text-center my-3 ">Login</h1>
//       <Form onSubmit={handleLogin}>
//         <Form.Group controlId="loginEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             onChange={(e) =>
//               setData({
//                 ...data,
//                 email: e.target.value,
//               })
//             }
//             value={data.email}
//             required
//             type="email"
//             placeholder="Enter email"
//           />
//           <div id="loginEmailError" className="error-message">
//             {formErrors.emailError}
//           </div>
//         </Form.Group>

//         <Form.Group controlId="loginPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             onChange={(e) =>
//               setData({
//                 ...data,
//                 password: e.target.value,
//               })
//             }
//             value={data.password}
//             required
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Group>
//         <div id="loginEmailError" className="error-message">
//           {formErrors.passwordError}
//         </div>
//         <Button variant="primary" type="submit">
//           Login
//         </Button>
//       </Form>
//     </div>
//   )
// }

// export default Login
