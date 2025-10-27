import { FiShield } from "../components/icons";

export default function Disclaimer() {
  return (
    <section className="py-12">
      <div className="md:flex justify-between md:gap-x-5 mx-auto max-w-7xl lg:px-8 sm:px-6 px-4 text-lg">
        <div className="flex justify-center md:justify-none items-center">
          <FiShield className="mr-2 text-brand-purple" fontSize={25} />
          <p className="text-faded-gray">Your data is secure and private</p>
        </div>
        <div className="text-faded-gray text-center pt-10 md:pt-0">
          Note: This tool is not a replacement for professional mental health
          care.
        </div>
      </div>
    </section>
  );
}
