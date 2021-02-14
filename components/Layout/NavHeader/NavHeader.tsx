import { faFacebook, faInstagram, faTwitter, faVimeo, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAt, faGlobe, faPhone, faPhoneAlt, faPhoneSquare, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Col, Container, Navbar } from "react-bootstrap";
import SocialMediaIcons from "../../Common/SocialMediaIcon";
import styles from "../Layout.module.scss";

export const NavHeader = ({ isSticky }) => {
  return (
    <div>
      <Navbar
        className={styles.topBarMenu}
        style={isSticky ? { position: "relative" } : { position: "relative" }}
      >
        <Container>
          <Col xl={{ span: 2 }} lg={{span:2}} md={{span:3}} sm={{ span:3}} xs={{span:6}}>
            <a href="https://www.facebook.com/pointocomtr" target="_blank">
              <FontAwesomeIcon
                className="social-icon"
                icon={faFacebook}
                size={"lg"}
              />
            </a>
            <a href="https://www.facebook.com/pointocomtr" target="_blank">
              <FontAwesomeIcon
                className="social-icon"
                icon={faTwitter}
                size={"lg"}
              />
            </a>
            <a href="https://www.facebook.com/pointocomtr" target="_blank">
              <FontAwesomeIcon
                className="social-icon"
                icon={faInstagram}
                size={"lg"}
              />
            </a>
            <a href="https://www.facebook.com/pointocomtr" target="_blank">
              <FontAwesomeIcon
                className="social-icon"
                icon={faYoutube}
                size={"lg"}
              />
            </a>
            <a href="https://www.facebook.com/pointocomtr" target="_blank">
              <FontAwesomeIcon
                className="social-icon"
                icon={faVimeo}
                size={"lg"}
              />
            </a>
          </Col>
          <Col xl={{ span: 6 }} lg={{span:6}} md={{span:6}} sm={{span:6}} xs={{span:1}}>
            <a href="https://www.facebook.com/pointocomtr" target="_blank">
              <FontAwesomeIcon
                className="social-icon"
                icon={faPhoneSquareAlt}
                size={"lg"}
              />
              <span className="d-xl-inline d-lg-inline d-md-inline d-sm-inline d-none">Sportoto Oyunları Danışma Hattı</span>

            </a>
          </Col>
          <Col xl={{ span: 3, offset: 1 }} lg={{span:2, offset:1}} md={{span:3, offset:1}} sm={{span:3, offset:0}} xs={{}} className="justify-content-end d-flex">

            <a href="" >
              <FontAwesomeIcon icon={faGlobe} />
              <span>ENGLISH</span>
            </a>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
};
