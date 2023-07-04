import styled from '@emotion/styled';
import {PageWrapper} from '../../styles';
import {colors, headerHeight} from '../../../shared/styles/constants';
import {Button} from '../../../components/Button/Button';

export const DiscPageWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${headerHeight});
  padding: 3rem 21rem 3rem 5rem;
  gap: 24px;
`;

export const ToolbarWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid ${colors.lightGrey};
  padding-bottom: 33px;
`;

export const ExaminationTypeFilterWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const ExaminationTypeFilterLabel = styled('div')`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.tabHeaderTextHover};
  height: 18px;
`;

export const SearchBoxWrapper = styled('div')`
  align-items: center;
  justify-content: flex-start;
  margin-left: auto;
  width: 200px;
`;

export const BreadcrumbsWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  column-gap: 10px;
  height: 21px;
  font-size: 18px;
  color: #D9D9D9;
`;

export const ContentItemsWrapper = styled('div')`
  display: flex;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  height: 100%;
  overflow: auto;
  width: 100%;
`;

export const ContentItemWrapper = styled('div', {shouldForwardProp: prop => !['activeZoom'].includes(prop)})<{
  activeZoom?: boolean
}>`
  width: 280px;
  height: 210px;
  background: #2A2D32;
  border-radius: 8px;
  padding: 24px 22px 20px 22px;
  display: flex;
  flex-direction: column;
  transition: .3s;

  &:active {
    transition: .3s;
    scale: ${props => props.activeZoom ? 0.8 : 'unset'};
  }
;
`;

export const ItemActionWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding-bottom: 24px;
`;

export const ItemActionIcon = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const ItemActionTitle = styled('div')`
  font-size: 16px;
  font-weight: 600;
  color: #CACACA;
  text-align: center;
`;

export const ProtocolCardWrapper = styled('div', {shouldForwardProp: (prop) => !['isFolder'].includes(prop)})<{
  isFolder?: boolean
}>`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.isFolder ? '24px' : '12px'};
  justify-content: ${props => props.isFolder ? 'flex-end' : 'space-between'};
  height: 100%;
  user-select: none;
`;

export const ProtocolCardTitle = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: 16px;

  & .date {
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF;
  }

  & .descr {
    font-size: 10px;
    font-weight: 300;
    color: #A0A0A0;
  }
`;

export const ProtocolCardName = styled('div')`
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
`;

export const ProtocolCardDate = styled('div')`
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
`;

export const ProtocolCardText = styled('div')`
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
`;


export const ProtocolCardToolbarWrapper = styled('div', {shouldForwardProp: (prop) => !['isFolder'].includes(prop)})<{
  isFolder?: boolean
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${props => props.isFolder ? 'center' : 'flex-end'};
  height: ${props => props.isFolder ? 'auto' : '100%'};

  & div {
    display: flex;
    flex-direction: row;
    column-gap: 8px;
  }
`;

export const AddButton = styled(Button)`
  font-size: 1.25rem;
`

export const CancelButton = styled(Button)`
  font-size: 1.25rem;
`

export const PathRoot = styled('div')`
  font-weight: 600;
  cursor: pointer;
`
export const PathItem = styled('div')`
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`

export const AddFormContainer = styled('div')`
  width: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;