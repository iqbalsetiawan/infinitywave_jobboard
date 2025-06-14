const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <svg
                    className="mx-auto h-12 w-12 text-red-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <h3 className="text-lg font-medium text-red-900 mb-2">
                    Something went wrong
                </h3>
                <p className="text-red-700 mb-4">{message}</p>
                {onRetry && (
                    <button onClick={onRetry} className="btn-primary">
                        Try Again
                    </button>
                )}
            </div>
        </div>
    );
};

export default ErrorMessage;
