// app/layout.tsx
import '../styles/globals.css';

export const metadata = {
  title: 'Self Service UI Assistant',
  description: 'Visual and intuitive DevOps helper for developers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
