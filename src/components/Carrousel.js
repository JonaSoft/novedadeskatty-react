import React, { Fragment,useState } from 'react';


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import img1 from '../imagenes/img3.jpg' ;
import img2 from '../imagenes/img2.jpg';
import img3 from '../imagenes/img1.jpg';



const items = [
  {
    src: img1,
    altText: 'STORE KATTY',
    caption: 'Seriedad - Eficiencia - Calidad.'
  },
  {
    src: img2,
    altText: 'En todos nuestros productos.',
    caption: 'Lo que imaginas y buscas, aquí'
  },
  {
    src: img3,
    altText: '24/7',
    caption: 'Disponibilidad para toda ocasión'
  }
];

const Carrousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem  
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
         <CarouselCaption  className="text-light textocarrousel  font-italic Italica" captionText={item.caption}  />
         
        <img className="m-2"src={item.src} alt={item.altText} width="100%" height="370px" />
       

       
      </CarouselItem>
    );
  });

  return (
    <Fragment>
        <div id="carrousel" className="container justify-content-center ">

            <Carousel   
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    </Fragment>
  );
}

export default Carrousel;