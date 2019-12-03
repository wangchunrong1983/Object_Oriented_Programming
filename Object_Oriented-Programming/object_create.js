// ES5 Object Of Protos

const bookProtos = {
    getSummary : function (){
    return `${this.title} was written by ${this.author} in ${this.year}`
    },
  
    getAge : function(){
    const years = new Date().getFullYear() - this.year
    return`${this.title} has been published over ${years} years since ${this.year}.`
    }
  }
  
  const book1 = Object.create (bookProtos)
  book1.title = "Book One"
  book1.author = "John Doe"
  book1.year = '2013'
  
  const mag1 = Object.create (bookProtos,{  
  title:{value:"Reader"},
  author:{value:"Will Smith"},
  year:{value:'2018'},
  month:{value: 'Jan'}
  })
  
  console.log(mag1)