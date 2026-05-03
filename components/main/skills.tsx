import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  SKILL_DATA,
} from "@/constants";

const rows = [SKILL_DATA, FRONTEND_SKILL, BACKEND_SKILL];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10 md:py-20"
    >
      <SkillText />

      <div className="flex flex-col items-center gap-6 mt-4 w-full px-10">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="flex flex-row justify-center gap-8 items-center"
            style={{ width: `${100 - rowIdx * 22}%` }}
          >
            {row.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
