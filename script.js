var compteur = 0
const J1 = "X"
const J2 = "O"
let joueur

$(".cell").click(function(){ 
    if(!$(this).hasClass("locked")){
        compteur++ ;
        $(this).addClass("locked");
        $(this).unbind("click");
        if(compteur%2 == 0){
            joueur = J2
        }
        else{
            joueur = J1
        } 
        $(this).html(joueur);
        console.log(joueur)
        console.log($(this).text())

        //Vérif row

        if (joueur == $("#1-1").html() && $("#1-1").html() == $("#1-2").html() && $("#1-2").html() == $("#1-3").html()) {
            $(".message").addClass("won");
                
        }
        if (joueur == $("#2-1").html() && $("#2-1").html() == $("#2-2").html() && $("#2-2").html() == $("#2-3").html()) {
            $(".message").addClass("won");
                
        }
        if (joueur == $("#3-1").html() && $("#3-1").html() == $("#3-2").html() && $("#3-2").html() == $("#3-3").html()) {
            $(".message").addClass("won");
                
        }

        // Vérif diagonale

        if (joueur == $("#1-1").html() && $("#1-1").html() == $("#2-2").html() && $("#2-2").html() == $("#3-3").html()) {
            $(".message").addClass("won");
                
        }
        if (joueur == $("#1-3").html() && $("#1-3").html() == $("#2-2").html() && $("#2-2").html() == $("#3-1").html()) {
            $(".message").addClass("won");
                
        }
        if (joueur == $("#1-1").html() && $("#1-1").html() == $("#2-2").html() && $("#2-2").html() == $("#3-3").html()) {
            $(".message").addClass("won");
                
        }

        // Vérif column

        if (joueur == $("#1-1").html() && $("#1-1").html() == $("#2-1").html() && $("#2-1").html() == $("#3-1").html()) {
            $(".message").addClass("won");
                
        }
        if (joueur == $("#1-2").html() && $("#1-2").html() == $("#2-2").html() && $("#2-2").html() == $("#3-2").html()) {
            $(".message").addClass("won");
                
        }
        if (joueur == $("#1-3").html() && $("#1-3").html() == $("#2-3").html() && $("#2-3").html() == $("#3-3").html()) {
            $(".message").addClass("won"); 
        }

    }
})

$(".buttonreplay").click(function(){
    location.reload()
})




