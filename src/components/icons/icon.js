import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconUpwork,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconFacebook,
  IconLinkedin,
  IconLoader,
  IconLocation,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconWhatsApp,
  IconZap,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Upwork':
      return <IconUpwork />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Facebook':
      return <IconFacebook />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Location':
      return <IconLocation />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'WhatsApp':
      return <IconWhatsApp />;
    case 'Zap':
      return <IconZap />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
