import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import LoginPanel from '../components/Login'
import { useAuth } from '../context/AuthContext'
import { BoxArrowUpRight } from 'react-bootstrap-icons'
import Image from 'next/image'

export default function Home() {
  const { user } = useAuth()
  return (
    <>
      <Head>
        <title>Home | Pond at McKee Glen</title>
      </Head>
      <Container>
        <Row>
          <Col className="page-header">
            <h2 className="page-heading">Welcome!</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Welcome to The Pond at McKee Glen&apos;s community website. Our community is the newest addition in the growing Town of Matthews, just east of Charlotte, North Carolina.</p>
            <p>
              Our neighborhood is located on McKee Road,{' '}
              <a href="https://www.google.com/maps/place/35°04'56.1%22N+80°43'00.2%22W/@35.082262,-80.718901,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x208ea48af0845b3c!7e2!8m2!3d35.0822625!4d-80.7167065" target="_blank" rel="noreferrer">
                situated between Pleasant Plains and Weddington Roads
              </a>
              <BoxArrowUpRight size={12} className="mx-1 mb-1" />, which are convenient to many stores and shops, namely within{' '}
              <a href="https://astonprop.propertycapsule.com/p/commercial-real-estate-listings/Matthews-NC-28105/mckeefarms#overview" target="_blank" rel="noreferrer">
                McKee Farms
                <BoxArrowUpRight size={12} className="mx-1 mb-1" />
              </a>{' '}
              and{' '}
              <a href="https://www.childressklein.com/plantation-market-shopping-center" target="_blank" rel="noreferrer">
                Plantation Market
                <BoxArrowUpRight size={12} className="mx-1 mb-1" />
              </a>
              and many community resources, such as{' '}
              <a href="https://www.ymcacharlotte.org/branches/brace-family" target="_blank" rel="noreferrer">
                Brace Family YMCA
                <BoxArrowUpRight size={12} className="mx-1 mb-1" />
              </a>
              , and{' '}
              <a href="https://maps.mecklenburgcountync.gov/MecklenburgCountyParkExplorer/" target="_blank" rel="noreferrer">
                municipal green spaces
                <BoxArrowUpRight size={12} className="mx-1 mb-1" />
              </a>
              , which offer walking and biking trails, outdoor sporting areas and gathering spots open to the community at-large.
            </p>
            <p>
              The Pond at McKee Glen was designed and constructed by{' '}
              <a href="https://www.eastwoodhomes.com" target="_blank" rel="noreferrer">
                Eastwood Homes
                <BoxArrowUpRight size={12} className="mx-1 mb-1" />
              </a>{' '}
              between 2019 and 2021. The Pond at McKee Glen Homeowner&apos;s Association works in cooperation with{' '}
              <a href="https://www.hawthornemgmt.com" target="_blank" rel="noreferrer">
                Hawthorne Management Company
                <BoxArrowUpRight size={12} className="mx-1 mb-1" />
              </a>
              .
            </p>
          </Col>
          <Col md={4}>
            <LoginPanel />
          </Col>
        </Row>
      </Container>
    </>
  )
}
