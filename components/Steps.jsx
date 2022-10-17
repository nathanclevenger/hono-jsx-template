export const Steps = ({ steps = defaultSteps }) => (
  <nav aria-label="Progress">
    <ol role="list" class="flex items-center">
      {steps.map((step, stepIdx) => (
        <li key={step.name} class={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
          {step.status === 'complete' ? (
            <div>
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="h-0.5 w-full bg-brand-600" />
              </div>
              <a
                href="#"
                class="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 hover:bg-brand-900"
              >
                <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span class="sr-only">{step.name}</span>
              </a>
            </div>
          ) : step.status === 'current' ? (
            <div>
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="h-0.5 w-full bg-gray-200" />
              </div>
              <a
                href="#"
                class="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-600 bg-white"
                aria-current="step"
              >
                <span class="h-2.5 w-2.5 rounded-full bg-brand-600" aria-hidden="true" />
                <span class="sr-only">{step.name}</span>
              </a>
            </div>
          ) : (
            <div>
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="h-0.5 w-full bg-gray-200" />
              </div>
              <a
                href="#"
                class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
              >
                <span
                  class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                  aria-hidden="true"
                />
                <span class="sr-only">{step.name}</span>
              </a>
            </div>
          )}
        </li>
      ))}
    </ol>
  </nav>
)

const defaultSteps = [
  { name: 'Step 1', href: '#', status: 'complete' },
  { name: 'Step 2', href: '#', status: 'complete' },
  { name: 'Step 3', href: '#', status: 'current' },
  { name: 'Step 4', href: '#', status: 'upcoming' },
  { name: 'Step 5', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
