$ (function () {
    $("#toggler").blur (function (event) {
        var width = window.innerWidth;
        if (width<720) {
            $("#collapsenavbar").collapse('hide');
        }
    });
});
