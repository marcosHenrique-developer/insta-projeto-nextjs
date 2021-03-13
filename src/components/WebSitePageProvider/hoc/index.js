/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(PageComponent, { pageWrapperProps }) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
