 const Steps = () => {
    return (
      <div className="     mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-6 ">
        <div className="grid  row-gap-10 lg:grid-cols-1">
          <div className=" lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 border rounded-full dark:bg-[#1d3a3a] dark:border-[#32383e]">
                    <svg class="w-5 h-5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300 dark:bg-[#32383e]" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-base capitalize dark:text-[#ced4da]"> colis</p>
                <p className="mb-2 text-gray-500 w-48 sm:w-80 text-sm">
                    vous avez  ajouter une colis  numero 40 avec le code 2434FF
                </p>
                <p className="mb-2 text-indigo-600  text-sm capitalize">
                   aujourd'hui
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 bg-amber-100 border rounded-full dark:bg-[#413a2e] dark:border-[#32383e]">
                  <svg class="w-5 h-5 text-amber-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.994 19a8.999 8.999 0 1 1 3.53-17.281M5.995 9l4 4 7-8m-1 8v5m-2.5-2.5h5"/>
                   </svg>

                  </div>
                </div>
                <div className="w-px h-full bg-gray-300 dark:bg-[#32383e]" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-base capitalize dark:text-[#ced4da] ">produit</p>
                <p className="mb-2 text-gray-500 w-48 sm:w-80  text-sm">
                       vous avez  ajouter un produit   x a votre stock
                 </p>
                <p className="mb-2 text-indigo-600  text-sm capitalize">
                    hier  a 8h 30min
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 bg-red-100 border rounded-full dark:bg-[#463434] dark:border-[#32383e]">
                  <svg class="w-5 h-5 text-red-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                  </svg>

                  </div>
                </div>
                <div className="w-px h-full bg-gray-300 dark:bg-[#32383e]" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-base capitalize dark:text-[#ced4da]"> mot de passe</p>
                <p className="mb-2 text-gray-500 w-48 sm:w-80  text-sm">
                    vous avez bien changer votre mot de passe
                </p>
                <p className="mb-2 text-indigo-600  text-sm capitalize">
                    15 mai
                </p>
              </div>
              </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 border rounded-full dark:bg-[#262b37] dark:border-[#32383e]">
                    <svg class="w-5 h-5 text-indigo-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                    </svg>

                  </div>
                </div>
                <div className="w-px h-full bg-gray-300 dark:bg-[#32383e]" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-base capitalize dark:text-[#ced4da] "> réclamation</p>
                <p className="mb-2 text-gray-500 w-48 sm:w-80  text-sm">
                    Vous avez bien édit une réclamation
                </p>
                <p className="mb-2 text-indigo-600 text-sm capitalize">
                    5 Déc
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  };
export default Steps ;
