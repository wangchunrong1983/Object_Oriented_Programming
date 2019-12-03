// ES6 CLASS

class Book {
    constructor(title,author,year){
      this.title = title;
      this.author = author;
      this.year = year;
    }
     getSummary(){
     return `${this.title} was written by ${this.author} in ${this.year}`
     }
  
     getAge(){
     const years = new Date().getFullYear() - this.year
     return`${this.title} has been published over ${years} years since ${this.year}.`
     }
  
     revise(newYear){
     this.year = newYear
     this.revised = true
     }
  
     static topBookStore(){
       return 'Barnes & Noble'
     }
  }
  const book1 = new Book('Book One','John Doe','2013')
  
  
  book1.revise('2019')
  console.log(Object.values(book1))
  
  // console.log(Book.topBookStore())