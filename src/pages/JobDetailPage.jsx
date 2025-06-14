import { useParams, Link, useNavigate } from 'react-router-dom';
import { useJobs } from '../context/JobContext';
import { useEffect } from 'react';
import { getJobTypeColor } from '../util/color';

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

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back Button */}
            <Link
                to="/"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
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
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Back to Jobs
            </Link>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-gray-200">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {job.title}
                            </h1>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                                <div className="flex items-center text-gray-600">
                                    <svg
                                        className="w-5 h-5 mr-2"
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
                                    <span className="font-medium text-lg">{job.company}</span>
                                </div>

                                <div className="flex items-center text-gray-500">
                                    <svg
                                        className="w-5 h-5 mr-2"
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
                            <button className="btn-primary text-lg px-8 py-3">
                                Apply Now
                            </button>
                            <div className="text-sm text-gray-500">
                                Posted on {formatDate(job.postedDate)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
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

                        {/* Sidebar */}
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
