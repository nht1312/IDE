let editor;
window.onload = function (){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
}

function changeLanguage(){
    let language = $("#languages").val();
    if (language == "javascript") editor.session.setMode("ace/mode/javascript");
    else if (language == "php") editor.session.setMode("ace/mode/php");
    else if (language == "python") editor.session.setMode("ace/mode/python");
    else if (language == "java") editor.session.setMode("ace/mode/java");
    else if (language == "node") editor.session.setMode("ace/mode/javascript");
}

function excuteCode() {
    $.ajax({
        url:"/ide/app/compiler.php",
        method:"POST",
        data:{
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },
        success: function (respon){
            $("output").text(respon)
        }
    })
}