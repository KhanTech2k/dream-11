import { useEffect, useState } from "react";
import Player from "./Player";
import Selected from "./Selected";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';

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
            toast.warning("Maximum 6 players can be selected.");
            return;
        }
        if (selectedPlayers.includes(player)) {
            toast.info(`${player.name} has been already selected.`);
        } else if (credit >= player.biddingPrice) {
            setSelectedPlayers([...selectedPlayers, player]);
            toast.success(`Congratulations! ${player.name} has been selected.`);
            handleDeductPrice(player.biddingPrice);
        } else {
            toast.error(`Not enough money to select ${player.name}.`);
        }
    };
    const handleRemove = (player) => {
        const newSelected = selectedPlayers.filter((newPlayer) => newPlayer.playerId !== player.playerId)
        setSelectedPlayers(newSelected);
        toast.error(`You removed ${player.name} form the list.`);
    }
    return (
        <div>
            <div className="flex justify-between my-8">
                <p className="text-3xl font-bold">{showSelected ? `Selected Player:(${selectedPlayers.length}/6)` : "Available Players"}</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setShowSelected(false)}
                        className={`btn font-bold ${!showSelected ? 'bg-[#E7FE29]' : 'text-[#13131399]'}`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setShowSelected(true)}
                        className={`btn font-bold ${showSelected ? 'bg-[#E7FE29]' : 'text-[#13131399]'}`}
                    >
                        Selected {selectedPlayers.length}
                    </button>
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