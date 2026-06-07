import {motion} from "framer-motion"
import {FaGraduationCap, FaChalkboardTeacher, FaUsers, FaFlask} from "react-icons/fa"
import {FiBookOpen} from "react-icons/fi"
import saritaImg2 from "../assets/images/sarita2.jpeg"

const stats = [
  {icon: <FaChalkboardTeacher />, value: "8+", label: "Years Teaching"},
  {icon: <FaUsers />, value: "500+", label: "Students Guided"},
  {icon: <FiBookOpen />, value: "10+", label: "Subjects Taught"},
]

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Who Am I?
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            className="flex-1"
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Hi, I'm <span className="text-cyan-400">Sarita Singh</span>
            </h3>

            <p className="text-gray-400 text-justify text-sm leading-relaxed mb-4">
              As an Assistant Professor at KCC Institute of Technology and
              Management, I contribute to shaping the future of students by
              teaching and mentoring in fields such as Artificial Intelligence,
              Information Technology, and Web Designing. My role allows me to
              integrate academic insights with practical applications, fostering
              a dynamic learning environment.
            </p>

            <p className="text-gray-400 text-justify text-sm leading-relaxed mb-8">
              Currently pursuing a PhD in Computer Science and Engineering at
              Invertis University, I am committed to advancing my expertise in
              Artificial Intelligence while leveraging my background in Software
              Engineering. My goal is to continue empowering students with the
              skills and knowledge necessary to thrive in a rapidly evolving
              technological landscape.
            </p>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
              <div className="text-cyan-400 text-2xl mt-1">
                <FaFlask />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  PhD (Pursuing) — Computer Science & Engineering
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Invertis University · Specialization: Artificial Intelligence
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
              <div className="text-cyan-400 text-2xl mt-1">
                <FaGraduationCap />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  M.Tech — Software Engineering
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Dr. A.P.J. Abdul Kalam Technical University (AKTU)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
              <div className="text-cyan-400 text-2xl mt-1">
                <FaGraduationCap />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  B.Tech — Information Technology
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Moradabad Institute of Technology, Moradabad (2011–2015)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-cyan-400 text-2xl mt-1">
                <FaChalkboardTeacher />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  Assistant Professor
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  KCC Institute of Technology and Management, Greater Noida
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full flex flex-col gap-6"
            initial={{opacity: 0, x: 40}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-cyan-400/20">
              <img
                src={saritaImg2}
                alt="Sarita Singh in library"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-cyan-400/40 transition-all duration-300 w-full"
              >
                <div className="text-cyan-400 text-3xl">{stat.icon}</div>
                <div>
                  <p className="text-white text-2xl font-bold">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
