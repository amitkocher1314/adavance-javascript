class student{
    constructor(name,age,marks){
        this.name = name;
        this.age =age;
        this.marks = marks;
    }
     minplacementage(minage){
    //return function minmarksu(minmarks) {   // TypeError: Cannot read properties of undefined (reading 'marks')
       return (minmarks) =>{  
       if(this.marks>minmarks && this.age>minage){
                console.log(this.name + "is elgible for placement")
            }
            else
            {
                console.log(this.name + "is not elgible for placement")
            }
        }
    }
}
let amit = new student('amit',25,54);
let simran = new student('simran kocher',16,30)
amit.minplacementage(18)(40);
simran.minplacementage(25)(29);