var url = window.location.href.substring(window.location.href.lastIndexOf('?') + 1)
var path = url.split("!")
var link = "./"+path[0]+"/"+path[1]+".json"

function Func() {
    fetch(link)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            document.getElementById("link-64953c91").innerText = data.title
            document.getElementById("article-summary").innerText = data.subtitle
            document.getElementById("subcaption").innerText = data.image.subtitle
            document.title = data.title
            document.getElementById("actualimg").setAttribute("srcset", data.image.src)


            document.getElementById("bodyps").innerText = data.body
        });
}
Func()
// document.getElementById("link-64953c91").innerText="hi"
// document.getElementById("article-summary").innerText="hi2"
// document.getElementById("subcaption").innerText="hi3"

// document.getElementById("actualimg").setAttribute("srcset","./image.jpeg")


// document.getElementById("bodyps").innerText=`
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel imperdiet turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus accumsan tristique maximus. Vestibulum id est mollis, euismod eros scelerisque, feugiat sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec gravida tempor lacus id aliquam. Curabitur tincidunt elementum nibh ac fringilla. Sed maximus elit at diam maximus, sit amet rhoncus massa iaculis. Proin porttitor purus ipsum, non blandit mauris convallis et. Praesent tempus in mauris a rutrum. Praesent malesuada nisl tincidunt, posuere nisl eget, luctus justo. Donec id sagittis nulla. Etiam eu risus gravida, dignissim dolor nec, rhoncus velit.

// Nulla volutpat est at urna placerat, vel faucibus ligula aliquet. Donec scelerisque ut arcu sed tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sed risus ut diam suscipit pellentesque id scelerisque magna. Donec turpis est, semper eget mi non, tincidunt maximus ex. Aenean ac eleifend tellus. Suspendisse potenti. Maecenas sagittis magna lectus, vel lacinia mauris varius lacinia. Donec pharetra porttitor ultrices.

// Phasellus congue porta sem non feugiat. Etiam dignissim congue enim vel facilisis. Praesent finibus, eros ut consequat sodales, dui tellus volutpat nulla, id elementum nisl purus congue ex. Aliquam eros lorem, tempor in mauris rutrum, tincidunt rutrum risus. Etiam mollis massa quam, sit amet sagittis tellus facilisis ac. Morbi vitae vulputate libero. Vivamus in vehicula felis. Aliquam ante sapien, cursus in lorem in, placerat semper lacus. Pellentesque ultricies urna at nisl vulputate tristique. Proin vestibulum metus sed fermentum finibus. Aliquam tincidunt sodales ipsum nec faucibus.

// Etiam vel felis id augue dignissim aliquam sed quis magna. Praesent tristique finibus mi, in venenatis arcu. Donec ac mi vel ipsum tincidunt sollicitudin. Phasellus lobortis nibh lacus, a lacinia leo euismod vel. Donec tristique, nibh ut imperdiet accumsan, justo nisi semper arcu, sed dapibus nibh nisi ut magna. Sed consequat pharetra ante, nec tincidunt augue cursus vel. Donec quam tortor, ornare a convallis id, mattis a risus. Maecenas at libero nec nisi luctus semper at at nibh. Duis pulvinar vestibulum ligula, ut sodales sem varius sit amet.

// Integer urna leo, eleifend vel consequat in, laoreet ac dui. Curabitur nec neque accumsan, aliquam leo non, volutpat massa. Donec vitae tellus id augue viverra tempor. Sed non purus sit amet dui varius dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel odio non nisi hendrerit suscipit vel a tellus. Duis at purus non urna efficitur congue venenatis non diam."
// `
