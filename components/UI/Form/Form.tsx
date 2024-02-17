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
    <FormikForm>
        {children}
      </FormikForm>
    )}
  </Formik>)
}