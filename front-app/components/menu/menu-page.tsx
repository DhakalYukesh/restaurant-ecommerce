"use client";

import { useState } from "react";
import { menuItems } from "@/lib/constant/menu.constant";
import MenuCard from "./menucard/menu-card";
import MenuDropdown from "./menudropdown/menudropdown";
import { useMenuFilter } from "@/lib/hooks/useMenuFilter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MenuPage = () => {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const { filters, setFilters, filteredItems } = useMenuFilter(menuItems);

  const pageCount = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(offset, offset + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <div className="">
      <div className="web-container flex gap-6">
        <div className="w-[220px] border-r border-gray-200 pr-6 py-20">
          <MenuDropdown filters={filters} onFilterChange={handleFilterChange} />
        </div>
        <div className="flex-1 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((item) => (
              <MenuCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  />
                </PaginationItem>
                {[...Array(pageCount)].map((_, index) => {
                  const page = index + 1;
                  if (
                    page === 1 ||
                    page === pageCount ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={page === currentPage}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}
                <PaginationItem>
                  <PaginationNext
                    className={currentPage === pageCount ? 'pointer-events-none opacity-50' : ''}
                    onClick={() => handlePageChange(Math.min(pageCount, currentPage + 1))}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

