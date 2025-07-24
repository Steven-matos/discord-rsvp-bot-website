import { GRADIENTS, STYLES } from '../constants';

/**
 * Command table component for displaying bot commands with descriptions
 * @param {Object} props - Component props
 * @param {Array} props.commands - Array of command objects with command and description
 * @param {string} props.whoCanUse - Description of who can use these commands
 * @returns {JSX.Element} CommandTable component
 */
const CommandTable = ({ commands, whoCanUse }) => (
  <div className={`${STYLES.card.base} ${GRADIENTS.cardBg} rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-full`}>
    {/* Mobile Card Layout */}
    <div className="block sm:hidden w-full">
      <div className="p-4 w-full">
        {commands.map((cmd, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-700/30 rounded-lg border border-gray-600/30 w-full">
            <div className="mb-3 w-full">
              <div className="bg-gray-900/60 text-green-400 px-2 py-1 rounded text-xs font-mono border border-gray-700/50 break-all word-break-all max-w-full">
                {cmd.command.replace(/`/g, '')}
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed break-words">
              {cmd.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    
    {/* Desktop Table Layout */}
    <div className="hidden sm:block">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-gray-700/80 to-gray-800/80">
          <tr>
            <th scope="col" className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Command
            </th>
            <th scope="col" className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700/50">
          {commands.map((cmd, index) => (
            <tr key={index} className="hover:bg-gray-700/30 transition-all duration-200 ease-in-out group">
              <td className="px-4 lg:px-6 py-3 lg:py-4 align-top">
                <div className="bg-gray-900/60 text-green-400 px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg text-xs lg:text-sm font-mono border border-gray-700/50 group-hover:border-green-500/30 transition-colors duration-200 break-all">
                  {cmd.command.replace(/`/g, '')}
                </div>
              </td>
              <td className="px-4 lg:px-6 py-3 lg:py-4">
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed break-words">
                  {cmd.description}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-gray-700/60 to-gray-800/60 border-t border-gray-700/50">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 w-fit">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
          Access Level
        </span>
        <span className="text-gray-300 text-xs sm:text-sm break-words">{whoCanUse}</span>
      </div>
    </div>
  </div>
);

export default CommandTable; 