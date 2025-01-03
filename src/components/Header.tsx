export const Header = () => {
  return (
    <div className="flex flex-row justify-between backdrop-blur-md items-center pt-5">
      <div className="hover:cursor-pointer">
        <a>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="50"
              viewBox="0 0 100 50"
              fill="none"
            >
              <rect width="100" height="50" fill="000000D9" />
              <text
                x="25"
                y="35"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="24"
                fill="white"
                fontWeight="bold"
              >
                <tspan fill="#39FF14">G</tspan>UN
              </text>
            </svg>
          </div>
          <div className="lg:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="100"
              viewBox="0 0 200 100"
              fill="none"
            >
              <rect width="200" height="100" fill="000000D9" />
              <text
                x="50"
                y="60"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="48"
                fill="white"
                fontWeight="bold"
              >
                <tspan fill="#39FF14">G</tspan>UN
              </text>
            </svg>
          </div>
        </a>
      </div>
      <nav>
        <ul className="flex flex-row gap-5 pr-8 font-bold">
          <li>
            <a
              href="#about"
              className="text-garyFont text-xl hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">01. </span>About
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className="text-garyFont text-xl hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">02. </span>Skill
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="text-garyFont text-xl hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">03. </span>Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-garyFont text-xl hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">04. </span>Contact
            </a>
          </li>
          <li>
            <a
              href="#more"
              className="text-garyFont text-xl hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">05. </span>More
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
