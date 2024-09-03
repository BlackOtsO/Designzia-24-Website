$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.main_nav-bar').css('background', 'linear-gradient(90deg, rgba(253,3,233,1) 0%, rgba(9,9,121,1) 49%, rgba(0,0,0,1) 100%)');
    } else {
        $('.main_nav-bar').css('background', 'transparent');
    }
});
// NAVBAR ACTIVE LINK SWICTHING
document.getElementById("HME").addEventListener("click", function () {
    document.getElementById("HME").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("ABT").addEventListener("click", function () {
    document.getElementById("ABT").classList.add("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SCH").addEventListener("click", function () {
    document.getElementById("SCH").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
/*document.getElementById("SPK").addEventListener("click", function () {
    document.getElementById("SPK").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});*/
document.getElementById("PRC").addEventListener("click", function () {
    document.getElementById("PRC").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
/*document.getElementById("SPN").addEventListener("click", function () {
    document.getElementById("SPN").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});*/
document.getElementById("CNT").addEventListener("click", function () {
    document.getElementById("CNT").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
});
$('.custom-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});

document.getElementById("btn-2").addEventListener("click", function () {
    document.getElementById("sch_date").innerHTML = "April 24, 2024";
    document.getElementById("btn-2").classList.add("active_schedule_btn");
  
    document.getElementById("btn-3").classList.remove("active_schedule_btn");
  
    document.getElementById("acc-title-1").innerHTML = "Byte Battle";
    document.getElementById("acc-title-2").innerHTML = "<strong></strong>";
    document.getElementById("acc-title-3").innerHTML = "DATA MINING & DRILLING NUMPY";
    document.getElementById("acc-title-4").innerHTML = "<strong>William Lin</strong> - Freshman, MIT";
    document.getElementById("acc-title-5").innerHTML = "CATERED LUNCH BUFFET";
    document.getElementById("acc-title-6").innerHTML = "<strong>Sponsored</strong> - AirTM, PayPal, TechGeek";
   
});

document.getElementById("btn-3").addEventListener("click", function () {
    document.getElementById("sch_date").innerHTML = "April 25, 2024";
    document.getElementById("btn-3").classList.add("active_schedule_btn");
    document.getElementById("btn-2").classList.remove("active_schedule_btn");
    document.getElementById("acc-title-1").innerHTML = "AR VR WORKSHOP";
   document.getElementById("acc-title-2").innerHTML = "<strong></strong> - about";
    document.getElementById("acc-title-3").innerHTML = "";
    document.getElementById("acc-title-4").innerHTML = "<strong></strong>";
    document.getElementById("acc-title-5").innerHTML = "";
    document.getElementById("acc-title-6").innerHTML = "<strong></strong>";
    
});

// fakeloader initialization
$(document).ready(function () {
    $.fakeLoader({
        timeToHide: 5000,
        bgColor: "rgb(27, 208, 126)",
        spinner: "spinner4"
    });
});
// Google Map API
let map;

/*function initMap() {
    var location = {
        lat: 11.312996,
        lng: 77.550377
    };
    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12
    });
    /*
    
    *//*
    addMarker({
        coordinates: {
            lat:11.312996,
            lng: 77.550377
        },
        content: '<h6>B</h6>'
    });
   
    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: map
        });
        if (properties.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: properties.content
            });
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            })
        }
    }
}*/
// $(function () {
//     $("html").niceScroll();
// });
// $("html").niceScroll({
//     cursorcolor: "#1bce7c", // change cursor color in hex
//     cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
//     cursorborder: "1px solid #1bce7c", // css definition for cursor border
//     cursorborderradius: "6px", // border radius in pixel for cursor
//     scrollspeed: 35, // scrolling speed
//     mousescrollstep: 25, // scrolling speed with mouse wheel (pixel)
// });
// Newsletter POP UP
$(document).ready(function () {
    setTimeout(function () {
        $('#myModal').modal('show');
    }, 20000);
});
$("#closebtn").click(function(){
    $('.modal-backdrop').remove();
});
$("#closebutton").click(function(){
    $('.modal-backdrop').remove();
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
});
