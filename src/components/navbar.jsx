import React from 'react'
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material"
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
