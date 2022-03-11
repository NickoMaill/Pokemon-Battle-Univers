const fetchStatsPokemon = (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    
    return (
        fetch(url)
            .then(res => res.json())
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);

            })


    );

}

export default fetchStatsPokemon