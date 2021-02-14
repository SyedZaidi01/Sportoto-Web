import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Styles from "../Layout.module.scss";

const FooterNavArea = () => {
    return (
        <Container>
            <Row className={Styles.footerNavAreaBackground}>
                <Col xl={{ span: 5 }} lg={{ span: 5 }} md={{ span: 5 }} sm={{ span: 12 }} xs={{ span: 12 }} className={Styles.footerNavAreaLeft}>
                </Col>
                <Col xl={{ span: 7 }} lg={{ span: 7 }} md={{ span: 7 }} sm={{ span: 12 }} xs={{ span: 12 }} className={Styles.footerNavAreaRight}>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col xl={{ span: 4 }} lg={{span:5}} md={{span:4}} sm={{span:12,offset:0}} xs={{ span: 12 }} className={Styles.footerFirstCol + " text-xl-left text-lg-left text-md-left text-sm-center text-center"}>
                        <img src="/images/logo/logo-modern.png" alt="" className="w-100 col-sm-6 col-6"/>
                        <p>Spor Toto, Türkiye'nin resmi spor kuruludur. 1949 tarihinde kuruldu ve Türkiye'de kadınlardan ve sanatçılardan sonra sporcular da Anayasa'da koruma altına alındı. Spor Toto'nun bağlı bulunduğu müdürlük, Gençlik ve Spor Bakanlığı'nın bir alt kurulu olan Gençlik ve Spor Genel Müdürlüğü'dür</p>
                    </Col>
                    <Col xl={{ span: 7,offset:1 }} lg={{span:7, offset:0}} md={{span:7, offset:1}} sm={{span:12, offset:0}} xs={{}} className={Styles.footerSecondCol}>
                        <Row>
                            <Col xl={{ span: 3 }} lg={{}} md={{}} sm={{span:6}} xs={{span:12}} style={{paddingRight:"5px"}} className="text-xl-left text-lg-left text-md-left text-sm-center text-center">
                                <h6>KURUMSAL</h6>
                                <ul>
                                    <li>SporToto</li>
                                    <li>Spora Katkılarımız</li>
                                    <li>Başkanın Mesajı</li>
                                    <li>Tarihçe</li>
                                    <li>Mevzuat</li>
                                </ul>
                            </Col>
                            <Col xl={{ span: 3 }} lg={{}} md={{}} sm={{span:6}} xs={{span:12}} style={{paddingRight:"5px"}} className="text-xl-left text-lg-left text-md-left text-sm-center text-center">
                                <h6>BASIN ODASI</h6>
                                <ul>
                                    <li>Futbol</li>
                                    <li>Basketbol</li>
                                    <li>Olimpiyat</li>
                                    <li>Genel</li>
                                    <li>Arşiv</li>
                                </ul>
                            </Col>
                            <Col xl={{ span: 3 }} lg={{}} md={{}} sm={{span:6}} xs={{span:12}} style={{paddingRight:"5px"}} className="text-xl-left text-lg-left text-md-left text-sm-center text-center">
                                <h6>OYUNLARIMIZ</h6>
                                <ul>
                                    <li>Sportoto Nasıl Oynanır?</li>
                                    <li>İddaa Nasıl Oynanır?</li>
                                    <li>Oyun Kuralları</li>
                                    <li>Haftanın Sonuçları</li>
                                    <li>Liste</li>
                                </ul>
                            </Col>
                            <Col xl={{ span: 3 }} lg={{}} md={{}} sm={{span:6}} xs={{span:12}} style={{paddingRight:"5px"}} className="text-xl-left text-lg-left text-md-left text-sm-center text-center">
                                <h6>KISAYOLLAR</h6>
                                <ul>
                                    <li>Görseller</li>
                                    <li>Videolar</li>
                                    <li>Tarihten Sayfalar</li>
                                    <li>Bayilerimiz</li>
                                    <li>Elektronik Bayiler</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>


    );
}
export default FooterNavArea;