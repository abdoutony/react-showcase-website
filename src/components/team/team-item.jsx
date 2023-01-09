import PropTypes from "prop-types"
const TeamItem=({item={id:1,image:"",name:"example name",description:"example description"}})=>{
    return (
        <div className="card h-100 shadow border-0">
        <img src={item.image} className="card-img-top" alt="team member" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{item.name}</h5>
          <p className="card-text">
            {item.description}
          </p>
        </div>
      </div>
    )
}

export default TeamItem

TeamItem.propTypes = {
    item:PropTypes.exact({
        id:PropTypes.number,
        image:PropTypes.string,
        name:PropTypes.string,
        description:PropTypes.string
    })
}