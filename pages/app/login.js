import React from 'react';
import websitePageHOC from '../../src/components/WebSitePageProvider/hoc';

function LoginScreen() {
  // eslint-disable-next-line react/jsx-filename-extension
  return <div>Página de Login</div>;
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
