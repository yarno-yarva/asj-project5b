// TODO: write your code here

function Error(message) {
  this.message = message;
}

export class Character {
constructor(name) {
   this.name = name;
   this.health  = 100;
   this.level = 1;
   if ( name.length < 2 || name.length > 10 ) { throw new Error("Возможное название от 2-х до 10-ти символов");}
   else {this.name = name; }
   }

  levelUp() {
   if (this.health > 0) {
     this.level = this.level + 1;
     this.attack = this.attack * 1.2;
     this.defence = this.defence * 1.2;
   } else { throw new Error("Это труп невозможно повысить уровень");}

  } 
  
  damage(points) {
    if (this.health >= 0) {
    this.health -= points * (1 - this.defence / 100)}
  }
}
