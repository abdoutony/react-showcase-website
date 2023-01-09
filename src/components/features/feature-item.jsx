import PropTypes from "prop-types"
const FeatureItem=({item={id:1,src:"https://via.placeholder.com/150",alt:"alttext",active:false}})=>{
    return (
        <div className={item.active ? "carousel-item active" :"carousel-item"}>
            <img src={item.src} className="d-block w-100" alt={item.alt} />
        </div>
    )
}
FeatureItem.propTypes={
    item:PropTypes.exact({
        id:PropTypes.number,
        src:PropTypes.string,
        alt:PropTypes.string,
        active:PropTypes.bool
    })
}

export default FeatureItem