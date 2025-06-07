interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="text-center max-w-md mx-auto p-8">
                <div className="text-red-500 text-6xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Oops! Something went wrong</h2>
                <p className="text-slate-600 mb-6">{message}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};
