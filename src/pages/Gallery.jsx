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
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/297586854_368619445427433_2649671394772000535_n.jpg?stp=cp1_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=M6XNSkC8NpYAX938YfT&_nc_ht=scontent-lga3-1.xx&oh=00_AT_WwACVwg5N9SRBKS7IYeDvoUqMxN0ZF4wTAZqnVy1e4A&oe=62EFD185',
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/297507284_368619272094117_5617265993827434432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=poHwAmNpFLUAX-mFEmm&_nc_ht=scontent-lga3-1.xx&oh=00_AT9IrVg3q4_TOnJJoh_hPqC1gt4QVe2N_Q6ErbeLXj4jdA&oe=62EF39AC',
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/297469769_368634138759297_2414956586934223521_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-nLVvlQnwO8AX8yRzj-&_nc_ht=scontent-lga3-1.xx&oh=00_AT-UezYO6T3Yat5W8YB5T5U375JpommqSEniPAGitIutfA&oe=62F0DAE9',
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/297696787_368619535427424_4532791446874648532_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Nol4RlCA1ZgAX8cyFUc&_nc_ht=scontent-lga3-1.xx&oh=00_AT9izI5xFS8jMjYCRXxpSy_ZO2qBACXD21woFNimwG3pvA&oe=62EFB838',
        'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/297601741_368619512094093_4678971117372568693_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZYAoi15o2cUAX8BWWqK&_nc_ht=scontent-lga3-1.xx&oh=00_AT-qHcxp7xZoqz_S_sLOHOKSUdf9em9PpgcQ3OmoQERcjw&oe=62EF5EDC',
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