// JavaScript för att implementera kraven A-D.
$( document ).ready(function() {

    let posts = [];
    let comments = [];


    //Show blog posts

    function showPosts() {
        let listOfPosts = $("#listPosts");
        listOfPosts.empty();
        for (let post of posts) {
            let poster = $(`<div class="posts">
                <div class="blognumber">Blog post nr: ${post.id}</div>
                <div class="header">Heading: ${post.title}></div>
                <div>${post.body}</div>
                <div class="likes">${post.howManyLikes} have liked this post</div>
                <div id="shows"><button class="show">Comments</button></div>
            </div>`);
            $(poster).appendTo(listOfPosts);



            $( ".show" ).on( "click", function() {
                //let commenter = $(":contains('postId')");
               // let commenter = "span[commenter*='Id']"; Trying to target commenter.postId but failing
                let element = $( this );
                if ( element.is(post.id === commenter.postId)) {
                    showComments()
                }
            });

        }
    }
                   function showComments() {
                       let listOfComments = $("#listComments");
                       listOfComments.empty();
                       for ( let commenter of comments) {
                           let commentarer = $(`<div class="posts">
                       <div>Tillhör bloggpostnr: <span>${commenter.postId}</span></div>
                       <div>Name: ${commenter.name}></div>
                       <div>Email: ${commenter.email}</div>
                       <div>Comment: ${commenter.body}</div>
                   </div>`);
                           $(commentarer).appendTo(listOfComments);
               }
           }


   $.getJSON( "https://jsonplaceholder.typicode.com/comments", function( data ) {
        comments = data;

        //showComments(); //Shows all comments after every post
   });

    $.getJSON( "https://jsonplaceholder.typicode.com/posts", function( data ) {
        posts = data;

        for (let post of posts) {
            post.howManyLikes = Math.floor(Math.random() * 100);
        }

        showPosts();
    });

});