import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <main className="flex bg-black min-h-screen items-center justify-center">
        <div className="bg-slate-900 w-100 h-120 rounded-3xl">
          <div className="bg-slate-600 rounded-full w-10 h-10 m-5">
            <p className="flex justify-center item-center p-2.5">star</p>
          </div>
          <div className="font-serif p-6">
            <h1 className="text-3xl font-bold">How's my Service?</h1>
            <p className="mt-5 text-neutral-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto facere consectetur facilis nesciunt id soluta dolorum
              reiciendis consequuntur esse asperiores accusantium minus
              repellendus nulla est nisi, sequi doloribus quis sunt!
            </p>
          </div>
          <div className="flex gap-5 justify-center items-center font-semibold text-neutral-400">
            <button className="bg-slate-700 w-13 h-13 rounded-full hover:bg-amber-600 hover:text-black  ">
              1
            </button>
            <button className="bg-slate-700 w-13 h-13 rounded-full hover:bg-amber-600 hover:text-black  ">
              2
            </button>

            <button className="bg-slate-700 w-13 h-13 rounded-full hover:bg-amber-600 hover:text-black  ">
              3
            </button>

            <button className="bg-slate-700 w-13 h-13 rounded-full hover:bg-amber-600 hover:text-black  ">
              4
            </button>

            <button className="bg-slate-700 w-13 h-13 rounded-full hover:bg-amber-600 hover:text-black  ">
              5
            </button>
            
          </div>
          <div className="flex items-center justify-center font-bold font-sans">
          <button className="bg-white w-80 h-13 rounded-2xl mt-5 hover:bg-amber-600 text-black  ">SUBMIT</button>

          </div>
        </div>
      </main>
    </div>
  );
}
