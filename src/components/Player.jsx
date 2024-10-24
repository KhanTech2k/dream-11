const Player = ({player}) => {
    const {name,country,image,role,battingBowlingType,biddingPrice}=player;
    console.log(player)
    return (
        <div>
            <div className="h-[240px]">
                <img className="w-full h-full rounded-lg" src={player.image} alt="" />
            </div>
            <h3>{player.name}</h3>
            <div className="flex justify-between">
                <p>{player.country}</p>
                <p>{player.role}</p>
            </div>
            <hr />
            <div>
                <h3>Rating</h3>
                <div>
                   {player.battingBowlingType} 
                </div>
                <div className="flex justify-between">
                    <p>Price: {player.biddingPrice}</p>
                    <button>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;