import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import Providers from "@/providers/providers";
import { notFound } from "next/navigation";
import { locales } from "../../navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getSettings, getServices, getRegisters, getHome } from "@/lib/serverActions";
import AOSProvider from "@/components/AOSProvider";
import { Almarai } from 'next/font/google';

export const metadata: Metadata = {
  title: "موقع الذيابي للمحاماة والاستشارات القانونية",
  description: "Your premier destination for legal services",
};

// استدعاء خط Almarai
const almarai = Almarai({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '700', '800'], // الأوزان المدعومة فقط
  variable: '--font-almarai',
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string | any }>;
}) {

  const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params));
  const { locale: currentLocale } = resolvedParams;

  if (!locales.includes(currentLocale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${currentLocale}.json`)).default;
  } catch (error) {
    notFound();
  }

  let settingsResponse, servicesResponse, registersResponse, homeResponse;

  try {
    settingsResponse = await getSettings(currentLocale);
    servicesResponse = await getServices(currentLocale);
    registersResponse = await getRegisters(currentLocale);
    homeResponse = await getHome(currentLocale);
  } catch (error) {
    console.log(error);
  }

  const settings = settingsResponse?.data;
  const services = servicesResponse?.data;
  const registers = registersResponse?.data;
  const slider = homeResponse?.data?.sliders;

  return (
    <NextIntlClientProvider
      locale={currentLocale || "en"}
      messages={messages}
      timeZone="Asia/Dubai"
    >
      <Providers locale={currentLocale || "en"}>
        <div
          dir={currentLocale === "ar" ? "rtl" : "ltr"}
          lang={currentLocale}
          className={`${almarai.className} !min-h-screen`}
        >
          <Navbar settings={settings} slider={slider} currentLocale={currentLocale} />
          <AOSProvider>
            {children}
          </AOSProvider>
          <Footer settings={settings} services={services} registers={registers} />
        </div>
      </Providers>
    </NextIntlClientProvider>
  );
}
