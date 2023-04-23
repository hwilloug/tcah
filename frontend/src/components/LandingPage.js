import { useEffect, useState } from 'react'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Image from 'mui-image'
import Hours from './Hours'
import WelcomeCarousel from './WelcomeCarousel'

function LandingPage() {

  const [entries, setEntries] = useState([])

  const getEntries = async () => {
    const response = await axios.get('/api/entry')
    setEntries(response.data)
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <>
      <WelcomeCarousel />
      <Container
        sx={{
          display: 'flex'
        }}
      >
        <Container sx={{
          mt:'20px',
          flexShrink: 2
        }}>
          <Box>
            <Hours />
            <Button
              variant='contained'
              size='large'
              href='book'
            >Book an Appointment</Button>
          </Box>
        </Container>
        <Container sx={{flexGrow: 2}}>
          { entries.map((entry) => (
            <Paper
              elevation={3}
              sx={{
                padding: '10px',
                mt: '20px'
              }}
            >
              {entry.image_url && <Image src={entry.image_url} />}
              <h2>{entry.title}</h2>
              <p>{new Date(entry.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
              <p>{entry.content}</p>
            </Paper>
          )) }
        </Container>
      </Container>
    </>
  )
}

export default LandingPage