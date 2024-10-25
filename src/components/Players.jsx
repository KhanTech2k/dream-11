import { useEffect, useState } from "react";
import Player from "./Player";
import Selected from "./Selected";

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showSelected, setShowSelected] = useState(false);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

 
    const handleSelectedPlayers = (player) => {
        if (!selectedPlayers.includes(player)) {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };
    const handleRemove = (player) => {
        const newSelected = selectedPlayers.filter((newP) => newP.playerId !== player.playerId)
        setSelectedPlayers(newSelected)
    }
    return (
        <div>
            <div className="flex justify-between my-8">
                <p>Available Players</p>
                <div className="flex gap-4">
                    <button onClick={() => setShowSelected(false)} className="btn">Available</button>
                    <button onClick={() => setShowSelected(true)} className="btn">Selected {selectedPlayers.length}</button>
                </div>
            </div>

            {showSelected ? (
                <Selected  selectedPlayers={selectedPlayers} handleRemove={handleRemove}/>
            ) : (
                <div className="grid grid-cols-3 gap-8">
                    {players.map(player => (
                        <Player
                            handleSelectedPlayers={handleSelectedPlayers}
                            key={player.playerId}
                            player={player}
                        ></Player>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Players;