import { useEffect, useState } from "react";
import Player from "./Player";
import Selected from "./Selected";
import PropTypes from "prop-types";

const Players = ({ handleDeductPrice, credit }) => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showSelected, setShowSelected] = useState(false);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);
    const handleSelectedPlayers = (player) => {
        if (selectedPlayers.length >= 6) {
            alert("No more empty slot");
            return;
        }
        // Check if player is already in the selectedPlayers array
        if (selectedPlayers.includes(player)) {
            alert("Already Added");
        } else if (credit >= player.biddingPrice) {
            setSelectedPlayers([...selectedPlayers, player]);
            alert("Congrats");

            // Deduct balance only if adding for the first time
            handleDeductPrice(player.biddingPrice);
        } else {
            alert("Insufficient balance!");
        }
    };
    const handleRemove = (player) => {
        const newSelected = selectedPlayers.filter((newPlayer) => newPlayer.playerId !== player.playerId)
        setSelectedPlayers(newSelected)
    }
    return (
        <div>
            <div className="flex justify-between my-8">
                <p>{showSelected ? `Selected Player:(${selectedPlayers.length}/6)` : "Available Players"}</p>
                <div className="flex gap-4">
                    <button onClick={() => setShowSelected(false)} className="btn">Available</button>
                    <button onClick={() => setShowSelected(true)} className="btn">Selected {selectedPlayers.length}</button>
                </div>
            </div>
            {showSelected ? (
                <Selected selectedPlayers={selectedPlayers} handleRemove={handleRemove} setShowSelected={setShowSelected}></Selected>
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
Players.propTypes = {
    handleDeductPrice: PropTypes.func,
    credit: PropTypes.number
}
export default Players;