import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: #152850;
  min-height: 190vh;
`
export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const HeadingContainer = styled.div`
  margin-left: 30px;
`
export const EdHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`

export const SingerParagraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`

export const SearchContainer = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const InputContainer = styled.div`
  border: 1px solid #ffffff;
  height: 5vh;
  width: 15vw;
  border-radius: 5px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`
export const InputSlide = styled.input`
  border: none;
  background-color: transparent;
  color: #cbd5e1;
  outline: none;
`
export const UnOrderList = styled.ul`
  list-style-type: none;
  padding-left: 50px;
  padding-right: 50px;
`
export const NoSongContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`

export const NoSongHeading = styled.p`
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
`
