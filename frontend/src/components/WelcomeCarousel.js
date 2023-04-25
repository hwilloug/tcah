import Carousel from 'react-material-ui-carousel'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Image from 'mui-image'

function WelcomeCarousel() {

    const items = [
        {
            name: "Intro",
            description: "Compassionate Pet Care and Great Value since 1995!",
            image:'dogs_running.jpg'
        },
        {
            name: "Review #1",
            description: '"Dr. Willoughby is a blessing and I am so grateful he is there for our four-legged family members."',
            image: 'https://images.ctfassets.net/82d3r48zq721/7qPXmQEeuMh0kfZWm7jFkK/fa9c027cb990d428a070fecf6a981af2/Kitten-playing-with-a-ball_resized.jpg?w=1000&h=666&q=50&fm=webp'
        },
        {
            name: "Review #2",
            description: '"The Dr. and the staff are top notch and care for your pet as if it was theirs."',
            image: "https://cdn.royalcanin-weshare-online.io/UCImMmgBaxEApS7LuQnZ/v2/eukanuba-market-image-puppy-beagle?w=5596&h=2317&rect=574,77,1850,1045&auto=compress,enhance"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => {
                    return (
                        <Paper>
                            <Image src={item.image} />
                            <Typography
                                variant='h5'
                                sx={{
                                    fontWeight: 700,
                                    color: 'white',
                                    position: 'absolute',
                                    top: '4rem',
                                    left: '2rem',
                                    padding: '20px'
                                }}
                                >
                                    {item.description}
                                </Typography>
                        </Paper>
                    )
                } )
            }
        </Carousel>
    )
}

export default WelcomeCarousel