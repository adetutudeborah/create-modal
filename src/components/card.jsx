import './card.css'

const openModal = (id) =>{
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
  } 

const closeModal = (id) =>{
let modal = document.getElementById("myModal"); 
    modal.style.display = "none";
  }

const Card = ({name, role, description, profilePic, handleDelete, id}) => {
    return (
        <div className="profile">
            <div className="col-lg-3 mb-2 profile-card">
                <div className="card">
                    <div className="close" onClick={()=> handleDelete(id)}>
                        X
                    </div>
                    <div>
                        <img className="img-responsive profilePic" 
                        src={profilePic}
                        alt="profile pic" />
                    </div>
                    <div className="descr">
                        <p className="name"> {name}</p>
                        <button className="profileBtn" onClick={()=> openModal(id)}> Click to view profile</button>
                    </div>
                </div>
            </div>

            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="closebtn" onClick={()=> closeModal(id)}>&times;</span>
                    <div className="img">
                        <img className="modal-img" src={profilePic} alt="profile pic" />
                    </div>
                    <div className="modal-body">
                        <ul>
                            <ol>Name: {name}</ol>
                            <ol>Role: {role}</ol>
                            <ol>Description: {description}</ol>
                        </ul>
                    </div>
                </div>
            </div>
       </div> 
    )
}

export default Card;