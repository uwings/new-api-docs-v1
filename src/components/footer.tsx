import Link from 'next/link';
import { getLocalePath } from '@/lib/i18n';

interface FooterProps {
  lang: string;
}

// ============================================
// Shared Data
// ============================================
const socialLinks: { name: string; href: string; icon: React.ReactNode }[] = [
  // No social links for now — add when community channels are set up
];

// TODO: replace with our own ICP filing when domain is ready
const beianLinks: { text: string; href: string }[] = [
  // TODO: add ICP filing when domain is registered
  // { text: '京ICP备XXXXXXX号-X', href: 'https://beian.miit.gov.cn/' },
];

// Related projects — upstream and ecosystem
const relatedProjects: { label: string; href: string }[] = [
  { label: 'New API 开源', href: 'https://github.com/QuantumNous/new-api' },
  { label: 'OpenAI API 文档', href: 'https://platform.openai.com/docs/api-reference' },
];

// Friendship links — AI communities and resources
const friendshipLinks: { label: string; href: string }[] = [
  { label: 'AI 地带', href: 'https://aididai.cn' },
  { label: 'AICC 社区', href: 'https://aicc.pro' },
];

// ============================================
// Internal link paths
// ============================================
const internalPaths = {
  aboutProject: 'docs/guide/wiki/basic-concepts/project-introduction',
  contactUs: 'docs/support/community-interaction',
  features: 'docs/guide/wiki/basic-concepts/features-introduction',
  userGuide: 'docs/guide/home',
  apiDocs: 'docs/api',
} as const;

// ============================================
// Translations
// ============================================
interface FooterTranslation {
  sections: {
    about: {
      title: string;
      aboutProject: string;
      contactUs: string;
      features: string;
    };
    docs: {
      title: string;
      userGuide: string;
      apiDocs: string;
    };
    relatedProjects: string;
    friendshipLinks: string;
  };
  copyright: string;
}

const translations: Record<string, FooterTranslation> = {
  zh: {
    sections: {
      about: {
        title: '关于我们',
        aboutProject: '关于项目',
        contactUs: '联系我们',
        features: '功能特性',
      },
      docs: {
        title: '文档',
        userGuide: '使用指南',
        apiDocs: 'API 文档',
      },
      relatedProjects: '相关项目',
      friendshipLinks: '友情链接',
    },
    copyright: '© 2026 AI Rider. All Rights Reserved.',
  },
  en: {
    sections: {
      about: {
        title: 'About Us',
        aboutProject: 'About Project',
        contactUs: 'Contact Us',
        features: 'Features',
      },
      docs: {
        title: 'Docs',
        userGuide: 'User Guide',
        apiDocs: 'API Docs',
      },
      relatedProjects: 'Related Projects',
      friendshipLinks: 'Friendship Links',
    },
    copyright: '© 2026 AI Rider. All Rights Reserved.',
  },
  ja: {
    sections: {
      about: {
        title: '私たちについて',
        aboutProject: 'プロジェクトについて',
        contactUs: 'お問い合わせ',
        features: '機能',
      },
      docs: {
        title: 'ドキュメント',
        userGuide: 'ユーザーガイド',
        apiDocs: 'APIドキュメント',
      },
      relatedProjects: '関連プロジェクト',
      friendshipLinks: '友好リンク',
    },
    copyright: '© 2026 AI Rider. All Rights Reserved.',
  },
};

// ============================================
// Build sections from translations
// ============================================
function buildSections(t: FooterTranslation) {
  return [
    {
      title: t.sections.about.title,
      links: [
        {
          label: t.sections.about.aboutProject,
          href: internalPaths.aboutProject,
        },
        { label: t.sections.about.contactUs, href: internalPaths.contactUs },
        { label: t.sections.about.features, href: internalPaths.features },
      ],
    },
    {
      title: t.sections.docs.title,
      links: [
        { label: t.sections.docs.userGuide, href: internalPaths.userGuide },
        { label: t.sections.docs.apiDocs, href: internalPaths.apiDocs },
      ],
    },
    {
      title: t.sections.relatedProjects,
      links: relatedProjects.map((p) => ({ ...p, external: true })),
    },
    {
      title: t.sections.friendshipLinks,
      links: friendshipLinks.map((p) => ({ ...p, external: true })),
    },
  ];
}

// ============================================
// Footer Component
// ============================================
export function Footer({ lang }: FooterProps) {
  const t = translations[lang] || translations.en;
  const sections = buildSections(t);

  return (
    <footer className="border-fd-border bg-fd-card/30 mt-auto border-t backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        {/* Top: Links Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pb-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-fd-foreground mb-4 text-sm font-semibold">
                {section.title}
              </h3>
              {section.links.length > 0 ? (
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      {'external' in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fd-muted-foreground hover:text-fd-foreground text-sm transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={getLocalePath(lang, link.href)}
                          className="text-fd-muted-foreground hover:text-fd-foreground text-sm transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-fd-muted-foreground/50 text-xs">
                  {/* empty placeholder — section preserved for future use */}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom: Copyright */}
        <div className="border-fd-border flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center">
          {/* Left: Copyright and Beian */}
          <div className="text-fd-muted-foreground flex flex-col gap-2 text-xs">
            <p>{t.copyright}</p>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
              {beianLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fd-foreground transition-colors"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
