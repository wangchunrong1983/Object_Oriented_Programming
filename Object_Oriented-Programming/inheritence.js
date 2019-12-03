function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
  }
    Book.prototype.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    };
  // const book1 = new Book("Book One","John Doe","2013")
  
  function Magazine(title,author,year,month){
    Book.call(this,title,author,year)
    this.month = month;
  }
    Magazine.prototype= Object.create(Book.prototype)
  
  const Mag1 = new Magazine('Reader', 'Will Smith', '2018','Jan')
  
  // //use Magazine constructor
  // Magazine.prototype.constructor=Magazine
  
  console.log(Mag1)
  