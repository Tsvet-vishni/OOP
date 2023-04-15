class Language{
  #abstract = true
  examples = []

  constructor(name, popularity){
    this.name = name
    this.popularity = popularity
  }

  addExample(str) {
    this.examples.push(str)
  }

  getExample(index = 0){
    return this.examples[index]
  }

  countExamples(){
    return this.examples.length
  }
}

class ProgrammingLanguage extends Language{
  #paradigm = ''

  constructor(name, popularity, difficulty, author){
    super(name, popularity)
    this.difficulty = difficulty
    this.author = author
  }

  parse(code){
    if (this.parser) {
      return this.parser.process(code)
    } else {
      console.log('No parser provided')
    } 
  }

  useParser(parser){
    this.parser = parser
  }

  fillParadigm(str){
    this.#paradigm = str
  }
}


class MarkUpLanguage extends Language{
  #nested = true

  constructor(name, popularity, complexity, author){
    super(name, popularity)
    this.complexity = complexity
    this.author = author
  }

  parse(code){
    if (this.parser) {
      return this.parser.process(code)
    } else {
      console.log('No parser provided')
    } 
  }

  analyze(code){
    return 'Code is fine'
  }

  useParser(parser){
    this.parser = parser
  }
}

class SpeakingLanguage extends Language{
  #international = true  
  countries = []

  constructor(name, popularity, origin){
    super(name, popularity)
    this.origin = origin
  }

  addCountry(countryName){
    this.countries.push(countryName)
  }

  isPopular(){
    return this.popularity > 6
  }

  shiftPopurity(value){
    this.popularity += value
  }
}

class QueryLanguage extends Language{
  #databaseReady = false

  constructor(name, popularity, author){
    super(name, popularity)
    this.author = author
  }

  generateId(){
    return Math.random().toString().slice(2)+Date.now()
  }

  executeQuery(query){
    console.log('Query results are ...')
  }

  changeName(name){
    this.name = name 
  }
}