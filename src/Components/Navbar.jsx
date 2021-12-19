import React from "react";
import "../Components/navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../img/logo1.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
const Navb = () => {
  return (
    <>
      <Navbar expand="lg" className="w-75 m-auto ">
        <Container fluid>
          <Navbar.Brand href="#"> <img src={logo} alt="" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              // style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Shop</Nav.Link>
              <NavDropdown title="Best Sellers" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action2">Deal of the day</Nav.Link>
              <NavDropdown title="Page" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Contact us</Nav.Link>
            </Nav>

            <Nav
              className="ms-auto my-2 my-lg-0 hidden-md"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><ShoppingCartIcon /></Nav.Link>
              <Nav.Link href="#action2"> <PersonIcon></PersonIcon> </Nav.Link>
              <Nav.Link href="#action2"> <FavoriteIcon /> </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>


      </Navbar>
      <Navbar expand="lg" className="w-75  m-auto ">
        <Box sx={{ minWidth: 120 }} className="w-25 hidden-md">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">All Components</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="All Categories"
            >
              <MenuItem value="Fruits">Fruits</MenuItem>
              <MenuItem value="Vegetable">Vegetable</MenuItem>
              <MenuItem value="Coco">Coco Cookies</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField id="outlined-basic" label="Search" variant="outlined" className="w-100" />
      </Navbar>
    </>)
}

export default Navb;


// /import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function BasicTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }
