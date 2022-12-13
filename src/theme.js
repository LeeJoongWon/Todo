import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

const darkColors = {
    grey: {
        100: '#e0e0e0',
        200: '#c2c2c2',
        300: '#a3a3a3',
        400: '#858585',
        500: '#666666',
        600: '#525252',
        700: '#3d3d3d',
        800: '#292929',
        900: '#141414',
    },
    primary: {
        100: '#d0d1d5',
        200: '#a1a4ab',
        300: '#727681',
        400: '#1F2A40',
        500: '#141b2d',
        600: '#101624',
        700: '#0c101b',
        800: '#080b12',
        900: '#040509',
    },
    greenAccent: {
        100: '#dbf5ee',
        200: '#b7ebde',
        300: '#94e2cd',
        400: '#70d8bd',
        500: '#4cceac',
        600: '#3da58a',
        700: '#2e7c67',
        800: '#1e5245',
        900: '#0f2922',
    },
    redAccent: {
        100: '#f8dcdb',
        200: '#f1b9b7',
        300: '#e99592',
        400: '#e2726e',
        500: '#db4f4a',
        600: '#af3f3b',
        700: '#832f2c',
        800: '#58201e',
        900: '#2c100f',
    },
    blueAccent: {
        100: '#e1e2fe',
        200: '#c3c6fd',
        300: '#a4a9fc',
        400: '#868dfb',
        500: '#6870fa',
        600: '#535ac8',
        700: '#3e4396',
        800: '#2a2d64',
        900: '#151632',
    },
};

const lightColors = {
    grey: {
        100: '#141414',
        200: '#292929',
        300: '#3d3d3d',
        400: '#525252',
        500: '#666666',
        600: '#858585',
        700: '#a3a3a3',
        800: '#c2c2c2',
        900: '#e0e0e0',
    },
    primary: {
        100: '#040509',
        200: '#080b12',
        300: '#a9a8a8',
        400: '#d9d8d8',
        500: '#141b2d',
        600: '#1F2A40',
        700: '#727681',
        800: '#a1a4ab',
        900: '#d0d1d5',
    },
    greenAccent: {
        100: '#0f2922',
        200: '#1e5245',
        300: '#2e7c67',
        400: '#3da58a',
        500: '#4cceac',
        600: '#70d8bd',
        700: '#94e2cd',
        800: '#b7ebde',
        900: '#dbf5ee',
    },
    redAccent: {
        100: '#2c100f',
        200: '#58201e',
        300: '#832f2c',
        400: '#af3f3b',
        500: '#db4f4a',
        600: '#e2726e',
        700: '#e99592',
        800: '#f1b9b7',
        900: '#f8dcdb',
    },
    blueAccent: {
        100: '#151632',
        200: '#2a2d64',
        300: '#3e4396',
        400: '#535ac8',
        500: '#6870fa',
        600: '#868dfb',
        700: '#a4a9fc',
        800: '#c3c6fd',
        900: '#e1e2fe',
    },
};

// 색상 디자인 토큰
export const tokens = (mode) => ({
    ...(mode === 'dark' ? darkColors : lightColors),
});

// mui 테마 설정
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    const darkSetting = {
        primary: {
            main: colors.primary[500],
        },
        secondary: {
            main: colors.greenAccent[500],
        },
        neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
        },
        background: {
            default: colors.primary[500],
        },
    };
    const lightSetting = {
        primary: {
            main: colors.primary[100],
        },
        secondary: {
            main: colors.greenAccent[500],
        },
        neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
        },
        background: {
            default: '#fcfcfc',
        },
    };

    return {
        // mui 팔레트 설정 https://mui.com/material-ui/customization/palette/
        palette: {
            mode: mode,
            ...(mode === 'dark' ? darkSetting : lightSetting),
        },
        // mui 글꼴 설정 https://mui.com/material-ui/customization/typography/
        typography: {
            fontFamily: ['Nanum Gothic', 'sans-serif'].join(','),
            fontSize: 12,
            h1: {
                fontFamily: ['Nanum Gothic', 'sans-serif'].join(','),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Nanum Gothic', 'sans-serif'].join(','),
                fontSize: 32,
            },
            h3: {
                fontFamily: ['Nanum Gothic', 'sans-serif'].join(','),
                fontSize: 24,
            },
            h4: {
                fontFamily: ['Nanum Gothic', 'sans-serif'].join(','),
                fontSize: 20,
            },
            h5: {
                fontFamily: ['Nanum Gothic', 'sans-serif'].join(','),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Nanum Gothic', 'sans-serif'].join(','),
                fontSize: 14,
            },
        },
    };
};

// 색상 모드 설정
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

// 리엑트의 useMemo https://ko.reactjs.org/docs/hooks-reference.html#usememo
export const useMode = () => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        []
    );

    // mui의 createTheme https://mui.com/material-ui/customization/theming/
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
