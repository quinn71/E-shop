window.addEventListener("load", function () {

    var photos = document.getElementsByClassName("photo");
    var thumbnailsOuter = document.getElementsByClassName("thumbnails-outer");

    for(var i = 0; i < photos.length; i++) {
        var photo = photos[i];
        photo.counter = i;
        photo.addEventListener("click", function () {
            var photosOuter = document.getElementsByClassName("photos-outer")[0];
            var thumbnailsOuter = document.getElementsByClassName("thumbnails-outer")[0];
            var thumbnails = document.getElementsByClassName("photo-thumbnail");
            var oldMainPhoto = document.getElementsByClassName("photo-main")[0];


            oldMainPhoto.classList.remove("photo-main");
            oldMainPhoto.classList.add("photo-thumbnail");

            var newMainPhoto = this.cloneNode(true);

            newMainPhoto.classList.add("photo-main");
            newMainPhoto.classList.remove("photo-thumbnail");

            photosOuter.removeChild(oldMainPhoto);
            photosOuter.insertBefore(newMainPhoto, thumbnailsOuter);

        });
    }
});