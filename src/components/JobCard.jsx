import { Link } from 'react-router-dom';
import { formatDate } from '../util/date';
import { getJobTypeColor } from '../util/color';

const JobCard = ({ job }) => {
    return (
        <Link to={`/job/${job.id}`} className="block">
            <div className="card p-6 hover:shadow-lg transition-all duration-200 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                            {job.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6"
                                />
                            </svg>
                            <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center text-gray-500 mb-3">
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span>{job.location}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getJobTypeColor(
                                job.jobType
                            )}`}
                        >
                            {job.jobType}
                        </span>
                        <span className="text-sm text-gray-500">
                            {formatDate(job.postedDate)}
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary-600 text-sm font-medium">
                        View Details
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default JobCard;
