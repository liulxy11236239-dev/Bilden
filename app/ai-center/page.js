import SectionCard from '@/components/SectionCard';

const abilities = [
  ['工具理解与应用', '理解 AI 工具边界，学会正确选择并完成任务。'],
  ['逻辑思维与问题拆解', '把复杂问题拆成可执行步骤，形成清晰思考过程。'],
  ['创造表达与审美', '把想法转化为作品，并能够说明自己的观点与选择。'],
  ['协作沟通与项目推进', '在团队中分工、沟通、复盘，完成真实项目。'],
];

const stages = [
  ['3-6 岁', '兴趣启蒙与表达，通过游戏、故事和图像创作建立好奇心。'],
  ['7-9 岁', '工具体验与任务完成，学习用 AI 辅助观察、提问和表达。'],
  ['10-12 岁', '项目实践与跨学科学习，在真实主题中完成作品和报告。'],
  ['13-15 岁', '问题研究与成果展示，连接竞赛、社区和社会议题。'],
];

export default function AICenterPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#07183e] via-[#0e2a72] to-[#0f62d6] p-8 text-white md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">For Children</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">给孩子的成长路径：AI 素养发展中心</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">我们不只教孩子“用 AI”，更帮助他们在 AI 时代形成思考力、创造力与行动力。</p>
        <a href="mailto:hello@bildenedu.com" className="mt-7 inline-block rounded-full bg-white px-6 py-3 font-semibold text-blue-900">预约体验课</a>
      </section>

      <section>
        <div className="mb-5 max-w-2xl">
          <h2 className="text-3xl font-bold">AI 素养，不只是技术能力</h2>
          <p className="mt-3 text-slate-600">真正的 AI 素养，是在真实问题中提出问题、选择工具、完成创造并清晰表达。</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {abilities.map(([title, description]) => (
            <SectionCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-7 shadow-xl shadow-blue-950/5">
        <h2 className="text-3xl font-bold">3-15 岁分阶段培养</h2>
        <p className="mt-3 max-w-2xl text-slate-600">不同年龄有不同目标，不提前透支，也不延后错过。</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stages.map(([title, description]) => (
            <SectionCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] bg-[#0d2c75] p-8 text-white md:p-10">
        <h2 className="text-3xl font-bold">先体验，再规划</h2>
        <p className="mt-3 max-w-2xl text-blue-50">建议先通过体验课了解孩子状态，再制定个性化学习路径。每个阶段都会形成作品、报告或展示，让成长被看见。</p>
        <a href="mailto:hello@bildenedu.com" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-blue-900">预约体验课</a>
      </section>
    </div>
  );
}
