import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon, WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";

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
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
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
            <div className="hidden print:flex print:flex-col gap-y-2 font-mono text-sm text-muted-foreground">
              {RESUME_DATA.contact.tel && (
                <div className="flex items-center gap-x-1">
                  <PhoneIcon className="size-4" />
                  <a
                    href={`tel:${RESUME_DATA.contact.tel}`}
                    className="underline print:text-[10px] print:font-semibold"
                  >
                    {RESUME_DATA.contact.tel}
                  </a>
                </div>
              )}
              {RESUME_DATA.contact.email && (
                <div className="flex items-center gap-x-1">
                  <MailIcon className="size-4" />
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="underline print:text-[10px] print:font-semibold"
                  >
                    {RESUME_DATA.contact.email}
                  </a>
                </div>
              )}
              {RESUME_DATA.personalWebsiteUrl && (
                <div className="flex items-center gap-x-1">
                  <WebcamIcon className="size-4" />
                  <a
                    href={RESUME_DATA.personalWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline print:text-[10px] print:font-semibold"
                  >
                    Personlig Portfolio
                  </a>
                </div>
              )}
            </div>
            {/* Website, Email, and Phone details only visible on screen */}
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.tel && (
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
              )}
              {RESUME_DATA.contact.email && (
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
              )}
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
          <h2 className="text-xl font-bold">Om mig</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Kompetencer</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => (
              <Badge
                className="badge-print-override"
                key={skill}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Relevant erhvervserfaring</h2>
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
                          className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end ?? "Nu"}
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
          <h2 className="text-xl font-bold">Formel uddannelse</h2>
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
          <h2 className="text-xl font-bold">Akademiske Publikationer</h2>
          {RESUME_DATA.Publikationer.map((publikation) => (
            <Card key={publikation.title}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {publikation.title}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {publikation.start}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-[10px] tabular-nums leading-tight print:text-[10px] print:leading-tight">
                {publikation.author}
              </CardContent>
              <CardContent className="mt-1 tabular-nums leading-tight print:text-[12px] print:leading-tight font-bold">
                <a href={publikation.link} className="hover:underline">
                  {publikation.sig}
                </a>
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Frivilligt arbejde og konferencer</h2>
          {RESUME_DATA.FrivilligtArbejde.map((frivilligtArbejde) => (
            <Card key={frivilligtArbejde.name}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {frivilligtArbejde.name}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {frivilligtArbejde.start}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-[10px] tabular-nums leading-tight print:text-[10px] print:leading-tight">
                {frivilligtArbejde.company}
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Professionelle Referencer</h2>
          {RESUME_DATA.Referencer.map((reference) => (
            <Card key={reference.name}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {reference.name}
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="text-[10px] tabular-nums leading-tight print:text-[10px] print:leading-tight">
                {reference.company}
              </CardContent>
              <CardContent className="font-bold text-[10px] tabular-nums leading-tight print:text-[10px] print:leading-tight">
                {reference.kontakt}
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