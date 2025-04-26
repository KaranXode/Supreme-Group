export default function FormAddress() {
  return (
    <div className="order-1 md:order-[0]">
      <span className=" text-2xl lg:text-[28px] xlg:text-3xl 2xl:text-4xl md:leading-snug lg:leading-snug 2xl:leading-snug font-semibold">
        Get in touch
      </span>
      <div className="h-[2px] w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8"></div>

      <span className=" block font-normal text-base md:text-lg 2xl:text-2xl">
        For general enquiries
      </span>
      <ul className="list-none flex flex-col  gap-3 md:gap-5 2xl:gap-7 pt-5  md:pt-7 2xl:pt-8 ">
        <li className=" flex flex-col gap-px items-start ">
          <span className=" font-medium text-lg md:text-lg xl:text-xl">
            Address :
          </span>
          <span className=" font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
            110, 16th Road, Chembur,
            <br className="xl:hidden block" />
            Mumbai - 400071
          </span>
        </li>
        <li className=" flex flex-col  items-start gap-px text-base md:text-lg 2xl:text-xl">
          <span className=" font-medium text-lg md:text-lg xl:text-xl">
            Phone :
          </span>
          <a
            href="tel:+912225208822"
            className="font-normal hover:underline focus-visible:underline underline-offset-4 decoration-from-font outline-none focus-visible:outline-none text-white text-opacity-90 text-sm md:text-base 2xl:text-xl"
          >
            <span className="">+91 22 25208822</span>
          </a>
        </li>
        <li className=" flex  items-start flex-col gap-px text-base md:text-lg 2xl:text-xl">
          <span className=" font-medium text-lg md:text-lg xl:text-xl">
            Email :
          </span>
          <a
            href="mailto: info@supremegroup.co.in"
            className="font-normal text-white hover:underline focus-visible:underline underline-offset-4 decoration-from-font outline-none focus-visible:outline-none text-opacity-90 text-sm md:text-base 2xl:text-xl"
          >
            info@supremegroup.co.in
          </a>
        </li>
      </ul>
    </div>
  );
}
