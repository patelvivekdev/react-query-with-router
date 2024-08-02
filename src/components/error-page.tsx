import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <h2 className="text-2xl font-bold">{error.status}</h2>
        <p className="text-xl">{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">Oops</div>;
      </div>
    );
  }
}
