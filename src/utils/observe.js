import 'intersection-observer';
import ImageObserver from './ImageObserver';

const dataLoadingNodes = document.querySelectorAll('[data-loading]');
dataLoadingNodes.forEach((dataNode) => {
  const imageObserver = ImageObserver(dataNode);
  imageObserver.observe(dataNode);
});
