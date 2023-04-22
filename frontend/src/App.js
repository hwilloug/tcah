import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import AdbIcon from '@mui/icons-material/Adb'
import Button from '@mui/material/Button'
import FacebookIcon from '@mui/icons-material/Facebook'
import Image from 'mui-image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'

function App() {

  const [entries, setEntries] = useState([])
  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = [
    {
      name: 'About Us',
      url: '/about'
    },
    {
      name: 'Book an Appointment',
      url: '/book'
    }
  ]

  const getEntries = async () => {
    const response = await axios.get('/api/entry')
    setEntries(response.data)
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <div className="App">
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Tega Cay Animal Hospital
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
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
          <Container sx={{mt:'20px'}}>
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
              >Book an Appointment</Button>
            </Box>
          </Container>
          <Container>
            { entries.map((entry) => (
              <Box
                sx={{
                  border: '1px solid blue',
                  padding: '10px',
                  mt: '20px'
                }}
              >
                <h2>{entry.title}</h2>
                <p>{entry.date}</p>
                <p>{entry.content}</p>
              </Box>
            )) }
          </Container>
        </Container>
      </main>
      <footer>
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
              Tega Cay Animal Hospital
            </Typography></ListItem>
            <ListItem><Link href='/about' sx={{color: 'black'}}>About Us</Link></ListItem>
            <ListItem><Link href='/book' sx={{color: 'black'}}>Book an Appointment</Link></ListItem>
            <ListItem><Link href='/sitemap' sx={{color: 'black'}}>Sitemap</Link></ListItem>
            <ListItem><FacebookIcon /></ListItem>
            </List>
          <Typography align='center'>© Willoughby Animal Hospitals, Inc</Typography>
        </Container>
      </footer>
    </div>
  );
}

export default App;
