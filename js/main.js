// Sekolah dasar
// Data sekolah
$(document).ready( function () {
    $('#table_id1').DataTable({
        pageLength: 5,
        language: {
            info: "Menampilkan _END_ dari _TOTAL_ baris",
            infoEmpty: "Menampilkan 0 sampai 0 of 0 baris",
            infoFiltered: "(filtered from MAX total entries)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Menampilkan _MENU_ baris",
            loadingRecords: "Loading...",
            processing: "Memproses...",
            search: "Cari:",
            zeroRecords: "Tidak ada data yang ditemukan",
            paginate: {
              first: "First",
              last: "Last",
              next: "Selanjutnya",
              previous: "Sebelumnya",
            },
          },
    });
} );
// End data sekolah

// Data tenaga pendidik
$(document).ready( function () {
    $('#table_id2').DataTable({
        pageLength: 5,
        language: {
            info: "Menampilkan _END_ dari _TOTAL_ baris",
            infoEmpty: "Menampilkan 0 sampai 0 of 0 baris",
            infoFiltered: "(filtered from MAX total entries)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Menampilkan _MENU_ baris",
            loadingRecords: "Loading...",
            processing: "Memproses...",
            search: "Cari:",
            zeroRecords: "Tidak ada data yang ditemukan",
            paginate: {
              first: "First",
              last: "Last",
              next: "Selanjutnya",
              previous: "Sebelumnya",
            },
          },
    });
} );
// End data tenaga pendidik
// End sekolah dasar

// Admin
// Data sekolah dasar - sekolah
$(document).ready( function () {
  $('#table_id3').DataTable({
      pageLength: 5,
      language: {
          info: "Menampilkan _END_ dari _TOTAL_ baris",
          infoEmpty: "Menampilkan 0 sampai 0 of 0 baris",
          infoFiltered: "(filtered from MAX total entries)",
          infoPostFix: "",
          thousands: ",",
          lengthMenu: "Menampilkan _MENU_ baris",
          loadingRecords: "Loading...",
          processing: "Memproses...",
          search: "Cari:",
          zeroRecords: "Tidak ada data yang ditemukan",
          paginate: {
            first: "First",
            last: "Last",
            next: "Selanjutnya",
            previous: "Sebelumnya",
          },
        },
  });
} );
// End sekolah dasar - sekolah
// End admin

// Counter
// const counters = document.querySelectorAll('.counter');
// const speed = 200; // The lower the slower

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = target / speed;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = count + inc;
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};

// 	updateCount();
// });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Admin
/*********  Navbar  **********/
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};
// active pendaftar
$(document).ready(function () {
  if (document.title == "Beasiswa Batang | Beranda") {
    $("#nav__beranda").addClass("active");
    console.log("beranda");
  } else if (document.title == "Beasiswa Batang | Informasi") {
    $("#nav__informasi").addClass("active");
  } else if (document.title == "Beasiswa Batang | Daftar Beasiswa") {
    $("#nav__beasiswa").addClass("active");
  } else if (document.title == "Beasiswa Batang | Pengumuman Beasiswa") {
    $("#nav__beasiswa").addClass("active");
  }
});

/*** ADMIN ***/

// active admin
$(document).ready(function () {
  if (document.title == "Beasiswa Batang | Dashboard Admin") {
    $(".admin__dashboard").addClass("active-menu");
  } else if (document.title == "Beasiswa Batang | Data Pendaftar") {
    $(".admin_pendaftaran").addClass("active-menu");
  } else if (document.title == "Beasiswa Batang | Data Penerima") {
    $(".admin_penerima").addClass("active-menu");
  }
});

//Datatables
$(document).ready(function () {
  // Add Row
  $("#table_data_pendaftaran").DataTable({
    pageLength: 5,
    language: {
      info: "Menampilkan _END_ dari _TOTAL_ baris",
      infoEmpty: "Menampilkan 0 sampai 0 of 0 baris",
      infoFiltered: "(filtered from _MAX_ total entries)",
      infoPostFix: "",
      thousands: ",",
      lengthMenu: "Menampilkan _MENU_ baris",
      loadingRecords: "Tunggu...",
      processing: "Memproses...",
      search: "Cari:",
      zeroRecords: "Tidak ada data yang ditemukan",
      paginate: {
        first: "Pertama",
        last: "Terakhir",
        next: "Selanjutnya",
        previous: "Sebelumnya",
      },
    },
  });
});

/*** Form lampiran ***/
// kategori
for (let index = 1; index <= 3; index++) {
  $("#kategori_" + index).change(function () {
    console.log("ksdsko");
    if (
      $(this).val() == "hafidz" ||
      $(this).val() == "KHS" ||
      $(this).val() == "ujian sekolah"
    ) {
      $("#tingkat_" + index).prop("disabled", true);
      $("#juara_" + index).prop("disabled", true);
    } else {
      $("#tingkat_" + index).prop("disabled", false);
      $("#juara_" + index).prop("disabled", false);
    }
  });
}
// <!-- script tambah prestasi -->
$(document).ready(function () {
  $("#prestasi_2").hide();
  $("#prestasi_2_modal").hide();
  $("#prestasi_3").hide();
  $("#prestasi_3_modal").hide();
});
function tambah_prestasi_2() {
  $("#prestasi_2").show();
  // $("#prestasi_2_modal").show();
  $("#icon-tambah-1").hide();
  $("#label-tambah-1").hide();
}

