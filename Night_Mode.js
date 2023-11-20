function setBodyThemeClass(theme) {
    document.body.className = document.body.className.replace(/theme-(default|night)/g, '');
    document.body.className += ' theme-' + theme;
  }
setBodyThemeClass('night');
