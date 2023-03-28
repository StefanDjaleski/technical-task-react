import './PhotosGridLayout.scss';

interface Props {
  children: React.ReactNode;
}

function PhotosGridLayout({ children }: Props): JSX.Element {
  return <main>{children}</main>;
}

export default PhotosGridLayout;
