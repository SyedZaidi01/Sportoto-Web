import { faArrowUp, faLocationArrow, faMapMarker, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';
import Styles from './Slider.module.scss';

const Slider = () => {
    return (
        <Container className="d-xl-flex d-lg-block d-md-block d-sm-block d-block">
            <Col xl={{ span: 9 }} lg={{ span: 12 }} md={{}} sm={{}} xs={{}} className={Styles.carouselWrap}>
                <Carousel controls={false} indicators={false} keyboard={true} touch={true} interval={400000} className="h-100 mh-75 mainpage-carousel">
                    <CarouselItem className={Styles.carouselItem + " h-100"}>
                        <img src="/images/slider/slider-one.png" alt="" className="h-100" />
                        <Carousel.Caption className={Styles.sliderCaption}>
                            <Row>
                                <h1 className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 w-100">30 AĞUSTOS ZAFER BAYRAMI</h1>
                                <p className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">Başkanımız Bünyamin BOZGEYİK, 30 Ağustos Zafer Bayramı mesajı yayınladı.</p>
                            </Row>
                            <Row>
                                <Col xl={{ span: 8 }} lg={{}} md={{ span: 11 }} sm={{ span: 11 }} xs={{ span: 12 }} style={{ paddingLeft: "0px" }}>
                                    <div className={Styles.trapezoid + " w-100"}>
                                        <h4>30 Ağustos Zafer Bayramı</h4>
                                        <h5> <FontAwesomeIcon icon={faMapMarker} /> Kategori: Kurum Haberleri</h5>
                                        <h6> <FontAwesomeIcon icon={faStreetView} /> Tarih: 30 Ağustos 2020 - Pazar</h6>
                                    </div>
                                </Col>
                                <Col xl={{ span: 4 }} lg={{}} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 0 }} style={{ borderBottom: "3px solid #df0024" }}>

                                </Col>
                            </Row>
                            <Row className={Styles.calendarRow}>
                                <Col className="d-flex" style={{ paddingLeft: "0px" }}>
                                    <Col xs={{ span: 4 }} style={{ borderRight: "2px solid rgb(255,255,255,0.3)" }}>
                                        <h5>02 Eyl</h5>
                                    </Col>
                                    <Col xs={{ span: 8 }} >
                                        <h6>Sabit Bayilik Kura Çekilişine İlişkin Usul ve Esaslar</h6>
                                    </Col>
                                </Col>
                                <Col className="d-flex" style={{ paddingLeft: "0px" }}>
                                    <Col xs={{ span: 4 }} style={{ borderRight: "2px solid rgb(255,255,255,0.3)" }}>
                                        <h5>02 Eyl</h5>
                                    </Col>
                                    <Col xs={{ span: 8 }}>
                                        <h6>Sabit Bayilik Kura Çekilişine İlişkin Usul ve Esaslar</h6>
                                    </Col>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
            </Col>
            <Col xl={{ span: 3 }} lg={{ span: 12 }} md={{}} sm={{}} xs={{}} className={Styles.carouselRightWrap}>
                <Row>
                    <Col xl={{ span: 12 }} lg={{ span: 3 }} md={{ span: 3 }} sm={{ span: 6 }} xs={{ span: 12 }} style={{ paddingInline: "0px" }}>
                        <div style={{ background: "url('/images/slider/slider-right-one.png')" }} className={Styles.carouselRightCard + " w-100"}>
                            <div>
                                <h1>Mustafa Kemal ATATÜRK</h1>
                                <h2>Atatürk Köşesi</h2>
                            </div>

                        </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 3 }} md={{ span: 3 }} sm={{ span: 6 }} xs={{ span: 12 }} style={{ paddingInline: "0px" }}>
                        <div style={{ background: "url('/images/slider/slider-right-two.png')" }} className={Styles.carouselRightCard + " w-100"}>
                            <div>
                                <h1>Dr.Mehmet KASAPOĞLU</h1>
                                <h2>Gençlik ve Spor Bakanı</h2>
                            </div>

                        </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 3 }} md={{ span: 3 }} sm={{ span: 6 }} xs={{ span: 12 }} style={{ paddingInline: "0px" }}>
                        <div style={{ background: "url('/images/slider/slider-right-three.png')" }} className={Styles.carouselRightCard + " w-100"}>
                            <div>
                                <h1>Sportoto Haftanın Maçları</h1>
                                <h2>02 Eylül 2020</h2>
                            </div>

                        </div>
                    </Col>
                    <Col xl={{ span: 12 }} lg={{ span: 3 }} md={{ span: 3 }} sm={{ span: 6 }} xs={{ span: 12 }} style={{ paddingInline: "0px" }}>
                        <div style={{ background: "url('/images/slider/slider-right-four.png')" }} className={Styles.carouselRightCard + " w-100"}>
                            <div>
                                <h1>İddaa Futbol Programı</h1>
                                <h2>Maç Sonuçları, Maç Programları</h2>
                            </div>

                        </div>
                    </Col>
                </Row>

            </Col>

        </Container>
    );
}
export default Slider;