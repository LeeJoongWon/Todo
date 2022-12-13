import { Box } from '@mui/material';
import Header from '../../components/Header';

const Dashboard = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="ToDO App" subtitle="할 일을 미루지 말자"></Header>
            </Box>
            <p>앱 소개글....</p>
        </Box>
    );
};

export default Dashboard;
