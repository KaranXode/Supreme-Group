import logo from "../../assets/icons/supremeLogo.svg";
import Button from "../Button/Button";
import linkedin from "../../assets/icons/linkedinIcon.svg";
import engIcon from "../../assets/icons/engIcon.svg";

export default function Header() {
  return (
    <header className="shadow-lg">
      <div className="bg-white  container  mx-auto ">
        <div className="py-2 md:py-3 px-3 flex items-center justify-between ">
          <div className=" h-full xlg:py-3 py-1 mt-[2px]  gap-4">
            <a className="" href="/">
              {" "}
              <img
                src={logo}
                className="h-full !cursor-pointer"
                alt="Logo of supreme with text"
                loading="eager"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center justify-between gap-6">
           <div className="w-full">
           <Button variant="primary" className="min-w-[12.5rem]">Contact Us</Button>
           </div>
            <div className="w-full">
              <img src={linkedin} alt="linkedin" />
            </div>
            <div className="w-full">
              <img src={engIcon} alt="English" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
