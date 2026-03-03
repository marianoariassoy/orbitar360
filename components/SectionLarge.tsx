const SectionLarge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-20 flex flex-col gap-y-8">
      {children}
    </div>
  );
};

export default SectionLarge;
