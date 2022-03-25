import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

//import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import reducers, { namespace } from './states';
import BrandSelectorContainer from "./components/BrandSelector/BrandSelector.Container";

const PLUGIN_NAME = 'OutboundBrandPlugin';

export default class OutboundBrandPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    this.registerReducers(manager);
    // flex.AgentDesktopView.Panel1.Content.add(<OutboundCallerContainer key="Test1234111211" />)
    flex.OutboundDialerPanel.Content.add(
      <BrandSelectorContainer key="number-selector" />,
      { sortOrder: 1 }
    );
     // replace -> can only do in one plugin
     // listener to start beforeStartOutbound

    flex.Actions.replaceAction("StartOutboundCall", (payload, original) => {

      // if no brand is called

      // console.log('Cheryluy9898',payload);

      return new Promise((resolve, reject) => {
        if (payload.callerId) {
          resolve(payload.callerId);
          return;
        }
      
        if (!manager.store.getState()["outbound-brand"].BrandSelector.isConfirmed){
          this.dispatch(Actions.setToNumber(payload.destination));
          reject("CallerId not confirmed, will show interface");
        }
        resolve(
          manager.store.getState()["outbound-brand"].BrandSelector.brandsNumber
        );
      }).then((callerId) => {
        original({ ...payload, callerId: callerId });
      });

    });

  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint-disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
