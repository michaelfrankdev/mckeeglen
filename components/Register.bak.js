import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const { user, signup } = useAuth()
  const router = useRouter()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      style={{
        width: '80%',
        margin: 'auto',
      }}>
      <h1 className="text-center my-3 ">Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Register

// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { useAuth } from '../context/AuthContext'

// const Register = () => {
//   const { user, signup } = useAuth()
//   const router = useRouter()
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   })

//   const handleSignup = async (e) => {
//     e.preventDefault()

//     try {
//       await signup(data.email, data.password)
//       router.push('/dashboard')
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div
//       style={{
//         width: '80%',
//         margin: 'auto',
//       }}>
//       <h1 className="text-center my-3 ">Signup</h1>
//       <Form onSubmit={handleSignup}>
//         <Form.Group className="mb-3" controlId="registerEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             required
//             onChange={(e) =>
//               setData({
//                 ...data,
//                 email: e.target.value,
//               })
//             }
//             value={data.email}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="registerPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             required
//             onChange={(e) =>
//               setData({
//                 ...data,
//                 password: e.target.value,
//               })
//             }
//             value={data.password}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Signup
//         </Button>
//       </Form>
//     </div>
//   )
// }

// export default Register
