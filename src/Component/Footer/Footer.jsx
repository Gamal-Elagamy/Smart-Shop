import React from 'react'

export default function Footer() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Blog
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Team
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Pricing
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Terms
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="https://www.facebook.com/profile.php?id=100000932701737&mibextid=kFxxJD" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
            <span className="sr-only">Facebook</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          
          <a href="https://www.linkedin.com/in/gamal-elagamy-778b112a4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554V14.56c0-1.402-.027-3.208-1.954-3.208-1.956 0-2.255 1.527-2.255 3.107v5.993H9.132V9.5h3.412v1.493h.05c.476-.9 1.637-1.85 3.367-1.85 3.599 0 4.265 2.37 4.265 5.457v5.852zM5.337 8.007a2.065 2.065 0 01-2.064-2.064c0-1.141.925-2.064 2.064-2.064 1.139 0 2.064.923 2.064 2.064 0 1.139-.925 2.064-2.064 2.064zM6.824 20.452H3.851V9.5h2.973v10.952zM22.225 0H1.771C.792 0 0 .772 0 1.726v20.548C0 23.227.792 24 1.771 24h20.452C23.205 24 24 23.227 24 22.274V1.726C24 .772 23.205 0 22.225 0z"/>
            </svg>
          </a>

          <a href="https://github.com/Gamal-Elagamy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
              {/* الكارت بتاعى  */}
              <a href="https://bluetags.me/o7GlWAdS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
            <span className="sr-only">Dribbble</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400 dark:text-gray-300">
          © 2025 Gamal Elagamy. All rights reserved.
        </p>
      </div>
    </section>
  )
}
