import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="sticky top-0 z-50 bg-blue-400 shadow-md p5">
        <nav className=" container mx-auto flex justify-between items-center ">
          <h1 className="text-xl font-bold"> Website </h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">welcome to my siteeee</h2>
        <p className="text-orange-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          nulla sit quaerat magni possimus dicta veritatis recusandae
          repellendus quos nobis, nesciunt voluptatibus ratione ducimus est!
          Atque blanditiis nesciunt neque id.
        </p>
      </main>
      <footer className="bg-blue-500 text-center p-4">
        <p>
          &copy: {new Date().getFullYear()} All rights resserved
        </p>
      </footer>
    </div>
  );
}
