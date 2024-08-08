import "App.css"
import SwiperComponent from './SwiperComponent';
import ShapeOne from "./ShapeOne";
import ShapeTwo from "./ShapeTwo";



const SwiperApp =  () =>{
  const data = [
      {id: 1, name:"hadeer" },
      {id: 2, name:"rahma" },
      {id: 3, name:"omar" },
      {id: 4, name:"hala" },
      {id: 5, name:"nour" },
      {id: 6, name:"heba" },
  ];
  return (
    <>
       <SwiperComponent data={data}>
            <ShapeOne></ShapeOne>
       </SwiperComponent>

       <SwiperComponent  data={data}>
           <ShapeTwo></ShapeTwo>
       </SwiperComponent>
    </>
  )
}
export default SwiperApp ;