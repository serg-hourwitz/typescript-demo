// * Base
import { Formik } from 'formik';
import Field from '../Field/Field';

// * Components
import Button from '../Button/Button';
import FORM from '../helpers/form';
import Select from '../Select/Select';
import Radio from '../Radio/Radio';
import Checkbox from '../Checkbox/Checkbox';

// * Styles
import styles from './RegistrationForm.module.css';

// * Local constants
const INITIAL_VALUES = {
  email: '',
  password: '',
  username: '',
  phone: '+380',
};

const RegistrationForm = () => {
  const validators = ({ email, username, password }) => {
    const errors = {};

    if (!email) {
      errors.email = 'Email required';
    } else if (!FORM.EMAIL_REG_EXP.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!username) {
      errors.username = 'Username required';
    } else if (username.length < FORM.USERNAME_MIN_LENGTH) {
      errors.username = `Username must consist not less of ${FORM.USERNAME_MIN_LENGTH} symbols`;
    }

    if (!password) {
      errors.password = 'Password required';
    } else if (password.length < FORM.PASSWORD_MIN_LENGTH) {
      errors.password = `Password must consist not less of ${FORM.PASSWORD_MIN_LENGTH} symbols`;
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log('values: ', values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 3000);
  };

  return (
    <>
      <Formik
        preventDefault
        initialValues={INITIAL_VALUES}
        validate={validators}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Field
              title="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email && errors.email}
              placeholder="Enter email"
            />
            <Field
              title="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username && touched.username && errors.username}
              placeholder="Enter username"
            />
            <Field
              title="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password && errors.password}
              placeholder="Enter password"
            />
            <Field
              title="Phone"
              type="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={styles.radio}>
              <Radio
                title="Male"
                name="radio"
                value={values.radio}
                onChange={handleChange}
                onBlur={handleBlur}
                defaultChecked={true}
              />
              <Radio
                title="Female"
                value={values.radio}
                name="radio"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles.checkbox}>
              <Checkbox
                title="JS"
                name="JS"
                value={values.checkbox}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Checkbox
                title="React"
                name="React"
                value={values.checkbox}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <Select
              title="Select a country"
              name="select"
              value={values.select}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button type="submit" text="Submit" disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
