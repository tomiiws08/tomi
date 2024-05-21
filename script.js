let post = document.getElementById("post1"); 
let postsBox = document.getElementById("allposts") 
 
let imgurls = [ 
    "photo_5348344335453773668_y.jpg", 
    "photo_5359408471855979995_x.jpg", 
    "photo_5359408471855979994_x.jpg", 
    "photo_5359408471855979992_x.jpg" 
] 
for(let i = 0; i < 100; i++){ 
    newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("postImg")[0] 
    imgpost.setAttribute("src", imgurls[i%4]) 
 
    postsBox.appendChild(newpost); 
}