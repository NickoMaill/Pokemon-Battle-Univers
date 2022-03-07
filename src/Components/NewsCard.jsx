import { useContext } from "react";
import { Context } from "../Context/AppContext";
import "../Sass/NewsCard.scss"

export default function NewsCard(props) {
    const stateContext = useContext(Context);


  return (
    <div className="news-card-container">

        <div className="news-container">

            <h3>{stateContext.gameNews[props.idKey].text}</h3>
            <span>article by <strong>{stateContext.gameNews[props.idKey].source}</strong></span>
            <p>to read this article <br/> click on the button bellow</p>
            <button className="button"><a target="_blank" rel="noreferrer" href={`${stateContext.gameNews[props.idKey].publication}${stateContext.gameNews[props.idKey].url}`}>read article</a></button>

        </div>

    </div>
  )
};
