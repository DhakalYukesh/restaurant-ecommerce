"use client";
import { menuItems } from "@/lib/constant/menu.constant";
import MenuCard from "./menucard/menu-card";
import MenuDropdown from "./menudropdown/menudropdown";
import { useMenuFilter } from "@/lib/hooks/useMenuFilter";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const MenuPage = () => {
  const ITEMS_PER_PAGE = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const { filters, setFilters, filteredItems } = useMenuFilter(menuItems);

  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % filteredItems.length;
    setItemOffset(newOffset);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setItemOffset(0);
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
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              className="flex gap-2 items-center"
              pageClassName="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white"
              pageLinkClassName="w-full h-full flex items-center justify-center"
              previousClassName="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white"
              nextClassName="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white"
              activeClassName="!bg-primary text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;