type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="bg-gray-400 m-4 rounded-lg shadow p-4 max-w-screen-md md:mx-auto">
      {children}
    </div>
  );
}
