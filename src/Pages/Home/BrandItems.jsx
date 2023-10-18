import { useEffect } from "react";
import { useParams } from "react-router-dom";





const BrandItems = () => {
    const {brand} = useParams();
    console.log(brand)

    useEffect(()=> {
        fetch(`https://eco-tech-universe-server-86ztqqszw-masudr.vercel.app/products`)
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    },[])

    return (
        <div className="max-w-[1440px] mx-auto my-10">
            BrandItems - {brand}
        </div>
    );
};

export default BrandItems;