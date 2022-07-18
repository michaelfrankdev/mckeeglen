import Head from 'next/head'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

const Faq = () => {
  return (
    <>
      <Head>
        <title>Community FAQ | Pond at McKee Glen</title>
      </Head>
      <Container>
        <Row>
          <Col className="page-header">
            <h2 className="page-heading">Frequently Asked Questions</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officia dicta, minus repudiandae est vel eius et dolorum, quia libero alias facilis vitae ipsa maiores id consectetur nobis quo magni cumque vero expedita placeat dolore! Iste obcaecati, doloribus optio vitae praesentium
              repudiandae voluptate quisquam ipsam quos nobis voluptatibus excepturi at!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="none">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Lorem ipsum dolor, sit amet consectetur adipisicing elit?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officia dicta, minus repudiandae est vel eius et dolorum, quia libero alias facilis vitae ipsa maiores id consectetur nobis quo magni cumque vero expedita placeat dolore! Iste obcaecati, doloribus optio vitae
                    praesentium repudiandae voluptate quisquam ipsam quos nobis voluptatibus excepturi at!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Lorem ipsum dolor, sit amet consectetur adipisicing elit?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officia dicta, minus repudiandae est vel eius et dolorum, quia libero alias facilis vitae ipsa maiores id consectetur nobis quo magni cumque vero expedita placeat dolore! Iste obcaecati, doloribus optio vitae
                    praesentium repudiandae voluptate quisquam ipsam quos nobis voluptatibus excepturi at!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Faq
