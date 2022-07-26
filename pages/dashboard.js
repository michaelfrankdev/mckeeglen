import Head from 'next/head'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { BoxArrowUpRight } from 'react-bootstrap-icons'

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
              Welcome to the community member space of the website. Aside from the Contact page, this is the only other private space on the website. Documents and information private to our community will be posted here. If you have any content that you feel is beneficial to the community at large
              and would like to see it posted, please use the form on the{' '}
              <Link href="/contact" passHref>
                <a>Contact page</a>
              </Link>{' '}
              to contact the HOA Board with your ideas.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3 className="page-heading">Documents</h3>
            <ul>
              <li>
                <a href="https://drive.google.com/file/d/1fO8m2bYTKqIBAyZRlmlZcZoBzYGWfTY_/view?usp=sharing" target="_blank" rel="noreferrer">
                  Architectural Review Committee Form
                  <BoxArrowUpRight size={14} className="mx-2 mb-2" />
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1I4FGmHPhHq9l5wY2WuTsKUpdC6thw9_W/view?usp=sharing" target="_blank" rel="noreferrer">
                  Bylaws - Pond At McKee Glen
                  <BoxArrowUpRight size={14} className="mx-2 mb-2" />
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1E2DYfhBCHvJsGCnQUpYdXaSYatDQJNFd/view?usp=sharing" target="_blank" rel="noreferrer">
                  CC&amp;Rs - Pond At McKee Glen
                  <BoxArrowUpRight size={14} className="mx-2 mb-2" />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="page-heading">Newsletters</h3>
            <ul>
              <li>Coming Soon</li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="page-heading">Meetings</h3>
            <h6>Upcoming</h6>
            <ul>
              <li>Coming Soon</li>
            </ul>
            <h6>Past</h6>
            <ul>
              <li>Coming Soon</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
