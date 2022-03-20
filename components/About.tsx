export default function About() {
  return (
    <>
      <main className="md:flex pt-10 justify-center items-center">
        <div className="justify-center md:flex md:justify-evenly items-center shadow-lg dark:shadow-slate-900 text-lg">
          <div className="md:mx-8 md:pl-32 flex justify-center items-center">
            <img
              src="proud.svg"
              className="w-44 h-44 md:w-64 md:h-64 lg:h-96 lg:w-96"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:mx-8 lg:pr-32">
            <div className="mb-2 font-bold hey lg:mb-3 dark:text-slate-400">
              {"<Mohammed>"}
            </div>
            <div className="pl-12 text-center max-w-xs lg:pl-16">
              Software Developer
            </div>
            <div className="mt-2 font-bold hey lg:mt-3 dark:text-slate-400">
              {"</Mohammed>"}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
