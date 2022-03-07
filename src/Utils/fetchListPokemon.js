const FetchListPokemon = (limit) => {

    const fetchUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`

    return (
        fetch(fetchUrl)
            .then(res => res.json())

            .catch((err) => {
                console.error("Error while charging a Pokemon", err);

            })

    );

}

export default FetchListPokemon