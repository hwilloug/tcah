import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Image from 'mui-image'

function AboutPage() {

  const profiles = [
    {
      name: 'Dr. Paul Willoughby',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis odio iaculis, ornare felis sed, fringilla orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam maximus faucibus tortor, eget volutpat sem venenatis sit amet. Proin placerat viverra risus, ac pulvinar lectus fringilla id. Etiam porttitor ligula purus, vel gravida justo egestas eu. Curabitur quis varius nisl. Nulla bibendum eu nisi ultricies varius. Morbi ut magna eget augue fermentum luctus. In a velit tincidunt mauris posuere pulvinar. In hac habitasse platea dictumst. ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/640px-Golde33443.jpg'
    },
    {
      name: 'Assistant Girl',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis odio iaculis, ornare felis sed, fringilla orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam maximus faucibus tortor, eget volutpat sem venenatis sit amet. Proin placerat viverra risus, ac pulvinar lectus fringilla id. Etiam porttitor ligula purus, vel gravida justo egestas eu. Curabitur quis varius nisl.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg'
    },
    {
      name: 'Receptionist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis odio iaculis, ornare felis sed, fringilla orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam maximus faucibus tortor, eget volutpat sem venenatis sit amet. Proin placerat viverra risus, ac pulvinar lectus fringilla id.',
      image: 'https://images.ctfassets.net/sfnkq8lmu5d7/1NaIFGyBn0qwXYlNaCJSEl/ad59ce5eefa3c2322b696778185cc749/2021_0825_Kitten_Health.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg'
    }
  ]

  return (
    <Container sx={{padding: '40px'}}>
      <Typography variant='h4'>About Us</Typography>
      { profiles.map((profile) => (
        <Paper elevation={3} sx={{display: 'flex', padding: '20px', my:'20px'}}>
          <Image src={profile.image} width='25%'/>
          <Container sx={{pl: '20px'}}>
            <Typography variant="h5">{profile.name}</Typography>
            <Typography>{profile.bio}</Typography>
          </Container>
        </Paper>
      ))}
    </Container>
  )
}

export default AboutPage