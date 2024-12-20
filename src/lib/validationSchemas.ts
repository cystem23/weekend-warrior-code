import * as Yup from 'yup';

export const EditActivitySchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  description: Yup.string().required(),
  location: Yup.string().required(),
  date: Yup.string().required(),
  time: Yup.string().required(),
  author: Yup.string().required(),
  author_email: Yup.string().required(),
  duration: Yup.number().positive().required(),
  registered: Yup.array().required(),
  message: Yup.string().required(),
});

export const CreateActivitySchema = Yup.object({
  name: Yup.string().required(),
  description: Yup.string().required(),
  location: Yup.string().required(),
  date: Yup.string().required(),
  time: Yup.string().required(),
  author: Yup.string().required(),
  author_email: Yup.string().required(),
  duration: Yup.number().positive().required(),
  message: Yup.string().required(),
});

// New validation schema for report submission
export const ReportActivitySchema = Yup.object({
  activityId: Yup.number().required(),
  activityName: Yup.string().required(),
  activityAuthor: Yup.string().required(),
  reportText: Yup.string().required().max(500),
});

export const test = Yup.object({
  name: Yup.string().required(),
});