function tambah_prestasi_3() {
  $("#prestasi_3").show();
  // $("#prestasi_3_modal").show();
  $("#icon-tambah-2").hide();
  $("#label-tambah-2").hide();
}
// edit prestasi
$(document).ready(function () {
  for (let index = 1; index <= 3; index++) {
    if (
      $("#kategori_" + index).val() == "hafidz" ||
      $("#kategori_" + index).val() == "ujian sekolah" ||
      $("#kategori_" + index).val() == "KHS"
    ) {
      // $("#scan_prestasi_" + index).prop("disabled", true);
      $("#tingkat_" + index).prop("disabled", true);
      $("#juara_" + index).prop("disabled", true);
    } else {
      // $("#scan_prestasi_" + index).prop("disabled", false);
      $("#tingkat_" + index).prop("disabled", false);
      $("#juara_" + index).prop("disabled", false);
    }
  }
});
// prestasi
$(document).ready(function () {
  for (let index_prestasi = 1; index_prestasi <= 3; index_prestasi++) {
    $("#scan_prestasi_" + index_prestasi).change(function (e) {
      var file = e.target.files[0].name;
      console.log(file);
      $("label[for='scan_prestasi_" + index_prestasi + "']").empty();
      $("label[for='scan_prestasi_" + index_prestasi + "']").append(
        '<a class="btn btn-secondary">Pilih File</a>'
      );
      $("label[for='scan_prestasi_" + index_prestasi + "']").append(file);
    });
  }
});
const scan = [
  "scan_kk",
  "scan_ktp",
  "scan_kartu_pelajar",
  "scan_sktm",
  "scan_raport_smt",
  "scan_raport",
  "scan_pas_foto",
  "scan_proposal",
  "scan_diterima_pt",
  "scan_akreditasi_pt",
];
// scan lampiran
$(document).ready(function () {
  scan.forEach((file_scan) => {
    $("#" + file_scan).change(function (e) {
      var file = e.target.files[0].name;
      $("label[for='" + file_scan + "']").empty();
      $("label[for='" + file_scan + "']").append(
        '<a class="btn btn-secondary">Pilih File</a>'
      );
      $("label[for='" + file_scan + "']").append(file);
    });
  });
});

// Ajax Tabs
$('[data-toggle="tabajax"]').click(function(e) {
  var $this = $(this),
      loadurl = $this.attr('href'),
      targ = $this.attr('data-target');

  $.get(loadurl, function(data) {
      $(targ).html(data);
  });

  $this.tab('show');
  return false;
});

// click 1
(function($) {
  'use strict';
  $(function() {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.mdc-drawer-menu');

    // Menu Toggle Function
    var drawerEl = document.querySelector('.mdc-persistent-drawer');
    var MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
    var drawer = new MDCPersistentDrawer(drawerEl);
    document.querySelector('.menu-toggler').addEventListener('click', function() {
      drawer.open = !drawer.open;
    });

    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required
    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.mdc-drawer-item .mdc-drawer-link', sidebar).each(function() {
      var $this = $(this);
      if (current === "") {
        //for root url
        if ($this.attr('href').indexOf("index.html") !== -1) {
          $(this).addClass('active');
          if ($(this).parents('.mdc-expansion-panel').length) {
            $(this).closest('.mdc-expansion-panel').addClass('expanded');
          }
        }
      } else {
        //for other url
        if ($this.attr('href').indexOf(current) !== -1) {
          $(this).addClass('active');
          if ($(this).parents('.mdc-expansion-panel').length) {
            $(this).closest('.mdc-expansion-panel').addClass('expanded');
          }
        }
      }
    })

    $(".mdc-toolbar__menu-icon").on("click", function(){
      $(".body-wrapper .page-wrapper .content-wrapper").toggleClass("drawer-minimized");
    });
  });
})(jQuery);

// click 2
(function($) {
  'use strict';
  $(function() {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.mdc-drawer-menu');

    // Menu Toggle Function
    var drawerEl = document.querySelector('.mdc-persistent-drawer');
    var MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
    var drawer = new MDCPersistentDrawer(drawerEl);
    document.querySelector('.menu-toggler').addEventListener('click', function() {
      drawer.open = !drawer.open;
    });

    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required
    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.mdc-drawer-item .mdc-drawer-link', sidebar).each(function() {
      var $this = $(this);
      if (current === "") {
        //for root url
        if ($this.attr('href').indexOf("index.html") !== -1) {
          $(this).addClass('active');
          if ($(this).parents('.mdc-expansion-panel').length) {
            $(this).closest('.mdc-expansion-panel').addClass('expanded');
          }
        }
      } else {
        //for other url
        if ($this.attr('href').indexOf(current) !== -1) {
          $(this).addClass('active');
          if ($(this).parents('.mdc-expansion-panel').length) {
            $(this).closest('.mdc-expansion-panel').addClass('expanded');
          }
        }
      }
    })

    $(".mdc-toolbar__menu-icon").on("click", function(){
      $(".body-wrapper .page-wrapper .content-wrapper").toggleClass("drawer-minimized");
    });
  });
})(jQuery);