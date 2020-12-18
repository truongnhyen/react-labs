import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  FormLabel,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

OptionField.propTypes = {
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
  onChange: PropTypes.func, // them prop onChange de trigger ra ngoai input khac
};
OptionField.defaultProps = {
  label: '',
  disabled: false,
  onChange: null,
};
function OptionField(props) {
  const { name, form, label, disabled, options } = props;
  const { errors } = form;
  console.log({ errors });
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;
  const externalOnChange = props.onChange || (() => {}); // them prop onChange de trigger ra ngoai input khac

  return (
    //   Trong material UI gia tri 1 tuong duong 8px, 2 = 16px
    <Box mt={1} mb={2}>
      <FormControl component="fieldset" error={hasError}>
        <FormLabel component="legend">{label}</FormLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ value, onChange, onBlur }) => (
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              {options.map((option) => (
                <Button
                  type="button"
                  variant={option.value === value ? 'contained' : 'outlined'}
                  onClick={() => {
                    onChange(option.value);
                    externalOnChange(option.value); // them prop onChange de trigger ra ngoai input khac
                  }}
                  key={option.value}
                  disabled={disabled}
                  onBlur={onBlur}
                >
                  {option.label}
                </Button>
              ))}
            </ButtonGroup>
          )}
        />

        <FormHelperText>{errorMessage}</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default OptionField;
