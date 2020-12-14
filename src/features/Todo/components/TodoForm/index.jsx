import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormFields/InputField';
import TextareaField from 'components/FormFields/TextareaField';
import { Box, Button, Typography } from '@material-ui/core';
import CheckboxField from 'components/FormFields/CheckboxField';

TodoForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};
TodoForm.defaultProps = {
  initialValues: {
    value: '',
    description: '',
    completed: false,
  },
};

function TodoForm({ initialValues, onSubmit }) {
  const schema = yup.object().shape({
    value: yup
      .string()
      .required('Field is required')
      .min(5, 'Should be at least 5 characters')
      .test('Ten mo ta validate lam gi', 'Please enter at least 2 words', (value) => {
        return value.split(' ').filter((x) => !!x).length >= 2;
      }),
    description: yup.string().when('value', {
      is: 'yen', // alternatively: (val) => val == true
      then: yup.string().required('Nhap di'),
      otherwise: yup.string(),
    }),
    completed: yup.boolean(),
  });

  console.log({ initialValues });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues || { value: '', description: '', completed: false },
    resolver: yupResolver(schema),
  });

  //set form values whenever intitialValues changes
  const { setValue } = form;
  useEffect(() => {
    setValue('value', initialValues ? initialValues.value : '');
    setValue('description', initialValues?.description || ''); //another way to write
    setValue('completed', initialValues?.completed || false);
  }, [initialValues, setValue]);

  const handleFormSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);

      form.reset();
    }
    console.log('Form Submit:', values);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit(handleFormSubmit)}>
      <Typography component="h2" variant="h5">
        Todo Form
      </Typography>

      <InputField name="value" label="Title" form={form} />
      <TextareaField name="description" label="Description" form={form} />
      <CheckboxField name="completed" label="I've completed this tast!" form={form}/>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
