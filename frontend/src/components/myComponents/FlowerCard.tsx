import { FlowerProps } from "@/types/types";

interface FlowerCardprops {
    flower: FlowerProps;
}

export default function FlowerCard({ flower }: FlowerCardprops) {
  return (
    <div className="group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <img
        src={flower.picturePath}
        alt={flower.name}
        className="h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20"
      />
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{flower.name}</p>
        <span className='italic text-sm'>{flower.scientificName}</span>
      </div>
    </div>
  );
}
