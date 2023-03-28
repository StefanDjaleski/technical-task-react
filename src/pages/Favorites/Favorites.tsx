import PhotosGridLayout from '../../components/PhotosGridLayout/PhotosGridLayout';
import { FavoriteItem } from '../../interfaces/FavoriteItem';
import { getFavorites } from '../../utils/storage';
import ThumbnailPhoto from '../../components/ThumbnailPhoto/ThumbnailPhoto';

function Favorites(): JSX.Element {
  const items: FavoriteItem[] = getFavorites();
  return (
    <PhotosGridLayout>
      {items.map((item) => (
        <ThumbnailPhoto src={item.url} id={item.id} key={item.id} />
      ))}
    </PhotosGridLayout>
  );
}

export default Favorites;
