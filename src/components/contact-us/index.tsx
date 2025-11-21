"use client";
import React from "react";
import Image from "next/image";
import Container from "../shared/formcomponents/Container";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import apiServiceCall from "@/lib/apiServiceCall";
import CustomSelect from "../shared/reusableComponents/CustomSelect";

// ✅ Schema مع الترجمة
const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(3, t("validation.name_min")),
    email: z.string().email(t("validation.email_invalid")),
    phone: z.string().min(6, t("validation.phone_min")),
    message_type: z.enum(["inquiry", "suggest"], {
      required_error: t("validation.message_type_required"),
    }),
    message: z.string().min(10, t("validation.message_min")),
  });

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

const ContactUs = () => {
  const t = useTranslations("ContactUs");
  const contactSchema = createContactSchema(t);

  // ✅ useForm مع defaultValues عشان الريسيت يفضي السيليكت كمان
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message_type: undefined, // السيليكت يبدأ فاضي
      message: "",
    },
  });

  // ✅ Mutation
  const mutation = useMutation({
    mutationFn: (data: ContactFormData) =>
      apiServiceCall({
        url: "contact-us",
        method: "POST",
        body: data,
      }),
    onSuccess: () => {
      toast.success(t("messages.success"));
      // 🟢 reset كل الحقول بما فيها السيليكت
      reset({
        name: "",
        email: "",
        phone: "",
        message_type: undefined,
        message: "",
      });
    },
    onError: (error: any) => {
      toast.error(typeof error === "string" ? error : t("messages.error"));
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  // ✅ كلاس جاهز للحقول
  const inputClass = (hasError: boolean) =>
    `w-full h-[50px] rounded-[10px] outline-none px-5 border ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="bg-white mt-20">
      <ToastContainer />
      <Container>
        <div className="flex items-center justify-center" data-aos="fade-left">
          <div className="flex flex-col items-center justify-center gap-5 lg:w-[50%] w-[90%] rounded-[12px]">
            {/* العنوان */}
            <div className="flex items-center gap-5">
              <Image
                src="/images/contact-us.png"
                alt="contact-us"
                width={71}
                height={71}
              />
              <div>
                <h2 className="lg:text-[22px] text-lg text-[#121212] font-bold">
                  {t("title")}
                </h2>
                <p className="mt-1 lg:text-base text-sm text-[#818181]">
                  {t("subtitle")}
                </p>
              </div>
            </div>

            {/* الفورم */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[65%] flex flex-col gap-4"
            >
              {/* الاسم */}
              <input
                type="text"
                {...register("name")}
                className={inputClass(!!errors.name)}
                placeholder={t("placeholders.name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              {/* الإيميل + التليفون */}
              <div className="flex lg:flex-row flex-col gap-4">
                <input
                  type="email"
                  {...register("email")}
                  className={inputClass(!!errors.email)}
                  placeholder={t("placeholders.email")}
                />
                <input
                  type="text"
                  {...register("phone")}
                  className={inputClass(!!errors.phone)}
                  placeholder={t("placeholders.phone")}
                />
              </div>

              <div className="flex items-start justify-between">
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* السيليكت */}
              <CustomSelect
                control={control}
                name="message_type"
                placeholder={t("placeholders.type")}
                options={[
                  { value: "inquiry", label: t("placeholders.inquiry") },
                  { value: "suggest", label: t("placeholders.suggest") },
                ]}
                error={errors.message_type?.message}
              />

              {/* الرسالة */}
              <textarea
                rows={4}
                {...register("message")}
                className={`w-full rounded-[10px] outline-none px-5 py-3 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder={t("placeholders.message")}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}

              {/* زر الإرسال */}
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-[#D9A45A] lg:w-1/2 w-full mx-auto text-white font-medium rounded-[10px] h-[50px] hover:bg-[#c18e4e] transition disabled:opacity-50"
              >
                {mutation.isPending ? t("sending") : t("send")}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
