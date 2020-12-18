import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, FormLabel, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

RandomPhotoField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};
RandomPhotoField.defaultProps = {
  label: '',
  disabled: false,
};
function RandomPhotoField(props) {
  const { name, form, label, disabled, type } = props;
  const { errors } = form;
  console.log({ errors });
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  const handleRandomClick = (onChange) => {
    //random number
    const randomNumber = Math.trunc(Math.random() * 1000);

    //build new url
    const newValue = `https://picsum.photos/id/${randomNumber}/400/200`;

    //update control value: onChange
    onChange(newValue);
  };

  const handleRandomClick2 = () => {
    //random number
    const randomNumber = Math.trunc(Math.random() * 1000);

    //build new url
    const newValue = `https://picsum.photos/id/${randomNumber}/400/200`;

    //update control value: onChange
    form.setValue(name, newValue, { shouldValidate: true });
  };

  return (
    //   Trong material UI gia tri 1 tuong duong 8px, 2 = 16px
    <Box mt={1} mb={2}>
      <FormLabel>{label}</FormLabel>

      <Controller
        name={name}
        control={form.control}
        render={({ value, onChange }) => (
          <Box>
            <Box
              component="img"
              src={value || 'https://via.placeholder.com/400x200'}
              onError={() => handleRandomClick(onChange)}
            />
            <Button type="button" onClick={handleRandomClick2}>
              Random Photo
            </Button>
          </Box>
        )}
      />
    </Box>
  );
}

export default RandomPhotoField;
