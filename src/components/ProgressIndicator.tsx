interface Step {
    id: number;
    name: string;
    icon: string;
}

interface ProgressIndicatorProps {
    steps: Step[];
    currentStep: number;
}

export const ProgressIndicator = ({ steps, currentStep }: ProgressIndicatorProps) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex items-center justify-between relative">
                {/* Progress Line */}
                <div className="absolute top-6 left-0 w-full h-0.5 bg-slate-200">
                    <div
                        className="h-full bg-blue-600 transition-all duration-500 ease-out"
                        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    />
                </div>

                {steps.map((step, index) => {
                    const isCompleted = step.id < currentStep;
                    const isCurrent = step.id === currentStep;
                    const isUpcoming = step.id > currentStep;

                    return (
                        <div
                            key={step.id}
                            className="flex flex-col items-center relative z-10 bg-inherit"
                        >
                            {/* Step Circle */}
                            <div
                                className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-300
                  ${isCompleted ? 'bg-blue-600 text-white scale-110' : ''}
                  ${isCurrent ? 'bg-blue-100 text-blue-600 border-2 border-blue-600 scale-110' : ''}
                  ${isUpcoming ? 'bg-slate-100 text-slate-400' : ''}
                `}
                            >
                                {isCompleted ? '✓' : step.icon}
                            </div>

                            {/* Step Label */}
                            <div className="mt-3 text-center">
                                <div
                                    className={`
                    text-sm font-medium transition-colors duration-300
                    ${isCompleted || isCurrent ? 'text-slate-800' : 'text-slate-400'}
                  `}
                                >
                                    {step.name}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
