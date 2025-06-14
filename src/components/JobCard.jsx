import { Link } from 'react-router-dom';
import DocumentIcon from './icons/DocumentIcon';
import LocationIcon from './icons/LocationIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
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
                            <DocumentIcon />
                            <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center text-gray-500 mb-3">
                            <LocationIcon />
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
                        <ArrowRightIcon />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default JobCard;
