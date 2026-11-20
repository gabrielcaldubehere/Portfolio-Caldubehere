import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-28 py-16 sm:py-20 ${className}`}
    >
      <div className={`reveal ${inView ? "reveal-visible" : ""}`}>
        <header className="mb-10 sm:mb-12">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {description}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
