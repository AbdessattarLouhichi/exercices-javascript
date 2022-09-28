
function member(id,Name,grade) {
    this.id = id;
    this.Name = Name;
    this.grade = grade;
    this.toString = function () {
        return 'id: ' + this.id+ ' Name: ' +this.Name+ ' grade: ' +this.grade ; 
    }
}
 function team() {
    this.members  = new Array();
    this.add = function(member) {
                      var index = this.members.length;
                      this.members[index] = member;
                      return index;
                }
   
    this.toString = function() {
                        return this.members.join("\n");
                    }
 }

 

let Team = new team();

Team.add(new member(1,"Ahmed","A"))
Team.add(new member(2,"Ali","B"))
Team.add(new member(3,"Yassin","C"))
console.log(Team)
document.writeln(Team);