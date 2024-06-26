import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height="220" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          {product.categoryId}
        </Card.Text>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Link to={`/Item/${product.id}`}>
          <Button variant="primary">Comprar</Button>
        </Link>
      </Card.Body>
    </Card>
  );
  

