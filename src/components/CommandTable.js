const CommandTable = ({ commands, whoCanUse }) => (
  <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-gray-700">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
            Command
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
            Description
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        {commands.map((cmd, index) => (
          <tr key={index} className="hover:bg-gray-750 transition duration-150 ease-in-out">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
              {cmd.command}
            </td>
            <td className="px-6 py-4 whitespace-normal text-sm text-gray-300">
              {cmd.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="p-4 bg-gray-700 text-sm text-gray-300 rounded-b-lg">
      <span className="font-semibold">Who Can Use:</span> {whoCanUse}
    </div>
  </div>
);

export default CommandTable; 