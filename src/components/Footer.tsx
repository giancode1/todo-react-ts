import { memo } from "react"

export const Footer = memo(() => {
  return (
    <footer className="mt-auto text-center py-1">
      <div className="pb-1">
        &copy; {(new Date).getFullYear()} Giancarlo Culcay
      </div>
      <div className="d-inline opacity-75">
        <a 
          href="https://www.linkedin.com/in/giancarlo-culcay/" 
          target="_blank" 
          className="font-weight-bold text-decoration-none">
            Made with ❤️ by Giancarlo Culcay 🚀
        </a>
      </div>
    </footer>
  )
})
