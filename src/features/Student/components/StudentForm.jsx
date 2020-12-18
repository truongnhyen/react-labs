import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@material-ui/core';
import InputField from 'components/FormFields/InputField';
import OptionField from 'components/FormFields/OptionField';
import RadioField from 'components/FormFields/RadioField';
import RandomPhotoField from 'components/FormFields/RandomPhotoField';
import SelectField from 'components/FormFields/SelectField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

StudentForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};
StudentForm.defaultProps = {
  initialValues: null,
};

function StudentForm({ initialValues, onSubmit }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter your name')
      .test(
        'validate at least 2 words of 3 characters',
        'Should be at least 2 words and each word has more than 3 charaters',
        (value) => {
          return value.split(' ').filter((x) => x.length >= 3).length >= 2;
        }
      ),
    age: yup
      .number()
      .required('Please enter your age')
      .min(18, 'Should be greater than or equal to 18.')
      //validate field dua tren 2 field khac neu thoa dieu kien
      .when(['level', 'city'], {
        is: (level, city) => city === 'hcm' && level === 'middle', // this is a function
        then: yup.number().min(25),
      })
      .when(['level', 'city'], {
        is: (level, city) => city === 'hcm' && level === 'senior',
        then: yup.number().min(30),
      }),
    gender: yup.string(),
    city: yup.string().required(),
    avatar: yup.string().url('Avatar must be an URL'),
  });

  console.log({ initialValues });

  //Phai tao gia tri ban dau cua field khi su dung form
  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues || {
      name: '',
      age: '',
      gender: 'male',
      city: '',
      level: 'junior',
      avatar: '',
    },
    resolver: yupResolver(schema),
  });

  //how to get specified inputs from the same Control and show difference place: Use Watch
  const avatar = form.watch('avatar');
  console.log(avatar);

  const handleFormSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);

      //form.reset();
    }
    console.log('Form Submit:', values);
  };

  const { isSubmitting } = form.formState;

  return (
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit(handleFormSubmit)}>
      {/* <Box component="img" src={avatar || 'https://via.placeholder.com/400x200'}></Box> */}

      <Typography component="h2" variant="h5">
        Student Form
      </Typography>

      <InputField name="name" label="Fullname" form={form} />
      <InputField name="age" type="number" label="Age" form={form} />
      <RadioField
        name="gender"
        label="Gender"
        form={form}
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ]}
      />
      <SelectField
        name="city"
        label="City"
        form={form}
        options={[
          { value: 'hcm', label: 'TP.HCM' },
          { value: 'pt', label: 'Phan Thiet' },
          { value: 'td', label: 'Thu Duc' },
          { value: 'hn', label: 'Ha Noi' },
          { value: 'dn', label: 'Da Nang' },
        ]}
      />

      <OptionField
        name="level"
        label="Experience Level"
        form={form}
        options={[
          { value: 'junior', label: 'Junior' },
          { value: 'middle', label: 'Middle' },
          { value: 'senior', label: 'Senior' },
        ]}
        // them prop onChange de trigger input ben ngoai: input age
        //in this case trigger de validate lai age input khi click
        onChange={() => form.trigger('age')}
      />

      <RandomPhotoField name="avatar" label="Avatar" form={form} />
      <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default StudentForm;
