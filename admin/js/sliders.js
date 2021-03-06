var Sliders = function () {

    // default sliders
    $("#default-slider").slider();

    // snap inc
    $("#snap-inc-slider").slider({
        value: 50,
        min: 0,
        max: 1000,
        step: 100,
        slide: function (event, ui) {
            $("#snap-inc-slider-amount").text("$" + ui.value);
        }
    });

    $("#snap-inc-slider-amount").text("$" + $("#snap-inc-slider").slider("value"));

    // range slider
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#slider-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    // range slider
    $("#slider-range-2").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#slider-range-2-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    // time slider
    $("#slider-time").slider({
        range: true,
        min: 1,
        max: 24,
        step: 1,
        values: [3, 12],
        slide: function (event, ui) {
            $("#slider-time-amount").text( ui.values[0] + " 个月 - " + ui.values[1] + " 个月 ");
        }
    });

    // time slider
    $("#slider-time-2").slider({
        range: true,
        min: 1,
        max: 24,
        step: 1,
        values: [3, 12],
        slide: function (event, ui) {
            $("#slider-time-2-amount").text( ui.values[0] + " 个月 - " + ui.values[1] + " 个月 ");
        }
    });

    // age slider
    $("#slider-age").slider({
        range: true,
        min: 18,
        max: 60,
        step: 1,
        values: [20, 40],
        slide: function (event, ui) {
            $("#slider-age-amount").text( ui.values[0] + " 岁 - " + ui.values[1] + " 岁 ");
        }
    });

    // public slider
    $("#slider-public").slider({
        range: true,
        min: 18,
        max: 60,
        step: 1,
        values: [20, 40],
        slide: function (event, ui) {
            $("#slider-public-amount").text( "$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    // private slider
    $("#slider-private").slider({
        range: true,
        min: 18,
        max: 60,
        step: 1,
        values: [20, 40],
        slide: function (event, ui) {
            $("#slider-private-amount").text( "$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#slider-range-amount").text("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    $("#slider-range-2-amount").text("$" + $("#slider-range-2").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    $("#slider-time-amount").text($("#slider-time").slider("values", 0) + " 个月 - " + $("#slider-range").slider("values", 1) + " 个月 ");
    $("#slider-time-2-amount").text($("#slider-time-2").slider("values", 0) + " 个月 - " + $("#slider-range").slider("values", 1) + " 个月 ");
    $("#slider-age-amount").text($("#slider-age").slider("values", 0) + " 岁 - " + $("#slider-range").slider("values", 1) + " 岁 ");
    $("#slider-public-amount").text("$" + $("#slider-public").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    $("#slider-private-amount").text("$" + $("#slider-private").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));


    //range max

    $("#slider-range-max").slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: function (event, ui) {
            $("#slider-range-max-amount").text(ui.value);
        }
    });

    $("#slider-range-max-amount").text($("#slider-range-max").slider("value"));

    // range min
    $("#slider-range-min").slider({
        range: "min",
        value: 37,
        min: 1,
        max: 700,
        slide: function (event, ui) {
            $("#slider-range-min-amount").text("$" + ui.value);
        }
    });

    $("#slider-range-min-amount").text("$" + $("#slider-range-min").slider("value"));

    //
    // setup graphic EQ
    $( "#eq > span" ).each(function() {
    // read initial values from markup and remove that
        var value = parseInt( $( this ).text(), 10 );
        $( this ).empty().slider({
            value: value,
            range: "min",
            animate: true,
            orientation: "vertical"
        });
    });

    // bound to select

    var select = $( "#minbeds" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
        min: 1,
        max: 6,
        range: "min",
        value: select[ 0 ].selectedIndex + 1,
        slide: function( event, ui ) {
            select[ 0 ].selectedIndex = ui.value - 1;
        }
    });
    $( "#minbeds" ).change(function() {
        slider.slider( "value", this.selectedIndex + 1 );
    });

    // vertical slider
    $("#slider-vertical").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: function (event, ui) {
            $("#slider-vertical-amount").text(ui.value);
        }
    });
    $("#slider-vertical-amount").text($("#slider-vertical").slider("value"));

    // vertical range sliders
    $("#slider-range-vertical").slider({
        orientation: "vertical",
        range: true,
        values: [17, 67],
        slide: function (event, ui) {
            $("#slider-range-vertical-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#slider-range-vertical-amount").text("$" + $("#slider-range-vertical").slider("values", 0) + " - $" + $("#slider-range-vertical").slider("values", 1));


}();