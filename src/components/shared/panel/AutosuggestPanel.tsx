import React from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

function useWaitQuery(props: { query: string | null }) {
  const path = `/pokemon?q=${props.query}`;
  const url = process.env.NEXT_PUBLIC_API_URL + path;

  const query = useQuery({
    queryKey: ["pokemon", props.query],
    queryFn: () => fetch(url).then((res) => res.text()),
    enabled: !!props.query,
  });

  return [query.data, query.status];
}
const AutosuggestPanel = (props: { query: string | null }) => {
  const [data] = useWaitQuery(props);

  if (!data) {
    return null;
  }

  const { pokemon } = JSON.parse(data);

  if (!pokemon || !pokemon.length) {
    return null;
  }

  return (
    <div className="absolute top-full mt-2 w-[51rem] bg-white rounded-tl-2xl shadow-lg z-50">
      <div className="py-2">
        {pokemon &&
          pokemon.length > 0 &&
          pokemon.map((p: any) => (
            <div
              key={p.id}
              className="flex items-center justify-between px-6 py-2.5 hover:bg-gray-100 cursor-pointer"
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
