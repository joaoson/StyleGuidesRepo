import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Neymar Junior',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Cristiano Ronaldo',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'David Beckham', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Lionel Messi',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Robert Lewandowski',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

const rowsComplete = [
  createData(0,'16 Mar, 2019','Neymar Junior','Tupelo, MS','VISA ⠀•••• 3719',312.44),
  createData(1,'16 Mar, 2019','Cristiano Ronaldo','London, UK','VISA ⠀•••• 2574',866.99),
  createData(2, '16 Mar, 2019', 'David Beckham', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3,'16 Mar, 2019','Lionel Messi','Gary, IN','AMEX ⠀•••• 2000',654.39),
  createData(4,'15 Mar, 2019','Robert Lewandowski','Long Branch, NJ','VISA ⠀•••• 5919',212.79),
  createData(5,'14 Mar, 2019','Vinicius Junior','Los Angeles, CA','VISA ⠀•••• 5919',1233.79),
  createData(6,'14 Mar, 2019','Thomas Muller','Curitiba, PR','AMES ⠀•••• 3239',5433.79),
  createData(7,'13 Mar, 2019','Xabi Alonso','New York City, NY','MC ⠀•••• 1233',123.13)
];

export default function Orders() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={handleOpen} sx={{ mt: 3 }}>
        See more orders
      </Link>
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
            <Title>Recent Orders</Title>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsComplete.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </Typography>
        </Box>
      </Modal>
    </div>
    </React.Fragment>
  );
}