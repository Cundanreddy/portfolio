interface AppPlaceholderProps {
  title: string;
}

export default function AppPlaceholder({ title }: AppPlaceholderProps) {
  return (
    <section className="p-6 text-[var(--color-text)]" aria-labelledby="app-title">
      <h1 id="app-title" className="text-3xl font-bold">
        {title}
      </h1>
      <p className="mt-4">TODO: Build the {title} app.</p>
    </section>
  );
}
