import { Whatsapp , Phone ,Mailbox,Facebook ,Messenger} from "react-bootstrap-icons"

export default function Footer(props) {
const style={
    backgroundColor: '#f2fcff',
    textAlign: 'Center',
    padding:'25px',

}


    return(
        <div classname="my-5" style={style}>
  <footer classname="text-center text-lg-start">
    <div classname="container d-flex justify-content-center py-5">
       <a href="#" className="btn  rounded-circle border border-primary text-primary" > < Facebook/></a>
      <a href="#" className="btn   rounded-circle border border-danger ms-3 text-danger"> <Mailbox /></a>
      <a href="tel:6031112298"className="btn   rounded-circle border border-warning ms-3 text-warning"> <Phone /></a>
      <a href="https://wa.me/0537301993"className="btn   rounded-circle border border-success ms-3 text-success"> < Whatsapp/></a> 
    </div>
    <br />
     <h5 className="text-info  font-italic">© 2020 Copyright:</h5>    
  </footer>
  
</div>
    )
    
}