import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
import axios from 'axios';

const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)'); // 최소 너비 설정
    const handleFormSubmit = (values) => {
        values.success = '진행중';
        axios.post('http://localhost:3001/todo', values);
    };

    return (
        <Box m="20px">
            <Header title="CREATE ToDo" subtitle="ToDo 생성하기" />

            <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(1, minmax(0, 1fr))"
                            sx={{
                                '& > div': { gridColumn: isNonMobile ? undefined : 'span 1' },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="제목"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.title}
                                name="title"
                                error={!!touched.title && !!errors.title}
                                helperText={touched.title && errors.title}
                                sx={{ gridColumn: 'span 1' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="내용"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.content}
                                name="content"
                                error={!!touched.content && !!errors.content}
                                helperText={touched.content && errors.content}
                                sx={{ gridColumn: 'span 1' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="보상"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.reward}
                                name="reward"
                                error={!!touched.reward && !!errors.reward}
                                helperText={touched.reward && errors.reward}
                                sx={{ gridColumn: 'span 1' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="시작일"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.start}
                                name="start"
                                error={!!touched.start && !!errors.start}
                                helperText={touched.start && errors.start}
                                sx={{ gridColumn: 'span 1' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="종료일"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.end}
                                name="end"
                                error={!!touched.end && !!errors.end}
                                helperText={touched.end && errors.end}
                                sx={{ gridColumn: 'span 1' }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                ToDo 생성하기
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

const checkoutSchema = yup.object().shape({
    title: yup.string().required('입력해주세요'),
    content: yup.string().required('입력해주세요'),
    reward: yup.string().required('입력해주세요'),
    start: yup.string().required('입력해주세요'),
    end: yup.string().required('입력해주세요'),
});
const initialValues = {
    title: '',
    content: '',
    reward: '',
    start: '',
    end: '',
};

export default Form;
