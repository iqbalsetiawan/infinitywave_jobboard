import AlertIcon from './icons/AlertIcon';

const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <AlertIcon />
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
