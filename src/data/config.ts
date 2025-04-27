const config = {
  title: "Bhavishy Jain | Full Stack Developer",
  description: {
    long: "Welcome to the portfolio of Bhavishy Jain, a Computer Science Engineering student specializing in Full Stack Development with a passion for building real-world solutions using modern technologies. Bhavishy brings strong analytical skills, clear communication, and a team-driven mindset to deliver impactful results.",
    short: "Explore the work of Bhavishy Jain, a Full Stack Developer passionate about creating real-world solutions."
  },
  keywords: [
    "Bhavishy",
    "Bhavishy Jain",
    "Full Stack Developer",
    "React Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Portfolio",
    "Web Development",
  ],
  author: "Bhavishy Jain",
  email: "bhavishy2206@gmail.com",
  site: "https://bhavishyjain.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/bhavishyjain",
    linkedin: "https://www.linkedin.com/in/bhavishyjain/",
    instagram: "https://www.instagram.com/_bhavishyjain_/",
    github: "https://github.com/bhavishyjain",
  },
};
export { config };
