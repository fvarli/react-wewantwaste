export const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mb-4"></div>
                <p className="text-slate-600 text-lg">Loading skip options...</p>
            </div>
        </div>
    );
};
