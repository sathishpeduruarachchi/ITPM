import Button from 'react-bootstrap/Button';
import SignOut from '../subNav/signOut';
//import SideBar from '../sidebar/sidebar';
import SideBar from '../sidebar/sidebar';
function OutlineTypesExample() {
  return (
    <>
    <div>
        <SignOut/>
    </div>
    <div>
    <SideBar/>
    </div>
    {/* <div>
    <Button variant="outline-primary ms-5">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
    </div> */}
    </>
  );
}

export default OutlineTypesExample;
