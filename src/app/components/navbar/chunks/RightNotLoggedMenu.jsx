import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

import getLang from '../../../utils/languages';

class RightNotLoggedMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      sign_in: 'Sign in',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lang !== nextProps.lang) {
      axios.get(`/api/translations/package?lang=${nextProps.lang}&code=["sign_in"]`)
        .then((response) => {
          this.setState({
            sign_in: response.data.data[0],
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link>Forum</Link></li>
        <li className="dropdown">
          <a
            href=""
            className="dropdown-toggle"
            type="button" id="dropdownMenu1" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="true"
          >
            {getLang(this.props.lang)}
            <span className="caret" />
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><Link onClick={this.props.toEnglish} to="">English</Link></li>
            <li><Link onClick={this.props.toNovoslovnica} to="">Новословница</Link></li>
            <li><Link onClick={this.props.toInterslavic} to="">Interslavic</Link></li>
          </ul>
        </li>
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/signin">{this.state.sign_in}</Link></li>
      </ul>
    );
  }
}

RightNotLoggedMenu.propTypes = {
  lang: React.PropTypes.string.isRequired,
  toEnglish: React.PropTypes.func.isRequired,
  toNovoslovnica: React.PropTypes.func.isRequired,
  toInterslavic: React.PropTypes.func.isRequired,
};

export default RightNotLoggedMenu;
