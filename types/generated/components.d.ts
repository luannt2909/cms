import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
    icon: 'phone';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
    is_link: Attribute.Boolean;
    type: Attribute.Enumeration<['mail', 'github', 'linkedin']>;
    link: Attribute.String;
    contact_icon: Attribute.Media;
    iconUrl: Attribute.String;
  };
}

export interface MeMe extends Schema.Component {
  collectionName: 'components_me_us';
  info: {
    displayName: 'Me';
    icon: 'user';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    bio: Attribute.String;
    profileImage: Attribute.String;
    status: Attribute.String;
  };
}

export interface TechnologyTechnology extends Schema.Component {
  collectionName: 'components_technology_technologies';
  info: {
    displayName: 'Technology';
    icon: 'dashboard';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.contact': ContactContact;
      'me.me': MeMe;
      'technology.technology': TechnologyTechnology;
    }
  }
}
