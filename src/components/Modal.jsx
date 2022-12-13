import React from 'react';
import Form from '../scenes/form';
import styled from 'styled-components';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

function Modal({ close, data, update }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Overlay>
            <ModalWrap bgColor={`${colors.primary[400]}`}>
                <Form close={close} data={data} update={update} str={'수정하기'} />
            </ModalWrap>
            <ModalWrap></ModalWrap>
        </Overlay>
    );
}

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 9999;
`;

const ModalWrap = styled.div`
    width: 50%;
    height: fit-content;
    background-color: ${(props) => props.bgColor};
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export default Modal;
