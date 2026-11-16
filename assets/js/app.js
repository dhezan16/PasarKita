/* PasarKita - interaksi ringan sisi klien.
 * Catatan: semua validasi penting tetap dilakukan di server. */
document.addEventListener('DOMContentLoaded', function () {
    // Konfirmasi sebelum aksi berbahaya (hapus produk, hapus item keranjang, dsb.)
    document.querySelectorAll('form[data-confirm]').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            if (!window.confirm(form.getAttribute('data-confirm'))) {
                e.preventDefault();
            }
        });
    });

    // Tombol +/- jumlah produk
    document.querySelectorAll('[data-qty-step]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var input = document.getElementById(btn.getAttribute('data-target'));
            if (!input) return;
            var step = parseInt(btn.getAttribute('data-qty-step'), 10);
            var min = parseInt(input.min || '1', 10);
            var max = parseInt(input.max || '999', 10);
            var val = (parseInt(input.value, 10) || min) + step;
            input.value = Math.min(Math.max(val, min), max);
            if (input.hasAttribute('data-autosubmit')) {
                input.form.submit();
            }
        });
    });

    // Kirim otomatis form jumlah keranjang ketika nilai diubah manual
    document.querySelectorAll('input[data-autosubmit]').forEach(function (input) {
        input.addEventListener('change', function () { input.form.submit(); });
    });

    // Pratinjau gambar sebelum upload (form admin produk)
    var fileInput = document.getElementById('image');
    var preview = document.getElementById('image-preview');
    if (fileInput && preview) {
        fileInput.addEventListener('change', function () {
            var file = fileInput.files && fileInput.files[0];
            if (!file) return;
            if (file.size > 2 * 1024 * 1024) {
                alert('Ukuran gambar maksimal 2 MB.');
                fileInput.value = '';
                return;
            }
            preview.src = URL.createObjectURL(file);
        });
    }

    // Validasi form Bootstrap (tampilan saja)
    document.querySelectorAll('form.needs-validation').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
});
