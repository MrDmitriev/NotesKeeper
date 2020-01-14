/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

export const App = (props) => (
  <>
    <div className="overlay" />
    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src="../mp4/bg.mp4" type="video/mp4" />
      <track kind="captions" />
    </video>
    <div className="masthead">
      <div className="masthead-bg" />
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 my-auto">
            <div className="masthead-content text-white py-5 py-md-0">
              <h1 className="mb-3">Notes Keeper</h1>
              <p className="mb-5">
                <strong>Keep all your notes in one place</strong>
                <p>Create, edit and manage your notes easier </p>

              </p>
              <div className="input-group input-group-newsletter">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter note..."
                  aria-label="Enter note..."
                  aria-describedby="basic-addon"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="submit"
                  >Create note!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="social-icons">
      <ul className="list-unstyled text-center mb-0">
        <li className="list-unstyled-item">
          <a href="#">
            <p>RU</p>
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <p>CZ</p>
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <p>DE</p>
          </a>
        </li>
      </ul>
    </div>
  </>
);

App.propTypes = {

};

export default App;
