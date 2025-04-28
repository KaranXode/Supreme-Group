import Button from "../Button/Button";
import InputField from "./InputField/InputField";
import TextAreaField from "./TextAreaField/TextAreaField";
import FormAddress from "./FormAddress/FormAddress";

export default function FormSection() {
  return (
    <>
      <div className=" bg-primary-700 sm:pt-[14%] pt-[20%] pb-[4%]">
        <div className=" container  mx-auto  px-1.5   lg:w-10/12  relative">
          <div className=" bg-primary-700  grid grid-cols-12 px-4  md:px-0 rounded-[10px] 2xl:grid-cols-11 py-8 md:py-10 lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[5rem]">
            <div className="grid grid-cols-1 gap-y-10 col-start-1 md:grid-cols-2 md:col-start-2 col-end-13 md:col-end-12 2xl:col-end-11 text-white mb-3">
             <FormAddress/>
              <div>
                <form className="mx-auto w-full grid 2xl:gap-9 xl:gap-4 gap-4">
                  <InputField name="name" placeholder="Full Name" />
                  <InputField type="email" name="email" placeholder="Email" />
                  <InputField name="Subject" placeholder="Subject" />
                  <TextAreaField name="message" placeholder="Message" />
                  <div className="flex justify-center md:grid relative place-content-center md:place-content-start">
                    <Button variant="secondary">Send</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
