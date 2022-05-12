import { getAuth } from 'firebase/auth';
import renderToDOM from '../helpers/renderToDom';

const signMeOut = () => {
  getAuth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  renderToDOM('#login-form-container', domString);

  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
