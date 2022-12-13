import { Box, Button, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ToDo = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [todoList, setTodoList] = useState([]);
    const readList = () => {
        axios.get('http://localhost:3001/todo').then((res) => setTodoList(res.data));
        console.log(todoList, 'data');
    };

    useEffect(() => {
        readList();
    }, []);

    const onButtonClick = (e, data) => {
        console.log(data);
        axios.delete(`http://localhost:3001/todo/${data.id}`);
        readList();
    };

    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'title',
            headerName: '제목',
            flex: 1,
            cellClassName: 'name-column--cell',
        },

        {
            field: 'content',
            headerName: '내용',
            flex: 3,
        },
        {
            field: 'reward',
            headerName: '보상',
            flex: 1,
            renderCell: (params) => <Typography color={colors.greenAccent[500]}>{params.row.reward}</Typography>,
        },
        {
            field: 'start',
            headerName: '시작일',
            flex: 1,
        },
        {
            field: 'end',
            headerName: '종료일',
            flex: 1,
        },
        {
            field: 'success',
            headerName: '성공여부',
            flex: 1,
            renderCell: (params) => <Typography color={colors.greenAccent[400]}>{params.row.success}</Typography>,
        },
        {
            field: 'delete',
            headerName: '삭제',
            flex: 1,
            renderCell: (params) => {
                return (
                    <Button onClick={(e) => onButtonClick(e, params.row)} variant="contained">
                        Delete
                    </Button>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Header title="ToDo" subtitle="ToDo 목록" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: 'none',
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[300],
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: colors.blueAccent[700],
                    },
                    '& .MuiCheckbox-root': {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid checkboxSelection rows={todoList} columns={columns} />
            </Box>
        </Box>
    );
};

export default ToDo;
