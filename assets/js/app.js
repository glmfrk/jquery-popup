$(document).ready(function() {

$('.popup').on("click", function (event) {
  event.preventDefault();
  $(this).hide();
  $('.divMount').addClass('transparent');
  $(".form-wrapper").css({'display': 'block'});

})
$('.timeBtn').on("click", function (event) {
  event.preventDefault();
  $('.divMount').removeClass('transparent');
  $(".form-wrapper").css({'display': 'none'});
  $('.popup').show();
})
$('.close').on("click", function (e) {
  e.preventDefault();
  $('.divMount').removeClass('transparent');
  $(".form-wrapper").css({'display': 'none'});
  $('.popup').show();
})
$('.save').on("click", function (e) {
  e.preventDefault()
 let confirmMassage = confirm("Successfully ...!!! Your Information Save .");
setTimeout(function () {
  if (confirmMassage === true) {
    $('.divMount').removeClass('transparent');
    $(".form-wrapper").css({'display': 'none'});
    $('.popup').show();
  }
  else{
    alert('Not Save Your Information...');
    $(".form-wrapper").css({'display': 'none'});
    $('.popup').show();
  }
}, 500);

  // let transparent = $(".divMount");
  // let popup = $(".popup");
  // let formWrapper = $(".form-wrapper");

  // $(transparent).on("click", function (params) {
  //   console.log(html);
  //   console.log(click);
  //   console.log(params);
  //   if (params.target == transparent && popup && formWrapper ) {
  //     transparent.removeClass('transparent');
  //     formWrapper.css({'display': 'none'});
  //     popup.show();
  //     $('.popup').show();

  //   }
  //   else{
  //     alert("Don't Click Wrong Side ...")
  //   }
  // })

})


});


    const transparent = document.querySelector('.divMount');
    const popup = document.querySelector('.popup');
    const dialogeBox = document.querySelector('.form-wrapper');
    transparent.addEventListener("click", function (params) {
      if (params.target == transparent && popup &&dialogeBox) {
        transparent.style.display = "none";
        popup.style.display = "block";
        dialogeBox.style.display = "none";
      }
    })
