function Skills() {
  return (
    <section className="px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Skills
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Core Domains
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          My diverse skill set allows me to tackle complex challenges from multiple angles.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {/* mobile */}
        <div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
              Education & Leadership
              </div>
              <div className="p-6 pt-10">
                <ul className="list-disc space-y-2 pl-5">
                  <li>KS2–KS5 Science Teaching</li>
                  <li>Deputy Head Pastoral Care</li>
                  <li>Innovative Pedagogy</li>
                  <li>Student Development</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* web development */}
        <div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
              Sports & Coaching
              </div>
              <div className="p-6 pt-10">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Professional Athlete</li>
                  <li>Kenya U-20 Rugby Coach</li>
                  <li>Junior World Rugby Trophy</li>
                  <li>Performance Development</li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* backend development */}
        <div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
              Youth Development
              </div>
              <div className="p-6 pt-10">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Community Outreach</li>
                  <li>Underprivileged Youth Support</li>
                  <li>Academy Development</li>
                  <li>Social Impact Initiatives</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* cloud computing */}
        <div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
              Technology & Innovation
              </div>
              <div className="p-6 pt-10">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Platform Development</li>
                  <li>Sports Tech Solutions</li>
                  <li>Academy Management Systems</li>
                  <li>Digital Innovation</li>
                 
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* cybersecurity */}
       
        {/* leadership */}
       
      </div>
    </section>
  );
}

export default Skills;
