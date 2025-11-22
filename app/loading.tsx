import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        src="/images/logo.svg"
        alt="loading logo"
        width={200}
        height={200}
        className=""
      />
    </div>
  );
}
