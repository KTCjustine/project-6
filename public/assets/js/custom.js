let isPopupShowed = false;

document.addEventListener('mouseleave', function(evt) {
    // Check if the mouse leaves the window
    if (evt.clientY < 0 || evt.clientX < 0 || (evt.clientX >= window.innerWidth || evt.clientY >= window.innerHeight)) {
        var popupOverlay = document.getElementById('popup-overlay');
        if(popupOverlay.classList.contains('hidden-x')) {
            showPopup(false);
        }
    }
});

function showPopup(closeable) {
    var popupOverlay = document.getElementById('popup-overlay');

    // Set closeability
    if (closeable) {
        popupOverlay.addEventListener('click', closePopup);
    } else {
        popupOverlay.removeEventListener('click', closePopup);
    }

    // Show popup and disable background contents
    popupOverlay.classList.toggle('hidden-x');
    document.body.style.overflow = 'hidden'; // Disable scrolling

    isPopupShowed = true;

    var player = getPlayer()
    if(player._player) {
        player.pause()
    }
}

function closePopup() {
    var popupOverlay = document.getElementById('popup-overlay');

    // Hide popup and enable background contents
    popupOverlay.classList.toggle('hidden-x');
    document.body.style.overflow = 'auto'; // Enable scrolling
    isPopupShowed = false;

    var player = getPlayer()
    if(player._player) {
        player.play()
    }
}

function getPlayer() {
    var embeds = (window._vidalytics || {}).embeds || {}
    if (embeds['vidalytics_embed_RDxF4P5zt5DbVg68']) {
        return embeds['vidalytics_embed_RDxF4P5zt5DbVg68'].player || {}
    }

    return {}
}