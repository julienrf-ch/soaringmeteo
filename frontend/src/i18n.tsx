import {Accessor, Component, createContext, createEffect, createSignal, JSX, lazy, useContext} from "solid-js";

import {
  type AvailableLanguageTag, availableLanguageTags,
  onSetLanguageTag,
  setLanguageTag,
  sourceLanguageTag
} from './generated-i18n/runtime';

type Messages = typeof import('./generated-i18n/messages');

type I18n = {
  lang: Accessor<AvailableLanguageTag>
  setLang: (langTag: AvailableLanguageTag) => void
  m: Accessor<Messages>
}

const I18nContext = createContext<I18n | undefined>();

export const useI18n = (): I18n => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw 'Initialization error'
  } else {
    return context
  }
};

const availableLangs: Array<AvailableLanguageTag> = availableLanguageTags as unknown as Array<AvailableLanguageTag>;

// WARN: make sure to update this list to keep it consistent with `availableLangs`
export const availableLangsAndLabels: Array<[AvailableLanguageTag, string]> = [
  ['en', 'English'],
  ['fr', 'Français'],
  ['de', 'German']
];

const langKey = 'lang';

function fetchMessages (lang: AvailableLanguageTag): Promise<Messages> {
  return import(`./generated-i18n/messages/${lang}.js`)
    .then(success => success, error => fetchMessages(sourceLanguageTag));
}

export const Localized: Component<{ children: JSX.Element }> = lazy(async () => {
  let initLang = window.localStorage.getItem(langKey);
  if (initLang === null || !availableLangs.some(l => l === initLang)) {
    initLang = sourceLanguageTag;
  }
  const initMessages = await fetchMessages(initLang as AvailableLanguageTag);
  const [getLang, setLang] = createSignal(initLang as AvailableLanguageTag);
  const [getMessages, setMessages] = createSignal(initMessages, { equals: false });
  // Sync our signals with the paraglide runtime
  // 1. Update our messages when the language changes
  onSetLanguageTag((tag) => {
    fetchMessages(tag).then(messages => setMessages(messages));
  });
  // 2. Change the language when setLang is called and remember it in the local storage
  createEffect(() => {
    const lang = getLang();
    window.localStorage.setItem(langKey, lang);
    setLanguageTag(lang);
  });
  const value: I18n = {
    lang: getLang,
    setLang: (langTag) => { setLang(langTag) },
    m: getMessages
  };
  return {
    default: (props) => {
      return <I18nContext.Provider value={ value }>
        { props.children }
      </I18nContext.Provider>
    }
  }
});
