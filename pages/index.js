import Head from "next/head"
import { Col, Container, Row } from "react-bootstrap"
import AccessHandler from "../components/AccessHandler/AccessHandler"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>McKee Glen HOA | Welcome</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.heading}>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span:5, offset: 3}}>
            <AccessHandler></AccessHandler>
          </Col>
        </Row>
      </Container>
    </>
  )
}