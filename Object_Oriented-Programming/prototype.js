// ES5 PROTOTYPE

function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
  
    Book.prototype.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    };
  
    Book.prototype.getAge = function(){
        const years = new Date().getFullYear() - this.year
        return`${this.title} has been published over ${years} years since ${this.year}.`
    };
  
    Book.prototype.revise = function(newYear){
         this.year = newYear
         this.revised = true
    }
  }
  
  const book1 = new Book("Book One","John Doe","2013")
  const book2 = new Book("Book Two","David Moe","2016")
  
  console.log(book2)
  book2.revise('2019')
  console.log(book2)