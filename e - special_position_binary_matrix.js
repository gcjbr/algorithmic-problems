// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.
// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).


function numSpecial(mat) {
  let count = 0;
  const rowsCount = Array(mat.length).fill(0);
  const colsCount = Array(mat[0].length).fill(0);

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if(mat[row][col] === 1) {
        rowsCount[row] +=1;
        colsCount[col] +=1;
      }
    }
  }

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if(mat[row][col] === 1 && rowsCount[row] === 1 && colsCount[col] === 1) {
        count += 1;
      }
    }
  }
  
  return count;
}




console.log(numSpecial([[1,0,0],[0,0,1],[1,0,0]]));
console.log(numSpecial([[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,1],[0,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0]]));

