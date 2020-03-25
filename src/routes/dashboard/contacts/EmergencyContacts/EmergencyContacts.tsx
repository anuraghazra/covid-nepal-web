import React, { useEffect, useState, FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IFetchContactsAPIResponse, fetchEmergencyContactsAPI } from 'src/services/contacts';
import EmergencyContactItem from './EmergencyContactRecords';
import PhoneIcon from 'src/components/Icons/PhoneIcon';
import lo from 'src/i18n/locale.json';

const EmergencyContacts: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contactList, setContactList] = useState<IFetchContactsAPIResponse>({} as IFetchContactsAPIResponse);
  const [t] = useTranslation();

  useEffect(() => {
    fetchEmergencyContacts();
  }, []);

  const fetchEmergencyContacts = async () => {
    try {
      const response: IFetchContactsAPIResponse = await fetchEmergencyContactsAPI();
      setContactList(response);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-3">
      <div className="info-list">
        {isLoaded && contactList.docs.map((contact, index) => <EmergencyContactItem key={index} contact={contact} />)}
        <div className="info-item py-3 mt-2">
          <div className="font-16">{t(lo.emerg_sukrarajTropicalInfecDisHosp)}</div>
          <small className="ml3">({t(lo.emerg_asProvideGovNotice)})</small>
          <div className="d-flex mt-3">
            <div className="col-5">1) {t(lo.emerg_drShrawanKMishra)} :</div>
            <div className="col-7">
              <a className="rounded btn-success px-3 py-1 mx-2 btn" href={`tel:9851168220`}>
                <PhoneIcon />
                9851168220
              </a>
            </div>
          </div>

          <div className="d-flex mt-3">
            <div className="col-5">2) {t(lo.emerg_drRanjitShah)} : </div>
            <div className="col-7">
              <a className="rounded btn-success px-3 py-1 mx-2 btn" href={`tel:9872701465`}>
                <PhoneIcon />
                9872701465
              </a>
            </div>
          </div>

          <div className="d-flex mt-3">
            <div className="col-5">3) {t(lo.emerg_mrRajeshKGupta)} :</div>
            <div className="col-7">
              <a className="rounded btn-success px-3 py-1 mx-2 btn" href={`tel:9851239988`}>
                <PhoneIcon />
                9851239988
              </a>
            </div>
          </div>

          <div className="d-flex mt-3">
            <div className="col-5">4) {t(lo.emerg_mrDineshThapaMagar)} : </div>
            <div className="col-7">
              <a className="rounded btn-success px-3 py-1 mx-2 btn" href={`tel:9823168540`}>
                <PhoneIcon />
                9823168540
              </a>
              <small className="ml3">({t(lo.emerg_nightOnly)})</small>
            </div>
          </div>

          <div className="d-flex mt-3">
            <div className="col-5">5) {t(lo.emerg_mrNareshThapaMagar)} :</div>
            <div className="col-7">
              <a className="rounded btn-success px-3 py-1 mx-2 btn" href={`tel:9803152149`}>
                <PhoneIcon />
                9803152149
              </a>
              <small className="ml3">({t(lo.emerg_nightOnly)})</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
