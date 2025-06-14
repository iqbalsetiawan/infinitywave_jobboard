import SearchIcon from './icons/SearchIcon';
import { useJobs } from '../context/JobContext';

const SearchAndFilters = () => {
    const { filters, updateFilters, allJobs } = useJobs();

    const jobTypes = [...new Set(allJobs.map((job) => job.jobType))].filter(
        Boolean
    );

    const handleSearchChange = (e) => {
        updateFilters({ search: e.target.value });
    };

    const handleTypeFilter = (type) => {
        updateFilters({ jobType: filters.jobType === type ? '' : type });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Search jobs, companies, or locations..."
                            value={filters.search}
                            onChange={handleSearchChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {jobTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => handleTypeFilter(type)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filters.jobType === type
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                    {filters.jobType && (
                        <button
                            onClick={() => updateFilters({ jobType: '' })}
                            className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                        >
                            Clear Filter
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchAndFilters;
