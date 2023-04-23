import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography'
import Hours from "./Hours";

function BookPage() {
  return (
    <Container sx={{my: '20px', height:'60vh'}}>
      <Typography variant='h5' align='center'>Book an Appointment</Typography>
      <Typography variant='h6' align='center'>Call us to make an appointment:</Typography>
      <Typography align='center' fontWeight={700}>+1 (803) 548-2590</Typography>
      <Hours />
    </Container>
  )
}

export default BookPage