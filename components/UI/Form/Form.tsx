import { Formik, Form as FormikForm, FormikValues } from 'formik';
import { FormComponentProps } from './types';

export default function Form({ validationSchema, initialValues, onSubmit, children }: FormComponentProps) {
  return (<Formik
    initialValues={initialValues as FormikValues}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        onSubmit ? onSubmit(values as any) : null
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting, errors }) => (
      
      <FormikForm className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
{/* 
<Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" /> */}
        {/* <button type="submit" disabled={isSubmitting}>
          Submit
        </button> */}
        {children}
      </FormikForm>
    )}
  </Formik>)
}