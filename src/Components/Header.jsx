import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styled from '@emotion/styled';



function Header() {
  const aboutUsContent = "This website is a movie discovery platform created for people who love movies, stories, and entertainment. Our goal is to make it simple and enjoyable to explore movies, discover new favorites, and learn more about the films you love."



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#3d3918 " }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* navbar logo */}
            <img width={"50px"} src="https://i.pinimg.com/originals/58/b9/b7/58b9b78eba1557e8bcf18728abdde652.jpg" alt="icon" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none fw-bolder'> Film-World</Link>
          </Typography>

           {/* <form class="d-flex mx-5 " role="search">
        <input class="form-control me-2 pb-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-light fw-bolder" type="submit">Search</button>
      </form> */}


          <Tooltip title={aboutUsContent}> <Button color="inherit" className='fs-9 fw-bolder mx-4' sx={{ fontFamily: "'Oswald', sans-serif" }}>About-us</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header