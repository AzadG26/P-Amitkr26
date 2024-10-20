import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I'm Azad Gupta, an MSc Informatics student at Delhi University. With experience in circuit design, embedded systems, and freelance SEO and web development, I combine technical expertise with marketing strategies to deliver comprehensive solutions.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            //src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=amitkr26&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=AzadG26&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false'
            alt="Amitkr26"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            //src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=amitkr26&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            src='https://github-readme-stats.vercel.app/api?username=AzadG26&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false'
            alt="Amitkr26"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,css,js,react,bootstrap,wordpress,figma,git,github,netlify,vercel,vscode,python,c`}
            alt="Amitkr26"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            //src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=amitkr26&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            src="https://streak-stats.demolab.com?user=AzadG26&theme=dark&hide_border=true&type=png&background=EB545400&ring=EBE02D&currStreakLabel=EBD830"
            alt="Amitkr26"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/AzadG26/Amitkr26"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              //src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=amitkr26&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              src="https://github-readme-stats.vercel.app/api/pin/?username=AzadG26&repo=Amitkr26&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="Amitkr26"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
