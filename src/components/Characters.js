import App from "../App";


export default function Characters(props){
    const {characters, setCharacters} = props;
    
    const resetCharacters = () => {
        setCharacters(null);
    }
    
    return(
    <div className="characters">

        <h1> Personajes </h1> 
        <span className="back-home" onClick={resetCharacters}> Pantalla Principal </span>
        <div className="container-characters">
            {characters.map((characters, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={characters.image} alt={characters.name} />
                    </div>
                    <div>
                        <h3>{characters.name}</h3>
                        <h6>
                            {characters.status === "Alive" ? (
                                <>
                                <span className="Vivo"/>
                                 Vivo
                                </>
                                ) : (
                                <>
                                <span className="Muerto" />
                                Muerto
                                </>                           
                            )}
                        </h6>
                        <p className="text-grey"> Episodios : {characters.episode.length} </p>
                        <p>
                        <p className="text-grey"> Especie : {characters.species} </p>    
                        <p></p>
                        </p>
                        
                    </div>       
             </div>
            ))}
        </div>
        <span className="back-home" onClick={resetCharacters}> Volver </span>
        
    </div>
);

}