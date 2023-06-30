import * as yup from 'yup';

export const postValidationSchema = yup.object().shape({
  content: yup.string().required(),
  scheduled_at: yup.date(),
  business_id: yup.string().nullable(),
});
