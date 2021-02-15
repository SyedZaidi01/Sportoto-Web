import Head from "next/head";
import React, { Fragment } from "react";
import AliceCarousel from "react-alice-carousel";
import { Container } from "react-bootstrap";
import AliceSlider from "../components/AliceCarousel/AliceCarousel";
import Haberler from "../components/Haberler/Haberler";
import { Layout } from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import SocialMediaRibbon from "../components/SocialMediaRibbon/SocialMediaRibbon";
import VideoGallery from "../components/VideoGallery/VideoGallery";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Slider />
        <Haberler />
      </Container>
      <div>
        <SocialMediaRibbon />
      </div>
      <Container>
        <VideoGallery/>
        <AliceSlider/>
      </Container>
    </Layout>
  );
}
