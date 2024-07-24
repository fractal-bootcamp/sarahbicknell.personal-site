export default function Portfolio() {
    return (
        <div className="flex justify-center" >
            <div className="flex flex-col items-left w-[75%]">
                <h2 className="font-serif font-bold text-2xl text-pink-950">  Portfolio </h2>
                <div className="flex flex-2 flex-wrap w-[100%]">
                    <div className="w-[50%]">
                        <img src="/gallery1.jpeg" className="w-full h-full p-1" />
                    </div>
                    <div className="w-[50%]">
                        <img src="/gallery2.jpeg" className="w-full h-full p-1" />
                    </div>
                    <div className="w-[50%]">
                        <img src="/gallery3.jpeg" className="w-full h-full p-1" />
                    </div>
                    <div className="w-[50%]">
                        <img src="/gallery4.webp" className="w-full h-full p-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "~/components/ui/carousel"
//   import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "~/components/ui/card"
  
  
//   export default function Projects() {
//     return (
//         <div className="flex justify-center">
//             <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full max-w-sm"
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//         </div>
//     )
// }



