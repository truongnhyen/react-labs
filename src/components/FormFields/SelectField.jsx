import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  option: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};
SelectField.defaultProps = {
  label: '',
  disabled: false,
};
function SelectField(props) {
  const { name, form, label, disabled, options } = props;
  const { errors } = form;
  console.log({ errors });
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    //   Trong material UI gia tri 1 tuong duong 8px, 2 = 16px
    <Box mt={1} mb={2}>
      <FormControl variant="outlined" error={hasError}>
        <InputLabel id={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ value, onChange, onBlur }) => (
            <Select labelId={name} value={value} label={label} onChange={onChange} onBlur={onBlur}>
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value} disabled={disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </Box>
  );
}

export default SelectField;
