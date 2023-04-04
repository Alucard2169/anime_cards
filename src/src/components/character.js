import { useState, useEffect } from 'react';
import '../style/character.css'

const Character = ({ id }) => {

      
    const [character, setCharacter] = useState(null);

    const getCharacters = async() => {
        const response = await fetch('/api/characters/' + id);
        const data = await response.json();
        setCharacter(data)
    }

    useEffect(() => {
        getCharacters()
    },[])



    return ( 
        <>
            <h2>Characters</h2>
              {character &&
                <div className="characters">
                    {character.map((char) => (
                        <a href={char.character.url} target="_blanks">
                                             <div className="char">
                                            <img src={char.character.images.webp.image_url} alt={char.character.name} />

                                            <div className="pInfo">
                                                <span className="name">{char.character.name}</span>
                                                <span className="role">{char.role}</span>
                                            </div>
                                        </div>
                                     </a>
                                    ))}
                            </div>}
        </>
     );
}
 
export default Character;