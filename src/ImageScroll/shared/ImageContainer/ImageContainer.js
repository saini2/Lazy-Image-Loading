import React from "react";
import s from "./ImageContainer.module.scss";
import useIntersectionObserver from "../../utils/http/hooks/use-intersection-observer";

const ImageContainer = props => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);
useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    }
  });
const aspectRatio = (props.height / props.width) * 100;
return (
    <div
      ref={ref}
      className={s.imageContainer}
      style={{ paddingBottom: !isVisible ? `${aspectRatio}%` : 0 }}
    >
      {isVisible && (
        <img className="image" src={props.src} alt={props.alt} />
       )}
    </div>
  );
};
export default ImageContainer;