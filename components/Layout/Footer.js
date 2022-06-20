import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className='authorTag'>
            Built by{' '}
            <a
              href='https://www.github.com/michaelfrankdev'
              target='_blank'
              rel='noreferrer noopener'
            >
              @michaelfrankdev
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
