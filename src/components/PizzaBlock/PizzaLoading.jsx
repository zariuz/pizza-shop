import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoading = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="286" rx="3" ry="3" width="280" height="26" />
    <rect x="0" y="324" rx="5" ry="5" width="280" height="80" />
    <circle cx="140" cy="140" r="130" />
    <rect x="0" y="415" rx="10" ry="10" width="110" height="40" />
    <rect x="135" y="415" rx="10" ry="10" width="145" height="40" />
  </ContentLoader>
);

export default PizzaLoading;
