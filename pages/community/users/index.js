import Head from "next/head"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import styles from "../../../styles/Users.module.css"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return {
    props: {
      users: data
    }
  }
}

const Users = ({users}) => {
  return ( 
    <>
      <Head>
        <title>McKee Glen HOA | All Users</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <h1>All Users</h1>
            {users.map(user => (
              <Link href={"/community/users/" + user.id} key={user.id}>
                <a className={styles.userName}>
                  <h3>{user.name}</h3>
                </a>
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </>
   );
}
 
export default Users;