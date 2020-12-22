import React, { useState } from 'react';
import { CardRole, GameVariant } from './types';
import { mapRoleToStyles } from './utils';
import { Word } from './Word';

type Props = {
    word: string
    variant: GameVariant
    cardRole: CardRole
    // roleRevealed?: boolean //fixme
}

const styleOuter = {
    height: "15vh",
    width: "18vw",
    backgroundColor: "#f1dbba",
    display: "flex",
    flexDirection: 'column' as 'column', //wtf
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    border: "1px solid black",
    borderRadius: "5px",
    cursor: "pointer"
}

const styleInner = {
    width: "calc(100% - 28px)",
    height: "calc(100% - 28px)",
    display: "flex",
    flexDirection: 'column' as 'column', //wtf
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
    border: "1px solid #8e775488",
    borderRadius: "5px",
    padding: "8px",
}

const styleMirrored = {
    transform: 'rotate(180deg)',
    fontWeight: 'normal' as 'normal'
}


export function Card({ word, variant, cardRole = 'neutral' }: Props) {
    const displayMirrored = variant === 'mirrored';

    const [roleRevealed, setRoleRevealed] = useState<boolean>(false);

    return <div style={{ ...styleOuter, ...(roleRevealed ? mapRoleToStyles(cardRole) : {}) }} onClick={() => setRoleRevealed(true)}>
        {displayMirrored
            ? <div style={styleInner}>
                <div style={styleMirrored}>
                    <Word word={word} />
                </div>
                <hr style={{ width: "90%" }} />
                <Word word={word} showBackground />
            </div>
            : <div style={styleInner}>
                <Word word={word} showBackground />
            </div>}
    </div>

}