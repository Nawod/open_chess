import React from "react"
import { Image } from "react-konva"
import useImage from 'use-image'

const Piece = (props) => {
    const choiceOfColor = props.isWhite ? 0 : 1
    const [image] = useImage(props.imgurls[choiceOfColor])
    const isDragged = props.id === props.draggedPieceTargetId
    const canPieceBeMoved = props.isWhite === props.thisPlayerWhite
    const isPlayerTurn = props.playerTurnToMoveIsWhite === props.thisPlayerWhite
    
    const thisWhiteKingInCheck = props.id === "wk1" && props.whiteKingInCheck
    const thisBlackKingInCheck = props.id === "bk1" && props.blackKingInCheck
    
    return (
        <Image 
            draggable
        />
    )
}

export default Piece