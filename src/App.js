import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InputTextField from './components/InputTextField';
import OutputTextField from './components/OutputTextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import btoa from 'btoa';
import atob from 'atob';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
});

class App extends Component {
  state = {
    input: '',
    output: '',
  };

  handleClick = event => {
    try {
      const convertType = event.currentTarget.getAttribute('name');
      const result = convertType === 'encode' ? btoa(this.state.input) : atob(this.state.input);
      this.setState({
        output: result,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Grid container spacing={24}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <InputTextField
              onChange={this.handleChange('input')}
              onClick={this.handleClick}
              value={this.state.input}
            />
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <OutputTextField value={this.state.output} />
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
