import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokemon",
  description: "A website that contains all data about Pokemons",
};

export default function RootLayout({ children }) {
  const backgroundImage = 'url(https://i.pinimg.com/originals/13/c8/ac/13c8ac48ee7f486faf6aadd437b2d069.png)';
  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment:"fixed",
    minHeight: '100vh',
    width: '100%',
    overflowX: 'hidden',
  };
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Android and Windows Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body style={backgroundStyle}>
        {children}
      </body>
    </html>
  );
}
