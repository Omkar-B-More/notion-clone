import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const MarketingPage = () => {
  return (
    // <div className="min-h-full flex flex-col">
    // <div className="min-h-screen flex flex-col">
    <div className="flex flex-col min-h-[calc(100vh-10rem)]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}

export default MarketingPage;

// const MarketingPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-red-500">
//       <div className="flex-1 bg-green-500">
//         Hello
//       </div>

//       <div className="bg-blue-500 h-20">
//         Footer
//       </div>
//     </div>
//   );
// };

// export default MarketingPage;