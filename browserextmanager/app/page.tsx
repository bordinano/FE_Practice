import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1 items-center justify-center bg-gray-100">
        <div className="bg-blue-300 p-8 rounded-2xl shadow-lg w-80 h-90 ">
          <img src="/browserextmanager/public/icon-star.svg" alt="" />

          <h1 className="text-xl font-semibold mb-4">How did we do?</h1>
          <p className="text-gray-600">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <br/>
          <div className="flex justify-center gap-4">
            <button className="w-20 h-15 rounded-full bg-black  hover:bg-yellow-500 transition-colors">1</button>
            <button className="w-20 h-15 rounded-full  bg-black hover:bg-yellow-500 transition-colors" >2</button>
            <button className="w-20 h-15 rounded-full  bg-black hover:bg-yellow-500 transition-colors" >3</button>
            <button className="w-20 h-15 rounded-full  bg-black hover:bg-yellow-500 transition-colors" >4</button>
            <button className="w-20 h-15 rounded-full  bg-black hover:bg-yellow-500 transition-colors">5</button>
          </div>
          <br />  
          <div className="">
          <button className="w-60 h-12 rounded-full  bg-yellow-500">SUBMIT</button>
          </div>
        </div>
      </main>
    </div>
  );
}
