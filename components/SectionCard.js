export default function SectionCard({ title, description }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow-[0_8px_20px_rgba(0,30,100,0.08)]">
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </article>
  );
}
