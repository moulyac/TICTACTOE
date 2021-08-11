const boxes = document.querySelectorAll('.box')
const result= document.querySelector('#result')
const [button]= document.getElementsByTagName('button')
const playerXScore= document.querySelector('#playerX')
const playerOScore= document.querySelector('#playerO')

 //console.log(boxes)
const playerX = 'X'
const playerO = 'O'
let score={X:0,O:0}
let currentPlayer = playerX
let XO = []
let winstatus = false
let drawstatus = false
      
const draw = ()=>{
    let boxfilled = 0
    //console.log('hhh')
    XO.forEach((box,i)=>{
        // console.log(space,i)
        if(box !== null) boxfilled++
    })
    if(boxfilled === 9){
        result.innerText = 'Its a DRAW!!'
        button.innerText='new game'
        drawstatus = true
        return true
    }
}

const win =(e)=>{
    // const id = e.target.id
    if(XO[0] === currentPlayer){
        //console.log(XO[0],XO[1],XO[2])
        if(XO[2] === currentPlayer && XO[1] === currentPlayer){
            //console.log('hhhh')
            result.innerText = `Player ${currentPlayer} won!!`
            button.innerText='new game'
            winstatus=true
            score[currentPlayer]+=1
            playerOScore.innerText=`Player O score : ${score.O}`
            playerXScore.innerText=`Player X score : ${score.X}`            
            return true
        }
        if(XO[3] === currentPlayer && XO[6] === currentPlayer){
            result.innerText = `Player ${currentPlayer} won!!`
            button.innerText='new game'
            winstatus=true
            score[currentPlayer]+=1
            playerOScore.innerText=`Player O score : ${score.O}`
            playerXScore.innerText=`Player X score : ${score.X}`
            return true
        }
        if(XO[4] === currentPlayer && XO[8] === currentPlayer){
            result.innerText = `Player ${currentPlayer} won!!`
            button.innerText='new game'
            winstatus=true
            score[currentPlayer]+=1
            playerOScore.innerText=`Player O score : ${score.O}`
            playerXScore.innerText=`Player X score : ${score.X}`            
            return true
        }
    }

    if(XO[4] === currentPlayer){
        if(XO[1] === currentPlayer && XO[7] === currentPlayer){
            result.innerText = `Player ${currentPlayer} won!!`
            button.innerText='new game'
            winstatus=true
            score[currentPlayer]+=1
            playerOScore.innerText=`Player O score : ${score.O}`
            playerXScore.innerText=`Player X score : ${score.X}`
            return true
        }
        if(XO[3] === currentPlayer && XO[5] === currentPlayer){
            result.innerText = `Player ${currentPlayer} won!!`
            button.innerText='new game'
            winstatus=true
            score[currentPlayer]+=1
            playerOScore.innerText=`Player O score : ${score.O}`
            playerXScore.innerText=`Player X score : ${score.X}`
            return true
        }
        if(XO[6] === currentPlayer && XO[2] === currentPlayer){
            result.innerText = `Player ${currentPlayer} won!!`
            button.innerText='new game'
            winstatus=true
            score[currentPlayer]+=1
            playerOScore.innerText=`Player O score : ${score.O}`
            playerXScore.innerText=`Player X score : ${score.X}`
            return true
        }
    }

    if(XO[8] === currentPlayer){
        if(XO[5] === currentPlayer && XO[2] === currentPlayer){
            result.innerText = `Player ${currentPlayer} won!!`
            button.innerText='new game'
            winstatus=true
            score[currentPlayer]+=1
            playerOScore.innerText=`Player O score : ${score.O}`
            playerXScore.innerText=`Player X score : ${score.X}`
            return true
        }
        if(XO[6] === currentPlayer && XO[7] === currentPlayer){
            result.innerText = `Player ${currentPlayer} won!!`
            button.innerText='new game'
            winstatus=true
            score[currentPlayer]+=1
            playerOScore.innerText=`Player O score : ${score.O}`
            playerXScore.innerText=`Player X score : ${score.X}`
            return true
        }
    }
    return false
}

const restart=()=>{
    XO=[]
    boxes.forEach((box)=>{
        box.innerText=''
    })
    result.innerText=''
    button.innerText='restart'
}
const boxclick = (e)=>{
    const id = e.target.id
    if(!winstatus && !drawstatus){
        if(!XO[id]){
            //console.log(space[id])
            XO[id] = currentPlayer
            e.target.innerText = currentPlayer
            if(win()){
                winstatus= true
                return 
            }
            if(draw()){
                //console.log('draw')
                return
            }
            currentPlayer = currentPlayer === playerO ? playerX : playerO
            }
        }
        if(winstatus || drawstatus){
            restart()
            winstatus=false
            drawstatus=false
        }
    }

    const boxstyle = ()=>{
        boxes.forEach((box,i)=>{
            let styleboard = ''
            if (i < 3) {
                styleboard += 'border-bottom: 3px solid black;'
            }
            if (i % 3 === 0) {
                styleboard += 'border-right: 3px solid black;'
            }
            if (i % 3 === 2) {
                styleboard += 'border-left: 3px solid black;'
            }
            if (i > 5) {
                styleboard += 'border-top: 3px solid black;'
            }
                box.style = styleboard
                box.addEventListener('click',boxclick)
            })
        }
boxstyle()