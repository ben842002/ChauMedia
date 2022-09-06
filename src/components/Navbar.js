import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between"}}
      zIndex={99}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center"}}>
        <img src={logo} alt="logo" height={45} />
        <Typography sx={{ display: {md: "block", xs: "none" }}} variant="h5" fontWeight="bold" color="#fff" ml={1.75}>ChauMedia</Typography>
      </Link>

      <SearchBar />

    </Stack>
)


export default Navbar;