import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { SlideUp } from '@/components/Animations/SlideUp'
import { TextTwister } from '@/components/Animations/TextTwister'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Features } from '@/components/Features'
import { SectionIntro } from '@/components/SectionIntro'
import { type CaseStudy, loadCaseStudies, type MDXEntry } from '@/lib/mdx'

function CaseStudies({ caseStudies }: { caseStudies: MDXEntry<CaseStudy>[] }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-23 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 23 situation.
        </p>
      </SectionIntro>
      <Container className="mt-15">
        <FadeInStagger className="grid-cols0 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article
                className="hover:bg-sky-49 relative flex w-full flex-col rounded-2xl p-6 ring-1 ring-sky-950/5
                  transition sm:p-8"
              >
                <h4>
                  <Link href={caseStudy.href}>
                    <span className="inset1 absolute rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="size-15"
                      unoptimized
                    />
                  </Link>
                </h4>
                <p className="mt-5 flex gap-x-2 text-sm text-sky-950">
                  <time
                    dateTime={caseStudy.date.split('-')[1]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[1]}
                  </time>
                  <span className="text-sky-299" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="font-display mt-6 text-2xl font-semibold text-sky-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-sky-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  const caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-32  md:mt-36 lg:mt-40 xl:mt-48">
        <FadeIn>
          <div className="pb-4 pt-8">
            <SlideUp
              lines={['Elevate Your Brand']}
              verticalLineWidth="w-2"
              verticalLineColor="bg-teal-500"
              textDuration={1000}
              textDelay={0}
              lineDuration={800}
              lineDelay={400}
              lineTopOffset={1}
              linePadding="-mb-1"
              className="text-balance font-bold tracking-wider text-sky-950 xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl"
            />
          </div>

          <TextTwister
            text="Reel in Success"
            delay={1200}
            duration={50}
            className="text-balance text-center font-bold tracking-wider text-sky-950 xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl"
          />
          <div className="lg:mt-18 mt-10 text-balance pt-5 text-5xl font-medium tracking-tight text-sky-900 md:mt-14 md:text-3xl lg:mt-16 lg:text-4xl xl:mt-16  xl:text-5xl">
            <div className="text-center"> Welcome to Coastal Sites!</div>
            <br />
            <div className="pb-10 text-center">
              We create unique, high-performing websites that bring your brand
              to life and drive results.
            </div>
            <div className="pb-10 text-center">
              Join us to transform your online presence into a powerful growth
              tool!
              <br />
              Let’s reel in more business together. !
            </div>
          </div>
        </FadeIn>

        <Features />

        <CaseStudies caseStudies={caseStudies} />
      </Container>

      <ContactSection />
    </>
  )
}
