'use client';

export function ComplianceNotice({ lang }: { lang: string }) {
  if (lang !== 'zh') return null;

  return (
    <div
      className="compliance-notice border-b border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200"
    >
      <div className="flex items-start gap-2">
        <span className="shrink-0">⚠️</span>
        <span className="min-w-0 whitespace-normal break-words">
          AI Rider 提示：本站由个人爱好者维护，尽量保证可用但不承诺稳定。仅供 AI 学习与体验，商用请选择付费 API。请勿滥用、转售或提交敏感信息。
        </span>
      </div>
    </div>
  );
}
