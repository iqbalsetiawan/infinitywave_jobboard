import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useJobs } from '../context/JobContext';
import { getJobTypeColor } from '../util/color';
import { formatDate } from '../util/date';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon';
import DocumentIcon from '../components/icons/DocumentIcon';
import LocationIcon from '../components/icons/LocationIcon';

const JobDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getJobById, loading } = useJobs();

    const job = getJobById(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (!loading && !job) {
            navigate('/');
        }
    }, [job, loading, navigate]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    if (!job) {
        return null;
    }

    const navigateToCareerPage = () => {
        if (job.careerPage) {
            window.open(job.careerPage, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link
                to="/"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
                <ArrowLeftIcon />
                Back to Jobs
            </Link>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-8 border-b border-gray-200">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {job.title}
                            </h1>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                                <div className="flex items-center text-gray-600">
                                    <DocumentIcon />
                                    <span className="font-medium text-lg">{job.company}</span>
                                </div>

                                <div className="flex items-center text-gray-500">
                                    <LocationIcon />
                                    <span>{job.location}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <span
                                    className={`px-4 py-2 rounded-full text-sm font-medium ${getJobTypeColor(
                                        job.jobType
                                    )}`}
                                >
                                    {job.jobType}
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                    {job.salary}
                                </span>

                                <span className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                    {job.experience}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-4">
                            <button
                                className={`btn-primary text-lg px-8 py-3 ${job.careerPage ? '' : 'opacity-50 cursor-not-allowed'}`}
                                onClick={navigateToCareerPage}
                                disabled={!job.careerPage}
                                aria-label={`Apply for ${job.title} at ${job.company} (opens in new tab)`}
                            >
                                Apply Now
                            </button>
                            <div className="text-sm text-gray-500">
                                Posted on {formatDate(job.postedDate)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Job Description
                                </h2>
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {job.description}
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Requirements
                                </h2>
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {job.requirements}
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Benefits
                                </h2>
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {job.benefits}
                                    </p>
                                </div>
                            </section>
                        </div>

                        <div className="space-y-6">
                            <div className="card p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Company Information
                                </h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-gray-900">{job.companyInfo}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-gray-500">
                                            Location
                                        </span>
                                        <p className="text-gray-900">{job.location}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-gray-500">
                                            Job Type
                                        </span>
                                        <p className="text-gray-900">{job.jobType}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-gray-500">
                                            Salary
                                        </span>
                                        <p className="text-gray-900">{job.salary}</p>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-gray-500">
                                            Experience
                                        </span>
                                        <p className="text-gray-900">{job.experience}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailPage;
