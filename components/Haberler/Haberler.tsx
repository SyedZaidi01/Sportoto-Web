import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Styles from "./Haberler.module.scss";

const Haberler = () => {
  return (
    <Container style={{ marginTop: "50px" }} className="d-xl-flex d-lg-flex">
      <Col
        xl={{ span: 8 }}
        lg={{ span: 8 }}
        md={{ span: 12 }}
        sm={{}}
        xs={{}}
        className={Styles.haberlerLeftCol}
      >
        <div className={Styles.haberlerHeadingWrap + " d-flex"}>
          <Col
            xl={{ span: 8 }}
            lg={{}}
            md={{}}
            sm={{}}
            xs={{}}
            style={{ paddingLeft: "0px" }}
          >
            <h1 className={Styles.haberlerHeading}>
              Sportoto<span> Haberler</span>{" "}
            </h1>
          </Col>
          <Col
            xl={{ span: 3, offset: 1 }}
            lg={{}}
            md={{}}
            sm={{}}
            xs={{}}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <h2>
              Tüm Haberler <FontAwesomeIcon icon={faChevronRight} />
            </h2>
          </Col>

          {/* <div className={Styles.triangle}></div> */}
        </div>

        <div>
          <div className={"" + " d-flex"} style={{ position: "relative" }}>
            <div className={Styles.haberlerTop}>
              <img
                src="/images/haberler/top-haberler.png"
                alt=""
                className={"w-100"}
              />
            </div>
            <div
              style={{ position: "absolute" }}
              className={Styles.cardContentWrap}
            >
              <div className={Styles.contentUpper}>
                <Button>Futbol</Button>
              </div>
              <div className={Styles.contentLower}>
                <h1>2020 Yılının şampiyonu Başakşehir!</h1>
                <h2>
                  <FontAwesomeIcon icon={faClock} /> 02 Eyl 2020 - 23:10
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.smallCardsUpperRow + " d-flex"}>
          <Col
            xl={{ span: 6 }}
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{}}
            xs={{}}
            className={Styles.haberlerCard}
            style={{
              paddingLeft: "0px",
              paddingRight: "10px",
            }}
          >
            <div className={"" + " d-flex"} style={{ position: "relative" }}>
              <div className={Styles.imageWrap}>
                <img
                  src="/images/haberler/second-haberler.png"
                  alt=""
                  className="w-100"
                />
              </div>
              <div
                style={{ position: "absolute" }}
                className={Styles.cardContentWrap}
              >
                <div className={Styles.contentUpper}>
                  <Button>Basketbol</Button>
                </div>
                <div className={Styles.contentLower}>
                  <h1>Basketbolda şampiyon Anadolu Efes!</h1>
                  <h2>
                    <FontAwesomeIcon icon={faClock} /> 02 Eyl 2020 - 23:10
                  </h2>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xl={{ span: 6 }}
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{}}
            xs={{}}
            className={Styles.haberlerCard}
            style={{
              paddingRight: "0px",
              paddingLeft: "10px",
            }}
          >
            <div className={"" + " d-flex"} style={{ position: "relative" }}>
              <div className={Styles.imageWrap}>
                <img
                  src="/images/haberler/third-haberler.png"
                  alt=""
                  className="w-100"
                />
              </div>
              <div
                style={{ position: "absolute" }}
                className={Styles.cardContentWrap}
              >
                <div className={Styles.contentUpper}>
                  <Button>Hentbol</Button>
                </div>
                <div className={Styles.contentLower}>
                  <h1>Hentbolda şampiyon Galatasaray!</h1>
                  <h2>
                    <FontAwesomeIcon icon={faClock} /> 02 Eyl 2020 - 23:10
                  </h2>
                </div>
              </div>
            </div>
          </Col>
        </div>
        <div className={Styles.smallCardsLowerRow + " d-flex"}>
          <Col
            xl={{ span: 6 }}
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{}}
            xs={{}}
            className={Styles.haberlerCard}
            style={{
              paddingLeft: "0px",
              paddingRight: "10px",
            }}
          >
            <div className={"" + " d-flex"} style={{ position: "relative" }}>
              <div className={Styles.imageWrap}>
                <img
                  src="/images/haberler/fourth-haberler.png"
                  alt=""
                  className="w-100"
                />
              </div>
              <div
                style={{ position: "absolute" }}
                className={Styles.cardContentWrap}
              >
                <div className={Styles.contentUpper}>
                  <Button>Gündem</Button>
                </div>
                <div className={Styles.contentLower}>
                  <h1>Bakan Kasapoğlu’nun Gündeme Dair Açıklamaları</h1>
                  <h2>
                    <FontAwesomeIcon icon={faClock} /> 02 Eyl 2020 - 23:10
                  </h2>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xl={{ span: 6 }}
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{}}
            xs={{}}
            className={Styles.haberlerCard}
            style={{
              paddingRight: "0px",
              paddingLeft: "10px",
            }}
          >
            <div className={"" + " d-flex"} style={{ position: "relative" }}>
              <div className={Styles.imageWrap}>
                <img
                  src="/images/haberler/fifth-haberler.png"
                  alt=""
                  className="w-100"
                />
              </div>
              <div
                style={{ position: "absolute" }}
                className={Styles.cardContentWrap}
              >
                <div className={Styles.contentUpper}>
                  <Button>Kupa</Button>
                </div>
                <div className={Styles.contentLower}>
                  <h1>Türkiye kupası finali Konya’da!</h1>
                  <h2>
                    <FontAwesomeIcon icon={faClock} /> 02 Eyl 2020 - 23:10
                  </h2>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Col>
      <Col
        xl={{ span: 4 }}
        lg={{ span: 4 }}
        md={{ span: 12 }}
        sm={{}}
        xs={{}}
        style={{ paddingRight: "0px" }}
        className={Styles.haberlerBottomWrap}
      >
        <div>
          <div
            className={
              Styles.skorlerHeadingWrap + " d-flex justify-content-between"
            }
          >
            <h1>CANLI SKORLAR</h1>
            <div style={{ zIndex: 1 }} className={Styles.chevronWrap}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={Styles.skorlerHeadingLeftChevron}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className={Styles.skorlerHeadingRightChevron}
              />
            </div>
          </div>

          <div className={Styles.skorlerCard} style={{ background: "#393a45" }}>
            <div>
              <h2>02 Eylül 2020</h2>
            </div>
            <div>
              <div className="d-flex" style={{ marginTop: "15px" }}>
                <Col
                  xl={{ span: 5 }}
                  style={{
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    textAlign: "right",
                  }}
                >
                  <h3>
                    Portekiz
                    <span>
                      <img src="/images/haberler/flags/portugal.png" alt="" />
                    </span>
                  </h3>
                </Col>
                <Col
                  xl={{ span: 2 }}
                  style={{
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    paddingTop: "10px",
                    textAlign: "center",
                  }}
                >
                  <h4>1 - 0</h4>
                </Col>
                <Col
                  xl={{ span: 5 }}
                  style={{ paddingRight: "5px", paddingLeft: "5px" }}
                >
                  <h3>
                    <span>
                      <img src="/images/haberler/flags/france.png" alt="" />
                    </span>
                    Fransa
                  </h3>
                </Col>
              </div>
            </div>
          </div>
          <div className={Styles.skorlerCard} style={{ background: "#32333e" }}>
            <div>
              <h2>02 Eylül 2020</h2>
            </div>
            <div>
              <div className="d-flex" style={{ marginTop: "15px" }}>
                <Col
                  xl={{ span: 5 }}
                  style={{
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    textAlign: "right",
                  }}
                >
                  <h3>
                    Portekiz
                    <span>
                      <img src="/images/haberler/flags/england.png" alt="" />
                    </span>
                  </h3>
                </Col>
                <Col
                  xl={{ span: 2 }}
                  style={{
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    paddingTop: "10px",
                    textAlign: "center",
                  }}
                >
                  <h4>1 - 0</h4>
                </Col>
                <Col
                  xl={{ span: 5 }}
                  style={{ paddingRight: "5px", paddingLeft: "5px" }}
                >
                  <h3>
                    <span>
                      <img src="/images/haberler/flags/india.png" alt="" />
                    </span>
                    Fransa
                  </h3>
                </Col>
              </div>
            </div>
          </div>
          <div className={Styles.skorlerCard} style={{ background: "#2e2f3a" }}>
            <div>
              <h2>02 Eylül 2020</h2>
            </div>
            <div>
              <div className="d-flex" style={{ marginTop: "15px" }}>
                <Col
                  xl={{ span: 5 }}
                  style={{
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    textAlign: "right",
                  }}
                >
                  <h3>
                    Portekiz
                    <span>
                      <img src="/images/haberler/flags/india.png" alt="" />
                    </span>
                  </h3>
                </Col>
                <Col
                  xl={{ span: 2 }}
                  style={{
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    paddingTop: "10px",
                    textAlign: "center",
                  }}
                >
                  <h4>1 - 0</h4>
                </Col>
                <Col
                  xl={{ span: 5 }}
                  style={{ paddingRight: "5px", paddingLeft: "5px" }}
                >
                  <h3>
                    <span>
                      <img src="/images/haberler/flags/ireland.png" alt="" />
                    </span>
                    Fransa
                  </h3>
                </Col>
              </div>
            </div>
          </div>
          <div className={Styles.skorlerCard} style={{ background: "#282934" }}>
            <div>
              <h2>02 Eylül 2020</h2>
            </div>
            <div>
              <div className="d-flex" style={{ marginTop: "15px" }}>
                <Col
                  xl={{ span: 5 }}
                  style={{
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    textAlign: "right",
                  }}
                >
                  <h3>
                    Portekiz
                    <span>
                      <img src="/images/haberler/flags/pakistan.png" alt="" />
                    </span>
                  </h3>
                </Col>
                <Col
                  xl={{ span: 2 }}
                  style={{
                    paddingRight: "5px",
                    paddingLeft: "5px",
                    paddingTop: "10px",
                    textAlign: "center",
                  }}
                >
                  <h4>1 - 0</h4>
                </Col>
                <Col
                  xl={{ span: 5 }}
                  style={{ paddingRight: "5px", paddingLeft: "5px" }}
                >
                  <h3>
                    <span>
                      <img src="/images/haberler/flags/sweden.png" alt="" />
                    </span>
                    Fransa
                  </h3>
                </Col>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.spordaBugun + " container"}>
          <div className={Styles.spordaBugunHeading}>
            <h1>SPOR’DA BUGÜN</h1>
          </div>
          <div className={Styles.spordaBugunImage}>
            <img src="/images/haberler/ferrariF1.png" alt="" />
          </div>
          <div className={Styles.spordaBuginHeading2}>
            <h2>Formula 1 Yarışları 9 yıl aradan sonra yeniden İstanbul’da!</h2>
          </div>
          <div className={Styles.spordaBugunCalender}>
            <div className={Styles.spordaBugunCalenderRow}>
              <Col xl={{ span: 3 }} lg={{}} md={{}} sm={{}} xs={{}}>
                <h3>16:48</h3>
              </Col>
              <Col xl={{ span: 9 }} lg={{}} md={{}} sm={{}} xs={{}}>
                <h4>Lionel Messi, Barcelona’dan ayrılma kararı aldı</h4>
              </Col>
            </div>
            <div className={Styles.spordaBugunCalenderRow}>
              <Col xl={{ span: 3 }} lg={{}} md={{}} sm={{}} xs={{}}>
                <h3>15:24</h3>
              </Col>
              <Col xl={{ span: 9 }} lg={{}} md={{}} sm={{}} xs={{}}>
                <h4>Türkiye Milli Takımı aday kadrosu açıklandı</h4>
              </Col>
            </div>
            <div className={Styles.spordaBugunCalenderRow}>
              <Col xl={{ span: 3 }} lg={{}} md={{}} sm={{}} xs={{}}>
                <h3>12:28</h3>
              </Col>
              <Col xl={{ span: 9 }} lg={{}} md={{}} sm={{}} xs={{}}>
                <h4>Olimpiyatlarda 5. altın madalyamızı aldık</h4>
              </Col>
            </div>
            <div className={Styles.spordaBugunCalenderRow}>
              <Col xl={{ span: 3 }} lg={{}} md={{}} sm={{}} xs={{}}>
                <h3>11:42</h3>
              </Col>
              <Col xl={{ span: 9 }} lg={{}} md={{}} sm={{}} xs={{}}>
                <h4>Türkiye kupası finali Konya’da olacak!</h4>
              </Col>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default Haberler;
