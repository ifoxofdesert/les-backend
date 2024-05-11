import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactPageBanquets extends Schema.Component {
  collectionName: 'components_contact_page_banquets';
  info: {
    displayName: 'banquets';
    icon: 'cup';
  };
  attributes: {
    phones: Attribute.Relation<'contact-page.banquets', 'oneToMany', 'api::phone.phone'>;
    mails: Attribute.Relation<'contact-page.banquets', 'oneToMany', 'api::mail.mail'>;
  };
}

export interface ContactPageContactInfo extends Schema.Component {
  collectionName: 'components_contact_page_contact_infos';
  info: {
    displayName: 'ContactInfo';
    icon: 'user';
    description: '';
  };
  attributes: {
    address: Attribute.Text;
    llcName: Attribute.String;
    ogrn: Attribute.BigInteger;
    inn: Attribute.BigInteger;
    kpp: Attribute.BigInteger;
    legalAddress: Attribute.Text;
    reservation: Attribute.Component<'contact-page.reservations'>;
    banquet: Attribute.Component<'contact-page.banquets'>;
  };
}

export interface ContactPageCoordinate extends Schema.Component {
  collectionName: 'components_contact_page_coordinates';
  info: {
    displayName: 'coordinate';
    icon: 'pinMap';
  };
  attributes: {
    latitude: Attribute.String & Attribute.Required;
    longitude: Attribute.String & Attribute.Required;
  };
}

export interface ContactPageReservations extends Schema.Component {
  collectionName: 'components_contact_page_reservations';
  info: {
    displayName: 'reservations';
    icon: 'gate';
  };
  attributes: {
    phones: Attribute.Relation<'contact-page.reservations', 'oneToMany', 'api::phone.phone'>;
    mails: Attribute.Relation<'contact-page.reservations', 'oneToOne', 'api::mail.mail'>;
  };
}

export interface GeneralAccordion extends Schema.Component {
  collectionName: 'components_general_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    active: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface GeneralAfishaEventsBlock extends Schema.Component {
  collectionName: 'components_general_afisha_events_blocks';
  info: {
    displayName: 'afishaEventsBlock';
    icon: 'layout';
  };
  attributes: {
    titleCustom: Attribute.Component<'general.title-cutom'>;
    description: Attribute.Text;
  };
}

export interface GeneralMeta extends Schema.Component {
  collectionName: 'components_general_metas';
  info: {
    displayName: 'Meta';
    icon: 'file';
    description: '';
  };
  attributes: {
    pagetitle: Attribute.String & Attribute.Required;
    pageDescription: Attribute.Text;
  };
}

export interface GeneralOffersSlide extends Schema.Component {
  collectionName: 'components_general_offers_slides';
  info: {
    displayName: 'offersSlide';
    icon: 'stack';
  };
  attributes: {
    title: Attribute.String;
    markText: Attribute.String;
    expired: Attribute.Boolean & Attribute.DefaultTo<false>;
    img: Attribute.Media;
  };
}

export interface GeneralOffersSlider extends Schema.Component {
  collectionName: 'components_general_offers_sliders';
  info: {
    displayName: 'offersSlider';
    icon: 'layer';
    description: '';
  };
  attributes: {
    slideTitle: Attribute.String;
    slideSecondTitle: Attribute.String;
    slideDescription: Attribute.String;
  };
}

export interface GeneralQuestionsBlock extends Schema.Component {
  collectionName: 'components_general_questions_blocks';
  info: {
    displayName: 'QuestionsBlock';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    secondTitle: Attribute.String;
    thirdTitle: Attribute.String;
    accordion: Attribute.Component<'general.accordion', true>;
  };
}

