import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <div className="flex items-center flex-col m-5">
        <h1 className="font-serif font-bold underline">Page Not Found</h1>
        <h3 className="font-serif">Check to see if you are in the correct page.</h3>
        <Link href="/">
          <p className="font-serif my-2">
            Click Here to go home!  
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
