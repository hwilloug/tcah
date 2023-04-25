import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'
import Hours from "./Hours";

function ContactPage() {

  const center = {
    lat: 35.0545,
    lng: -81.0075
  }

  return (
    <Container sx={{display: {md: 'flex'}, padding: '10px'}}>
      <Container sx={{mt: '50px'}}>
        <Typography variant='h5'>Contact Us</Typography>
        <Hours />
        <Typography fontWeight={700} sx={{mt: '30px'}}>We are located at:</Typography>
        <Typography>
          2152 Gold Hill Rd<br />
          Fort Mill, SC 29708
        </Typography>
        <Typography fontWeight={700} sx={{mt: '30px'}}>Call us at:</Typography>
        <Typography>+1 (803) 548-2590</Typography>
      </Container>
      <Container sx={{alignSelf: 'center'}}>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={{width: '400px', height: '400px'}}
            center={center}
            zoom={16}
          >
          </GoogleMap>
        </LoadScript>
      </Container>
    </Container>
  )
}

export default ContactPage