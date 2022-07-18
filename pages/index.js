import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import LoginPanel from '../components/Login'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user } = useAuth()
  return (
    <>
      <Head>
        <title>Home | Pond at McKee Glen</title>
      </Head>
      <Container>
        <Row>
          <Col className="page-header">
            <h2 className="page-heading">Welcome!</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officia dicta, minus repudiandae est vel eius et dolorum, quia libero alias facilis vitae ipsa maiores id consectetur nobis quo magni cumque vero expedita placeat dolore! Iste obcaecati, doloribus optio vitae praesentium
              repudiandae voluptate quisquam ipsam quos nobis voluptatibus excepturi at!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officia dicta, minus repudiandae est vel eius et dolorum, quia libero alias facilis vitae ipsa maiores id consectetur nobis quo magni cumque vero expedita placeat dolore! Iste obcaecati, doloribus optio vitae praesentium
              repudiandae voluptate quisquam ipsam quos nobis voluptatibus excepturi at!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officia dicta, minus repudiandae est vel eius et dolorum, quia libero alias facilis vitae ipsa maiores id consectetur nobis quo magni cumque vero expedita placeat dolore! Iste obcaecati, doloribus optio vitae praesentium
              repudiandae voluptate quisquam ipsam quos nobis voluptatibus excepturi at!
            </p>
          </Col>
          {user ? (
            ''
          ) : (
            <Col className="page-header" md={4}>
              <h2 className="page-heading unprotected">Login</h2>
              <LoginPanel />
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}
