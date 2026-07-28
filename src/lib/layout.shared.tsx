import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import Image from 'next/image';
import type { LinkItemType } from 'fumadocs-ui/layouts/docs';

export const linkItems: LinkItemType[] = [
  ...(process.env.DOCS_CONSOLE_URL
    ? [
        {
          url: process.env.DOCS_CONSOLE_URL,
          text: 'Console',
          external: true,
        },
      ]
    : []),
  // GitHub link removed — not needed for public docs site
];

export const logo = (
  <>
    {/* Light theme logo (shown in light mode) */}
    <Image
      alt="AI Rider"
      src="/assets/airider-logo-small.svg"
      width={20}
      height={20}
      className="size-5 dark:hidden"
      priority
      unoptimized
    />
    {/* Dark theme logo (shown in dark mode) */}
    <Image
      alt="AI Rider"
      src="/assets/airider-logo-small-dark.svg"
      width={20}
      height={20}
      className="size-5 hidden dark:inline"
      priority
      unoptimized
    />
  </>
);

export function baseOptions(locale: string): BaseLayoutProps {
  const siteName = process.env.DOCS_SITE_NAME || 'AI Rider';

  return {
    i18n,
    nav: {
      title: (
        <>
          {logo}
          <span className="font-medium in-[header]:text-[15px] [.uwu_&]:hidden">
            {siteName}
          </span>
        </>
      ),
    },
  };
}
