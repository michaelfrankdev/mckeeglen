import Head from 'next/head'
import Link from 'next/link'
import { Accordion, Col, Container, Row, Table } from 'react-bootstrap'
import { ArrowUpRightSquare, BoxArrowUpRight, TelephoneOutbound } from 'react-bootstrap-icons'

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
              Below you&apos;ll find answers to questions common to existing and new Homeowners. If there is a answer to a question that you did not find here, please use the form on the{' '}
              <Link href="/contact" passHref>
                <a>Contact page</a>
              </Link>
              <ArrowUpRightSquare size={14} className="mx-1 mb-1" />
              to suggest an update to this page.
            </p>
            <Accordion flush className="mt-4 mb-5">
              <h4 className="page-heading my-4">If you already live here ...</h4>
              <Accordion.Item eventKey="e0">
                <Accordion.Header>When is trash, recycling and yard waste collected?</Accordion.Header>
                <Accordion.Body>
                  <p>Trash and yard waste is colleted every Tuesday, whereas recycling is collected every other Tuesday.</p>
                  <p>
                    For information on when recycling is collected for your residence, please refer to{' '}
                    <a href="https://charlottenc.gov/SWS/Pages/Recycling-Collection-Schedule.aspx" target="_blank" rel="noreferrer">
                      this page
                    </a>
                    <BoxArrowUpRight size={12} className="mx-1 mb-1" />.
                  </p>
                  <p>
                    For information on how to prepare yard waste, please refer to{' '}
                    <a href="https://charlottenc.gov/SWS/Pages/Yard-Waste-Collection.aspx" target="_blank" rel="noreferrer">
                      this page
                    </a>
                    <BoxArrowUpRight size={12} className="mx-1 mb-1" />.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="e000">
                <Accordion.Header>What items should be placed inside my recycling cart?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    While Mecklenburg County has a robust recycling program, there are still things you should <em>never</em> put in your <em>curbside</em> recycling cart.
                  </p>
                  <p>
                    Some notable items that are prohibited from being included in recycling carts are <strong>plastic bags</strong>, <strong>trash</strong> and <strong>shredded paper</strong>. For your convenience, an exhaustive list can be found{' '}
                    <a href="https://www.mecknc.gov/LUESA/SolidWaste/Disposal-Recycling/Pages/what-can-and-cannot-be-recycled.aspx" target="_blank" rel="noreferrer">
                      listed on Mecklenburg County&apos;s website
                    </a>
                    .
                    <BoxArrowUpRight size={12} className="mx-1 mb-1" />.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              {/* <Accordion.Item eventKey="e000">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt {' '}
                    <a href="https://www.google.com" target="_blank" rel="noreferrer">
                      mollit anim id est laborum
                    </a>.
                    <BoxArrowUpRight size={12} className="mx-1 mb-1" />.
                  </p>
                </Accordion.Body>
              </Accordion.Item> */}
              <h4 className="page-heading my-4">If you&apos;ll be joining us ...</h4>
              <Accordion.Item eventKey="n0">
                <Accordion.Header>Who do I contact for utilities and connections?</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Utility</th>
                        <th>Provider</th>
                        <th>Phone Number</th>
                        <th>Additional Helpful Links</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Electric</td>
                        <td>
                          <a href="https://www.duke-energy.com" target="_blank" rel="noreferrer">
                            Duke Energy
                            <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                          </a>
                        </td>
                        <td>
                          <a href="tel:800-777-9898">800-777-9898</a>
                          <TelephoneOutbound size={12} className="mx-1 mb-1" />
                        </td>

                        <td>
                          <a href="https://www.duke-energy.com/outages" target="_blank" rel="noreferrer">
                            Outages Center
                            <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Gas</td>
                        <td>
                          <a href="https://www.piedmontng.com" target="_blank" rel="noreferrer">
                            Piedmont Natural Gas
                            <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                          </a>
                        </td>
                        <td>
                          <a href="tel:800-752-7504">800-752-7504</a>
                          <TelephoneOutbound size={12} className="mx-1 mb-1" />
                        </td>
                        <td>
                          <a href="https://www.piedmontng.com/our-company/safety-information/natural-gas-safety" target="_blank" rel="noreferrer">
                            Natural Gas Safety
                            <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Sewer</td>
                        <td>
                          <a href="https://www.mecknc.gov/HealthDepartment/EnvironmentalHealth/GWS/Pages/default.aspx" target="_blank" rel="noreferrer">
                            City of Charlotte
                            <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                          </a>
                        </td>
                        <td>
                          <a href="tel:704-336-7600">704-336-7600</a>
                          <TelephoneOutbound size={12} className="mx-1 mb-1" />
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          Trash<sup>*</sup>
                        </td>
                        <td>
                          <a href="https://www.mecknc.gov/LUESA/SolidWaste/Pages/default.aspx" target="_blank" rel="noreferrer">
                            City of Charlotte
                            <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                          </a>
                        </td>
                        <td>
                          <a href="tel:704-336-7600">704-336-7600</a>
                          <TelephoneOutbound size={12} className="mx-1 mb-1" />
                        </td>
                        <td>
                          <a href="https://www.mecknc.gov/LUESA/SolidWaste/Disposal-Recycling/Pages/default.aspx" target="_blank" rel="noreferrer">
                            Disposal &amp; Recycling Centers
                            <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Water</td>
                        <td>
                          <a href="https://charlottenc.gov/Water/Pages/Home.aspx" target="_blank" rel="noreferrer">
                            City of Charlotte
                            <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                          </a>
                        </td>
                        <td>
                          <a href="tel:704-336-7600">704-336-7600</a>
                          <TelephoneOutbound size={12} className="mx-1 mb-1" />
                        </td>
                        <td>
                          <a href="https://charlottenc.gov/Water/RatesBilling/Pages/WaterBill.aspx" target="_blank" rel="noreferrer">
                            Pay Water Bill
                            <BoxArrowUpRight size={12} className="mx-1 mb-1" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <sup>
                    * Appropriate waste containers must be ordered from the City of Charlotte before small, non-bulky, items can be collected. Call <a href="tel:311">CharMeck 311</a>
                    <TelephoneOutbound size={10} className="mx-1 mb-1" />, Monday through Friday 7 a.m. to 7 p.m.
                  </sup>
                </Accordion.Body>
              </Accordion.Item>
              {/* <Accordion.Item eventKey="n1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item> */}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Faq
