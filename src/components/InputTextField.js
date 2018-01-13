import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
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

class InputTextField extends Component {
  render() {
    const { classes, value, onChange, onClick } = this.props;

    return (
      <Paper className={classes.paper}>
        <TextField
          id="multiline-static"
          label="Input"
          multiline
          rows="4"
          defaultValue=""
          className={classes.textField}
          value={value}
          onChange={onChange}
          margin="normal"
        />
        <Button
          color="primary"
          className={classes.button}
          name='encode'
          onClick={onClick}
        >
          Encode
        </Button>
        <Button
          color="accent"
          className={classes.button}
          name='decode'
          onClick={onClick}
        >
          Decode
        </Button>
      </Paper>
    );
  }
}

InputTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(InputTextField);
