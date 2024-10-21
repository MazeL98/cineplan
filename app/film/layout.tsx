import Tabs from "./tabs"

export default function FilmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex flex-col items-center">
      <Tabs />
      <div>{children}</div>
    </div>
  );
}
