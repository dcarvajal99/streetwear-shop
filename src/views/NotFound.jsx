import { Container } from "react-bootstrap"

const NotFound = () =>{
    
    return(
        <>
            <Container 
            className="vh-100 vw-100 mt-4 border-bottom rounded"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
                <h1 className="py-4 text-center">Error 404</h1>
                
            </Container>
        </>
    )
}

export default NotFound