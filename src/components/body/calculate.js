export function calculateWinner (squares, i, n){
    const line = [
        [i, i+1, i+1+1, i+1*3, i+1*4],
        [i, i+n, i+n*2, i+n*3, i+n*4],
        [i, i+(1+n), i+(1+n)*2, i+(1+n)*3, i+(1+n)*4],
        [i, i+(n-1), i+(n-1)*2, i+(n-1)*3, i+(n-1)*4]
    ]


    for(let i = 0 ; i < line.length; i++){

        const [a, b, c, d, e] = line[i];
    
        if(squares[a] && squares[a] === squares[b] && squares[a]===squares[c] && squares[a] === squares[d] && squares[a] === squares[e]){
            return squares[a];
        } 
    }
    return null;
}