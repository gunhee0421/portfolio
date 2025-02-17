export const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex flex-row justify-between">
    <h1 className="md:pb-3 xl:pb-5 2xl:pb-10">
      <a
        href={`#${title}`}
        className="font-blackHanSans text-white md:text-2xl xl:text-6xl 2xl:text-7xl font-bold hover:text-primary transition-colors duration-500 tracking-wide"
      >
        <span>{title}</span>
      </a>
    </h1>
  </div>
)
