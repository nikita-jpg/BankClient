import '../Dish/dish.css'
const Dish = ({title, description, img}) => (
    <div className='dish'>
        <div className='dish_img' style={img}></div>
        <div className='dish_title'>{title}</div>
        <p className='dish_description'>{description}</p>
    </div>
);

export { Dish }