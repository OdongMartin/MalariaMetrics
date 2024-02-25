import "./globals.css";


export const metadata = {
  title: "Malaria Metrics",
  description: "Real Time Malaria Data Country-Wide",
};

export default function RootLayout({ children }) {
  return (
    <html>
        <body className='bg-gray-400 min-h-screen'>{ children }</body>
    </html>
  );
}