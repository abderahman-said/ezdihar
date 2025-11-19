'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function StructuredData() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://izdhar.com';
    const currentLang = i18n.language || 'ar';

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: t('hero.title'),
      description: t('hero.description'),
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Riyadh',
        addressCountry: 'SA',
      },
      sameAs: [
        'https://www.facebook.com',
        'https://www.instagram.com',
        'https://www.twitter.com',
        'https://www.linkedin.com',
      ],
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: t('hero.title'),
      description: t('hero.description'),
      url: baseUrl,
      inLanguage: currentLang,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((script) => script.remove());

    // Add organization schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    // Add website schema
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.text = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    return () => {
      existingScripts.forEach((script) => script.remove());
    };
  }, [t, i18n.language]);

  return null;
}

