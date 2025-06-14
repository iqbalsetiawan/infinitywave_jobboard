import { createContext, useContext, useState, useEffect } from 'react';

const JobContext = createContext();

export const useJobs = () => {
    const context = useContext(JobContext);
    if (!context) {
        throw new Error('useJobs must be used within a JobProvider');
    }
    return context;
};

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        jobType: '',
        search: '',
    });

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                'https://684c3322ed2578be881e0ce9.mockapi.io/job'
            );
            if (!response.ok) {
                throw new Error('Failed to fetch jobs');
            }
            const data = await response.json();
            setJobs(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const filteredJobs = jobs.filter((job) => {
        const matchesType = !filters.jobType || job.jobType === filters.jobType;
        const matchesSearch =
            !filters.search ||
            job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
            job.location.toLowerCase().includes(filters.search.toLowerCase());

        return matchesType && matchesSearch;
    });

    const updateFilters = (newFilters) => {
        setFilters((prev) => ({ ...prev, ...newFilters }));
    };

    const getJobById = (id) => {
        return jobs.find((job) => job.id === id);
    };

    const value = {
        jobs: filteredJobs,
        allJobs: jobs,
        loading,
        error,
        filters,
        updateFilters,
        getJobById,
        refetch: fetchJobs,
    };

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};
