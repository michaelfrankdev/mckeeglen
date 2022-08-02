import Head from 'next/head'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowUpRightSquare, BoxArrowUpRight } from 'react-bootstrap-icons'

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
              </Link>
              <ArrowUpRightSquare size={14} className="mx-1 mb-1" /> to communicate with the HOA Board.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-4">
            <h2 className="page-heading">Important Announcement</h2>
            <p>
              Please{' '}
              <a href="https://www.google.com" target="_blank" rel="noreferrer">
                use this link
              </a>
              <ArrowUpRightSquare size={14} className="mx-1 mb-1" /> to fill out the form.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-4" lg={4} md={6}>
            <h3 className="page-heading">Documents</h3>
            <ul>
              <li>
                <a href="https://drive.google.com/file/d/1fO8m2bYTKqIBAyZRlmlZcZoBzYGWfTY_/view?usp=sharing" target="_blank" rel="noreferrer">
                  Architectural Review Committee Form
                  <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1I4FGmHPhHq9l5wY2WuTsKUpdC6thw9_W/view?usp=sharing" target="_blank" rel="noreferrer">
                  Bylaws - Pond At McKee Glen
                  <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1E2DYfhBCHvJsGCnQUpYdXaSYatDQJNFd/view?usp=sharing" target="_blank" rel="noreferrer">
                  CC&amp;Rs - Pond At McKee Glen
                  <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                </a>
              </li>
            </ul>
          </Col>
          <Col className="mb-4" lg={3} md={6}>
            <h3 className="page-heading">Newsletters</h3>
            <ul>
              <li>
                {' '}
                <a href="https://drive.google.com/file/d/1VPUCxBC_dE-IO5LQ260tNqVONnJ1h_Ag/view" target="_blank" rel="noreferrer">
                  March 2022
                  <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                </a>
              </li>
            </ul>
          </Col>
          <Col className="mb-4" lg={3} md={6}>
            <h3 className="page-heading">Upcoming Events</h3>
            <ul>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  SummerBash
                  <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                </a>
                <br />
                08/20/2022, 11am - 2pm
              </li>
            </ul>
          </Col>
          <Col className="mb-4" lg={2} md={6}>
            <h3 className="page-heading">Meetings</h3>
            <h6>Upcoming (Agendas)</h6>
            <ul>
              <li>No meetings are scheduled at this time.</li>
            </ul>
            <h6>Past (Minutes)</h6>
            <ul>
              <li>
                <a href="https://drive.google.com/file/d/1UjqpQLl3ZyEw2dhg5_aybJL-5YnvEuaL/view" target="_blank" rel="noreferrer">
                  03/24/2022
                  <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1QM2OMYuWgzk5TSF4VizSt7ftqKKXk1tk/view" target="_blank" rel="noreferrer">
                  05/05/2022
                  <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1gXYvJvbm6YVGEoZbMNdCYbHv-23cjcLG/view" target="_blank" rel="noreferrer">
                  05/26/2022
                  <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1fpg9wNAlFYlNUfQwmIcKhzb8b5jxxCET/view" target="_blank" rel="noreferrer">
                  06/27/2022
                  <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
