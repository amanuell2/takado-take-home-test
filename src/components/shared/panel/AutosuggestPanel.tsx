import React from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Pokemon } from "@/types";


function useWaitQuery(props: { query: string | null }) {
  const path = `search?query=${props.query}`;
  const url =
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_API_URL_DEV}${path}`
      : `${process.env.NEXT_PUBLIC_API_URL_PROD}${path}`;

  const query = useQuery({
    queryKey: ["search", props.query],
    queryFn: () => fetch(url.toString()).then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.text();
    }),
    enabled: !!props.query,
  });

  return [query.data, query.status];
}
const AutosuggestPanel = (props: { query: string | null }) => {
  const [data] = useWaitQuery(props);

  if (!data) {
    return null;
  }

  let pokemon;

  try {
    const parsedData = JSON.parse(data);
    if (!parsedData || !parsedData.pokemon) {
      throw new Error('Invalid JSON format: "pokemon" key not found');
    }
    pokemon = parsedData.pokemon;
  } catch (e) {
    console.error("Error parsing JSON data:", e);
  }

  if (!pokemon || !pokemon.length) {
    return null;
  }

  return (
    <div className="absolute top-full mt-2 w-full md:w-[51rem] bg-white rounded-tl-2xl rounded-br-2xl shadow-lg z-50 px-4 h-[24rem] overflow-y-auto">
      <div className="py-2">
        {pokemon &&
          pokemon.length > 0 &&
          pokemon.map((p: Pokemon) => (
            <div
              key={p.url}
              className="flex items-center justify-between px-6 py-2.5 hover:bg-gray-100 hover:rounded-tl-2xl hover:rounded-br-2xl  cursor-pointer"
            >
              <div className="flex items-center gap-3 jus flex-1">
                <div className="w-16 h-16  rounded-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={64}
                    height={64}
                    layout="fixed"
                  />
                </div>
                <div className="font-lato font-medium text-xl rounded-full w-[50%]">
                  {p.name}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AutosuggestPanel;
