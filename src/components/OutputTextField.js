import React, { Component } from 'react';
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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
});

class OutputTextField extends Component {
  render() {
    const { classes, value } = this.props;

    return (
      <Paper className={classes.paper}>
        <TextField
          id="multiline-static"
          label="Output"
          multiline
          rows="4"
          defaultValue=""
          value={value}
          className={classes.textField}
          margin="normal"
        />
      </Paper>
    );
  }
}

OutputTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};

export default withStyles(styles)(OutputTextField);
