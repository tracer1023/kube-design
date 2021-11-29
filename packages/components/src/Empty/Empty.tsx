import * as React from 'react';
import styled from 'styled-components';
import { Exclamation } from '@kubed/icons';
import forwardRef from '../utils/forwardRef';
import { DefaultProps } from '../theme/types';
import { useLocales } from '../ConfigProvider/LocaleProvider/LocaleContext';

export interface EmptyProps extends DefaultProps {
  description?: React.ReactNode;
  imageStyle?: React.CSSProperties;
  title?: React.ReactNode;
  icon?: React.ReactNode;
}

const EmptyWrapper = styled.div`
  margin-top: 12px;
  padding: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.background};
  text-align: center;
`;

const ContentStyle = styled.div`
  margin-top: 15px;
  font-weight: 700;
  font-size: 14px;
`;

const DesStyle = styled.div`
  line-height: 25px;
`;

const ImageStyle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50% 0 50% 50%;
  background: ${({ theme }) => theme.palette.colors.white[1]} !important;
  display: inline-block;
  line-height: 50px;
  > * {
    width: 48px;
    height: 48px;
  }
`;

export const Empty = forwardRef<EmptyProps, 'div'>((props, ref) => {
  const { description, imageStyle, icon, title } = props;
  const locale = useLocales();
  const { Empty: locales } = locale;
  return (
    <EmptyWrapper>
      <ImageStyle style={imageStyle}>{icon ? <div>{icon}</div> : <Exclamation />}</ImageStyle>
      {title ? <ContentStyle>{title}</ContentStyle> : <ContentStyle>locales.title</ContentStyle>}
      {description && <DesStyle>{description}</DesStyle>}
    </EmptyWrapper>
  );
});

Empty.displayName = '@kubed/components/Empty';
