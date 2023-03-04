export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen flex items-center p-2">{children}</div>;
}
