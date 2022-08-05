import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import RegisterPanel from '../components/Register'

export default function Home() {
  return (
    <>
      <Head>
        <title>Register | Pond at McKee Glen</title>
      </Head>
      <Container>
        <Row>
          <Col className="page-header">
            <h2 className="page-heading">Member Registration</h2>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <p>
              Thank you for taking a moment to register as a member of our community! Creating a user account for this website allows access to community-related news, documents and information. All that is required to register is an email address and a password; you will never be asked for other
              information to register for this website. Upon successful registration, you will be automatically logged in and directed to the protected user area. Please make note of the following:
            </p>
            <ul>
              <li>
                <strong>Your personal information and privacy:</strong>
                <p>
                  <small>
                    The email address you provide to create an account for accessing protected areas of this website is not shared or accessible to any third party that conducts business with <em>McKee Glen Homeowners Association</em> or <em>Hawthorne Management Company</em>. The email address you
                    provide is stored only to authenticate and authorize you as a user, allowing access to protected areas of this website. Additionally, the email address you provide will not be used for any purpose other than managing your account on your behalf as requested, for example, a
                    password reset, which can be done by <a href="mailto:thepondatmckeeglen@gmail.com">emailing the McKee Glen Homeowners Association</a>.
                  </small>
                </p>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <RegisterPanel />
          </Col>
        </Row>
      </Container>
    </>
  )
}
