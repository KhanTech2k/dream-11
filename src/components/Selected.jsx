import PropTypes from "prop-types";
const Selected = ({ selectedPlayers, handleRemove, setShowSelected }) => {
    return (
        <div>
            <div >
                <div>{selectedPlayers.map(player => (
                    <div className="flex justify-between" key={player.playerId}>
                        <div className="flex">
                            <img className="w-[80px]" src={player.image} alt="" />
                            <div>{player.name}</div>
                        </div>
                        <div><button onClick={() => handleRemove(player)} className="btn">Delete</button></div>
                    </div>
                ))}</div>
            </div>
            <button onClick={() => setShowSelected(false)} className="btn">Add More Player</button>
        </div>
    );
};
Selected.propTypes = {
    selectedPlayers: PropTypes.object,
    handleRemove: PropTypes.func,
    setShowSelected: PropTypes.object
}
export default Selected;