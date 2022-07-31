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
            <h2 className="page-heading">Contact Us</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p>
              Please use this form to contact either the McKee Glen HOA Board, or Hawthorne Property Management. All fields require input, except for the <em>Email Address</em> field which is read-only, pre-filled, with the the email address used to register your account for this website. Please
              make note of these important details when using this form:
            </p>
            <ul>
              <li>
                <strong>Message Destination</strong>
                <p>
                  This field lets the HOA Board Secretary know where your message should be directed - all messages are initially received by the HOA Board Secretary. Messages marked for <em>Hawthorne Management</em> will be forwarded to Hawthorne Management Company within 24 hours of receipt by the
                  HOA Board Secretary.
                </p>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
