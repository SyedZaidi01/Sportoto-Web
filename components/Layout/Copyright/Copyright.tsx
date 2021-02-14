import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Styles from "../Layout.module.scss";

const Copyright = () => {
    return (
        <Container>
            <Row className={Styles.copyRightArea}>
                <Col xl={{ span: 5 }} lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 12 }} xs={{ span: 12 }} className={Styles.copyRightAreaLeft}>
                </Col>
                <Col xl={{ span: 7 }} lg={{ span: 7 }} md={{ span: 7 }} sm={{ span: 12 }} xs={{ span: 12 }} className={Styles.copyRightAreaRight}>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col xl={{ span: 5 }} lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 12 }} xs={{ span: 12 }} className={Styles.copyrightLeftText}>
                        <p>Kişisel Verilerin Korunması Kanunu</p>
                    </Col>
                    <Col xl={{ span: 7 }} lg={{ span: 7 }} md={{ span: 7 }} sm={{ span: 12 }} xs={{ span: 12 }} className={Styles.copyrightRightText}>
                        <p>© All Rights Reserved 2020 - Sportoto Teşkilat Başkanlığı</p>
                    </Col>
                </Row>
            </Container>
        </Container>
        // <div style={{ position: "relative", background: "purple", height: "40px", width: "100%" }}>
        //     <div style={{ background: "red", height: "25px" }} className="col-5">
        //         <Container className="col-10 offset-2">
        //         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos mollitia ut et veniam, earum, ipsum corporis quasi temporibus exercitationem officiis excepturi esse doloremque voluptatem sunt neque quaerat nemo quibusdam at?</p>
        //         </Container>
        //     </div>
        // </div>
    );
}

export default Copyright;