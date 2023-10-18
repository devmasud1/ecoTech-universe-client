import { useParams } from "react-router-dom";


const BrandItems = () => {
    const {brand} = useParams();
    console.log(brand)
    return (
        <div>
            BrandItems - {brand}
        </div>
    );
};

export default BrandItems;