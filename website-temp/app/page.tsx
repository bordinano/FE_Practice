export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-blue-300 shadow-md p-5">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Website</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to My SCAMMER SITE
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat
          explicabo facere consequatur iure, repellat quis voluptatem incidunt
          vitae quod vero aperiam alias minima praesentium dolores laboriosam!
          Autem, corrupti! Minus?
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-blue-300 text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
