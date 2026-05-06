import SectionCard from '../../components/SectionCard';

const concerns = [
  ['选课多，难判断', '面对编程、AI、竞赛、研学等选择，缺少统一判断标准。'],
  ['孩子配合度不稳定', '兴趣与执行力波动，家长很难判断是方法问题还是阶段问题。'],
  ['期待与状态不一致', '家长期待、孩子节奏和现实投入之间经常产生冲突。'],
  ['成绩与能力难平衡', '希望兼顾当下学习和未来能力，但缺少可执行路径。'],
];

const services = [
  ['单次战略咨询', '60-90 分钟聚焦家庭关键问题，形成初步判断与下一步建议。'],
  ['4 周成长共创计划', '围绕一个阶段目标，建立家庭行动方案与复盘机制。'],
  ['12 周长期陪跑计划', '持续跟踪孩子状态、课程投入与成果输出，动态优化路径。'],
  ['家长工作坊 / 沙龙', '通过主题讨论和案例拆解，建立长期教育判断力。'],
];

export default function ParentsPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#07183e] via-[#0e2a72] to-[#0f62d6] p-8 text-white md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">For Parents</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">给家长的支持：家庭战略研究中心</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">在教育选择越来越复杂的时代，先建立判断，再做决定。我们帮助家长形成长期、清晰、可执行的家庭教育战略。</p>
        <a href="mailto:hello@bildenedu.com" className="mt-7 inline-block rounded-full bg-white px-6 py-3 font-semibold text-blue-900">预约家庭战略诊断</a>
      </section>

      <section>
        <div className="mb-5 max-w-2xl">
          <h2 className="text-3xl font-bold">你不是焦虑，你只是缺少系统支持</h2>
          <p className="mt-3 text-slate-600">很多家庭的问题不在努力不够，而在于缺少一张清晰的教育地图。</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {concerns.map(([title, description]) => (
            <SectionCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-7 shadow-xl shadow-blue-950/5">
        <h2 className="text-3xl font-bold">四步法：评估—策略—执行—复盘</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {['成长评估：识别孩子优势、兴趣与当前阶段。', '路径策略：制定阶段目标与学习节奏。', '协同执行：家长与孩子共同推进。', '复盘优化：根据反馈动态调整路径。'].map((step, index) => (
            <li key={step} className="rounded-2xl bg-blue-50 p-5 text-slate-700">
              <strong className="mb-3 block text-2xl text-blue-700">0{index + 1}</strong>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="mb-5 max-w-2xl">
          <h2 className="text-3xl font-bold">我们提供什么</h2>
          <p className="mt-3 text-slate-600">按家庭实际需求提供分层服务，避免过度投入和无效学习。</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, description]) => (
            <SectionCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>
    </div>
  );
}
