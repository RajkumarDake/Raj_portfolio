import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative overflow-hidden rounded-xl border border-[#2A0E61] hover:border-purple-500/60 transition-all duration-300 shadow-[0_8px_32px_rgba(112,66,248,0.25),0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_48px_rgba(112,66,248,0.45),0_0_20px_rgba(0,210,255,0.15)]"
    >
      {/* Image container */}
      <div className="relative w-full h-[180px] md:h-[280px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dark gradient overlay so text below is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0025]/80 via-transparent to-transparent" />
      </div>

      <div className="p-5 bg-[#03001480]">
        <h1 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h1>
        <p className="mt-2 text-gray-400 text-sm leading-relaxed">{description}</p>
        <span className="inline-block mt-4 text-xs text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
          View project →
        </span>
      </div>
    </Link>
  );
};
