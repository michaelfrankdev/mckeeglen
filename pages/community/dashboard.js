import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Dashboard.module.css"

const Dashboard = () => {
  return ( 
    <>
      <Head>
        <title>McKee Glen HOA | Dashboard</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.heading}>Dashboard</h1>
            <p>This is the landing page for authenticated users. Any content can be shown here. Ideally, a calendar of events widget, bulletin board messages and other messages of interest to users would be displayed here first.</p>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus nihil distinctio, recusandae et incidunt nemo similique minus nam reiciendis laboriosam, quod eligendi voluptate totam facere iste error deleniti dolorem perferendis id quisquam veritatis. Soluta corrupti alias labore molestias. Repudiandae culpa sunt doloremque animi nulla suscipit est earum odit, ullam ut esse fugiat ipsam magnam aspernatur minima, dignissimos quis laborum.</p>
            <p>Sequi quos vitae deleniti? Neque odio quam eos hic assumenda ex labore quidem. Repudiandae ea quidem quaerat enim hic, molestiae reiciendis! Natus incidunt mollitia quibusdam eius facilis reprehenderit atque placeat hic? Voluptate tempora, vero nisi excepturi beatae nam rem, ipsa eos sed eveniet quia ducimus explicabo repellendus veniam, cumque nihil magnam recusandae laudantium? Corporis, nulla unde aliquam, eaque explicabo iure, aspernatur sit provident eligendi hic nemo architecto.</p>
            <p>Optio voluptatem laudantium nam voluptate necessitatibus minus similique exercitationem quibusdam illum porro facere, dolores natus recusandae, unde non molestias impedit maiores veritatis, ab eos provident ut magni? Adipisci inventore ratione neque et. Iste impedit enim delectus adipisci incidunt maxime pariatur placeat totam magnam itaque ex deserunt ad, suscipit libero labore illum iure error asperiores in ipsam? Magnam quaerat maiores velit ducimus et cum doloribus laudantium esse odit. Blanditiis corrupti quo quam inventore velit.</p>
          </Col>
        </Row>
      </Container>
    </>
   );
}
 
export default Dashboard;