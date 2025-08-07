import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 px-4"
    >
      <div className="px-4 md:px-6 lg:px-12 xl:px-16 2xl:px-[30rem]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to discuss a potential
              collaboration? Reach out to me.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="size-6 text-muted-foreground" />
            <a
              className="hover:underline"
              href="mailto:phoenixsportsafrica@gmail.com"
            >
              phoenixsportsafrica@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="size-6 text-muted-foreground" />
            <a className="hover:underline" href="tel:+254 706 591576">
            +254 706 591576
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="size-6 text-muted-foreground" />
            <span className="text-foreground">Nairobi,Kenya</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              className="hover:text-foreground transition-colors hover:scale-110"
              href="https://github.com/Brian-mula"
              target="_blank"
              rel="noopener"
            >
              <Github className="size-6" />
            </a>
            <a
              className="hover:text-foreground transition-colors hover:scale-110"
              href="https://x.com/junior_mulati"
              target="_blank"
              rel="noopener"
            >
              <X className="size-6" />
            </a>
            <a
              className="hover:text-foreground transition-colors hover:scale-110"
              href="https://linkedin.com/in/brian-mulati-b67435212"
              target="_blank"
              rel="noopener"
            >
              <Linkedin className="size-6" />
            </a>
            <a
              className="hover:text-foreground transition-colors hover:scale-110"
              href="https://www.instagram.com/mula.tibrian"
              target="_blank"
              rel="noopener"
            >
              <Instagram className="size-6" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor=""
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="flex h-10 w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all focus:scale-[1.01] border border-border"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor=""
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="flex h-10 w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all focus:scale-[1.01] border border-border"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="space-y-2">
                <label
                  htmlFor=""
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <input
                  type="text"
                  className="flex h-10 w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all focus:scale-[1.01] border border-border"
                  placeholder="Your Subject"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor=""
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <textarea
                 
                  className="flex w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[120px] transition-all focus:scale-[1.01] border border-border"
                  placeholder="Your Subject"
                ></textarea>
              </div>

              <button className="p-3 bg-foreground text-background w-full rounded-md">Send Message</button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
