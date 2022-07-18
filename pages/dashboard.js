import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Pond at McKee Glen</title>
      </Head>
      <Container>
        <Row>
          <Col className="page-header">
            <h2 className="page-heading">Dashboard</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error officia dicta, minus repudiandae est vel eius et dolorum, quia libero alias facilis vitae ipsa maiores id consectetur nobis quo magni cumque vero expedita placeat dolore! Iste obcaecati, doloribus optio vitae praesentium
              repudiandae voluptate quisquam ipsam quos nobis voluptatibus excepturi at!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3 className="page-heading">Documents</h3>
            <ul>
              <li>
                <p>Document #1</p>
              </li>
              <li>
                <p>Document #2</p>
              </li>
              <li>
                <p>Document #3</p>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="page-heading">Newsletters</h3>
            <ul>
              <li>
                <p>Edition 07.01.22 (Download)</p>
              </li>
              <li>
                <p>Edition 06.01.22 (Download)</p>
              </li>
              <li>
                <p>Edition 05.01.22 (Download)</p>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="page-heading">Meetings</h3>
            <p>Upcoming</p>
            <ul>
              <li>
                <p>07.21.22 (Agenda)</p>
              </li>
              <li>
                <p>08.21.22 (Agenda)</p>
              </li>
              <li>
                <p>09.21.22 (Agenda)</p>
              </li>
            </ul>
            <p>Past</p>
            <ul>
              <li>
                <p>05.21.22 (Minutes)</p>
              </li>
              <li>
                <p>04.21.22 (Minutes)</p>
              </li>
              <li>
                <p>03.21.22 (Minutes)</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
