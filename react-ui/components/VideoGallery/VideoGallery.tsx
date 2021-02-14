import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Styles from "./VideoGallery.module.scss";
import ReactPlayer from "react-player";

const VideoGallery = () => {
  let imageOverLay;
  let boxShadow;
  useEffect(() => {
    imageOverLay = Array.from(
      document.getElementsByClassName(
        "imageOverlay"
      ) as HTMLCollectionOf<HTMLElement>
    );
  });
  const hideOverlay = (num) => {
    imageOverLay[num].style.display = "none";
  };

  return (
    <div
      className="container d-xl-flex d-lg-flex d-md-flex d-sm-block d-block"
      style={{ marginTop: "30px" }}
    >
      <Col xl={{ span: 8 }} lg={{span:8}} md={{span:8}} sm={{span:12}} style={{ paddingLeft: "0px" }} className={Styles.videoGalleryGridWrap}>
        <div className={Styles.VideoGalleryHeadingWrap + " d-flex"}>
          <h1 className={Styles.VideoGalleryHeading}>
            <span>Video</span> Galeri
          </h1>
        </div>
        <Row style={{ display: "flex" }}>
          <Col xl={{ span: 4 }} lg={{ span: 4 }} xs={{ span: 6 }}>
            <div className={Styles.VideoGalleryCard}>
              <ReactPlayer
                url="https://www.w3schools.com/html/mov_bbb.mp4"
                playing={true}
                controls={true}
                width="100%"
                height="unset"
                light={"/images/videoGallery/thumbnail.png"}
                onPlay={() => hideOverlay(0)}
              />
              <div className={Styles.imageOverlay + " imageOverlay"}>
                <h1>Bakan Kasapoğlu Basın Toplantısı</h1>
              </div>
            </div>
          </Col>
          <Col xl={{ span: 4 }} lg={{ span: 4 }} xs={{ span: 6 }}>
            <div className={Styles.VideoGalleryCard}>
              <ReactPlayer
                url="https://www.w3schools.com/html/mov_bbb.mp4"
                playing={true}
                controls={true}
                width="100%"
                height="unset"
                light={"/images/videoGallery/thumbnail.png"}
                onPlay={() => hideOverlay(1)}
              />
              <div className={Styles.imageOverlay + " imageOverlay"}>
                <h1>Bakan Kasapoğlu Basın Toplantısı</h1>
              </div>
            </div>
          </Col>
          <Col xl={{ span: 4 }} lg={{ span: 4 }} xs={{ span: 6 }}>
            <div className={Styles.VideoGalleryCard}>
              <ReactPlayer
                url="https://www.w3schools.com/html/mov_bbb.mp4"
                playing={true}
                controls={true}
                width="100%"
                height="unset"
                light={"/images/videoGallery/thumbnail.png"}
                onPlay={() => hideOverlay(2)}
              />
              <div className={Styles.imageOverlay + " imageOverlay"}>
                <h1>Bakan Kasapoğlu Basın Toplantısı</h1>
              </div>
            </div>
          </Col>
          <Col xl={{ span: 4 }} lg={{ span: 4 }} xs={{ span: 6 }}>
            <div className={Styles.VideoGalleryCard}>
              <ReactPlayer
                url="https://www.w3schools.com/html/mov_bbb.mp4"
                playing={true}
                controls={true}
                width="100%"
                height="unset"
                light={"/images/videoGallery/thumbnail.png"}
                onPlay={() => hideOverlay(3)}
              />
              <div className={Styles.imageOverlay + " imageOverlay"}>
                <h1>Bakan Kasapoğlu Basın Toplantısı</h1>
              </div>
            </div>
          </Col>
          <Col xl={{ span: 4 }} lg={{ span: 4 }} xs={{ span: 6 }}>
            <div className={Styles.VideoGalleryCard}>
              <ReactPlayer
                url="https://www.w3schools.com/html/mov_bbb.mp4"
                playing={true}
                controls={true}
                width="100%"
                height="unset"
                light={"/images/videoGallery/thumbnail.png"}
                onPlay={() => hideOverlay(4)}
              />
              <div className={Styles.imageOverlay + " imageOverlay"}>
                <h1>Bakan Kasapoğlu Basın Toplantısı</h1>
              </div>
            </div>
          </Col>
          <Col xl={{ span: 4 }} lg={{ span: 4 }} xs={{ span: 6 }}>
            <div className={Styles.VideoGalleryCard}>
              <ReactPlayer
                url="https://www.w3schools.com/html/mov_bbb.mp4"
                playing={true}
                controls={true}
                width="100%"
                height="unset"
                light={"/images/videoGallery/thumbnail.png"}
                onPlay={() => hideOverlay(5)}
              />
              <div className={Styles.imageOverlay + " imageOverlay"}>
                <h1>Bakan Kasapoğlu Basın Toplantısı</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xl={{ span: 4 }} lg={{span:4}} md={{span:4}} sm={{span:12}} xs={{ span: 12 }} className={Styles.videoGalleryLogoAreaCol}>
        <div className={Styles.videoGalleryLogoAreaDiv}>
          <img
            src="/images/videoGallery/cafe.png"
            alt=""
            className={Styles.videoGalleryBackgroundImage + " w-100 h-100"}
          />
          <div className={Styles.videoGalleryLogoAreaWrap}>
            <img src="/images/videoGallery/logo.png" alt="" />
            <h1>
              Sportoto Spor Kulübü resmi satış sitesinden ürünlerimizi
              inceleyebilir ve satın alabilirsiniz.
            </h1>
            <button>MAĞAZAYA GİT</button>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default VideoGallery;
