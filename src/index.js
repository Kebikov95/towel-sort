module.exports = function towelSort(matrix) 
{
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
  }

  let array = [];

  for(let i = 0; i < matrix.length; i++){
    if(i % 2 != 0) array.push(...matrix[i].reverse());
    else array.push(...matrix[i]);
  }

  return array;
}
