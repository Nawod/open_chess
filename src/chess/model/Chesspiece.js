class ChessPiece {
    constructor(name, id, isAttacked, color){
        this.name = name
        this.color = color
        this.id = id
        this.isAttacked = isAttacked
    }

    setSquare(newSquare){
        // to assign chess pieces to specific square
        if (newSquare === undefined) {
            this.squareThisPieceIsOn = newSquare
            return
        }
        if (this.squareThisPieceIsOn === undefined){
            this.squareThisPieceIsOn = newSquare
            newSquare.setPiece(this)
        }
        const isNewSquareDifferent = this.squareThisPieceIsOn.x != newSquare.x || this.squareThisPieceIsOn.y != newSquare.y

        if (isNewSquareDifferent) {
            this.squareThisPieceIsOn = newSquare
            newSquare.setPiece(this)
        }
    }
    getSquare(){
        return this.squareThisPieceIsOn
    }
}


export default ChessPiece