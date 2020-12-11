const ImageObserver = (dataNode) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }
      const image = dataNode;
      image.src = image.dataset.src;
      image.removeAttribute('data-loading');
      image.removeAttribute('data-src');
      observer.unobserve(dataNode);
    }, { rootMargin: '200px' },
  );
  return observer;
};

export default ImageObserver;
