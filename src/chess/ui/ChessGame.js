import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';
import Game from '../model/Chess'
import Piece from './Piece';

class ChessGame extends Component{
    state = {
        gameState: new Game(this.props.isWhite),
        whiteKingInCheck: false,
        blackKingInCheck: false,
        draggedPieceTargetId: "",
        playerTurnToMoveIsWhite: true
    }

    componentDidMount(){
        // register event listners for socket.io
        Socket.on('oppenent move', move => {
            if(move.playerColorThatJustMovedIsWhite !== this.props.isWhite) {
                this.movePiece(move.selectedID, move.currentGame, move.isMyMove)
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Stage>
                        <Layer>
                            {
                                this.state.gameState.getBoard().map((row) => {
                                    return (
                                        <React.Fragment>
                                            {
                                                row.map((square)=>{
                                                    return (
                                                        <Piece 
                                                            x = {square.getCanvasCoord()[0]}
                                                            y = {square.getCanvasCoord()[1]}
                                                            imgUrls = {piecemap[square.getPiece().name]}
                                                            isWhite = {square.getPiece().name == 'white'}
                                                        >
                                                        </Piece>
                                                    )
                                                })
                                            }
                                        </React.Fragment>
                                    )
                                })
                            }
                        </Layer>
                    </Stage>
                </div>
            </React.Fragment>
        )
    }
    movePiece(selectedID,finalPosition, currentGame, isMyMove) {

    }
}

export default ChessGame