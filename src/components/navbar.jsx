import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, TextField, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <TextField
              variant="outlined"
              label="Input Field"
              InputProps={{
                style: {
                  color: 'white',
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
          </Box>
          <Button color="inherit">Login</Button>
          <Badge badgeContent={4} color="primary">
            <ShoppingCart color="white" />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
