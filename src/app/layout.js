import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Connect With sunil",
  description:
    "connect with me pages my all social media links are given. this project made using nextjs ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          src="https://kit.fontawesome.com/1e9eb37e8c.js"
          crossorigin="anonymous"
        ></script>
        {children}
      </body>
    </html>
  );
}
