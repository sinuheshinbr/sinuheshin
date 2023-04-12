import {type NextPage} from "next"
import {FaReact} from "react-icons/fa"
import Head from "next/head"

const Resume: NextPage = () => {
  const imports = [
    {
      value: "AgriculturalEngineeringDegree",
      from: "'universidade-de-sao-paulo'",
    },
    {value: "WorkExperience", from: "'life/developer'"},
    {value: "JuniorDeveloper", from: "'xaza'"},
    {value: "SeniorDeveloper", from: "'nonstop'"},
  ]
  const personalInfo = [
    {const: "name", value: "'Sinuhe Djin Maschio Shin'"},
    {const: "position", value: "'Full stack developer'"},
    {const: "email", value: "'sinuheshin@gmail.com'"},
    {const: "github", value: "'https://github.com/sinuheshinbr'"},
    {const: "phone", value: "'+55 11 9-4746-1988'"},
  ]

  const addressInfo = [
    {key: "country", value: "'Brazil'"},
    {key: "state", value: "'SP'"},
    {key: "city", value: "'São Paulo'"},
    {key: "area", value: "'Vila Mariana'"},
    {key: "street", value: "'Rua Doutor Tomás Alves'"},
    {key: "zipcode", value: "'04017-070'"},
  ]

  const skills = [
    "javascript",
    "typescript",
    "nodejs",
    "linux",
    "bash",
    "react",
    "nextjs",
    "prisma",
    "trpc",
    "mongodb",
    "css",
    "tailwind",
    "serverless-framework",
    "aws-s3",
    "aws-lambda",
    "aws-api-gateway",
  ]

  const languages = [
    ["portuguese", "native"],
    ["english", "fluent"],
  ]

  const freelanceAchievements = [
    "Mininum Viable Product physician burnout app 'Burnie' in React Native",
    "Bakery ERP in Next.js",
    "Real Estate website portfolio - Syn Prop Tech - https://www.syn.com.br",
  ]

  const juniorDeveloperAchievements = [
    "Codebase refactor from React class components to React hooks",
    "Website migration to Next.js",
    "Backend service hosted at AWS Lambda with microservices and layers using Serverless Framework",
    "Implementation of google map with geolocation property search and custom area creator",
  ]

  const seniorDeveloperAchievements = [
    "Real estate property sharing network",
    "Xml generator for advertising sites integration",
    "Service to zip and download S3 file streams",
    "Service to generate pdf files with webpage content using puppeteer",
    "Configured mailing service using nodemailer, gmail smtp-relay and handlebars",
  ]

  return (
    <div>
      <Head>
        <title>Sinuhe&rsquo;s resume</title>
        <meta name="description" content="My online resume" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className="w-full bg-ss-bg p-1 pr-10 text-sm">
        <div className="absolute flex h-5 w-full items-center gap-3 bg-ss-bg pl-2 pt-1 text-ss-blue">
          <FaReact className="" />
          <span>resume.tsx</span>
        </div>

        <div className="mt-6 flex gap-1">
          <div className="w-14 text-right">
            {Array.from(Array(111).keys()).map((n) => (
              <div className="mr-2 text-gray-500" key={n}>
                {n + 1}
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {imports.map((i) => (
              <div key={i.value} className="flex gap-3">
                <div className="text-ss-green">import</div>
                <div className="text-gray-500">{`{`}</div>
                <div className="text-ss-blue">{i.value}</div>
                <div className="text-gray-500">{`}`}</div>
                <div className="text-ss-green">from</div>
                <div className="text-ss-yellow">{i.from}</div>
              </div>
            ))}

            <div className="invisible flex gap-3">empty</div>

            {personalInfo.map((p) => (
              <div key={p.const} className="flex gap-3">
                <div className="text-ss-green">const</div>
                <div className="text-ss-blue">{p.const}</div>
                <div className="text-ss-purple">=</div>
                <div className="text-ss-yellow">{p.value}</div>
              </div>
            ))}

            <div className="invisible flex gap-3">empty</div>

            <div className="flex gap-3">
              <div className="text-ss-green">const</div>
              <div className="text-ss-blue">address</div>
              <div className="text-ss-purple">=</div>
              <div className="text-gray-500">{`{`}</div>
            </div>

            {addressInfo.map((a) => (
              <div key={a.key} className="flex gap-3">
                <div className="ml-4 text-ss-green">{a.key}</div>
                <div className="-ml-2 text-gray-500">:</div>
                <div className="text-ss-yellow">{a.value}</div>
                <div className="-ml-2 text-gray-500">,</div>
              </div>
            ))}

            <div className="flex gap-3">
              <div className="ml-4 text-ss-green">geo</div>
              <div className="-ml-2 text-gray-500">:</div>
              <div className="text-gray-500">{`{`}</div>
            </div>

            <div className="ml-8">
              <div className="flex gap-3">
                <div className="text-ss-green">type</div>
                <div className="-ml-2 text-gray-500">:</div>
                <div className="text-ss-yellow">&quot;Point&quot;</div>
              </div>
              <div className="flex gap-3">
                <div className="text-ss-green">coordinates</div>
                <div className="-ml-2 text-gray-500">:</div>
                <div className="text-gray-500">{`[`}</div>
                <div className="text-ss-purple">{`-`}</div>
                <div className="-ml-2 text-ss-yellow">23.5875173</div>
                <div className="-ml-2 text-gray-500">,</div>
                <div className="text-ss-purple">{`-`}</div>
                <div className="-ml-2 text-ss-yellow">46.6392757</div>
                <div className="text-gray-500">{`]`}</div>
              </div>
            </div>

            <div className="ml-4 text-gray-500">{`}`}</div>

            <div className="text-gray-500">{`}`}</div>

            <div className="invisible flex gap-3">empty</div>

            <div className="flex gap-3">
              <div className="text-ss-green">const</div>
              <div className="text-ss-blue">skills</div>
              <div className="text-ss-purple">=</div>
              <div className="text-gray-500">{`[`}</div>
            </div>

            {skills.map((a) => (
              <div key={a} className="flex gap-3">
                <div className="ml-4 text-ss-yellow">&apos;{a}&apos;</div>
                <div className="-ml-2 text-gray-500">,</div>
              </div>
            ))}

            <div className="text-gray-500">{`]`}</div>

            <div className="invisible flex gap-3">empty</div>

            <div className="flex gap-3">
              <div className="text-ss-green">const</div>
              <div className="text-ss-blue">languages</div>
              <div className="text-ss-purple">=</div>
              <div className="text-gray-500">{`[`}</div>
            </div>

            {languages.map((l, i) => (
              <div key={i} className="flex gap-3">
                <div className="ml-4 text-gray-500">{`[`}</div>
                <div className="text-ss-yellow">&apos;{l[0]}&apos;</div>
                <div className="-ml-2 text-gray-500">,</div>
                <div className="text-ss-yellow">&apos;{l[1]}&apos;</div>
                <div className="text-gray-500">{`]`}</div>
                <div className="-ml-2 text-gray-500">,</div>
              </div>
            ))}

            <div className="text-gray-500">{`]`}</div>

            <div className="invisible flex break-after-page gap-3">empty</div>

            <div className="flex gap-3">
              <div className="text-ss-green">export const</div>
              <div className="text-ss-red">Resume</div>
              <div className="text-ss-purple">=</div>
              <div className="text-gray-500">{`()`}</div>
              <div className="text-ss-purple">=&gt;</div>
              <div className="text-gray-500">{`{`}</div>
            </div>

            <div className="ml-4">
              <div className="flex gap-3">
                <div className="text-ss-green">return</div>
                <div className="text-gray-500">{`(`}</div>
              </div>

              <div className="ml-4">
                <div className="flex">
                  <div className="text-gray-500">{`<`}</div>
                  <div className="text-ss-blue">WorkExperience</div>
                  <div className="text-gray-500">{`>`}</div>
                </div>

                <div className="ml-4">
                  <div className="flex">
                    <div className="text-gray-500">{`<`}</div>
                    <div className="text-ss-blue">Freelance</div>
                  </div>
                  <div className="ml-4">
                    <div className="flex">
                      <div className="text-ss-green">from</div>
                      <div className="text-ss-purple">=</div>
                      <div className="text-ss-yellow">&quot;2018&quot;</div>
                    </div>
                    <div className="flex">
                      <div className="text-ss-green">to</div>
                      <div className="text-ss-purple">=</div>
                      <div className="text-ss-yellow">&quot;2019&quot;</div>
                    </div>
                    <div className="flex">
                      <div className="text-ss-green">achievements</div>
                      <div className="text-ss-purple">=</div>
                      <div className="text-gray-500">{`{[`}</div>
                    </div>
                    <div className="ml-4">
                      {freelanceAchievements.map((a) => (
                        <div className="text-ss-yellow" key={a}>
                          {`'${a}'`}
                        </div>
                      ))}
                    </div>
                    <div className="text-gray-500">{`]}`}</div>
                  </div>
                  <div className="text-gray-500">{`/>`}</div>

                  <div className="flex">
                    <div className="text-gray-500">{`<`}</div>
                    <div className="text-ss-blue">JuniorDeveloper</div>
                  </div>
                  <div className="ml-4">
                    <div className="flex">
                      <div className="text-ss-green">from</div>
                      <div className="text-ss-purple">=</div>
                      <div className="text-ss-yellow">&quot;2019&quot;</div>
                    </div>
                    <div className="flex">
                      <div className="text-ss-green">to</div>
                      <div className="text-ss-purple">=</div>
                      <div className="text-ss-yellow">&quot;2020&quot;</div>
                    </div>
                    <div className="flex">
                      <div className="text-ss-green">url</div>
                      <div className="text-ss-purple">=</div>
                      <div className="text-ss-yellow">
                        &quot;https://www.xaza.com.br&quot;
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-ss-green">achievements</div>
                      <div className="text-ss-purple">=</div>
                      <div className="text-gray-500">{`{[`}</div>
                    </div>
                    <div className="ml-4">
                      {juniorDeveloperAchievements.map((a) => (
                        <div className="text-ss-yellow" key={a}>
                          {`'${a}'`}
                        </div>
                      ))}
                    </div>
                    <div className="text-gray-500">{`]}`}</div>
                  </div>
                  <div className="text-gray-500">{`/>`}</div>

                  <div className="flex">
                    <div className="text-gray-500">{`<`}</div>
                    <div className="text-ss-blue">SeniorDeveloper</div>
                  </div>
                  <div className="ml-4">
                    <div className="flex">
                      <div className="text-ss-green">from</div>
                      <div className="text-ss-purple">=</div>
                      <div className="text-ss-yellow">&quot;2020&quot;</div>
                    </div>
                    <div className="flex">
                      <div className="text-ss-green">to</div>
                      <div className="text-ss-purple">=</div>
                      <div className="flex gap-2">
                        <div className="text-gray-500">{`{`}</div>
                        <div className="text-ss-purple">new</div>
                        <div className="flex">
                          <div className="text-ss-blue">Date</div>
                          <div className="text-gray-500">{`()`}</div>
                        </div>
                        <div className="text-gray-500">{`}`}</div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-ss-green">url</div>
                      <div className="text-ss-purple">=</div>
                      <div className="text-ss-yellow">
                        &quot;https://www.usenonstop.com&quot;
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-ss-green">achievements</div>
                      <div className="text-ss-purple">=</div>
                      <div className="text-gray-500">{`{[`}</div>
                    </div>
                    <div className="ml-4">
                      {seniorDeveloperAchievements.map((a) => (
                        <div className="text-ss-yellow" key={a}>
                          {`'${a}'`}
                        </div>
                      ))}
                    </div>
                    <div className="text-gray-500">{`]}`}</div>
                  </div>
                  <div className="text-gray-500">{`/>`}</div>
                </div>

                <div className="flex">
                  <div className="text-gray-500">{`</`}</div>
                  <div className="text-ss-blue">WorkExperience</div>
                  <div className="text-gray-500">{`>`}</div>
                </div>
              </div>

              <div className="text-gray-500">{`)`}</div>
            </div>

            <div className="text-gray-500">{`}`}</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Resume
