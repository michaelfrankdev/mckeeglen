import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  const paths = data.map(user => {
    return {
      params: { id: user.id.toString()}
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()
  return {
    props: {
      user: data
    }
  }
}



const UserDetails = ({user}) => {

  const pageTitle =  `McKee Glen HOA | ${user.name}`

  return ( 
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{user.address.city}</p>
          </Col>
        </Row>
      </Container>
    </>
   );
}
 
export default UserDetails;