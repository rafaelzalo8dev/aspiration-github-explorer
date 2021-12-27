import * as React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import { get } from 'lodash';

function InfoWarning(props) {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {open &&
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert severity={get(props, 'type', 'info')}>{get(props, 'message', 'Warning')}</Alert>
        </Snackbar>
      }
    </div>
  );
}

InfoWarning.props = {
  message: PropTypes.string,
  type: PropTypes.string,
  open: PropTypes.boolean,
};

export default InfoWarning;
