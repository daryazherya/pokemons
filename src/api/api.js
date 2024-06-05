export async function fetchPokemons(pageNumber, pageSize) {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${pageSize * pageNumber}&limit=${pageSize}`;
    const data = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const pokemons = await data.json();

    const allPokemons = pokemons.results.map((pokemon) => {
        const id = pokemon.url.slice(34, -1);
        return {
            name: pokemon.name,
            id,
        };
    });

    const result = {
        count: pokemons.count,
        allPokemons,
    };

    return result;
}
