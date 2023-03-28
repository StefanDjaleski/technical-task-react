import { FavoriteItem } from '../interfaces/FavoriteItem';

export const addFavorite = (url: string): void => {
  const id: string = crypto.randomUUID();
  const newItem: FavoriteItem = { id, url };

  if (localStorage.getItem('favorites')) {
    const oldArray: string = localStorage.getItem('favorites') as string;
    let newArray: FavoriteItem[] = JSON.parse(oldArray);
    newArray = newArray.concat([newItem]);

    localStorage.setItem('favorites', JSON.stringify(newArray));
  } else {
    localStorage.setItem('favorites', JSON.stringify([newItem]));
  }
};

export const getFavorites = (): FavoriteItem[] => {
  if (localStorage.getItem('favorites')) {
    const stringifiedFavorites: string = localStorage.getItem(
      'favorites'
    ) as string;

    const favorites: FavoriteItem[] = JSON.parse(stringifiedFavorites);

    return favorites;
  } else {
    return [];
  }
};

export const getPhotoFromFavorites = (id: string): FavoriteItem => {
  const stringifiedFavorites: string = localStorage.getItem(
    'favorites'
  ) as string;

  const favorites: FavoriteItem[] = JSON.parse(stringifiedFavorites);
  const favorite: FavoriteItem = favorites.find(
    (favorite) => favorite.id === id
  ) as FavoriteItem;

  return favorite;
};

export const removePhotoFromFavorites = (id: string): void => {
  const stringifiedFavorites: string = localStorage.getItem(
    'favorites'
  ) as string;

  const oldFavorites: FavoriteItem[] = JSON.parse(stringifiedFavorites);
  const updatedFavorites: FavoriteItem[] = oldFavorites.filter(
    (favorite) => favorite.id !== id
  );

  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};
