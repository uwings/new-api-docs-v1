import type { Metadata } from 'next';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/assets/logo.png',
    },
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://aididai.cn',
      images: '/assets/airider-logo-small.svg',
      siteName: process.env.DOCS_SITE_NAME || 'AI Rider',
      type: 'website',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/assets/airider-logo-small.svg',
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.DOCS_SITE_URL
    ? new URL(process.env.DOCS_SITE_URL)
    : process.env.NODE_ENV === 'development' ||
        !process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
