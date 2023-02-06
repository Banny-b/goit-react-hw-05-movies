export const setSliderSettings = actors => {
  const settings = {
    slidesToShow: 4,
    arrows: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
  };

  if (actors < 5) {
    return { ...settings, slidesToShow: actors };
  }
  return settings;
};