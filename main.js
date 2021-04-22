document.addEventListener("change", upload);
function upload() {
    let main = document.getElementById('main');
    main.innerHTML = '';

    var input = document.getElementById("upload");
    var str = input.value.split(".");
    console.log(input);
    var file = new FileReader();
    var last = str[str.length - 1];
    if (last == 'mp4') {
        let v = document.createElement('video');
        v.controls = true;
        file.readAsDataURL(input.files[0]);

        file.onload = function (e) {
            v.src = e.target.result;

            main.appendChild(v);
        }
    } else if (last == 'jpg') {
        let m = document.createElement('img');

        file.readAsDataURL(input.files[0]);
        file.onload = function (e) {
            m.src = e.target.result;

            main.appendChild(m);
        }
    } else if (last == 'mp3') {

        var button1 = document.createElement("button");
        button1.innerHTML = "play";
        var button = document.createElement("button");
        button.innerHTML = "pause";
        
        file.readAsDataURL(input.files[0]);
        file.onload = function (e) {
            var x = new Audio(e.target.result);
            button1.addEventListener("click", function () { x.play(); });
            button.addEventListener("click", function () { x.pause(); });
            
            main.appendChild(button1);
            main.appendChild(button);
        }
    }
}