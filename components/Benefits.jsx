import { Code } from "./Code"

export const Benefits = props => (
  <div class="relative overflow-hidden bg-white pb-16 pt-32">
    <div class="relative">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:px-0">
          <div>
            <div class="mt-6">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">Stay on top of customer support</h2>
              <p class="mt-4 text-lg text-gray-500">Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.</p>
              <div class="mt-6">
                <a href="#" class="inline-flex rounded-md border border-transparent bg-brand-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-brand-700">Get started</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-6">
          <div class="lg:relative lg:m-0 lg:h-full lg:px-0">
            <Code />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0">
          <div>
            <div class="mt-6">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">Better understand your customers</h2>
              <p class="mt-4 text-lg text-gray-500">Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.</p>
              <div class="mt-6">
                <a href="#" class="inline-flex rounded-md border border-transparent bg-brand-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-brand-700">Get started</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div class="lg:relative lg:m-0 lg:h-full lg:px-0">
            <Code />
          </div>
        </div>
      </div>
    </div>
  </div>
)