import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample({data:{id,title,thumbnailUrl,fav},fn}:any) {
  return (
    <Card style={{ width: '18rem' }} key={id}>
      <Card.Img variant="top" src={thumbnailUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         Id is {id}
        </Card.Text>
        <Button onClick={()=>fn(id)} variant={fav ? "primary" : "secondary"}>favorite</Button>
      </Card.Body>
    </Card>
  );
}
export default BasicExample