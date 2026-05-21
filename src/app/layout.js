import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css"; 
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"], 
  variable: "--font-jakarta", 
});

export const metadata = {
  title: "Website Bán Đồ Công Nghệ - Trần Gia Huy",
  description: "Đồ án Next.js chuyên nghiệp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={jakarta.variable}>
      <body className={jakarta.className}>
        {children}
      </body>
    </html>
  );
}