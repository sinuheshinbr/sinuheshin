import {type NextPage} from "next"
import {FaReact} from "react-icons/fa"
import Head from "next/head"

const Resume: NextPage = () => {
  const personalInfo = [
    {const: "name", value: "'Sinuhe Djin Maschio Shin'"},
    {const: "position", value: "'Full stack developer'"},
    {const: "email", value: "'sinuheshin@gmail.com'"},
    {const: "github", value: "'https://github.com/sinuheshinbr'"},
    {const: "phone", value: "'+55 11 9-4746-1988'"},
  ]

  const addressInfo = [
    {key: "country", value: "'Brazil'"},
    {key: "city", value: "'São Paulo'"},
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

  return (
    <div>
      <Head>
        <title>Sinuhe&rsquo;s resume</title>
        <meta name="description" content="My online resume" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className="h-full w-full bg-ss-bg p-1 text-sm">
        <div className="fixed flex h-5 w-full items-center gap-3 text-ss-blue">
          <FaReact className="" />
          <span>resume.tsx</span>
        </div>

        <div className="mt-6 flex gap-3">
          <div className="w-12 text-right">
            {Array.from(Array(50).keys()).map((n) => (
              <div className="mr-2 text-gray-500" key={n}>
                {n + 1}
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <div className="flex gap-3">
              <div className="text-ss-green">import</div>
              <div className="text-gray-500">{`{`}</div>
              <div className="text-ss-blue">AgriculturalEngineeringDegree</div>
              <div className="text-gray-500">{`}`}</div>
              <div className="text-ss-green">from</div>
              <div className="text-ss-yellow">
                &quot;universidade-de-sao-paulo&quot;
              </div>
            </div>

            <div className="invisible flex gap-3">empty</div>

            {personalInfo.map((p) => (
              <div key={p.const} className="flex gap-3">
                <div className="text-ss-green">const</div>
                <div className="text-ss-blue">{p.const}</div>
                <div className="text-ss-purple">=</div>
                <div className="text-ss-yellow">{p.value}</div>
              </div>
            ))}

            <div className="flex gap-3">
              <div className="text-ss-green">const</div>
              <div className="text-ss-blue">address</div>
              <div className="text-ss-purple">=</div>
              <div className="text-gray-500">{`{`}</div>
            </div>

            {addressInfo.map((a) => (
              <div key={a.key} className="flex gap-3">
                <div className="ml-4 text-ss-green">{a.key}</div>
                <div className="text-gray-500">:</div>
                <div className="text-ss-yellow">{a.value}</div>
                <div className="-ml-1 text-gray-500">,</div>
              </div>
            ))}

            <div className="text-gray-500">{`}`}</div>

            <div className="flex gap-3">
              <div className="text-ss-green">const</div>
              <div className="text-ss-blue">skills</div>
              <div className="text-ss-purple">=</div>
              <div className="text-gray-500">{`[`}</div>
            </div>

            {skills.map((a) => (
              <div key={a} className="flex gap-3">
                <div className="ml-4 text-ss-yellow">&apos;{a}&apos;</div>
                <div className="-ml-1 text-gray-500">,</div>
              </div>
            ))}

            <div className="text-gray-500">{`]`}</div>

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
                <div className="-ml-1 text-gray-500">,</div>
                <div className="text-ss-yellow">&apos;{l[1]}&apos;</div>
                <div className="text-gray-500">{`]`}</div>
                <div className="-ml-1 text-gray-500">,</div>
              </div>
            ))}

            <div className="text-gray-500">{`]`}</div>

            <div className="invisible flex gap-3">empty</div>

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
