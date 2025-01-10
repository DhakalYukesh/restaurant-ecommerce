const SIGNATUREMENU = () => {
  return (
    <section className="relative min-h-96 w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/images/signature.jpg')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mr-32 z-10 ml-28 flex flex-col justify-center h-full mt-10 pt-10 max-w-4xl mx-auto px-6">
        <div className="web-container h-full flex flex-col justify-center px-6">
          <div className="web-container space-y-6">
            <p className="text-white text-sm tracking-wide font-semibold">
              Homemade
            </p>
            <h3 className="text-xl md:text-6xl lg:text-6xl font-bold text-white tracking-tight">
              Signature Menu
            </h3>
            <p className="text-white text-sm max-w-xl leading-relaxed">
              Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit.
              Bibendum tincidunt a scelerisque consectetur ultrices elementum
              pulvinar non.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIGNATUREMENU;
