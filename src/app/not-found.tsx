import NotFoundComponent from "../../components/x-error-loading-notFound/notFound/NotFoundComponent";

export default function error() {
  return (
    <section className="section">
      <div className="container">
        <NotFoundComponent />
        <h6 className="title1 auto color1"></h6>
      </div>
    </section>
  );
}

// "use client";

// export default function NotFound() {
//   return (
//     <html>
//       <body className="text-center">
//         <h1 className="mt-10 font-semibold">Something went wrong!</h1>
//       </body>
//     </html>
//   );
// }
