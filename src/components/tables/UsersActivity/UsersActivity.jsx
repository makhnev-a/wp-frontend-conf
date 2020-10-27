import React, {useEffect, useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import {useStyles1, useStyles2} from './styles';
import {api} from "../../../api/api";
import {Title} from '../../Title/Title';

function TablePaginationActions({count, page, rowsPerPage, onChangePage}) {
  const classes = useStyles1();
  const theme = useTheme();

  const handleFirstPageButtonClick = (event) => onChangePage(event, 0);
  const handleLastPageButtonClick = (event) => onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

  const handleNextButtonClick = (event) => onChangePage(event, page + 1);
  const handleBackButtonClick = (event) => onChangePage(event, page - 1);

  return (
    <div className={classes.root}>
      {/*Кнопка вернуть в начало*/}
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
      </IconButton>
      {/*Кнопка назад*/}
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
      </IconButton>
      {/*Кнопка вперед*/}
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
      </IconButton>
      {/*Кнопка вернуть в конец*/}
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
      </IconButton>
    </div>
  );
}

const nasid = 19217252;
const dataStart = '2019-08-20';
const dataEnd = '2020-08-27';

const getDataTable = async () => api.wifibox.getUsersActivity(nasid, dataStart, dataEnd);

export const UsersActivity = () => {
  const classes = useStyles2();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getDataTable();
      setTableData(response.data);
    })();
  }, [])

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Title>Активность пользователей</Title>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Mac</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Session start</TableCell>
            <TableCell>Session end</TableCell>
            <TableCell>Traffic size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
              ? tableData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : tableData
          ).map((row) => (
            <TableRow key={row.mac}>
              <TableCell component="td" scope="row">{row.mac}</TableCell>
              <TableCell style={{width: 160}}>{row.phone}</TableCell>
              <TableCell style={{width: 160}}>{row.start}</TableCell>
              <TableCell style={{width: 160}}>{row.stop}</TableCell>
              <TableCell style={{width: 160}}>{row.traffic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
              colSpan={3}
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {'aria-label': 'rows per page'},
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}