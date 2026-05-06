import './globals.css';
import Link from 'next/link';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/parents', label: '家庭战略研究中心' },
  { href: '/ai-center', label: 'AI素养发展中心' },
];

export const metadata = {
  title: '彼灯教育 · Bilden',
  description: '在 AI 时代，为每个家庭和孩子点亮成长方向。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="sticky top-0 z-10 bg-[#0d1f49] text-white">
          <div className="mx-auto flex w-[min(1100px,92vw)] flex-wrap items-center justify-between gap-3 py-4">
            <div className="font-bold">彼灯教育 · Bilden</div>
            <nav className="flex gap-4 text-sm">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-blue-100 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="/#contact" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
              预约咨询
            </Link>
          </div>
        </header>
        <main className="mx-auto my-8 w-[min(1100px,92vw)]">{children}</main>
      </body>
    </html>
  );
}
