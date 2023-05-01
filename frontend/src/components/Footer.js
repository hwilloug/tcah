import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import FacebookIcon from '@mui/icons-material/Facebook'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'

function Footer() {
  return (
    <Container
      id='footer'
      sx={{
        padding: '10px',
        mt: '10px',
        backgroundColor: 'aliceblue'
      }}
    >
      <List>
        <ListItem><Typography sx={{fontWeight: '700'}}>
          <Link href='/' underline='none' color='inherit'>Tega Cay Animal Hospital</Link>
        </Typography></ListItem>
        <ListItem><Link href='/about' sx={{color: 'black'}}>About Us</Link></ListItem>
        <ListItem><Link href='/book' sx={{color: 'black'}}>Book an Appointment</Link></ListItem>
        <ListItem><Link href='/contact' sx={{color: 'black'}}>Contact Us</Link></ListItem>
        <ListItem><Link href='/sitemap' sx={{color: 'black'}}>Sitemap</Link></ListItem>
        <ListItem><FacebookIcon /></ListItem>
        </List>
      <Typography align='center'>© {new Date().getFullYear()} Willoughby Animal Hospitals, Inc</Typography>
    </Container>
  )
}

export default Footer