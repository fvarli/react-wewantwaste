import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { SkipGrid } from '@/components/SkipGrid';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';

interface Skip {
    id: number;
    size: number;
    hire_period_days: number;
    price_before_vat: number;
    vat: number;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
}

const fetchSkips = async (): Promise<Skip[]> => {
    const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
    if (!response.ok) {
        throw new Error('Failed to fetch skip data');
    }
    return response.json();
};

const Index = () => {
    const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
    const [currentStep] = useState(3); // We're on the "Select Skip" step

    const { data: skips, isLoading, error } = useQuery({
        queryKey: ['skips'],
        queryFn: fetchSkips,
    });

    const steps = [
        { id: 1, name: 'Postcode', icon: '📍' },
        { id: 2, name: 'Waste Type', icon: '🗑️' },
        { id: 3, name: 'Select Skip', icon: '📦' },
        { id: 4, name: 'Permit Check', icon: '✓' },
        { id: 5, name: 'Choose Date', icon: '📅' },
        { id: 6, name: 'Payment', icon: '💳' },
    ];

    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message="Failed to load skip options. Please try again." />;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                        We Want Waste
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Professional skip hire services for your waste management needs
                    </p>
                </div>

                {/* Progress Indicator */}
                <ProgressIndicator steps={steps} currentStep={currentStep} />

                {/* Main Content */}
                <div className="mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Choose Your Skip Size
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Select the skip size that best suits your project needs. All prices include VAT and delivery within the Lowestoft area.
                        </p>
                    </div>

                    {skips && (
                        <SkipGrid
                            skips={skips}
                            selectedSkip={selectedSkip}
                            onSelectSkip={setSelectedSkip}
                        />
                    )}
                </div>

                {/* Continue Button */}
                {selectedSkip && (
                    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-slate-200 p-4">
                        <div className="container mx-auto max-w-7xl flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-slate-600">Selected:</span>
                                <span className="font-semibold text-slate-800">
                  {selectedSkip.size} Yard Skip
                </span>
                                <span className="text-sm text-slate-600">
                  £{Math.round(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100))}
                </span>
                            </div>
                            <div className="flex space-x-3">
                                <button className="px-6 py-3 text-slate-600 hover:text-slate-800 transition-colors">
                                    Back
                                </button>
                                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                                    Continue →
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
