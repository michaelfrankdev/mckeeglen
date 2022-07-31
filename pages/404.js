import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found | Pond at McKee Glen</title>
      </Head>
      <Container>
        <Row>
          <Col className="panel">
            <h2 className="page-heading">Not Found</h2>
            <p>We&apos;re sorry, but the page you requested does not exist or is not available at this time. Please try again later.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound
