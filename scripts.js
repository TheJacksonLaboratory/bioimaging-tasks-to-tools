document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.clickable-callout').forEach(el => {
    el.addEventListener('click', () => {
      const url = el.getAttribute('data-href');
      if (url) {
        // If url starts with http://, https://, or /, use as-is
        if (/^(https?:\/\/|\/)/.test(url)) {
          window.location.href = url;
        } else {
          // Otherwise, treat as internal Quarto page and add .html
          window.location.href = url.replace(/\.md$/, '') + '.html';
        }
      }
    });
  });
});
