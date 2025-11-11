function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-[#2C3930] md:flex-row md:space-x-4 md:space-y-0 dark:text-[#A27B5C]">
        <li>
          <a
            className="flex items-center transition-all hover:text-[#3F4F44] dark:hover:text-[#8B6647]"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-[#3F4F44] dark:hover:text-[#8B6647]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/DaveXFin"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-[#3F4F44] dark:hover:text-[#8B6647]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Template used and inspired</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-[#2C3930] dark:text-[#A27B5C]">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
