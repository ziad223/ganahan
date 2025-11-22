import { getPartners } from "@/lib/serverActions";
import { getTranslations } from "next-intl/server";
import PartnersSlider from "./PartnersSlider";
import Image from "next/image";
import Container from "../shared/formcomponents/Container";

const Partners = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: "Partners" });
  const partnersResponse = await getPartners(locale);
  const partners = [
    {
      id : 1 ,
      image : '/images/partner2.png'
    },
     {
      id : 2 ,
      image : '/images/partner3.png'
    },
     {
      id : 3 ,
      image : '/images/partner4.png'
    },
     {
      id : 4 ,
      image : '/images/partner2.png'
    },
     {
      id : 5 ,
      image : '/images/partner3.png'
    },
     {
      id : 6 ,
      image : '/images/partner4.png'
    },
     {
      id : 7 ,
      image : '/images/partner2.png'
    },
     {
      id : 8 ,
      image : '/images/partner3.png'
    },
     {
      id : 9 ,
      image : '/images/partner4.png'
    },
     {
      id : 10 ,
      image : '/images/partner2.png'
    },
     {
      id : 11 ,
      image : '/images/partner3.png'
    },
     {
      id : 12 ,
      image : '/images/partner4.png'
    },
     {
      id : 13 ,
      image : '/images/partner2.png'
    },
     {
      id : 14 ,
      image : '/images/partner3.png'
    },
     {
      id : 15 ,
      image : '/images/partner4.png'
    },

  ]
  console.log(partners, "partnerssssss");
  return (
      <div className="w-full py-10 my-3 bg-white ">
    <Container>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#121212]">{t("title")}</h2>
          {/* <p className="text-[#818181] mt-2">{t("subtitle")}</p> */}
        </div>
        <div className=" hidden lg:flex  w-full items-center gap-6 justify-center">
          {}
          {partners.length < 5 &&
            partners?.map((item) => {
              return (
                <div key={item.id} className="relative  w-[150px] h-[150px]">
                  <Image
                    fill
                    src={item?.image}
                    alt={`item ${item?.id}`}
                    className=" object-contain rounded-full"
                  />
                </div>
              );
            })}

          {partners.length >= 5 && (
            <div className=" w-full">
              <PartnersSlider partners={partners} />
            </div>
          )}
        </div>

        <div className="lg:hidden">
          <div className="">{<PartnersSlider partners={partners} />}</div>
        </div>
    </Container>
      </div>
  );
};

export default Partners;
