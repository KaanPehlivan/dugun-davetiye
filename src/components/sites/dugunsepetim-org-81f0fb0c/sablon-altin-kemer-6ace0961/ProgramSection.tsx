import type { ProgramItem } from "./content";

export function ProgramSection({ items }: { items: ProgramItem[] }) {
  return (
    <section className="ak-section ak-program">
      <div className="ak-program__inner">
        <div className="ak-reveal ak-program__head">
          <h2>Etkinlik Programı</h2>
          <div className="ak-divider" />
        </div>
        <div className="ak-reveal ak-program__list">
          {items.map((item) => (
            <div key={item.time + item.title} className="ak-program__item">
              <div className="ak-program__time">{item.time}</div>
              <div className="ak-program__title">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
