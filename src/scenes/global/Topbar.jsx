import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';

// 아이콘 불러오기 https://mui.com/material-ui/material-icons/
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

// useTheme - https://mui.com/material-ui/customization/theming/
const Topbar = () => {
    const theme = useTheme();

    // theme.palette - https://mui.com/material-ui/customization/palette/
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    /*  
        p = 패딩  참고 - https://mui.com/system/spacing/
        sx = css를 지정 할 수 있게 해주는 prop https://mui.com/system/getting-started/the-sx-prop/
    */
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* 검색 바 */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* 아이콘 */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
