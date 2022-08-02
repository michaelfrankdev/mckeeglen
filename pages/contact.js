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
              Please use this form to contact the McKee Glen HOA Board. All fields require input, except for the <em>Email Address</em> field which is read-only, pre-filled, with the the email address used to register for this website.
            </p>
            <p>To reach Hawthorne Management Company, please contact Association Manager Holly Browning using the following information:</p>
            <ul>
              <li>
                <p>
                  Email: <a href="mailto:hbrowning@hawthornemgmt.com">hbrowning@hawthornemgmt.com</a>
                </p>
              </li>
              <li>
                <p>
                  Phone: <a href="tel:704-377-0114">704-377-0114</a>, extension 119
                </p>
              </li>
              <li>
                <p>Fax: 704-347-4475</p>
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
