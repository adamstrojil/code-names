import React from 'react';

type Props = {
    word: string
    showBackground?: boolean
}

export function Word({ word, showBackground = false }: Props) {

    const style = {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        backgroundColor: showBackground ? 'white' : 'undefined',
        borderRadius: "4px",
        paddingTop: showBackground ? '4px' : 'undefined',
        paddingBottom: showBackground ? '8px' : 'undefined',
        marginTop: showBackground ? '4px' : 'undefined',
    }

    return <div style={style}>{word}</div>
}