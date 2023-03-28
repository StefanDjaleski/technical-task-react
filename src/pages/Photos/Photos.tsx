import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import PhotosGridLayout from '../../components/PhotosGridLayout/PhotosGridLayout';
import ThumbnailPhoto from '../../components/ThumbnailPhoto/ThumbnailPhoto';

function Photos(): JSX.Element {
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setItems([
      'https://fastly.picsum.photos/id/863/200/300.jpg?hmac=4kin1N4a7dzocUZXCwLWHewLobhw1Q6_e_9E3Iy3n0I',
      'https://fastly.picsum.photos/id/863/200/300.jpg?hmac=4kin1N4a7dzocUZXCwLWHewLobhw1Q6_e_9E3Iy3n0I',
      'https://fastly.picsum.photos/id/863/200/300.jpg?hmac=4kin1N4a7dzocUZXCwLWHewLobhw1Q6_e_9E3Iy3n0I',
      'https://fastly.picsum.photos/id/863/200/300.jpg?hmac=4kin1N4a7dzocUZXCwLWHewLobhw1Q6_e_9E3Iy3n0I',
      'https://fastly.picsum.photos/id/863/200/300.jpg?hmac=4kin1N4a7dzocUZXCwLWHewLobhw1Q6_e_9E3Iy3n0I',
      'https://fastly.picsum.photos/id/863/200/300.jpg?hmac=4kin1N4a7dzocUZXCwLWHewLobhw1Q6_e_9E3Iy3n0I',
      'https://fastly.picsum.photos/id/863/200/300.jpg?hmac=4kin1N4a7dzocUZXCwLWHewLobhw1Q6_e_9E3Iy3n0I'
    ]);
  }, []);

  const addNewItems = (): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      const additionalItems = [
        'https://picsum.photos/id/1/5000/3333',
        'https://picsum.photos/id/1/5000/3333',
        'https://picsum.photos/id/1/5000/3333'
      ];
      const newItems = items.concat(additionalItems);
      setItems(newItems);
    }, 500);
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
          <ThumbnailPhoto src={item} key={`${item}-${index}`} />
        ))}
      </PhotosGridLayout>
      {loading ? <Loader /> : null}
    </>
  );
}

export default Photos;
