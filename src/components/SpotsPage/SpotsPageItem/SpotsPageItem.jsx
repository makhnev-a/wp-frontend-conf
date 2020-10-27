import React from "react";
import {Button, Fab, Grid} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {green} from "@material-ui/core/colors";
import AddIcon from '@material-ui/icons/Add';
import {api} from "../../../api/api";
import useFetchTest from "../../../hooks/useFetch";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '50%',
      margin: theme.spacing(1),
    }
  }
}));

const nasid = 19217252;

export const SpotsItem = ({spotId}) => {
  const classes = useStyles();

  const formPrevent = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  };

  const {data, error} = useFetchTest(
    api.nas.getOneNasRow(nasid),
    (response) => {
      return response;
    }
  );

  console.log(data);

  return (
    <form className={classes.root} onSubmit={formPrevent}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id='name'
            name='name'
            variant='outlined'
            label='Название'
            value={data.data ? data.data.name : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='title'
            name='title'
            variant='outlined'
            label='Заголовок страницы'
          />
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="upload-test">
            <input
              type="file"
              id='upload-test'
              style={{display: 'none'}}
              name='upload-test'
            />
            <Fab
              style={{backgroundColor: '#027032', color: '#fff'}}
              size='small'
              component='span'
              aria-label='add'
              variant='extended'
            >
              <AddIcon/> Фон страницы
            </Fab>
          </label>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="upload-test2">
            <input
              type="file"
              id='upload-test2'
              style={{display: 'none'}}
              name='upload-test2'
            />
            <Fab
              style={{backgroundColor: '#027032', color: '#fff'}}
              size='small'
              component='span'
              aria-label='add'
              variant='extended'
            >
              <AddIcon/> Логотип
            </Fab>
          </label>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<GreenCheckbox checked={true} name="checkedG"/>}
            label="Фон плиткой"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='text_color'
            name='text_color'
            variant='outlined'
            label='Цвет текста'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='url'
            name='url'
            variant='outlined'
            label='URL адрес'
            value={data.data ? data.data.url : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='session_limit'
            name='session_limit'
            variant='outlined'
            label='Лимит сессии'
            value={data.data ? data.data.timeout : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='mac'
            name='mac'
            variant='outlined'
            label='Идентификатор точки доступа (MAC)'
            value={data.data ? data.data.mac : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='password'
            name='password'
            variant='outlined'
            label='Пароль точки доступа'
            value={data.data ? data.data.uam : ''}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            color='primary'
            type='submit'
            variant='contained'
          >Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};