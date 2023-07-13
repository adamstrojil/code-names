import { useState } from "react";

import { getNewWordCardSet } from "../../lib/utils";
import { Page, WordCard } from "../../types";

import { Qr } from "../atoms";
import { Board, OptionsMenu } from "../organisms";

export function BoardPage() {
  const [words, setWords] = useState<Array<WordCard>>(getNewWordCardSet());

  const rolesAsString = words.map(({ role }) => role).toString();

  return (
    <>
      <Board words={words} />
      <OptionsMenu setWords={setWords} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2em",
          marginBottom: "4em",
        }}
      >
        <Qr text={rolesAsString} />
      </div>
    </>
  );
}
