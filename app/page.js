import Link from 'next/link';
import SectionCard from '@/components/SectionCard';

const centers = [
  {
    label: '给家长的支持',
    title: '家庭战略研究中心',
    description: '帮助家长在复杂教育信息中建立判断，找到适合孩子的成长路径。',
    href: '/parents',
  },
  {
    label: '给孩子的成长路径',
    title: 'AI 素养发展中心',
    description: '从兴趣启蒙到项目实战，建立面向未来的创造力、表达力与行动力。',
    href: '/ai-center',
  },
];

const problems = [
  ['信息很多，方向很少', '不知道该学什么，也不知道该先学什么。'],
  ['投入不少，效果不稳', '时间和精力花了很多，却看不到持续成长。'],
  ['会用工具，不会创造', '停留在会操作，缺少解决真实问题的能力。'],
  ['短期成绩与长期能力冲突', '想兼顾当下学习和未来竞争力，却缺乏路径设计。'],
];

const courses = [
  ['家庭共学启蒙课（3-6）', '激发好奇与表达自信，让家长和孩子一起建立正向学习体验。'],
  ['AI 创意表达课（7-9）', '用 AI 完成故事、图像、音频等创作任务，培养结构化表达。'],
  ['AI 项目实战营（10-12）', '围绕真实主题开展小组项目，把工具使用转化为问题解决。'],
  ['未来挑战计划（13-15）', '跨学科研究、公开展示与真实世界连接，形成可见成果。'],
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#07183e] via-[#0e2a72] to-[#0f62d6] p-8 text-white shadow-2xl shadow-blue-950/20 md:p-14">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">Bilden Education</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          在 AI 时代，<br />为每个家庭和孩子，点亮成长的方向。
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
          彼灯教育通过家庭战略支持与 AI 素养培养，帮助孩子在真实世界中形成创造力、表达力与行动力。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#contact" className="rounded-full bg-white px-6 py-3 font-semibold text-blue-900 shadow-lg shadow-blue-950/20">
            预约成长咨询
          </Link>
          <Link href="#courses" className="rounded-full border border-blue-200/70 px-6 py-3 font-semibold text-white">
            了解课程体系
          </Link>
        </div>
        <div className="mt-10 grid gap-4 text-blue-50 sm:grid-cols-3">
          <div><strong className="block text-2xl text-white">20+</strong>城市教育实践</div>
          <div><strong className="block text-2xl text-white">1000+</strong>家庭成长陪伴</div>
          <div><strong className="block text-2xl text-white">50+</strong>教育项目与活动</div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {centers.map((center) => (
          <Link key={center.title} href={center.href} className="group rounded-3xl bg-white p-7 shadow-xl shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10">
            <p className="text-sm font-semibold text-blue-600">{center.label}</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">{center.title}</h2>
            <p className="mt-3 text-slate-600">{center.description}</p>
            <span className="mt-5 inline-flex font-semibold text-blue-700 group-hover:text-blue-900">了解更多 →</span>
          </Link>
        ))}
      </section>

      <section>
        <div className="mb-5 max-w-2xl">
          <h2 className="text-3xl font-bold">你可能正在面对这些问题</h2>
          <p className="mt-3 text-slate-600">教育选择越来越多，但真正适合自己孩子的路径并不多。彼灯帮助家庭看清方向，再做选择。</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map(([title, description]) => (
            <SectionCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      <section id="courses">
        <div className="mb-5 max-w-2xl">
          <h2 className="text-3xl font-bold">课程与项目精选</h2>
          <p className="mt-3 text-slate-600">多元课程体系，匹配不同年龄阶段和成长目标。</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {courses.map(([title, description]) => (
            <SectionCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      <section id="contact" className="rounded-[2rem] bg-[#0d2c75] p-8 text-white md:p-10">
        <h2 className="text-3xl font-bold">让我们一起，为孩子的未来点亮方向</h2>
        <p className="mt-3 max-w-2xl text-blue-50">一次咨询，获得更清晰的成长建议与课程路径。你可以先发送孩子年龄、当前困惑和期望咨询时间。</p>
        <a href="mailto:hello@bildenedu.com" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-blue-900">
          预约咨询
        </a>
      </section>
    </div>
  );
}
