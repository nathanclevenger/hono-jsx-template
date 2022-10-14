export const Code = ({ code = 'curl https://api.page' }) => (
  <pre className="relative rounded-xl shadow-lg break-normal">
    <div className="flex-none h-11 flex items-center px-4">
      <div className="flex space-x-1.5">
        <div className="w-3 h-3 border-2 rounded-full border-red-500" />
        <div className="w-3 h-3 border-2 rounded-full border-amber-400" />
        <div className="w-3 h-3 border-2 rounded-full border-green-400" />
      </div>
    </div>
    <div className="overflow-scroll ml-3 md:ml-5 lg:ml-8">
      {code}
    </div>
  </pre>
)