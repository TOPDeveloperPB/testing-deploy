import Image from "next/image";

const BackgroundImage = ({ image, children }: any) => {
  return (
    <div className="inline_bg_image_container ">
      <div className={`inline_bg_hero_image relative overflow-hidden`}>
        {image?.filename && (
          <Image
            src={image?.filename}
            alt={''}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl md:rounded-[40px] bg-[#412614]"
          />
        )}
      </div>
      <div className="inline_hero_content z-10">{children}</div>
    </div>
  );
};

export default BackgroundImage;
