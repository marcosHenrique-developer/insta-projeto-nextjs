/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FaqScreen from '../src/components/commons/FaqScreen';
import websitePageHOC from '../src/components/WebSitePageProvider/hoc';

function Faq({ faqCategories }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <FaqScreen faqCategories={faqCategories} />
  );
}
Faq.propTypes = FaqScreen.propTypes;
export default websitePageHOC(Faq, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});
export async function getStaticProps() {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  ).then(async (res) => {
    const response = await res.json();
    return response.data;
  });
  return {
    props: {
      faqCategories,
    },
  };
}
