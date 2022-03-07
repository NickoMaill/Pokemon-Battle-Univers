const FetchNews = () => {

    return(
        fetch(`https://video-game-news.p.rapidapi.com/pokemon/?rapidapi-key=${process.env.REACT_APP_APIKEY}`)
        .then(res => res.json())
        .catch(err => {
            console.error(err);
        })

    )

}

export default FetchNews