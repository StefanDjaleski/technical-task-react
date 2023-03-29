import './Loader.scss';

function Loader(): JSX.Element {
  return (
    <>
      <div className="loader" data-testid="loader"></div>
      <div className="background" data-testid="background"></div>
    </>
  );
}

export default Loader;
