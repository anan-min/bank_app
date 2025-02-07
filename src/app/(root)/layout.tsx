import { ThemeToggleButton } from "../../components/theme/ThemeToggleButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main suppressHydrationWarning>
      SIDEBAR
      <ThemeToggleButton />
      {children}
    </main>
  );
}
