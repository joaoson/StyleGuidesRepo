import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export function MainListItems(){

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false)
    console.log()
  };


  const handleOpen = event => {
    setOpen(true)
    console.log(event.target.id)
    if(event.target.parentElement.id === "order" ||event.target.parentElement.id === "order2" || event.target.parentElement.parentElement.id === "order3" || event.target.id === "order3"){
      document.getElementById("modal-modal-title").innerHTML = "Orders";
      document.getElementById("modal-modal-description").innerHTML = "Here will be listed your orders";
    }
    else if(event.target.parentElement.id === "customers" || event.target.parentElement.id === "customers2" || event.target.parentElement.parentElement.id === "customers3" || event.target.id === "customers3"){
      document.getElementById("modal-modal-title").innerHTML = "Customers";
      document.getElementById("modal-modal-description").innerHTML = "Here will be your customers";
    }
    else if(event.target.parentElement.id === "reports" || event.target.parentElement.id === "reports2" || event.target.parentElement.parentElement.id === "reports3" || event.target.id === "reports3"){
      document.getElementById("modal-modal-title").innerHTML = "Reports";
      document.getElementById("modal-modal-description").innerHTML = "Here will be your reports";
    }
    else if(event.target.parentElement.id === "integrations" || event.target.parentElement.id === "integrations2" || event.target.parentElement.parentElement.id === "integrations3" || event.target.id === "integrations3"){
      document.getElementById("modal-modal-title").innerHTML = "Integrations";
      document.getElementById("modal-modal-description").innerHTML = "Here will be your integrations";
    }
  }

  return (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <Divider variant="inset" />
    <ListItemButton id='order3'  onClick={handleOpen}>
      <ListItemIcon >
        <ShoppingCartIcon id='order2'/>
      </ListItemIcon>
      <ListItemText id='order' onClick={handleOpen} primary="Orders" />
    </ListItemButton>
    <Divider variant="inset"/>
    <ListItemButton id='customers3' onClick={handleOpen}>
      <ListItemIcon >
        <PeopleIcon id='customers2' />
      </ListItemIcon>
      <ListItemText id='customers' onClick={handleOpen} primary="Customers" />
    </ListItemButton>
    <Divider variant="inset"/>
    <ListItemButton id='reports3' onClick={handleOpen}>
      <ListItemIcon >
        <BarChartIcon id='reports2'/>
      </ListItemIcon>
      <ListItemText id='reports' onClick={handleOpen} primary="Reports" />
    </ListItemButton >
    <Divider variant="inset" /> 
    <ListItemButton id='integrations3' onClick={handleOpen}>
      <ListItemIcon >
        <LayersIcon  id='integrations2'/>
      </ListItemIcon>
      <ListItemText id='integrations' onClick={handleOpen} primary="Integrations" />
    </ListItemButton>
    <div>
      <Modal
        keepMounted 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal Title
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
    
  </React.Fragment>)
  
};


export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);