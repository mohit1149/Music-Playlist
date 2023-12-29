import {MdDelete} from 'react-icons/md'

import {
  SmallImage,
  ListItem,
  LeftContainer,
  NameContainer,
  NameParagraph,
  GenreParagraph,
  RightContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicPlayList = props => {
  const {trackingListDetails, deleteIconButton} = props
  const {id, imageUrl, name, genre, duration} = trackingListDetails
  const onClickDeleteButton = () => {
    deleteIconButton(id)
  }

  return (
    <ListItem>
      <LeftContainer>
        <SmallImage alt="track" src={imageUrl} />
        <NameContainer>
          <NameParagraph>{name}</NameParagraph>
          <GenreParagraph>{genre}</GenreParagraph>
        </NameContainer>
      </LeftContainer>
      <RightContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          onClick={onClickDeleteButton}
          data-testid="delete"
        >
          <MdDelete size={25} />.
        </DeleteButton>
      </RightContainer>
    </ListItem>
  )
}

export default MusicPlayList
