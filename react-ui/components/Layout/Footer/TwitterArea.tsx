import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Scrollbar from "react-scrollbars-custom";
import Styles from "../Layout.module.scss";

const TwitterArea = () => {
  return (
    <Container>
      <Row className={Styles.twitterArea +" mh-100"}>
        <div
          className={Styles.trapezoid + " col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6"}
        ></div>
      </Row>

      <Container style={{height:"112px"}}>
        <Row className={Styles.twitterAreaContentRow}>
          <Col xl={{ span: 3 }} lg={{ span: 4 }} md={{ span: 5 }} sm={{ span: 5 }} xs={{ span: 6 }} >

            <div className={Styles.twitterIcon+" d-flex"}>
              <FontAwesomeIcon icon={faTwitter} />
              <h2>Son Tweetler</h2>
            </div>
            <p>Takip edin:  @sportoto</p>
          </Col>
          <Col xl={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 1 }} md={{ span: 6, offset: 0 }} sm={{span:7,offset:0}} xs={{}} className="d-flex" >
            <Scrollbar>
              <h6>Başkan Mehmet  Kasapoğlu Sportoto resmi web sayfasından gündeme dair açıklamalarda bulundu. sportoto.gov.tr</h6>
            </Scrollbar>
            
          </Col>
          <Col xl={{ span: 1 }} lg={{}} md={{span:1}} sm={{ span: 0 }} xs={{}} className="text-right d-xl-block d-lg-block d-md-block d-sm-none d-none">
            <FontAwesomeIcon icon={faChevronUp} />
            <br />
            <FontAwesomeIcon icon={faChevronDown} />

          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default TwitterArea;