export interface GeneralRoomsListBlock extends Schema.Component {
  collectionName: 'components_general_rooms_list_blocks';
  info: {
    displayName: 'RoomsListBlock';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface GeneralTitleCutom extends Schema.Component {
  collectionName: 'components_general_title_cutoms';
  info: {
    displayName: 'titleCutom';
    icon: 'pencil';
  };
  attributes: {
    first: Attribute.String;
    second: Attribute.String;
  };
}

export interface GeneralVideo extends Schema.Component {
  collectionName: 'components_general_videos';
  info: {
    displayName: 'video';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    poster: Attribute.Media & Attribute.Required;
    video: Attribute.Media & Attribute.Required;
  };
}

export interface HomeMainBlock extends Schema.Component {
  collectionName: 'components_home_main_blocks';
  info: {
    displayName: 'mainBlock';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    mainTitle: Attribute.Component<'general.title-cutom'> & Attribute.Required;
    mainImage: Attribute.Media;
    coordinate: Attribute.Component<'contact-page.coordinate'>;
  };
}

export interface InfoPageGeneral extends Schema.Component {
  collectionName: 'components_info_page_generals';
  info: {
    displayName: 'general';
    icon: 'file';
    description: '';
  };
  attributes: {
    pagetitle: Attribute.String & Attribute.Required;
    pageDescription: Attribute.Text;
    title: Attribute.String & Attribute.Required;
    lastUpdate: Attribute.Date;
  };
}

export interface NewsPagePageNews extends Schema.Component {
  collectionName: 'components_news_page_page_news';
  info: {
    displayName: 'pageNews';
    icon: 'file';
    description: '';
  };
  attributes: {
    type: Attribute.Relation<'news-page.page-news', 'oneToOne', 'api::news-filter.news-filter'>;
    markText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    introText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    textBefore: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    buttonBeforeActive: Attribute.Boolean & Attribute.DefaultTo<false>;
    Accordion: Attribute.Component<'general.accordion', true>;
    textAfter: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    buttonAfterActive: Attribute.Boolean & Attribute.DefaultTo<false>;
    slideTitle: Attribute.String;
    slideText: Attribute.Text;
    slideItem: Attribute.Relation<'news-page.page-news', 'oneToMany', 'api::new.new'>;
    image: Attribute.Media;
  };
}

export interface NewsPagePreviewCard extends Schema.Component {
  collectionName: 'components_news_page_preview_cards';
  info: {
    displayName: 'PreviewCard';
    icon: 'grid';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    date: Attribute.DateTime;
    position: Attribute.String;
    description: Attribute.Text;
    offerTitle: Attribute.String;
  };
}

export interface NewsPageTagFilter extends Schema.Component {
  collectionName: 'components_news_page_tag_filters';
  info: {
    displayName: 'TagFilter';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    tag: Attribute.String & Attribute.Required;
  };
}

export interface RoomPageAboutRoom extends Schema.Component {
  collectionName: 'components_room_page_about_rooms';
  info: {
    displayName: 'aboutRoom';
    icon: 'file';
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    firstText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    secondText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface RoomPagePageRoom extends Schema.Component {
  collectionName: 'components_room_page_page_rooms';
  info: {
    displayName: 'PageRoom';
    icon: 'layer';
    description: '';
  };
  attributes: {
    area: Attribute.String;
    persons: Attribute.String;
    viewRoom: Attribute.String;
    description: Attribute.Text;
    travelId: Attribute.BigInteger;
    aboutRoom: Attribute.Component<'room-page.about-room'>;
    accorionTitle: Attribute.Component<'general.title-cutom'>;
    accorionDescription: Attribute.Text;
    accordion: Attribute.Component<'general.accordion', true>;
    gallaryTitle: Attribute.String;
    gallaryDescription: Attribute.Text;
    gallary: Attribute.Media;
    roomWelcome: Attribute.Component<'room-page.room-welcome'>;
    roomListTitle: Attribute.Component<'general.title-cutom'>;
    roomListDescription: Attribute.Text;
    roomList: Attribute.Relation<'room-page.page-room', 'oneToMany', 'api::room.room'>;
    offersSlider: Attribute.Component<'general.offers-slider'>;
    video: Attribute.Component<'general.video'>;
  };
}

export interface RoomPagePreviewCard extends Schema.Component {
  collectionName: 'components_room_page_preview_cards';
  info: {
    displayName: 'PreviewCard';
    icon: 'layout';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    img: Attribute.Media;
  };
}

export interface RoomPageRoomWelcome extends Schema.Component {
  collectionName: 'components_room_page_room_welcomes';
  info: {
    displayName: 'roomWelcome';
    icon: 'file';
  };
  attributes: {
    title: Attribute.Text;
    secondTitle: Attribute.Text;
    initialLetter: Attribute.String;
    text: Attribute.Text;
    markText: Attribute.String;
    subText: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact-page.banquets': ContactPageBanquets;
      'contact-page.contact-info': ContactPageContactInfo;
      'contact-page.coordinate': ContactPageCoordinate;
      'contact-page.reservations': ContactPageReservations;
      'general.accordion': GeneralAccordion;
      'general.afisha-events-block': GeneralAfishaEventsBlock;
      'general.meta': GeneralMeta;
      'general.offers-slide': GeneralOffersSlide;
      'general.offers-slider': GeneralOffersSlider;
      'general.questions-block': GeneralQuestionsBlock;
      'general.rooms-list-block': GeneralRoomsListBlock;
      'general.title-cutom': GeneralTitleCutom;
      'general.video': GeneralVideo;
      'home.main-block': HomeMainBlock;
      'info-page.general': InfoPageGeneral;
      'news-page.page-news': NewsPagePageNews;
      'news-page.preview-card': NewsPagePreviewCard;
      'news-page.tag-filter': NewsPageTagFilter;
      'room-page.about-room': RoomPageAboutRoom;
      'room-page.page-room': RoomPagePageRoom;
      'room-page.preview-card': RoomPagePreviewCard;
      'room-page.room-welcome': RoomPageRoomWelcome;
    }
  }
}
