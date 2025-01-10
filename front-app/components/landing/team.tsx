import Image from "next/image";

const Team = () => {
  return (
    <section className="web-container px-4 py-16">
      <div className="max-w-xl mb-12 mt-32">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Meet The Team of NYUS
        </h1>
        <p className="text-muted-foreground mb-12">
          Neque elis rutrum in laoreet nec eget scelerisque voluptat sit.
          Bibendum tincidunt a scelerisque consectetur ultrices elementum
          pulvinar non. Leo ut id vel nec nisi odio nisi. Auctor egestas nibh
          augue enim, ornare blandit.
        </p>
      </div>

      <div className="flex gap-20 relative">
        <div>
          <Image
            src="/images/chef-2.jpg"
            alt="Chef preparing a plated dish"
            width={600}
            height={600}
            className="object-cover mb-14"
          />
        </div>
        <Image
          src="/images/chef-1.jpg"
          alt="Barista with a drink"
          width={350}
          height={300}
          className="object-cover absolute top-[-200px] right-[178px]"
        />
        <div className="mt-[26rem] mb-24">
          <Image
            src="/images/chef-3.jpg"
            alt="Chef at prep station"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
