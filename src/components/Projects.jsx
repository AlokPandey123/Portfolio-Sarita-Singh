import {motion} from "framer-motion"

const courses = [
  {
    title: "Python Programming",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    gradient: "from-blue-500/20 to-cyan-400/20",
    description:
      "Comprehensive Python course covering fundamentals, OOP, data structures, file handling, libraries, and real-world problem solving techniques.",
    tags: ["Python", "OOP", "Libraries", "Problem Solving", "Data Handling"],
  },
  {
    title: "Java Programming",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    gradient: "from-orange-500/20 to-red-400/20",
    description:
      "Object-oriented programming with Java covering inheritance, polymorphism, exception handling, Java collections framework, and multithreading.",
    tags: ["Java", "OOP", "Collections", "Multithreading", "JVM"],
  },
  {
    title: "JavaScript & TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    gradient: "from-yellow-400/20 to-amber-300/20",
    description:
      "Modern JS and TS covering ES6+, async/await, DOM manipulation, type system, interfaces, generics, and building real-world web applications.",
    tags: ["JavaScript", "TypeScript", "ES6+", "Async", "DOM"],
  },
  {
    title: "Data Structures & Algorithms",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    gradient: "from-purple-500/20 to-violet-400/20",
    description:
      "In-depth coverage of arrays, linked lists, stacks, queues, trees, graphs, sorting and searching algorithms with time/space complexity analysis.",
    tags: ["DSA", "Arrays", "Trees", "Graphs", "Sorting", "Complexity"],
  },
  {
    title: "Design & Analysis of Algorithms",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    gradient: "from-green-500/20 to-emerald-400/20",
    description:
      "Algorithm design paradigms including divide & conquer, dynamic programming, greedy algorithms, backtracking, branch & bound, and NP-completeness.",
    tags: ["DAA", "Dynamic Programming", "Greedy", "Backtracking", "NP"],
  },
  {
    title: "Web Technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    gradient: "from-cyan-500/20 to-blue-400/20",
    description:
      "Full-stack web development with HTML5, CSS3, JavaScript, responsive design, React.js, and Node.js to build modern, functional web applications.",
    tags: ["HTML5", "CSS3", "React", "Node.js", "Responsive Design"],
  },
]

const Projects = () => {
  return (
    <section
      id="courses"
      className="py-24 bg-[#0a0a0f] relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
            Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Subjects I Teach
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            Technical courses delivered with clarity, depth, and practical focus
          </p>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-cyan-400/40 transition-all duration-300 group"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: i * 0.1}}
              viewport={{once: true}}
            >
              <div
                className={`w-full h-36 bg-gradient-to-br ${course.gradient} flex items-center justify-center`}
              >
                <img
                  src={course.icon}
                  alt={course.title}
                  className="w-16 h-16 object-contain drop-shadow-lg"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {course.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
