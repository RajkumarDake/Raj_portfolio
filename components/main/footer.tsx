import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030014] text-gray-300 border-t border-[#7042f830]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white">Rajkumar Dake</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Engineer at InfoEdge India Ltd.<br />
              Building LLM-powered AI systems and scalable full-stack products.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://github.com/Bindu3116" target="_blank" rel="noreferrer noopener"
                className="p-2 rounded-full border border-[#7042f850] hover:border-purple-500 hover:text-purple-400 transition">
                <RxGithubLogo className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/in/rajkumar-dake" target="_blank" rel="noreferrer noopener"
                className="p-2 rounded-full border border-[#7042f850] hover:border-cyan-500 hover:text-cyan-400 transition">
                <RxLinkedinLogo className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noreferrer noopener"
                className="p-2 rounded-full border border-[#7042f850] hover:border-purple-500 hover:text-purple-400 transition">
                <RxTwitterLogo className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-400">Navigate</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "About Me", href: "#about-me" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
              ].map(({ label, href }) => (
                <Link key={label} href={href}
                  className="text-gray-400 hover:text-white transition text-sm">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Contact</h3>
            <div className="flex flex-col gap-3">
              <Link href="mailto:rajkumardakey831@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm break-all">
                <HiOutlineMail className="h-4 w-4 shrink-0" />
                rajkumardakey831@gmail.com
              </Link>
              <Link href="tel:+917569009619"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm">
                <BsTelephone className="h-4 w-4 shrink-0" />
                +91 75690 09619
              </Link>
              <p className="text-gray-500 text-xs mt-2">NIT Jamshedpur · B.Tech CSE · CGPA 8.02</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-6 md:mt-12 pt-4 md:pt-6 border-t border-[#7042f820] flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Rajkumar Dake. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
