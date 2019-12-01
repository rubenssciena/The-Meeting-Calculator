import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import welcome from './pages/welcome';
import newmeeting from './pages/newmeeting';
import members from './pages/members';
import detail from './pages/detail';
import meeting from './pages/meeting';

const Routes = createAppContainer(
  createSwitchNavigator({
    welcome,
    newmeeting,
    members,
    detail,
    meeting,
  }),
);

export default Routes;
