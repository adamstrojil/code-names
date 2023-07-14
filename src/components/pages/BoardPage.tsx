import { useState } from "react";

import { getNewWordCardSet } from "../../lib/utils";
import { WordCard } from "../../types";

import { Qr, Link } from "../atoms";
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2em",
          marginBottom: "4em",
          gap: "20px",
        }}
      >
        <Qr text={rolesAsString} />
        <Link to={"/map"}>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span>Scan map</span>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none" />
                </g>
                <g id="Health_Icons" data-name="Health Icons">
                  <g>
                    <path d="M6,18a2,2,0,0,0,2-2V8h8a2,2,0,0,0,0-4H8A4,4,0,0,0,4,8v8A2,2,0,0,0,6,18Z" />
                    <path d="M40,4H32a2,2,0,0,0,0,4h8v8a2,2,0,0,0,4,0V8A4,4,0,0,0,40,4Z" />
                    <path d="M42,30a2,2,0,0,0-2,2v8H32a2,2,0,0,0,0,4h8a4,4,0,0,0,4-4V32A2,2,0,0,0,42,30Z" />
                    <path d="M16,40H8V32a2,2,0,0,0-4,0v8a4,4,0,0,0,4,4h8a2,2,0,0,0,0-4Z" />
                    <path d="M42,22H6a2,2,0,0,0,0,4H42a2,2,0,0,0,0-4Z" />
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </Link>
      </div>
    </>
  );
}
