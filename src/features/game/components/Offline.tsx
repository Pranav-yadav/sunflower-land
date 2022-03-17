import React from "react";

import death from "assets/npcs/skeleton_death.gif";

export const Offline: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-2">
      <span className="text-shadow text-center">Offline! :(</span>
      <img src={death} className="w-1/2" />
      <span className="text-shadow text-xs text-center">
        Uh oh, looks like the goblins detected that you are offline.
      </span>
      <span className="text-shadow text-xs text-center mt-2">
        Please connect to the internet and refresh / reload this page :)
      </span>
    </div>
  );
};
