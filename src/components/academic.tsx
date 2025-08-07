import { GraduationCap } from "lucide-react"

function Academics() {
    return (
        <section className="px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-[30rem] py-12 md:py-24 lg:py-32 bg-background/40">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                        <GraduationCap className="inline mr-1" />
                        Education
                    </div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Academic Background
                    </h1>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        My Educational Journey and Qualifications
                    </p>
                </div>
                </div> 
                <div className="mx-auto max-w-3xl space-y-8 py-12">
                <div className="relative pl-8 border-l border-muted-foreground/20">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-foreground -translate-x-1/2">
                        <div className="w-2 h-2 rounded-full bg-background">

                        </div>

                    </div>
                    <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">University of Eastern Africa,baraton</h3>
                        <span className="text-sm text-muted-foreground"> Bachelor&apos;s in Software Engineering</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        2019 - 2023
                    </p>
                    <p className="text-foreground">Focused on software engineering principles, web and mobile development, and cybersecurity.</p>
                    </div>
                    
                </div>
                <div className="mx-auto max-w-3xl space-y-8 py-12">
                <div className="relative pl-8 border-l border-muted-foreground/20">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-foreground -translate-x-1/2">
                        <div className="w-2 h-2 rounded-full bg-background">

                        </div>

                    </div>
                    <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">Khasoko High School</h3>
                        <span className="text-sm text-muted-foreground"> Secondary Education</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        2015 - 2018
                    </p>
                    <p className="text-foreground">Completed secondary school education</p>
                    </div>
                </div>
                </div>
                
                </div>
                
        </section>
    )
}

export default Academics
