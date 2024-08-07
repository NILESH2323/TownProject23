import React, { useEffect, useRef, useCallback } from 'react';
import { Box, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import { gsap } from 'gsap';
import $ from 'jquery';
import styles from './Trippool.module.css';
import TripForm from '../../Components/TripPooling/TripForm';
const theme = extendTheme({});

const imageUrls = [
  'https://picsum.photos/id/32/600/400/',
  'https://picsum.photos/id/33/600/400/',
  'https://picsum.photos/id/34/600/400/',
  'https://picsum.photos/id/35/600/400/',
  'https://picsum.photos/id/36/600/400/',
  'https://picsum.photos/id/37/600/400/',
  'https://picsum.photos/id/38/600/400/',
  'https://picsum.photos/id/39/600/400/',
  'https://picsum.photos/id/40/600/400/',
  'https://picsum.photos/id/41/600/400/',
];

const Trippool = () => {
  const carouselRef = useRef(null);
  const formRef = useRef(null);
  const xPos = useRef(0);

  useEffect(() => {
    const carouselElement = carouselRef.current;

    gsap.timeline()
      .set(carouselElement, { rotationY: 180, cursor: 'grab' })
      .set(`.${styles.img}`, {
        rotateY: (i) => i * -36,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundImage: (i) => `url(${imageUrls[i]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      })
      .from(`.${styles.img}`, {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo',
      })
      .add(() => {
        $(`.${styles.img}`).on('mouseenter', (e) => {
          let current = e.currentTarget;
          gsap.to(`.${styles.img}`, { opacity: (i, t) => (t === current ? 1 : 0.5), ease: 'power3' });
        });
        $(`.${styles.img}`).on('mouseleave', () => {
          gsap.to(`.${styles.img}`, { opacity: 1, ease: 'power2.inOut' });
        });
      }, '-=0.5');

    const dragStart = (e) => {
      if (e.touches) e.clientX = e.touches[0].clientX;
      xPos.current = Math.round(e.clientX);
      gsap.set(carouselElement, { cursor: 'grabbing' });
      $(window).on('mousemove touchmove', drag);
    };

    const drag = (e) => {
      if (e.touches) e.clientX = e.touches[0].clientX;

      gsap.to(carouselElement, {
        rotationY: '-=' + ((Math.round(e.clientX) - xPos.current) % 360),
        onUpdate: () => { gsap.set(`.${styles.img}`, { backgroundPosition: (i) => getBgPos(i) }) },
      });

      xPos.current = Math.round(e.clientX);
    };

    const dragEnd = () => {
      $(window).off('mousemove touchmove', drag);
      gsap.set(carouselElement, { cursor: 'grab' });
    };

    $(window).on('mousedown touchstart', dragStart);
    $(window).on('mouseup touchend', dragEnd);

    return () => {
      $(window).off('mousedown touchstart', dragStart);
      $(window).off('mouseup touchend', dragEnd);
    };
  }, []);

  const getBgPos = useCallback((i) => {
    return `${100 - gsap.utils.wrap(0, 360, gsap.getProperty(carouselRef.current, 'rotationY') - 180 - i * 36) / 360 * 500}px 0px`;
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex>
      <Box ref={formRef} p={4}>
          <TripForm />
        </Box>
      {/* <Box w="1px" bg="gray.200"></Box>
        <Box ref={carouselRef} className={styles.carousel}>
          <Box className={styles.stage}>
            <Box className={styles.container}>
              <Box className={styles.ring}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <Box key={i} className={styles.img}></Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box> */}
      </Flex>
    </ChakraProvider>
  );
};

export default Trippool;