


function shiritori(){
    var my_shiritori={}
    my_shiritori.play=play                  //method to start the game tha takes a word as a parameters and check it is valid 
    my_shiritori.words=[]                   //array of words
    my_shiritori.restart=restart            //method to restart the gam
    return my_shiritori
}
var play=function(str){
    var l=this.words.length       
    if(str.length<5 || str[str.length-1].toUpperCase()==='N'){
        return alert("Game Over !.. You break the rules ... click to Restart to play again.")
    }
    if(l>9){
        return alert("Congratulation ..! You win ... If you want to continue restart the game.")
    }
    if (l===0){
        this.words.push(str)
        return this.words
    }for (var i=0;i<l;i++){
        if(this.words[i]===str){
           return alert("Game Over !.. You break the rules ... click to Restart to play again." )
            
        }
    }

    if(str[0].toLowerCase()===this.words[l-1][(this.words[l-1]).length-1].toLowerCase()){
            this.words.push(str)
            return this.words
        
    }else{
        return alert("Game Over !.. You break the rules ... click to Restart to play again.")
        
    }
}
var restart=function(){
    this.words=[]
    alert("game restarted")
}
// var context=this
var my_shiritori1=shiritori()
// my_shiritori1.play("hostess")
// my_shiritori1.play("stash")
// my_shiritori1.play("hostess")
// my_shiritori1.restart()

// console.log(my_shiritori1.words)
$(document).ready(function(){         //working with jquery here,after linked in the html file
    $('.start').click(function(){
        $('.rules').animate({        //the div of rules will be moved from the centre to the right of the page
            left:"980px"
        },2000)
        $('.restart').fadeIn()
        $('div.box').fadeIn(2000)    //the box will displayed in the web after 2 secondes
    })
    
    $('.submit').click(function(){
        $('#allresult').fadeIn()                      //the result will displayed in the page web
        my_shiritori1.play($('input').val())
        var index=my_shiritori1.words.length-1
        word=my_shiritori1.words[index]               
        $word=$('<ul><li></li></ul>')                 //the result of words will be in the list
        $word.text(word)
        $word.appendTo('#result')   
    })   
    $('.restart').click(function() {                 
            // location.reload();               //to restart the game or to reload the page web
            $('#allresult').fadeOut()           //now the result is display none with an opacity=0
            $('#result').text('')               //the text in the result will be empty to restart the game
            my_shiritori1.restart()
    });       

})
