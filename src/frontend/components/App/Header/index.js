import React from 'react';
import { IconButton } from 'react-toolbox/lib/button';
import $ from 'jquery';

class Header extends React.Component {

  componentDidMount = () => {
    $('.scroll-down__link').bind('click', function (e){
			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, 800);
			e.preventDefault();
		});
  };

  render () {
    return (
      <div className="header" >
        <div className="header__text">
          <h1 className="header__title">Trans Chords App</h1>
          <p className="header__subtitle">Приложение для транспонирования музыкальных аккордов</p>
        </div>
        <div className="scroll-down">
          <IconButton
            className="scroll-down__link"
            href="#input"
            icon='expand_more'
          />
        </div>
      </div>
    );
  }
}

export default Header;
