if(matchMedia("(max-width:700px)").matches){
    var $menu = document.getElementById("menu");
    var $mostrar = document.getElementById("btn-menu-mostrar");
    var $esconder = document.getElementById("btn-menu-esconder");

    function mostrarMenu() {
        $menu.style.display="block",
        $mostrar.style.display="none",
        $esconder.style.display="block"
    }
    function esconderMenu() {
            $menu.style.display="none",
            $mostrar.style.display="block",
            $esconder.style.display="none"
    }
    }
    