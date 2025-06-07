
interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

export const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));
  const vatAmount = Math.round(skip.price_before_vat * (skip.vat / 100));

  const getSkipImageUrl = (size: number) => {
    // Using placeholder images - in a real app these would be actual skip images
    const images = {
      4: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=250&fit=crop',
      6: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=250&fit=crop',
      8: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop',
      10: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=250&fit=crop',
      12: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=250&fit=crop',
      14: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=250&fit=crop',
      16: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop',
      20: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=250&fit=crop',
      40: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=250&fit=crop',
    };
    return images[size as keyof typeof images] || images[4];
  };

  return (
    <div
      className={`
        relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 cursor-pointer group overflow-hidden
        ${isSelected 
          ? 'border-blue-600 shadow-lg shadow-blue-100 scale-105' 
          : 'border-slate-200 hover:border-blue-300 hover:shadow-md hover:scale-102'
        }
      `}
      onClick={onSelect}
    >
      {/* Skip Size Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {skip.size} Yards
        </span>
      </div>

      {/* Skip Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={getSkipImageUrl(skip.size)}
          alt={`${skip.size} yard skip`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-800">
            {skip.size} Yard Skip
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              £{totalPrice}
            </div>
            <div className="text-xs text-slate-500">
              inc. VAT (£{vatAmount})
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Hire Period:</span>
            <span className="font-medium text-slate-800">{skip.hire_period_days} days</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Road Placement:</span>
            <span className={`font-medium ${skip.allowed_on_road ? 'text-green-600' : 'text-red-600'}`}>
              {skip.allowed_on_road ? 'Allowed' : 'Not Allowed'}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Heavy Waste:</span>
            <span className={`font-medium ${skip.allows_heavy_waste ? 'text-green-600' : 'text-red-600'}`}>
              {skip.allows_heavy_waste ? 'Allowed' : 'Not Allowed'}
            </span>
          </div>
        </div>

        {/* Selection Button */}
        <button
          className={`
            w-full py-3 px-4 rounded-lg font-medium transition-all duration-200
            ${isSelected 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600'
            }
          `}
        >
          {isSelected ? 'Selected ✓' : 'Select This Skip →'}
        </button>
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
      )}
    </div>
  );
};
