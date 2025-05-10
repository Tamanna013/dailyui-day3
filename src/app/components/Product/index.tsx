import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
const Index = () => {
  return (
    <div className="flex flex-row w-full h-screen bg-black">
        <div className="w-1/2 h-screen flex justify-center items-center"><ProductImage /></div>
        <div className="w-1/2 h-screen flex justify-center items-center"><ProductDescription /></div>
    </div>
  )
}

export default Index
