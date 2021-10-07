import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/common/Card/Card';
import { ProfileForm } from '../../ProfileForm/ProfileForm';
import { FirstNameItem } from './FirstNameItem/FirstNameItem';
import { LastNameItem } from './LastNameItem/LastNameItem';
import { NicknameItem } from './NicknameItem/NicknameItem';
import { SexItem } from './SexItem/SexItem';
import { BirthdayItem } from './BirthdayItem/BirthdayItem';
import { LanguageItem } from './LanguageItem/LanguageItem';
import { PhoneItem } from './PhoneItem/PhoneItem';
import { EmailItem } from './EmailItem/EmailItem';
import { CountriesItem } from './CountriesItem/CountriesItem';
import { CitiesItem } from './CitiesItem/CitiesItem';
import { ZipcodeItem } from './ZipcodeItem/ZipcodeItem';
import { AddressItem } from './AddressItem/AddressItem';
import { WebsiteItem } from './WebsiteItem/WebsiteItem';
import { SocialLinksItem } from './SocialLinksItem/SocialLinksItem';
import * as S from '../../ProfileForm/ProfileForm.styles';
import { Col, Row } from 'antd';

export const PersonalInfo: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('BY');

  const { t } = useTranslation();

  return (
    <Card padding="1.875rem 1rem">
      <ProfileForm name="info">
        <Row gutter={[20, 0]}>
          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.title')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <FirstNameItem />
          </Col>

          <Col xs={24} md={12}>
            <LastNameItem />
          </Col>

          <Col xs={24} md={12}>
            <NicknameItem />
          </Col>

          <Col xs={24} md={12}>
            <SexItem />
          </Col>

          <Col xs={24} md={12}>
            <BirthdayItem />
          </Col>

          <Col xs={24} md={12}>
            <LanguageItem />
          </Col>

          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.contactInfo')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <PhoneItem />
          </Col>

          <Col xs={24} md={12}>
            <EmailItem />
          </Col>

          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.address')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <CountriesItem setCountry={setSelectedCountry} />
          </Col>

          <Col xs={24} md={12}>
            <CitiesItem country={selectedCountry} />
          </Col>

          <Col xs={24} md={12}>
            <AddressItem number={1} />
          </Col>

          <Col xs={24} md={12}>
            <AddressItem number={2} />
          </Col>

          <Col xs={24} md={12}>
            <ZipcodeItem />
          </Col>

          <Col span={24}>
            <S.FormItem>
              <S.Title>{t('profile.nav.personalInfo.otherInfo')}</S.Title>
            </S.FormItem>
          </Col>

          <Col xs={24} md={12}>
            <WebsiteItem />
          </Col>

          <Col span={24}>
            <SocialLinksItem />
          </Col>
        </Row>
      </ProfileForm>
    </Card>
  );
};