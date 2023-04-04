$("document").ready(function(){

    const url = new URL(location.href).searchParams;
    const language = url.get("lang");

    const en_nav = new Array("Profile", "Web Publishing", "Design", "Experience", "Contact")
    const Main_typed = new Array("Growing Web Designer &amp; Web Publisher This is <em>Choi Bo-Yoen</em> Click the button below to view the next page");
    const Main_btn = new Array("Profile")

    const lang_chk = localStorage.getItem("language");

    if(lang_chk == "en" || language == "en"){
        $("#typed p").html(Main_typed[0]);
        $(".type a").text(Main_btn[0])
        for(let i = 0; i < en_nav.length; i++){
            $(".header .nav ul li a").eq(i).text(en_nav[i])
        }
    }

})