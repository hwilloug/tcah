import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

function App() {

  let [entries, setEntries] = useState([])

  const getEntries = async () => {
    const response = await axios.get('/api/entry')
    setEntries(response.data)
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <div className="App">
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Tega Cay Animal Hospital
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        { entries.map((entry) => (
          <>
            <h2>{entry.title}</h2>
            <p>{entry.date}</p>
            <p>{entry.content}</p>
          </>
        )) }
      </main>
      <Container
        id='footer'
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0
        }}
        elevation={3}
      >
        <p>Compassionate Pet Care and Great Value since 1995!</p>
        <p>© Willoughby Animal Hospitals, Inc</p>
      </Container>
    </div>
  );
}

export default App;
