// contenedor de las tarjetas "padre"
export default function ContainerCards() {
    const tarjetas = [
      {
        title: "Road King™ Special",
        image:
          "https://harley-davidson.com.ar/img/motos2023/roadKingSpecial/vividBlack/7.webp",
          category:"Touring",
          
      },
      {
        title: "Electra Glide™ Highway King",
        image:
          "https://harley-davidson.com.ar/img/motos2023/electraGlideHighwayKing/hiFiOrangeBrichWhite/1.webp",
          category:"Touring"
      },
      {
        title: "Street Glide™ Special",
        image:
          "https://harley-davidson.com.ar/img/motos2023/streetGlideSpecial/vividBlackChromeFinish/15.webp",
          category:"Touring"
      },
      {
        title: "Road Glide™ Limited",
        image:
          "https://harley-davidson.com.ar/img/motos2023/roadGlideLimited/vividBlackChromeFinish/3.webp",
          category:"Touring"
      },
      {
        title: "Ultra Limited",
        image:
          "https://harley-davidson.com.ar/img/motos2023/ultraLimited/vividBlackChromeFinish/11.webp",
          category:"Touring"
      },
      {
        title: "Street bob™ 114",
        image:
        "https://harley-davidson.com.ar/img/motos2023/streetBob114/vividBlack/3.webp",
        category: "Sport",
      }
    ];
        
    return (
        
      <div className="flex flex-wrap w-full justify-center">
        {tarjetas.map((i) => (
          <Card title={i.title} image={i.image}></Card>
        ))}
      </div>
    );
  }
  
  // div model card "hijo"
  export function Card({ title, image }) {
    return (
      <div className="w-80 m-5 aspect-square rounded  shadow-2xl cursor-pointer transition duration-500 hover:scale-125">
        <img src={image} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
      </div>
    );
  }