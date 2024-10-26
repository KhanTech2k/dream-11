import PropTypes from "prop-types";
const Selected = ({ selectedPlayers, handleRemove, setShowSelected }) => {
    return (
        <div>
            <div >
                <div>{selectedPlayers.map(player => (
                    <div className="flex justify-between items-center border border-3 p-6 my-6 rounded-lg" key={player.playerId}>
                        <div className="flex items-center">
                            <img className="w-[80px] h-[80px] rounded-full object-cover" src={player.image} alt="" />
                            <div className="ml-3">
                                <p className="text-lg font-semibold">{player.name}</p>
                                <p className="text-[#131313B3]">{player.battingBowlingType}</p>
                            </div>
                        </div>
                        <div><button onClick={() => handleRemove(player)} className="btn text-red-500"><i className="fa-regular fa-trash-can"></i></button></div>
                    </div>
                ))}</div>
            </div>
            <button onClick={() => setShowSelected(false)} className="border-2 border-[#E7FE29] p-1 rounded-lg"><div className="btn bg-[#E7FE29] font-bold border-none">Add More Player</div></button>
        </div>
    );
};
Selected.propTypes = {
    selectedPlayers: PropTypes.object,
    handleRemove: PropTypes.func,
    setShowSelected: PropTypes.object
}
export default Selected;