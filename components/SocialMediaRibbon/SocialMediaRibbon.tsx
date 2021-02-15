import { faSearch, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Styles from "./SocialMediaRibbon.module.scss";

const SocialMediaRibbon = () => {
  return (
    <Row
      style={{
        width: "100%",
        left: "0",
        marginTop: "50px",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <Col
        xl={{ span: 6 }}
        lg={{ span: 6 }}
        md={{ span: 12 }}
        sm={{ span: 12 }}
        xs={{ span: 12 }}
        className={Styles.socialMediaRibbonYoutube}
      >
        <div>
          <Col xl={{ span: 12 }}>
            <h1>
              Haber bültenine <span>abone olun</span>
            </h1>
          </Col>
        </div>
        <div className={Styles.socialMediaRibbonSecondRowYoutube}>
          <Col xl={{ span: 6 }}>
            <h2>
              Bültenimize kaydolarak duyurularımızdan anında haberdar olabilir,
              gelişmeleri yakından takip edebilirsiniz.
            </h2>
          </Col>
          <Col
            xl={{ span: 6 }}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Form className={Styles.socialMediaSearchForm}>
              <div style={{display:"flex", height:"42px"}}>
                <input
                  type="text"
                  placeholder="Mail adresiniz..."
                  name="search"
                />
                <Button type="submit">Kayıt Ol</Button>
              </div>
            </Form>
          </Col>
        </div>
      </Col>
      <Col
        xl={{ span: 3 }}
        lg={{ span: 3 }}
        md={{ span: 6 }}
        sm={{ span: 12 }}
        xs={{ span: 12 }}
        className={Styles.socialMediaRibbonFacebook}
      >
        <div>
          <Col xl={{ span: 12 }} style={{ paddingLeft: "0px" }}>
            <h1>
              <span>Facebook</span>’ta takip et
            </h1>
          </Col>
        </div>
        <div className={Styles.socialMediaRibbonSecondRowFacebook}>
          <Col
            xl={{ span: 12 }}
            style={{ display: "flex", height: "30px", padding: "7px" }}
          >
            {/* <FontAwesomeIcon icon={faSquare} /> */}
            <img src="/images/socialMediaRibbon/rounded-rectangle.png" alt="" />
            <img
              className={Styles.facebookSecondImage}
              src="/images/socialMediaRibbon/comment.png"
              alt=""
            />
            <h2> Facebook sayfamıza giderek bizi takip edin</h2>
          </Col>
        </div>
      </Col>
      <Col
        xl={{ span: 3 }}
        lg={{ span: 3 }}
        md={{ span: 6 }}
        sm={{ span: 12 }}
        xs={{ span: 12 }}
        className={Styles.socialMediaRibbonTwitter}
      >
        <div>
          <Col xl={{ span: 12 }} style={{ paddingLeft: "0px" }}>
            <h1>
              <span>Twitter</span>’da takip et
            </h1>
          </Col>
        </div>
        <div className={Styles.socialMediaRibbonSecondRowTwitter}>
          <Col
            xl={{ span: 12 }}
            style={{ display: "flex", height: "30px", padding: "7px" }}
          >
            {/* <FontAwesomeIcon icon={faSquare} /> */}
            <img src="/images/socialMediaRibbon/rounded-rectangle.png" alt="" />
            <img
              className={Styles.twitterSecondImage}
              src="/images/socialMediaRibbon/comment.png"
              alt=""
            />
            <h2>Twitter sayfamıza giderek bizi takip edin</h2>
          </Col>
        </div>
      </Col>
    </Row>
  );
};

export default SocialMediaRibbon;
