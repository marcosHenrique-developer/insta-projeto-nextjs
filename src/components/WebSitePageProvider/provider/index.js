import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import GlobalStyle from '../../../theme/GlobalStyle';

export default function WebsiteGlobalProvider({ children }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
