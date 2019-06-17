paper.install(window);

window.onload = function () {
    paper.setup('canvas');

    var tool = new Tool();
    var path;

    tool.onMouseDown = function(event) {
        console.log("Hi!");
        path = new Path();
        path.strokeColor = 'black';
        path.add(event.point);
    };
};


$('#file-input').on("change", function() {
    // Create image
    var image = new Image();

    // Setup call backs
    image.onload = draw_image

    // Create source object
    image.src = URL.createObjectURL(this.files[0])

    // Change status
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

function draw_image() {
    // Get canvas
    var canvasJquery = $('#canvas')
    var canvas = document.getElementById('canvas');

    // Get sizes
    img_width = this.width;
    img_height = this.height;

    scr_width = canvasJquery.width();
    scr_height = canvasJquery.height();

    // Set re-size image ratios
    width_ratio = scr_width / img_width;
    height_ratio = scr_height / img_height;

    console.log([width_ratio, height_ratio]);

    ratio = Math.min.apply(Math, [width_ratio, height_ratio]);

    //console.log(ratio);

    final_width = Math.floor(img_width * height_ratio);
    final_height = Math.floor(img_height * height_ratio);

    console.log([
        img_width,
        img_height,
        scr_width,
        scr_height,
        final_width,
        final_height
    ]);

    // Re-size canvas
    canvas.width = final_width;
    canvas.height = final_height;

    // Draw the image into the Canvas
    var context = canvas.getContext('2d');
    context.drawImage(this, 0, 0, final_height, final_width);
}
