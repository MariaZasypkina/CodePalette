// src/pages/PlayAndWin.jsx
import React from "react";
import PageLayout from "../layouts/PageLayout";
import Game from "../game/Game.jsx";

export default function PlayAndWin() {
  return (
    <PageLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
        <Game />
      </div>
    </PageLayout>
  );
}
