'use client';

import Link from 'next/link';

export function ComplianceNotice({ lang }: { lang: string }) {
  if (lang !== 'zh') return null;

  return (
    <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200 xl:mr-(--fd-toc-width)">
      <div className="flex items-start gap-2">
        <span className="shrink-0">⚠️</span>
        <span className="min-w-0 whitespace-normal break-words">
          公益站提示：本站仅供 AI 学习与体验，我们会尽力保持服务稳定，但不承诺持续可用。请勿滥用、转售或用于违法用途，避免提交隐私及其他敏感信息。
        </span>
      </div>
    </div>
  );
}
