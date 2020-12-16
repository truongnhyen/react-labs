import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

RadioField.propTypes = {
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
RadioField.defaultProps = {
  label: '',
  disabled: false,
};
function RadioField(props) {
  const { name, form, label, disabled, options } = props;
  const { errors } = form;
  console.log({ errors });
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    //   Trong material UI gia tri 1 tuong duong 8px, 2 = 16px
    <Box mt={1} mb={2}>
      <FormControl component="fieldset" error={hasError}>
        <FormLabel component="legend">{label}</FormLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ value, onChange, onBlur }) => (
            <RadioGroup
              aria-label="gender"
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  disabled={disabled}
                />
              ))}
            </RadioGroup>
          )}
        />
      </FormControl>
    </Box>
  );
}

export default RadioField;
