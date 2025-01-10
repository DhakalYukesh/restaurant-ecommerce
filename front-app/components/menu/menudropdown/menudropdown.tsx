import { FilterState } from "@/lib/types/menu.types";

interface MenuDropdownProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const CATEGORIES = ['bugers', 'pizza', 'salads', 'appetizers'] as const;
const PRICE_RANGES = [
  { value: '$', label: 'Under $10' },
  { value: '$$', label: '$10 - $20' },
  { value: '$$$', label: '$20 - $30' },
  { value: '$$$$', label: 'Above $30' },
] as const;

const MenuDropdown = ({ filters, onFilterChange }: MenuDropdownProps) => {
  const handleCategoryChange = (category: string) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFilterChange({ ...filters, categories: updatedCategories });
  };

  const handlePriceRangeChange = (range: string) => {
    const newRange = filters.priceRange === range ? null : range;
    onFilterChange({ ...filters, priceRange: newRange });
  };

  const handleReset = () => {
    onFilterChange({ categories: [], priceRange: null });
  };

  return (
    <div className="space-y-2">
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium">Categories</span>
          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="border-t border-gray-200 bg-white">
          <header className="flex items-center justify-between p-4">
            <span className="text-sm text-gray-700">{filters.categories.length} Selected</span>
            <button 
              type="button" 
              className="text-sm text-gray-900 underline underline-offset-4"
              onClick={handleReset}
            >
              Reset
            </button>
          </header>

          <ul className="space-y-1 border-t border-gray-200 p-4">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <label htmlFor={`Filter${category.replace(' ', '')}`} className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`Filter${category.replace(' ', '')}`}
                    className="size-5 rounded border-gray-300"
                    checked={filters.categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span className="text-sm font-medium text-gray-700">{category}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </details>

      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium">Price Range</span>
          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="border-t border-gray-200 bg-white">
          <div className="p-4">
            <div className="space-y-2">
              {PRICE_RANGES.map(({ value, label }) => (
                <label key={value} className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    className="size-5"
                    checked={filters.priceRange === value}
                    onChange={() => handlePriceRangeChange(value)}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {value} ({label})
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default MenuDropdown;
