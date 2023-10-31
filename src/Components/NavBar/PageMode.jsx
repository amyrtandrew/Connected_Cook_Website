import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const PageMode = () => {
  return (
   <div>
          <Container>
            <Row>
              <Col className='bg-primary' xs={{span: 5, order: 1}}>
              Explore
              </Col>
              <Col className='bg-info' xs={{span: 5, order: 2}} >
              My Recipes
              </Col>

            </Row>
          </Container>
    </div>
      
  )
}

export default PageMode
