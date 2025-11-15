import { HeroContent } from "@/components/sub/hero-content";

export default function ResumePage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 pt-28 pb-16 px-4 md:px-10">
        <section className="flex flex-col items-center text-center gap-4">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Resume
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Here&apos;s my latest resume. You can view it directly below.
          </p>
        </section>

        <section className="flex justify-center">
          <div className="w-full max-w-5xl h-[75vh] border border-[#2A0E61] rounded-xl overflow-hidden bg-[#030014]/70">
            <iframe
              src="/api/resume"
              title="Rajkumar Dake Resume"
              className="w-full h-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
