$(document).ready(function () {
  $(".fav").on("click", function () {
    var button = $(this);
    button.css({
      "background-color": "purple",
      color: "white",
    });

    $(this).animate(
      {
        color: "white",
      },
      500
    );

    // favorite
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Telah ditambahkan ke favorit",
      showConfirmButton: false,
      timer: 1500, 
    }).then(function () {
      button.css({
        "background-color": "green",
        color: "white",
      });
    });
  });

  // pesan 
  $(".pesan").on("click", function () {
    Swal.fire({
      title: 'Anda yakin ingin melanjutkan pesanan?',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      icon: 'question'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'https://wa.me/+62895368488020?text=Hallo Kak, Saya Mau Pesan!';
      }
    });
  });
});
