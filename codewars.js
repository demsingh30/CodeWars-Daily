// ==============================================
// 2026-10-22 |  | 7kyu
// ==============================================
//Find the Middle (7 kyu)



function getMiddle (s) {

const middle = Math.floor( s.length / 2 )

s.slice(middle, middle +1)

if (s.length % 2 === 0) {
    return 	s.slice(middle - 1, middle + 1) 
} else {
    return s.slice(middle, middle +1) 
}
}




 


   