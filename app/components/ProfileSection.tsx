import Image from "next/image";

const ProfileSection = () => {
  return (
    <div className="w-full py-8 md:py-0 bg-white px-6 pt-16 sm:pt-0">
      <div className="space-y-8 text-center">
        <div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
          <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200">
            <Image
              src="/manaswini.gogineni/headshot.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Manaswini Gogineni
          </h1>
          <h2 className="text-lg md:text-xl text-gray-600">
            Software Engineer II
          </h2>
          <div className="h-px w-16 bg-gray-200 mx-auto my-4" />
          <p className="text-sm md:text-base text-gray-600 max-w-xs mx-auto leading-relaxed">
            Experienced in software development, with a strong passion for artificial intelligence and
            its real-world applications. Specializes in backend systems, cloud infrastructure, and automation,
            focusing on building scalable solutions and enhancing developer workflows.
          </p>
        </div>

        <div className="space-y-4">
          {/* Contact Info */}
          <div className="flex items-center justify-center space-x-2">
            <svg
              className="w-4 h-4 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a
              href="mailto:goginenim18069@gmail.com"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              goginenim18069@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <svg
              className="w-4 h-4 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm text-gray-600">San Francisco, CA</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4 pt-2">
            <a
              href="https://github.com/manaswini1869"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/manaswini-gogineni-ba8b1b1b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/17GxHrEtqtLk8JEFWvlL_8sH3sTP1_VvN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </a>
            <a
              href="https://www.coursera.org/learner/manaswini-gogineni-7581"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="coursera">
  <path d="m23.974 11.653-.001-.008.001.012z"></path>
  <path fill="#0068B0" d="M6.267 18.242c.118.005.235.008.353.008 1.045 0 2.011-.19 2.878-.569.217-.095.427-.205.642-.328.117-.068.228-.142.338-.219l.08-.056.137-.095c.164-.12.317-.251.467-.388l.052-.051c.088-.085.176-.171.259-.26l.311-.359.118-.151.056-.083.055-.081c.462-.791 1.965-3.672 1.965-3.672v-.006l.09-.175.074-.138c.222-.411.382-.703.594-1.009l.006-.01c.493-.731 1.344-1.251 2.346-1.339 1.68-.148 3.152.978 3.287 2.513.135 1.537-1.117 2.902-2.798 3.05a3.362 3.362 0 0 1-1.034-.071l.023.004-.009.003c-1.232-.262-2.017-1.178-2.404-1.589l-1.617 3.032s.503.516.847.774a6.47 6.47 0 0 0 1.146.669c.836.379 1.812.6 2.838.601.121 0 .097 0 .222-.005 1.844-.079 3.488-.799 4.674-2.034 1.123-1.173 1.733-2.511 1.738-4.097v-.048l-.011-.262v.001a6.161 6.161 0 0 0-1.011-3.162 6.278 6.278 0 0 0-.862-1.053l-.002-.002a6.325 6.325 0 0 0-1.603-1.136l-.037-.016a6.802 6.802 0 0 0-2.988-.681h-.093c-.886 0-1.734.162-2.52.455a6.275 6.275 0 0 0-1.824 1.02c-.12.1-.227.195-.33.293l.004-.003-.085.087-.118.126h.001l-.056.056-.026.029-.14.15c-.104.119-.202.239-.296.356v-.002L12 8.315c-.192.238-.37.485-.5.707-.089.143-.176.289-.259.435l-1.147 2.365.002.001-.06.12-.126.261c-.251.519-.521 1.037-.821 1.463-.672.751-1.431 1.12-2.406 1.12-.068 0-.139-.003-.209-.008-.588-.023-1.092-.165-1.539-.435a2.62 2.62 0 0 1-.987-1.036l-.007-.014a2.723 2.723 0 0 1-.326-1.401v.005l.002-.035c.031-.775.321-1.379.904-1.898.142-.126.291-.232.446-.326l.065-.037c.434-.241.927-.362 1.492-.362l.176.005c.899.035 1.592.32 2.145.88l1.734-3.174a6.735 6.735 0 0 0-1.352-.708l-.047-.016c-.019-.007-.04-.016-.06-.022-.062-.023-.123-.046-.186-.067a7.045 7.045 0 0 0-1.689-.352l-.027-.002-.056-.007c-.088-.005-.177-.016-.265-.02a11.443 11.443 0 0 0-.292-.007h-.098a6.875 6.875 0 0 0-2.994.685A6.274 6.274 0 0 0 1.03 8.619l-.014.023A6.157 6.157 0 0 0 0 12.05v.039c-.002 1.595.568 2.996 1.701 4.173 1.184 1.236 2.72 1.901 4.566 1.98z"></path>
  <path d="M23.972 11.637v.005l.001.003zM3.476 6.688l.038-.016a.008.008 0 0 0 .004-.002l-.042.018zm3.669-.535.019.002.01.001-.029-.003zM13.045 7.551l.006-.004.007-.006zM14.829 6.583c.015-.006.031-.009.047-.015l.004-.002-.051.017zm8.142 2.235.01.017.003.004-.013-.021z"></path>
</svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
