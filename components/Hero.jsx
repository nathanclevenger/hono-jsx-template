
export const Hero = () => {
  return (
    <div class="relative bg-gray-50">
      <div class="relative bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
          <div class="flex items-center justify-between py-6 sm:justify-start sm:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <nav class="hidden space-x-10 sm:flex">

              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Solutions</a>
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</a>
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Docs</a>

            </nav>
            <div class="items-center justify-end flex flex-1 lg:w-0">
              <a href="#" class="hidden sm:flex whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
              <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
            </div>
          </div>
        </div>
      </div>

      <main class="lg:relative">
        <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span class="block xl:inline">Data to enrich your</span>
              <span class="block text-indigo-600 xl:inline">online business</span>
            </h1>
            <p class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Get started</a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg">Live demo</a>
              </div>
            </div>
          </div>
        </div>
        <div class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />
        </div>
      </main>
    </div>
  )
}
