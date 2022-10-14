export const Code = ({ code = `curl "https://api.page"

{
  "url": "https://example.com",
  "hello": "world",
  "foo": "bar",
  "go": true,
  "count": 1
}

` }) => (
  <div class="relative">
    <div class="max-w-2xl max-h-72 mx-auto px-4 sm:px-6">
      <div class="relative rounded-lg shadow-lg mb-5 text-xs sm:text-sm md:text-md xl:text-lg">
        <div class="relative rounded-lg shadow-lg bg-gray-800 text-gray-50">
          <div class="relative rounded-xl shadow-lg break-normal">
            <div class="flex-none h-11 flex items-center px-4">
              <div class="flex space-x-1.5">
                <div class="w-3 h-3 border-2 rounded-full border-red-500" />
                <div class="w-3 h-3 border-2 rounded-full border-amber-400" />
                <div class="w-3 h-3 border-2 rounded-full border-green-400" />
              </div>
            </div>
            <div class="overflow-scroll ml-3 md:ml-5 lg:ml-8 p-3">
              <pre>
                <code  class="language-json">
                  {code}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)