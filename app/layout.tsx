import type { Metadata } from "next";
import "../src/globals.css";
import { headers } from "next/headers";
import { routing } from "../routing";



export const metadata: Metadata = {
  title: "موقع  جناحان للترجمة ",
  description: "Yovجناحان للترجمة ترحب بكم، حيث نلتزم بتقديم خدمات ترجمة متميزة تلبي احتياجاتكم وتدعم أهدافكم العملية والتواصلية منذ انطلاقتنا، حرصنا على تقديم ترجمات دقيقة وموثوقة تساهم في تعزيز تفاعلكم الفعال ضمن بيئة عالمية متعددة اللغات. في جناحان للترجمة، نفخر بفريقنا المتخصص من المترجمين المحترفين الذين يجمعون بين الخبرة والكفاءة للتعامل مع مختلف اللغات والمجالات.",
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the current locale from headers
  const headersList = await headers();
  const currentLocale =
    headersList.get("x-next-intl-locale") || routing.defaultLocale;

  return (
    <html
   
      lang={currentLocale}
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body
        className={` min-h-screen bg-[#f5f5f5]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
