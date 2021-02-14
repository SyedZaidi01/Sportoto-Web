import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const AliceSlider = () => {
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: {
      items: 3,
    },
    1024: {
      items: 7,
    },
  };

  const items = [
    <img src="/images/aliceCarousel/logo1.png" onDragStart={handleDragStart} />,
    <img src="/images/aliceCarousel/logo2.png" onDragStart={handleDragStart} />,
    <img src="/images/aliceCarousel/logo3.png" onDragStart={handleDragStart} />,
    <img src="/images/aliceCarousel/logo4.png" onDragStart={handleDragStart} />,
    <img src="/images/aliceCarousel/logo5.png" onDragStart={handleDragStart} />,
    <img src="/images/aliceCarousel/logo6.png" onDragStart={handleDragStart} />,
    <img src="/images/aliceCarousel/logo7.png" onDragStart={handleDragStart} />,
    <img src="/images/aliceCarousel/logo8.png" onDragStart={handleDragStart} />,
    <img src="/images/aliceCarousel/logo9.png" onDragStart={handleDragStart} />,
    <img
      src="/images/aliceCarousel/logo10.png"
      onDragStart={handleDragStart}
    />,
    <img
      src="/images/aliceCarousel/logo11.png"
      onDragStart={handleDragStart}
    />,
    <img
      src="/images/aliceCarousel/logo12.png"
      onDragStart={handleDragStart}
    />,
  ];

  return (
    <AliceCarousel
      disableButtonsControls={true}
      disableDotsControls={true}
      autoPlay={true}
      infinite={true}
      responsive={responsive}
      mouseTracking
      items={items}
      animationDuration={2000}
    />
  );
};

export default AliceSlider;
