import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Carousel() {
   const [slider, setSlider] = React.useState(null);

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });
    const cards = [
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/297469769_368634138759297_2414956586934223521_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Lwz9QP3fzmkAX9Gp9Go&_nc_ht=scontent-lga3-1.xx&oh=00_AT-zXFBfrtXXH8fXgtNdgxomFTF9KKDN1am29CBNv0JufQ&oe=63069BA9',
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/297696787_368619535427424_4532791446874648532_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NW0esPcwgt0AX-NQuh0&tn=2ywv405J7m20fwDH&_nc_ht=scontent-lga3-1.xx&oh=00_AT-2HQgK10CRuVrEntuD-kJ8A8f6wO2GBytIUJ_nDZoJcw&oe=63077338',
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/297507284_368619272094117_5617265993827434432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ABegsup3K3sAX9NKQe8&tn=2ywv405J7m20fwDH&_nc_ht=scontent-lga3-1.xx&oh=00_AT9dQZd0lkbQk98pycRipn2ROl7tc6Zo3W0GaFSuRedkwA&oe=6306F4AC',
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/297601741_368619512094093_4678971117372568693_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uwex0Lc_JsQAX_WL-6S&_nc_ht=scontent-lga3-1.xx&oh=00_AT93AG5iLBszMZJICewnosESIcIbSUC2L3LLWoUjgAGBHQ&oe=630719DC',
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/297586854_368619445427433_2649671394772000535_n.jpg?stp=cp1_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zAPrlw5qxLsAX-_FLdo&tn=2ywv405J7m20fwDH&_nc_ht=scontent-lga3-1.xx&oh=00_AT8kJeo3WlKhULU0-6tap-QGUespBt-iEs67SDWP3-gxpg&oe=63078C85',
    ];

    return (
        <Box
            position={'relative'}
            height={'900px'}
            width={'full'}
            overflow={'hidden'}>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt />
            </IconButton>
            <IconButton
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt />
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((url, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${url})`}
                    />
                ))}
            </Slider>
        </Box>
    );
}