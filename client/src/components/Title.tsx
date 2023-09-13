type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function Title({ children, className = "" }: TitleProps) {
  return (
    <h1 className={`text-2xl font-bold text-yellow-400 ${className}`}>
      {children}
    </h1>
  );
}
