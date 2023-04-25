import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Hours from "./Hours";

function BookPage() {
  return (
    <Container sx={{my: '20px', height:'60vh'}}>
      <Paper elevation={3} sx={{p: '20px', m: '20px'}}>
      <Typography variant='h5' align='center'>Book an Appointment</Typography>
      <Typography variant='h6' align='center'>Call us to make an appointment:</Typography>
      <Typography align='center' fontWeight={700}>+1 (803) 548-2590</Typography>
      </Paper>
      <Hours />
    </Container>
  )
}

export default BookPage