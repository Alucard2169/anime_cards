import '../style/animeCard.css';
import { Link } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'


const AnimeCard = (props) => {
    const { anime,close } = props;
    return ( 
        <div className="animeList">
            {anime.map((ani) => (
                <Link to={`/anime/${ani.mal_id}`} key={ani.mal_id}>
                    <div className="card" onClick={close} key={ani.mal_id} >

                        {ani.score && <div className="rating">
                            <AiFillStar className='icon' /><span>{ani.score}</span>
                        </div>}

                    <img src={`${ani.images.webp.large_image_url}`} alt={`${ani.title_english}`} className="animeImage" />
                    <div className="info" >
                        <h1 className="title">{ani.title || ani.title_english || ani.title_japanese}</h1>
                        <div className="studio" >{ani.studios.map((studio) => (
                            <span className="studios" >{studio.name}</span>
                        )) }</div>
                    </div>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default AnimeCard;
