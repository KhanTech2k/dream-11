import { useEffect } from "react";
import { useState } from "react";
import Player from "./Player";

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div>
            <div className="flex justify-between my-8">
                <p>Available Players</p>
                <div className="flex gap-4">
                    <button className="btn">Available</button>
                    <button className="btn">Selected</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
            {
                players.map(player =><Player key={player.playerId} player={player}></Player>)
            }
            </div>
        </div>

    );
};

export default Players;