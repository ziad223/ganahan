
import AboutUs from "@/components/about/AboutUs";
import Blog from "@/components/blog";
import ContactUs from "@/components/contact-us";
import Header from "@/components/header";
import OurServices from "@/components/our-services";
import OurTeam from "@/components/our-team/OurTeam";
import Partners from "@/components/partners/Partners";
import Testimonails from "@/components/testimonails";
import { getHome , getSettings} from "@/lib/serverActions";

interface LayoutProps {
  params: Promise<{ locale: string | any }>; 
}
export default async function Home({ params }: LayoutProps) {
  const { locale } = await params;

  let homeResponse;
  let settingsResponse;

  try {
    homeResponse = await getHome(locale);
    settingsResponse = await getSettings(locale);
  } catch (error) {
    console.log(error);
  }

   

  const slider = homeResponse?.data?.sliders;
  const sections = homeResponse?.data?.sections_names;
  const blogs = homeResponse?.data?.blogs;
  const sectors = homeResponse?.data?.sectors;
  const managers = homeResponse?.data?.managers;
  const legal = settingsResponse?.data;
  const whatsapp = settingsResponse?.data?.whatsapp;
  const email = settingsResponse?.data?.email;
console.log(homeResponse?.data.settings.sectors_title,'titleeeeee')
  return (
    <>
      <div >
    <Header slider = {slider} sections = {sections} whatsapp = {whatsapp} email = {email}/>
   <AboutUs/>
   <OurServices/>
   <OurTeam/>
   <Partners locale={locale}/>
   <Testimonails/>
      </div>
    </>
  );
}
