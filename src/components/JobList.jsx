import { useJobs } from '../context/JobContext';
import JobCard from './JobCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const JobList = () => {
    const { jobs, loading, error } = useJobs();

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    if (jobs.length === 0) {
        return (
            <div className="text-center py-12">
                <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                    No jobs found
                </h3>
                <p className="mt-2 text-gray-500">
                    Try adjusting your search criteria or filters.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                    {jobs.length} {jobs.length === 1 ? 'Job' : 'Jobs'} Found
                </h2>
            </div>

            <div className="grid gap-6">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobList;
