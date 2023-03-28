import { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../../axios/axios';
import Loader from '../../components/Loader/Loader';
import PhotosGridLayout from '../../components/PhotosGridLayout/PhotosGridLayout';
import ThumbnailPhoto from '../../components/ThumbnailPhoto/ThumbnailPhoto';
import { PhotoItem } from '../../interfaces/PhotoItem';

function Photos(): JSX.Element {
  const [items, setItems] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getInitialPhotos = useCallback(() => {
    setLoading(true);
    axiosInstance
      .get('photos/initial-photos')
      .then(function (response) {
        console.log('Getting photos response: ', response);
        setItems([...response.data]);
      })
      .catch(function (error) {
        console.log('Error while receiving photos: ', error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, [axiosInstance]);

  useEffect(() => {
    getInitialPhotos();
  }, [getInitialPhotos]);

  const addNewItems = (): void => {
    setLoading(true);
    axiosInstance
      .get('photos/additional-photos')
      .then(function (response) {
        const oldPhotos = [...items];
        const updatedPhotos = oldPhotos.concat(response.data);
        setItems(updatedPhotos);
      })
      .catch(function (error) {
        console.log('Error while receiving photos: ', error);
      })
      .finally(function () {
        setLoading(false);
      });
  };

  const onScroll = (): void => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      addNewItems();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <>
      <PhotosGridLayout>
        {items.map((item, index) => (
          <ThumbnailPhoto src={item.url} key={`${item}-${index}`} />
        ))}
      </PhotosGridLayout>
      {loading ? <Loader /> : null}
    </>
  );
}

export default Photos;
