import React, { Component, useEffect, useReducer } from 'react';
import { Filter } from './Filter/Filter';
import { Gallery } from './Gallery/Gallery';
import { Wrapper } from './GlobalStyles';
import { fetchImages } from './services/Api';
import { Notify } from 'notiflix';
import { Modal } from './Modal/Modal';
import { Triangle } from 'react-loader-spinner';
import { LoadBtn, NoResults } from './Gallery/GalleryStyled';
import { initialState, reducer } from './reducer';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    images,
    query,
    total,
    page,
    per_page,
    largeImageURL,
    loading,
    isModalOpen,
  } = state;

  //ComponentDidUpdate
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({type: "LOADING", payload: true});

        // ?! continue here переписать фетч запросики на АПІ

        const { hits, totalHits } = await fetchImages({
          q: query,
          page,
          per_page,
        });
        if(!totalHits){
          
        }
        dispatch({type:'UPDATE_IMAGES', payload: {hits, total: totalHits}})
      } catch (e) {
        Notify.error(e.message);
      } finally {
        dispatch({type: "LOADING", payload: true});
      }
    };
  }, [query, page]);

  const handleLoadMore = () => {
    dispatch({ type: 'LOAD_MORE' });
  };
  const handleSearch = () => {
    dispatch({ type: 'SEARCH' });
  };
  const handleOpenImage = largeImageURL => {
    dispatch({ type: 'OPEN_IMG' });
  };
  const toggleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  return (
    <Wrapper>
      <Filter onSearchSubmit={handleSearch} />
      {state.total === 0 ? (
        <NoResults>There is nothing found 😥</NoResults>
      ) : (
        <>
          <Gallery fetchedImgs={images} imageClick={handleOpenImage} />
          {images.length !== total && !loading ? (
            <LoadBtn onClick={() => handleLoadMore()} type="button">
              {query !== 'cat' ? 'Load More' : 'Show me some cats 😍'}
            </LoadBtn>
          ) : null}
        </>
      )}
      {loading && (
        <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      {isModalOpen ? (
        <Modal imageURL={largeImageURL} closeModal={toggleModal} />
      ) : null}
    </Wrapper>
  );
};

// async componentDidUpdate(_, prevState) {
//   const { query, page, per_page } = this.state;

//   if (
//     prevState.query !== this.state.query ||
//     prevState.page !== this.state.page
//   ) {
//     try {
//       this.setState({ loading: true, asfadfadf: true });
//       const { hits, totalHits } = await fetchImages({
//         q: query,
//         page,
//         per_page,
//       });
//       this.setState(prev => ({
//         images: [...prev.images, ...hits],
//         total: totalHits,
//       }));
//     } catch (e) {
//       Notify.error(e.message);
//     } finally {
//       this.setState({ loading: false });
//     }
//   }
// }
// const handleLoadMore =() {
//   this.setState(prevState => ({ page: prevState.page + 1 }));
// }

// const handleSearch = searchQuery => {
//   if (searchQuery === '') {
//     Notify.info('You need to type something in order to find 🧐');
//     return;
//   }
//   if (searchQuery !== this.state.query) {
//     this.setState(prev => ({ query: searchQuery, images: [], page: 1 }));
//     Notify.success('Looking fot it🧐');
//   }
// };

// const handleOpenImage = largeImageURL => {
//   this.setState(() => ({
//     isModalOpen: true,
//     largeImageURL: largeImageURL,
//   }));
// };
// const toggleModal = () => {
//   this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
// };

// const { loading } = this.state;
