const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function replaceSpace(member){
  let space = / /gi
  return member.replace(space, '')
}

function isLetter(member){
  return member.match(/[a-z]/i)
}

function createDreamTeam(members){
  let letter = []
  try{
      for(let i=0; i<members.length; i++){
          if(typeof members[i] == 'string'){
              let member = replaceSpace(members[i])
              if(isLetter(member[0])){
                  letter.push(member[0].toUpperCase())
              }
          }
      }
  }catch{
      return false
  }
  letter.sort()
  let word = ''
  for(let i=0; i<letter.length; i++){
      word = word + letter[i]
  }
  if(word.length != 0){
      return word
  }else{
      return false
  }
  
}
console.log(createDreamTeam(['Catherine', 'Walter', 'Rachel', 'Brandon', 'Lori', 'Kimberly', 'Keith', 'Brandon', 'Johnny', 'Anna']))

module.exports = {
  createDreamTeam
};
