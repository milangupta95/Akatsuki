import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box,CircularProgress } from '@mui/material';
import CouponTableRow from './CouponTableRow';

const columns = [
  { id: 'code', label: 'Coupon Code', minWidth: 140 },
  { id: 'date_created', label: 'Date Created', minWidth: 120 },
  {
    id: 'date_expiry',
    label: 'Date Expiry',
    minWidth: 120,

    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'min_purchase_val',
    label: 'Minimum Purchase value',
    minWidth: 200,

    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'discount',
    label: 'Discount',
    minWidth: 100,

    format: (value) => value.toFixed(2),
  },
  {
    id: 'prev_purchase_value',
    label: 'Previous Purchase Value',
    minWidth: 200,

    format: (value) => value.toFixed(2),
  },
  {
    id: 'prev_freq_value',
    label: 'Store Visit Freq',
    minWidth: 200,
  },
  {
    minWidth: 250
  }
];




export default function CouponsTable({coupons,setCoupons,loading,setLoading,error,setError}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    loading ? <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box> : error ? <div>There Might Be Some error</div> : <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ backgroundColor: 'secondary' }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={'center'}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {coupons
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <CouponTableRow coupon={row} coupons={coupons} setCoupons={setCoupons} />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={coupons.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}