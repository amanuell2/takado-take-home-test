export const dynamic = "force-dynamic";
import { pokemonList } from "@/constant/pokemon";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query || query.length < 1) {
      throw new Error("Invalid query parameter, query must be at least 1 char");
    }

    const filteredPokemon = filterPokemon(query);

    // delay the response by 1 second for test loading purpose
    const delayTime = 1000;
    await new Promise((resolve) => setTimeout(resolve, delayTime));

    return NextResponse.json({
      pokemon: filteredPokemon,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error, success: false });
  }
}

const filterPokemon = (query: string) => {
  return pokemonList.filter((pokemon) =>
    pokemon.name.startsWith(query.toLowerCase())
  );
};
