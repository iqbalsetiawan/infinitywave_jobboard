export const getJobTypeColor = (type) => {
    const colors = {
        'Full Time': 'bg-green-100 text-green-800',
        'Part Time': 'bg-blue-100 text-blue-800',
        Remote: 'bg-purple-100 text-purple-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
};
