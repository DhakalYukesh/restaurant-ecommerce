import Button from "@/components/generic/button";
import TitleBanner from "@/components/generic/title-banner";
import MenuCardDetail from "@/components/menu/menucard-detail/menucard-detail";
import { menuItems } from "@/lib/constant/menu.constant";

interface IParams {
  params: {
    id: string;
  };
}

const page = async ({ params }: IParams) => {
  const { id } = await params;
  const menuItem = menuItems.find((item) => item.id === id);

  if (!menuItem) {
    return (
      <div>
        <TitleBanner src="/images/landing.jpg">Menu Not Found</TitleBanner>
        <div className="py-20 flex flex-col gap-4 items-center justify-center">
          <h2 className="text-xl">Menu item not found!</h2>
          <Button href="/menu" title="Go Back to Menu" />
        </div>
      </div>
    );
  }

  return (
    <>
      <TitleBanner src="/images/landing.jpg" subText="Page food">
        Menu Details
      </TitleBanner>
      <MenuCardDetail item={{ ...menuItem, images: [menuItem.image] }} />
    </>
  );
};

export default page;
