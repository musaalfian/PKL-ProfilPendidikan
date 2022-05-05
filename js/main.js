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
  $('#example').DataTable({
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

