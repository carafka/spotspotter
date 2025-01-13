import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material';
import { Chevron } from '@/core/assets';
import { resources } from '@/i18n/resources';
import { getFlagByCode } from '@/util/i18nHelpers';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const currentLocale = i18n.language;

  const languages = Object.keys(resources)
    .filter((locale) => locale !== currentLocale)
    .map((newLang) => {
      return (
        <Language
          key={newLang}
          className="language"
          onClick={() => {
            i18n.changeLanguage(newLang);
          }}
        >
          {getFlagByCode(newLang)}{' '}
        </Language>
      );
    });

  return (
    <Container>
      <Dropdown
        onMouseOver={() => {
          setShowDropdown(true);
        }}
        onMouseOut={() => {
          setShowDropdown(false);
        }}
      >
        <PickerBackground>
          <CurrentFlag id="currentflag">
            {getFlagByCode(currentLocale, true)}
            <Chevron />
          </CurrentFlag>
        </PickerBackground>
        <HoverMenu showDropdown={showDropdown} langSwitcher>
          {languages}
        </HoverMenu>
      </Dropdown>
    </Container>
  );
};

export const HoverMenu = styled('div')<{
  showDropdown?: boolean;
  langSwitcher?: boolean;
}>`
  display: block;
  opacity: ${({ showDropdown }) => (showDropdown ? '1' : '0')};
  visibility: ${({ showDropdown }) => (showDropdown ? 'visible' : 'hidden')};
  position: absolute;
  z-index: 3;
  background-color: gray;
  color: white;
  transition: all 0.4s ease-in-out;
  width: max-content;
  transform: translate(-2rem, 15px);
  border-radius: 6px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);

  div:last-of-type {
    margin-bottom: 0;
  }

  p {
    margin-right: 0px;
    font-size: 0.8rem;
  }

  ${({ langSwitcher }) =>
    langSwitcher &&
    `
      left: 50%;
      top: 1.1rem;
      transform: translate(-50%, 15px);
      padding: 0.5rem 1rem;

      svg {
        height: 16px;
      }
  `}
`;

export const DropdownItem = styled('a')`
  display: flex;
  cursor: pointer;
  width: 100%;

  svg {
    height: 1.3rem;
    margin-right: 10px;
    transform: translateY(2px);
  }

  h5,
  p {
    transition: 0.3s all ease-in-out;
  }

  h5 {
    font-size: 0.9rem;
    line-height: 0.9rem;
  }
`;

export const Dropdown = styled('div')`
  font-size: 0.9rem;
  position: relative;

  & > p {
    display: inline;
  }

  h5 {
    text-align: left;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    svg:not(.no-default-fill) path {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }

  &.hide div:last-of-type {
    display: none;
  }
`;

const Container = styled('div')`
  display: flex;
  align-items: center;
  position: relative;
  width: 40px;

  & > div:first-of-type {
    display: flex;
    align-items: center;

    &:after {
      position: absolute;
      content: '';
      width: 100%;
      bottom: -10px;
      left: 0;
      height: 10px;
    }
  }

  svg {
    width: auto;
    height: 13px;
    cursor: pointer;
  }

  svg:not(.chevron) {
    border: 1px solid none;
  }

  svg.chevron {
    width: 12px;
  }
`;

const CurrentFlag = styled('div')`
  height: 26px;
  display: flex;
  align-items: center;

  .chevron.chevron {
    position: static;
    transform: none;
    margin-left: 6px;
    width: 0.8rem;
  }

  @media (max-width: 550px) {
    height: 20px;
  }
`;

const Language = styled('div')`
  display: flex;
  align-items: center;
  cursor: pointer;

  &.language {
    margin-bottom: 1rem;
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  p {
    transition: all 0.3s ease;
    text-transform: capitalize;
    line-height: 0.8rem;
    margin-left: 10px;
    position: relative;
    bottom: 1px;
  }
`;

const PickerBackground = styled('div')`
  background-color: black;
  border-radius: 5px;
  padding: 0 0.5rem;
`;
