import typographyVariants from './typographyVariants';
import breakpoints from './breakpoints';

const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#FFFFFF',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#FFFFFF',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#FFFFFF',
    },
    light: {
      color: '#88989E',
      contrastText: '#FFFFFF',
    },
  },
  // Feedback colors
  error: {
    main: {
      color: '#dc3545',
      contrastText: '#fff',
    },
  },
  success: {
    main: {
      color: '#28a745',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  fontFamily: "'Rubik', sans-serif",
  transition: '200ms ease-in-out',
};
