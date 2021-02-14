import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import Logo from "../../Common/Logo";
import styles from "../Layout.module.scss";
import SideBar from "../SideBar/SideBar";

const TopStickyMenu = ({ isSticky }) => {
  // const node = ReactDOM.findDOMNode(this);
  useEffect(() => {
    const topBar = Array.from(
      document.getElementsByClassName(
        "navbar-collapse"
      ) as HTMLCollectionOf<HTMLElement>
    );
    const topLogo = Array.from(
      document.getElementsByClassName(
        "navbar-brand"
      ) as HTMLCollectionOf<HTMLElement>
    );

    console.log(topBar[0].style.display);
    if (topBar[0].style.display === "") {
      topLogo[0].style.justifyContent = "center";
    }
  });

  return (
    <Navbar
      className={styles.sidebar}
      expand="lg"
      sticky="top"
      style={
        isSticky
          ? { position: "sticky", backgroundColor: "#fff" }
          : { position: "relative" }
      }
    >
      <Container>
        <div className={styles.topStickyBar}>
          <Col xl={{ span: 3 }} lg={{span:3}} md={{}} sm={{}} xs={{}} className="d-flex">
            <Navbar.Brand className={styles.navbarBrand}>
              <Link href="/">
                <a>
                  {!isSticky ? (
                    <Logo
                      isLight={!isSticky}
                      id="logo"
                      // width="160px"
                      height="max-content"
                      className="w-100"
                    />
                  ) : (
                      <Logo
                        isLight={!isSticky}
                        id="logo"
                        // width="160px"
                        height="max-content"
                        className="w-100"
                      />
                    )}
                </a>
              </Link>
            </Navbar.Brand>
            {/* <div className={styles.stickyLogoTitle + " d-none d-xl-block d-lg-block d-md-block d-sm-block"}>
              <h2>SPORTOTO</h2>
              <p>SPOR KULÜBÜ</p>
            </div> */}



          </Col>
          <SideBar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            height={600}
          ></SideBar>
          <Col xl={{ span: 9 }} lg={{span:9}} md={{}} sm={{}} xs={{}}>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle> */}
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav style={{ width: "100%" }} className="s">
                <ul
                  className={styles.stickyMenuList}
                  style={isSticky ? { background: "" } : { background: "" }}
                >
                  <Link href="/kurumsal">
                    <li
                      style={
                        isSticky ? { color: "#2f3d5a" } : { color: "#24252f" }
                      }
                    >
                      ANASAYFA
                    <span></span>
                    </li>
                  </Link>
                  <Link href="/hizmetlerimiz">
                    <li
                      style={
                        isSticky ? { color: "#2f3d5a" } : { color: "#24252f" }
                      }
                    >
                      HAKKIMIZDA                              
                    <span></span>
                    </li>
                  </Link>
                  <Link href="/referanslarimiz">
                    <li
                      style={
                        isSticky ? { color: "#2f3d5a" } : { color: "#24252f" }
                      }
                    >
                      BASIN ODASI
                    <span></span>
                    </li>
                  </Link>
                  <Link href="/insanKaynaklari">
                    <li
                      style={
                        isSticky ? { color: "#2f3d5a" } : { color: "#24252f" }
                      }
                    >
                      OYUNLARIMIZ
                    <span></span>
                    </li>
                  </Link>
                  <Link href="/iletisim">
                    <li
                      style={
                        isSticky ? { color: "#2f3d5a" } : { color: "#24252f" }
                      }
                    >
                      MEDYA
                    <span></span>
                    </li>
                  </Link>
                  <Link href="/iletisim">
                    <li
                      style={
                        isSticky ? { color: "#2f3d5a" } : { color: "#24252f" }
                      }
                    >
                      BAYİLERİMİZ
                    <span></span>
                    </li>
                  </Link>
                  <Link href="/iletisim">
                    <li
                      style={
                        isSticky ? { color: "#2f3d5a" } : { color: "#24252f" }
                      }
                    >
                      İLETİŞİM
                    <span></span>
                    </li>
                  </Link>
                  <li>
                    <Button className={styles.headerButton}>BAKANLIK</Button>
                  </li>
                </ul>
              </Nav>

            </Navbar.Collapse>

          </Col>

        </div>
      </Container>
      <Row className={styles.navBarBottomRow + " d-xl-block d-lg-block d-md-none d-sm-none d-none"}>
        <Container>
          <Col xl={{ span: 9 }} lg={{span:8}} md={{span:9}} sm={{}} xs={{}}>
            <ul className={styles.underStickyList}>
              <li>VOLEYBOL</li>
              <li>HENTBOL</li>
              <li>SU ALTI SPORLARI</li>
              <li>BİSİKLET</li>
              <li>ÖZEL SPORCULAR</li>
            </ul>
          </Col>
          <Col xl={{ span: 3 }} lg={{span:4}} md={{span:3}} sm={{}} xs={{}} >
            <Form className={styles.navbarBottomSearch}>
                <input type="text" placeholder="Arama yap....." name="search"/>
                <Button type="submit"><FontAwesomeIcon icon={faSearch}/></Button>
            </Form>
          </Col>
        </Container>
      </Row>
    </Navbar>
  );
};

export default TopStickyMenu;
