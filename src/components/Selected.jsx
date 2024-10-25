import PropTypes from "prop-types";
const Selected = ({ selectedPlayers,handleRemove}) => {
    return (
        <div>
            <h2>Selected Players</h2>
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
        </div>
    );
};
Selected.propTypes = {
    selectedPlayers: PropTypes.object,
    handleRemove: PropTypes.func
}
export default Selected;