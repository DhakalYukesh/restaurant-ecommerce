import { useState, useMemo } from 'react';
import { MenuItem, FilterState } from '../types/menu.types';

export const useMenuFilter = (items: MenuItem[]) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: null
  });

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const categoryMatch = filters.categories.length === 0 || 
        filters.categories.includes(item.category);
      
      let priceMatch = true;
      if (filters.priceRange) {
        const price = item.price;
        switch (filters.priceRange) {
          case '$': priceMatch = price < 10; break;
          case '$$': priceMatch = price >= 10 && price < 20; break;
          case '$$$': priceMatch = price >= 20 && price < 30; break;
          case '$$$$': priceMatch = price >= 30; break;
        }
      }
      
      return categoryMatch && priceMatch;
    });
  }, [filters, items]);

  return {
    filters,
    setFilters,
    filteredItems
  };
};
