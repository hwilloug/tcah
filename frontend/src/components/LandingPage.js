import { useEffect, useState } from 'react'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Image from 'mui-image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

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
      <Container disableGutters>
        <Image 
          src='dogs_running.jpg'
        />
        <Typography
          variant='h4'
          sx={{
            fontWeight: 700,
            color: 'white',
            position: 'absolute',
            top: '7rem',
            left: '3rem',
          }}
        >
          Compassionate Pet Care and Great Value since 1995!
        </Typography>
      </Container>
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
            <Typography variant='h6'>Hours:</Typography>
            <List>
              <ListItem>Monday-Thursday: 7 AM - 6 PM</ListItem>
              <ListItem>Friday: 7 AM - 12 PM</ListItem>
              <ListItem>Saturday-Sunday: closed</ListItem>
            </List>
            <Button
              variant='contained'
              size='large'
              href='book'
            >Book an Appointment</Button>
          </Box>
        </Container>
        <Container sx={{flexGrow: 2}}>
          { entries.map((entry) => (
            <Box
              sx={{
                border: '1px solid lightgrey',
                borderRadius: '5px',
                padding: '10px',
                mt: '20px'
              }}
            >
              <h2>{entry.title}</h2>
              <p>{new Date(entry.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
              <p>{entry.content}</p>
            </Box>
          )) }
        </Container>
      </Container>
    </>
  )
}

export default LandingPage