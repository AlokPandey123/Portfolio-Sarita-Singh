import {motion} from "framer-motion"
import {
  FiCode,
  FiCpu,
  FiMonitor,
  FiBookOpen,
  FiUsers,
  FiEdit3,
  FiBriefcase,
  FiAward,
} from "react-icons/fi"
import {FaCircle, FaRegCircle} from "react-icons/fa"

const workHistory = [
  {
    role: "Assistant Professor",
    institution: "KCC Institute of Technology and Management",
    period: "October 2024 – Present",
    location: "Greater Noida",
    description:
      "Teaching Artificial Intelligence, Information Technology, and Web Designing. Integrating academic insights with practical applications to foster a dynamic learning environment.",
    current: true,
  },
  {
    role: "Assistant Professor",
    institution: "Noida Institute of Engineering & Technology",
    period: "February 2024 – October 2024",
    location: "Greater Noida",
    description:
      "Delivered undergraduate instruction in Computer Science and IT subjects, focusing on student engagement and practical skill development.",
    current: false,
  },
  {
    role: "Research Scholar",
    institution: "Invertis University",
    period: "March 2021 – November 2024",
    location: "Bareilly, Uttar Pradesh",
    description:
      "Pursued PhD research in Computer Science and Engineering with specialization in Artificial Intelligence. Contributed to research in intelligent systems and machine learning.",
    current: false,
  },
  {
    role: "Assistant Professor",
    institution: "SRMS Institutions",
    period: "July 2017 – February 2024",
    location: "India",
    description:
      "Over 6 years of teaching experience in CS and IT subjects at undergraduate level. Covered programming, algorithms, data structures, and web technologies.",
    current: false,
  },
  {
    role: "Subject Matter Expert",
    institution: "Trivium Education",
    period: "March 2019 – July 2019",
    location: "Moradabad Area",
    description:
      "Contributed subject expertise in technical CS domains for educational content creation and curriculum design.",
    current: false,
  },
]

const certifications = [
  {
    title: "'Basics of HTML/CSS for Beginners' Online Bootcamp",
    issuer: "Online Certification",
  },
  {title: "AI Tools Workshop", issuer: "Artificial Intelligence"},
  {title: "Gen AI Workshop", issuer: "Artificial Intelligence"},
]

const experiences = [
  {
    icon: <FiCode size={28} />,
    title: "Programming Instruction",
    description:
      "Teaching Python, Java, JavaScript, and TypeScript with a focus on building strong programming fundamentals and clean coding practices from the ground up.",
  },
  {
    icon: <FiCpu size={28} />,
    title: "Algorithms & Theory",
    description:
      "Delivering in-depth instruction on Data Structures, DSA, and Design & Analysis of Algorithms — making complex algorithmic thinking accessible and intuitive.",
  },
  {
    icon: <FiMonitor size={28} />,
    title: "Web Technology Teaching",
    description:
      "Guiding students through HTML5, CSS3, JavaScript, and modern frameworks like React.js and Node.js to build real-world, production-ready web applications.",
  },
  {
    icon: <FiBookOpen size={28} />,
    title: "AI & Research Mentorship",
    description:
      "Mentoring students in Artificial Intelligence concepts and supporting research initiatives aligned with current trends in machine learning and intelligent systems.",
  },
  {
    icon: <FiUsers size={28} />,
    title: "Project Guidance",
    description:
      "Supervising final-year projects and capstone assignments — helping students plan, architect, develop, and present meaningful, industry-relevant solutions.",
  },
  {
    icon: <FiEdit3 size={28} />,
    title: "Curriculum Development",
    description:
      "Designing and continuously updating course content and lab materials to keep pace with evolving technology trends and industry demands.",
  },
]

const Services = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-[#0d0d14] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            What I Do
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            Teaching, mentoring, researching — all towards one goal: student success
          </p>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-cyan-400/40 hover:bg-white/8 transition-all duration-300 group"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: i * 0.1}}
              viewport={{once: true}}
            >
              <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 w-fit">
                {exp.icon}
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-200">
                {exp.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white text-xl font-semibold mb-2">
                Assistant Professor
              </h3>
              <p className="text-cyan-400 text-sm font-medium mb-1">
                KCC Institute of Technology and Management
              </p>
              <p className="text-gray-500 text-xs mb-3">October 2024 – Present</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Teaching and mentoring undergraduate students in Artificial
                Intelligence, Information Technology, and Web Designing.
                Integrating academic insights with practical applications to
                foster a dynamic, industry-ready learning environment.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:text-right">
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-center">
                Artificial Intelligence
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-center">
                Information Technology
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-center">
                Web Designing
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <motion.div
              className="flex items-center gap-2 mb-8"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
            >
              <FiBriefcase className="text-cyan-400" size={18} />
              <h3 className="text-white font-semibold text-lg">Work History</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/10" />

              {workHistory.map((exp, i) => (
                <motion.div
                  key={i}
                  className="relative pl-10 pb-8 last:pb-0"
                  initial={{opacity: 0, x: -30}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{duration: 0.4, delay: i * 0.1}}
                  viewport={{once: true}}
                >
                  <div className="absolute left-0 top-1.5">
                    {exp.current ? (
                      <FaCircle className="text-cyan-400" size={15} />
                    ) : (
                      <FaRegCircle className="text-white/30" size={15} />
                    )}
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="text-white font-semibold text-sm">
                        {exp.role}
                      </h4>
                      {exp.current && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-cyan-400 text-sm font-medium">
                      {exp.institution}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {exp.period} · {exp.location}
                    </p>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="lg:w-80 flex flex-col gap-6"
            initial={{opacity: 0, x: 40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FiAward className="text-cyan-400" size={18} />
                <h3 className="text-white font-semibold text-lg">
                  Certifications
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium leading-snug">
                          {cert.title}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h4 className="text-white text-sm font-semibold mb-3">
                Top Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Information Technology",
                  "Web Designing",
                  "Python",
                  "Java",
                  "DSA",
                  "DAA",
                  "JavaScript",
                  "TypeScript",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
