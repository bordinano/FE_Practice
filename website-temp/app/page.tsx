export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Website</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Welcome to My Website</h2>
        <p className="text-gray-700">
          This is a simple example of a Next.js website with a sticky navbar and footer.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
