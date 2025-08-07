
function Work() {
  const designUrl =
    "https://www.figma.com/design/BidJHPlemFRKZNvUzLLehZ/phoenix-sports-Africa?node-id=0-1&t=0nsGjEN7NIXZ5T0N-0";
  return (
    <section
      id="work"
      className="px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-[30rem] py-12 md:py-24 lg:py-32 bg-background/40"
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Projects
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of my recent projects and accomplishments.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border px-4 py-4">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">
              South Coast Pirates Academy
            </h1>
            <p className="text-foreground/65 ">
              Coastal Rugby Elite Training Development
            </p>
            <p className="text-foreground/40">
              A coastal rugby academy focused on developing talent along Kenya&apos;s
              South Coast, combining elite athletic training with comprehensive
              community development initiatives.
            </p>
          </div>
        </div>

        <div className="">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border px-4 py-4">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">
              King&apos;s Rugby Academy
            </h1>
            <p className="text-foreground/65 ">Rugby Community Kibera</p>
            <p className="text-foreground/40">
              Founded in Kibera, this academy provides rugby training and
              educational support to young people, creating clear pathways to
              success through sport, education, and community engagement.
            </p>
          </div>
        </div>

        <div className="">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border px-4 py-4">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">
              PhoenixPlay Platform
            </h1>
            <p className="text-foreground/65 ">
              Sports Tech Platform Management
            </p>
            <p className="text-foreground/40">
              An innovative tech platform designed for comprehensive academy
              management, connecting coaches, players, and administrators
              through seamless digital solutions and real-time analytics.
            </p>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
