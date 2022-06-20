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
            <h1 className={styles.heading}>Welcome</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }} sm={12}>
            <AccessHandler></AccessHandler>
          </Col>
        </Row>
      </Container>
    </>
  );
}