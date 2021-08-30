import React, { createContext, useState } from "react";

export const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [game, setGame] = useState(null);
    return (
        <GameContext.Provider value={{
            game,
            setGame,
        }}>
            {children}
        </GameContext.Provider>
    )
};

export default GameProvider;