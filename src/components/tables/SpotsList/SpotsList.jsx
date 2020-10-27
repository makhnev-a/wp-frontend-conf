import React, {useEffect, useState} from "react";
import {Title} from "../../Title/Title";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import {useStyles1, useStyles2} from '../Monitoring/styles';
import {useTheme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import LastPageIcon from "@material-ui/icons/LastPage";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import {api} from "../../../api/api";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';

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

const dogid = 1978182;

export const SpotsList = () => {
  const classes = useStyles2();
  const history = useHistory();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.wifibox.getSpotsTable(dogid);
      setTableData(response.data.data);
    })();
  }, []);

  const handleChangePage = (event) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Title>Точки подключения</Title>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Авторизация</TableCell>
            <TableCell>URL адрес</TableCell>
            <TableCell>Лимит сессии (минут)</TableCell>
            <TableCell>Опции</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
              ? tableData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : tableData
          ).map((row) => (
            <TableRow key={row.mac}>
              <TableCell component="td" scope="row">{row.name}</TableCell>
              <TableCell style={{width: 160}}>{row.tip}</TableCell>
              <TableCell style={{width: 160}}>{row.url}</TableCell>
              <TableCell style={{width: 160}}>{row.timeout}</TableCell>
              <TableCell style={{width: 160}}>

                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => history.push(`/spots/${row.id}/edit`)}
                >Редактировать</Button>
              </TableCell>
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
};