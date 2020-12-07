import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};
InputField.defaultProps = {
  label: '',
  disabled: false,
};
function InputField(props) {
  const { name, form, label, disabled } = props;
  const { errors } = form;
  console.log({ errors });
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    //   Trong material UI gia tri 1 tuong duong 8px, 2 = 16px
    <Box mt={1} mb={2}>
      {/* Controller luon truyen 3 thuoc tinh: name, control, as. Nhung thuoc tinh con lai la cua TextField */}
      <Controller
        name={name}
        control={form.control}
        as={TextField}
        label={label}
        disabled={disabled}
        fullWidth
        variant="outlined"
        error={hasError}
        helperText={errorMessage}
      />

      {/* Controller render in case want to custom field*/}
      {/* <Controller
        name={name}
        control={form.control}
        render={({ value, onChange, onBlur }) => (
          <TextField
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value.toUpperCase())}
            // onChange={onChange}
            onBlur={onBlur}
            label={label}
            disabled={disabled}
            fullWidth
            variant="outlined"
          />
        )}
      /> */}
      {/* <TextField name={name} label={label} disabled={disabled} fullWidth variant="outlined" /> */}
    </Box>
  );
}

export default InputField;
