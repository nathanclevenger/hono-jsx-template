export const FAQ = props => (
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="max-w-2xl lg:mx-auto lg:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>
        <p class="mt-4 text-gray-500">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
      </div>
      <div class="mt-20">
        <dl class="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
          <div>
            <dt class="font-semibold text-gray-900">What's the best thing about Switzerland?</dt>
            <dd class="mt-3 text-gray-500">I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
          </div>

          { /* More questions... */ }
        </dl>
      </div>
    </div>
  </div>
)