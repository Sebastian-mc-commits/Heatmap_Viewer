import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "heat Map Viewer",
  description: "Carousel to display the heatmaps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
