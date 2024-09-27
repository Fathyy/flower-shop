import FlowerCard from "@/components/myComponents/FlowerCard";
import MyNavbar from "@/components/myComponents/Navbar";
import { useGlobalContext } from "@/context/GlobalContext";
import { FlowerProps } from "@/types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const { getFlowers } = useGlobalContext();
  const [flowers, setFlowers] = useState<FlowerProps[]>([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const data = await getFlowers();
        setFlowers(data);
        console.log(data)
      } catch (error) {
        console.log("Error fetching flowers", error);
      }
    };
    fetchFlowers();
  }, [getFlowers])

  return (
    <div>
      <MyNavbar />
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
      {flowers && flowers.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent flowers</h2>
            <div className="flex flex-wrap gap-4">
              {flowers.map((flower) => (
                <FlowerCard key={flower._id} flower={flower} />
              ))}
            </div>
            {/* <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all flowers
            </Link> */}
          </div>
        )}
      </div>

    </div>
  )
}
