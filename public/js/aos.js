AOS.init({
    disable: function () {
      // Nonaktifkan AOS jika lebar layar kurang dari 1024px
      return window.innerWidth < 1024;
    }
  });