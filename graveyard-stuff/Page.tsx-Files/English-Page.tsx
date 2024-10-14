import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon, WebcamIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            {/* This will ensure that the short text underneath the name is hidden when printing */}
            {/* Having an about and a summary right after might seem rendundant and not worth it if you have to stick to only 2 pages */}
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.about} 
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            {/* Website, Email, and Phone icons only visible in print */}
            <div className="hidden gap-y-2 font-mono text-sm text-muted-foreground print:flex print:flex-col">
              {RESUME_DATA.contact.tel ? (
                <div className="flex items-center gap-x-1">
                  <PhoneIcon className="size-4" />
                  <a
                    href={`tel:${RESUME_DATA.contact.tel}`}
                    className="underline print:text-[10px] print:font-semibold"
                  >
                    {RESUME_DATA.contact.tel}
                  </a>
                </div>
              ) : null}
              {RESUME_DATA.contact.email ? (
                <div className="flex items-center gap-x-1">
                  <MailIcon className="size-4" />
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="underline print:text-[10px] print:font-semibold"
                  >
                    {RESUME_DATA.contact.email}
                  </a>
                </div>
              ) : null}
              {RESUME_DATA.personalWebsiteUrl ? (
                <div className="flex items-center gap-x-1">
                  <WebcamIcon className="size-4" />
                  <a
                    href={RESUME_DATA.personalWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline print:text-[10px] print:font-semibold"
                  >
                    Personal Portfolio
                  </a>
                </div>
              ) : null}
            </div>
            {/* Website, Email, and Phone details only visible on screen */}
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <Avatar className="size-44">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">Driving UX Innovation at EY</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => (
              <Badge className="badge-print-override" key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Relevant Work Experience</h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a className="hover:underline" href={work.link}>
                      {work.company}
                    </a>
                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end ?? "Present"}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none print:text-[12px]">
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs print:text-[10px]">
                {work.description}
              </CardContent>
              <CardContent className="mt-2">
                <div className="flex flex-wrap gap-1">
                  {work.skills.map((skill) => (
                    <Badge key={skill} className="badge-print-override">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Formal Education</h2>
          {RESUME_DATA.education.map((education) => (
            <Card key={education.school}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {education.school}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-[10px] tabular-nums leading-tight print:text-[10px] print:leading-tight">
                {education.degree}
              </CardContent>
              <CardContent className="mt-2 text-xs print:text-[9px]">
                {education.description}
              </CardContent>
              <CardContent className="mt-2">
                <div className="flex flex-wrap gap-1">
                  {education.skills.map((skill) => (
                    <Badge key={skill} className="badge-print-override">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-xl font-bold mt-3">Academic Publications</h2>
          {RESUME_DATA.Publikationer.map((publikation) => (
            <Card key={publikation.title}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    <a href={publikation.link} className="hover:underline">
                      {publikation.title}
                    </a>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {publikation.start}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-[10px] tabular-nums leading-tight print:text-[10px] print:leading-tight">
                {publikation.author}
              </CardContent>
            </Card>
          ))}
        </Section>
        
        <Section>
          <h2 className="text-xl font-bold mt-3">Volunteer Work and Conferences</h2>
          {RESUME_DATA.FrivilligtArbejde.map((FrivilligtArbejde) => (
            <Card key={FrivilligtArbejde.name}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {FrivilligtArbejde.name}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {FrivilligtArbejde.start}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-[10px] tabular-nums leading-tight print:text-[10px] print:leading-tight">
                {FrivilligtArbejde.company}
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-xl font-bold mt-3">Professional References</h2>
          {RESUME_DATA.Referencer.map((Referencer) => (
            <Card key={Referencer.name}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {Referencer.name}
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="text-[10px] tabular-nums leading-tight print:text-[10px] print:leading-tight">
                {Referencer.company}
              </CardContent>
              <CardContent className="text-[10px] font-bold tabular-nums leading-tight print:text-[10px] print:leading-tight">
                {Referencer.kontakt}
              </CardContent>
            </Card>
          ))}
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Portfolio hjemmeside",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}