let description = document.getElementById("description")
let readed = document.getElementById("readed")
let tabela = document.getElementById("table")
let title = document.getElementById("title")
let author = document.getElementById("author")
let currentPages =  document.getElementById("currentPages")
let bookPages = document.getElementById("bookPages")



class Book{
    constructor(title,author,currentPages,bookPages) // class constructor
    {
        this.title=title                    //
        this.author=author
        this.currentPages=currentPages
        this.bookPages=bookPages
    } 
}


let books = []

function add()

{

    let Booktitle=title.value //Vlaue on title from input
    let Bookauthor=author.value //Vlaue on author from input
    let BookcurrentPages=currentPages.value //Vlaue on currentPages from input
    let BookbookPages=bookPages.value //Vlaue on bookPages from input

    let newbook = new Book(Booktitle,Bookauthor,BookcurrentPages,BookbookPages) // create new object
  
    books.push(newbook) // Added new object in books array


// Od  
    
    

    let progresVar = Math.floor(newbook.currentPages / newbook.bookPages*100); // 
    
    
    
    let tbody = document.getElementById('tbody')
    

    let newTr = document.createElement('tr')
        newTr.innerHTML = `
            <td class="myBorder">${newbook.title}</td>
            <td class="myBorder">${newbook.author}</td>
            <td class="myBorder">${newbook.currentPages}</td>
            <td class="myBorder">${newbook.bookPages}</td>
            <td class="myBorder">
                <div id="myprog">
                    <div id="mybar" style="width:${progresVar}%">${progresVar}%</div>
                </div>
            </td>`


    tbody.appendChild(newTr);


    description.innerHTML += `<ul><li>` + newbook.title + " by " + newbook.author + `</li></ul>
    `
 
    if (newbook.currentPages == 0 ){

        readed.innerHTML += `<ul><li><span style="color: red;">` +  "You still need to read " + newbook.title + " by " + newbook.author + `</span></li></ul>`
    }
    else
    {

        readed.innerHTML += `<ul><li><span style="color: green;">` +  "You still read " + newbook.title + " by " + newbook.author + `</span></li></ul>`
    };

}




let btn = document.getElementById("btn")
btn.addEventListener('click', add)
