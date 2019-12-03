//OBJECT LITERALS
const book1 = {
    title:'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
      return `${this.title} was written by ${this.author} in ${this.year}`
    }
  }
//   console.log(Object.keys(book1))
//   console.log(Object.values(book1))
  
  const book2 = {
    title:'Book Two',
    author: 'David Moe',
    year: '2016',
    getSummary: function(){
      return `${this.title} was written by ${this.author} in ${this.year}`
    }
  }
  console.log(Object.values(book2))







