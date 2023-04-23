import Container from "@mui/system/Container"
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

function Hours() {
  return (
    <>
      <Typography variant='h6' fontWeight={700}>Hours:</Typography>
      <List>
        <ListItem>Monday-Thursday: 7 AM - 6 PM</ListItem>
        <ListItem>Friday: 7 AM - 12 PM</ListItem>
        <ListItem>Saturday-Sunday: closed</ListItem>
      </List>
    </>
  )
}

export default Hours