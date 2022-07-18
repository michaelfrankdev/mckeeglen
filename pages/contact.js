import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import ContactForm from '../components/Contact'

// https://usebasin.com/app/forms/21284/notification_email_settings/edit
// https://usebasin.com/guides/jamstack/nextjs

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Pond at McKee Glen</title>
      </Head>
      <Container>
        <Row>
          <Col className="page-header">
            <h2 className="page-heading">Contact</h2>
          </Col>
        </Row>
        <Row>
          <Col>
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
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
