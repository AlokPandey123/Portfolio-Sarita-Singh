import {FaLinkedin, FaGithub} from "react-icons/fa"
import {FiMail} from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-[#0d0d14] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Sarita Singh. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              window.open("mailto:er.sarita2014@gmail.com", "_blank")
            }
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-xl cursor-pointer"
          >
            <FiMail />
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/Sarita10021992", "_blank")
            }
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-xl cursor-pointer"
          >
            <FaGithub />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sarita-singh-b25575105",
                "_blank",
              )
            }
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-xl cursor-pointer"
          >
            <FaLinkedin />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
