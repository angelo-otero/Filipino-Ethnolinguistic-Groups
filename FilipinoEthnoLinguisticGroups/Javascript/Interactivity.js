$(document).ready(() => {
  const $imageTitle = $('.image-title');

  const $navMenuButton = $('.menu-button');
  const $subMenuButton = $('.sub-menu-button');
  const $imageContainer = $('.image-container');


  $navMenuButton.on('mouseenter', event => {
    $(event.currentTarget).addClass('highlighted')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('highlighted')
  })

  $navMenuButton.on('mouseenter', event => {
    $(event.currentTarget).find('ul').show()
  }).on('mouseleave', event => {
    $(event.currentTarget).find('ul').hide()
  })

  $imageContainer.on('mouseenter', event => {
    $(event.currentTarget).find('img').addClass('highlighted-image')
  }).on('mouseleave', event => {
    $(event.currentTarget).find('img').removeClass('highlighted-image');
  })

  $imageContainer.on('click', event => {
    $(event.currentTarget).find('.image-title').show(),
    $(event.currentTarget).find('.source').show()
  })

  $subMenuButton.on('mouseenter', event => {
    $(event.currentTarget).find('a').addClass('highlighted-submenu')
  }).on('mouseleave', event => {
    $(event.currentTarget).find('a').removeClass('highlighted-submenu')
  })



});
