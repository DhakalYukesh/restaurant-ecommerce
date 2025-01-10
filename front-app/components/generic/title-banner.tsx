interface TitleBannerProps {
  children: React.ReactNode;
  src: string;
  subText?: string;
}

const TitleBanner = ({ children, src, subText }: TitleBannerProps) => {
  return (
    <div className="relative w-full h-[450px]">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-6xl font-bold">{children}</h2>
          <p className="mt-6 w-[400px]">{subText}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleBanner;
