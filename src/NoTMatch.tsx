import { useRouteError } from 'react-router-dom';

type RouteError = {
  message: string;
  statusText?: string;
};

const NoTMatch = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div className="min-h-[97vh] flex flex-col gap-4 items-center justify-center text-text-primary">
      <h1 className="text-3xl font-bold">Oops!</h1>

      <p>Sorry, an unexpected error has occurred.</p>

      <p className="text-sm text-text-secondary">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
export default NoTMatch;
