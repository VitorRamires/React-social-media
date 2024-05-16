import React from 'react';

const validateType = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email não valido',
  },
};

const useForm = (inputType) => {
  const [error, setError] = React.useState(null);
  const [value, setValue] = React.useState('');

  function validate(typeValue) {
    if (inputType === false) return true;
    if (typeValue.length === 0) {
      setError('Complete o campo');
    } else if (
      validateType[inputType] &&
      !validateType[inputType].regex.test(typeValue)
    ) {
      setError(validateType[inputType].message);
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);
    if (error) {
      validate(target.value);
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
