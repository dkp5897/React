import React from "react";
const channelContext = React.createContext();

const ChProvider = channelContext.Provider;
const ChConsumer = channelContext.Consumer;

export {ChProvider , ChConsumer}