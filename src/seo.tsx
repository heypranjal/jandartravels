import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}

const defaultTitle = 'Jandar Travels - Premium Taxi & Tour Services in Noida Sector-31';
const defaultDescription = 'Jandar Travels - Premium Taxi & Tour Services in Noida Sector-31. Book Innova Crysta, Innova Hybrid, Swift Dzire, Bus and more. Delhi Local Tours, Same Day Agra Tour, Shimla Manali Tour, Golden Triangle Tour and more.';
const defaultImage = 'https://jandartravels.com/assets/faviconLogo/jandarLogo.png';
const defaultCanonical = 'https://jandartravels.com/';

const SEO: React.FC<SEOProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  canonical = defaultCanonical,
  image = defaultImage,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={canonical} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default SEO; 