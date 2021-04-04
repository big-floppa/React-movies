import React from 'react';

const Footer = () => {
  return (
    <footer class="page-footer blue lighten-1">
      <div class="footer-copyright">
        <div class="container">
          © {new Date().getFullYear} Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
