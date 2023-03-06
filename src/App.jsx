import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './global.scss';
import { bookmarkOutline, heartOutline, homeOutline, personOutline } from 'ionicons/icons';
import { Account, Home, Liked, Saved } from './pages';
import { PostDataContextProvider } from './context/PostDataContext';

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <PostDataContextProvider>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path='/' to='/home' />
            <Route path='/home' render={() => <Home />} exact={true} />
            <Route path='/liked' render={() => <Liked />} exact={true} />
            <Route path='/saved' render={() => <Saved />} exact={true} />
            <Route path='/account' render={() => <Account />} exact={true} />
          </IonRouterOutlet>

          <IonTabBar slot='bottom'>
            <IonTabButton tab='home' href='/home'>
              <IonIcon icon={homeOutline} />
              <IonLabel>Trend</IonLabel>
            </IonTabButton>

            <IonTabButton tab='liked' href='/liked'>
              <IonIcon icon={heartOutline} />
              <IonLabel>Liked</IonLabel>
            </IonTabButton>

            <IonTabButton tab='saved' href='/saved'>
              <IonIcon icon={bookmarkOutline} />
              <IonLabel>Saved</IonLabel>
            </IonTabButton>

            <IonTabButton tab='account' href='/account'>
              <IonIcon icon={personOutline} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </PostDataContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
