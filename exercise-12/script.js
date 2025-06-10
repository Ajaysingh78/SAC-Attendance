function func(title, cName, views, monthsold, duration, thumbnel) {
    let vnumber

    if (views < 1000000) {
        vnumber = views / 1000 + "k";
    }
    else if (views > 1000000) {
        vnumber = views / 1000000 + "M";
    }
    else {
        vnumber = views / 1000000 + "M";

    }
    let html = ` <div class="card">
            <div class="image">
                <img src="${thumbnel}" alt="thumbnul" width="300px" >
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title} 2</h1>
                <p>${cName} . ${vnumber} views .${monthsold} months ago</p>
            </div>
        </div>`



}
document.querySelector("container").innerHTML = document.querySelector("container").innerHTML + html;
func("introduction to webdevelopment ", "CodeWithHarry", 7, "31:06", "image.jpg");
