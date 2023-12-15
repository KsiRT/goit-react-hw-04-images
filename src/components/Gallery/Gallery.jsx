import React from 'react';
import { Card, Cards, Container, Image } from './GalleryStyled';

export const Gallery = ({ fetchedImgs, imageClick }) => {
  return (
    <Container>
      <Cards>
        {fetchedImgs.map(img => {
          return (
            <Card key={img.id} onClick={() => imageClick(img.largeImageURL)}>
              <Image src={img.webformatURL} alt="" />
            </Card>
          );
        })}
      </Cards>
    </Container>
  );
};
