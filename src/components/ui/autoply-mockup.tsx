import { Search, Filter, MapPin, Clock, Heart, TrendingUp, Send, Calendar } from "lucide-react"

export function AutoplyMockup() {
  return (
    <div className="w-full bg-white dark:bg-gray-950 rounded-lg shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">Autoply</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Profile
          </button>
          <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Settings
          </button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, Sarah!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          You have 247 new job matches and 12 applications this week.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 px-6 py-6 border-b border-gray-200 dark:border-gray-800">
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">New Matches</span>
            <div className="w-6 h-6 text-blue-500">
              <TrendingUp className="w-full h-full" />
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">247</p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Applications</span>
            <div className="w-6 h-6 text-indigo-500">
              <Send className="w-full h-full" />
            </div>
          </div>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">12</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Response Rate</span>
            <div className="w-6 h-6 text-green-500">
              <TrendingUp className="w-full h-full" />
            </div>
          </div>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">18%</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Interviews</span>
            <div className="w-6 h-6 text-purple-500">
              <Calendar className="w-full h-full" />
            </div>
          </div>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</p>
        </div>
      </div>

      {/* Tabs and Search */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-6">
            <button className="font-medium text-gray-900 dark:text-white border-b-2 border-blue-500 pb-2">
              Job Matches
            </button>
            <button className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white pb-2">
              Applications
            </button>
            <button className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white pb-2">
              Saved Jobs
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs by title, company, or skills..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Job Listing Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top Matches for You</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">3 of 247</span>
        </div>

        {/* Job Card */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">Senior Software Engineer</h3>
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                  Remote
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">TechCorp</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">95%</span>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              San Francisco, CA
            </div>
            <div>$140k - $180k</div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              2 days ago
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-500 dark:text-gray-400">Match Score</span>
          </div>
        </div>
      </div>
    </div>
  )
}