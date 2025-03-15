import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import image1 from "/images/founder.jpeg";

export default function AboutUsSection() {
  return (
    <section className="w-full min-h-[calc(100vh-100px)] flex items-center pt-20 pb-10 md:pt-24 md:pb-14 lg:pt-32 lg:pb-16 text-white">
      <div className="container px-[1%] flex flex-wrap lg:flex-nowrap items-center justify-between mx-auto">
        <div className="w-full lg:w-1/2 space-y-4 order-2 lg:order-none p-4">
          <div className="inline-block rounded-lg bg-[#FF4500]/20 px-3 py-1 text-sm text-[#FF4500] mb-4">
            About the Founder
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Hi, I'm <span className="text-[#FF4500]">Balakrishnan</span>
          </h2>
          <p className="text-white md:text-lg/relaxed lg:text-lg/relaxed xl:text-lg/relaxed font-light">
            An experienced Electrical Engineering Contractor and founder of Sri
            Vari Electricals, leading a skilled team to provide innovative and
            reliable electrical solutions across industrial, commercial, and
            residential sectors for over 20 years.
          </p>
          <ul className="space-y-2">
            {[
              "Founder of Sri Vari Electricals",
              "Power Systems Expert",
              "20+ Years of Industry Experience",
              "Innovative & Reliable Solutions",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                <span className="font-light">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <Button className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white">
              Linkedin
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={image1}
            alt="Portrait photography"
            className="w-[90%] sm:w-[80%] lg:w-[600px] h-[500px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
