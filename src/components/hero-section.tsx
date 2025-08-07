import { Phone } from "lucide-react"

function HeroSection() {
    return (
        <section className="py-12 w-full md:py-24 lg:py-32 xl:py-48" style={{opacity:1,transform:"translateY(0px)"}}>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-[30rem]">
                <div className="flex flex-col items-start justify-center gap-6">
                    <div className="flex flex-col justify-center space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"> 
                    Kenny Andola
                    </h1>
                    <p className="text-xl text-muted-foreground">Teacher, Sports and Tech Enthusiast</p>
                    </div>

                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap  space-x-1 rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white text-background hover:bg-white/90 h-10 px-4 py-2 transition-all hover:scale-105" href="#contact">
                        <span>Contact Me</span>
                        <Phone className="size-4" />
                        </a>
                        {/* <a className="inline-flex items-center space-x-1 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-transparent text-white border border-foreground h-10 px-6 py-2 transition-all hover:scale-105" href="#work">
                            <span>Projects</span>
                            <GitForkIcon className="size-4" />
                        </a>
                        <a href="/brian-mulati-resume.pdf" className=" justify-center space-x-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2 transition-all hover:scale-105">
                            <span>Download Resume</span>
                            <DownloadCloud className="size-4" />
                        </a> */}
                    </div>
                    {/* <div className="flex items-center gap-4 text-muted-foreground">
                        <a className="hover:text-foreground transition-colors hover:scale-110" href="https://github.com/Brian-mula" target="_blank" rel="noopener" >
                        <Github className="size-6" />
                        </a>
                        <a className="hover:text-foreground transition-colors hover:scale-110" href="https://x.com/junior_mulati" target="_blank" rel="noopener" >
                        <X className="size-6" />
                        </a>
                        <a className="hover:text-foreground transition-colors hover:scale-110" href="https://linkedin.com/in/brian-mulati-b67435212" target="_blank" rel="noopener" >
                        <Linkedin className="size-6" />
                        </a>
                        <a className="hover:text-foreground transition-colors hover:scale-110" href="https://www.instagram.com/mula.tibrian" target="_blank" rel="noopener" >
                        <Instagram className="size-6" />
                        </a>
                    </div> */}
                    

                </div>
                <div className="flex items-center justify-center">
                    <div className="relative aspect-square overflow-hidden rounded-full border">
                        <img className="object-cover h-48 w-48 md:h-96 md:w-96" src="/images/andola.jpeg" alt="Brian Mulati" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
