import { Formik, Form as FormikForm, FormikValues } from 'formik';
import { FormComponentProps } from './types';
import Loading from '../Loading';

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
      <>
        <FormikForm>

          {
            isSubmitting && <div className="flex justify-center items-center py-20"><Loading /></div>
          }
          {
            !isSubmitting && <>
              <div className='my-3 text-sm'>
                {errors && Object.keys(errors).map((index) => <div className='text-red-500' key={index}>{errors[index]?.toString() || ""}</div>)}
              </div>
              {children}
            </>
          }
        </FormikForm>
      </>
    )}
  </Formik>)
}