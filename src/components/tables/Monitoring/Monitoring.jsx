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
import { Title } from '../../Title/Title';

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

const dataStart = '2019-08-20';
const dataEnd = '2020-08-27';

export const Monitoring = () => {
  const classes = useStyles2();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.wifibox.getMonitoring(dataStart, dataEnd);
      setTableData(response.data);
    })();
  }, []);

  const handleChangePage = (event) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Title>Мониторинг</Title>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Дата</TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Авторизация</TableCell>
            <TableCell>Запросов на авторизацию</TableCell>
            <TableCell>Пользователей</TableCell>
            <TableCell>Сред. загрузка канала</TableCell>
            <TableCell>Сред. длина сессии, сек.</TableCell>
            <TableCell>Сред. объем трафика, Мбит</TableCell>
            <TableCell>Макс. объем трафика, Мбит</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
              ? tableData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : tableData
          ).map((row) => (
            <TableRow key={row.mac}>
              <TableCell component="td" scope="row">{row.date}</TableCell>
              <TableCell style={{width: 160}}>{row.name}</TableCell>
              <TableCell style={{width: 160}}>{row.tip}</TableCell>
              <TableCell style={{width: 160}}>{row.requests}</TableCell>
              <TableCell style={{width: 160}}>{row.users}</TableCell>
              <TableCell style={{width: 160}}>{row.channel_load}</TableCell>
              <TableCell style={{width: 160}}>{row.avg_time}</TableCell>
              <TableCell style={{width: 160}}>{row.avg_kb}</TableCell>
              <TableCell style={{width: 160}}>{row.max_kb}</TableCell>
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