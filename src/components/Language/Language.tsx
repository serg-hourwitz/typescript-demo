import { ELanguage } from '../../types/language';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';


const Language = memo(() => {
  const [showList, setShowList] = useState<boolean>(false);
  const [language, setLanguage] = useState(ELanguage.UA);
  const { t, i18n } = useTranslation();


  const changeLanguage = (lang: ELanguage) => {
    i18n.changeLanguage(lang).then(() => {
      setLanguage(lang);
      setShowList(false);
    });
  };
  return (
    <div className="relative">
      <button
        type="button"
        className="link"
        onClick={() => setShowList((prev) => !prev)}
      >
        {t('language.' + language)}
      </button>
      {showList && <List changeLanguage={changeLanguage} />}
    </div>
  );
});
const List = memo(
  ({ changeLanguage }: { changeLanguage: (lang: ELanguage) => void }) => (
    <ul className="absolute top-full right-0 bg-blue-900 border border-white rounded-lg">
      <Item changeLanguage={changeLanguage} lang={ELanguage.UA} />
      <Item changeLanguage={changeLanguage} lang={ELanguage.EN} />
      <Item changeLanguage={changeLanguage} lang={ELanguage.PL} />
    </ul>
  )
);
const Item = memo(
  ({
    lang,
    changeLanguage,
  }: {
    lang: ELanguage;
    changeLanguage: (lang: ELanguage) => void;
  }) => {
    const { t } = useTranslation();
    return (
      <li className="p-2 link" onClick={() => changeLanguage(lang)}>
        {t('language.' + lang)}
      </li>
    );
  }
);
export default Language;
