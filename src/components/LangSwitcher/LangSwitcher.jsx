import React from 'react';
import PropTypes from 'prop-types';
import {Langs} from '../../constants/constants';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducers';


const LangSwitcher = (props) => {
  const {changeLang} = props;
  const handleLangChange = (e) => {
    const lang = e.currentTarget.id;
    console.log(lang);
    changeLang(lang);
  };

  return (
    <div className="social-icons">
      <ul className="list-unstyled text-center mb-0">
        {Object.keys(Langs).map((item, i) => {
          return (
            <li className="list-unstyled-item" key={i} id={item} onClick={handleLangChange} >
              <a>
                <p>{Langs[item]}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


LangSwitcher.propTypes = {
  changeLang: PropTypes.func,
};


export default connect(
    null,
    (dispatch) => ({
      changeLang: (lang) => dispatch(ActionCreator.changeLang(lang))
    })
)(LangSwitcher);
