import Button from "../generic/Button";

// TODO: Remove this data and fetch from API
const menuData = [
  { title: "Lemon and Garlic Green Beans", price: "15.00" },
  { title: "Bacon-wrapped Shrimp with Garlic", price: "21.50" },
  { title: "LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI", price: "18.50" },
  { title: "Imported Oysters Grill (5 Pieces)", price: "20.00" },
];

const Menu = () => {
  return (
    <section className="bg-primary px-4 py-16 text-white">
      <div className="web-container">
        <div className="mb-12 text-center">
          <h2 className="text-sm tracking-wider font-semibold mb-5">
            Our Menu
          </h2>
          <div className="flex items-center gap-6">
            <div className="h-px bg-white/50 flex-1" />
            <h1 className="mb-6 text-5xl font-bold">Get Relax. Eat.</h1>
            <div className="h-px bg-white/50 flex-1" />
          </div>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit.
            Bibendum tincidunt a scelerisque consectetur ultrices elementum
            pulvinar non.
          </p>
        </div>

        <div className="mb-12 grid gap-x-8 gap-y-8 md:grid-cols-2">
          <div className="space-y-8">
            {menuData.map((item, index) => (
              <div key={index} className="border-b border-zinc-500 pb-6">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-medium">{item.title}</h4>
                  <span className="text-zinc-400">- {item.price}</span>
                </div>
                <p className="text-sm text-zinc-500">Bacon / Shrimp / Garlic</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {menuData.map((item, index) => (
              <div key={index} className="border-b border-zinc-500 pb-6">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-medium">{item.title}</h4>
                  <span className="text-zinc-400">- {item.price}</span>
                </div>
                <p className="text-sm text-zinc-500">Bacon / Shrimp / Garlic</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <Button
            className="text-center"
            href="/viewallmenu"
            title="VIEW ALL MENU"
            variant="black"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
