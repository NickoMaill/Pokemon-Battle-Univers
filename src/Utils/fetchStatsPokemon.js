const fetchStatsPokemon = (url) => {
    
    return (
        fetch(url)
            .then(res => res.json())
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);

            })


    );

}

export default fetchStatsPokemon