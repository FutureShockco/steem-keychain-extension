import { SVGIcons } from 'src/common-ui/icons.enum';
import { MenuItem } from 'src/interfaces/menu-item.interface';
import { Screen } from 'src/reference-data/screen.enum';

const getAdvancedSettingsMenuItems = () => {
  let settings: MenuItem[] = [
    {
      label: 'popup_html_rpc_node',
      icon: SVGIcons.MENU_ADVANCED_SETTINGS_RPC_NODE,
      nextScreen: Screen.SETTINGS_RPC_NODES,
    },
    {
      label: 'popup_html_autolock',
      icon: SVGIcons.MENU_ADVANCED_SETTINGS_AUTO_LOCK,
      nextScreen: Screen.SETTINGS_AUTO_LOCK,
    },
    {
      label: 'popup_html_change_password',
      icon: SVGIcons.MENU_ADVANCED_SETTINGS_CHANGE_PASSWORD,
      nextScreen: Screen.SETTINGS_CHANGE_PASSWORD,
    },
    {
      label: 'popup_html_keychainify',
      icon: SVGIcons.MENU_ADVANCED_SETTINGS_KEYCHAINIFY,
      nextScreen: Screen.SETTINGS_KEYCHAINIFY,
    },
    // {
    //   label: 'popup_html_analytics',
    //   icon: SVGIcons.MENU_ADVANCED_SETTINGS_ANALYTICS,
    //   nextScreen: Screen.SETTINGS_ANALYTICS,
    // },

    {
      label: 'popup_html_import_export_settings',
      icon: SVGIcons.MENU_ADVANCED_SETTINGS_IMPORT_EXPORT,
      nextScreen: Screen.SETTINGS_IMPORT_EXPORT,
    },
    {
      label: 'popup_html_clear',
      icon: SVGIcons.MENU_ADVANCED_SETTINGS_CLEAR_ALL,
      nextScreen: Screen.SETTINGS_CLEAR_ALL_DATA,
    },
  ];

  return settings;
};

export default getAdvancedSettingsMenuItems;
